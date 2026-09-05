#!/usr/bin/env node

/**
 * Cloudinary Media Migration Script for Aluminium Designs
 * 
 * Scans `public/images` and `public/videos`, uploads media to Cloudinary,
 * preserves relative folder structures, and writes a mapping manifest
 * to `cloudinary-manifest.json`.
 * 
 * Usage:
 *   node scripts/upload-to-cloudinary.js [options]
 * 
 * Options:
 *   --dry-run       Preview which files would be uploaded without uploading
 *   --overwrite     Re-upload and overwrite files even if already in manifest
 *   --target=all    Upload both images and videos (default)
 *   --target=images Only upload images
 *   --target=videos Only upload videos
 */

const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

const ROOT_DIR = path.resolve(__dirname, "..");
const MANIFEST_PATH = path.join(ROOT_DIR, "cloudinary-manifest.json");
const CLOUDINARY_FOLDER_PREFIX = "apex-aluminium";

const IMAGE_EXTENSIONS = new Set([".png", ".jpg", ".jpeg", ".webp", ".svg", ".gif", ".ico"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov", ".mkv", ".avi", ".m4v"]);

// Simple .env parser to avoid third-party runtime dependencies
function loadEnv() {
  const envPath = path.join(ROOT_DIR, ".env");
  if (!fs.existsSync(envPath)) return;

  const content = fs.readFileSync(envPath, "utf-8");
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx !== -1) {
      const key = trimmed.slice(0, eqIdx).trim();
      const val = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[key]) {
        process.env[key] = val;
      }
    }
  }
}

loadEnv();

const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || process.env.CLOUDINARY_CLOUD_NAME;
const apiKey = process.env.CLOUDINARY_API_KEY;
const apiSecret = process.env.CLOUDINARY_API_SECRET;

if (!cloudName || !apiKey || !apiSecret) {
  console.error("❌ Error: Missing Cloudinary credentials in environment or .env file.");
  console.error("Required variables:");
  console.error("  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME:", cloudName ? "✓" : "MISSING");
  console.error("  CLOUDINARY_API_KEY:", apiKey ? "✓" : "MISSING");
  console.error("  CLOUDINARY_API_SECRET:", apiSecret ? "✓" : "MISSING");
  process.exit(1);
}

cloudinary.config({
  cloud_name: cloudName,
  api_key: apiKey,
  api_secret: apiSecret,
  secure: true,
});

// Parse command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes("--dry-run");
const isOverwrite = args.includes("--overwrite");
const targetArg = args.find((a) => a.startsWith("--target="));
const target = targetArg ? targetArg.split("=")[1].toLowerCase() : "all";

function getFilesRecursively(dir) {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getFilesRecursively(fullPath));
    } else if (entry.isFile()) {
      files.push(fullPath);
    }
  }
  return files;
}

function loadManifest() {
  if (fs.existsSync(MANIFEST_PATH)) {
    try {
      return JSON.parse(fs.readFileSync(MANIFEST_PATH, "utf-8"));
    } catch {
      return {};
    }
  }
  return {};
}

function saveManifest(manifest) {
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), "utf-8");
}

async function uploadFile(filePath, manifest) {
  const ext = path.extname(filePath).toLowerCase();
  const isImage = IMAGE_EXTENSIONS.has(ext);
  const isVideo = VIDEO_EXTENSIONS.has(ext);

  if (!isImage && !isVideo) {
    return { status: "ignored", reason: "Unsupported extension" };
  }

  // Relative path from public directory (e.g. "/images/hero.png" or "/videos/demo.mp4")
  const publicDir = path.join(ROOT_DIR, "public");
  const relPath = "/" + path.relative(publicDir, filePath).replace(/\\/g, "/");

  // If already in manifest and not overwriting, skip
  if (!isOverwrite && manifest[relPath] && manifest[relPath].secure_url) {
    return {
      status: "cached",
      relPath,
      url: manifest[relPath].secure_url,
      publicId: manifest[relPath].public_id,
    };
  }

  // Determine Cloudinary folder and public_id
  const parsed = path.parse(path.relative(publicDir, filePath));
  const folderParts = parsed.dir.split(path.sep).filter(Boolean);
  const cloudinaryFolder = [CLOUDINARY_FOLDER_PREFIX, ...folderParts].join("/");
  const publicId = `${cloudinaryFolder}/${parsed.name}`;

  if (isDryRun) {
    return {
      status: "dry-run",
      relPath,
      targetPublicId: publicId,
      resourceType: isVideo ? "video" : "image",
    };
  }

  const resourceType = isVideo ? "video" : "image";
  const stat = fs.statSync(filePath);

  const uploadOptions = {
    public_id: publicId,
    resource_type: resourceType,
    overwrite: isOverwrite,
    use_filename: true,
    unique_filename: false,
  };

  const result = await cloudinary.uploader.upload(filePath, uploadOptions);

  manifest[relPath] = {
    public_id: result.public_id,
    secure_url: result.secure_url,
    resource_type: result.resource_type,
    format: result.format,
    bytes: result.bytes || stat.size,
    width: result.width,
    height: result.height,
    duration: result.duration,
    uploaded_at: new Date().toISOString(),
  };

  // Persist manifest after each successful upload
  saveManifest(manifest);

  return {
    status: "uploaded",
    relPath,
    url: result.secure_url,
    publicId: result.public_id,
    bytes: stat.size,
  };
}

async function main() {
  console.log("==================================================");
  console.log("🚀 Cloudinary Media Migration Script");
  console.log("==================================================");
  console.log(`Cloud Name : ${cloudName}`);
  console.log(`Mode       : ${isDryRun ? "DRY-RUN (Simulated)" : "LIVE UPLOAD"}`);
  console.log(`Target     : ${target.toUpperCase()}`);
  console.log(`Overwrite  : ${isOverwrite ? "YES" : "NO (Incremental)"}`);
  console.log(`Manifest   : ${MANIFEST_PATH}`);
  console.log("--------------------------------------------------\n");

  const manifest = loadManifest();

  let filesToProcess = [];

  if (target === "all" || target === "images") {
    const imagesDir = path.join(ROOT_DIR, "public", "images");
    filesToProcess = filesToProcess.concat(getFilesRecursively(imagesDir));
  }

  if (target === "all" || target === "videos") {
    const videosDir = path.join(ROOT_DIR, "public", "videos");
    filesToProcess = filesToProcess.concat(getFilesRecursively(videosDir));
  }

  // Filter out non-media files (e.g. README.md)
  filesToProcess = filesToProcess.filter((f) => {
    const ext = path.extname(f).toLowerCase();
    return IMAGE_EXTENSIONS.has(ext) || VIDEO_EXTENSIONS.has(ext);
  });

  console.log(`Found ${filesToProcess.length} media files to process.\n`);

  let uploadedCount = 0;
  let cachedCount = 0;
  let errorCount = 0;

  for (let i = 0; i < filesToProcess.length; i++) {
    const file = filesToProcess[i];
    const indexStr = `[${i + 1}/${filesToProcess.length}]`;
    const rel = path.relative(path.join(ROOT_DIR, "public"), file).replace(/\\/g, "/");

    try {
      if (isDryRun) {
        console.log(`${indexStr} [DRY-RUN] /${rel}`);
        uploadedCount++;
        continue;
      }

      process.stdout.write(`${indexStr} Uploading /${rel}... `);
      const res = await uploadFile(file, manifest);

      if (res.status === "cached") {
        console.log(`⏭️ Skipped (already in manifest)`);
        cachedCount++;
      } else if (res.status === "uploaded") {
        const kb = Math.round(res.bytes / 1024);
        console.log(`✓ Uploaded (${kb} KB) -> ${res.url}`);
        uploadedCount++;
      }
    } catch (err) {
      console.log(`❌ FAILED: ${err.message}`);
      errorCount++;
    }
  }

  console.log("\n==================================================");
  console.log("📊 Migration Summary");
  console.log("==================================================");
  console.log(`Total Scanned : ${filesToProcess.length}`);
  console.log(`Uploaded      : ${uploadedCount}`);
  console.log(`Already Cached: ${cachedCount}`);
  console.log(`Errors        : ${errorCount}`);
  console.log(`Manifest File : ${path.relative(ROOT_DIR, MANIFEST_PATH)}`);
  console.log("==================================================\n");
}

main().catch((err) => {
  console.error("Fatal error during execution:", err);
  process.exit(1);
});

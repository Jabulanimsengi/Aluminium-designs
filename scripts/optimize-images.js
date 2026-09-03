const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const IMAGES_DIR = path.resolve(__dirname, "../public/images");

function getTargetMaxWidth(filePath) {
  const norm = filePath.toLowerCase();
  if (norm.includes("-thumb.") || norm.includes("thumb_") || norm.includes("\\thumb")) {
    return 480;
  }
  if (norm.includes("card_") || norm.includes("\\cards\\") || norm.includes("/cards/")) {
    return 800;
  }
  if (norm.includes("real_images") || norm.includes("portfolio") || norm.includes("gallery")) {
    return 1200;
  }
  if (norm.includes("-hero.") || norm.includes("hero_") || norm.includes("\\hero\\")) {
    return 1600;
  }
  return 1400;
}

async function optimizeFile(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (![".png", ".jpg", ".jpeg", ".webp"].includes(ext)) {
    return null;
  }

  const stat = fs.statSync(filePath);
  const oldSize = stat.size;

  try {
    const meta = await sharp(filePath).metadata();
    const maxW = getTargetMaxWidth(filePath);

    let pipeline = sharp(filePath);
    if (meta.width && meta.width > maxW) {
      pipeline = pipeline.resize(maxW, null, { withoutEnlargement: true });
    }

    let optimizedBuffer;
    if (ext === ".webp") {
      optimizedBuffer = await pipeline.webp({ quality: 80, effort: 6 }).toBuffer();
    } else if (ext === ".jpg" || ext === ".jpeg") {
      optimizedBuffer = await pipeline.jpeg({ quality: 80, mozjpeg: true }).toBuffer();
    } else if (ext === ".png") {
      optimizedBuffer = await pipeline.png({ quality: 80, compressionLevel: 9, effort: 7 }).toBuffer();
    }

    if (optimizedBuffer && optimizedBuffer.length < oldSize) {
      const tempPath = filePath + ".opt_tmp";
      fs.writeFileSync(tempPath, optimizedBuffer);
      fs.renameSync(tempPath, filePath);
      return {
        file: path.relative(IMAGES_DIR, filePath),
        oldKB: Math.round(oldSize / 1024),
        newKB: Math.round(optimizedBuffer.length / 1024),
        savedKB: Math.round((oldSize - optimizedBuffer.length) / 1024),
        savedPercent: (((oldSize - optimizedBuffer.length) / oldSize) * 100).toFixed(1),
      };
    }
    return {
      file: path.relative(IMAGES_DIR, filePath),
      oldKB: Math.round(oldSize / 1024),
      newKB: Math.round(oldSize / 1024),
      savedKB: 0,
      savedPercent: "0.0",
    };
  } catch (err) {
    console.error("Error optimizing", filePath, err.message);
    return null;
  }
}

async function run() {
  console.log("Scanning", IMAGES_DIR, "for images...");
  const allFiles = fs.readdirSync(IMAGES_DIR, { recursive: true });
  const results = [];

  for (const f of allFiles) {
    const fullPath = path.join(IMAGES_DIR, f);
    if (!fs.statSync(fullPath).isFile()) continue;
    const res = await optimizeFile(fullPath);
    if (res) {
      results.push(res);
      if (res.savedKB > 0) {
        console.log(`✓ ${res.file}: ${res.oldKB}KB -> ${res.newKB}KB (-${res.savedPercent}%)`);
      }
    }
  }

  const totalOldKB = results.reduce((acc, r) => acc + r.oldKB, 0);
  const totalNewKB = results.reduce((acc, r) => acc + r.newKB, 0);
  const totalSavedKB = totalOldKB - totalNewKB;

  console.log("\n==========================================");
  console.log(`Total images processed: ${results.length}`);
  console.log(`Original total size: ${(totalOldKB / 1024).toFixed(2)} MB`);
  console.log(`Optimized total size: ${(totalNewKB / 1024).toFixed(2)} MB`);
  console.log(`Total savings: ${(totalSavedKB / 1024).toFixed(2)} MB (-${(((totalOldKB - totalNewKB) / totalOldKB) * 100).toFixed(1)}%)`);
  console.log("==========================================\n");
}

run();

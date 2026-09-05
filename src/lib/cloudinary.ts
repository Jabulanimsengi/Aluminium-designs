import manifest from "../../cloudinary-manifest.json";

interface ManifestItem {
  public_id: string;
  secure_url: string;
  resource_type: string;
  format?: string;
  bytes?: number;
  width?: number;
  height?: number;
  duration?: number;
}

const mediaManifest: Record<string, ManifestItem> = manifest as Record<string, ManifestItem>;

/**
 * Resolves a local media path (e.g. `/images/...` or `/videos/...`)
 * to its optimized Cloudinary CDN URL. Falls back to original path if not found.
 */
export function getCloudinaryUrl(localPath: string): string {
  if (!localPath) return localPath;
  if (localPath.startsWith("http://") || localPath.startsWith("https://")) {
    return localPath;
  }
  const item = mediaManifest[localPath];
  return item?.secure_url || localPath;
}

export { mediaManifest };

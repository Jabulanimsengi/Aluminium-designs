import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { IndexNowService } from '../services/indexNowService';

export class IndexNowKeyGenerator {
  /**
   * Generates a 32-character random hex string suitable for IndexNow.
   */
  public static generateRandomKey(): string {
    return crypto.randomBytes(16).toString('hex');
  }

  /**
   * Writes the IndexNow verification text file to target directories.
   */
  public static writeKeyFile(
    outputDirs: string[] = ['public', '.'],
    key: string = IndexNowService.DEFAULT_KEY
  ): { writtenFiles: string[] } {
    const writtenFiles: string[] = [];

    for (const dir of outputDirs) {
      const resolvedDir = path.isAbsolute(dir) ? dir : path.resolve(process.cwd(), dir);

      if (!fs.existsSync(resolvedDir)) {
        fs.mkdirSync(resolvedDir, { recursive: true });
      }

      const filePath = path.join(resolvedDir, `${key}.txt`);
      fs.writeFileSync(filePath, key.trim(), 'utf8');
      writtenFiles.push(filePath);
    }

    return { writtenFiles };
  }
}

// Direct execution CLI support
if (require.main === module || (process.argv[1] && process.argv[1].includes('indexNowKeyGenerator'))) {
  const customKey = process.env.INDEXNOW_KEY || IndexNowService.DEFAULT_KEY;
  const result = IndexNowKeyGenerator.writeKeyFile(['public', '.'], customKey);
  console.log(`[IndexNow] Key verification file generated for key: ${customKey}`);
  result.writtenFiles.forEach(f => console.log(`  ✓ Written to: ${f}`));
}

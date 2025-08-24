import * as fs from "node:fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const IMAGE_DIR = path.join(__dirname, "../public");
const exts = [".png", ".jpg", ".jpeg"];

async function walk(dir, callback) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const filepath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      await walk(filepath, callback);
    } else {
      await callback(filepath);
    }
  }
}

async function optimizeImages() {
  try {
    await walk(IMAGE_DIR, async (filepath) => {
      const ext = path.extname(filepath).toLowerCase();
      if (exts.includes(ext)) {
        try {
          const outPath = filepath;
          const tempPath = outPath + ".opt";

          await sharp(filepath)
            .toFormat(ext === ".png" ? "png" : "jpeg", { quality: 80 })
            .toFile(tempPath);

          await fs.rename(tempPath, outPath);
          console.log("Optimized:", filepath);
        } catch (err) {
          console.error("Error optimizing", filepath, err);
        }
      }
    });
    console.log("Image optimization completed!");
  } catch (err) {
    console.error("Error during image optimization:", err);
  }
}

optimizeImages();

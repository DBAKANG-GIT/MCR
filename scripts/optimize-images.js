import * as fs from "node:fs/promises";
import path from "path"; // eslint-disable-next-line @typescript-eslint/no-require-imports
import sharp from "sharp"; // eslint-disable-line @typescript-eslint/no-require-imports
const IMAGE_DIR = path.join(__dirname, "../public");
const exts = [".png", ".jpg", ".jpeg"];

function walk(dir, callback) {
  fs.readdirSync(dir).forEach((file) => {
    const filepath = path.join(dir, file);
    if (fs.statSync(filepath).isDirectory()) {
      walk(filepath, callback);
    } else {
      callback(filepath);
    }
  });
}

walk(IMAGE_DIR, (filepath) => {
  const ext = path.extname(filepath).toLowerCase();
  if (exts.includes(ext)) {
    const outPath = filepath;
    sharp(filepath)
      .toFormat(ext === ".png" ? "png" : "jpeg", { quality: 80 })
      .toFile(outPath + ".opt", (err) => {
        if (!err) {
          fs.renameSync(outPath + ".opt", outPath);
          console.log("Optimized:", outPath);
        } else {
          console.error("Error optimizing", outPath, err);
        }
      });
  }
});

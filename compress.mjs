import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = './public/frames';
const outputDir = './public/frames_optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const files = fs.readdirSync(inputDir).filter(f => f.endsWith('.png'));

console.log(`Starting compression of ${files.length} frames...`);

let completed = 0;

// Compress and convert to WEBP
files.forEach(file => {
  const newFilename = file.replace('.png', '.webp');
  
  sharp(path.join(inputDir, file))
    .resize(1280) // Downscale width to 720p HD ratio
    .webp({ quality: 60 }) // High compression WebP
    .toFile(path.join(outputDir, newFilename))
    .then(() => {
      completed++;
      if (completed % 50 === 0 || completed === files.length) {
         console.log(`Completed ${completed}/${files.length} frames`);
      }
    })
    .catch(err => console.error(`Error on ${file}:`, err));
});

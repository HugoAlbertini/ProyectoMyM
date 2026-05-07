import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

async function convertToWebp() {
  try {
    const files = fs.readdirSync(publicDir);
    const pngFiles = files.filter(file => file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg'));

    console.log(`Found ${pngFiles.length} images to convert to WebP...`);

    for (const file of pngFiles) {
      const inputPath = path.join(publicDir, file);
      const outputName = file.replace(/\.(png|jpg|jpeg)$/i, '.webp');
      const outputPath = path.join(publicDir, outputName);

      await sharp(inputPath)
        .webp({ quality: 80, effort: 6 })
        .toFile(outputPath);

      console.log(`✅ Converted ${file} -> ${outputName}`);
      
      // Delete original file
      fs.unlinkSync(inputPath);
      console.log(`🗑️ Deleted original ${file}`);
    }

    console.log('🎉 All images converted successfully!');
  } catch (error) {
    console.error('Error converting images:', error);
  }
}

convertToWebp();

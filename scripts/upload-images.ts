import { v2 as cloudinary } from 'cloudinary';
import * as path from 'path';
import * as fs from 'fs/promises';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dr5ts47zf',
  api_key: '153946612626758',
  api_secret: '9ryUrc3_82MkaMzxppcwEMa5bvM'
});

async function uploadImage(imagePath: string, publicId: string) {
  try {
    // Verify file exists
    try {
      await fs.access(imagePath);
      console.log(`✓ File exists: ${imagePath}`);
    } catch {
      throw new Error(`File not found: ${imagePath}`);
    }

    // Get file stats
    const stats = await fs.stat(imagePath);
    console.log(`📊 File size: ${(stats.size / 1024 / 1024).toFixed(2)}MB`);

    // Read file content
    const fileContent = await fs.readFile(imagePath);
    console.log(`📄 File content length: ${fileContent.length} bytes`);

    // Upload to Cloudinary
    console.log(`⬆️ Uploading to Cloudinary...`);
    const result = await cloudinary.uploader.upload(imagePath, {
      public_id: publicId,
      folder: 'labels',
      resource_type: 'auto',
      overwrite: true
    });

    console.log(`✅ Upload successful:`);
    console.log(`   Public ID: ${result.public_id}`);
    console.log(`   URL: ${result.secure_url}`);
    console.log(`   Format: ${result.format}`);
    console.log(`   Size: ${result.bytes} bytes`);
    
    return result;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Upload failed:`, error.message);
    }
    throw error;
  }
}

async function uploadSampleImages() {
  const samplesDir = path.resolve(__dirname, '..', 'public', 'samples');
  console.log(`📂 Samples directory: ${samplesDir}`);

  try {
    // Verify directory exists
    try {
      await fs.access(samplesDir);
      console.log(`✓ Directory exists`);
    } catch {
      console.log(`Creating directory...`);
      await fs.mkdir(samplesDir, { recursive: true });
    }

    // List directory contents
    const files = await fs.readdir(samplesDir);
    console.log(`📑 Files in directory:`, files);

    if (files.length === 0) {
      throw new Error(`No files found in ${samplesDir}`);
    }

    // Upload each image
    for (const file of files) {
      if (file.endsWith('.jpg')) {
        const imagePath = path.join(samplesDir, file);
        const publicId = path.basename(file, '.jpg');
        await uploadImage(imagePath, publicId);
      }
    }

  } catch (error) {
    if (error instanceof Error) {
      console.error(`❌ Process failed:`, error.message);
    }
    throw error;
  }
}

// Run the process
console.log('🚀 Starting upload process...');
uploadSampleImages()
  .then(() => {
    console.log('✨ Upload process completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  });
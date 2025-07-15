const sharp = require('sharp');
const fs = require('node:fs');

async function createMultipleFavicons () {
  try {
    const svgBuffer = fs.readFileSync('./public/favicon.svg');

    // Create different PNG sizes for better browser support
    const sizes = [16, 32, 48, 64, 96, 128, 180, 192, 512];
    for (const size of sizes) {
      const pngBuffer = await sharp(svgBuffer)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .png()
        .toBuffer();

      fs.writeFileSync(`./public/favicon-${size}x${size}.png`, pngBuffer);
      console.log(`✅ Created favicon-${size}x${size}.png`);
    }

    // Create Apple touch icon (180x180)
    const appleTouchIcon = await sharp(svgBuffer)
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    fs.writeFileSync('./public/apple-touch-icon.png', appleTouchIcon);
    console.log('✅ Created apple-touch-icon.png');

    console.log('\n🎉 All favicon files created successfully!');
  } catch (error) {
    console.error('❌ Error creating favicons:', error);
  }
}

createMultipleFavicons();

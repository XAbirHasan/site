const sharp = require('sharp');
const fs = require('node:fs');

async function convertSvgToIco () {
  try {
    const svgBuffer = fs.readFileSync('./public/favicon.svg');

    // Create a high-quality 32x32 PNG for the ICO file
    const icoBuffer = await sharp(svgBuffer)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    fs.writeFileSync('./public/favicon.ico', icoBuffer);
    console.log('✅ Successfully converted SVG to ICO with Sharp');
    console.log('📁 Created: ./public/favicon.ico');
  } catch (error) {
    console.error('❌ Error converting SVG to ICO:', error);
  }
}

convertSvgToIco();

const fs = require('fs');
const content = fs.readFileSync('REPORTE-MENSUAL-SEPTIEMBRE-2026-ESTIMES-CAFE.html', 'utf8');

const regex = /src=["']\.\/(report-assets\/[^"']+)["']/g;
let match;
console.log('Images in HTML:');
while ((match = regex.exec(content)) !== null) {
  const file = match[1];
  const exists = fs.existsSync(file);
  const size = exists ? fs.statSync(file).size : 0;
  console.log(`- ${file}: ${exists ? 'EXISTS (' + size + ' bytes)' : 'MISSING'}`);
}

const fs = require('fs');
const s = 'C:/Users/Albin Rodriguez/Pictures/Screenshots/';

// 1. "brunch near me" -> 144845.png
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 144845.png', 'report-assets/geogrid-brunch-near-me-3pack.png');

// 2. "catering brunch near me" (Local 3-Pack) -> 163006.png
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 163006.png', 'report-assets/geogrid-catering-brunch-3pack.png');

// 3. "catering lunch near me" (Google Maps) -> 162926.png
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 162926.png', 'report-assets/geogrid-catering-lunch-maps.png');

// 4. "lunch near me" (Local 3-Pack) -> 144905.png
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 144905.png', 'report-assets/geogrid-lunch-near-me-3pack.png');

console.log('Geo-Grid assets updated:');
['geogrid-brunch-near-me-3pack.png', 'geogrid-catering-brunch-3pack.png', 'geogrid-catering-lunch-maps.png', 'geogrid-lunch-near-me-3pack.png'].forEach(f => {
  console.log(f, fs.statSync('report-assets/' + f).size, 'bytes');
});

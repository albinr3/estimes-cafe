const fs = require('fs');
const s = 'C:/Users/Albin Rodriguez/Pictures/Screenshots/';

// GBP native performance charts (112 calls, 264 directions, 383 website clicks)
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 140214.png', 'report-assets/gbp-calls-september.png');
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 140250.png', 'report-assets/gbp-directions-september.png');
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 140331.png', 'report-assets/gbp-website-clicks-september.png');

// Actual Geo-Grid satellite scans
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 144808.png', 'report-assets/geogrid-brunch-near-me-3pack.png');
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 163006.png', 'report-assets/geogrid-catering-brunch-3pack.png');
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 162926.png', 'report-assets/geogrid-catering-lunch-maps.png');
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 144905.png', 'report-assets/geogrid-lunch-near-me-3pack.png');
fs.copyFileSync(s + 'Captura de pantalla 2026-10-17 162955.png', 'report-assets/geogrid-catering-brunch-maps.png');

console.log('All assets copied correctly:');
fs.readdirSync('report-assets').forEach(f => {
  const stat = fs.statSync('report-assets/' + f);
  console.log(f, stat.size, 'bytes');
});

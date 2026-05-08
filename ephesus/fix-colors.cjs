const fs = require('fs');

let content = fs.readFileSync('src/App.tsx', 'utf-8');

// Replace standard colors with our adaptive variables
content = content.replace(/text-white/g, 'text-content-main');
content = content.replace(/border-white\/10/g, 'border-border-medium');
content = content.replace(/border-white\/5/g, 'border-border-subtle');
content = content.replace(/border-white\/20/g, 'border-border-medium');
content = content.replace(/bg-white\/5/g, 'bg-bg-subtle');
content = content.replace(/bg-white\/10/g, 'bg-bg-medium');
content = content.replace(/bg-white\/40/g, 'bg-border-medium');
content = content.replace(/text-\[#EAECEF\]/g, 'text-content-main');
content = content.replace(/text-white\/30/g, 'text-content-main/30');

// Save back
fs.writeFileSync('src/App.tsx', content);
console.log('Colors replaced successfully.');

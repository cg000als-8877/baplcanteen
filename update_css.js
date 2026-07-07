const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// Container max-width
css = css.replace(/max-width: 1200px;/g, 'max-width: 1360px;');

// Section spacing
css = css.replace(/\.section-container \{\s*margin-bottom: 60px;/g, '.section-container {\n    margin-bottom: 120px;\n    padding: 100px 0;');

// Update card hover transform
const cards = ['.summary-card:hover {', '.menu-card:hover {', '.member-card:hover {', '.cost-card:hover {'];
cards.forEach(c => {
    css = css.replace(c, c + '\n    transform: translateY(-6px) scale(1.01);\n    transition: transform 350ms ease;');
});
// Remove old transform translateY(-5px) if exists
css = css.replace(/transform: translateY\(-5px\);/g, '');
css = css.replace(/transform: translateY\(-2px\);/g, '');

// CTA button glow
css = css.replace(/\.cta-button:hover \{([\s\S]*?)\}/, `.cta-button:hover {
    background-color: var(--primary-hover);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(34, 197, 94, 0.3);
    filter: brightness(1.1);
}`);

// Images 
const imgCSS = `
.frame-img {
    border-radius: 24px;
    box-shadow: var(--shadow-soft);
    transition: transform 350ms ease;
}
.photo-frame:hover .frame-img {
    transform: scale(1.02);
}
`;
if (!css.includes('.frame-img {')) {
    css += imgCSS;
}

// Table modernization (specifically the modal details table)
const tableCSS = `
table {
    border-collapse: collapse;
    width: 100%;
    margin-top: 10px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-soft);
}
th, td {
    padding: 12px 16px;
    text-align: left;
    border-bottom: 1px solid var(--border);
    color: var(--text-main);
    background: rgba(255, 255, 255, 0.04);
}
th {
    background: rgba(255, 255, 255, 0.1);
    font-weight: 600;
}
tr:nth-child(even) td {
    background: rgba(255, 255, 255, 0.02);
}
tr:hover td {
    background: rgba(255, 255, 255, 0.08);
}
`;
if (!css.includes('table {')) {
    css += tableCSS;
}

fs.writeFileSync('styles.css', css);
console.log('Styles updated with layout, hover effects, and tables!');

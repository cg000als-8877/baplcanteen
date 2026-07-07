const fs = require('fs');
let css = fs.readFileSync('styles.css', 'utf8');

// 1. Force mobile grid to 2 columns and remove the flex-row layout of member cards
const oldGridCSS = `.members-grid {
        gap: 12px;
    }
    .member-card {
        padding: 12px 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        text-align: left;
    }
    .member-card .name {
        margin-bottom: 0;
        font-size: 1rem;
    }
    .member-card .role {
        font-size: 0.8rem;
        text-align: right;
    }`;

const newGridCSS = `.members-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
    .member-card {
        padding: 12px 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .member-card .name {
        margin-bottom: 2px;
        font-size: 0.85rem;
    }
    .member-card .role {
        font-size: 0.65rem;
        text-align: center;
    }`;

// 2. Remove the mobile-collapsed CSS
css = css.replace(/\.members-grid\.mobile-collapsed \.member-card:nth-child\(n\+7\) \{[\s\S]*?\}/, '');

// 3. Hide the toggle button permanently on mobile
css = css.replace(/\.members-toggle-btn \{[\s\S]*?display: flex;[\s\S]*?\}/, '.members-toggle-btn { display: none !important; }');

if (css.includes('justify-content: space-between;')) {
    css = css.replace(oldGridCSS, newGridCSS);
} else {
    console.log("Could not find the exact oldGridCSS block.");
}

fs.writeFileSync('styles.css', css);
console.log('Mobile member list updated to 2 columns.');

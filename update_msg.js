const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const regex = /<div id="complain-messages"[^>]*>[\s\S]*?<\/div>\s*<\/div>/;
const newHtml = `<div id="complain-messages" style="display: none;">
                <div class="complain-msg-bn" style="font-family: 'Noto Serif Bengali', serif; line-height: 1.6; font-size: calc(0.95rem + 2px); text-align: center; color: var(--text-main);">অভিযোগ বক্সে কিছু লেখার আগে বর্তমান বাজারদর আর আমাদের বাজেটটা একটু মিলিয়ে দেখুন। ১২০০ টাকায় ২৬ দিন মানে এক বেলায় মাত্র ৪৬ টাকা! এই টাকায় আজকাল বাইরে এক বেলা সাধারণ খাবারও পাওয়া যায় না। তাই খুঁতখুঁতে স্বভাব বাদ দিয়ে, আমরা যা পাচ্ছি তার জন্য শুকরিয়া আদায় করে 'আলহামদুলিল্লাহ' বলি।</div>
            </div>`;

html = html.replace(regex, newHtml);
fs.writeFileSync('index.html', html, 'utf8');
console.log('Done!');

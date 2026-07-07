const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const anchor = html.indexOf('<section class="sourcing-agent-section reveal" id="sourcing-agent">');
if (anchor === -1) {
    console.log("Could not find sourcing-agent");
    process.exit(1);
}

const beforeAnchor = html.substring(0, anchor);

const replacement = `<section class="sourcing-agent-section reveal" id="sourcing-agent">
            <h2 class="section-title">Product Sourcing Agent</h2>
            <div class="sourcing-text-box">
                <p id="sourcing-text">কৃতজ্ঞতা সেই মানুষটির প্রতি, যিনি প্রতিদিন পায়ে হেঁটে আমাদের জন্য বাজেটের মধ্যে বাজারের সেরা পণ্যগুলো খুঁজে এনে দেন। ধন্যবাদ শিশির দাদা! <span>Shishir Bond 007 😎</span></p>
            </div>
            
            <div class="photo-slider-container">
                <div class="photo-grid">
                    <div class="photo-frame"><img src="assets/five.jpg" alt="Sourcing Image 5" class="frame-img"></div>
                    <div class="photo-frame"><img src="assets/four.jpg" alt="Sourcing Image 4" class="frame-img"></div>
                    <div class="photo-frame"><img src="assets/three.jpg" alt="Sourcing Image 3" class="frame-img"></div>
                    <div class="photo-frame"><img src="assets/two.jpg" alt="Sourcing Image 2" class="frame-img"></div>
                    <div class="photo-frame"><img src="assets/one.jpg" alt="Sourcing Image 1" class="frame-img"></div>
                </div>
                <div class="slider-nav mobile-only">
                    <div class="nav-arrow prev-arrow">
                        <i data-lucide="chevron-left"></i>
                    </div>
                    <div class="nav-arrow next-arrow">
                        <i data-lucide="chevron-right"></i>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Desktop Footer -->
    <footer class="footer-container desktop-only">
        <div class="terms-accordion">
            <h2 class="desktop-footer-title section-title">Terms & Conditions</h2>
            <button class="terms-header" id="terms-toggle">
                <span>ক্যান্টিনের শর্তাবলি (Terms & Conditions)</span>
                <i data-lucide="chevron-down" class="terms-icon"></i>
            </button>
            <div class="terms-content" id="terms-content">
                <div class="terms-card">
                    <div class="terms-section">
                        <h3>যোগাযোগ</h3>
                        <p>ক্যান্টিনে নতুন সদস্য হিসেবে যোগদান, যেকোনো তথ্য জানার প্রয়োজন, অথবা খাবারের মান, স্বাদ, স্বাস্থ্যবিধি ও পরিষ্কার-পরিচ্ছন্নতা সম্পর্কিত অভিযোগ বা পরামর্শের জন্য যোগাযোগ করুন:</p>
                        <p class="contact-person"><strong>এমদাদুল হক</strong><br>CAD & Pattern Manager</p>
                    </div>

                    <div class="terms-section">
                        <h3>সদস্যপদ ও মাসিক ফি</h3>
                        <ul>
                            <li>প্রতি সদস্যের মাসিক ফি: ১,২০০ টাকা।</li>
                            <li>সদস্যপদ গ্রহণের জন্য ১ মাসের ফি অগ্রিম পরিশোধ করতে হবে।</li>
                            <li>প্রতি মাসের নির্ধারিত সময়ের মধ্যে অগ্রিম ফি প্রদান করতে হবে।</li>
                        </ul>
                    </div>

                    <div class="terms-section">
                        <h3>অর্থ ফেরত নীতি</h3>
                        <ul>
                            <li>একবার পরিশোধিত অগ্রিম ফি কোনো অবস্থাতেই ফেরতযোগ্য নয়।</li>
                            <li>মাস শেষ হওয়ার আগে ক্যান্টিন ত্যাগ করলে অবশিষ্ট সময়ের জন্য কোনো অর্থ ফেরত দেওয়া হবে না।</li>
                            <li>ব্যক্তিগত কারণে কোনো দিন খাবার গ্রহণ না করলে, অনুপস্থিত থাকলে অথবা মাঝপথে সদস্যপদ বাতিল করলে তার জন্য কোনো অর্থ সমন্বয়, বহন (Carry Forward) বা ফেরত প্রদান করা হবে না।</li>
                        </ul>
                    </div>

                    <div class="terms-section">
                        <h3>খাবারের মান ও স্বাস্থ্যবিধি</h3>
                        <ul>
                            <li>আমরা সর্বোচ্চ মানের খাবার, স্বাস্থ্যবিধি এবং পরিচ্ছন্নতা বজায় রাখতে প্রতিশ্রুতিবদ্ধ।</li>
                        </ul>
                    </div>

                    <div class="terms-section">
                        <h3>অতিরিক্ত নিয়মাবলি</h3>
                        <ul>
                            <li>নির্ধারিত সময়ের মধ্যেই খাবার পরিবেশন করা হবে। দুপুর ১টা থেকে ২টা।</li>
                            <li>প্রয়োজনের অতিরিক্ত খাবার গ্রহণ করে অপচয় করা থেকে বিরত থাকুন।</li>
                            <li>খাবার শেষে নিজের ব্যবহৃত স্থান (টেবিল) পরিষ্কার-পরিচ্ছন্ন রাখুন।</li>
                            <li>ক্যান্টিনের আপু/খালার সঙ্গে সৌজন্যমূলক আচরণ করুন এবং অন্যান্য সদস্যদের প্রতি সম্মান প্রদর্শন করুন।</li>
                            <li>বাজারদর, মৌসুমি পণ্য বা বিশেষ পরিস্থিতির কারণে মেনুতে প্রয়োজনে পরিবর্তন আনা হতে পারে।</li>
                            <li>ক্যান্টিন কর্তৃপক্ষ প্রয়োজন অনুযায়ী এই শর্তাবলি পরিবর্তন বা সংশোধনের অধিকার সংরক্ষণ করে।</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <!-- Mobile Footer -->
    <footer class="footer-new mobile-only">
        <h2 class="footer-title">Terms & Conditions</h2>
        <div class="footer-columns">
            <div class="footer-col">
                <h3>যোগাযোগ</h3>
                <p>ক্যান্টিনে নতুন সদস্য হিসেবে যোগদান, যেকোনো তথ্য জানার প্রয়োজন, অথবা খাবারের মান, স্বাদ, স্বাস্থ্যবিধি ও পরিষ্কার-পরিচ্ছন্নতা সম্পর্কিত অভিযোগ বা পরামর্শের জন্য যোগাযোগ করুন:</p>
                <p class="contact-person"><strong>এমদাদুল হক</strong><br>CAD & Pattern Manager</p>
            </div>
            <div class="footer-col">
                <h3>সদস্যপদ ও মাসিক ফি</h3>
                <ul>
                    <li>প্রতি সদস্যের মাসিক ফি: ১,২০০ টাকা।</li>
                    <li>সদস্যপদ গ্রহণের জন্য ১ মাসের ফি অগ্রিম পরিশোধ করতে হবে।</li>
                    <li>প্রতি মাসের নির্ধারিত সময়ের মধ্যে অগ্রিম ফি প্রদান করতে হবে।</li>
                </ul>
            </div>
            <div class="footer-col">
                <h3>অর্থ ফেরত নীতি</h3>
                <ul>
                    <li>একবার পরিশোধিত অগ্রিম ফি কোনো অবস্থাতেই ফেরতযোগ্য নয়।</li>
                    <li>মাস শেষ হওয়ার আগে ক্যান্টিন ত্যাগ করলে অবশিষ্ট সময়ের জন্য কোনো অর্থ ফেরত দেওয়া হবে না।</li>
                    <li>ব্যক্তিগত কারণে কোনো দিন খাবার গ্রহণ না করলে, অনুপস্থিত থাকলে অথবা মাঝপথে সদস্যপদ বাতিল করলে তার জন্য কোনো অর্থ সমন্বয়, বহন (Carry Forward) বা ফেরত প্রদান করা হবে না।</li>
                </ul>
            </div>
        </div>
    </footer>

    <!-- Cost Detail Modal -->
    <div id="costModal" class="modal">
        <div class="modal-content">
            <span class="modal-close">&times;</span>
            <h3 id="modal-date">Date</h3>
            <div id="modal-details-container">
                <!-- Injected via JS -->
            </div>
        </div>
    </div>

    <!-- Complain Modal -->
    <div id="complain-modal" class="modal">
        <div class="modal-content complain-modal-content">
            <span class="modal-close" id="complain-modal-close">&times;</span>
            <div class="complain-msg-en">Listen up! Before making a fuss about the lunch, check the numbers. 1200 TK for 26 days = 46 TK a meal. Go out and try to buy a decent lunch for 46 TK today—people will literally laugh at you. Things are super expensive right now. We are basically eating for free at this rate. Stop acting so picky and just say 'Alhamdulillah' for what you're getting!</div>
            <div class="complain-msg-bn">ভাই, খাবার নিয়া কম্প্লেইন কইরা লাভ নাই। ১২০০ টাকায় ২৬ দিন মানে এক বেলায় মাত্র ৪৬ টাকা। ৪৬ টাকায় টং দোকানে এখন চা আর প্যাটিস খাওয়া যায় না ঠিকমতো, সেখানে আমরা ভাত খাইতেছি! বাজারের এই অবস্থায় এত কমে খাবার পাওয়াটাই মিরাক্কেল। প্যাঁচাল কলকাতা না পাইড়া যা পাইতেছেন, শুকরিয়া আদায় করেন! জোরে বলেন "আলহামদুলিল্লাহ্"</div>
        </div>
    </div>

    <script src="https://unpkg.com/lucide@latest"></script>
    <script type="module" src="script.js"></script>
</body>
</html>
`;

fs.writeFileSync('index.html', beforeAnchor + replacement);
console.log("Fixed HTML safely!");

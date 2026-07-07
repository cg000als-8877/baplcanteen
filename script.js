const costData = [
    {
        date: "8 June, 2026",
        total: 1470,
        items: [
            { name: "চাউল - ৬ কেজি", amount: 450 },
            { name: "মুরিগ - দেড় কেজি ১ পিস", amount: 240 },
            { name: "ডিম - ১ পিস", amount: 10 },
            { name: "ললিতা আলু ৪ কেজি", amount: 100 },
            { name: "কাঁচা মরিচ - ১৫ টাকা", amount: 20 },
            { name: "পেঁয়াজ - ১ কেজি", amount: 30 },
            { name: "রসুন - ২৫০ গ্রাম", amount: 35 },
            { name: "শুকনা মরিচ - ২০ টাকা", amount: 20 },
            { name: "রাঁধুনি মুরগির মাংসের মসলা - ২ প্যাকেট", amount: 40 },
            { name: "মরিচের গুঁড়া - ২৫০ গ্রাম", amount: 130 },
            { name: "হলুদের গুঁড়া - ১০০ গ্রাম", amount: 45 },
            { name: "লবন - ১ কেজি প্যাকেট", amount: 40 },
            { name: "মসুর ডাল - ২৫০ গ্রাম", amount: 25 },
            { name: "সয়াবিন তেল - ১ লিটার", amount: 200 },
            { name: "তেজপাতা - ২০ টাকা", amount: 20 },
            { name: "ভিম সাবান - ১ পিস", amount: 35 },
            { name: "রিকশা ভাড়া - ৩০ টাকা", amount: 30 }
        ]
    },
    {
        date: "10 June, 2026",
        total: 215,
        items: [
            { name: "ধনে পাতা - ২০ টাকা", amount: 20 },
            { name: "সরিষার তেল - 250 ml", amount: 85 },
            { name: "ফল/শসা - ২ কেজি", amount: 80 },
            { name: "সাবান mini size - ২ পিস", amount: 30 }
        ]
    },
    {
        date: "11 June, 2026",
        total: 1285,
        items: [
            { name: "চাউল - ৫ কেজি", amount: 375 },
            { name: "আলু - ২ কেজি", amount: 50 },
            { name: "কাঁকরোল - ১ কেজি", amount: 30 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 },
            { name: "কাঁচা মরিচ - ১০ টাকা", amount: 10 },
            { name: "লেবু - ১টা", amount: 5 },
            { name: "টমেটো - ৫০০ গ্রাম", amount: 25 },
            { name: "ডিম - ১৪ টা", amount: 140 },
            { name: "রাঁধুনি মাছের মসলা মিনি প্যাক - ২টা", amount: 40 },
            { name: "মাছ (তেলাপিয়া, রুই)", amount: 600 }
        ]
    },
    {
        date: "13 June, 2026",
        total: 330,
        items: [
            { name: "সয়াবিন তেল - ১ লিটার", amount: 205 },
            { name: "পেঁয়াজ - ১ কেজি", amount: 30 },
            { name: "আলু - ১ কেজি", amount: 25 },
            { name: "পেঁপে - ১.৫ কেজি", amount: 50 },
            { name: "কাঁচা মরিচ - ১০ টাকা", amount: 10 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 }
        ]
    },
    {
        date: "14 June, 2026",
        total: 520,
        items: [
            { name: "চাউল - ৫ কেজি", amount: 375 },
            { name: "মসুর ডাল - ২৫০ গ্রাম", amount: 25 },
            { name: "আলু - ১.৫ কেজি", amount: 40 },
            { name: "বরবটি - ১ কেজি", amount: 30 },
            { name: "গাজর - আধা কেজি", amount: 50 }
        ]
    },
    {
        date: "15 June, 2026",
        total: 290,
        items: [
            { name: "মুরগী - ১০০০ গ্রাম", amount: 210 },
            { name: "লাউ - ২ কেজি", amount: 60 },
            { name: "ডিম ২টা", amount: 20 }
        ]
    },
    {
        date: "16 June, 2026",
        total: 412,
        items: [
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "আলু - ২ কেজি", amount: 50 },
            { name: "মসুর ডাল - ২৫০ গ্রাম", amount: 25 },
            { name: "শসা/ফল - ২.৫ কেজি", amount: 100 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 },
            { name: "কাঁচা মরিচ - ১০ টাকা", amount: 10 },
            { name: "পেঁয়াজ - ১ কেজি", amount: 30 }
        ]
    },
    {
        date: "17 June, 2026",
        total: 600,
        items: [
            { name: "চাউল - ৫ কেজি", amount: 375 },
            { name: "আলু - ২ কেজি", amount: 50 },
            { name: "পুঁই শাক - ২ কেজি", amount: 90 },
            { name: "ডাল - ২৫০ গ্রাম", amount: 25 },
            { name: "লবণ - ১ কেজি", amount: 40 },
            { name: "কাঁচা মরিচ - ২০ টাকা", amount: 20 }
        ]
    },
    {
        date: "18 June, 2026",
        total: 365,
        items: [
            { name: "তেল - ১ লিটার", amount: 205 },
            { name: "পেঁয়াজ - ১ কেজি", amount: 30 },
            { name: "টমেটো - ৫০০ গ্রাম", amount: 40 },
            { name: "আলু - ২ কেজি", amount: 50 },
            { name: "ডিম - ১ টা", amount: 10 },
            { name: "শুকনা মরিচ - ২০ টাকা", amount: 20 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 }
        ]
    },
    {
        date: "19 June, 2026",
        total: 497,
        items: [
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "ডিম - ১৫ টা", amount: 150 },
            { name: "হলুদ ১২৫ গ্রাম", amount: 50 },
            { name: "লাউ/কদু ২.৫ কেজি", amount: 80 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 },
            { name: "মুরগীর মসলা", amount: 20 }
        ]
    },
    {
        date: "20 June, 2026",
        total: 552,
        items: [
            { name: "তেল - ১ লিটার", amount: 200 },
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "ডাল - ২৫০ গ্রাম", amount: 25 },
            { name: "আলু - ১ কেজি", amount: 25 },
            { name: "চিচিঙ্গা - ২ কেজি", amount: 60 },
            { name: "গাজর - ৫০০ গ্রাম", amount: 35 },
            { name: "কাঁচা মরিচ - ১০ টাকা", amount: 10 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 }
        ]
    },
    {
        date: "21 June, 2026",
        total: 582,
        items: [
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "ডিম - ২ টা", amount: 20 },
            { name: "পেঁয়াজ - ১ কেজি", amount: 30 },
            { name: "রসুন - ৫০০ গ্রাম", amount: 35 },
            { name: "মুরগি - 1.300", amount: 210 },
            { name: "রাঁধুনি মুরগি মশলা ২", amount: 40 },
            { name: "আলু - ২ কেজি", amount: 50 },
            { name: "ধনে পাতা - 10", amount: 10 }
        ]
    },
    {
        date: "22 June, 2026",
        total: 422,
        items: [
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "আলু - ২ কেজি", amount: 50 },
            { name: "মসুর ডাল - ২৫০ গ্রাম", amount: 25 },
            { name: "শসা/ফল - ২.৫ কেজি", amount: 100 },
            { name: "সরিষার তেল", amount: 30 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 },
            { name: "কাঁচা মরিচ - ২০ টাকা", amount: 20 }
        ]
    },
    {
        date: "23 June, 2026",
        total: 802,
        items: [
            { name: "মাছ", amount: 390 },
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "মরিচের গুঁড়া - ২৫০ গ্রাম", amount: 130 },
            { name: "রাঁধুনি মাছের মসলা মিনি - ১ টি", amount: 20 },
            { name: "টমেটো - ২৫০ গ্রাম", amount: 15 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 },
            { name: "লাউ/কদু - ২ কেজি", amount: 50 }
        ]
    },
    {
        date: "24 June, 2026",
        total: 492,
        items: [
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "শুকনা মরিচ - ৫০ গ্রাম", amount: 25 },
            { name: "পেঁয়াজ - ১ কেজি", amount: 30 },
            { name: "কাঁচা মরিচ - ১০ টাকা", amount: 10 },
            { name: "নালিশা শাক - ৪ আঁটি", amount: 80 },
            { name: "ডাল - ২৫০ গ্রাম", amount: 25 },
            { name: "সরিষার তেল ২৫০ গ্রাম", amount: 85 },
            { name: "আলু - ২ কেজি", amount: 50 }
        ]
    },
    {
        date: "25 June, 2026",
        total: 487,
        items: [
            { name: "চাউল ২.৫ কেজি", amount: 187 },
            { name: "লবন ১ কেজি প্যাকেট", amount: 40 },
            { name: "ডিম ১৫ টা", amount: 150 },
            { name: "টমেটো ২৫০ গ্রাম", amount: 15 },
            { name: "ধনে পাতা ১০ টাকা", amount: 10 },
            { name: "আলু ১ কেজি", amount: 25 },
            { name: "পেঁপে ২ কেজি", amount: 50 },
            { name: "কাঁচা মরিচ ১০ টাকা", amount: 10 }
        ]
    },
    {
        date: "27 June, 2026",
        total: 755,
        items: [
            { name: "মুরগি - ১৪০০ গ্রাম", amount: 238 },
            { name: "ডিম - ২ টা", amount: 20 },
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "রাঁধুনি মুরগি মশলা মিনি - ১ টা", amount: 20 },
            { name: "আলু - ২ কেজি", amount: 50 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 },
            { name: "পেঁয়াজ ১ কেজি", amount: 30 },
            { name: "তেল ১ লিটার", amount: 200 }
        ]
    },
    {
        date: "28 June, 2026",
        total: 392,
        items: [
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "আলু - ২ কেজি", amount: 50 },
            { name: "মসুর ডাল - ২৫০ গ্রাম", amount: 25 },
            { name: "শসা/ফল - সাড়ে ৩ কেজি", amount: 100 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 },
            { name: "কাঁচা মরিচ - ২০ টাকা", amount: 20 }
        ]
    },
    {
        date: "29 June, 2026",
        total: 352,
        items: [
            { name: "চাউল - ২.৫ কেজি", amount: 187 },
            { name: "ডাল - ২৫০ গ্রাম", amount: 25 },
            { name: "আলু - ১ কেজি", amount: 25 },
            { name: "চিচিঙ্গা - ২ কেজি", amount: 60 },
            { name: "গাজর - ৫০০ গ্রাম", amount: 35 },
            { name: "কাঁচা মরিচ - ১০ টাকা", amount: 10 },
            { name: "ধনে পাতা - ১০ টাকা", amount: 10 }
        ]
    },
    {
        date: "30 June, 2026",
        total: 597,
        items: [
            { name: "চাউল ২.৫ কেজি", amount: 187 },
            { name: "মুরগি ১ কেজি ৩০০ গ্রাম", amount: 220 },
            { name: "ডিম ২ টা", amount: 20 },
            { name: "মুরগির মশলা মিনি ১ টা", amount: 20 },
            { name: "পেঁয়াজ ১ কেজি", amount: 30 },
            { name: "টমেটো ৫০০ গ্রাম", amount: 30 },
            { name: "আলু ২ কেজি", amount: 50 },
            { name: "শুকনা মরিচ ২০ টাকা", amount: 20 },
            { name: "ধনে পাতা ২০ টাকা", amount: 20 }
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {

    // (Hamburger menu logic removed as per new tiles layout)


    const costListContainer = document.getElementById('costListContainer');
    const grandTotalEl = document.getElementById('grandTotal');
    let grandTotal = 0;

    costData.forEach((dayData, index) => {
        grandTotal += dayData.total;
        
        const card = document.createElement('div');
        card.className = 'cost-card reveal';
        const delayMultiplier = window.innerWidth <= 768 ? 15 : 50;
        card.style.transitionDelay = (index * delayMultiplier) + 'ms';
        
        const header = document.createElement('div');
        header.className = 'cost-card-header';
        
        const dateSpan = document.createElement('span');
        dateSpan.className = 'cost-date';
        dateSpan.textContent = dayData.date;
        
        const amountDiv = document.createElement('div');
        amountDiv.className = 'cost-amount';
        
        const totalSpan = document.createElement('span');
        totalSpan.textContent = `${dayData.total} Tk`;
        
        const toggleIcon = document.createElement('span');
        toggleIcon.className = 'toggle-icon';
        toggleIcon.textContent = '+';
        
        amountDiv.appendChild(totalSpan);
        amountDiv.appendChild(toggleIcon);
        
        if (index === 0) {
            const floatingNote = document.createElement('div');
            floatingNote.className = 'floating-note';
            floatingNote.id = 'mobile-hint-note';
            amountDiv.appendChild(floatingNote);
            amountDiv.style.position = 'relative';
        }
        
        header.appendChild(dateSpan);
        header.appendChild(amountDiv);
        

        const details = document.createElement('div');
        details.className = 'cost-details';
        
        if (dayData.items.length > 0) {
            const table = document.createElement('div');
            table.className = 'details-table';
            
            dayData.items.forEach(item => {
                const row = document.createElement('div');
                row.className = 'details-row';
                
                const nameSpan = document.createElement('span');
                nameSpan.className = 'item-name';
                nameSpan.textContent = item.name;
                
                const costSpan = document.createElement('span');
                costSpan.className = 'item-cost';
                costSpan.textContent = `${item.amount} Tk`;
                
                row.appendChild(nameSpan);
                row.appendChild(costSpan);
                table.appendChild(row);
            });
            
            // Add total row
            const totalRow = document.createElement('div');
            totalRow.className = 'details-row total-row';
            totalRow.style.marginTop = '4px';
            totalRow.style.paddingTop = '8px';
            totalRow.style.fontWeight = '800';
            totalRow.style.color = 'var(--primary)';
            
            const totalLabel = document.createElement('span');
            totalLabel.className = 'item-name';
            totalLabel.textContent = 'Total';
            
            const totalValue = document.createElement('span');
            totalValue.className = 'item-cost';
            totalValue.textContent = `${dayData.total} Tk`;
            
            totalRow.appendChild(totalLabel);
            totalRow.appendChild(totalValue);
            table.appendChild(totalRow);
            
            details.appendChild(table);
        } else {
            const emptyState = document.createElement('div');
            emptyState.style.padding = '20px 25px';
            emptyState.style.color = 'var(--text-light)';
            emptyState.style.fontStyle = 'italic';
            emptyState.textContent = 'No detailed data available for this date.';
            details.appendChild(emptyState);
        }
        
        card.appendChild(header);
        card.appendChild(details);
        
        // Add toggle/modal functionality
        header.addEventListener('click', () => {
            if (window.innerWidth > 768) {
                // Desktop: Show Modal
                const modal = document.getElementById('costModal');
                const modalDate = document.getElementById('modal-date');
                const modalDetails = document.getElementById('modal-details-container');
                
                modalDate.textContent = `Cost for ${dayData.date}`;
                modalDetails.innerHTML = ''; // Clear previous
                
                // Clone the details to put in modal
                const clonedDetails = details.cloneNode(true);
                clonedDetails.style.display = 'block'; 
                clonedDetails.style.maxHeight = 'none'; 
                clonedDetails.style.background = 'transparent';
                modalDetails.appendChild(clonedDetails);
                
                modal.classList.add('show');
            } else {
                // Mobile: Accordion
                document.querySelectorAll('.cost-card.active').forEach(c => {
                    if (c !== card) c.classList.remove('active');
                });
                
                card.classList.toggle('active');
            }
        });
        
        costListContainer.appendChild(card);
    });
    
    // Update dashboard summary dynamically with count-up targets
    grandTotalEl.textContent = '0';
    grandTotalEl.dataset.target = grandTotal;
    grandTotalEl.classList.add('count-up');

    const grandTotalMobileEl = document.getElementById('grandTotalMobile');
    if (grandTotalMobileEl) {
        grandTotalMobileEl.textContent = '0';
        grandTotalMobileEl.dataset.target = grandTotal;
        grandTotalMobileEl.classList.add('count-up');
    }
    
    const summaryValues = document.querySelectorAll('.summary-value');
    
    // Total members
    summaryValues[0].textContent = '0';
    summaryValues[0].dataset.target = 14;
    summaryValues[0].classList.add('count-up');

    // Total Budget
    summaryValues[1].textContent = '0 Taka';
    summaryValues[1].dataset.target = 16500;
    summaryValues[1].dataset.suffix = ' Taka';
    summaryValues[1].classList.add('count-up');
    
    // Total Collection
    summaryValues[2].textContent = '0 Taka';
    summaryValues[2].dataset.target = grandTotal;
    summaryValues[2].dataset.suffix = ' Taka';
    summaryValues[2].classList.add('count-up');
    
    // Average Per Day
    const operatingDays = 20;
    const avgPerDay = Math.round(grandTotal / operatingDays);
    summaryValues[3].textContent = '0 Taka';
    summaryValues[3].dataset.target = avgPerDay;
    summaryValues[3].dataset.suffix = ' Taka';
    summaryValues[3].classList.add('count-up');
    
    // Operating Days update
    summaryValues[4].textContent = '0';
    summaryValues[4].dataset.target = 20;
    summaryValues[4].classList.add('count-up');
    
    // Remaining Balance
    const totalBudget = 16500;
    const remainingBalance = totalBudget - grandTotal;
    summaryValues[5].textContent = '0 Taka';
    summaryValues[5].dataset.target = remainingBalance;
    summaryValues[5].dataset.suffix = ' Taka';
    summaryValues[5].classList.add('count-up');
});


// Modal Close Logic
const modal = document.getElementById('costModal');
if (modal) {
    const closeBtn = modal.querySelector('.modal-close');
    
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
    });
    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// Aesthetic SaaS Additions
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }

    // Play Duck Sound on Member Click (except Susan)
    const duckSound = document.getElementById('duck-sound');
    const memberCardsList = document.querySelectorAll('.member-card');
    memberCardsList.forEach(card => {
        card.addEventListener('click', () => {
            const nameElement = card.querySelector('.name');
            if (nameElement && !nameElement.textContent.includes('Susan')) {
                if (duckSound) {
                    duckSound.currentTime = 0;
                    duckSound.play().catch(e => console.error("Sound play prevented:", e));
                }
            }
        });
    });

    // Highlight Current Day in Weekly Menu
    const currentDayName = new Date().toLocaleDateString('en-US', { weekday: 'long' });
    const menuCards = document.querySelectorAll('.menu-card');
    menuCards.forEach(card => {
        const dayBadge = card.querySelector('.day-badge');
        if (dayBadge && dayBadge.textContent.trim() === currentDayName) {
            card.classList.add('today-highlight');
        }
    });

    // Scroll Reveal Observer
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    // Count Up Observer
    const countUpObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target, 10);
                const suffix = el.dataset.suffix || '';
                const duration = 2000; // 2 seconds
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const easeOut = 1 - Math.pow(1 - progress, 3);
                    const current = Math.floor(easeOut * target);
                    el.textContent = current.toLocaleString() + suffix;
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        el.textContent = target.toLocaleString() + suffix;
                    }
                };
                window.requestAnimationFrame(step);
                countUpObserver.unobserve(el);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.count-up').forEach(el => countUpObserver.observe(el));

    // Floating Note Observer (Mobile Only)
    const hintNote = document.getElementById('mobile-hint-note');
    if (hintNote) {
        const noteObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    hintNote.classList.add('show');
                    const text = "ক্লিক করে বিস্তারিত হিসাব দেখুন";
                    hintNote.textContent = "";
                    let i = 0;
                    const typeInterval = setInterval(() => {
                        if (i < text.length) {
                            hintNote.textContent += text.charAt(i);
                            i++;
                        } else {
                            clearInterval(typeInterval);
                        }
                    }, 50); // fast typing speed
                    noteObserver.disconnect();
                }
            });
        }, { threshold: 0.5 });
        noteObserver.observe(hintNote.parentElement);
    }

    // Sticky Navbar Glassmorphism
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // Mouse Glow (Desktop only)
    if (window.innerWidth > 768) {
        const glow = document.createElement('div');
        glow.className = 'mouse-glow desktop-only';
        
        glow.style.position = 'fixed';
        glow.style.top = '-300px';
        glow.style.left = '-300px';
        glow.style.width = '600px';
        glow.style.height = '600px';
        glow.style.background = 'radial-gradient(circle, var(--glow-blue) 0%, transparent 60%)';
        glow.style.borderRadius = '50%';
        glow.style.pointerEvents = 'none';
        glow.style.zIndex = '0';
        glow.style.transition = 'transform 0.1s ease-out';
        
        document.body.appendChild(glow);
        
        window.addEventListener('mousemove', (e) => {
            glow.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    }



    // Mobile Photo Grid Navigation
    const prevArrow = document.querySelector('.prev-arrow');
    const nextArrow = document.querySelector('.next-arrow');
    const photoGrid = document.querySelector('.photo-grid');
    if (prevArrow && nextArrow && photoGrid) {
        const getScrollAmount = () => {
            const frame = photoGrid.querySelector('.photo-frame');
            return frame ? frame.clientWidth + 10 : photoGrid.clientWidth * 0.65;
        };
        
        nextArrow.addEventListener('click', () => {
            photoGrid.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
        });
        
        prevArrow.addEventListener('click', () => {
            photoGrid.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
        });
        
        photoGrid.addEventListener('scroll', () => {
            if (photoGrid.scrollLeft <= 5) {
                prevArrow.style.opacity = '0';
                prevArrow.style.pointerEvents = 'none';
            } else {
                prevArrow.style.opacity = '0.9';
                prevArrow.style.pointerEvents = 'auto';
            }
            
            if (photoGrid.scrollLeft + photoGrid.clientWidth >= photoGrid.scrollWidth - 5) {
                nextArrow.style.opacity = '0';
                nextArrow.style.pointerEvents = 'none';
            } else {
                nextArrow.style.opacity = '0.9';
                nextArrow.style.pointerEvents = 'auto';
            }
        });
        
        // Initial state
        prevArrow.style.opacity = '0';
        prevArrow.style.pointerEvents = 'none';
    }

    // James Bond Theme Audio Logic
    let bondAudio = null;
    let stopTimeout = null;

    const playBondMusic = () => {
        if (!bondAudio) {
            bondAudio = new Audio('assets/james_bond.mp3');
        }
        
        // Clear any existing timeout
        if (stopTimeout) clearTimeout(stopTimeout);
        
        // Reset and play at full volume (no fade)
        bondAudio.currentTime = 0;
        bondAudio.volume = 1;
        bondAudio.play().catch(e => console.log("Audio play failed, ensure assets/james_bond.mp3 exists."));

        // Stop music after 15 seconds
        stopTimeout = setTimeout(() => {
            if (bondAudio && !bondAudio.paused) {
                bondAudio.pause();
                bondAudio.currentTime = 0;
            }
        }, 15000);
    };

    // Desktop: play on clicking any photo frame
    document.querySelectorAll('.photo-frame').forEach(frame => {
        frame.addEventListener('click', () => {
            if (window.innerWidth > 768) {
                playBondMusic();
            }
        });
    });

    // Mobile: play on clicking navigation arrows
    if (nextArrow) {
        nextArrow.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                playBondMusic();
            }
        });
    }
    
    if (prevArrow) {
        // prevArrow already has a click listener above for scrolling, 
        // we can safely add another one just for audio
        prevArrow.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                playBondMusic();
            }
        });
    }

    // Terms Accordion Logic
    const termsToggle = document.getElementById('terms-toggle');
    const termsContent = document.getElementById('terms-content');
    const termsAccordion = document.querySelector('.terms-accordion');

    if (termsToggle && termsContent) {
        termsToggle.addEventListener('click', () => {
            termsAccordion.classList.toggle('active');
            if (termsAccordion.classList.contains('active')) {
                termsContent.style.maxHeight = termsContent.scrollHeight + "px";
            } else {
                termsContent.style.maxHeight = "0px";
            }
        });
    }

    // Complain Box Logic
    const complainSubmits = document.querySelectorAll('.complain-submit');
    const complainTextareas = document.querySelectorAll('.complain-textarea');
    const complainModal = document.getElementById('complain-modal');
    const complainModalClose = document.getElementById('complain-modal-close');

    complainSubmits.forEach((submitBtn, index) => {
        submitBtn.addEventListener('click', () => {
            const text = complainTextareas[index].value.trim();
            if (text.length > 0) {
                complainModal.style.display = 'flex';
                complainTextareas[index].value = ''; // clear input
                
                // Loader logic
                const loader = document.getElementById('complain-loader');
                const messages = document.getElementById('complain-messages');
                const closeBtn = document.getElementById('complain-modal-close');
                const loaderTextDisplay = document.getElementById('loader-text-display');
                
                // Random GD Number
                const gdNo = Math.floor(Math.random() * 900) + 100; // 3 digit random number
                if (loaderTextDisplay) {
                    loaderTextDisplay.textContent = `GD no ${gdNo}, Registering Complain...`;
                }
                
                loader.style.display = 'block';
                messages.style.display = 'none';
                closeBtn.style.display = 'none';
                
                const loadingSound = document.getElementById('complain-loading-sound');
                if (loadingSound) {
                    loadingSound.currentTime = 0;
                    loadingSound.play().catch(e => console.error("Sound play prevented:", e));
                }
                
                // Restart animation
                const loaderBar = loader.querySelector('.loader-bar');
                if (loaderBar) {
                    loaderBar.style.animation = 'none';
                    loaderBar.offsetHeight; /* trigger reflow */
                    loaderBar.style.animation = 'loadProgress 5s linear forwards';
                }

                setTimeout(() => {
                    loader.style.display = 'none';
                    messages.style.display = 'block';
                    closeBtn.style.display = 'block';
                    if (loadingSound) {
                        loadingSound.pause();
                        loadingSound.currentTime = 0;
                    }
                    
                    const errorSound = document.getElementById('error-sound');
                    if (errorSound) {
                        errorSound.currentTime = 0;
                        errorSound.play().catch(e => console.error("Sound play prevented:", e));
                    }
                }, 5000);
            } else {
                alert("Please type a complain first.");
            }
        });
    });

    if (complainModalClose) {
        complainModalClose.addEventListener('click', () => {
            complainModal.style.display = 'none';
            const loadingSound = document.getElementById('complain-loading-sound');
            if (loadingSound) {
                loadingSound.pause();
                loadingSound.currentTime = 0;
            }
        });
    }

    // Close complain modal if clicked outside
    window.addEventListener('click', (event) => {
        if (event.target == complainModal) {
            complainModal.style.display = 'none';
            const loadingSound = document.getElementById('complain-loading-sound');
            if (loadingSound) {
                loadingSound.pause();
                loadingSound.currentTime = 0;
            }
        }
    });

    // Members List Mobile Toggle
    const membersToggleBtn = document.getElementById('members-toggle');
    const membersGrid = document.querySelector('.members-grid');
    const toggleNote = document.getElementById('members-toggle-note');
    
    if (membersToggleBtn && membersGrid) {
        // Typing animation for the note
        if (toggleNote && window.innerWidth <= 768) {
            const fullNote = "সবার নাম দেখতে ক্লিক করুন";
            const noteObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        toggleNote.textContent = '';
                        let i = 0;
                        const typeInterval = setInterval(() => {
                            if (i < fullNote.length) {
                                toggleNote.textContent += fullNote.charAt(i);
                                i++;
                            } else {
                                clearInterval(typeInterval);
                            }
                        }, 60); // typing speed
                        noteObserver.disconnect();
                    }
                });
            }, { threshold: 0.5 });
            noteObserver.observe(membersToggleBtn);
        }

        membersToggleBtn.addEventListener('click', () => {
            membersGrid.classList.toggle('mobile-collapsed');
            const toggleCircle = membersToggleBtn.querySelector('.toggle-circle');
            
            if (membersGrid.classList.contains('mobile-collapsed')) {
                toggleNote.textContent = 'সবার নাম দেখতে ক্লিক করুন';
                toggleCircle.innerHTML = '<i data-lucide="chevron-down" class="animated-arrow"></i>';
            } else {
                toggleNote.textContent = 'Show Less';
                toggleCircle.innerHTML = '<i data-lucide="chevron-up" class="animated-arrow"></i>';
            }
            lucide.createIcons();
        });
    }

    // Random flip animation for desktop tiles
    setInterval(() => {
        if (window.innerWidth > 768) {
            const headers = document.querySelectorAll('.cost-card-header');
            if (headers.length > 0) {
                const randomIndex = Math.floor(Math.random() * headers.length);
                const randomHeader = headers[randomIndex];
                
                randomHeader.classList.add('is-flipped');
                
                setTimeout(() => {
                    randomHeader.classList.remove('is-flipped');
                }, 2000); // stay flipped for 2 seconds
            }
        }
    }, 3500); // every 3.5 seconds, a random tile flips
});

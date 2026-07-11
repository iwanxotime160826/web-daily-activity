// Schedule Data Structures
const schedules = {
    regular: [
        {
            time: "04.00 - 05.20",
            title: "Rutinitas Pagi",
            icon: "sun",
            activities: ["Bangun tidur & Meditasi", "Berdoa", "Menyapu", "Mencuci piring & gelas makan malam", "Mandi"],
            image: "assets/morning_routine.jpg",
            startHour: 4, startMin: 0, endHour: 5, endMin: 20
        },
        {
            time: "05.20 - 06.30",
            title: "Persiapan & Berangkat",
            icon: "sun",
            activities: ["Persiapan kuliah / Latihan PKPA", "Berangkat kuliah / lahan PKPA"],
            image: "assets/morning_routine.jpg",
            startHour: 5, startMin: 20, endHour: 6, endMin: 30
        },
        {
            time: "06.30 - 11.40",
            title: "Kuliah Pagi / Lahan PKPA",
            icon: "graduation-cap",
            activities: ["Kuliah Pagi / Lahan PKPA", "Istirahat", "Makan Siang"],
            image: "assets/college_morning.jpg",
            startHour: 6, startMin: 30, endHour: 11, endMin: 40
        },
        {
            time: "13.00 - 16.20",
            title: "Kuliah Sore / Lahan PKPA",
            icon: "book-open",
            activities: ["Kuliah Sore / Lahan PKPA", "Istirahat minum air putih untuk mengembalikan fokus"],
            image: "assets/college_afternoon.jpg",
            startHour: 13, startMin: 0, endHour: 16, endMin: 20
        },
        {
            time: "16.20 - 18.00",
            title: "Sore & Pemulihan",
            icon: "home",
            activities: ["Pulang Kuliah", "Peregangan", "Istirahat", "Mandi"],
            image: "assets/evening_rest.jpg",
            startHour: 16, startMin: 20, endHour: 18, endMin: 0
        },
        {
            time: "18.30 - 02.00",
            title: "Malam & Istirahat",
            icon: "moon",
            activities: ["Membeli makan malam", "Belajar & mempelajari materi", "Tidur malam"],
            image: "assets/night_routine.jpg",
            startHour: 18, startMin: 30, endHour: 2, endMin: 0 // wraps past midnight
        }
    ],
    thursday: [
        {
            time: "04.00 - 05.20",
            title: "Rutinitas Pagi",
            icon: "sun",
            activities: ["Bangun tidur & Meditasi", "Berdoa", "Menyapu", "Mencuci piring & gelas makan malam", "Mandi"],
            image: "assets/morning_routine.jpg",
            startHour: 4, startMin: 0, endHour: 5, endMin: 20
        },
        {
            time: "05.20 - 06.30",
            title: "Persiapan & Berangkat",
            icon: "sun",
            activities: ["Persiapan kuliah / Latihan PKPA", "Berangkat kuliah / lahan PKPA"],
            image: "assets/morning_routine.jpg",
            startHour: 5, startMin: 20, endHour: 6, endMin: 30
        },
        {
            time: "06.30 - 11.40",
            title: "Kuliah Pagi / Lahan PKPA",
            icon: "graduation-cap",
            activities: ["Kuliah Pagi / Lahan PKPA", "Istirahat", "Makan Siang"],
            image: "assets/college_morning.jpg",
            startHour: 6, startMin: 30, endHour: 11, endMin: 40
        },
        {
            time: "13.00 - 16.20",
            title: "Kuliah Sore / Lahan PKPA",
            icon: "book-open",
            activities: ["Kuliah Sore / Lahan PKPA", "Istirahat minum air putih untuk mengembalikan fokus"],
            image: "assets/college_afternoon.jpg",
            startHour: 13, startMin: 0, endHour: 16, endMin: 20
        },
        {
            time: "16.20 - 18.00",
            title: "Sore & Pemulihan",
            icon: "home",
            activities: ["Pulang Kuliah", "Peregangan", "Istirahat", "Mandi"],
            image: "assets/evening_rest.jpg",
            startHour: 16, startMin: 20, endHour: 18, endMin: 0
        },
        {
            time: "18.30 - 22.00",
            title: "Connect Group (CG)",
            icon: "users",
            activities: ["Membeli makan", "Ibadah CG (Connect Group)", "Persekutuan & Sharing"],
            image: "assets/evening_rest.jpg",
            startHour: 18, startMin: 30, endHour: 22, endMin: 0
        },
        {
            time: "22.00 - 02.00",
            title: "Malam & Istirahat",
            icon: "moon",
            activities: ["Mempelajari materi singkat", "Tidur malam"],
            image: "assets/night_routine.jpg",
            startHour: 22, startMin: 0, endHour: 2, endMin: 0 // wraps past midnight
        }
    ],
    sunday: [
        {
            time: "06.00 - 10.00",
            title: "Ibadah Gereja",
            icon: "church",
            activities: ["Mandi pagi", "Persiapan", "Ibadah Gereja Raya"],
            image: "assets/morning_routine.jpg",
            startHour: 6, startMin: 0, endHour: 10, endMin: 0
        },
        {
            time: "10.00 - 13.00",
            title: "Istirahat & Makan",
            icon: "coffee",
            activities: ["Makan siang", "Waktu santai", "Sosialisasi"],
            image: "assets/college_morning.jpg",
            startHour: 10, startMin: 0, endHour: 13, endMin: 0
        },
        {
            time: "13.00 - 18.00",
            title: "Pemulihan & Meditasi",
            icon: "heart",
            activities: ["Peregangan & meditasi mandiri", "Minum air putih", "Persiapan materi perkuliahan"],
            image: "assets/evening_rest.jpg",
            startHour: 13, startMin: 0, endHour: 18, endMin: 0
        },
        {
            time: "18.30 - 02.00",
            title: "Malam & Istirahat",
            icon: "moon",
            activities: ["Membeli makan malam", "Belajar mandiri", "Tidur nyenyak"],
            image: "assets/night_routine.jpg",
            startHour: 18, startMin: 30, endHour: 2, endMin: 0 // wraps past midnight
        }
    ]
};

// Global State
let currentDay = 'regular';
let waterIntake = parseInt(localStorage.getItem('waterIntake') || '0');
const waterTarget = 2000; // 2L in ml
let completedNotes = JSON.parse(localStorage.getItem('completedNotes') || '[false, false, false, false, false]');

// DOM Elements
const timelineContainer = document.getElementById('timelineContainer');
const dayButtons = document.querySelectorAll('.day-btn');
const waterLevel = document.getElementById('waterLevel');
const bottleText = document.getElementById('bottleText');
const addWaterBtn = document.getElementById('addWaterBtn');
const resetWaterBtn = document.getElementById('resetWaterBtn');
const overallProgress = document.getElementById('overallProgress');
const progressText = document.getElementById('progressText');
const noteCheckboxes = document.querySelectorAll('.note-checkbox');
const liveDateEl = document.getElementById('liveDate');

// Infographic Modal Elements
const openInfographicBtn = document.getElementById('openInfographicBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const modalBackdrop = document.getElementById('modalBackdrop');

// Initialize App
function init() {
    updateDateDisplay();
    setupEventListeners();
    setupCheckboxes();
    updateWaterTrackerDisplay();
    renderTimeline();
    updateOverallProgress();
    
    // Auto-detect if today is Thursday or Sunday to set initial active tab
    const now = new Date();
    const dayOfWeek = now.getDay(); // 0 is Sunday, 4 is Thursday
    if (dayOfWeek === 4) {
        setDayTab('thursday');
    } else if (dayOfWeek === 0) {
        setDayTab('sunday');
    } else {
        setDayTab('regular');
    }
    
    // Keep checking current time to update active task indicator every minute
    setInterval(updateActiveTask, 30000);
}

// Format and Display Live Date in Indonesian
function updateDateDisplay() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date();
    liveDateEl.textContent = today.toLocaleDateString('id-ID', options);
}

// Setup Event Listeners
function setupEventListeners() {
    // Tab switching
    dayButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const day = btn.getAttribute('data-day');
            setDayTab(day);
        });
    });

    // Hydration tracking
    addWaterBtn.addEventListener('click', addWater);
    resetWaterBtn.addEventListener('click', resetWater);

    // Modal behavior
    openInfographicBtn.addEventListener('click', () => {
        modalBackdrop.classList.add('open');
    });
    
    closeModalBtn.addEventListener('click', () => {
        modalBackdrop.classList.remove('open');
    });
    
    modalBackdrop.addEventListener('click', (e) => {
        if (e.target === modalBackdrop) {
            modalBackdrop.classList.remove('open');
        }
    });
}

// Set active tab
function setDayTab(day) {
    currentDay = day;
    dayButtons.forEach(btn => {
        if (btn.getAttribute('data-day') === day) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
    renderTimeline();
}

// Checkboxes state
function setupCheckboxes() {
    noteCheckboxes.forEach((cb, index) => {
        cb.checked = completedNotes[index];
        cb.addEventListener('change', () => {
            completedNotes[index] = cb.checked;
            localStorage.setItem('completedNotes', JSON.stringify(completedNotes));
            updateOverallProgress();
        });
    });
}

// Hydration functions
function addWater() {
    if (waterIntake < waterTarget) {
        waterIntake += 250;
        localStorage.setItem('waterIntake', waterIntake.toString());
        updateWaterTrackerDisplay();
        updateOverallProgress();
        
        // Auto-check water note if goal is reached
        if (waterIntake >= waterTarget && !completedNotes[0]) {
            noteCheckboxes[0].checked = true;
            completedNotes[0] = true;
            localStorage.setItem('completedNotes', JSON.stringify(completedNotes));
            updateOverallProgress();
        }
    }
}

function resetWater() {
    waterIntake = 0;
    localStorage.setItem('waterIntake', '0');
    updateWaterTrackerDisplay();
    
    // Auto-uncheck water note
    if (completedNotes[0]) {
        noteCheckboxes[0].checked = false;
        completedNotes[0] = false;
        localStorage.setItem('completedNotes', JSON.stringify(completedNotes));
    }
    updateOverallProgress();
}

function updateWaterTrackerDisplay() {
    const percentage = Math.min(Math.round((waterIntake / waterTarget) * 100), 100);
    waterLevel.style.height = `${percentage}%`;
    bottleText.textContent = `${percentage}% (${waterIntake}ml)`;
}

// Calculate Progress
function updateOverallProgress() {
    const totalItems = completedNotes.length;
    const completedItems = completedNotes.filter(item => item === true).length;
    
    const percentage = Math.round((completedItems / totalItems) * 100);
    overallProgress.style.width = `${percentage}%`;
    progressText.textContent = `${percentage}% Kebiasaan Selesai`;
}

// Render routine items dynamically
function renderTimeline() {
    timelineContainer.innerHTML = '';
    const daySchedule = schedules[currentDay];
    
    daySchedule.forEach(slot => {
        const card = document.createElement('div');
        card.className = 'timeline-card';
        card.setAttribute('data-start-h', slot.startHour);
        card.setAttribute('data-start-m', slot.startMin);
        card.setAttribute('data-end-h', slot.endHour);
        card.setAttribute('data-end-m', slot.endMin);

        let badgesHTML = slot.activities.map(act => `
            <span class="activity-badge">
                <i data-lucide="check-circle-2" style="width: 12px; height: 12px; color: var(--accent-blue);"></i>
                ${act}
            </span>
        `).join('');

        card.innerHTML = `
            <div class="card-time">${slot.time}</div>
            <div class="card-content">
                <h3>${slot.title}</h3>
                <div class="card-activities">
                    ${badgesHTML}
                </div>
            </div>
            <div class="card-illustration">
                <img src="${slot.image}" alt="${slot.title}" onerror="this.outerHTML='<div class=\\'fallback-icon\\'><i data-lucide=\\'${slot.icon}\\'></i></div>'; lucide.createIcons();">
            </div>
        `;
        
        timelineContainer.appendChild(card);
    });
    
    lucide.createIcons();
    updateActiveTask();
}

// Check time bounds and toggle active classes on schedule cards
function updateActiveTask() {
    const now = new Date();
    const currentH = now.getHours();
    const currentM = now.getMinutes();
    
    const cards = document.querySelectorAll('.timeline-card');
    let highlightedAny = false;

    cards.forEach(card => {
        const startH = parseInt(card.getAttribute('data-start-h'));
        const startM = parseInt(card.getAttribute('data-start-m'));
        const endH = parseInt(card.getAttribute('data-end-h'));
        const endM = parseInt(card.getAttribute('data-end-m'));
        
        let isActive = false;
        
        if (startH > endH) { // Schedule spans across midnight, e.g. 18:30 to 02:00
            if (currentH >= startH || currentH < endH || (currentH === endH && currentM < endM)) {
                isActive = true;
            }
        } else {
            const startTotal = startH * 60 + startM;
            const endTotal = endH * 60 + endM;
            const currentTotal = currentH * 60 + currentM;
            
            if (currentTotal >= startTotal && currentTotal < endTotal) {
                isActive = true;
            }
        }
        
        if (isActive) {
            card.classList.add('active-now');
            highlightedAny = true;
        } else {
            card.classList.remove('active-now');
        }
    });
}

// Start Application
window.addEventListener('DOMContentLoaded', init);

// script.js - VERSI PRAKARYA NO-TOKEN (CLIENT SIDE ONLY)

// --- KONFIGURASI ---
// GANTI DENGAN NOMOR WHATSAPP ANDA! (Format: 628...)
const WHATSAPP_NUMBER = "6282357961890"; 
const QUIZ_LENGTH = 25; // Jumlah soal yang akan ditampilkan

// --- DATA SOAL PRAKARYA ---
// Opsi Jawaban dibuat berdasarkan Jawaban yang Anda berikan.
const FIXED_QUIZ_DATA = [
    { 
        question: "Limbah organik yang sering ditemukan di daerah pantai adalah …", 
        options: ["Pelepah pisang", "Jerami padi", "Cangkang kerang", "Kulit bawang"], 
        correct: "Cangkang kerang" 
    },
    { 
        question: "Tirai dari bahan cangkang kerang dibuat dengan teknik …", 
        options: ["Teknik lipat", "Teknik ukir", "Teknik rangkai", "Teknik tempel"], 
        correct: "Teknik rangkai" 
    },
    { 
        question: "Prinsip memilih barang yang masih bisa digunakan kembali disebut …", 
        options: ["Reduce", "Refuse", "Recycle", "Reuse"], 
        correct: "Reuse" 
    },
    { 
        question: "Kerajinan akar pohon jati banyak ditemukan di daerah …", 
        options: ["Blora", "Bandung", "Madura", "Yogyakarta"], 
        correct: "Blora" 
    },
    { 
        question: "Sampah yang berasal dari bahan alam disebut sampah …", 
        options: ["Anorganik", "B3", "Organik", "Kimia"], 
        correct: "Organik" 
    },
    { 
        question: "Yang termasuk limbah daerah pertanian adalah …", 
        options: ["Pecahan kaca", "Jerami / Daunan", "Serbuk gergaji", "Kain perca"], 
        correct: "Jerami / Daunan" 
    },
    { 
        question: "Membawa kantong belanja sendiri saat belanja merupakan prinsip …", 
        options: ["Refuse", "Recycle", "Reuse", "Reduce"], 
        correct: "Refuse" 
    },
    { 
        question: "Produk kerajinan yang dihasilkan dari limbah cangkang kerang adalah …", 
        options: ["Tas anyaman", "Asbak", "Tirai / Aksesoris", "Vas bunga kayu"], 
        correct: "Tirai / Aksesoris" 
    },
    { 
        question: "Memanfaatkan botol minum untuk dipakai kembali termasuk prinsip …", 
        options: ["Recycle", "Refuse", "Reduce", "Reuse"], 
        correct: "Reuse" 
    },
    { 
        question: "Mengubah barang menjadi barang lain dengan fungsi berbeda termasuk prinsip …", 
        options: ["Reduce", "Reuse", "Refuse", "Recycle"], 
        correct: "Recycle" 
    },
    { 
        question: "Gambar rancangan yang dibuat sebelum membuat suatu produk disebut …", 
        options: ["Desain", "Pola", "Sketsa", "Gambar jadi"], 
        correct: "Desain" 
    },
    { 
        question: "Batik jumputan sering disebut juga batik …", 
        options: ["Batik tulis", "Batik ikat celup", "Batik cap", "Batik modern"], 
        correct: "Batik ikat celup" 
    },
    { 
        question: "Motif batik jumputan banyak ditemukan di daerah …", 
        options: ["Blora", "Yogyakarta", "Pekalongan", "Bali"], 
        correct: "Yogyakarta" 
    },
    { 
        question: "Alat dan bahan yang perlu disiapkan untuk batik jumputan selain kain, benang, dan kelereng adalah …", 
        options: ["Minyak tanah dan lilin", "Pewarna dan air", "Garam dan cuka", "Alkohol dan spidol"], 
        correct: "Pewarna dan air" 
    },
    { 
        question: "Karakteristik limbah serabut kelapa adalah …", 
        options: ["Sangat keras", "Mudah dibentuk", "Mudah hancur / mudah rusak", "Tahan air"], 
        correct: "Mudah hancur / mudah rusak" 
    },
    { 
        question: "Kesulitan dalam pengolahan kulit bawang menjadi kerajinan adalah …", 
        options: ["Berbau menyengat", "Sulit diwarnai", "Kulit bawang mudah rapuh", "Harganya mahal"], 
        correct: "Kulit bawang mudah rapuh" 
    },
    { 
        question: "Rotan, bambu, dan serat kayu biasanya diolah dengan teknik …", 
        options: ["Teknik jahit", "Teknik rangkai", "Teknik anyam", "Teknik lipat"], 
        correct: "Teknik anyam" 
    },
    { 
        question: "Bagian tanaman eceng gondok yang dijadikan bahan kerajinan adalah …", 
        options: ["Akar", "Bunga", "Daun", "Batang"], 
        correct: "Batang" 
    },
    { 
        question: "Setelah kain dasar disiapkan, bahan kain yang digunakan untuk kerajinan batik adalah …", 
        options: ["Kain sutra", "Kain katun", "Kain wol", "Kain denim"], 
        correct: "Kain katun" 
    },
    { 
        question: "Dalam membuat batik jumputan, bahan pengganti kelereng bisa menggunakan …", 
        options: ["Koin logam", "Batu / Karet gelang", "Kapas", "Kertas"], 
        correct: "Batu / Karet gelang" 
    },
    { 
        question: "Sebelum kain diwarnai, kain harus dalam keadaan …", 
        options: ["Kering sempurna", "Basah", "Setengah kering", "Hangat"], 
        correct: "Basah" 
    },
    { 
        question: "Sebelum menjahit, kita harus membuat … terlebih dahulu agar hasil rapi", 
        options: ["Pola / Gambar", "Lilin malam", "Benang jahit", "Jarum"], 
        correct: "Pola / Gambar" 
    },
    { 
        question: "Pramuka mengajarkan kita untuk selalu berpikir …", 
        options: ["Sama", "Kreatif", "Logis", "Cepat"], 
        correct: "Kreatif" 
    },
    { 
        question: "Bahan kerajinan yang perlu dikeringkan karena mudah busuk adalah …", 
        options: ["Pelepah pisang", "Cangkang telur", "Kardus", "Kain perca"], 
        correct: "Pelepah pisang" 
    },
    { 
        question: "Limbah serabut kelapa dapat dibedakan menjadi … jenis", 
        options: ["Tiga jenis", "Empat jenis", "Satu jenis", "Dua jenis"], 
        correct: "Dua jenis" 
    }
];


// --- GLOBAL VARS ---
let currentQuestionIndex = 0;
let score = 0;
let currentUsername = "";
let quizData = []; // Akan diisi dengan versi teracak dari FIXED_QUIZ_DATA

// --- DOM ---
const getEl = (id) => document.getElementById(id);
const screens = document.querySelectorAll('.screen');

// --- NAVIGASI ---
function showScreen(id) {
    screens.forEach(s => s.classList.remove('active'));
    getEl(id).classList.add('active');
}

// --- 1. CEK SESI AWAL (LANGSUNG KE INPUT NAMA) ---
window.onload = () => {
    const savedUser = localStorage.getItem('KUIS_USER_NAME'); 
    if (savedUser) {
        currentUsername = savedUser;
        getEl('display-username').innerText = currentUsername;
        getEl('welcome-name').innerText = currentUsername;
        showScreen('start-menu');
    } else {
        showScreen('name-screen');
    }
};

// --- 2. LOGIKA INPUT NAMA ---
getEl('name-input').addEventListener('input', (e) => {
    getEl('submit-name').disabled = e.target.value.trim() === "";
});

getEl('submit-name').onclick = () => {
    const name = getEl('name-input').value.trim();
    if (name) {
        currentUsername = name;
        localStorage.setItem('KUIS_USER_NAME', name);
        getEl('display-username').innerText = currentUsername;
        getEl('welcome-name').innerText = currentUsername;
        showScreen('start-menu');
    }
};

// --- 3. FITUR DISCLAMER & START KUIS ---
getEl('btn-latihan').onclick = () => {
    getEl('disclaimer-modal').classList.remove('hidden');
};

window.closeDisclaimer = function() {
    getEl('disclaimer-modal').classList.add('hidden');
    startQuiz(); // Lanjutkan ke kuis setelah user klik OK
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function startQuiz() {
    // Acak data soal dan opsi di dalamnya
    quizData = shuffleArray([...FIXED_QUIZ_DATA]).slice(0, QUIZ_LENGTH);
    quizData.forEach(q => {
        q.options = shuffleArray(q.options);
    });

    currentQuestionIndex = 0;
    score = 0;
    getEl('current-score').innerText = score;
    showScreen('quiz-area');
    renderQuestion();
}

function renderQuestion() {
    const q = quizData[currentQuestionIndex];
    getEl('q-number').innerText = `Soal ${currentQuestionIndex + 1}/${quizData.length}`;
    getEl('q-text').innerHTML = q.question;
    
    const area = getEl('answer-area');
    area.innerHTML = '';
    
    q.options.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'opt-btn';
        btn.innerHTML = opt;
        btn.onclick = () => checkAnswer(opt, q.correct);
        area.appendChild(btn);
    });
}

function checkAnswer(selected, correct) {
    const btns = document.querySelectorAll('.opt-btn');
    btns.forEach(b => {
        b.disabled = true;
        // Tandai jawaban yang benar/salah secara visual
        if (b.innerHTML === correct) {
            b.style.backgroundColor = 'var(--success-color)';
            b.style.color = 'white';
        } else if (b.innerHTML === selected) {
            b.style.backgroundColor = 'var(--error-color)';
            b.color = 'white';
        }
    });

    const isCorrect = selected === correct;
    const visualFeedback = getEl('visual-feedback');
    const feedbackIcon = getEl('feedback-icon');
    
    visualFeedback.className = `visual-feedback show ${isCorrect ? 'correct' : 'incorrect'}`;
    feedbackIcon.className = isCorrect ? 'fas fa-check' : 'fas fa-times';

    if (isCorrect) {
        score += 100; 
        getEl('current-score').innerText = score;
    }
    
    // Lanjut ke soal berikutnya setelah jeda
    setTimeout(() => {
        visualFeedback.className = 'visual-feedback hidden';
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            renderQuestion();
        } else {
            endGame();
        }
    }, 1500); // Jeda 1.5 detik
}

function endGame() {
    showScreen('game-over');
    getEl('final-score').innerText = score;
    
    const maxScore = quizData.length * 100;
    const percent = (score / maxScore) * 100;
    let msg = "";

    if (percent <= 50) msg = "Ayo belajar lagi! Masih perlu banyak membaca materi. 🤓";
    else if (percent <= 60) msg = "Cukup baik, tapi masih bisa ditingkatkan lagi. 👍";
    else if (percent <= 80) msg = "Sudah bagus sekali! Pertahankan belajarmu. ✨";
    else msg = "Hasil memuaskan! Kamu menguasai materinya! 👑";

    getEl('result-message-final').innerHTML = msg;
}

// --- 4. FITUR TAMBAHAN (LOGOUT & WHATSAPP) ---
window.userLogout = function() {
    if(confirm("Yakin ingin keluar dari sesi ini? Data sesi latihan akan hilang.")) {
        localStorage.removeItem('KUIS_USER_NAME');
        location.reload();
    }
}

window.openWhatsapp = function() {
    const url = `https://wa.me/${WHATSAPP_NUMBER}`;
    window.open(url, '_blank');
}

getEl('btn-feedback').onclick = openWhatsapp;
getEl('btn-feedback-final').onclick = openWhatsapp;
// Data tryout
const tryouts = [
    {
        id: 1,
        title: "Tryout SNBT 2023 - Paket A",
        provider: "Bimbel X",
        type: "SNBT",
        duration: "120 menit",
        price: "Gratis",
        backgroundImage: "to1.jpg",
        description: "Tryout SNBT 2023 - Paket A adalah simulasi ujian Seleksi Nasional Berbasis Tes (SNBT) yang dirancang untuk membantu persiapan siswa SMA/SMK/MA dalam menghadapi ujian masuk perguruan tinggi negeri. Tryout ini mencakup semua materi yang diujikan dalam SNBT dengan tingkat kesulitan yang sesuai dengan ujian sebenarnya."
    },

    {
        id: 2,
        title: "Tryout UTBK Saintek - Edisi Premium",
        provider: "Lembaga Y",
        type: "UTBK Saintek",
        duration: "180 menit",
        price: "Rp 50.000",
        backgroundImage: "to2.jpg",
        description: "Tryout UTBK Saintek - Edisi Premium adalah simulasi lengkap Ujian Tulis Berbasis Komputer untuk jurusan Saintek. Tryout ini dirancang khusus untuk siswa yang menargetkan jurusan kedokteran, teknik, MIPA, dan sejenisnya. Dilengkapi dengan pembahasan detail dan analisis kemampuan."
    },
    {
        id: 3,
        title: "Tryout Ujian Mandiri UI",
        provider: "Bimbel Z",
        type: "SIMAK UI",
        duration: "150 menit",
        price: "Rp 75.000",
        backgroundImage: "to3.jpg",
        description: "Tryout Ujian Mandiri UI (SIMAK UI) adalah simulasi ujian masuk Universitas Indonesia melalui jalur mandiri. Tryout ini disusun berdasarkan pola soal SIMAK UI tahun-tahun sebelumnya dan dilengkapi dengan prediksi soal tahun ini."
    },
    {
        id: 4,
        title: "Tryout Ujian Mandiri ITB",
        provider: "Lembaga A",
        type: "USM ITB",
        duration: "120 menit",
        price: "Rp 60.000",
        backgroundImage: "to4.jpg",
        description: "Tryout Ujian Mandiri ITB (USM ITB) adalah simulasi ujian seleksi mandiri Institut Teknologi Bandung. Tryout ini fokus pada penguasaan materi Saintek dengan tingkat kesulitan yang sesuai dan dilengkapi dengan tips mengerjakan soal dengan cepat dan tepat."
    },
    {
        id: 5,
        title: "Tryout Ujian Mandiri ITB",
        provider: "Lembaga A",
        type: "USM ITB",
        duration: "120 menit",
        price: "Rp 60.000",
        backgroundImage: "to5.jpg",
        description: "Tryout Ujian Mandiri ITB (USM ITB) adalah simulasi ujian seleksi mandiri Institut Teknologi Bandung. Tryout ini fokus pada penguasaan materi Saintek dengan tingkat kesulitan yang sesuai dan dilengkapi dengan tips mengerjakan soal dengan cepat dan tepat."
    },
    {
        id: 6,
        title: "Tryout Ujian Mandiri ITB",
        provider: "Lembaga A",
        type: "USM ITB",
        duration: "120 menit",
        price: "Rp 60.000",
        backgroundImage: "to6.jpg",
        description: "Tryout Ujian Mandiri ITB (USM ITB) adalah simulasi ujian seleksi mandiri Institut Teknologi Bandung. Tryout ini fokus pada penguasaan materi Saintek dengan tingkat kesulitan yang sesuai dan dilengkapi dengan tips mengerjakan soal dengan cepat dan tepat."
    }
];

// Data ulasan
const reviews = [
    {
        id: 1,
        tryoutId: 1,
        author: "Rina Sari",
        rating: 5,
        comment: "Tryout ini sangat membantu saya dalam persiapan SNBT. Soal-soalnya sesuai dengan kisi-kisi dan pembahasannya jelas.",
        date: "15 Oktober 2023"
    },
    {
        id: 2,
        tryoutId: 1,
        author: "Andi Pratama",
        rating: 4,
        comment: "Bagus untuk latihan, tapi ada beberapa soal yang terlalu sulit menurut saya.",
        date: "12 Oktober 2023"
    },
    {
        id: 3,
        tryoutId: 2,
        author: "Siti Rahayu",
        rating: 5,
        comment: "Sangat worth it! Pembahasannya detail dan membantu saya memahami konsep yang sulit.",
        date: "10 Oktober 2023"
    }
];

// Data tes minat jurusan
const testQuestions = [
    {
        id: 1,
        question: "Apa mata pelajaran favorit Anda?",
        options: [
            "Matematika dan IPA",
            "Bahasa dan Sastra",
            "Sosial dan Humaniora",
            "Seni dan Kreativitas"
        ]
    },
    {
        id: 2,
        question: "Aktivitas apa yang paling Anda nikmati?",
        options: [
            "Menganalisis dan memecahkan masalah",
            "Membaca dan menulis",
            "Berinteraksi dengan orang lain",
            "Mencipta dan berimajinasi"
        ]
    },
    {
        id: 3,
        question: "Keterampilan apa yang paling Anda kuasai?",
        options: [
            "Logika dan analisis",
            "Komunikasi dan bahasa",
            "Empati dan hubungan sosial",
            "Kreativitas dan seni"
        ]
    },
    {
        id: 4,
        question: "Lingkungan kerja seperti apa yang Anda inginkan?",
        options: [
            "Terstruktur dan teknis",
            "Dinamis dan komunikatif",
            "Sosial dan membantu",
            "Kreatif dan fleksibel"
        ]
    },
    {
        id: 5,
        question: "Apa tujuan karir Anda?",
        options: [
            "Menjadi ahli di bidang teknis",
            "Berkarya di bidang komunikasi atau pendidikan",
            "Membantu dan melayani masyarakat",
            "Berkreasi dan menghasilkan karya seni"
        ]
    }
];

// Variabel global
let currentTryoutId = null;
let currentTestQuestion = 0;
let testAnswers = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function () {
    generateTryoutCards();
    showPage('home');
});

// Show specific page
function showPage(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.style.display = 'none';
    });

    // Show selected page
    document.getElementById(pageId + '-page').style.display = 'block';

    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Start FindMyMajor test
function startFindMajorTest() {
    currentTestQuestion = 0;
    testAnswers = [];
    showPage('find-major-test');
    generateTestQuestion();
}

// Generate test question
function generateTestQuestion() {
    const testContainer = document.getElementById('testContainer');
    const progressBar = document.getElementById('testProgressBar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Update progress bar
    const progress = ((currentTestQuestion + 1) / testQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;

    // Show/hide navigation buttons
    prevBtn.style.display = currentTestQuestion > 0 ? 'block' : 'none';
    nextBtn.textContent = currentTestQuestion === testQuestions.length - 1 ? 'Selesai' : 'Selanjutnya';

    // Generate question
    const question = testQuestions[currentTestQuestion];
    testContainer.innerHTML = `
        <div class="test-question">
            <h3>Pertanyaan ${currentTestQuestion + 1} dari ${testQuestions.length}</h3>
            <p>${question.question}</p>
            <div class="test-options">
                ${question.options.map((option, index) => `
                    <div class="test-option" onclick="selectOption(${index})">
                        ${option}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Select option in test
function selectOption(optionIndex) {
    // Remove selected class from all options
    document.querySelectorAll('.test-option').forEach(option => {
        option.classList.remove('selected');
    });

    // Add selected class to clicked option
    event.target.classList.add('selected');

    // Save answer
    testAnswers[currentTestQuestion] = optionIndex;
}

// Navigate to next question
function nextQuestion() {
    if (testAnswers[currentTestQuestion] === undefined) {
        showNotification('Pilih salah satu jawaban terlebih dahulu!', 'error');
        return;
    }

    if (currentTestQuestion < testQuestions.length - 1) {
        currentTestQuestion++;
        generateTestQuestion();
    } else {
        // Test completed
        showTestResults();
    }
}

// Navigate to previous question
function prevQuestion() {
    if (currentTestQuestion > 0) {
        currentTestQuestion--;
        generateTestQuestion();
    }
}

// Show test results
function showTestResults() {
    const testContainer = document.getElementById('testContainer');
    const progressBar = document.getElementById('testProgressBar');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Hide navigation buttons
    prevBtn.style.display = 'none';
    nextBtn.style.display = 'none';

    // Calculate results based on answers
    const result = calculateTestResult();

    // Show results
    testContainer.innerHTML = `
        <div class="test-results">
            <h2>Hasil Tes Minat Jurusan</h2>
            <p>Berdasarkan jawaban Anda, berikut adalah rekomendasi jurusan yang sesuai:</p>
            <div class="recommendation">
                <h3>${result.recommendation}</h3>
                <p>${result.description}</p>
            </div>
            <div class="suggested-majors">
                <h4>Jurusan yang Direkomendasikan:</h4>
                <ul>
                    ${result.majors.map(major => `<li>${major}</li>`).join('')}
                </ul>
            </div>
            <div style="text-align: center; margin-top: 30px;">
                <button class="btn btn-primary" onclick="showPage('find-major')">Kembali ke Halaman Utama</button>
            </div>
        </div>
    `;

    // Update progress bar to 100%
    progressBar.style.width = '100%';
}

// Calculate test result
function calculateTestResult() {
    // Simple algorithm to determine result based on answers
    const categories = [0, 0, 0, 0]; // STEM, Humanities, Social, Arts

    testAnswers.forEach(answer => {
        categories[answer]++;
    });

    const maxCategory = Math.max(...categories);
    const maxIndex = categories.indexOf(maxCategory);

    let result = {};

    switch (maxIndex) {
        case 0: // STEM
            result = {
                recommendation: "Bidang Sains, Teknologi, Teknik, dan Matematika (STEM)",
                description: "Anda memiliki minat yang kuat dalam bidang sains, teknologi, teknik, dan matematika. Anda cenderung analitis, logis, dan tertarik memecahkan masalah kompleks.",
                majors: [
                    "Teknik Informatika",
                    "Teknik Elektro",
                    "Kedokteran",
                    "Matematika",
                    "Fisika",
                    "Kimia"
                ]
            };
            break;
        case 1: // Humanities
            result = {
                recommendation: "Bidang Humaniora dan Bahasa",
                description: "Anda memiliki minat yang kuat dalam bidang humaniora, bahasa, dan sastra. Anda cenderung komunikatif, ekspresif, dan tertarik pada budaya dan pemikiran manusia.",
                majors: [
                    "Sastra Indonesia",
                    "Sastra Inggris",
                    "Ilmu Sejarah",
                    "Filsafat",
                    "Ilmu Perpustakaan",
                    "Jurnalistik"
                ]
            };
            break;
        case 2: // Social
            result = {
                recommendation: "Bidang Sosial dan Humaniora",
                description: "Anda memiliki minat yang kuat dalam bidang sosial dan humaniora. Anda cenderung empatik, sosial, dan tertarik pada interaksi manusia dan masyarakat.",
                majors: [
                    "Psikologi",
                    "Sosiologi",
                    "Ilmu Politik",
                    "Ilmu Komunikasi",
                    "Hubungan Internasional",
                    "Administrasi Publik"
                ]
            };
            break;
        case 3: // Arts
            result = {
                recommendation: "Bidang Seni dan Kreativitas",
                description: "Anda memiliki minat yang kuat dalam bidang seni dan kreativitas. Anda cenderung imajinatif, intuitif, dan tertarik mengekspresikan diri melalui karya seni.",
                majors: [
                    "Desain Komunikasi Visual",
                    "Arsitektur",
                    "Seni Rupa",
                    "Desain Interior",
                    "Film dan Televisi",
                    "Musik"
                ]
            };
            break;
    }

    return result;
}

// Generate tryout cards for main section
function generateTryoutCards(filteredTryouts = tryouts) {
    const tryoutGrid = document.getElementById('tryoutGrid');
    tryoutGrid.innerHTML = '';

    filteredTryouts.forEach(tryout => {
        const card = document.createElement('div');
        card.className = 'tryout-card';
        card.innerHTML = `
            <div class="tryout-image" 
                style="
                    background-image: url('${tryout.backgroundImage}');
                    background-size: cover;
                    background-position: center;
                ">
            </div>
            <div class="tryout-content">
                <h3>${tryout.title}</h3>
                <div class="tryout-meta">
                    <span>${tryout.provider}</span>
                    <span>${tryout.duration}</span>
                </div>
                <div class="tryout-price">${tryout.price}</div>
                <button class="btn btn-primary" onclick="showTryoutDetail(${tryout.id})">
                    Lihat Detail
                </button>
            </div>
        `;
        tryoutGrid.appendChild(card);
    });
}


// Show tryout detail page
function showTryoutDetail(id) {
    currentTryoutId = id;
    const tryout = tryouts.find(t => t.id === id);

    if (tryout) {
        // Ubah bagian gambar besar jadi pakai background image
        const detailImage = document.getElementById('tryoutDetailImage');
        detailImage.style.backgroundImage = `url('${tryout.backgroundImage}')`;
        detailImage.style.backgroundSize = 'cover';
        detailImage.style.backgroundPosition = 'center';
        detailImage.textContent = ''; // Hapus teks di atas gambar

        // Update detail info
        document.getElementById('tryoutDetailTitle').textContent = tryout.title;
        document.getElementById('tryoutDetailProvider').textContent = tryout.provider;
        document.getElementById('tryoutDetailDuration').textContent = tryout.duration;
        document.getElementById('tryoutDetailType').textContent = tryout.type;
        document.getElementById('tryoutDetailPrice').textContent = tryout.price;
        document.getElementById('tryoutDetailDescription').textContent = tryout.description;

        // Generate reviews
        const reviewList = document.getElementById('reviewList');
        const tryoutReviews = reviews.filter(r => r.tryoutId === id);

        if (tryoutReviews.length > 0) {
            reviewList.innerHTML = tryoutReviews.map(review => `
                <div class="review-item">
                    <div class="review-header">
                        <span class="review-author">${review.author}</span>
                        <span class="review-rating">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</span>
                    </div>
                    <p>${review.comment}</p>
                    <small>${review.date}</small>
                </div>
            `).join('');
        } else {
            reviewList.innerHTML = '<p>Belum ada ulasan untuk tryout ini.</p>';
        }

        showPage('tryout-detail');
    }
}


// Register for current tryout
function registerForCurrentTryout() {
    const name = document.getElementById('tryoutName').value;
    const email = document.getElementById('tryoutEmail').value;
    const phone = document.getElementById('tryoutPhone').value;
    const school = document.getElementById('tryoutSchool').value;

    if (name && email && phone && school) {
        showNotification(`Pendaftaran berhasil! Detail tryout telah dikirim ke ${email}`);
        closeModal('registerTryoutModal');
    } else {
        showNotification('Harap isi semua field!', 'error');
    }
}

// Add to schedule
function addToSchedule() {
    if (currentTryoutId) {
        const tryout = tryouts.find(t => t.id === currentTryoutId);
        showNotification(`Tryout "${tryout.title}" telah ditambahkan ke jadwal Anda`);
    }
}

// Submit review
function submitReview() {
    const rating = document.getElementById('reviewRating').value;
    const comment = document.getElementById('reviewComment').value;

    if (rating && comment) {
        showNotification('Ulasan berhasil dikirim! Terima kasih atas feedback Anda.');
        document.getElementById('reviewRating').value = '5';
        document.getElementById('reviewComment').value = '';
    } else {
        showNotification('Harap isi rating dan komentar!', 'error');
    }
}

// Search tryouts
function searchTryouts() {
    const searchTerm = document.getElementById('searchTryout').value.toLowerCase();
    const filteredTryouts = tryouts.filter(tryout =>
        tryout.title.toLowerCase().includes(searchTerm) ||
        tryout.provider.toLowerCase().includes(searchTerm) ||
        tryout.type.toLowerCase().includes(searchTerm)
    );
    generateTryoutCards(filteredTryouts);
}

// Modal functions
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function (event) {
    const modals = document.getElementsByClassName('modal');
    for (let modal of modals) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    }
}

// Login function
function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
        showNotification('Login berhasil!');
        closeModal('loginModal');
    } else {
        showNotification('Harap isi semua field!', 'error');
    }
}

// Login partner function
function loginPartner() {
    const email = document.getElementById('partnerEmail').value;
    const password = document.getElementById('partnerPassword').value;

    if (email && password) {
        showNotification('Login mitra berhasil!');
        closeModal('loginPartnerModal');
    } else {
        showNotification('Harap isi semua field!', 'error');
    }
}

// Register function
function register() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (fullName && email && password && confirmPassword) {
        if (password === confirmPassword) {
            showNotification('Pendaftaran berhasil! Silakan login.');
            closeModal('registerModal');
        } else {
            showNotification('Password tidak cocok!', 'error');
        }
    } else {
        showNotification('Harap isi semua field!', 'error');
    }
}

// Register partner function
function registerPartner() {
    const partnerName = document.getElementById('partnerName').value;
    const email = document.getElementById('partnerRegEmail').value;
    const phone = document.getElementById('partnerPhone').value;
    const password = document.getElementById('partnerRegPassword').value;
    const confirmPassword = document.getElementById('partnerConfirmPassword').value;

    if (partnerName && email && phone && password && confirmPassword) {
        if (password === confirmPassword) {
            showNotification('Pendaftaran mitra berhasil! Silakan login.');
            closeModal('registerPartnerModal');
        } else {
            showNotification('Password tidak cocok!', 'error');
        }
    } else {
        showNotification('Harap isi semua field!', 'error');
    }
}

// Schedule tryout function
function scheduleTryout() {
    const tryoutSelect = document.getElementById('tryoutSelect').value;
    const scheduleDate = document.getElementById('scheduleDate').value;
    const scheduleTime = document.getElementById('scheduleTime').value;

    if (tryoutSelect && scheduleDate && scheduleTime) {
        showNotification('Tryout berhasil dijadwalkan!');
        closeModal('scheduleModal');
    } else {
        showNotification('Harap isi semua field!', 'error');
    }
}

// Send partnership request
function sendPartnershipRequest() {
    const partnerName = document.getElementById('partnerName').value;
    const partnerEmail = document.getElementById('partnerEmail').value;
    const partnerPhone = document.getElementById('partnerPhone').value;
    const partnerMessage = document.getElementById('partnerMessage').value;

    if (partnerName && partnerEmail && partnerPhone && partnerMessage) {
        showNotification('Permohonan kemitraan berhasil dikirim! Kami akan menghubungi Anda segera.');
        closeModal('partnershipModal');
    } else {
        showNotification('Harap isi semua field!', 'error');
    }
}

// Send contact message
function sendContactMessage() {
    const contactName = document.getElementById('contactName').value;
    const contactEmail = document.getElementById('contactEmail').value;
    const contactSubject = document.getElementById('contactSubject').value;
    const contactMessage = document.getElementById('contactMessage').value;

    if (contactName && contactEmail && contactSubject && contactMessage) {
        showNotification('Pesan berhasil dikirim! Kami akan membalasnya segera.');
    } else {
        showNotification('Harap isi semua field!', 'error');
    }
}

// Show notification
function showNotification(message, type = 'success') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.backgroundColor = type === 'error' ? '#ff006e' : '#38b000';
    notification.style.display = 'block';

    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

/* File: script.js */

// 1. Fungsi Tab Navigation & Auto-Close Hamburger Menu
function showTab(tabId) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add('active');
    }
    
    // Add active class to selected button
    const targetBtn = document.getElementById('btn-' + tabId);
    if (targetBtn) {
        targetBtn.classList.add('active');
    }

    // --- AUTO CLOSE MENU UNTUK HP ---
    const navMenu = document.getElementById('nav-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    
    if (window.innerWidth < 640 && navMenu && !navMenu.classList.contains('hidden')) {
        navMenu.classList.add('hidden');
        navMenu.classList.remove('flex');
        if (hamburgerIcon) {
            hamburgerIcon.classList.remove('fa-times');
            hamburgerIcon.classList.add('fa-bars');
        }
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 2. Sistem Buka-Tutup Menu Garis Tiga (Hamburger)
const hamburgerBtn = document.getElementById('hamburger-btn');
const navMenuDropdown = document.getElementById('nav-menu');
const hamburgerIcon = document.getElementById('hamburger-icon');

if (hamburgerBtn) {
    hamburgerBtn.addEventListener('click', function() {
        navMenuDropdown.classList.toggle('hidden');
        navMenuDropdown.classList.toggle('flex');
        
        // Ubah ikon dari garis tiga jadi silang (X)
        if (hamburgerIcon) {
            if (hamburgerIcon.classList.contains('fa-bars')) {
                hamburgerIcon.classList.remove('fa-bars');
                hamburgerIcon.classList.add('fa-times');
            } else {
                hamburgerIcon.classList.remove('fa-times');
                hamburgerIcon.classList.add('fa-bars');
            }
        }
    });
}

// 3. Example interests for AI
function setExample(type) {
    const textarea = document.getElementById('ai-input');
    const examples = {
        teknologi: "Saya sangat tertarik dengan teknologi, suka rakit PC, coding sederhana, main game, dan selalu update dengan gadget terbaru. Juga senang memecahkan masalah teknis.",
        bisnis: "Saya senang berjualan online, ikut organisasi sekolah, public speaking, dan menghitung keuangan. Punya banyak ide bisnis dan suka menganalisis pasar.",
        mengajar: "Saya senang membantu teman belajar, ikut kegiatan mengajar di komunitas, dan membaca buku pendidikan. Suka berkomunikasi dan menjelaskan hal-hal rumit.",
        kesehatan: "Saya tertarik dengan biologi, senang olahraga, peduli dengan kesehatan dan nutrisi. Suka membaca tentang gaya hidup sehat dan pengobatan."
    };
    
    textarea.value = examples[type] || "";
    textarea.focus();
}

// 4. AI Consultation Function
async function askAI() {
    const input = document.getElementById('ai-input').value.trim();
    if (!input) {
        alert("Silakan tuliskan minat atau hobimu terlebih dahulu!");
        document.getElementById('ai-input').focus();
        return;
    }
    
    const btn = document.getElementById('ai-btn');
    const btnText = document.getElementById('ai-btn-text');
    const responseContainer = document.getElementById('ai-response-container');
    const responseText = document.getElementById('ai-response-text');
    
    // Disable button and show loading
    btn.disabled = true;
    btnText.innerHTML = '<i class="fas fa-spinner fa-spin mr-2"></i> Menganalisis...';
    
    // Show response container with loading state
    responseContainer.classList.remove('hidden');
    responseText.innerHTML = '<div class="typing text-center py-8 text-gray-500">Konselor AI sedang menganalisis minat dan bakatmu...</div>';
    
    // Simulate API call with timeout
    setTimeout(() => {
        let response = "";
        const text = input.toLowerCase();
        
        // KUMPULAN KATA KUNCI (Lebih Pintar)
        const isTeknik = /game|coding|pc|teknologi|komputer|it|robot|ai|web|aplikasi|sistem|desain|bangunan|listrik|mesin/.test(text);
        const isEkonomi = /jualan|bisnis|uang|organisasi|ekonomi|pasar|saham|trading|bank|keuangan|marketing|manajemen/.test(text);
        const isPendidikan = /ajar|guru|mengajar|pendidikan|sekolah|anak|bimbing|tutor|dosen/.test(text);
        const isKesehatan = /kesehatan|sehat|gizi|medis|olahraga|biologi|diet|sakit|rawat|puskesmas/.test(text);
        const isPertanian = /tani|kebun|tanaman|tumbuhan|alam|hewan|pangan|lingkungan|sawah/.test(text);
        const isFisip = /politik|sosial|masyarakat|pemerintah|hukum|debat|berita|komunikasi/.test(text);
        const isAgama = /agama|islam|syariah|halal|ustadz|dakwah|ngaji|quran/.test(text);

        if (isTeknik) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-purple-500">
                    <h4 class="font-bold text-emerald-900 mb-2">🎯 REKOMENDASI: FAKULTAS TEKNIK</h4>
                    <p class="text-sm">Minatmu di bidang teknologi & problem solving sangat cocok dengan Fakultas Teknik UNSIL!</p>
                </div>
                <div class="space-y-2 text-sm text-gray-700">
                    <div class="bg-purple-50 p-3 rounded-lg border border-purple-100"><span class="font-bold text-purple-800">S1 Informatika:</span> Untuk penggemar coding, web dev, AI, dan software.</div>
                    <div class="bg-purple-50 p-3 rounded-lg border border-purple-100"><span class="font-bold text-purple-800">S1 Sistem Informasi:</span> Gabungan IT dan manajemen bisnis.</div>
                    <div class="bg-purple-50 p-3 rounded-lg border border-purple-100"><span class="font-bold text-purple-800">S1 Teknik Sipil/Elektro:</span> Untuk yang suka infrastruktur dan hardware.</div>
                </div>
            </div>`;
        } else if (isEkonomi) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-green-500">
                    <h4 class="font-bold text-emerald-900 mb-2">💼 REKOMENDASI: FAKULTAS EKONOMI & BISNIS</h4>
                    <p class="text-sm">Passion-mu di bidang bisnis dan keuangan sangat menjanjikan!</p>
                </div>
                <div class="space-y-2 text-sm text-gray-700">
                    <div class="bg-green-50 p-3 rounded-lg border border-green-100"><span class="font-bold text-green-800">S1 Manajemen:</span> Cocok untuk calon entrepreneur dan leader perusahaan.</div>
                    <div class="bg-green-50 p-3 rounded-lg border border-green-100"><span class="font-bold text-green-800">S1 Akuntansi:</span> Untuk yang teliti dengan angka dan keuangan.</div>
                    <div class="bg-green-50 p-3 rounded-lg border border-green-100"><span class="font-bold text-green-800">D3/D4 Keuangan & Perbankan:</span> Fokus praktik agar siap kerja di industri keuangan.</div>
                </div>
            </div>`;
        } else if (isKesehatan) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-pink-500">
                    <h4 class="font-bold text-emerald-900 mb-2">❤️ REKOMENDASI: FAKULTAS ILMU KESEHATAN</h4>
                    <p class="text-sm">Kepedulianmu pada kesehatan dan gaya hidup sangat dibutuhkan!</p>
                </div>
                <div class="space-y-2 text-sm text-gray-700">
                    <div class="bg-pink-50 p-3 rounded-lg border border-pink-100"><span class="font-bold text-pink-800">S1 Kesehatan Masyarakat:</span> Fokus pada pencegahan penyakit dan promosi hidup sehat.</div>
                    <div class="bg-pink-50 p-3 rounded-lg border border-pink-100"><span class="font-bold text-pink-800">S1 Gizi:</span> Cocok jika tertarik dengan diet, nutrisi, dan kualitas pangan.</div>
                </div>
            </div>`;
        } else if (isPertanian) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-yellow-500">
                    <h4 class="font-bold text-emerald-900 mb-2">🌱 REKOMENDASI: FAKULTAS PERTANIAN</h4>
                    <p class="text-sm">Kecintaanmu pada alam dan lingkungan sangat pas di fakultas ini!</p>
                </div>
                <div class="space-y-2 text-sm text-gray-700">
                    <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-100"><span class="font-bold text-yellow-800">S1 Agroteknologi:</span> Belajar teknologi budidaya tanaman modern.</div>
                    <div class="bg-yellow-50 p-3 rounded-lg border border-yellow-100"><span class="font-bold text-yellow-800">S1 Agribisnis:</span> Menggabungkan ilmu pertanian dengan strategi bisnis.</div>
                </div>
            </div>`;
        } else if (isPendidikan) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-blue-500">
                    <h4 class="font-bold text-emerald-900 mb-2">👨‍🏫 REKOMENDASI: FAKULTAS KEGURUAN (FKIP)</h4>
                    <p class="text-sm">Bakat mendidikmu bisa dikembangkan menjadi pengajar yang hebat!</p>
                </div>
                <div class="bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm text-gray-700">
                    UNSIL punya 9 Prodi Pendidikan! Kamu bisa memilih sesuai mata pelajaran favoritmu, seperti Pendidikan Matematika, Bahasa Inggris, Jasmani, Geografi, dll.
                </div>
            </div>`;
        } else if (isFisip) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-red-500">
                    <h4 class="font-bold text-emerald-900 mb-2">🏛️ REKOMENDASI: FISIP</h4>
                    <p class="text-sm">Pemikiran kritismu sangat cocok untuk isu sosial dan tata negara!</p>
                </div>
                <div class="space-y-2 text-sm text-gray-700">
                    <div class="bg-red-50 p-3 rounded-lg border border-red-100"><span class="font-bold text-red-800">S1 Ilmu Politik:</span> Pelajari dinamika politik, pemerintahan, dan kebijakan publik. Sangat pas buat yang vokal dan kritis!</div>
                </div>
            </div>`;
        } else if (isAgama) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-indigo-500">
                    <h4 class="font-bold text-emerald-900 mb-2">🕌 REKOMENDASI: FAKULTAS AGAMA ISLAM</h4>
                    <p class="text-sm">Kembangkan ilmu agama dan penerapannya di era modern.</p>
                </div>
                <div class="space-y-2 text-sm text-gray-700">
                    <div class="bg-indigo-50 p-3 rounded-lg border border-indigo-100"><span class="font-bold text-indigo-800">S1 Ekonomi Syariah:</span> Perbankan dan sistem keuangan berbasis syariat.</div>
                    <div class="bg-indigo-50 p-3 rounded-lg border border-indigo-100"><span class="font-bold text-indigo-800">S1 Manajemen Mutu Halal:</span> Prodi unik dan sangat dibutuhkan industri saat ini!</div>
                </div>
            </div>`;
        } else {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-emerald-500">
                    <h4 class="font-bold text-emerald-900 mb-2">✨ KEMUNGKINAN TAK TERBATAS!</h4>
                    <p class="text-sm">Minatmu sangat unik! UNSIL punya 7 Fakultas yang bebas kamu eksplorasi.</p>
                </div>
                <div class="bg-emerald-50 p-3 rounded-lg text-xs text-emerald-800 border border-emerald-200">
                    <i class="fas fa-lightbulb mr-2"></i>
                    <strong>Tips:</strong> Coba ceritakan lebih spesifik lagi (misal: "suka menghitung", "senang berdebat", atau "suka di lab") agar AI bisa menebak lebih akurat!
                </div>
            </div>`;
        }
        
        // Output the result
        setTimeout(() => {
            responseText.innerHTML = response;
            btn.disabled = false;
            btnText.innerHTML = '<i class="fas fa-robot mr-2"></i> ✨ Konsultasi dengan AI';
        }, 800);
        
    }, 1500);
}

// 5. Reset AI consultation
function resetAI() {
    document.getElementById('ai-input').value = '';
    document.getElementById('ai-response-container').classList.add('hidden');
    document.getElementById('ai-input').focus();
}

// 6. Copy AI response
function copyResponse() {
    const responseText = document.getElementById('ai-response-text');
    const textToCopy = responseText.innerText;
    
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = document.getElementById('ai-btn-text').innerHTML;
        document.getElementById('ai-btn-text').innerHTML = '<i class="fas fa-check mr-2"></i> Tersalin!';
        setTimeout(() => {
            document.getElementById('ai-btn-text').innerHTML = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy: ', err);
        alert('Gagal menyalin teks');
    });
}

// 7. Check-in form submission
document.getElementById('checkin-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value.trim();
    const minat = document.getElementById('minat').value;
    
    if (!nama) {
        alert("Harap isi nama lengkap!");
        return;
    }
    
    if (!minat) {
        alert("Harap pilih minat jurusan!");
        return;
    }
    
    if (!document.getElementById('agree').checked) {
        alert("Harap setujui persyaratan terlebih dahulu!");
        return;
    }
    
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('loading-text').classList.remove('hidden');
    
    setTimeout(() => {
        const code = "UNSIL-" + Math.floor(1000 + Math.random() * 9000);
        
        document.getElementById('checkin-form-container').classList.add('hidden');
        document.getElementById('success-box').classList.remove('hidden');
        document.getElementById('display-name').textContent = code;
        
        const checkinData = {
            nama: nama,
            minat: minat,
            timestamp: new Date().toISOString(),
            code: code
        };
        
        localStorage.setItem('unsil_checkin', JSON.stringify(checkinData));
        updateVisitorCount();
        e.target.reset();
        
    }, 2000);
});

// 8. Update visitor count
function updateVisitorCount() {
    const countElement = document.getElementById('count');
    if(countElement) {
        let currentCount = parseInt(countElement.textContent.replace(/,/g, ''));
        currentCount += 1;
        
        countElement.textContent = currentCount.toLocaleString();
        
        countElement.parentElement.classList.add('animate-pulse');
        setTimeout(() => {
            countElement.parentElement.classList.remove('animate-pulse');
        }, 1000);
    }
}

// 9. Screenshot code function
function screenshotCode() {
    alert("Silakan screenshot layar ini untuk menunjukkan kode penanda di stand UNSIL!");
}

// 10. Form validation indicator
document.getElementById('nama').addEventListener('input', function() {
    const validIcon = document.getElementById('nama-valid');
    if (this.value.length >= 3) {
        validIcon.classList.remove('hidden');
    } else {
        validIcon.classList.add('hidden');
    }
});

// 11. Initialize System
document.addEventListener('DOMContentLoaded', function() {
    // Cek status Checkin
    const savedCheckin = localStorage.getItem('unsil_checkin');
    if (savedCheckin) {
        showTab('hadir');
        setTimeout(() => {
            const container = document.getElementById('checkin-form-container');
            const successBox = document.getElementById('success-box');
            if (container && successBox) {
                container.classList.add('hidden');
                successBox.classList.remove('hidden');
                const data = JSON.parse(savedCheckin);
                document.getElementById('display-name').textContent = data.code;
            }
        }, 100);
    }
    
    // Set random visitor count
    const countElement = document.getElementById('count');
    if(countElement) {
        const randomCount = 1578 + Math.floor(Math.random() * 100);
        countElement.textContent = randomCount.toLocaleString();
    }
    
    // Card Hover Effect
    document.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

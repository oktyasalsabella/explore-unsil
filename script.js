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
        
        if (input.toLowerCase().includes('game') || input.toLowerCase().includes('coding') || input.toLowerCase().includes('pc') || input.toLowerCase().includes('teknologi') || input.toLowerCase().includes('komputer') || input.toLowerCase().includes('it')) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-purple-500">
                    <h4 class="font-bold text-emerald-900 mb-2">🎯 REKOMENDASI UTAMA: FAKULTAS TEKNIK</h4>
                    <p class="text-sm">Minatmu di bidang teknologi sangat cocok dengan program studi di Fakultas Teknik UNSIL!</p>
                </div>
                
                <div class="space-y-3">
                    <div class="flex items-start">
                        <div class="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">1</div>
                        <div>
                            <div class="font-bold text-purple-800">S1 Informatika</div>
                            <div class="text-xs text-gray-600">Cocok banget untuk penggemar coding dan game! Belajar pemrograman, AI, dan pengembangan software.</div>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-purple-100 text-purple-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">2</div>
                        <div>
                            <div class="font-bold text-purple-800">S1 Sistem Informasi</div>
                            <div class="text-xs text-gray-600">Gabungan bisnis dan teknologi. Cocok jika suka manajemen proyek IT.</div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-blue-50 p-3 rounded-lg text-xs text-blue-800 border border-blue-200">
                    <i class="fas fa-lightbulb mr-2"></i>
                    <strong>Tips:</strong> Ikuti UKM Teknologi Informasi UNSIL untuk kembangkan skill praktismu!
                </div>
            </div>`;
            
        } else if (input.toLowerCase().includes('jualan') || input.toLowerCase().includes('bisnis') || input.toLowerCase().includes('uang') || input.toLowerCase().includes('organisasi') || input.toLowerCase().includes('ekonomi') || input.toLowerCase().includes('pasar')) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-green-500">
                    <h4 class="font-bold text-emerald-900 mb-2">💼 REKOMENDASI UTAMA: FAKULTAS EKONOMI & BISNIS</h4>
                    <p class="text-sm">Passion-mu di bidang bisnis dan organisasi sangat promising!</p>
                </div>
                
                <div class="space-y-3">
                    <div class="flex items-start">
                        <div class="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">1</div>
                        <div>
                            <div class="font-bold text-green-800">S1 Manajemen</div>
                            <div class="text-xs text-gray-600">Perfect match untuk calon entrepreneur! Belajar manajemen pemasaran, keuangan, dan SDM.</div>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">2</div>
                        <div>
                            <div class="font-bold text-green-800">S1 Akuntansi</div>
                            <div class="text-xs text-gray-600">Jika detail-oriented dan suka angka. Prospek karir sebagai auditor atau financial analyst.</div>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-green-100 text-green-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">3</div>
                        <div>
                            <div class="font-bold text-green-800">D4 Perbankan & Keuangan</div>
                            <div class="text-xs text-gray-600">Langsung siap kerja di industri perbankan dan finansial.</div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-green-50 p-3 rounded-lg text-xs text-green-800 border border-green-200">
                    <i class="fas fa-lightbulb mr-2"></i>
                    <strong>Bonus:</strong> UNSIL punya incubator bisnis untuk mahasiswa yang mau startup!
                </div>
            </div>`;
            
        } else if (input.toLowerCase().includes('ajar') || input.toLowerCase().includes('guru') || input.toLowerCase().includes('mengajar') || input.toLowerCase().includes('pendidikan') || input.toLowerCase().includes('sekolah')) {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-blue-500">
                    <h4 class="font-bold text-emerald-900 mb-2">👨‍🏫 REKOMENDASI UTAMA: FAKULTAS KEGURUAN & ILMU PENDIDIKAN</h4>
                    <p class="text-sm">Passion-mu di bidang pendidikan sangat dibutuhkan bangsa!</p>
                </div>
                
                <div class="space-y-3">
                    <div class="flex items-start">
                        <div class="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">1</div>
                        <div>
                            <div class="font-bold text-blue-800">Pendidikan Matematika/Bahasa Inggris</div>
                            <div class="text-xs text-gray-600">Guru bidang ini selalu dibutuhkan. Peluang besar jadi tutor atau content creator edukasi.</div>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">2</div>
                        <div>
                            <div class="font-bold text-blue-800">Pendidikan Jasmani</div>
                            <div class="text-xs text-gray-600">Cocok jika aktif dan suka olahraga. Bisa jadi pelatih atau instruktur fitness.</div>
                        </div>
                    </div>
                    
                    <div class="flex items-start">
                        <div class="bg-blue-100 text-blue-800 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-1">3</div>
                        <div>
                            <div class="font-bold text-blue-800">Pendidikan Masyarakat</div>
                            <div class="text-xs text-gray-600">Unik! Fokus pada pendidikan non-formal dan pengembangan komunitas.</div>
                        </div>
                    </div>
                </div>
                
                <div class="bg-blue-50 p-3 rounded-lg text-xs text-blue-800 border border-blue-200">
                    <i class="fas fa-lightbulb mr-2"></i>
                    <strong>Fakta:</strong> Lulusan FKIP UNSIL punya passing rate tinggi di tes PPG!
                </div>
            </div>`;
            
        } else {
            response = `<div class="space-y-4">
                <div class="bg-gradient-to-r from-emerald-100 to-white p-4 rounded-xl border-l-4 border-emerald-500">
                    <h4 class="font-bold text-emerald-900 mb-2">🎓 REKOMENDASI BERDASARKAN MINATMU</h4>
                    <p class="text-sm">Berdasarkan minat yang kamu ceritakan, berikut beberapa pilihan prodi di UNSIL:</p>
                </div>
                
                <div class="grid grid-cols-2 gap-3">
                    <div class="bg-emerald-50 p-3 rounded-lg">
                        <div class="text-emerald-600 text-lg mb-1">🏢</div>
                        <div class="font-bold text-xs text-emerald-800">Fakultas Teknik</div>
                        <div class="text-[10px] text-gray-600">Untuk problem solver</div>
                    </div>
                    
                    <div class="bg-green-50 p-3 rounded-lg">
                        <div class="text-green-600 text-lg mb-1">💼</div>
                        <div class="font-bold text-xs text-green-800">Fakultas Ekonomi</div>
                        <div class="text-[10px] text-gray-600">Untuk pebisnis muda</div>
                    </div>
                    
                    <div class="bg-yellow-50 p-3 rounded-lg">
                        <div class="text-yellow-600 text-lg mb-1">🌱</div>
                        <div class="font-bold text-xs text-yellow-800">Fakultas Pertanian</div>
                        <div class="text-[10px] text-gray-600">Untuk pecinta alam</div>
                    </div>
                    
                    <div class="bg-pink-50 p-3 rounded-lg">
                        <div class="text-pink-600 text-lg mb-1">❤️</div>
                        <div class="font-bold text-xs text-pink-800">Fakultas Kesehatan</div>
                        <div class="text-[10px] text-gray-600">Untuk peduli kesehatan</div>
                    </div>
                </div>
                
                <div class="bg-amber-50 p-3 rounded-lg text-xs text-amber-800 border border-amber-200">
                    <i class="fas fa-comment-alt mr-2"></i>
                    <strong>Saran:</strong> Coba konsultasi langsung dengan tim PMB UNSIL untuk diskusi lebih detail!
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

// ======================================
// RPL SMART ASSISTANT - SMKN 9 MEDAN
// ======================================

// BUKA CHATBOT
function bukaChatbot() {
    document.getElementById("chatbot").classList.remove("hidden");
    document.getElementById("chatToggle").style.display = "none";
}

// TUTUP CHATBOT
function tutupChatbot() {
    document.getElementById("chatbot").classList.add("hidden");
    document.getElementById("chatToggle").style.display = "block";
}

// DATABASE PERTANYAAN DAN JAWABAN
function cariJawaban(pesan) {
    let teks = pesan.toLowerCase().trim();

    // Jawaban jika datanya belum ada (isi sendiri nanti)
    let belumAda = "Maaf, data tersebut belum tersedia di sistem saya. Silakan tanyakan langsung ke sekolah atau cek website resmi smkn9medan.sch.id.";

    // ---------- SAPAAN ----------
    if (teks.includes("hallo") || teks.includes("halo") || teks.includes("hai")) {
        return "Halo! Selamat datang di RPL Smart Assistant SMK Negeri 9 Medan. Senang bisa membantu kamu!";
    }

    if (teks.includes("siapa kamu") || teks.includes("nama kamu")) {
        return "Saya adalah RPL Smart Assistant, asisten virtual Portal RPL SMK Negeri 9 Medan.";
    }

    if (teks.includes("terima kasih") || teks.includes("makasih")) {
        return "Sama-sama! Semangat belajar dan terus berkarya di bidang Rekayasa Perangkat Lunak!";
    }

    // ---------- PROFIL SEKOLAH ----------
    if (teks.includes("alamat") || teks.includes("lokasi") || teks.includes("dimana sekolah")) {
        return "SMK Negeri 9 Medan beralamat di Jl. Patriot No. 20 A, Lalang, Kec. Medan Sunggal, Kota Medan, Sumatera Utara.";
    }

    if (teks.includes("akreditasi")) {
        return "SMK Negeri 9 Medan terakreditasi A.";
    }

    if (teks.includes("npsn")) {
        return "NPSN SMK Negeri 9 Medan adalah 10210766.";
    }

    if (teks.includes("website sekolah") || teks.includes("web sekolah") || teks.includes("situs resmi")) {
        return "Website resmi sekolah: smkn9medan.sch.id";
    }

    if (teks.includes("kontak") || teks.includes("telepon") || teks.includes("nomor") || teks.includes("email")) {
        return "Untuk kontak resmi sekolah, kunjungi smkn9medan.sch.id atau datang langsung ke Jl. Patriot No. 20 A, Medan Sunggal, Medan.";
    }

    if (teks.includes("negeri atau swasta") || teks.includes("status sekolah")) {
        return "SMK Negeri 9 Medan adalah sekolah berstatus negeri.";
    }

    if (teks.includes("jumlah siswa") || teks.includes("berapa siswa")) {
        return "Menurut data portal sekolah, SMK Negeri 9 Medan memiliki sekitar 1.385 siswa. Jumlah ini bisa berubah setiap tahun.";
    }

    if (teks.includes("kepala sekolah") || teks.includes("kepsek")) {
        return "Kepala SMK Negeri 9 Medan saat ini adalah Cahyani Monalista Harefa, S.Pd., M.Si. yang menjabat sebagai Pelaksana Tugas (Plt.) Kepala Sekolah.";
    }

    if (teks.includes("tahun berapa berdiri smkn 9 medam") || teks.includes("didirikan") || teks.includes("sejarah")) {
        return "SMKN 9 Medan didirikan pada 7 Maret 1997 berdasarkan SK Pendirian No. 036/0/1997.";
    }

    
    // ---------- JURUSAN ----------
    if (teks.includes("jurusan apa") || teks.includes("daftar jurusan") || teks.includes("ada jurusan")) {
        return "Jurusan yang saya ketahui di SMK Negeri 9 Medan: Rekayasa Perangkat Lunak (RPL) dan Pekerjaan Sosial (Peksos). Untuk daftar lengkap, cek smkn9medan.sch.id.";
    }

    if (teks.includes("peksos") || teks.includes("pekerjaan sosial")) {
        return "Pekerjaan Sosial (Peksos) adalah salah satu jurusan di SMK Negeri 9 Medan yang mempelajari pelayanan dan pendampingan sosial bagi masyarakat.";
    }

    if (teks.includes("apa itu rpl") || teks.includes("pengertian rpl")) {
        return "RPL adalah Rekayasa Perangkat Lunak. Jurusan ini mempelajari pembuatan aplikasi, website, pemrograman, database, dan pengembangan perangkat lunak.";
    }

    if (teks.includes("kurikulum") || teks.includes("pelajaran")) {
        return "Pembelajaran RPL meliputi pemrograman, pengembangan web, basis data, pengembangan aplikasi, dan teknologi informasi.";
    }

    // ---------- PENDAFTARAN & BIAYA ----------
    if (teks.includes("daftar") || teks.includes("ppdb") || teks.includes("spmb") || teks.includes("siswa baru")) {
        return "Info pendaftaran siswa baru (syarat, jalur, dan jadwal) diumumkan lewat website resmi sekolah smkn9medan.sch.id atau datang langsung ke sekolah.";
    }

    if (teks.includes("biaya") || teks.includes("spp") || teks.includes("bayaran")) {
        return "SMKN 9 Medan tidak memberlakukan pungutan SPP wajib bulanan dengan nominal tertentu bagi siswa.";
    }

    if (teks.includes("beasiswa") || teks.includes("kip")) {
        return "Info beasiswa atau bantuan pendidikan diumumkan oleh sekolah. Tanyakan ke wali kelas atau tata usaha untuk syarat dan jadwalnya.";
    }

    // ---------- KEGIATAN SEKOLAH ----------
    if (teks.includes("fasilitas") || teks.includes("laboratorium") || teks.includes("lab") || teks.includes("perpustakaan")) {
        return "Fasilitas SMK Negeri 9 Medan antara lain ruang kelas, laboratorium komputer/RPL untuk praktikum, dan perpustakaan.";
    }

    if (teks.includes("ekskul") || teks.includes("ekstrakurikuler")) {
        return "eskul khusus rpl disusaikan oleh sekolah dengan eskul yang sudah ditetapkan oleh pihak sekolah";
    }


    if (teks.includes("guru")) {
        return "Guru RPL membimbing siswa dalam mempelajari pemrograman, pengembangan website, aplikasi, dan teknologi perangkat lunak.";
    }

    if (teks.includes("pkl") || teks.includes("magang")) {
        return "PKL atau Praktik Kerja Lapangan adalah kegiatan pembelajaran di dunia industri untuk memperoleh pengalaman kerja secara langsung.";
    }

    if (teks.includes("lsp") || teks.includes("uji kompetensi") || teks.includes("sertifikasi")) {
        return "Uji kompetensi (LSP) adalah penilaian kemampuan siswa sesuai standar profesi. Siapkan portofolio web responsif kamu sebelum jadwal asesmen.";
    }

    if (teks.includes("lulusan") || teks.includes("setelah lulus") || teks.includes("kerja")) {
        return "Lulusan RPL bisa bekerja sebagai web developer, programmer, tester, atau UI/UX designer. Bisa juga berwirausaha digital atau melanjutkan kuliah di bidang informatika.";
    }

    if (teks.includes("proyek") || teks.includes("karya siswa")) {
        return "Contoh proyek siswa RPL antara lain Aplikasi Inventaris QR, Portal CBT Online, E-Katalog Produk PKK, E-Learning, Chatbot, dan Dashboard Nilai Siswa.";
    }

    // ---------- MATERI PEMROGRAMAN ----------
    if (teks.includes("html")) {
        return "HTML adalah bahasa markup untuk membuat struktur halaman website, seperti judul, paragraf, gambar, dan tabel.";
    }

    if (teks.includes("css")) {
        return "CSS digunakan untuk mengatur tampilan website, seperti warna, ukuran tulisan, tata letak, animasi, dan desain responsif.";
    }

    if (teks.includes("javascript")) {
        return "JavaScript adalah bahasa pemrograman yang membuat website menjadi interaktif, seperti tombol, menu, dan chatbot.";
    }

    if (teks.includes("php")) {
        return "PHP adalah bahasa pemrograman sisi server untuk membuat website dinamis yang terhubung ke database.";
    }

    if (teks.includes("python")) {
        return "Python adalah bahasa pemrograman yang mudah dibaca, dipakai untuk web, otomatisasi, data, dan kecerdasan buatan.";
    }

    if (teks.includes("database") || teks.includes("mysql")) {
        return "Database merupakan tempat menyimpan dan mengelola data. Salah satu contohnya adalah MySQL.";
    }

    if (teks.includes("website") || teks.includes("web")) {
        return "Website adalah kumpulan halaman yang dapat diakses melalui browser. Website dapat dibuat menggunakan HTML, CSS, dan JavaScript.";
    }

    return "Maaf, saya belum memahami pertanyaan tersebut. Silakan tanyakan tentang sekolah, jurusan, pendaftaran, PKL, proyek siswa, HTML, CSS, JavaScript, website, atau database.";
}

// MENAMPILKAN PESAN
function sendMessage() {
    const input = document.getElementById("userInput");
    const chatArea = document.getElementById("chatArea");

    if (!input || !chatArea) {
        console.error("Elemen chatbot tidak ditemukan!");
        return;
    }

    const pesan = input.value.trim();

    if (pesan === "") return;

    // Tampilkan pesan pengguna
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = pesan;
    chatArea.appendChild(userMessage);

    // Tampilkan jawaban chatbot
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";

    try {
        botMessage.textContent = cariJawaban(pesan);
    } catch (error) {
        botMessage.textContent = "Maaf, terjadi kesalahan. Silakan coba kembali.";
        console.error(error);
    }

    chatArea.appendChild(botMessage);

    // Kosongkan kolom input
    input.value = "";

    // Scroll otomatis
    chatArea.scrollTop = chatArea.scrollHeight;
}

// ENTER UNTUK MENGIRIM PESAN
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("userInput");

    if (input) {
        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                sendMessage();
            }
        });
    }
});
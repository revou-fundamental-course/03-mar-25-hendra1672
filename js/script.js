// Ini file javascript

// Mendapatkan referensi ke elemen formulir dan output
const registrationForm = document.getElementById('registrationForm');
const namaLengkapInput = document.getElementById('namaLengkap');
const tanggalLahirInput = document.getElementById('tanggalLahir');
const priaRadio = document.getElementById('pria');
const wanitaRadio = document.getElementById('wanita');
const alamatTextarea = document.getElementById('alamat');

// Element untuk menampilkan output
const outputData = document.getElementById('outputData');

// Menambahkan event listener untuk SUBMIT formulir
if (registrationForm) { // Tambahkan cek ini untuk memastikan elemen ditemukan
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const nama = namaLengkapInput.value;
        const tanggalLahir = tanggalLahirInput.value;
        let jenisKelamin = '';
        if (priaRadio && priaRadio.checked) { // Tambahkan cek untuk radio button
            jenisKelamin = priaRadio.value;
        } else if (wanitaRadio && wanitaRadio.checked) {
            jenisKelamin = wanitaRadio.value;
        } else {
            jenisKelamin = 'Tidak dipilih';
        }
        const alamat = alamatTextarea.value;

        let formattedTanggalLahir = tanggalLahir;
        if (tanggalLahir) {
            const dateParts = tanggalLahir.split('-');
            formattedTanggalLahir = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
        }

        let outputText = `Nama Lengkap: ${nama}\n`;
        outputText += `Tanggal Lahir: ${formattedTanggalLahir}\n`;
        outputText += `Jenis Kelamin: ${jenisKelamin}\n`;
        outputText += `Alamat: ${alamat}\n`;

        if (outputData) { // Tambahkan cek ini untuk outputData
            outputData.textContent = outputText;
        }

        registrationForm.reset();
    });
} else {
    console.error("Elemen 'registrationForm' tidak ditemukan. Pastikan ID cocok di HTML.");
}


// =====================================================================
// Bagian Banner Autoslide
// =====================================================================

let bannerIndex = 0;
// Panggil showBanner() pertama kali untuk menampilkan banner awal
showBanner();

// Function to change banner
function nextBanner() {
    console.log('Fungsi nextBanner dipanggil. bannerIndex sebelum: ' + bannerIndex);
    bannerIndex += 1;
    showBanner();
}

// Function to show banner
function showBanner() {
    console.log('Fungsi showBanner dipanggil. current bannerIndex: ' + bannerIndex);
    const banners = document.getElementsByClassName('banner-img');
    console.log('Jumlah banner ditemukan: ' + banners.length);

    if (banners.length === 0) {
        console.error('Tidak ada elemen dengan class "banner-img" ditemukan!');
        return;
    }

    if (bannerIndex >= banners.length) {
        bannerIndex = 0;
    }
    if (bannerIndex < 0) {
        bannerIndex = banners.length - 1;
    }

    for (let i = 0; i < banners.length; i++) {
        banners[i].style.display = 'none';
    }

    banners[bannerIndex].style.display = 'block';
    console.log('Banner ditampilkan: ' + (bannerIndex + 1));
}

// Set interval to change banner every 2000ms (2 seconds)
setInterval(nextBanner, 2000);
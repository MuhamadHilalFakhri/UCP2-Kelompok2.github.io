function Send() {
    var nama = document.getElementById("nama").value;
    var email = document.getElementById("email").value;
    var comment = document.getElementById("comment").value;

    Swal.fire({
        title: 'Informasi Form',
        html: 'Nama: ' + nama + '<br>Email: ' + email + '<br>Masukkan: ' + comment,
        icon: 'info',
        confirmButtonText: 'OK'
    }).then(() => {
        // Kosongkan nilai input setelah pesan Swal ditutup
        document.getElementById("nama").value = '';
        document.getElementById("email").value = '';
        document.getElementById("comment").value = '';
    });
}

// menggunakan typed.js 
var typed = new Typed('.element', {
    strings: ["Dapatkan penawaran terbaik di Summer Sale 2024! Nikmati harga yang sangat murah untuk berbagai produk pilihan.",
         " Segera kunjungi toko atau situs web kami dan manfaatkan diskon besar-besaran selama musim panas ini.Belanja lebih banyak, hemat lebih banyak!"],
    typeSpeed: 75,
    loop: true,
    showCursor: false
  });
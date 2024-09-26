"use strict";
// Karakter Utama
let namaPahlawan = "Arion";
let umur = 30;
let statusSiapBertarung = true;
// Sumber Daya Kerajaan
let emas = 5000;
let persediaanMakanan = 120;
let prajurit = 200;
// Petualangan Pahlawan
let emasTambahan = 1500;
let pengalamanBertarung = 75;
// Mengupdate total emas kerajaan
emas += emasTambahan;
console.log(`Total emas setelah petualangan: ${emas}`);
// Misi Penyembuhan
// Fungsi untuk mengurangi kesehatan prajurit
function kurangiKesehatan(jumlahPrajurit, jumlahPoinKesehatan) {
    let kesehatanPrajurit = 100; // Kesehatan awal setiap prajurit
    let totalKesehatan = kesehatanPrajurit - jumlahPoinKesehatan;
    if (totalKesehatan <= 0) {
        console.log(`Prajurit tidak bisa bertarung!`);
        return 0; // Kesehatan habis
    }
    else {
        console.log(`Total kesehatan setelah dikurangi untuk setiap prajurit: ${totalKesehatan}`);
        return totalKesehatan; // Kesehatan yang tersisa
    }
}
// Setiap prajurit kehilangan 5 poin kesehatan
let kesehatanSetelahDikurangi = kurangiKesehatan(prajurit, 5);
// Rangkuman Misi Arion
function rangkumanMisi() {
    console.log("Rangkuman Misi Arion:");
    console.log(`-Nama Pahlawan: ${namaPahlawan}`);
    console.log(`-Emas yang dikumpulkan: ${emas}`);
    console.log(`-Poin pengalaman yang didapat: ${pengalamanBertarung} XP`);
}
// Menampilkan rangkuman misi
rangkumanMisi();

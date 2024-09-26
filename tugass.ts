// Karakter Utama
let namaPahlawan: string = "Arion";
let umur: number = 30;
let statusSiapBertarung: boolean = true;

// Sumber Daya Kerajaan
let emas: number = 5000;
let persediaanMakanan: number = 120;
let prajurit: number = 200;

// Petualangan Pahlawan
let emasTambahan: number = 1500;
let pengalamanBertarung: number = 75;

// Mengupdate total emas kerajaan
emas += emasTambahan;
console.log(`Total emas setelah petualangan: ${emas}`);

// Misi Penyembuhan
// Fungsi untuk mengurangi kesehatan prajurit
function kurangiKesehatan(jumlahPrajurit: number, jumlahPoinKesehatan: number): number {
    let kesehatanPrajurit: number = 100; // Kesehatan awal setiap prajurit
    let totalKesehatan = kesehatanPrajurit - jumlahPoinKesehatan;

    if (totalKesehatan <= 0) {
        console.log(`Prajurit tidak bisa bertarung!`);
        return 0; // Kesehatan habis
    } else {
        console.log(`Total kesehatan setelah dikurangi untuk setiap prajurit: ${totalKesehatan}`);
        return totalKesehatan; // Kesehatan yang tersisa
    }
}

// Setiap prajurit kehilangan 5 poin kesehatan
let kesehatanSetelahDikurangi = kurangiKesehatan(prajurit, 5);

// Rangkuman Misi Arion
function rangkumanMisi(): void {
    console.log("Rangkuman Misi Arion:");
    console.log(`-Nama Pahlawan: ${namaPahlawan}`);
    console.log(`-Emas yang dikumpulkan: ${emas}`);
    console.log(`-Poin pengalaman yang didapat: ${pengalamanBertarung} XP`);
}

// Menampilkan rangkuman misi
rangkumanMisi();
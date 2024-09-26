"use strict";
//!STRING
let nama = "Nia Surniati";
const alamat = "Tangerang Banten";
//!NUMBER INT
let age = 20;
//! NUMBER FLOAT
let tinggiBadan = 1.61;
//! BOOLEAN
let lulus = false;
//! UNDEFIND
let pekerjaan = undefined;
//!NULL
let nilai = null;
// UNION TYPES
let value;
value = "Hello"; // or value = 42;
let myVar = true; // or myVar = "Some string";
// SYMBOL
const uniqueSymbolPassword = Symbol("myUniqueSymbolPassword");
//! ANY
let data = "Ini bisa di isi apa saja";
data = 1;
//! ENUM
var Warna;
(function (Warna) {
    Warna["Merah"] = "\u001B[31m";
    Warna["Kuning"] = "\u001B[33m";
    Warna["Hijau"] = "\u001B[32m";
})(Warna || (Warna = {}));
let warnaFavorit = Warna.Hijau;
//! ARRAY of NUMBERS
let nilaiExamp = [75, 85, 95];
//! ARRAY OF STRING
let daftarNamaKu = ["a.n", "Nia", "Surniati"];
//! ARRAY OF ANY
let mix = [21, "Sur", false];
//!TUPLE
let koordinat = [10.5, 15.2];
//! UNKNOWN
let tipeDataTakDiketahui = "Bisa tipe apa saja";
//! OBJECT
let dataDiri = {
    nama: "Nia",
    umur: 20,
    sukses: true,
};
let person = {
    firstName: "Nia",
    lastName: "Surniati",
    alamat: "Alamat di sini",
    menikah: false,
    age: 20
};
//! VOID
function funcVoid() {
    console.log("Pesan telah dicetak. digunakan untuk tanpa return value");
}
funcVoid();
//! FUNCTION TYPE
let kali = function (a, b) {
    return a * b;
};
//! FUNCTION NEVER
function errorMessage(message) {
    throw new Error(message);
}
try {
    errorMessage("Ini adalah pesan error.");
}
catch (error) {
    console.error(error);
}
//! LITERAL TYPES
let arahMatahari = "timur";
//! READONLY ARRAY
let daftarBaca = [1, 2, 3];
let orang = { nama: "Nia", pekerjaan: "Mahasiswi" };
//! TYPE ASSERTION
let panjangAngka = "1000";
let angkaDariString = panjangAngka.length;
console.log({ nama });
console.log({ alamat });
console.log({ age });
console.log({ tinggiBadan });
console.log({ lulus });
console.log({ pekerjaan });
console.log({ nilai });
console.log("Value:", value);
console.log("My Variable (StringOrBoolean):", myVar);
console.log("Unique Symbol:", uniqueSymbolPassword);
console.log({ data });
console.log(`${warnaFavorit}Ini adalah warna favorit saya!`);
console.log('\x1b[0m'); // Reset warna
console.log({ nilaiExamp });
console.log({ daftarNamaKu });
console.log({ mix });
console.log({ koordinat });
console.log({ tipeDataTakDiketahui });
console.log({ dataDiri });
console.log(person);
console.log(funcVoid);
console.log(kali(2, 1));
console.log(errorMessage);
console.log({ arahMatahari });
console.log({ daftarBaca });
console.log(orang);
console.log({ panjangAngka });
console.log(angkaDariString);
console.log(" ");
console.log("FUNCTION OPERASI MATEMATIKA : ");
//?  TUGAS FUNCTION OPERASI MATEMATIKA
function penjumlahan(x, y) {
    return x + y;
}
function perkalian(x, y) {
    return x * y;
}
const pengurangan = (x, y) => {
    return x - y;
};
const pembagian = (x, y) => {
    return x / y;
};
console.log("hasil penjumlahan " + penjumlahan(10, 10));
console.log("hasil perkalian " + perkalian(10, 10));
console.log("hasil pengurangan " + pengurangan(10, 10));
console.log("hasil pembagian " + pembagian(10, 10));

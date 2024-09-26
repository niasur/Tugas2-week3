//!STRING
let nama: string = "Nia Surniati";
const alamat: string = "Tangerang Banten";

//!NUMBER INT
let age: number = 20;

//! NUMBER FLOAT
let tinggiBadan: number = 1.61;

//! BOOLEAN
let lulus: boolean = false;

//! UNDEFIND
let pekerjaan: undefined = undefined;

//!NULL
let nilai: null = null;

// UNION TYPES
let value: string | number;
value = "Hello"; // or value = 42;

// TYPE ALIASES
type StringOrBoolean = string | boolean;
let myVar: StringOrBoolean = true; // or myVar = "Some string";

// SYMBOL
const uniqueSymbolPassword: symbol = Symbol("myUniqueSymbolPassword");

//! ANY
let data: any = "Ini bisa di isi apa saja";
data = 1

//! ENUM
enum Warna {
  Merah = '\x1b[31m',  // Kode untuk Merah
  Kuning = '\x1b[33m', // Kode untuk Kuning
  Hijau = '\x1b[32m',  // Kode untuk Hijau
}
let warnaFavorit: Warna = Warna.Hijau;

//! ARRAY of NUMBERS
let nilaiExamp: number[] = [75, 85, 95];

//! ARRAY OF STRING
let daftarNamaKu: string[] = ["a.n", "Nia", "Surniati"];

//! ARRAY OF ANY
let mix: any[] = [21, "Sur", false];

//!TUPLE
let koordinat: [number, number] = [10.5, 15.2];

//! UNKNOWN
let tipeDataTakDiketahui: unknown = "Bisa tipe apa saja";

//! OBJECT
let dataDiri: { nama: string; umur: number; sukses: boolean } = {
  nama: "Nia",
  umur: 20,
  sukses: true,
};

//! INTERFACE
interface Person {
  firstName: string;
  lastName: string;
  alamat: string;
  menikah: boolean;
  age: number;
}
let person: Person = {
  firstName: "Nia",
  lastName: "Surniati",
  alamat: "Alamat di sini",
  menikah: false,
  age: 20
};

//! VOID
function funcVoid(): void {
  console.log("Pesan telah dicetak. digunakan untuk tanpa return value");
}
funcVoid();

//! FUNCTION TYPE
let kali: (a: number, b: number) => number = function (a, b) {
  return a * b;
};

//! FUNCTION NEVER
function errorMessage(message: string): never {
  throw new Error(message);
}

try {
  errorMessage("Ini adalah pesan error.");
} catch (error) {
  console.error(error);
}

//! LITERAL TYPES
let arahMatahari: "timur" | "barat" = "timur";

//! READONLY ARRAY
let daftarBaca: readonly number[] = [1, 2, 3];

//! INTERSECTION TYPE
type orang = { nama: string };
type pekerjaan = { pekerjaan: string };
let orang: orang & pekerjaan = { nama: "Nia", pekerjaan: "Mahasiswi" };

//! TYPE ASSERTION
let panjangAngka: any = "1000";
let angkaDariString: number = (panjangAngka as string).length;

console.log({nama});
console.log({alamat});
console.log({age});
console.log({tinggiBadan});
console.log({lulus});
console.log({pekerjaan});
console.log({nilai});
console.log("Value:", value);
console.log("My Variable (StringOrBoolean):", myVar);
console.log("Unique Symbol:", uniqueSymbolPassword);
console.log({data});
console.log(`${warnaFavorit}Ini adalah warna favorit saya!`);
console.log('\x1b[0m'); // Reset warna
console.log({nilaiExamp});
console.log({daftarNamaKu});
console.log({mix});
console.log({koordinat});
console.log({tipeDataTakDiketahui});
console.log({dataDiri});
console.log(person);
console.log(funcVoid);
console.log(kali(2, 1));
console.log(errorMessage);
console.log({arahMatahari});
console.log({daftarBaca});
console.log(orang);
console.log({panjangAngka});
console.log(angkaDariString);
console.log(" ");
console.log("FUNCTION OPERASI MATEMATIKA : ");

//?  TUGAS FUNCTION OPERASI MATEMATIKA
function penjumlahan(x: number, y: number): number {
  return x + y;
}
function perkalian(x: number, y: number): number {
  return x * y;
}
const pengurangan = (x: number, y: number): number => {
  return x - y;
};
const pembagian = (x: number, y: number): number => {
  return x / y;
};
console.log("hasil penjumlahan " + penjumlahan(10, 10));
console.log("hasil perkalian " + perkalian(10, 10));
console.log("hasil pengurangan " + pengurangan(10, 10));
console.log("hasil pembagian " + pembagian(10, 10));
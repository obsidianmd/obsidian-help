---
permalink: formulas
description: 'Formula memungkinkan Anda membuat properti terhitung menggunakan data dari properti lain. Anda dapat melakukan perhitungan, memanipulasi teks, bekerja dengan tanggal, dan lainnya.'
---
Rumus memungkinkan Anda membuat properti terhitung di [[Pengenalan Basis|Basis]] menggunakan data dari [[Properti|properti]] lainnya. Anda dapat melakukan perhitungan, memanipulasi teks, bekerja dengan tanggal, dan lainnya.

## Apa yang bisa dilakukan rumus

Rumus dapat membantu Anda:

- **Menghitung nilai**, menjumlahkan harga, menghitung total, atau melakukan operasi matematika.
- **Memanipulasi teks**, menggabungkan string, mengubah huruf besar/kecil, atau mengekstrak substring.
- **Bekerja dengan tanggal**, menghitung selisih waktu, memformat tanggal, atau menentukan tenggat waktu.
- **Menerapkan logika**, menggunakan pernyataan kondisional untuk menampilkan nilai yang berbeda.
- **Memproses daftar**, menyaring, mengurutkan, memetakan, atau mengagregasi data daftar.

## Membuat properti rumus

Untuk membuat properti rumus:

1. Di basis Anda, klik **Properti** di bilah alat.
2. Klik **Tambahkan rumus** di bagian bawah menu.
3. Masukkan nama untuk properti rumus Anda.
4. Ketik rumus Anda di kolom **Rumus**.
5. Tutup dialog.

Editor rumus akan melengkapi otomatis nama [[Fungsi|fungsi]] dan properti saat Anda mengetik untuk memvalidasi sintaksis rumus Anda. Tanda centang hijau muncul ketika rumus Anda valid.

Setelah dibuat, Anda dapat menggunakan properti rumus seperti properti lainnya di basis Anda. Tambahkan ke [[Tampilan|tampilan]], gunakan dalam filter, urutkan berdasarkan rumus, dan lainnya.

## Menulis rumus

Di editor rumus, ketik ekspresi menggunakan properti, operator, dan fungsi.

### Mereferensikan properti

Anda dapat mereferensikan berbagai jenis properti dalam rumus Anda:

- **Properti catatan** — Properti dari [[Properti|metadata awal]] catatan.
- **Properti file** — Properti bawaan seperti `file.name`, `file.size`, atau `file.mtime`.
- **Properti rumus** — Rumus lain menggunakan `formula.nama_rumus`.

**Contoh:**

- `price * quantity` — mengalikan dua properti catatan
- `file.name + " - " + description` — menggabungkan nama file dengan properti catatan
- `formula.price_per_unit * 1.1` — menggunakan properti rumus lain

### Menggunakan operator

**Operator aritmatika** melakukan operasi matematika pada angka:

- `price + tax` — penjumlahan
- `price - discount` — pengurangan
- `price * quantity` — perkalian
- `price / quantity` — pembagian
- `(part / whole) * 100` — menggunakan tanda kurung untuk urutan operasi

**Operator perbandingan** membandingkan nilai:

- `price > 100` — lebih besar dari
- `age < 18` — lebih kecil dari
- `status == "Done"` — sama dengan
- `status != "Done"` — tidak sama dengan
- `file.mtime > now() - '7d'` — membandingkan tanggal

**Operator boolean** menggabungkan kondisi logika:

- `!completed` — bukan
- `price > 0 && quantity > 0` — dan
- `urgent || important` — atau

Pelajari lebih lanjut di [[Sintaksis Basis#Operator|Sintaksis Basis]].

### Menggunakan fungsi

Fungsi melakukan operasi pada nilai. Fungsi yang tersedia tergantung pada jenis nilai yang sedang Anda kerjakan. Lihat daftar lengkap [[Fungsi]].

**Kategori fungsi umum:**

- **Fungsi global** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Fungsi string** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Fungsi angka** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Fungsi tanggal** — `format()`, `relative()`, `date()`, `time()`
- **Fungsi daftar** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Contoh:**

- `if(price, "$" + price.toFixed(2), "")` untuk mendefinisikan kondisional dengan pemformatan angka.
- `file.name.lower()` untuk mengonversi ke huruf kecil.
- `tags.contains("urgent")` untuk memeriksa apakah daftar tag berisi suatu nilai.
- `due_date.format("YYYY-MM-DD")` untuk memformat tanggal.

## Contoh rumus

### Menghitung tenggat waktu

Menetapkan tanggal jatuh tempo proyek sebagai 2 minggu setelah tanggal mulai:

```js
start_date + "2w"
```

### Menampilkan status terlambat

Menampilkan "Overdue" jika tanggal jatuh tempo telah lewat dan status bukan "Done":

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Memformat mata uang

Menampilkan harga dengan 2 angka desimal dan simbol mata uang:

```js
if(price, "$" + price.toFixed(2), "")
```

### Menghitung item daftar

Menghitung jumlah item dalam properti daftar:

```js
tasks.length
```

### Menghitung skor prioritas

Menggabungkan beberapa faktor menjadi skor prioritas:

```js
(impact * urgency) / effort
```

### Menggabungkan kolom teks

Membuat nama lengkap dari nama depan dan nama belakang:

```js
first_name + " " + last_name
```

### Menghitung total biaya

Mengalikan biaya bulanan dengan jumlah bulan kepemilikan:

```js
monthlyUses * formula.Owned.round()
```

## Jenis data

Rumus bekerja dengan berbagai jenis data:

- **String** — Teks yang diapit tanda kutip: `"hello"` atau `'world'`
- **Angka** — Nilai numerik: `42`, `3.14`, `(2 + 2)`
- **Boolean** — Benar atau salah: `true`, `false`
- **Tanggal** — Dibuat dengan `date()`, `today()`, atau `now()`
- **Daftar** — Kumpulan nilai: `[1, 2, 3]`
- **Objek** — Pasangan kunci-nilai: `{"name": "value"}`

Jenis output rumus ditentukan oleh data dan fungsi yang digunakan.

## Mereferensikan rumus lain

Rumus dapat mereferensikan rumus lain, membuat perhitungan turunan. Misalnya, jika Anda memiliki rumus bernama `price_per_unit`:

```js
price / quantity
```

Anda dapat mereferensikannya di rumus lain:

```js
formula.price_per_unit * 1.1
```

> [!warning] Hindari referensi melingkar
> Rumus tidak dapat mereferensikan dirinya sendiri secara langsung maupun tidak langsung melalui rumus lain.

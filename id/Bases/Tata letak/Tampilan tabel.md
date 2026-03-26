---
permalink: bases/views/table
---
Tabel adalah jenis [[Tampilan|tampilan]] yang dapat Anda gunakan di [[Pengenalan Basis|Basis]].

Pilih ![[lucide-table.svg#icon]]  **Tabel** dari menu tampilan untuk menampilkan file sebagai tabel dengan baris untuk setiap file, dan kolom untuk [[Properti]] dari file tersebut.

![Contoh basis yang menampilkan tampilan tabel dengan daftar buku](bases-noshadow.png#interface)

## Pengaturan

Pengaturan tampilan tabel dapat dikonfigurasi di [[Tampilan#Pengaturan tampilan|Pengaturan tampilan]].

### Tinggi baris

Tinggi baris memungkinkan Anda menampilkan lebih banyak informasi. Pilih antara **pendek**, **sedang**, **tinggi**, dan **sangat tinggi**.

## Ringkasan

Anda dapat menambahkan ringkasan ke kolom tabel untuk menghitung nilai seperti total, rata-rata, atau jumlah dengan cepat untuk baris yang saat ini ditampilkan dalam tampilan.

Ringkasan terikat pada tampilan, bukan pada basis. Setiap tampilan dapat menampilkan ringkasan yang berbeda untuk kolom yang sama.

### Tambahkan ringkasan

1. Klik kanan header kolom di tampilan tabel.
2. Pilih ![[lucide-calculator.svg#icon]] **Ringkasan…**.
3. Pilih salah satu fungsi ringkasan bawaan, atau pilih ![[lucide-square-function.svg#icon]] **Tambahkan ringkasan** untuk mendefinisikan milik Anda sendiri.

Ringkasan muncul di bagian bawah kolom. Ketika hasil [[Tampilan#Urutkan dan kelompokkan hasil|dikelompokkan]], ringkasan untuk setiap kelompok ditampilkan di bagian atas kelompok.

Setelah bilah ringkasan ditambahkan, Anda dapat menambahkan lebih banyak ringkasan untuk kolom lain dengan mengklik sel ringkasan. Bilah ringkasan disembunyikan jika semua ringkasan dihapus.

### Ringkasan bawaan

Ringkasan berikut tersedia secara bawaan. Opsi dapat bervariasi tergantung pada tipe properti.

#### Semua tipe properti

- **Tidak ada nilai**: jumlah baris tanpa nilai.
- **Terisi**: jumlah baris dengan nilai.
- **Unik**: jumlah nilai yang berbeda.

#### Angka

- **Rata-rata**: rata-rata semua nilai numerik.
- **Maks**: nilai terbesar.
- **Median**: nilai median.
- **Min**: nilai terkecil.
- **Rentang**: selisih antara maks dan min.
- **Stddev**: standar deviasi.
- **Jumlah**: total semua nilai.

#### Tanggal

- **Paling awal**: tanggal terkecil/tertua.
- **Paling akhir**: tanggal terbesar/terbaru.
- **Rentang**: selisih antara paling awal dan paling akhir.

#### Kotak centang

- **Dicentang**: jumlah baris di mana kotak centang aktif.
- **Tidak dicentang**: jumlah baris di mana kotak centang nonaktif.

### Ringkasan kustom

Anda dapat mendefinisikan ringkasan Anda sendiri menggunakan rumus:

1. Di menu ![[lucide-calculator.svg#icon]] **Ringkasan…**, pilih ![[lucide-square-function.svg#icon]] **Tambahkan ringkasan**.
2. Beri nama ringkasan tersebut.
3. Masukkan rumus. Rumus berjalan pada daftar nilai di kolom tersebut (misalnya, menggunakan [[Fungsi|fungsi]] seperti `values.reduce(...)`).
4. Simpan ringkasan.

Ringkasan kustom berguna ketika Anda membutuhkan perhitungan yang tidak tercakup oleh opsi bawaan.

## Pintasan

Anda dapat bergerak dengan cepat di tampilan tabel menggunakan mouse dan [[Pintasan penyuntingan|pintasan keyboard]] berikut.

- Shift-klik membuat seleksi sel.
- Klik kanan pada seleksi sel untuk mengakses tindakan tambahan untuk file-file tersebut.

| Tindakan                                                                                                                   | Pintasan             | macOS               |
| -------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| Salin sel yang dipilih                                                                                                     | `Ctrl+C`             | `Cmd+C`             |
| Tempel sel yang dipilih                                                                                                    | `Ctrl+V`             | `Cmd+V`             |
| Urungkan perubahan pada properti                                                                                           | `Ctrl+Z`             | `Cmd+Z`             |
| Ulangi perubahan pada properti                                                                                             | `Ctrl+Shift+Z`       | `Cmd+Shift+Z`       |
| Pilih semua sel di kelompok saat ini                                                                                       | `Ctrl+A`             | `Cmd+A`             |
| Pilih semua sel ke arah tertentu                                                                                           | `Ctrl+Shift+Arrow`   | `Ctrl+Shift+Arrow`  |
| Pilih kolom                                                                                                                | `Ctrl+Space`         |                     |
| Pilih baris                                                                                                                | `Shift+Space`        |                     |
| Fokus sel saat ini — untuk kotak centang, ini mengubah status kotak centang, untuk rumus, ini membuka editor rumus          | `Enter`              |                     |
| Ke kolom pertama                                                                                                           | `Home`               |                     |
| Ke kolom terakhir                                                                                                          | `End`                |                     |
| Navigasi naik dan turun sesuai tinggi halaman                                                                              | `PageUp`,`PageDown`  |                     |
| Hapus seleksi sel saat ini                                                                                                 | `Esc`                |                     |
| Hapus sel saat ini                                                                                                         | `Backspace`          |                     |
| Ke sel berikutnya                                                                                                          | `Tab`                |                     |
| Ke sel sebelumnya                                                                                                          | `Shift-Tab`          |                     |

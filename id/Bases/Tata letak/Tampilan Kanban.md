---
permalink: bases/views/kanban
---
Kanban adalah jenis [[Tampilan|tampilan]] yang dapat Anda gunakan di [[Pengenalan Basis|Basis]].

Pilih ![[lucide-kanban-square.svg#icon]] **Kanban** dari menu tampilan untuk menampilkan file sebagai kartu yang diatur ke dalam kolom. Setiap kolom mewakili nilai dari properti yang digunakan untuk mengelompokkan hasil.


> [!warning] Memerlukan Obsidian 1.14+
> Tampilan Kanban memerlukan Obsidian 1.14 yang saat ini tersedia dalam [[Versi akses awal|akses awal]].


## Mengelompokkan kartu ke dalam kolom

Tampilan Kanban memerlukan properti untuk mengelompokkan hasil.

1. Pilih ![[lucide-arrow-up-down.svg#icon]] **Urutkan** di bilah alat.
2. Di bawah **Kelompokkan berdasarkan**, pilih **Properti** dan pilih sebuah properti.

File tanpa nilai untuk properti yang dipilih akan muncul di kolom **Tidak ada nilai**.

> [!info] 
> Jika Anda mengelompokkan berdasarkan rumus atau properti file, Anda tidak dapat memindahkan kartu atau kolom, atau membuat catatan dari kolom. Properti ini tidak dapat diubah dengan memindahkan kartu.

## Bekerja dengan kartu dan kolom

- Seret kartu ke kolom lain untuk memperbarui properti yang dikelompokkan pada catatan tersebut. Hanya catatan Markdown yang dapat dipindahkan antar kolom.
- Pilih ikon plus di judul kolom atau ![[lucide-plus.svg#icon]] **Baru** di bagian bawah kolom untuk membuat catatan dengan nilai kolom tersebut.
- Seret judul kolom untuk mengubah urutan kolom. Untuk mengembalikan urutan semula, klik kanan kolom dan pilih **Reset order**.
- Gunakan menu ![[lucide-list.svg#icon]] **Properti** untuk memilih properti yang ditampilkan pada setiap kartu. Properti pertama ditampilkan sebagai judul kartu.

## Pengaturan

Pengaturan tampilan Kanban dapat dikonfigurasi di [[Tampilan#Pengaturan tampilan|Pengaturan tampilan]].

- Sembunyikan kolom kosong
- Lebar kolom
- Properti gambar
- Penyesuaian gambar
- Rasio aspek gambar

### Sembunyikan kolom kosong

Menyembunyikan kolom yang tidak berisi kartu apa pun.

### Lebar kolom

Menentukan lebar setiap kolom dan kartunya.

### Properti gambar

Kartu Kanban mendukung gambar sampul opsional yang ditampilkan di bagian atas kartu. Nilai properti yang didukung sama seperti [[Tampilan kartu#Properti gambar|properti gambar di tampilan Kartu]].

### Penyesuaian gambar

Jika Anda telah mengonfigurasi properti gambar, opsi ini menentukan bagaimana gambar ditampilkan di kartu.

- **Sampul:** Gambar mengisi kotak konten kartu. Jika tidak sesuai, gambar akan dipotong.
- **Muat:** Gambar diskalakan hingga sesuai di dalam kotak konten kartu. Gambar tidak dipotong.

### Rasio aspek gambar

Tinggi gambar sampul ditentukan oleh rasio aspeknya. Sesuaikan opsi ini untuk membuat gambar lebih pendek atau lebih tinggi.

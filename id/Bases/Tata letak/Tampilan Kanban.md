---
permalink: bases/views/kanban
---
Kanban adalah jenis [[Tampilan|tampilan]] yang dapat Anda gunakan di [[Pengenalan Basis|Basis]].

Pilih ![[lucide-kanban-square.svg#icon]] **Kanban** dari menu tampilan untuk menampilkan file sebagai kartu yang diatur ke dalam kolom. Setiap kolom mewakili nilai dari properti yang digunakan untuk mengelompokkan hasil.


> [!note] Memerlukan Obsidian 1.14+
> Tampilan Kanban tersedia di Obsidian 1.14 dan yang lebih baru.


## Mengelompokkan kartu ke dalam kolom

Tampilan Kanban memerlukan properti untuk mengelompokkan hasil.

1. Pilih **Kelompok** di bilah alat. Di ponsel, pilih **Tampilan → Kelompok**.
2. Di bawah **Kelompokkan berdasarkan**, pilih sebuah properti.

File tanpa nilai untuk properti yang dipilih akan muncul di kolom **Tidak ada nilai**.

> [!info] 
> Jika Anda mengelompokkan berdasarkan rumus atau properti file selain `file.folder`, Anda tidak dapat memindahkan kartu atau kolom, atau membuat catatan dari kolom. Anda masih dapat [[Tampilan#Menata ulang, menyembunyikan, dan menambahkan kelompok|mengelola urutan dan visibilitas kelompok]] di menu **Kelompok**.

## Bekerja dengan kartu dan kolom

- Seret kartu ke kolom lain untuk memperbarui properti yang dikelompokkan pada catatan tersebut. Hanya catatan Markdown yang dapat dipindahkan antar kolom, kecuali saat mengelompokkan berdasarkan `file.folder`, di mana memindahkan kartu akan memindahkan file ke folder tersebut.
- Pilih ikon plus di judul kolom atau ![[lucide-plus.svg#icon]] **Baru** di bagian bawah kolom untuk membuat catatan dengan nilai kolom tersebut.
- Seret judul kolom untuk mengubah urutan kolom. Untuk mengembalikan urutan otomatis, buka **Kelompok** dan pilih urutan sortir otomatis alih-alih **Manual**.
- Gunakan **Kelompok** untuk [[Tampilan#Menata ulang, menyembunyikan, dan menambahkan kelompok|menata ulang, menyembunyikan, atau menambahkan kolom]].
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

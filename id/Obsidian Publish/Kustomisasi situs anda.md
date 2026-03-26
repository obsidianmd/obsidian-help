---
permalink: publish/customize
publish: true
description: Pelajari cara menyesuaikan tampilan dan gaya situs Obsidian Publish Anda.
aliases:
  - Obsidian Publish/Kustomisasi situs anda
---
Halaman ini menjelaskan bagaimana Anda dapat menyesuaikan tampilan dan nuansa situs [[Pengantar Obsidian Publish|Obsidian Publish]] Anda.

## Aset statis

Anda dapat menyesuaikan situs Anda dengan [[Publikasikan konten Anda#Publikasikan catatan|mempublikasikan]] file berikut ke situs Anda:

- `publish.css` untuk menambahkan CSS kustom
- `publish.js` untuk menambahkan JavaScript kustom
- `favicon-32x32.png` untuk mengatur favicon

**Catatan:**

- [Variabel CSS untuk Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) dapat ditemukan di situs Dokumentasi kami.
- Karena Obsidian tidak mendukung file CSS atau JavaScript, Anda perlu menggunakan aplikasi lain untuk membuat dan mengeditnya.
- Baik `publish.css` maupun `publish.js` harus terletak di direktori root (`/`) brankas Anda.
- Secara bawaan, `publish.css` dan `publish.js` tidak muncul di penjelajah file, tetapi Anda tetap dapat mempublikasikannya dari dialog **Publikasikan perubahan**.
- Untuk menggunakan JavaScript kustom dengan `publish.js`, Anda perlu [[Domain kustom]].

Untuk favicon, Obsidian Publish mendukung konvensi penamaan berikut, di mana `32` mewakili dimensi ikon dalam piksel:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Kami menyarankan Anda menyediakan satu atau lebih dari dimensi berikut:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Anda memiliki fleksibilitas dalam menempatkan favicon di mana saja dalam brankas, selama favicon tersebut dipublikasikan ke situs Anda.

## Menggunakan tema komunitas

Untuk menggunakan salah satu tema komunitas untuk situs Anda:

1. Buka brankas Anda di penjelajah file bawaan untuk OS Anda.
2. Buka folder pengaturan brankas (bawaan: `.obsidian`).
3. Buka folder `themes`.
4. Salin file CSS untuk tema yang ingin Anda gunakan untuk situs Anda.
5. Tempel file tersebut ke folder root brankas Anda.
6. Ganti nama file CSS menjadi `publish.css`.
7. [[Publikasikan konten Anda#Publikasikan catatan|Publikasikan]] `publish.css`.

**Catatan:**

- Jika gaya tidak diperbarui dalam beberapa menit, coba muat ulang cache browser Anda.
- Anda dapat beralih antara mode gelap dan terang di [[Kelola situs#Lihat opsi situs|opsi situs]].
- Banyak tema komunitas menggunakan **Style Settings** untuk gaya kustom, tetapi pengaturan ini tidak berfungsi di Obsidian Publish.

> [!tip] Mengembangkan tema
> Tidak menemukan tema yang cocok untuk Anda? Pelajari cara [Membangun tema Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) sendiri.

## Mengaktifkan fitur UI

Anda dapat mengaktifkan atau menonaktifkan beberapa fitur UI untuk situs Anda, seperti tampilan grafik atau daftar isi.

Telusuri fitur UI yang tersedia di bawah bagian **Pengalaman membaca** dan **Komponen** di [[Kelola situs#Lihat opsi situs|opsi situs]]

### Kustomisasi navigasi

Dalam Obsidian Publish, Anda memiliki kemampuan untuk menyesuaikan urutan navigasi dan tampilan file dan folder dalam [[Penjelajah berkas]] Publish. Item navigasi ditampilkan dalam urutan terpublikasikan secara bawaan. Catatan yang tidak dipublikasikan tidak akan muncul dalam panel ini.

#### Mengakses opsi Kustomisasi navigasi

1. Di [[Bilah alat]], pilih **Publikasikan perubahan** ![[lucide-send.svg#icon]] atau buka [[Palet perintah]] dan ketik **Publish: Publikasikan perubahan...**
2. Di dialog **Publikasikan perubahan**, pilih **Ubah pengaturan situs** ![[lucide-cog.svg#icon]].
3. Di bawah **Pengaturan komponen**, di samping **Kustomisasi navigasi**, pilih tombol **Kelola**.

Jendela pop-up baru berjudul **Navigasi** akan muncul di atas jendela **Ubah pengaturan situs** Anda.

#### Menyesuaikan item navigasi

Di bagian berlabel **Pratinjau navigasi**, Anda dapat menyesuaikan urutan tampilan konten yang dipublikasikan.

1. Pilih folder atau catatan yang ingin Anda sesuaikan.
2. Seret catatan atau folder ke atas atau ke bawah hingga berada di posisi yang Anda inginkan.
3. Di kanan bawah jendela **Navigasi**, pilih **Selesai**.

Publish akan mengirimkan perubahan navigasi Anda ke situs Anda.

#### Menyembunyikan dan menampilkan item navigasi

Jika ada catatan atau folder yang telah Anda publikasikan, tetapi Anda tidak ingin terlihat dalam Navigasi, Anda dapat memilih untuk menyembunyikan item tersebut.

1. Pilih folder atau catatan yang ingin Anda sesuaikan.
2. Klik kanan dan pilih **Sembunyikan di navigasi**. Item tersebut seharusnya sekarang menghilang dari **Pratinjau navigasi**.
3. Di kanan bawah jendela **Navigasi**, pilih **Selesai**.

Publish akan mengirimkan perubahan navigasi Anda ke situs Anda.

> [!tip] Anda dapat **Tampilkan yang disembunyikan** file dengan memilih kotak centang di sebelah kanan judul **Pratinjau navigasi**

## FAQ

**Bisakah saya memindahkan file dari satu folder ke folder lain dalam Navigasi?**

Tidak. Struktur navigasi file untuk catatan dalam folder perlu dipertahankan. Anda dapat menyesuaikan urutan catatan dalam folder (termasuk root brankas), dan urutan folder dalam folder lain.

**Bisakah saya mengedit urutan beberapa catatan dan folder sebelum memilih Selesai?**

Ya.

**Bagaimana cara mengembalikan perubahan ini?**

- **Urutan tampilan**: Pilih ikon **Pulihkan bawaan** (panah putar berlawanan arah jarum jam) di samping **Urutan tampil item navigasi**. Ini akan mengembalikan item navigasi Anda ke urutan abjad.
- **Status tersembunyi**: Pilih ikon **Pulihkan bawaan** (panah putar berlawanan arah jarum jam) di samping **Sembunyikan laman atau folder dari navigasi**. Ini akan mengembalikan item navigasi yang tersembunyi ke keadaan terlihat.

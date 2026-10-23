---
permalink: pdf
publish: true
mobile: true
description: 'Pelajari cara melihat, mencari, dan menautkan ke PDF di Obsidian, serta cara mengekspor catatan sebagai PDF.'
---
Obsidian membuka file PDF di penampil bawaan. Anda juga dapat menyematkan PDF dalam catatan, menautkan ke bagian tertentu di dalamnya, dan mengekspor catatan apa pun sebagai PDF. Untuk jenis file yang didukung Obsidian, lihat [[Format file yang diterima]].

> [!info]+ Beberapa fitur hanya tersedia di desktop
> Aplikasi Obsidian di seluler tidak dapat mencari di dalam PDF, menyalin kutipan atau tautan ke seleksi, atau mengekspor catatan ke PDF.

## Membuka PDF

Di [[Penjelajah berkas]], pilih PDF untuk membukanya di tab.

> [!info]+ Anotasi tidak didukung
> Obsidian tidak mendukung penambahan anotasi atau sorotan ke PDF. Untuk menandai PDF, gunakan aplikasi lain lalu buka file yang telah diperbarui di brankas Anda.

Penampil memiliki bilah alat dengan kontrol berikut. Aplikasi Obsidian di seluler memiliki bilah alat yang sama.

- **Peralih bilah sisi** menampilkan atau menyembunyikan bilah sisi, dan **Opsi bilah sisi** mengubah apa yang ditampilkan bilah sisi.
- **Perkecil** dan **Perbesar** mengubah ukuran halaman.
- **Opsi tampilan** mengubah tata letak halaman.
- Kotak halaman menampilkan halaman saat ini. Masukkan nomor halaman untuk menuju ke halaman tersebut.

Untuk mengelola file PDF itu sendiri, seperti mengganti nama atau memindahkannya, pilih **Opsi lain** ![[lucide-more-horizontal.svg#icon]]. PDF memiliki item yang lebih sedikit di menu ini dibandingkan catatan. Lihat [[Menu opsi lain]].

## Menavigasi PDF

Pilih **Opsi bilah sisi**, lalu pilih apa yang ingin ditampilkan.

- **Sampul** menampilkan pratinjau kecil dari setiap halaman.
- **Daftar isi** menampilkan kerangka PDF, jika ada.
- **Ungkap halaman di daftar isi** menyorot halaman saat ini di daftar isi.

Untuk menautkan ke halaman, klik kanan sampulnya dan pilih **Salin tautan ke halaman N**, di mana N adalah nomor halaman. Tempelkan tautan tersebut ke dalam catatan.

Untuk menautkan ke bagian tertentu, klik kanan entri di daftar isi dan pilih **Salin tautan ke "Judul"**, di mana Judul adalah nama entri tersebut. Di seluler, tekan dan tahan entri tersebut.

## Mengubah tampilan PDF

Pilih **Opsi tampilan** untuk mengubah tata letak.

- **Paskan lebar** dan **Paskan tinggi** menyesuaikan ukuran halaman ke penampil.
- **Halaman tunggal** menampilkan satu halaman pada satu waktu.
- **Dua halaman (ganjil)** menampilkan halaman berdampingan, dimulai dengan halaman ganjil di sebelah kiri. Misalnya, halaman 1 dan 2 ditampilkan bersamaan, lalu halaman 3 dan 4.
- **Dua halaman (genap)** menampilkan halaman berdampingan, dimulai dengan halaman genap di sebelah kiri. Misalnya, halaman 1 ditampilkan sendiri, lalu halaman 2 dan 3 ditampilkan bersamaan.
- **Sesuai tema** menggelapkan warna PDF saat tema Obsidian Anda gelap.

## Mencari di PDF

Pencarian di dalam PDF hanya tersedia di desktop. Aplikasi Obsidian di seluler tidak memiliki fitur pencarian di penampil PDF.

1. Tekan `Ctrl+F` (Windows dan Linux) atau `Command+F` (macOS).
2. Di **Ketik untuk memulai penelusuran...**, masukkan teks yang ingin Anda cari.
3. Pilih panah atas atau bawah untuk berpindah antar hasil pencarian.

Untuk mengubah cara pencarian bekerja, gunakan opsi berikut.

- **Sesuaikan huruf** mencocokkan huruf besar dan kecil secara persis. Ini adalah tombol **Aa** di kolom pencarian.
- **Sorot semua** menyorot setiap hasil pencarian. Pilih tombol pengaturan di sebelah panah untuk menemukan opsi ini.
- **Cocokkan diakritik** memperlakukan huruf dengan aksen sebagai huruf yang berbeda. Opsi ini berada di menu pengaturan yang sama.
- **Seluruh kata** hanya menemukan kata utuh. Opsi ini berada di menu pengaturan yang sama.

Pilih tombol tutup untuk keluar dari pencarian.

## Menyalin teks dari PDF

Di desktop, pilih teks di PDF, lalu klik kanan.

- **Salin** menyalin teks.
- **Salin sebagai kutipan** menyalin teks sebagai kutipan, diikuti tautan ke bagian tersebut.
- **Salin tautan ke seleksi** menyalin tautan ke bagian tersebut, sehingga Anda dapat menempelkannya ke dalam catatan.

Kutipan akan terlihat seperti ini saat Anda menempelkannya ke dalam catatan.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Tautan ke seleksi memiliki tautan yang sama secara terpisah.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Di seluler, memilih teks di PDF menampilkan menu teks standar perangkat Anda. **Salin sebagai kutipan** dan **Salin tautan ke seleksi** tidak tersedia.

## Menyematkan PDF

Untuk menampilkan PDF di dalam catatan, lihat cara [[Sematkan file#Sematkan PDF dalam catatan|menyematkan PDF dalam catatan]]. PDF yang disematkan memiliki bilah alat yang sama seperti penampil. Pilih **Edit blok ini** untuk mengubah tautan sematan.

## Mengekspor catatan ke PDF

Anda dapat mengekspor catatan apa pun sebagai PDF di desktop. Ekspor ke PDF tidak tersedia di aplikasi Obsidian di seluler.

1. Buka catatan yang ingin Anda ekspor.
2. Buka [[Palet perintah]] dan pilih **Ekspor PDF**. Anda juga dapat memilih **Opsi lain** ![[lucide-more-horizontal.svg#icon]] di catatan, lalu pilih **Ekspor PDF**.
3. Pilih pengaturan Anda.
    - **Masukkan nama berkas sebagai judul** menambahkan nama file di bagian atas PDF.
    - **Ukuran halaman** mengatur ukuran kertas. Anda dapat memilih A3, A4, A5, Legal, Letter, atau Tabloid.
    - **Lanskap** memutar halaman ke samping.
    - **Margin** mengatur margin halaman ke **Bawaan**, **Minimal**, atau **Tidak ada**.
    - **Persentase skala** menskalakan konten di setiap halaman. Pada 100, konten tetap berukuran penuh. Nilai yang lebih rendah membuat teks dan gambar lebih kecil, sehingga lebih banyak yang muat di setiap halaman.
4. Pilih **Ekspor ke PDF**.
5. Pilih tempat untuk menyimpan file.

> [!tip]- Mengekspor catatan dengan tema gelap
> Ekspor selalu menggunakan gaya terang, meskipun tema Anda gelap. Untuk mengubah tampilan ekspor, Anda dapat menggunakan [[Cuplikan CSS|cuplikan CSS]]. Forum Obsidian memiliki contoh cuplikan untuk pencetakan dan ekspor.[^1]

[^1]: Lihat [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) dan [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).

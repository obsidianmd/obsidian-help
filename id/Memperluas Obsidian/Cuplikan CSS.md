---
permalink: snippets
publish: true
mobile: true
description: Pelajari cara mengubah bagian-bagian tampilan aplikasi Obsidian tanpa membuat tema secara penuh.
aliases:
  - Bagaimana/Menambah gaya kustom
  - Topik lanjutan/Kustomisasi CSS
---
Pelajari cara memodifikasi aspek tampilan aplikasi Obsidian tanpa perlu [membuat tema](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Jika Anda mencari panduan tentang menangani CSS untuk [[Pengantar Obsidian Publish|Obsidian Publish]], pastikan untuk meninjau [[Kustomisasi situs Anda]].

CSS adalah bahasa yang mengontrol tampilan HTML. Dengan menambahkan cuplikan CSS, Anda dapat mengubah bagian-bagian antarmuka pengguna Obsidian, seperti ukuran dan warna judul. Obsidian memiliki [variabel CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) yang membantu Anda menyesuaikan antarmuka dengan mudah.

Obsidian mencari cuplikan CSS di dalam [[Folder konfigurasi|folder konfigurasi]] brankas.

## Menambahkan cuplikan

Untuk menambahkan cuplikan CSS di **Desktop** ![[lucide-monitor-check.svg#icon]], ikuti langkah-langkah berikut:

1. Buka **[[Pengaturan]]** ![[lucide-settings.svg#icon]].
2. Di bawah **Tampilan → Cuplikan CSS**, pilih **Buka folder cuplikan** ![[lucide-folder-open.svg#icon]].
3. Di folder cuplikan, buat file CSS yang berisi cuplikan Anda.
4. Di Obsidian, di bawah **Tampilan → Cuplikan CSS**, pilih **Muat ulang cuplikan** ![[lucide-refresh-cw.svg#icon]] untuk melihat cuplikan dalam daftar.
5. Aktifkan cuplikan dengan mengklik tombol sakelar.

Untuk menambahkan cuplikan CSS di **Seluler/Tablet** ![[obsidian-icon-smartphone.svg#icon]], Anda dapat mengikuti langkah-langkah berikut:

1. Buka pengelola file dan temukan brankas Anda. Anda dapat memeriksa lokasi brankas di _Kelola brankas…_ dengan mengetuk brankas Anda dan melihat alurnya.
2. Buka [[Folder konfigurasi]] dan buat folder bernama `snippets` jika belum ada.
3. Tambahkan cuplikan CSS Anda ke folder ini.
4. Buka **[[Pengaturan]]** Obsidian ![[lucide-settings.svg#icon]].
5. Pilih **Tampilan** di sebelah kiri.
6. Gulir ke bawah ke bagian **Cuplikan CSS**.
7. Ketuk **Muat ulang cuplikan** ![[lucide-refresh-cw.svg#icon]] untuk memuat ulang daftar.
8. Ketuk tombol sakelar untuk mengaktifkan cuplikan.

Sebagai alternatif, Anda dapat
- [[Sinkronisasi catatan antar perangkat|Menyinkronkan]] perubahan apa pun dengan layanan sinkronisasi Anda.
- Menggunakan plugin komunitas untuk membuat cuplikan dari dalam Obsidian.

Setelah diaktifkan, Obsidian akan secara otomatis mendeteksi perubahan pada cuplikan CSS dan menerapkannya saat Anda menyimpan file.

> [!tip] Anda tidak perlu memulai ulang Obsidian agar perubahan diterapkan. Namun, Anda mungkin perlu menggunakan perintah [[Palet perintah]] untuk Muat Ulang Obsidian tanpa menyimpan untuk melihat perubahan pada tema atau catatan saat ini.

## Menulis CSS untuk Obsidian

Obsidian menawarkan beberapa metode yang membuat penulisan CSS lebih mudah dan lebih canggih.

Obsidian memiliki banyak [variabel CSS](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) untuk memodifikasi bagian-bagian Obsidian dengan mudah dan [[Properti#Tipe properti|tipe properti]] bawaan untuk mengubah tampilan satu atau beberapa catatan.

> [!example] Variabel
> Buat file bernama `headers.css` dengan konten berikut untuk mengubah warna enam [[Sintaksis format dasar#Judul|level judul]] menjadi pelangi:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] Kelas CSS
> Tetapkan nama kelas CSS kustom (atau daftar kelas CSS) ke [[Properti|properti]] `cssclasses` yang telah ditentukan sebelumnya untuk membuat satu atau lebih catatan terlihat berbeda dari yang lain.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Properti**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> Di setiap catatan yang berisi nilai `red-border` dalam properti `cssclasses`, gambar ditampilkan dengan bingkai merah.

Untuk memastikan file CSS valid dan diformat dengan benar, kami menyarankan untuk memvalidasinya dengan alat seperti [CSS Validation Service](https://jigsaw.w3.org/css-validator/), karena CSS yang tidak valid tidak akan berfungsi.

## Pelajari lebih lanjut

- Jika Anda baru mengenal CSS, lihat [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) oleh Mozilla.
- Untuk informasi lebih lanjut tentang menata tampilan Obsidian, lihat:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)

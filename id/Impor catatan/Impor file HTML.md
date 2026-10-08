---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda mengimpor file HTML individual maupun seluruh folder berisi file HTML dengan mudah menggunakan [[Impor|plugin Importer]] resmi. Ini berguna jika Anda ingin menyimpan seluruh situs web ke format [[Obsidian Flavored Markdown|Markdown]], atau jika Anda ingin mengimpor data dari alat yang mengekspor ke HTML.

Jika Anda mengimpor catatan dari aplikasi tertentu, Anda mungkin ingin terlebih dahulu meninjau daftar aplikasi yang didukung oleh [[Impor|plugin Importer]] untuk memeriksa apakah ada konverter khusus yang lebih baik dalam mempertahankan data yang Anda migrasikan.

## Impor data HTML ke Obsidian

Anda memerlukan plugin [[Impor]] resmi Obsidian, yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Pergi ke **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **HTML (.html).**
6. Pilih lokasi file atau folder HTML Anda.
7. Pilih **Impor** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari file Anda.
8. Pilih **Impor** lagi dan tunggu hingga impor selesai.

### Impor pengaturan

- **Batas ukuran lampiran**: Lewati pengimporan lampiran yang lebih besar dari ukuran yang ditentukan.
- **Ukuran gambar minimum**: Lewati pengimporan gambar yang lebih kecil dari ukuran yang ditentukan di salah satu dimensi. Dapat digunakan untuk melewati ikon dan logo.

## Templat

Gunakan [[Template Importer|templat Importer]] untuk mengonfigurasi sepenuhnya cara data Anda diimpor.

![[Template Importer#Variables]]

Selain itu, impor HTML menyediakan banyak variabel yang sama seperti [[Pengantar Obsidian Web Clipper|Web Clipper]]:

| Variabel | Deskripsi |
| --- | --- |
| `{{author}}` | Penulis halaman. |
| `{{contentHtml}}` | Konten halaman yang diekstrak dalam format HTML. |
| `{{description}}` | Deskripsi atau kutipan halaman. |
| `{{domain}}` | Domain halaman. |
| `{{favicon}}` | URL favicon. |
| `{{fullHtml}}` | HTML mentah untuk seluruh halaman. |
| `{{image}}` | URL gambar berbagi sosial. |
| `{{language}}` | Bahasa halaman. |
| `{{published}}` | Tanggal publikasi, yang dapat diformat dengan filter `date`. |
| `{{site}}` | Nama situs atau penerbit. |
| `{{url}}` | URL sumber yang ditemukan dalam dokumen yang diimpor, jika tersedia. |
| `{{words}}` | Jumlah kata. |

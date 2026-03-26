---
permalink: import/csv
---
Obsidian memungkinkan Anda mengimpor data dari file CSV menggunakan [[Importer|plugin Importer]] resmi. Ini berguna jika Anda memiliki data tabular yang tersimpan di aplikasi seperti Excel, Google Sheets, Numbers, Notion, atau Airtable.

Impor CSV menghasilkan file Markdown untuk setiap baris dan file [[Pengenalan Basis|Basis]] yang menampilkan semua file yang diimpor sebagai tabel.

Jika Anda mengimpor catatan dari aplikasi tertentu, Anda mungkin ingin terlebih dahulu meninjau daftar aplikasi yang didukung oleh [[Importer|plugin Importer]] untuk memeriksa apakah ada konverter spesifik yang lebih baik dalam mempertahankan data yang Anda migrasikan.

## Buat catatan dari data CSV di Obsidian

Anda memerlukan plugin Obsidian [[Importer]] resmi, yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **CSV (.csv).**
6. Pilih lokasi file CSV Anda.
7. Klik **Impor** untuk mengonfigurasi bagaimana data dalam file CSV Anda akan dikonversi menjadi catatan dengan [[Properti]].
8. Klik **Lanjutkan** dan tunggu hingga impor selesai.
9. Selesai!

## Konfigurasi cara field CSV diimpor

Pada langkah kedua impor CSV, Anda dapat memilih bagaimana data diimpor menggunakan templat.

Setiap kolom dalam file CSV Anda diberikan variabel yang disebut `{{column_name}}` yang mewakili nama header dalam file Anda. Anda dapat menggunakan variabel ini untuk mendefinisikan judul catatan, lokasi, konten, dan [[Properti|properti]].

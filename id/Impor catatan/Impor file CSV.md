---
permalink: import/csv
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda mengimpor data dari file CSV menggunakan [[Impor|plugin Importer]] resmi. Ini berguna jika Anda memiliki data tabular yang tersimpan di aplikasi seperti Excel, Google Sheets, Numbers, Notion, atau Airtable.

Impor CSV menghasilkan file Markdown untuk setiap baris dan file [[Pengenalan Basis|Basis]] yang menampilkan semua file yang diimpor sebagai tabel.

Jika Anda mengimpor catatan dari aplikasi tertentu, Anda mungkin ingin terlebih dahulu meninjau daftar aplikasi yang didukung oleh [[Impor|plugin Importer]] untuk memeriksa apakah ada konverter spesifik yang lebih baik dalam mempertahankan data yang Anda migrasikan.

## Buat catatan dari data CSV di Obsidian

Anda memerlukan plugin Obsidian [[Impor]] resmi, yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **CSV (.csv).**
6. Pilih lokasi file CSV Anda.
7. Pilih **Impor** untuk mengonfigurasi bagaimana data dalam file CSV Anda akan dikonversi menjadi catatan dengan [[Properti]].
8. Pilih **Lanjutkan** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari baris Anda.
9. Pilih **Impor** dan tunggu hingga impor selesai.

## Konfigurasi cara field CSV diimpor

Pada langkah konfigurasi field, Anda dapat memilih bagaimana data diimpor. Importer menghasilkan templat dari header CSV, menggunakan kolom pertama untuk nama catatan awal, dan membuat properti untuk setiap kolom.

## Templat

Gunakan [[Template Importer|templat Importer]] untuk mengonfigurasi sepenuhnya bagaimana data Anda diimpor.

Setiap kolom CSV tersedia menggunakan headernya. Jika kolom tidak memiliki header, Importer menggunakan nama kolom yang dihasilkannya.

Gunakan notasi kurung agar spasi dan tanda baca ditangani dengan aman:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[Template Importer#Variables]]

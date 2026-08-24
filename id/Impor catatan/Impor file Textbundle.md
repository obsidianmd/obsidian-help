---
permalink: import/textbundle
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda untuk dengan mudah mengimpor file [Textbundle](https://textbundle.org/) menggunakan [[Impor|plugin Importer]] resmi.

Jika Anda mengimpor catatan dari aplikasi tertentu, Anda mungkin ingin terlebih dahulu meninjau daftar aplikasi yang didukung oleh [[Impor|plugin Importer]] untuk memeriksa apakah ada konverter khusus yang lebih baik dalam mempertahankan data yang Anda migrasikan.

Format Textbundle menggabungkan teks Markdown dan semua gambar yang direferensikan ke dalam satu file, menyediakan cara yang lebih mulus untuk memindahkan data dari aplikasi yang terisolasi (sandboxed). Ekspor Textbundle didukung oleh [banyak aplikasi](https://textbundle.org/), termasuk Agenda, Craft, Taio, Ulysses, Zettlr, dan lainnya.

## Impor file Textbundle ke Obsidian

Anda memerlukan plugin [[Impor]] Obsidian resmi, yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Textbundle (.textbundle, .textpack).**
6. Pilih lokasi file Textbundle atau Textpack Anda. File zip juga didukung.
7. Pilih **Impor** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari catatan Anda.
8. Pilih **Impor** lagi dan tunggu hingga proses impor selesai.

## Kustomisasi catatan yang diimpor

Sebelum impor dimulai, Importer menampilkan pratinjau yang dihasilkan dari file Textbundle yang dipilih. Anda dapat mengedit templat yang dihasilkan atau memilih templat Markdown dari brankas Anda. Lihat [[Template Importer]].

## Pemecahan masalah

### Tidak ada file yang dipilih untuk diimpor

Impor Textbundle hanya dapat mengimpor satu file Textbundle pada satu waktu, dan hanya di perangkat Mac. Sebagai gantinya, Anda dapat mengompres semua file Textbundle yang ingin Anda impor ke dalam satu file .zip dan mengimpornya dari perangkat mana pun.

## Templat

Gunakan [[Template Importer|templat Importer]] untuk mengonfigurasi sepenuhnya cara data Anda diimpor.

![[Template Importer#Variables]]

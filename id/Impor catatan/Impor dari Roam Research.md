---
permalink: import/roam
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda dengan mudah memigrasikan catatan dari Roam Research menggunakan [[Impor|plugin Importer]]. Ini mengonversi data Roam Anda menjadi file Markdown yang tahan lama yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

## Ekspor data Anda dari Roam Research

1. Di Roam Research, klik **More actions** ( `•••` ) di pojok kanan atas, lalu pilih **Export All**.
   
   ![[Roam-exporting.png#interface]]
2. Di **Export Format**, pilih "JSON", lalu pilih **Export All** untuk mengunduh arsip berisi catatan Anda.

## Impor data Roam Research Anda ke Obsidian

Anda memerlukan plugin resmi Obsidian [[Impor]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **File format** pilih **Roam Research (.json).**
6. Pilih lokasi file `.json` Anda.
7. Di bagian **Output folder**, pilih di mana file Anda harus diimpor.
8. Jika Anda ingin juga mengimpor lampiran, aktifkan **Download all attachments**.
9. Pilih **Import** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari halaman Anda.
10. Pilih **Import** lagi dan tunggu hingga impor selesai.

![[Roam-Importer-importing.png]]

## Templat

Gunakan [[Template Importer|templat Importer]] untuk mengonfigurasi sepenuhnya bagaimana data Roam Research Anda diimpor.

![[Template Importer#Variables]]

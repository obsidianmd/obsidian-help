---
permalink: import/bear
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda dengan mudah memigrasikan catatan dari Bear menggunakan [[Importir format Markdown|plugin Importer]]. Ini mengonversi data Bear Anda menjadi file Markdown yang tahan lama yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

## Ekspor data Anda dari Bear

Obsidian dapat menggunakan format cadangan Bear berupa `.bear2bk` atau `ApplicationData.zip`.

### iOS

1. Buka Bear.
2. Buka **Settings** → **Advanced** → **Share Application Data**.
3. Pilih lokasi untuk file cadangan Anda.
4. Sekarang Anda seharusnya memiliki satu file `ApplicationData.zip` yang berisi semua catatan Anda.

### macOS

1. Buka Bear.
2. Buka **File** → **Backup notes**.
3. Pilih lokasi untuk file cadangan Anda.
4. Klik **Export notes**.
5. Sekarang Anda seharusnya memiliki satu file `.bear2bk` yang berisi semua catatan Anda.

## Impor data Bear Anda ke Obsidian

Anda memerlukan plugin resmi Obsidian [[Importir format Markdown|Importer]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Bear (.bear2bk, .zip)**.
6. Pilih lokasi file cadangan Bear Anda.
7. Pilih **Impor** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari catatan Anda.
8. Pilih **Impor** lagi dan tunggu hingga impor selesai.

## Templat

Gunakan [[Template Importer|templat Importer]] untuk mengonfigurasi sepenuhnya bagaimana data Bear Anda diimpor.

![[Template Importer#Variables]]

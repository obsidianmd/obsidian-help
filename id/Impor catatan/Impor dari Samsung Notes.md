---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda memigrasikan catatan dari Samsung Notes menggunakan [[Impor|plugin Importer]]. Ini mengonversi catatan Anda menjadi file Markdown yang tahan lama yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

## Ekspor catatan Anda dari Samsung Notes

Samsung Notes menyimpan setiap catatan sebagai file Samsung Notes (`.sdocx`).

1. Buka Samsung Notes di ponsel atau tablet Anda.
2. Sentuh dan tahan sebuah catatan, lalu pilih setiap catatan yang ingin Anda ekspor.
3. Ketuk **Simpan sebagai file**, lalu pilih **Samsung Notes file**.
4. Pilih folder dan ketuk **Simpan**.
5. Pindahkan file `.sdocx` ke perangkat tempat Anda menggunakan Obsidian, misalnya dengan kabel USB, Quick Share, atau penyimpanan cloud.

Jika Anda memiliki banyak file, Anda dapat memasukkannya ke dalam file `.zip` dan mengimpor file tersebut. Samsung Notes tidak menyertakan foldernya dalam file yang disimpan, tetapi Importer menjaga folder di dalam file `.zip`. Untuk menjaga catatan Anda tetap terorganisir, simpan catatan dari setiap folder Samsung Notes ke dalam folder dengan nama yang sama sebelum Anda mengompresinya.

## Impor data Samsung Notes Anda ke Obsidian

Anda memerlukan plugin resmi Obsidian [[Impor|Importer]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file**, pilih **Samsung Notes (.sdocx)**.
6. Pilih file `.sdocx` Anda, atau file `.zip` yang berisi file tersebut.
7. Pilih **Import** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari catatan Anda.
8. Pilih **Import** lagi dan tunggu hingga impor selesai.

## Keterbatasan

- Tulisan tangan dan bentuk gambar diimpor sebagai gambar SVG di akhir catatan. Goresan mempertahankan bentuk dan warnanya, tetapi tidak variasi lebar dari pena yang sensitif terhadap tekanan. Bentuk dan garis diimpor dalam warna hitam.
- Kotak teks, gambar yang ditempatkan di halaman, dan PDF beranotasi belum diimpor.
- Item daftar periksa diimpor sebagai tidak dicentang.
- Warna teks, font, dan ukuran font tidak dipertahankan.
- Buka kunci catatan yang terkunci di Samsung Notes sebelum Anda mengekspornya.

## Template

Gunakan [[Template Importer|Template Importer]] untuk mengonfigurasi sepenuhnya bagaimana data Samsung Notes Anda diimpor.

![[Template Importer#Variabel]]

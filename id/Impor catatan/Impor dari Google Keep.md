---
permalink: import/google-keep
---
Obsidian memungkinkan Anda dengan mudah memigrasikan catatan dari Google Keep menggunakan [[Importir format Markdown|plugin Importer]]. Ini akan mengonversi data Google Keep Anda menjadi file Markdown yang tahan lama, yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

## Ekspor data Anda dari Google Keep

1. Buka [Google Takeout](https://takeout.google.com/settings/takeout) dan masuk ke akun Google Anda.
2. Klik **Batal pilih semua** di pojok kanan atas.
3. Gulir ke bawah dan pilih **Keep** dari daftar.
4. Gulir ke bagian bawah halaman dan klik **Langkah berikutnya**.
5. Pada layar berikutnya, klik tombol **Buat ekspor**.
6. Unduh file `.zip` setelah tersedia.

## Impor data Google Keep Anda ke Obsidian

Anda memerlukan plugin resmi Obsidian [[Importir format Markdown|Importer]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bawah **Format file** pilih **Google Keep (.zip).**
6. Pilih lokasi file `.zip` Anda.
7. Klik **Impor** dan tunggu hingga impor selesai.
8. Selesai!

### Fitur yang didukung

- Semua daftar periksa akan diimpor sebagai item tingkat atas karena Google Keep tidak mengekspor informasi indentasi.
- Pengingat dan penugasan pengguna pada catatan tidak akan diimpor karena fitur-fitur ini tidak didukung oleh Obsidian.
- Semua informasi lainnya akan diimpor sebagai kombinasi konten dan tag.

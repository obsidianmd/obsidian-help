---
permalink: import/google-keep
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda dengan mudah memigrasikan catatan dari Google Keep menggunakan [[Importir format Markdown|plugin Importer]]. Ini mengonversi data Google Keep Anda menjadi file Markdown yang tahan lama yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

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
7. Pilih **Impor** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari catatan Anda.
8. Pilih **Impor** lagi dan tunggu hingga impor selesai.

## Keterbatasan

- Semua daftar periksa akan diimpor sebagai item tingkat atas karena Google Keep tidak mengekspor informasi indentasi.
- Pengingat dan penugasan pengguna pada catatan tidak akan diimpor karena fitur-fitur ini tidak didukung oleh Obsidian.


## Templat

Gunakan [[Template Importer|templat Importer]] untuk mengonfigurasi sepenuhnya cara data Google Keep Anda diimpor.

![[Template Importer#Variables]]

Selain itu, Google Keep menyediakan variabel untuk teks asli, daftar, label, lampiran, warna, data berbagi, tugas, anotasi, dan status catatan.

| Variabel          | Deskripsi                                         |
| ----------------- | ------------------------------------------------- |
| `{{isArchived}}`  | Apakah catatan diarsipkan.                        |
| `{{isPinned}}`    | Apakah catatan disematkan.                        |
| `{{isTrashed}}`   | Apakah catatan ada di tempat sampah.              |
| `{{color}}`       | Nama warna Google Keep.                           |
| `{{labels}}`      | Array dari rekaman label.                         |
| `{{sharees}}`     | Array dari orang yang diajak berbagi catatan.     |
| `{{annotations}}` | Array dari rekaman anotasi tautan.                |

Judul asli Google Keep tersedia sebagai `{{source.title}}`. Variabel bersama `{{title}}` berisi judul catatan yang diimpor.

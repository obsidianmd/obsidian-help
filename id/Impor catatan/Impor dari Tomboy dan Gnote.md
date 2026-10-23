---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian memungkinkan Anda memigrasikan catatan dari Tomboy dan Gnote menggunakan [[Impor|plugin Importer]] resmi. Importer membaca file `.note` aplikasi secara langsung dan mengonversi konten XML-nya menjadi Markdown.

## Temukan file catatan Anda

Tomboy dan Gnote biasanya menyimpan catatan di folder-folder berikut:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` atau `~/.local/share/gnote`

Lokasi yang tepat mungkin berbeda jika Anda memindahkan folder data atau menggunakan versi aplikasi yang berbeda.

## Impor catatan Tomboy atau Gnote Anda

1. Buka **[[Pengaturan]] → Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
2. Aktifkan plugin Importer.
3. Buka **Importer** menggunakan [[Palet perintah]] atau ikon bilah alat.
4. Di bagian **Format file**, pilih **Tomboy/Gnote (.note)**.
5. Pilih file `.note` individual atau folder yang memuatnya.
6. Tinjau opsi impor, templat yang dihasilkan, dan contoh pratinjau.
7. Pilih **Impor** dan tunggu hingga proses impor selesai.

## Templat

Gunakan [[Template Importer|Template Importer]] untuk mengonfigurasi sepenuhnya cara data Anda diimpor.

![[Template Importer#Variabel]]

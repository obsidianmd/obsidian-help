---
permalink: data-storage
publish: true
mobile: true
description: Halaman ini menjelaskan bagaimana Obsidian menyimpan datanya di perangkat Anda.
aliases:
  - Topik lanjutan/Bagaimana Obsidian menyimpan data
---
Obsidian menyimpan catatan Anda sebagai file teks biasa berformat [[Sintaksis format dasar|Markdown]] dalam sebuah _brankas_. Brankas adalah folder di sistem file lokal Anda, termasuk subfolder di dalamnya.

Karena catatan adalah file teks biasa, Anda dapat menggunakan editor teks dan pengelola file lain untuk menyunting dan mengelola catatan. Obsidian secara otomatis memperbarui brankas Anda untuk mengikuti perubahan eksternal apa pun.

Anda dapat membuat brankas di mana pun yang diizinkan oleh sistem operasi Anda. Obsidian menyinkronkan dengan [[Pengantar Obsidian Sync|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git, dan banyak layanan pihak ketiga lainnya.

Anda dapat membuka beberapa folder sebagai brankas individual, misalnya untuk memisahkan catatan kerja dan sekolah.

> [!warning] Brankas di dalam brankas
> Karena [[Tautan internal]] bersifat lokal terhadap brankas, kami menyarankan agar Anda tidak membuat brankas di dalam brankas. Tautan mungkin tidak diperbarui dengan benar.

## Pengaturan brankas

Obsidian membuat [[Folder konfigurasi|folder konfigurasi]] `.obsidian` di folder root brankas, yang berisi preferensi khusus untuk brankas tersebut, seperti [[Pintasan|pintasan keyboard]], [[Tema|tema]], dan [[Plugin komunitas|plugin komunitas]].

Secara bawaan, sebagian besar sistem operasi menyembunyikan folder yang diawali dengan titik (`.`), jadi Anda mungkin perlu memperbarui pengaturan pengelola file Anda untuk melihatnya.

- **macOS**: Di Finder, tekan `Cmd+Shift+.` (titik) untuk menampilkan file tersembunyi.
- **Windows**: [Tampilkan file tersembunyi](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Di sebagian besar Penjelajah File, tekan `Ctrl + h` untuk menampilkan file tersembunyi.

> [!tip] Menambahkan `.obsidian` ke Git
> File `.obsidian/workspace.json` dan `.obsidian/workspaces.json` menyimpan tata letak ruang kerja saat ini dan diperbarui setiap kali Anda membuka file baru. Jika Anda menggunakan [Git](https://git-scm.com) untuk mengelola brankas Anda, Anda mungkin ingin menambahkan file-file ini ke `.gitignore`.

## Pengaturan global

Obsidian menyimpan pengaturan global di folder sistem. Lokasi folder sistem tergantung pada sistem operasi yang Anda gunakan.

- **macOS**: `/Users/namapengguna/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` atau `~/.config/obsidian/`

> [!warning] Jangan membuat brankas di folder sistem. Hal ini dapat menyebabkan data rusak atau kehilangan data.

## IndexedDB

IndexedDB adalah basis data sisi klien tingkat rendah yang digunakan Obsidian untuk penyimpanan backend. IndexedDB membantu menjaga status koneksi [[Pengantar Obsidian Sync|Obsidian Sync]], dan mempertahankan [[#Cache metadata]] ketika aplikasi ditutup.

> [!warning] Jika [Mode Lockdown](<https://support.apple.com/en-us/105120>) Apple diaktifkan dan Obsidian tidak dikecualikan, file basis data ini tidak akan tersimpan, sehingga memerlukan pengindeksan ulang setiap kali aplikasi dimulai.

### Cache metadata

Untuk memberikan pengalaman yang cepat saat menggunakan aplikasi, Obsidian menyimpan catatan lokal tentang metadata file di brankas Anda yang disebut **cache metadata**. Metadata ini mendukung banyak hal di seluruh aplikasi, dari tampilan grafik hingga tampilan kerangka.

Obsidian menjaga cache ini tetap sinkron dengan file di brankas Anda, tetapi ada kemungkinan data menjadi tidak sinkron dengan file yang mendasarinya. Jika hal ini terjadi pada brankas Anda, Anda dapat membangun ulang cache metadata dari pengaturan aplikasi di bagian *Berkas & Tautan*.

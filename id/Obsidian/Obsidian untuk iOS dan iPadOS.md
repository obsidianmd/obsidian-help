---
permalink: ios
aliases:
  - Obsidian/Aplikasi iOS
---
Aplikasi seluler Obsidian untuk iOS dan iPadOS membawa kemampuan pencatatan yang canggih ke iPhone dan iPad Anda. Anda dapat mengunduhnya dari [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).

Halaman ini membahas fitur-fitur khusus iOS termasuk widget, integrasi Siri, dan Shortcuts.

## Sinkronisasi

Untuk informasi tentang sinkronisasi catatan antar perangkat, silakan lihat [[Sinkronisasi catatan antar perangkat]].

## Widget

Obsidian untuk iOS menawarkan beberapa widget untuk melakukan tindakan cepat pada brankas Anda.

> [!note] Catatan
> Widget tersedia di iOS dan iPadOS 18 dan lebih tinggi.
> Widget tidak tersedia saat menggunakan "Require Face ID" untuk membuka kunci aplikasi.


### Widget Layar Kunci dan Control Center

Widget Layar Kunci dan Control Center memungkinkan Anda untuk:
- Membuat catatan baru
- Membuka catatan tertentu
- Membuka catatan harian
- Membuka pencarian
- Membuka Obsidian

### Widget Layar Utama

Widget Layar Utama memungkinkan Anda untuk:
- Membuat catatan
- Melihat catatan
- Membuka catatan harian Anda

### Menyesuaikan widget

Anda dapat menyesuaikan widget agar sesuai dengan alur kerja Anda, seperti memilih brankas yang akan digunakan atau menentukan catatan tertentu untuk dibuka.

- **Widget Layar Utama:** Ketuk dan tahan widget, lalu pilih **Edit Widget**.
- **Widget Layar Kunci:** Sentuh dan tahan Layar Kunci Anda, ketuk **Customize**, pilih Layar Kunci, lalu ketuk widget yang ingin Anda sesuaikan.
- **Widget Control Center:** Buka Control Center, ketuk tombol **+** di kiri atas untuk mulai mengedit, lalu ketuk widget yang ingin Anda sesuaikan.

Opsi konfigurasi widget **Catatan Baru**:

![[ios-new-note-configuration.png|400]]

Opsi konfigurasi widget **Lihat Catatan**:

![[ios-view-note-configuration.png|400]]

## Shortcuts

Obsidian terintegrasi dengan aplikasi Shortcuts dari Apple, memungkinkan Anda membuat automasi yang canggih. Shortcut yang tersedia meliputi:

- **Buka catatan** — Buka catatan tertentu di brankas Anda
- **Buat catatan baru** — Buat catatan baru di brankas Anda
- **Buka catatan harian** — Langsung menuju catatan harian hari ini
- **Tangkap ke Catatan Harian** — Tambahkan teks di akhir atau awal catatan harian tanpa membuka aplikasi Obsidian
- **Tangkap ke Bookmark** — Tambahkan teks di akhir atau awal catatan yang dibookmark tanpa membuka aplikasi Obsidian

Shortcut tangkapan sangat berguna untuk pencatatan cepat, karena memungkinkan Anda menambahkan konten ke catatan di latar belakang.

## Share Sheet

Share Sheet Obsidian memungkinkan Anda menangkap konten dari halaman web. Fitur ini juga berfungsi dengan aplikasi seperti YouTube dan jejaring sosial lainnya.

> [!note]
> - Share Sheet bawaan tersedia di iOS dan iPadOS 18 dan lebih tinggi.
> - Fitur Share Sheet yang dijelaskan di bagian ini memerlukan Obsidian 1.13.0 atau lebih baru.

Gunakan Share Sheet untuk mengirim konten dengan cepat dari aplikasi lain ke Obsidian:
1. Di aplikasi lain, ketuk tombol **Bagikan**.
2. Pilih **Obsidian**.
3. Pilih Lokasi.
4. Tinjau atau edit konten yang ditangkap.
5. Ketuk **Simpan**.

![[ios-share-sheet-extension.png|400]]

### Lokasi

Lokasi memungkinkan Anda menentukan ke mana konten yang dibagikan akan disimpan sebelum Anda menyimpannya.

Lokasi dapat menangkap ke:
- **Catatan baru** — Buat catatan baru di brankas atau folder.
- **Catatan harian** — Tambahkan konten di akhir atau awal catatan harian hari ini.
- **Catatan yang dibookmark** — Tambahkan konten di akhir atau awal catatan yang dibookmark.
- **Catatan** — Pilih catatan yang sudah ada di brankas Anda.
- **Bookmark baru** — Simpan URL yang dibagikan ke bookmark Obsidian.

![[ios-share-sheet-locations.png|400]]

### Menyesuaikan Lokasi

Anda dapat membuat Lokasi untuk alur kerja umum, seperti menyimpan artikel ke inbox, menambahkan kutipan ke catatan harian Anda, atau menambahkan tautan ke bookmark.

Untuk menyesuaikan Lokasi:

1. Buka Obsidian dari iOS Share Sheet.
2. Ketuk Lokasi saat ini di bilah alat.
3. Ketuk tombol **+** untuk membuat Lokasi baru, atau pilih Lokasi yang sudah ada untuk mengeditnya.
4. Pilih brankas, perilaku, dan pengaturan opsional.

Tergantung pada jenis `Behavior`, Anda dapat mengonfigurasi opsi seperti:
- Folder
- Templat
- Grup bookmark
- Posisi tambah di akhir atau awal
- Apakah tautan yang dibagikan menangkap **Teks Lengkap** atau hanya **URL**

![[ios-share-sheet-add-location.png|400]]

### Menggunakan Templat Saat Membagikan

Anda dapat menggunakan templat saat membagikan konten dari Share Sheet. Templat memungkinkan Anda memformat konten web yang ditangkap dengan detail seperti judul halaman, penulis, situs web sumber, dan tanggal publikasi.

Untuk menyiapkan Lokasi dengan templat:

1. Buka Obsidian dari iOS Share Sheet.
2. Ketuk Lokasi saat ini di bilah alat.
3. Ketuk tombol **+** untuk membuat Lokasi baru.
4. Masukkan nama untuk Lokasi.
5. Pilih brankas.
6. Atur **Behavior** ke **New Note**.
7. Di bagian **Optional**, ketuk **Template**.
8. Pilih catatan dari brankas Anda untuk digunakan sebagai templat.
9. Ketuk **Save** untuk menyimpan Lokasi.

![[ios-share-sheet-set-template.png|400]]

Saat Anda membagikan tautan menggunakan Lokasi ini, Obsidian menerapkan templat terlebih dahulu, lalu menambahkan konten yang dibagikan.

Placeholder templat yang didukung:

| Placeholder | Deskripsi |
| --- | --- |
| `{{author}}` | Penulis artikel |
| `{{description}}` | Deskripsi atau ringkasan artikel |
| `{{domain}}` | Nama domain situs web |
| `{{favicon}}` | URL favicon situs web |
| `{{image}}` | URL gambar utama artikel |
| `{{published}}` | Tanggal publikasi artikel, menggunakan format tanggal bawaan |
| `{{published: YYYY-MM-DD}}` | Tanggal publikasi menggunakan format tanggal kustom |
| `{{site}}` | Nama situs web |
| `{{title}}` | Judul artikel |
| `{{url}}` | URL artikel |
| `{{wordCount}}` | Jumlah total kata dalam konten yang diekstrak |

Anda juga dapat menggunakan placeholder tanggal dan waktu templat standar:

| Placeholder | Deskripsi |
| --- | --- |
| `{{date}}` | Tanggal saat ini |
| `{{date: YYYY-MM-DD}}` | Tanggal saat ini menggunakan format kustom |
| `{{time}}` | Waktu saat ini |
| `{{time: HH:mm}}` | Waktu saat ini menggunakan format kustom |

## Integrasi Siri

Anda dapat menggunakan perintah suara Siri untuk berinteraksi dengan Obsidian:

- "Capture using Obsidian"
- "Capture to Obsidian"
- "Open my daily note in Obsidian"
- "Search in Obsidian"

## Integrasi Spotlight

Saat Anda mencari "Obsidian" di iOS Spotlight, Anda akan melihat tindakan cepat:
- Catatan Baru
- Cari
- Catatan Harian

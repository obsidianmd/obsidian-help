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
- Membuka Quick Capture
- Membuat catatan baru
- Membuka catatan tertentu
- Membuka catatan harian
- Membuka pencarian
- Membuka Obsidian

### Widget Layar Utama

Widget Layar Utama memungkinkan Anda untuk:
- Membuka Quick Capture
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

## Quick Capture

Quick Capture memungkinkan Anda menyimpan teks ke brankas Anda dari widget Layar Kunci, Control Center, Layar Utama, atau Shortcuts tanpa menunggu brankas Anda dimuat. Tergantung pada lokasi tangkapan yang Anda pilih, Quick Capture dapat membuat catatan baru atau menambahkan teks ke catatan yang sudah ada.

![[ios-quick-capture-view.png|400]]

> [!note] Catatan
> Quick Capture memerlukan Obsidian 1.14 atau lebih baru dan iOS atau iPadOS 26 atau lebih baru.

Untuk menangkap teks:

1. Tambahkan widget **Quick Capture** ke Layar Kunci, Control Center, atau Layar Utama Anda.
2. Ketuk widget untuk membuka Quick Capture.
3. Masukkan teks Anda.
4. Untuk mengubah tempat penyimpanan teks, ketuk lokasi tangkapan di bagian atas layar dan pilih lokasi lain.
5. Ketuk tanda centang untuk menyimpan teks.

**Catatan**: Jika Live Activities diaktifkan, catatan quick capture juga muncul di Layar Kunci dan, pada model iPhone yang didukung, di Dynamic Island. Ketuk bilah atau Live Activity untuk melanjutkan pengeditan.

![[ios-quick-capture-live-activity.png|400]]

### Lokasi tangkapan

Lokasi tangkapan menentukan di mana Quick Capture menyimpan teks Anda. Lokasi tangkapan dapat:

- Membuat catatan baru di folder yang dipilih, dengan templat opsional dan nama catatan kustom.
- Menambahkan teks di akhir atau awal catatan harian Anda.
- Menambahkan teks di akhir atau awal catatan yang dibookmark.
- Menambahkan teks di akhir atau awal catatan lain yang Anda pilih.

Untuk membuat lokasi tangkapan:
1. Buka Quick Capture.
2. Ketuk lokasi tangkapan di bagian atas layar.
3. Ketuk tombol plus (+).
4. Pilih perilaku dan konfigurasikan pengaturan opsional.
5. Ketuk **Save**.

Anda juga dapat menggunakan **Open Note after Capture** untuk memilih apakah Obsidian membuka catatan tujuan setelah menyimpan tangkapan.

![[ios-quick-capture-locations.png|400]]

![[ios-quick-capture-config.png|400]]

### Templat Quick Capture

Anda dapat menerapkan templat untuk memformat teks yang ditangkap. Templat Quick Capture mendukung placeholder berikut:

| Placeholder | Deskripsi |
| --- | --- |
| `{{content}}` | Teks yang ditangkap |
| `{{date}}` | Tanggal saat ini |
| `{{time}}` | Waktu saat ini |
| `{{latitude}}` | Lintang saat ini |
| `{{longitude}}` | Bujur saat ini |
| `{{shortAddress}}` | Bentuk singkat dari alamat saat ini |
| `{{fullAddress}}` | Alamat lengkap saat ini |
| `{{googleMapsLink}}` | Tautan Google Maps ke lokasi saat ini |
| `{{appleMapsLink}}` | Tautan Apple Maps ke lokasi saat ini |
| `{{openStreetMapLink}}` | Tautan OpenStreetMap ke lokasi saat ini |

Untuk mengonfigurasi widget Quick Capture untuk lokasi tangkapan tertentu, gunakan langkah-langkah di [[#Menyesuaikan widget]]. Widget Layar Utama dapat menampilkan beberapa lokasi tangkapan.

![[ios-quick-capture-widget.png|400]]

## Shortcuts

Obsidian terintegrasi dengan aplikasi Shortcuts dari Apple, memungkinkan Anda membuat automasi yang canggih. Shortcut yang tersedia meliputi:

- **Quick Capture** — Buka Quick Capture menggunakan lokasi tangkapan yang dikonfigurasi
- **Buka Bookmark** - Buka catatan yang dibookmark dari brankas Anda
- **Buka Catatan Baru** — Buat catatan baru di brankas Anda
- **Buka Catatan Harian** — Langsung menuju catatan harian hari ini
- **Tangkap ke Catatan Harian** — Tambahkan teks di akhir atau awal catatan harian tanpa membuka aplikasi Obsidian
- **Tangkap ke Bookmark** — Tambahkan teks di akhir atau awal catatan yang dibookmark tanpa membuka aplikasi Obsidian
- **Dapatkan Catatan yang Dibookmark** — Mendapatkan teks dari catatan yang dibookmark
- **Dapatkan Catatan Harian** — Mendapatkan teks dari catatan harian
- **Cari Brankas** — Cari brankas Anda berdasarkan kata kunci
- **Bookmark Tautan** — Tambahkan tautan web ke bookmark Anda
- **Buka Obsidian** — Membuka Obsidian

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

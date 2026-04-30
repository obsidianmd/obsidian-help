---
permalink: web-clipper/capture
---
Setelah Anda memasang ekstensi peramban [[Pengantar Obsidian Web Clipper|Web Clipper]], Anda dapat mengaksesnya dengan beberapa cara, tergantung pada peramban Anda:

1. Ikon Obsidian di bilah alat peramban Anda.
2. Pintasan keyboard, untuk mengaktifkan ekstensi dari keyboard Anda.
3. Menu konteks, dengan mengklik kanan halaman web yang sedang Anda kunjungi.

Untuk menyimpan halaman ke Obsidian, klik tombol **Tambah ke Obsidian**.

## Menangkap halaman

Saat Anda membuka ekstensi, Web Clipper mengekstrak data dari halaman web saat ini mengikuti pengaturan di [[Obsidian Web Clipper/Template|templat]] Anda. Anda dapat membuat templat sendiri, dan menyesuaikan keluaran menggunakan [[Variabel|variabel]] dan [[Filter|filter]].

Secara bawaan, Web Clipper berupaya mengekstrak secara cerdas hanya konten artikel utama, tidak termasuk elemen lain pada halaman. Namun, Anda dapat mengesampingkan perilaku ini dengan cara berikut:

- Jika templat kustom tersedia, Web Clipper menggunakan templat Anda.
- Jika ada seleksi teks, Web Clipper menggunakan seleksi tersebut. Anda dapat menggunakan `Ctrl/Cmd+A` untuk memilih seluruh halaman.
- Jika ada [[Sorot halaman web|sorotan]], Web Clipper menggunakan sorotan tersebut.

## Mengunduh gambar

Gambar tidak otomatis diunduh saat Anda menggunakan Web Clipper. Sebagai gantinya, gambar menautkan ke URL berbasis web mereka. Ini menghemat ruang di brankas Anda tetapi berarti gambar tidak akan dapat diakses secara offline, atau jika URL berhenti berfungsi.

Anda dapat mengunduh gambar untuk file apa pun di Obsidian menggunakan [[Palet perintah|perintah]] bernama **Unduh lampiran untuk file saat ini**. Perintah ini juga dapat dipetakan ke pintasan keyboard di Obsidian.

## Pintasan keyboard

Web Clipper menyertakan pintasan keyboard yang dapat Anda gunakan untuk mempercepat alur kerja Anda. Untuk mengubah pemetaan tombol, buka **Pengaturan Web Clipper** → **Umum** dan ikuti instruksi untuk peramban Anda. Pemetaan dapat diubah untuk semua peramban kecuali Safari yang tidak mendukung pengeditan pintasan keyboard.

| Aksi                                      | macOS          | Windows/Linux   |
| ----------------------------------------- | -------------- | --------------- |
| Buka clipper                              | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Klip cepat                                | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Aktifkan/nonaktifkan penyorot             | `Opt+Shift+H`  | `Alt+Shift+H`   |
| Aktifkan/nonaktifkan pembaca              | `Opt+Shift+R`  | `Alt+Shift+R`   |

## Fungsionalitas antarmuka

Antarmuka Web Clipper dibagi menjadi empat bagian:

1. **Header** tempat Anda dapat beralih templat, mengaktifkan [[Sorot halaman web|penyorotan]], [[Pembaca|mode baca]], dan mengakses pengaturan.
2. **Properti** menampilkan [[Properti|metadata]] yang diekstrak dari halaman yang akan disimpan sebagai [[Properti]] di Obsidian.
3. **Konten catatan** yang akan disimpan ke Obsidian.
4. **Footer** memungkinkan Anda memilih brankas dan folder, serta menambahkan ke Obsidian.

Fungsionalitas header meliputi:

- ![[lucide-chevrons-up-down.svg#icon]] **Templat** pengalih untuk menggunakan [[Obsidian Web Clipper/Template|templat]] tersimpan yang ditambahkan di pengaturan ekstensi.
- ![[lucide-more-horizontal.svg#icon]] Tombol **Lainnya** untuk menampilkan variabel halaman yang dapat Anda gunakan dalam templat.
- ![[lucide-highlighter.svg#icon]] Tombol **Penyorot** untuk mengaktifkan [[Sorot halaman web|penyorotan]].
- ![[lucide-book-icon.svg#icon]] Tombol **Pembaca** untuk mengaktifkan [[Pembaca|tampilan baca]].
- ![[lucide-picture-in-picture-2.svg#icon]] Tombol **Sematkan** untuk memindahkan Web Clipper dari popup ke dalam halaman.
- ![[lucide-settings.svg#icon]] Tombol **Pengaturan** untuk membuka pengaturan ekstensi.

Fungsionalitas footer meliputi:

- Tombol **Tambah ke Obsidian** untuk menyimpan data ke Obsidian.
- Dropdown **Vault** untuk beralih antara vault tersimpan yang ditambahkan di pengaturan Web Clipper.
- Kolom **Folder** untuk menentukan folder tujuan penyimpanan.
- **Interpreter** untuk menjalankan [[Interpretasi halaman web|perintah bahasa alami]] pada halaman.

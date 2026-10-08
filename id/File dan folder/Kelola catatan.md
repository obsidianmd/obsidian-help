---
permalink: manage-notes
publish: true
mobile: false
description: null
aliases:
  - Bagaimana/Mengubah nama catatan
  - Topik lanjutan/Penghapusan berkas
---
Anda dapat mengelola file dan folder dengan beberapa cara, menggunakan [[Pintasan]], [[Palet perintah|perintah]], atau [[Penjelajah berkas]].

## Buat catatan baru

Untuk membuat file baru:

1. Tekan `Ctrl+N` (atau `Cmd+N` di macOS).
2. Masukkan nama catatan lalu tekan `Enter` untuk mulai menyunting catatan.

Anda juga dapat membuat catatan menggunakan [[Penjelajah berkas#Buat catatan baru|Penjelajah berkas]], atau dengan memilih **Buat catatan baru** dari [[Palet perintah]].

> [!hint] Batasan karakter sistem
> Obsidian akan mematuhi batasan nama file dari sistem operasi tempat Anda membuat catatan. Jika Anda berencana untuk [[Sinkronisasi catatan antar perangkat|menyinkronkan catatan antar perangkat]], pastikan nama file Anda [aman untuk sistem operasi lain](https://stackoverflow.com/q/1976007).
^blockquote-system-limitation

## Buka file di luar brankas Anda

Di desktop, Anda dapat membuka dan menyunting file Markdown individual di luar brankas Anda. File akan terbuka di jendela Anda saat ini dan tetap berada di lokasi aslinya.

> [!note] Memerlukan Obsidian 1.14 dan penginstal terbaru
> [[Perbarui Obsidian#Pembaruan penginstal|Perbarui penginstal Anda]] dengan mengunduh Obsidian dari [obsidian.md/download](https://obsidian.md/download) dan memasang ulang aplikasi.

Untuk membuka file Markdown:

1. Buka [[Palet perintah]].
2. Pilih **Buka file dari luar brankas...**.
3. Pilih file Markdown di komputer Anda.

Anda juga dapat menggunakan menu **Buka dengan** dari sistem operasi Anda dan pilih **Obsidian**. Untuk membuka file Markdown di Obsidian secara bawaan, atur Obsidian sebagai aplikasi bawaan untuk file `.md`.

Sematan gambar dan tautan ke file lokal lainnya diselesaikan secara relatif terhadap folder file Markdown. Gunakan [[Kerangka]] untuk menavigasi judul dan [[Tautan keluar]] untuk menelusuri file yang ditautkan.

### Pratinjau file dengan Quick Look

Di macOS, pilih file Markdown di Finder dan tekan `Space` untuk mempratinjaunya dengan **Quick Look**. Pratinjau Quick Look berfungsi bahkan saat Obsidian ditutup.

## Ganti nama catatan

Untuk mengganti nama catatan yang aktif:

1. Pilih nama catatan di bagian atas editor (atau tekan `F2`).
2. Masukkan nama baru lalu tekan `Enter`.

Saat Anda mengganti nama file, Obsidian secara otomatis memperbarui semua tautan ke file tersebut.

Anda dapat mengganti nama catatan atau folder tanpa membukanya, menggunakan [[Penjelajah berkas#Ganti nama file atau folder|Penjelajah berkas]]

## Hapus catatan

Untuk menghapus catatan, pilih **Opsi lain → Hapus berkas** di kanan atas catatan yang aktif.

Atau, pilih **Hapus berkas saat ini** dari [[Palet perintah]].

Anda juga dapat menghapus catatan atau folder, menggunakan [[Penjelajah berkas#Hapus file atau folder|Penjelajah berkas]].

> [!note] Apa yang terjadi pada file setelah saya menghapusnya?
> Untuk mengubah apa yang terjadi pada file yang dihapus, pilih salah satu opsi berikut di **[[Pengaturan]] → File & Tautan**:
>
> - **Tempat sampah sistem**: Secara bawaan, file yang dihapus akan masuk ke tempat sampah sistem operasi Anda. Untuk memulihkan file, gunakan pengelola file pilihan Anda.
> - **Tempat sampah Obsidian**: Anda dapat mengirim file yang dihapus ke folder `.trash` di brankas Anda.
> - **Hapus secara permanen**: File langsung dihapus tanpa cara untuk memulihkannya.

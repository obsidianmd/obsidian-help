---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Halaman ini mencantumkan masalah yang jarang terjadi yang mungkin Anda temui dengan Obsidian Sync dan cara mengatasinya.
aliases:
  - Obsidian Sync/Pemecahan masalah Obsidian Sync
---
Halaman ini mencantumkan masalah yang jarang terjadi yang mungkin Anda temui dengan [[Pengantar Obsidian Sync|Obsidian Sync]] dan cara mengatasinya. Sebelum melanjutkan, kami sarankan untuk meninjau halaman [[Ikon status dan pesan]] dan [[Pertanyaan yang sering diajukan]].

## Umum

### Resolusi konflik

Konflik terjadi ketika Anda mengubah file yang sama di dua atau lebih perangkat sebelum sinkronisasi selesai. Misalnya, Anda mengedit catatan di komputer. Sebelum perubahan itu diunggah, Anda juga mengubah catatan yang sama di ponsel.

Konflik lebih sering terjadi saat Anda bekerja secara offline. Semakin banyak perubahan dan semakin lama jeda antar sinkronisasi, semakin besar kemungkinan konflik.

#### Cara Obsidian Sync menangani konflik

Ketika Obsidian Sync menemukan konflik, hasilnya bergantung pada jenis file:

- **File Markdown**: Obsidian Sync menggabungkan perubahan menggunakan algoritma [diff-match-patch](https://github.com/google/diff-match-patch) dari Google.
- **Jenis file lainnya**: Untuk semua file lain, termasuk Canvas, Obsidian menggunakan pendekatan "modifikasi terakhir menang". Versi yang paling baru dimodifikasi menggantikan versi sebelumnya.

Untuk konflik pada pengaturan Obsidian, seperti pengaturan plugin, Obsidian Sync menggabungkan file JSON. Kunci dari JSON lokal diterapkan di atas JSON jarak jauh.

#### Opsi resolusi konflik

Mulai Obsidian 1.9.7, Anda dapat memilih cara menangani konflik. Untuk mengonfigurasi pengaturan ini:

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, pilih **Sync**.
3. Di bawah **[[Pengaturan Sync dan sinkronisasi selektif#Resolusi konflik|Resolusi konflik]]**, pilih opsi yang Anda inginkan:
   - **Gabungkan secara otomatis** (bawaan): Obsidian Sync menggabungkan semua perubahan dari perangkat yang berbeda ke dalam satu file. Ini menyimpan semua suntingan, tetapi terkadang dapat membuat teks duplikat atau masalah pemformatan. Anda perlu memperbaikinya secara manual.
   - **Buat file konflik**: Ketika Obsidian menemukan perubahan yang bertentangan, ia membuat file konflik terpisah alih-alih menggabungkan secara otomatis. Anda kemudian dapat meninjau kedua versi dan menggabungkannya sendiri. Ini memberi Anda kontrol penuh atas hasil akhir.

> [!warning]+ Konfigurasi di semua perangkat
> Pengaturan resolusi konflik bersifat khusus per perangkat. Anda harus mengonfigurasi opsi yang Anda inginkan di setiap perangkat. Ini memastikan perilaku yang sama di semua perangkat yang disinkronkan.

**Pola penamaan file konflik**

Ketika Anda menggunakan opsi "Buat file konflik", Obsidian membuat file baru dengan pola penamaan ini:

```
nama-catatan-asli.sync-conflict-TTTTBBHH-JJMMDD.md
```

Misalnya, jika konflik terjadi pada catatan bernama `Catatan rapat.md`, file konflik mungkin dinamai:

```
Catatan rapat.sync-conflict-20241128-143022.md
```

File konflik berisi perubahan dari perangkat tempat konflik terdeteksi. File asli menyimpan versi jarak jauh. Anda dapat membandingkan kedua file dan menggabungkan kontennya secara manual.

> [!info]+ Periksa log sinkronisasi
> Untuk memeriksa kapan konflik terjadi, buka [[Ikon status dan pesan#Aktivitas sinkronisasi|Log sinkronisasi]]. Filter untuk "Merge Conflicts" atau cari "Conflict".

### Sync menghapus catatan yang baru saja saya buat di dua perangkat

Obsidian Sync biasanya mencoba [[#Resolusi konflik|menyelesaikan konflik]] dengan menggabungkan catatan yang bertentangan di seluruh perangkat. Namun, masalah dapat terjadi bagi pengguna yang secara otomatis membuat atau mengubah catatan saat memulai. Ini termasuk [[Catatan harian]] atau saat menggunakan plugin komunitas [Templater](https://github.com/SilentVoid13/Templater).

Jika Anda membuat catatan secara lokal di satu perangkat dan, dalam beberapa menit, Sync mengunduh versi jarak jauh dari catatan yang sama, Sync akan menyimpan versi jarak jauh tanpa menggabungkan keduanya. Dalam kasus ini, Anda dapat memulihkan versi lokal menggunakan [[Pemulih berkas]].

### Sync tidak menyinkronkan pembaruan plugin dan pengaturan saya

Obsidian [[Pertanyaan yang sering diajukan#Apakah Obsidian Sync memuat ulang pengaturan saya secara langsung?|tidak memuat ulang semua pengaturan secara langsung]]. Setelah Anda memperbarui pengaturan atau plugin, Anda perlu memulai ulang Obsidian di perangkat lain untuk melihat perubahannya. Pada perangkat seluler, Anda mungkin perlu menutup paksa aplikasi.

> [!example]- Mengubah tema
> - Di perangkat utama Anda (biasanya komputer), Anda mengubah tema kembali ke bawaan dari tema kustom.
> - Log sinkronisasi mengonfirmasi file yang diperbarui telah dikirim ke brankas jarak jauh, tetapi perangkat seluler Anda masih menampilkan tema kustom.
> - Di perangkat seluler, periksa log sinkronisasi untuk mengonfirmasi penerimaan file `appearance.json` yang diperbarui.
> - Muat ulang atau mulai ulang Obsidian di perangkat seluler.
> - Setelah memuat ulang atau memulai ulang, perangkat seluler seharusnya menampilkan tema yang sama seperti komputer Anda.

### File saya terus menghilang dari Sync segera setelah saya memulihkannya

Masalah ini paling umum terjadi di Windows. Windows Defender mungkin mengkarantina file dengan blok kode, yang menyebabkan catatan tertentu menghilang.

Penyebab umum lainnya adalah sinkronisasi ganda. Ini terjadi ketika Obsidian Sync berjalan bersamaan dengan layanan sinkronisasi lain.

![[Beralih ke Obsidian Sync#Pindahkan brankas Anda keluar dari layanan sinkronisasi pihak ketiga atau penyimpanan cloud]]

---

Terakhir, ini dapat terjadi ketika Anda memulihkan file di satu perangkat, tetapi kemudian file tersebut dihapus dari perangkat sekunder. Ini terjadi ketika nama file memiliki [[Ikon status dan pesan#Pesan dilewati|karakter ilegal]].

## Android

**Perangkat saya menghapus lampiran yang saya terima melalui Sync**

Masalah ini kemungkinan disebabkan oleh Google atau Android Photos yang mengelola lampiran Anda. Untuk mencegah sistem mengubah file yang diterima melalui Sync, tambahkan file `.nomedia` [ke brankas Anda](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) di perangkat Android Anda.

> [!tip]- Gunakan plugin
> Plugin komunitas [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) memudahkan hal ini. Pasang di ponsel Android Anda. Perlu diketahui bahwa file `.nomedia` tidak disinkronkan antar perangkat melalui Obsidian Sync.

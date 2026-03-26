---
permalink: import/apple-notes
---
Obsidian memungkinkan Anda dengan mudah memigrasikan catatan dari Apple Notes menggunakan [[Importer|plugin Importer]]. Ini akan mengonversi data Apple Notes Anda menjadi file Markdown yang tahan lama, yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

Saat ini, Importer hanya mendukung migrasi dari Apple Notes di macOS. Fitur ini belum tersedia di iOS.

## Mengimpor data Apple Notes ke Obsidian

Anda memerlukan plugin resmi Obsidian [[Importer]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Pergi ke **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Apple Notes**.
6. Klik **Impor**.
7. Klik **Buka** pada popup yang muncul berjudul `Select the "group.com.apple.notes" folder to allow Obsidian to read Apple Notes data`.
8. Tunggu hingga impor selesai.
9. Selesai!

## Konten yang didukung

Plugin Obsidian Importer mendukung hampir semua jenis konten Apple Notes. Ini termasuk tabel, gambar, gambar tangan, pindaian, PDF, dan tautan yang diperkenalkan di iOS 17.

> [!Warning]
> Catatan yang dilindungi kata sandi dienkripsi oleh Apple, sehingga harus dibuka kuncinya sebelum mengimpornya. Catatan yang terkunci akan dilewati.

### Pindaian

Apple menyimpan pindaian dalam berbagai format tergantung bagaimana pindaian tersebut dibuat. Untuk mempertahankan data asli, ini berarti pindaian akan diekspor dengan cara yang berbeda.

* Pindaian yang dibuat atau dilihat pada versi macOS atau iOS yang lebih lama akan diekspor sebagai serangkaian gambar yang tidak dipotong.
* Pindaian yang dibuat atau dilihat pada versi macOS atau iOS yang lebih baru biasanya akan diekspor sebagai gambar yang dipotong.
* Pindaian yang telah diedit menggunakan fitur yang diperkenalkan di iOS 17 biasanya akan diekspor sebagai PDF.

## Metode ekspor alternatif

Apple tidak menyediakan opsi bawaan untuk mengekspor catatan Anda. Namun beberapa alat pihak ketiga tersedia seperti [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) oleh Chintan Ghate. Harap diperhatikan bahwa sebagian besar alat terbatas dalam data yang dapat diekspor dari Apple Notes dan mungkin tidak menghasilkan data keluaran yang paling kompatibel. Alat-alat ini bekerja paling baik jika Apple Notes Anda sebagian besar hanya berisi teks, dan memiliki sedikit lampiran atau fitur khusus seperti gambar tangan dan pindaian.

Tergantung pada alat yang Anda gunakan, ekspor mungkin dalam format Markdown atau format HTML. Ikuti petunjuk berdasarkan format file yang Anda ekspor:

- [[Impor file HTML]]
- [[Impor file Markdown]]

---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
Obsidian memudahkan Anda untuk memigrasikan entri jurnal dari Apple Journal menggunakan [[Impor|plugin Importer]]. Ini akan mengonversi jurnal Anda menjadi file Markdown yang tahan lama yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

## Ekspor data Anda dari Apple Journal

### Di iPhone
Ikuti petunjuk untuk [Mencetak dan mengekspor entri di Journal pada iPhone](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806):

1. Buka aplikasi Journal di iPhone Anda.
2. Pilih jurnal atau ketuk Semua Entri.
3. Ketuk tombol Lainnya di bagian atas layar.
4. Ketuk Ekspor, lalu pilih Ekspor.
5. Pilih lokasi, lalu ketuk tombol Terpilih.

### Di Mac (Tahoe)
Ikuti petunjuk untuk [Mencetak dan mengekspor entri di Journal pada Mac](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a):

1. Buka aplikasi Journal di Mac Anda.
2. Buka File > Ekspor, lalu pilih Ekspor.

## Impor data Apple Journal ke Obsidian

Anda memerlukan plugin resmi Obsidian [[Impor]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file**, pilih **Apple Journal (HTML Export)**.
6. Di **File yang akan diimpor**, pilih folder dengan data yang diekspor, biasanya _AppleJournalEntries_, atau file individual dari _Entries_.
7. Tinjau dan ubah opsi impor lainnya.
8. Pilih **Impor** untuk meninjau templat yang dihasilkan dan melihat pratinjau contoh dari entri Anda.
9. Pilih **Impor** lagi dan tunggu hingga impor selesai.

## Templat

Gunakan [[Template Importer|templat Importer]] untuk mengonfigurasi sepenuhnya bagaimana data Apple Journal Anda diimpor.

![[Template Importer#Variables]]

Ketika **Add metadata as frontmatter** diaktifkan, metadata Apple Journal dikonversi menjadi [[Properti|properti]]. Tergantung pada entri, ini dapat mencakup `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media`, dan `workout-route`.

Gunakan variabel `properties` untuk mengakses metadata ini. Misalnya, gunakan `{{properties.location}}` untuk lokasi atau `{{properties["state-of-mind"]}}` untuk state of mind.

Laman ini menjelaskan bagaimana Anda dapat mengkustomisasi tampilan dari situs [[Berkenalan dengan Obsidian Publish|Obsidian Publish]] Anda.

## Aset statis

Anda dapat mengkustomisasi situs Anda dengan [[Mempublikasi dan membatalkan publikasi catatan#Mempublikasikan catatan|membublikasikan]] berkas berikut ke situs Anda:

- `publish.css` untuk menambahkan CSS kustom
- `publish.js` untuk menambahkan JavaScript kustom
- `favicon-32x32.png` untuk mengatur favicon

**Catatan:**

- Dikarenakan Obsidian tidak mendukung berkas CSS ataupun JavaScript, Anda perlu menggunakan aplikasi lain untuk membuat dan mengubahnya.
- Secara bawaan, `publish.css` dan `publish.js` tidak muncul pada penjelajah berkas, tetapi Anda tetap dapat mempublikasikannya melalui dialog **Publikasikan perubahan**.

Untuk favicon, Obsidian Publish mendukung pengkonversian nama berikut, yang mana `32` merupakan dimensi ikon dalam satuan piksel:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Kami merekomendasikan Anda untuk menyediakan satu atau lebih dari dimensi berikut:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

## Menggunakan tema komunitas

Untuk menggunakan tema komunitas pada situs Anda:

1. Buka vault Anda di penjelajah berkas bawaan untuk OS Anda.
2. Pergi ke folder pengaturan vault (bawaan: `.obsidian`).
3. Buka folder `themes`.
4. Salin berkas CSS untuk tema yang Anda inginkan untuk situs Anda.
5. Tempelkan berkas ke folder akar dari vault Anda.
6. Ubah nama berkas CSS ke `publish.css`.
7. [[Mempublikasi dan membatalkan publikasi catatan#Mempublikasikan catatan|Publikasikan]] `publish.css`.

**Catatan:**

- Jika gaya tidak berubah dalam beberapa menit, Anda mungkin perlu menyegarkan cache peramban Anda.
- Anda dapat beralih antara mode gelap dan terang pada [[Mengelola situs#Menampilkan opsi situs|opsi situs]].

## Mengaktifkan fitur UI

Anda dapat menampilkan beberapa fitur UI untuk situs Anda, seperti tampilan grafik ataupun daftar isi.

Jelajahi fitur UI yang tersedi pada bagian **Pengalaman membaca** dan **Komponen** di [Mengelola situs#Menampilkan opsi situs|opsi situs]].

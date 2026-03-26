---
permalink: bases/views
---
Tampilan memungkinkan Anda mengorganisir informasi dalam [[Pengenalan Basis|Basis]] dengan berbagai cara. Sebuah basis dapat memuat beberapa tampilan, dan setiap tampilan dapat memiliki konfigurasi unik untuk menampilkan, mengurutkan, dan menyaring file.

Sebagai contoh, Anda mungkin ingin membuat basis bernama "Buku" yang memiliki tampilan terpisah untuk "Daftar bacaan" dan "Baru selesai dibaca".

## Bilah alat

Di bagian atas basis terdapat bilah alat yang memungkinkan Anda berinteraksi dengan tampilan dan hasilnya.

- ![[lucide-table.svg#icon]] **Menu tampilan** — membuat, mengubah, dan beralih tampilan.
- **Hasil** — membatasi, menyalin, dan mengekspor file.
- ![[lucide-arrow-up-down.svg#icon]] **Urutkan** — mengurutkan dan mengelompokkan file.
- ![[lucide-list-filter.svg#icon]] **Filter** — menyaring file.
- ![[lucide-list.svg#icon]] **Properti** — memilih properti yang ditampilkan dan membuat [[Rumus|rumus]].
- ![[lucide-search.svg#icon]] **Cari** — mencari item menggunakan properti yang ditampilkan.
- ![[lucide-plus.svg#icon]] **Baru** — membuat file baru dalam tampilan saat ini.

## Tambah dan beralih tampilan

Ada dua cara untuk menambahkan tampilan ke basis:

- Klik nama tampilan di kiri atas dan pilih ![[lucide-plus.svg#icon]] **Tambahkan tampilan**.
- Gunakan [[Palet perintah|palet perintah]] dan pilih **Bases: Add view**.

Tampilan pertama dalam daftar tampilan Anda akan dimuat secara bawaan. Seret tampilan dengan ikonnya untuk mengubah urutannya.

## Pengaturan tampilan

Setiap tampilan memiliki opsi konfigurasi sendiri. Untuk mengubah pengaturan tampilan:

1. Klik nama tampilan di kiri atas.
2. Klik panah kanan di samping tampilan yang ingin Anda konfigurasi.

Atau *klik kanan* nama tampilan di bilah alat basis untuk mengakses pengaturan tampilan dengan cepat.

## Tata letak

Tampilan dapat ditampilkan dengan tata letak berbeda termasuk ![[lucide-table.svg#icon]] **tabel**, ![[lucide-list.svg#icon]] **daftar**, ![[lucide-layout-grid.svg#icon]] **kartu**, dan ![[lucide-map.svg#icon]] **peta**. Tata letak tambahan dapat ditambahkan melalui [[Plugin komunitas]]. Beberapa tata letak masih dalam pengembangan dan memerlukan [[Versi akses awal|versi akses awal]] Obsidian.

| Tata letak                     | Deskripsi                                                                                                                   | Versi&nbsp;aplikasi |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [[Tampilan tabel\|Tabel]]      | Menampilkan file sebagai baris dalam tabel. Kolom diisi dari [[Properti|properti]] dalam catatan Anda.                      | 1.9                 |
| [[Tampilan kartu\|Kartu]]      | Menampilkan file sebagai kotak kartu. Memungkinkan Anda membuat tampilan seperti galeri dengan gambar.                       | 1.9                 |
| [[Tampilan daftar\|Daftar]]    | Menampilkan file sebagai [[Sintaksis format dasar#Daftar\|daftar]] dengan penanda berpoin atau bernomor.                    | 1.10                |
| [[Tampilan peta\|Peta]]        | Menampilkan file sebagai pin pada peta interaktif. Memerlukan plugin Maps.                                                  | 1.10                |


## Filter

Buka menu ![[lucide-list-filter.svg#icon]] **Filter** di bagian atas basis untuk menambahkan filter.

Basis tanpa filter menampilkan semua file di brankas Anda. Filter mempersempit hasil untuk hanya menampilkan file yang memenuhi kriteria tertentu. Misalnya, Anda dapat menggunakan filter untuk hanya menampilkan file dengan [[Tag|tag]] tertentu atau dalam folder tertentu. Banyak jenis filter yang tersedia.

Filter dapat diterapkan ke semua tampilan dalam basis, atau hanya tampilan tunggal dengan memilih dari dua bagian dalam menu ![[lucide-list-filter.svg#icon]] **Filter**.

- **Semua tampilan** menerapkan filter ke semua tampilan dalam basis.
- **Tampilan ini** menerapkan filter ke tampilan yang aktif.

#### Komponen filter

Filter memiliki tiga komponen:

1. **Properti** — memungkinkan Anda memilih [[Properti|properti]] di brankas Anda, termasuk [[Sintaksis Basis#Properti berkas|properti berkas]].
2. **Operator** — memungkinkan Anda memilih cara membandingkan kondisi. Daftar operator yang tersedia bergantung pada tipe properti (teks, tanggal, angka, dll.)
3. **Nilai** — memungkinkan Anda memilih nilai yang dibandingkan. Nilai dapat mencakup matematika dan [[Fungsi|fungsi]].

#### Konjungsi

- **Semua dari berikut ini benar** adalah pernyataan `dan` — hasil hanya akan ditampilkan jika *semua* kondisi dalam grup filter terpenuhi.
- **Salah satu dari berikut ini benar** adalah pernyataan `atau` — hasil akan ditampilkan jika *salah satu* kondisi dalam grup filter terpenuhi.
- **Tidak ada dari berikut ini yang benar** adalah pernyataan `tidak` — hasil tidak akan ditampilkan jika *salah satu* kondisi dalam grup filter terpenuhi.

#### Grup filter

Grup filter memungkinkan Anda membuat logika yang lebih kompleks dengan membuat kombinasi konjungsi.

#### Editor filter lanjutan

Klik tombol kode ![[lucide-code-xml.svg#icon]] untuk menggunakan editor **filter lanjutan**. Ini menampilkan [[Sintaksis Basis|sintaksis]] mentah untuk filter, dan dapat digunakan dengan [[Fungsi|fungsi]] yang lebih kompleks yang tidak dapat ditampilkan menggunakan antarmuka klik-dan-tunjuk.

## Mengurutkan dan mengelompokkan hasil

Buka menu ![[lucide-arrow-up-down.svg#icon]] **Urutkan** untuk mengurutkan dan mengelompokkan hasil dalam tampilan.

Anda dapat mengatur hasil berdasarkan satu atau lebih properti dalam urutan naik atau turun. Ini memudahkan untuk mendaftar catatan berdasarkan nama, waktu terakhir diedit, atau properti lainnya — termasuk rumus.

Anda juga dapat mengelompokkan hasil berdasarkan properti untuk mengorganisir item serupa ke dalam bagian yang terpisah secara visual. Saat ini, Obsidian mendukung pengelompokan berdasarkan satu properti saja.

### Menambahkan pengurutan

1. Buka menu ![[lucide-arrow-up-down.svg#icon]] **Urutkan** di bagian atas tampilan.
2. Pilih properti yang ingin Anda gunakan untuk mengurutkan (atau mengelompokkan).
3. Jika Anda memiliki beberapa pengurutan, seret ke atas atau ke bawah menggunakan pegangan ![[lucide-grip-vertical.svg#icon]] untuk mengubah prioritasnya.

Opsi untuk mengurutkan hasil bergantung pada tipe properti:

- **Teks**: urutkan *secara abjad* (A→Z) atau dalam *urutan abjad terbalik* (Z→A).
- **Angka**: urutkan dari *terkecil ke terbesar* (0→1) atau *terbesar ke terkecil* (1→0).
- **Tanggal dan waktu**: urutkan dari *lama ke baru*, atau *baru ke lama*.

### Menghapus pengurutan

1. Buka menu ![[lucide-arrow-up-down.svg#icon]] **Urutkan** di bagian atas tampilan.
2. Klik tombol tempat sampah ![[lucide-trash-2.svg#icon]] di samping pengurutan atau pengelompokan yang ingin Anda hapus.

## Membatasi, menyalin, dan mengekspor hasil

### Membatasi hasil

Menu *hasil* menampilkan jumlah hasil dalam tampilan. Klik tombol hasil untuk membatasi jumlah hasil, dan mengakses tindakan tambahan.

### Salin ke papan klip

Tindakan ini menyalin tampilan ke papan klip Anda. Setelah berada di papan klip, Anda dapat menempelkannya ke file Markdown, atau ke aplikasi dokumen lain termasuk spreadsheet seperti Google Sheets, Excel, dan Numbers.

### Ekspor CSV

Tindakan ini menyimpan CSV dari tampilan Anda saat ini.

## Menyematkan tampilan

Anda dapat menyematkan file basis di [[Sematkan file|file lain mana pun]] menggunakan sintaksis `![[File.base]]`. Tampilan pertama dalam daftar akan digunakan. Anda dapat mengubah urutannya dengan menyeret tampilan di menu tampilan.

Untuk menentukan tampilan bawaan untuk penyematan, gunakan `![[File.base#Tampilan]]`.

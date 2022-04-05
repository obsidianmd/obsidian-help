Obsidian mendukung protokol URI kustom `obsidian://` yang mana dapat digunakan untuk memicu beragam aksi pada aplikasi. Ini umumnya digunakan pada MacOS dan aplikasi seluler untuk otomatisaasi dan alur kerja antar aplikasi.

Jika Anda memiliki Obsidian terpasang, tautan berikut akan membuka aplikasi pada perangkat Anda: [Klik di sini](obsidian://open)

## Memasang URI Obsidian

Untuk memastikan sistem operasi Anda mengalihkan URI `obsidian://` ke aplikasi Obsidian, terdapat beberapa langkah tambahan yang perlu Anda lakukan.

- Pada Windows, cukup sekali menjalankan aplikasi. Ini akan mendaftarkan penanganan protokol kustom `obsidian://` pada Windows registry.
- Pada MacOS, cukup sekali menjalankan aplikasi, tetapi, aplikasi Anda **harus** terpasang pada versi 0.8.12 atau yang lebih baru.
- Pada Linux, terdapat proses yang lebih panjang:
	- Pertama, pastikan Anda membuat berkas `obsidian.desktop`. [Lihat di sini untuk lebih rincinya](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files)
	- Pastikan berkas desktop Anda menspesifikasikan bagian `Exec` dengan `Exec=executable %u`. Bagian`%u` digunakan untuk meloloskan URI `obsidian://` URI menuju aplikasi.
	- Jika Anda menggunakan pemasang AppImage, Anda mungkin akan melakukan unpack menggunakan `Obsidian-x.y.z.AppImage --appimage-extract`. Lalu pastikan poin direktif `Exec` merujuk pada executable yang ter-unpack tadi.

## Menggunakan URI Obsidian

URI Obsidian biasanya ditulis dengan format berikut:

```
obsidian://aksi?param1=nilai&param2=nilai
```

- Pada `aksi` biasanya merupakan aksi yang ingin Anda jalankan.

### Enkode

==Penting==

Pastikan nilai Anda merupakan URI yang ter-enkode dengan benar. Misalnya, karakter garis miring `/` harus ter-enkode sebagai `%2F` dan karakter spasi harus di-enkode dengan `%20`.

Ini sangat penting khususnya karena karena karakter "disimpan" yang di-enkodekan secara benar mungkin merusak interpretasi dari URI. [Lihat ini untuk lebih rincinya](https://en.wikipedia.org/wiki/Percent-encoding)

### Aksi yang tersedia

#### Aksi `open`

Deskripsi: Membuka vault Obsidian, dan memungkinkan untuk membuka berkas pada vault tersebut.

Parameter yang dimungkinkan:

- `vault` dapat menggunakan nama vault, atau ID vault.
	- Nama vault merupakan nama folder dari vault tersebut.
	- ID vault merupakan kode 16 karakter acak yang diberikan pada vault. ID ini berbeda pada setiap folder pada komputer Anda. Misalnya: `ef6ca3e3b524d22f`. Belum ada cara yang mudah untuk menemukan ID ini, salah satu yang diberikan di kemudian hari pada pengalih vault. Sekarang ini dapat ditemukan pada `%appdata%/obsidian/obsidian.json` untuk Windows. Untuk MacOS, ubah `%appdata%` dengan `~/Library/Application Support/`. Untuk Linux, ubah `%appdata%` dengan `~/.config/`.
- `file` merupakan nama berkas, atau alur dari akar vault ke berkas yang spesifik.
	- Untuk memutuskan berkas target, Obsidian menggunakan tautan resolusi sistem yang sama dengan `[[wikilink]]` biasa di dalam vault.
	- Jika ekstensi berkas merupakan `md`, ekstensi tersebut dapat dihilangkan.
- `path` merupakan alur absolut sistem berkas menuju berkas
	- Menggunakan parameter ini akan menimpa baik `vault` serta `file`.
	- Ini akan membuat aplikasi menelusuri vault secara spesifik yang mengandung alur berkas spesifik.
	- Keseluruhan alur mengganti parameter `file`.

Contoh:

- `obsidian://open?vault=vault%20saya`
	Ini akan membuka vault `vault saya`. Jika vault telah terbuka, akan memfokuskan jendela.

- `obsidian://open?vault=ef6ca3e3b524d22f`
	Ini akan membuka vault teridentifikasi dengan ID `ef6ca3e3b524d22f`.

- `obsidian://open?vault=vault%20saya&file=catatan%20saya`
	Ini akan membuka catatan `catatan saya` pada vault `vault saya`, diasumsikan bahwa `catatan saya` tersedia dan berkasnya ialah `catatan saya.md`.

- `obsidian://open?vault=vault%20saya&file=catatan%20saya.md`
	Ini juga akan membuka catatan `catatan saya` pada vault `vault saya`.

- `obsidian://open?vault=vault%20saya&file=alur%2Fke%2Fcatatan%20saya`
	Ini akan membuka catatan yang brelokasi pada `alur/ke/catatan saya` pada vault `vault saya`.

- `obsidian://open?path=%2Fhome%2Fuser%20vault%2Fsaya%2Falur%2Fke%2Fcatatan%20saya`
	Ini akan melihat untuk vault apa pun yang mengandung alur `/home/user/vault saya/alur/ke/catatan saya`. Lalu, keseluruhan alur akan meloloskan parameter `file`. Misalnya, jika vault tersedia pada `/home/user/vault saya`, lalu ini akan serupa dengan parameter `file` yang diatur ke `alur/ke/catatan saya`.

- `obsidian://open?path=D%3A%5CDocuments%5CVault%20saya%5CCatatan%20saya`
	Ini akan melihat untuk vault apa pun yang mengandung alur `D:\Documents\Vault saya\Catatan saya`. Lalu, keseluruhan alur akan meloloskan parameter `file`. Misalnya, jika vault tersedia pada `D:\Documents\My vault`, lalu ini akan serupa dengan parameter `file` yang diatur ke `Catatan saya`.

#### Aksi `search`

Deskripsi: Membuka panel penelusuran untuk vault, dan secara opsional menjalankan kueri penelusuran.

Parameter yang dimungkinkan:

- `vault` dapat menggunakan nama vault, atau ID vault. Sama seperti `open`.
- `query` (opsional) kueri penelusuran untuk dijalankan.

Contoh:

- `obsidian://search?vault=vault%20saya`
	Ini akan membuka vault `vault saya`, dan membuka panel penelusuran.

- `obsidian://search?vault=vault%20saya&query=MOC`
	Ini akan membuka vault `vault saya`, membuka panel penelusuran, dan menjalankan penelusuran untuk `MOC`.
	
#### Aksi `new`

Deskripsi: Membuat catatan baru pada vault, secara opsional dengan beberapa konten.

Parameter yang dimungkinkan:

- `vault` dapat menggunakan nama vault, atau ID vault. Sama seperti `open`.
- `name` nama berkas yang akan dibuat. Jika ini diisi, lokasi berkas akan dipilih berdasarkan pengaturan "Lokasi bawaan untuk catatan baru" Anda.
- `file` alur absolut dari vault, termasuk nama. Akan menimpa `name` jika diisi.
- `path` alur absolut secara global. Bekerja serupa dengan opsi `path` pada aksi `open`, yang mana akan menimpa  `vault` dan `file`.
- `content` (opsional) isi dari catatan
- `silent` (opsional) atur ini jika Anda tidak ingin membuka catatan baru
- `append` (opsional) menggabungkan ke berkas yang tersedia jika ada.
- `overwrite` (opsional) menimpa berkas yang tersedia jika ada, tetapi hanya jika `append` tidak diatur.
- `x-success` (opsional) lihat [[#x-callback-url]].

Contoh:

- `obsidian://new?vault=vault%20saya&name=catatan%20saya`
	Ini akan membuka `vault saya`, dan membuat catatan baru dengan nama `catatan saya`.
- `obsidian://new?vault=vault%20saya&path=alur%2Fke%2Fcatatan%20saya`
	Ini akan membuka `vault saya`, dan membuat catatan baru di `alur/ke/catatan saya`.
	
#### Aksi `hook-get-address`

Deskripsi: Endpoint untuk digunakan dengan [Hook](https://hookproductivity.com/). Gunakan: `obsidian://hook-get-address`

Jika `x-success` didefinisikan, API ini akan menggunakannya sebagai x-callback-url. Selain dari itu, ia akan menyalin tautan markdown dari catatan yang sedang difokuskan sekarang ke papan klip, sebagai Tautan `obsidian://open`.

Parameter yang dimungkinkan:

- `vault` (opsional) dapat menggunakan nama vault, atau ID vault. Jika tidak diberikan, vault terkini atau terakhir difokuskan akan digunakan.
- `x-success` (opsional) lihat [[#x-callback-url]].
- `x-error` (opsional) lihat [[#x-callback-url]].

## x-callback-url

Tersedia sejak v0.14.3.

Beberapa endpoint akan menerima parameter `x-success` dan `x-error` dari x-callback-url. Ketika tersedia, Obsidian akan memberikan hal-hal berikut ke callback `x-success`:

- `name` nama dari berkas, tanpa ekstensi berkas.
- `url` Tautan `obsidian://` untuk berkas ini.
- `file` (hanya desktop) Tautan `file://` untuk berkas ini.

Misalnya, jika kami menerima

`obsidian://.....x-success=myapp://x-callback-url`

Kemungkinan responnya

`myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Format singkat

Sebagai tambahan untuk format di atas, terdapat dua format "penyingkat" tambahan yang tersedia untuk membuka vault dan berkas:

- `obsidian://vault/vault saya/catatan saya` setara dengan `obsidian://open?vault=vault%20saya&file=catatan%20saya`
- `obsidian:///alur/absolut/ke/catatan saya` setara dengan `obsidian://open?path=%2Falur%2Fabsolut%2Fke%2Fcatatan%20saya`

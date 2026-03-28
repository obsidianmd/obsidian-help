---
permalink: uri
aliases:
  - Topik lanjutan/Menggunakan URI Obsidian
---
URI Obsidian adalah protokol URI kustom yang didukung oleh Obsidian yang memungkinkan Anda memicu berbagai tindakan, seperti membuka catatan atau membuat catatan. URI Obsidian memungkinkan otomatisasi dan alur kerja lintas aplikasi.

## Format URI

URI Obsidian menggunakan format berikut:

```
obsidian://action?param1=value&param2=value
```

Parameter `action` adalah tindakan yang ingin Anda lakukan. Tindakan yang tersedia meliputi:

- `open` untuk membuka catatan.
- `new` untuk membuat atau menambahkan ke catatan yang sudah ada.
- `daily` untuk membuat atau membuka catatan harian Anda.
- `unique` untuk membuat catatan unik baru.
- `search` untuk membuka pencarian.
- `choose-vault` untuk membuka pengelola brankas.

> [!warning] Encoding
> Pastikan nilai Anda di-encode URI dengan benar. Misalnya, karakter garis miring `/` harus di-encode sebagai `%2F` dan karakter spasi harus di-encode sebagai `%20`.
> 
> Ini sangat penting karena karakter "reserved" yang tidak di-encode dengan benar dapat merusak interpretasi URI. [Lihat di sini untuk detailnya](https://en.wikipedia.org/wiki/Percent-encoding).

## Buka catatan

Tindakan `open` membuka brankas Obsidian, atau membuka file di dalam brankas tersebut.

### Contoh

- `obsidian://open?vault=my%20vault`
  Ini membuka brankas `my vault`. Jika brankas sudah terbuka, fokus pada jendela tersebut.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Ini membuka brankas yang diidentifikasi oleh ID `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Ini membuka catatan `my note.md` di brankas `my vault`, dengan asumsi file tersebut ada.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Ini akan mencari brankas mana pun yang berisi path `/home/user/my vault/path/to/my note`. Kemudian, sisa path diteruskan ke parameter `file`. Misalnya, jika brankas ada di `/home/user/my vault`, maka ini setara dengan parameter `file` yang diatur ke `path/to/my note`.


> [!tip] Buka judul atau blok
> Dengan encoding URI yang benar, Anda dapat menavigasi ke judul atau blok dalam sebuah catatan. `Note%23Heading` akan menavigasi ke judul bernama "Heading", sedangkan `Note%23%5EBlock` akan menavigasi ke blok bernama "Block".

### Parameter

- `vault` bisa berupa nama brankas atau ID brankas[^1].
- `file` bisa berupa nama file, atau path dari root brankas ke file yang ditentukan. Jika ekstensi file adalah `md`, ekstensi tersebut dapat dihilangkan.
- `path` path absolut sistem file ke sebuah file.
  - Menggunakan parameter ini akan menimpa baik `vault` maupun `file`.
  - Ini akan menyebabkan aplikasi mencari brankas yang paling spesifik yang berisi path file yang ditentukan.
  - Kemudian sisa path menggantikan parameter `file`.
- `prepend` akan menambahkan ke bagian atas file dan mencoba menggabungkan properti.
- `append` akan menambahkan ke bagian akhir file dan juga mencoba menggabungkan properti.
- `paneType` (opsional) menentukan di mana catatan akan dibuka di UI.
  - jika tidak ada, tab terakhir yang aktif akan digantikan.
  - `paneType=tab` buka di tab baru.
  - `paneType=split` buka di grup tab baru.
  - `paneType=window` buka di jendela pop-out (Desktop saja).

## Buat catatan

Tindakan `new` membuat catatan baru di brankas, opsional dengan beberapa konten.

### Contoh

- `obsidian://new?vault=my%20vault&name=my%20note`
  Ini membuka brankas `my vault`, dan membuat catatan baru bernama `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Ini membuka brankas `my vault`, dan membuat catatan baru di `path/to/my note`.

### Parameter

- `vault` bisa berupa nama brankas, atau ID brankas[^1]. Sama seperti tindakan `open`.
- `name` nama file yang akan dibuat. Jika ini ditentukan, lokasi file akan dipilih berdasarkan preferensi "Lokasi bawaan untuk catatan baru" Anda.
- `file` path absolut brankas, termasuk namanya. Akan menimpa `name` jika ditentukan.
- `path` path absolut global. Bekerja mirip dengan opsi `path` pada tindakan `open`, yang akan menimpa baik `vault` maupun `file`.
- `paneType` (opsional) menentukan di mana catatan akan dibuka di UI. Sama seperti tindakan `open`.
- `content` (opsional) isi dari catatan.
- `clipboard` (opsional) gunakan isi papan klip alih-alih menentukan `content`.
- `silent` (opsional) sertakan parameter ini jika Anda tidak ingin membuka catatan baru.
- `append` (opsional) sertakan parameter ini untuk menambahkan ke file yang sudah ada jika ada.
- `overwrite` (opsional) timpa file yang sudah ada jika ada, tetapi hanya jika `append` tidak diatur.
- `x-success` (opsional) lihat [[#Gunakan parameter x-callback-url]].

## Buat atau buka catatan harian

Tindakan `daily` membuat atau membuka catatan harian Anda. Plugin [[Catatan harian]] harus diaktifkan.

### Contoh

- `obsidian://daily?vault=my%20vault`
  Ini membuka brankas `my vault`, dan membuat atau membuka catatan harian.

### Parameter

Tindakan `daily` menerima parameter yang sama seperti tindakan `new`.

## Catatan Unik

Tindakan `unique` membuat catatan unik baru di brankas. Plugin [[Pembuat catatan unik]] harus diaktifkan.

### Contoh

- `obsidian://unique?vault=my%20vault`
  Ini membuka brankas `my vault`, dan membuat catatan unik baru.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Ini membuka brankas `my vault`, dan membuat catatan unik baru dengan konten `Hello World`.

### Parameter

- `vault` bisa berupa nama brankas, atau ID brankas[^1]. Sama seperti tindakan `open`.
- `paneType` (opsional) menentukan di mana catatan akan dibuka di UI. Sama seperti tindakan `open`.
- `content` (opsional) isi dari catatan.
- `clipboard` (opsional) gunakan isi papan klip alih-alih menentukan `content`.
- `x-success` (opsional) lihat [[#Gunakan parameter x-callback-url]].

## Buka pencarian

Tindakan `search` membuka [[Cari]] di brankas yang ditentukan, dan secara opsional melakukan pencarian.

### Contoh

- `obsidian://search?vault=my%20vault`
  Ini membuka brankas `my vault`, dan membuka [[Cari]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Ini membuka brankas `my vault`, membuka [[Cari]], dan melakukan pencarian untuk `Obsidian`.

### Parameter

- `vault` bisa berupa nama brankas, atau ID brankas[^1]. Sama seperti tindakan `open`.
- `query` (opsional) Istilah pencarian yang akan dilakukan.

## Buka Pengelola Brankas

Tindakan `choose-vault` membuka [[Kelola brankas|pengelola brankas]].

### Contoh

- `obsidian://choose-vault`

## Integrasi dengan Hook

Tindakan URI Obsidian ini dimaksudkan untuk digunakan dengan [Hook](https://hookproductivity.com/).

### Contoh

`obsidian://hook-get-address`

### Parameter

- `vault` (opsional) bisa berupa nama brankas, atau ID brankas[^1]. Jika tidak disediakan, brankas yang sedang aktif atau terakhir difokuskan akan digunakan.
- `x-success` (opsional) lihat [[#Gunakan parameter x-callback-url]].
- `x-error` (opsional) lihat [[#Gunakan parameter x-callback-url]].

Jika `x-success` didefinisikan, API ini akan menggunakannya sebagai x-callback-url. Jika tidak, API akan menyalin tautan Markdown dari catatan yang sedang difokuskan ke papan klip, sebagai URL `obsidian://open`.

## Gunakan parameter x-callback-url

Beberapa endpoint akan menerima parameter x-callback-url `x-success` dan `x-error`. Ketika disediakan, Obsidian akan memberikan hal berikut ke callback `x-success`:

- `name` nama file, tanpa ekstensi file.
- `url` URI `obsidian://` untuk file ini.
- `file` (desktop saja) URL `file://` untuk file ini.

Misalnya, jika Obsidian menerima
`obsidian://.....x-success=myapp://x-callback-url`, responsnya akan berupa `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Format singkat

Selain format di atas, ada dua format "singkat" lagi yang tersedia untuk membuka brankas dan file:

1. `obsidian://vault/my vault/my note` setara dengan `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` setara dengan `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Pemecahan masalah

### Daftarkan URI Obsidian

Di Windows dan macOS, menjalankan aplikasi sekali sudah cukup untuk mendaftarkan protokol URI Obsidian di komputer Anda.

Di Linux, prosesnya jauh lebih kompleks:

1. Pastikan Anda membuat file `obsidian.desktop`. [Lihat di sini untuk detailnya](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Pastikan file desktop Anda menentukan field `Exec` sebagai `Exec=executable %u`. `%u` digunakan untuk meneruskan URI `obsidian://` ke aplikasi.
3. Jika Anda menggunakan penginstal AppImage, Anda mungkin harus mengekstraknya menggunakan `Obsidian-x.y.z.AppImage --appimage-extract`. Kemudian pastikan direktif `Exec` mengarah ke executable yang telah diekstrak.


[^1]: ID Brankas adalah kode acak 16 karakter yang ditetapkan ke brankas, misalnya `ef6ca3e3b524d22f`. ID ini unik per folder di komputer Anda. ID dapat ditemukan dengan membuka pengalih brankas dan mengklik "Salin ID brankas" di menu konteks untuk brankas yang diinginkan.

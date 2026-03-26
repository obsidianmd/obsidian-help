---
permalink: bases/syntax
publish: true
mobile: true
description: Halaman ini memberikan pengantar tentang sintaks Bases di Obsidian.
---
Ketika Anda [[Buat basis|membuat basis]] di Obsidian, basis tersebut disimpan sebagai file `.base`. Basis biasanya diedit menggunakan antarmuka aplikasi, tetapi sintaksisnya juga dapat diedit secara manual, dan disematkan dalam blok kode.

Sintaksis [[Pengenalan Basis|Basis]] mendefinisikan [[Tampilan]], filter, dan [[Rumus|rumus]]. Basis harus berupa YAML yang valid sesuai dengan skema yang didefinisikan di bawah ini.

## Contoh

Berikut adalah contoh file basis. Kita akan membahas setiap bagian secara detail.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filter

Secara bawaan, sebuah basis mencakup setiap file dalam brankas. Tidak ada `from` atau `source` seperti di SQL atau Dataview. Bagian `filters` memungkinkan Anda mendefinisikan kondisi untuk mempersempit kumpulan data.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Ada dua kesempatan untuk menerapkan filter:

1. Di tingkat `filters` global (ditunjukkan di atas) di mana filter berlaku untuk semua tampilan dalam basis.
2. Di tingkat `view` di mana filter hanya berlaku untuk tampilan tertentu.

Kedua bagian ini secara fungsional setara dan ketika dievaluasi untuk sebuah tampilan, keduanya akan digabungkan dengan `AND`.

Bagian `filters` berisi satu pernyataan filter sebagai string, atau objek filter yang didefinisikan secara rekursif. Objek filter dapat berisi salah satu dari `and`, `or`, atau `not`. Kunci-kunci ini adalah daftar heterogen dari objek filter lain atau pernyataan filter dalam string. Pernyataan filter adalah baris yang mengevaluasi ke truthy atau falsey ketika diterapkan pada sebuah catatan. Ini bisa berupa salah satu dari berikut:

- Perbandingan dasar menggunakan operator aritmatika standar.
- Sebuah fungsi. Berbagai [[Fungsi]] sudah tersedia secara bawaan, dan plugin dapat menambahkan fungsi tambahan.

Sintaksis dan fungsi yang tersedia untuk filter dan rumus adalah sama.

### Rumus

Bagian `formulas` mendefinisikan [[Rumus|properti rumus]] yang dapat ditampilkan di semua tampilan dalam file basis.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Properti rumus mendukung operator aritmatika dasar dan berbagai [[Fungsi]] bawaan. Di masa depan, plugin akan dapat menambahkan fungsi untuk digunakan dalam rumus.

Anda dapat mereferensikan properti dengan cara berbeda tergantung pada jenisnya:

- **Properti catatan** adalah properti yang didefinisikan dalam metadata awal catatan. Misalnya `note.price` atau `note["price"]`.  
  Jika tidak ada awalan yang ditentukan, properti diasumsikan sebagai properti `note`.
- **Properti file** mendeskripsikan file itu sendiri.  
  Misalnya `file.size` atau `file.ext`. Anda juga dapat mereferensikan objek file secara langsung, misalnya, `file.hasLink()`.
- **Properti rumus** adalah rumus lain dalam basis.  
  Contoh `formula.formatted_price`.

Sebuah rumus dapat menggunakan nilai dari properti rumus lain, selama tidak ada referensi melingkar.  

Properti rumus selalu disimpan sebagai string dalam YAML, tetapi **tipe data keluaran** aktualnya ditentukan oleh tipe data yang mendasari dan nilai kembalian dari fungsi yang digunakan.

Perhatikan penggunaan tanda kutip bersarang diperlukan untuk menyertakan literal teks dalam bidang YAML. Literal teks harus diapit oleh tanda kutip tunggal atau ganda.

### Properti

Bagian `properties` memungkinkan penyimpanan informasi konfigurasi tentang setiap properti. Tergantung pada masing-masing tampilan bagaimana menggunakan nilai konfigurasi ini. Misalnya, dalam tabel nama tampilan digunakan untuk header kolom.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Nama tampilan tidak digunakan dalam filter atau rumus.

### Ringkasan

Bagian `summaries` dapat digunakan untuk mendefinisikan rumus ringkasan kustom. Selain mendefinisikan rumus ringkasan di sini, ada beberapa rumus ringkasan bawaan yang tersedia.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

Dalam contoh ini, rumus `customAverage` sama dengan `Average` bawaan, kecuali nilainya dibulatkan ke jumlah desimal yang berbeda. Dalam rumus ringkasan, kata kunci `values` adalah daftar yang berisi semua nilai untuk properti tersebut di setiap catatan dalam kumpulan hasil. Rumus ringkasan harus mengembalikan satu `Value`.

Perhatikan bahwa bagian `summaries` ini berbeda dari bagian `summaries` dalam konfigurasi tampilan (dijelaskan di bawah) di mana rumus ringkasan ditetapkan ke properti tertentu.

#### Rumus Ringkasan Bawaan

| Nama      | Tipe Input | Deskripsi                                                     |
| --------- | ---------- | ------------------------------------------------------------- |
| Average   | Angka      | Rata-rata matematis dari semua angka dari nilai input.        |
| Min       | Angka      | Angka terkecil dari nilai input.                              |
| Max       | Angka      | Angka terbesar dari nilai input.                              |
| Sum       | Angka      | Jumlah total semua angka dalam input.                         |
| Range     | Angka      | Selisih antara `Max` dan `Min`.                               |
| Median    | Angka      | Median matematis dari semua angka dari nilai input.           |
| Stddev    | Angka      | Simpangan baku dari semua angka dari nilai input.             |
| Earliest  | Tanggal    | Tanggal paling awal dari nilai input.                         |
| Latest    | Tanggal    | Tanggal paling akhir dari nilai input.                        |
| Range     | Tanggal    | Selisih antara `Latest` dan `Earliest`.                       |
| Checked   | Boolean    | Jumlah nilai `true`.                                          |
| Unchecked | Boolean    | Jumlah nilai `false`.                                         |
| Empty     | Apa saja   | Jumlah nilai dalam input yang kosong.                         |
| Filled    | Apa saja   | Jumlah nilai dalam input yang tidak kosong.                   |
| Unique    | Apa saja   | Jumlah nilai unik dalam input.                                |

### Tampilan

Bagian `views` mendefinisikan bagaimana data dapat dirender. Setiap entri dalam daftar `views` mendefinisikan tampilan terpisah dari data yang sama, dan bisa ada sebanyak mungkin tampilan yang dibutuhkan.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type` memilih dari jenis tampilan bawaan dan yang ditambahkan plugin.
- `name` adalah nama tampilan, dan dapat digunakan untuk mendefinisikan tampilan bawaan.
- `filters` sama persis seperti yang dijelaskan di atas, tetapi hanya berlaku untuk tampilan tersebut.
- `groupBy` menentukan properti dan arah pengurutan. Nilai properti yang ditentukan untuk setiap baris digunakan untuk menempatkan baris ke dalam grup.
- `summaries` memetakan nama properti ke ringkasan bernama. Ringkasan melakukan agregasi pada properti di semua baris.

[[Tampilan]] dapat menambahkan data tambahan untuk menyimpan informasi yang diperlukan untuk mempertahankan status atau merender dengan benar, namun pembuat plugin harus berhati-hati untuk tidak menggunakan kunci yang sudah digunakan oleh plugin inti Basis. Sebagai contoh, tampilan tabel dapat menggunakan ini untuk membatasi jumlah baris atau untuk memilih kolom mana yang digunakan untuk mengurutkan baris dan arahnya. Jenis tampilan berbeda seperti peta dapat menggunakan ini untuk memetakan properti mana dalam catatan yang sesuai dengan lintang dan bujur dan properti mana yang harus ditampilkan sebagai judul pin.

Di masa depan, API akan memungkinkan tampilan untuk membaca dan menulis nilai-nilai ini, memungkinkan tampilan membangun antarmukanya sendiri untuk konfigurasi.

## Properti

Ada tiga jenis properti yang digunakan dalam basis:

1. **Properti catatan**, disimpan dalam metadata awal file Markdown.
2. **Properti file**, dapat diakses untuk semua jenis file.
3. **Properti rumus**, didefinisikan dalam file `.base` itu sendiri (lihat di atas).

### Properti catatan

[[Properti|Properti catatan]] hanya tersedia untuk file Markdown, dan disimpan dalam metadata awal YAML dari setiap catatan. Properti ini dapat diakses menggunakan format `note.author` atau cukup `author` sebagai singkatan.

### Properti file

Properti file merujuk pada file yang sedang diuji atau dievaluasi. Properti file tersedia untuk semua [[Format file yang diterima|jenis file]], termasuk lampiran.

Misalnya, filter `file.ext == "md"` akan bernilai benar untuk semua file Markdown dan salah untuk yang lainnya.

| Properti      | Tipe   | Deskripsi                                                     |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Daftar   | Daftar file tautan balik. Catatan: Properti ini membutuhkan banyak kinerja. Jika memungkinkan, balikkan pencarian dan gunakan `file.links`. Tidak otomatis memperbarui hasil ketika brankas diubah. |
| `file.ctime`  | Tanggal   | Waktu dibuat                                                  |
| `file.embeds` | Daftar   | Daftar semua sematan dalam catatan                            |
| `file.ext`    | String | Ekstensi file                                                 |
| `file.file`   | File   | Objek file, hanya dapat digunakan dalam fungsi tertentu       |
| `file.folder` | String | Alur folder file                                              |
| `file.links`  | Daftar   | Daftar semua tautan internal dalam catatan, termasuk metadata awal |
| `file.mtime`  | Tanggal   | Waktu modifikasi                                              |
| `file.name`   | String | Nama file                                                     |
| `file.path`   | String | Alur file                                                     |
| `file.properties`   | Objek | Semua properti pada file. Catatan: Tidak otomatis memperbarui hasil ketika brankas diubah. |
| `file.size`   | Angka | Ukuran file                                                   |
| `file.tags`   | Daftar   | Daftar semua tag dalam konten file dan metadata awal          |

### Mengakses properti dengan `this`

Gunakan objek `this` untuk mengakses properti file. Apa yang dirujuk `this` akan bergantung pada di mana basis ditampilkan.

Ketika basis dibuka di area konten utama, `this` menunjuk ke properti file basis itu sendiri. Misalnya, menggunakan `this.file.folder` mengembalikan alur folder tempat basis berada.

Ketika basis disematkan di file lain, `this` menunjuk ke properti file _penyemat_ (catatan atau Canvas yang berisi basis). Misalnya, menggunakan `this.file.name` mengembalikan nama file penyemat, bukan basis.

Ketika basis berada di bilah samping, `this` merujuk ke file aktif di area konten utama. Ini memungkinkan Anda membuat kueri berdasarkan file aktif. Misalnya, Anda dapat menggunakan `file.hasLink(this.file)` untuk mereplikasi panel tautan balik.

## Operator

### Operator aritmatika

Operator aritmatika melakukan operasi aritmatika pada angka. Misalnya, `radius * (2 * 3.14)`.

| Operator | Deskripsi   |
| -------- | ----------- |
| `+`      | tambah      |
| `-`      | kurang      |
| `*`      | kali        |
| `/`      | bagi        |
| `%`      | modulo      |
| `( )`    | tanda kurung |

### Aritmatika tanggal

Tanggal dapat dimodifikasi dengan menambahkan dan mengurangi durasi. Unit durasi menerima berbagai format:

| Unit                     | Durasi |
| ------------------------ | ------ |
| `y`, `year`, `years`     | tahun  |
| `M`, `month`, `months`   | bulan  |
| `d`, `day`, `days`       | hari   |
| `w`, `week`, `weeks`     | minggu |
| `h`, `hour`, `hours`     | jam    |
| `m`, `minute`, `minutes` | menit  |
| `s`, `second`, `seconds` | detik  |

Untuk memodifikasi atau menggeser objek Tanggal, gunakan operator `+` atau `-` dengan string durasi. Misalnya, `date + "1M"` menambahkan 1 bulan ke tanggal, sementara `date - "2h"` mengurangi 2 jam dari tanggal.

[[Fungsi|Fungsi]] global `today()` dapat digunakan untuk mendapatkan tanggal saat ini, dan `now()` dapat digunakan untuk mendapatkan tanggal saat ini beserta waktu.

- `now() + "1 day"` mengembalikan datetime tepat 24 jam dari waktu eksekusi.
- `file.mtime > now() - "1 week"` mengembalikan `true` jika file dimodifikasi dalam seminggu terakhir.
- `date("2024-12-01") + "1M" + "4h" + "3m"` mengembalikan objek Tanggal yang merepresentasikan `2025-01-01 04:03:00`.
- Kurangi dua tanggal untuk mendapatkan selisih milidetik antara keduanya, misalnya, `now() - file.ctime`.
- Untuk mendapatkan bagian tanggal dari Tanggal dengan waktu, gunakan `datetime.date()`.
- Untuk memformat objek Tanggal, gunakan fungsi `format()`, misalnya `datetime.format("YYYY-MM-DD")`.

### Operator perbandingan

Operator perbandingan dapat digunakan untuk membandingkan angka, atau objek Tanggal. Sama dengan dan tidak sama dengan dapat digunakan dengan jenis nilai apa pun, tidak hanya angka dan tanggal.

| Operator | Deskripsi                    |
| -------- | ---------------------------- |
| `==`     | sama dengan                  |
| `!=`     | tidak sama dengan            |
| `>`      | lebih besar dari             |
| `<`      | lebih kecil dari             |
| `>=`     | lebih besar dari atau sama dengan |
| `<=`     | lebih kecil dari atau sama dengan |

### Operator boolean

Operator boolean dapat digunakan untuk menggabungkan atau membalikkan nilai logis, menghasilkan nilai benar atau salah.

| Operator | Deskripsi   |
| -------- | ----------- |
| `!`      | NOT logis   |
| `&&`     | AND logis   |
| \|\|     | OR logis    |

## Fungsi

Lihat [[Fungsi|daftar fungsi]] yang dapat digunakan dalam rumus dan [[Tampilan|filter]].

## Tipe

Basis memiliki sistem tipe yang digunakan oleh rumus dan filter untuk menerapkan fungsi pada properti.

### String, angka, dan boolean

String, angka, dan boolean adalah nilai "primitif" yang tidak memerlukan fungsi untuk membuatnya.

- String diapit oleh tanda kutip tunggal atau ganda, misalnya `"message"`.
- Angka ditulis sebagai digit, dan secara opsional dapat diapit dalam tanda kurung untuk kejelasan. Misalnya, `1` atau `(2.5)`.
- Boolean ditulis sebagai `true` atau `false` tanpa tanda kutip.

### Tanggal dan durasi

Tanggal merepresentasikan tanggal tertentu, atau tanggal dan waktu tergantung pada fungsi yang digunakan untuk membuatnya, atau tipe yang telah ditetapkan ke [[Properti|properti]].

- Untuk membuat tanggal, gunakan fungsi `date`, misalnya `date("2025-01-01 12:00:00")`
- Untuk memodifikasi tanggal, tambahkan atau kurangi durasi, misalnya `now() + "1 hour"` atau `today() + "7d"`
- Bandingkan tanggal menggunakan operator perbandingan (misalnya `>` atau `<`) dan operator aritmatika (misalnya, `(now() + "1d") - now()` mengembalikan `86400000` milidetik.)
- Untuk mengekstrak bagian dari tanggal, gunakan bidang yang tersedia (`now().hour`), atau fungsi kemudahan (`now.time()`).
- Banyak [[Fungsi|bidang dan fungsi]] lainnya tersedia pada objek tanggal.

### Objek dan daftar

- Ubah elemen tunggal menjadi daftar menggunakan fungsi `list()`. Ini sangat berguna untuk properti yang mungkin berisi campuran daftar atau nilai tunggal.
- Akses elemen daftar menggunakan tanda kurung siku, dan indeks berbasis 0. Misalnya, `property[0]` mengembalikan elemen pertama dari daftar.
- Akses elemen objek menggunakan tanda kurung siku dan nama elemen atau notasi titik. Misalnya, `property.subprop` atau `property["subprop"]`.

### File dan tautan

[[Hubungkan catatan|Tautan wiki]] dalam [[Properti|properti metadata awal]] secara otomatis dikenali sebagai objek Tautan. Tautan akan dirender sebagai tautan yang dapat diklik dalam [[Tampilan|tampilan]].

- Untuk membuat tautan, gunakan [[Fungsi|fungsi]] global `link`, misalnya `link("filename")` atau `link("https://obsidian.md")`.
- Anda dapat membuat tautan dari string apa pun, misalnya, `link(file.ctime.date().toString())`.
- Untuk mengatur teks tampilan, masukkan string atau ikon opsional sebagai parameter kedua, misalnya `link("filename", "display")` atau `link("filename", icon("plus"))`.

Objek File dapat diubah menjadi tautan menggunakan `file.asLink()` dengan teks tampilan opsional.

Tautan dapat dibandingkan dengan `==` dan `!=`. Mereka setara selama menunjuk ke file yang sama, atau jika file tidak ada saat dicari, teks tautan mereka harus identik.

Tautan dapat dibandingkan dengan file seperti `file` atau `this`. Mereka akan setara jika tautan merujuk ke file tersebut. Misalnya, `author == this`.

Tautan juga dapat diperiksa dalam pencarian daftar, misalnya, `authors.contains(this)`.

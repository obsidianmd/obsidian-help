---
permalink: bases/functions
publish: true
mobile: true
description: Halaman ini merinci fungsi-fungsi yang digunakan dalam Obsidian Bases untuk memanipulasi data dari properti dalam filter dan formula.
---
Fungsi digunakan dalam [[Pengenalan Basis|Basis]] untuk memanipulasi data dari [[Properti|properti]] di [[Tampilan#Filter|filter]] dan [[Rumus|rumus]]. Lihat referensi [[Sintaksis Basis|sintaksis basis]] untuk mempelajari lebih lanjut tentang cara menggunakan fungsi.

Selain fungsi [[Fungsi#Global|Global]], sebagian besar fungsi bergantung pada tipe nilai yang ingin Anda modifikasi:

- [[Fungsi#Any|Any]]
- [[Fungsi#Date|Date]]
- [[Fungsi#String|String]]
- [[Fungsi#Number|Number]]
- [[Fungsi#List|List]]
- [[Fungsi#Link|Link]]
- [[Fungsi#File|File]]
- [[Fungsi#Object|Object]]
- [[Fungsi#Ekspresi reguler|Ekspresi reguler]]

## Global

Fungsi global digunakan tanpa tipe.

### `escapeHTML()`

`escapeHTML(html: string): string`

- Meng-escape karakter khusus dalam string agar aman untuk disertakan dalam HTML.

### `date()`

`date(date: string): date`

- `date(string): date` menguraikan string yang diberikan dan mengembalikan objek tanggal.
- String `date` harus dalam format `YYYY-MM-DD HH:mm:ss`.

### `duration()`

`duration(value: string): duration`

- Menguraikan string sebagai durasi. Lihat [[Sintaksis Basis#Aritmetika tanggal|bagian aritmetika tanggal]] untuk format string `value`.
- Durasi tidak perlu diuraikan secara eksplisit saat melakukan aritmetika tanggal (misalnya, `now() + '1d'`), tetapi perlu diuraikan saat melakukan aritmetika pada durasi (misalnya, `now() + (duration('1d') * 2)`).
- Saat melakukan aritmetika pada durasi dengan skalar, durasi harus berada di sisi kiri. Misalnya `duration('5h') * 2`, bukan `2 * duration('5h')`.

### `file()`

`file(path: string | file | url): file`

- Mengembalikan objek file untuk file atau path yang diberikan.
- Contoh: `file(link("[[namafile]]"))` atau `file("path ke file")`.

### `html()`

`html(html: string): html`

- Mengonversi string menjadi cuplikan kode yang dirender sebagai HTML.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` adalah kondisi yang akan dievaluasi.
- `trueResult` adalah output jika kondisi bernilai benar.
- `falseResult` adalah output opsional jika kondisi bernilai salah. Jika tidak diberikan, maka diasumsikan sebagai `null`.
- Mengembalikan `trueResult` jika `condition` bernilai benar, atau merupakan nilai truthy, atau `falseResult` sebaliknya.
- Contoh: `if(isModified, "Modified", "Unmodified")`

### `image()`

`image(path: string | file | url): image`

- Mengembalikan objek gambar yang akan merender gambar dalam tampilan.
- Contoh: `image(image-property)` atau `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Mengembalikan nilai yang akan dirender sebagai ikon dalam tampilan. Nama ikon harus sesuai dengan ikon Lucide yang didukung.
- Contoh: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Menguraikan string `path` dan mengembalikan objek Link yang dirender sebagai tautan ke path yang diberikan.
- Secara opsional berikan parameter `display` untuk mengubah teks yang ditampilkan tautan.

### `list()`

`list(element: any): List`

- Jika elemen yang diberikan adalah daftar, mengembalikannya tanpa modifikasi.
- Jika tidak, membungkus `element` yang diberikan dalam daftar, membuat daftar dengan satu elemen.
- Fungsi ini dapat berguna ketika properti berisi campuran string atau daftar di seluruh brankas.
- Contoh: `list("value")` mengembalikan `["value"]`.

### `max()`

`max(value1: number, value2: number...): number`

- Mengembalikan angka terbesar dari semua angka yang diberikan.

### `min()`

`min(value1: number, value2: number...): number`

- Mengembalikan angka terkecil dari semua angka yang diberikan.

### `now()`

`now(): date`

- `now()` mengembalikan objek tanggal yang merepresentasikan momen saat ini.

### `number()`

`number(input: any): number`

- Mencoba mengembalikan nilai yang diberikan sebagai angka.
- Objek tanggal akan dikembalikan sebagai milidetik sejak epoch unix.
- Boolean akan mengembalikan 1 atau 0.
- String akan diuraikan menjadi angka dan mengembalikan kesalahan jika hasilnya tidak valid.
- Contoh, `number("3.4")` mengembalikan `3.4`.

### `duration()`

`duration(value: string): duration`

- Menguraikan string sebagai durasi. Lihat [[Sintaksis Basis#Aritmetika tanggal|bagian aritmetika tanggal]] untuk format string `value`.
- Durasi tidak perlu diuraikan secara eksplisit saat melakukan aritmetika tanggal (misalnya, `now() + '1d'`), tetapi perlu diuraikan saat melakukan aritmetika pada durasi (misalnya, `now() + (duration('1d') * 2)`).
- Saat melakukan aritmetika pada durasi dengan skalar, durasi harus berada di sisi kiri. Misalnya `duration('5h') * 2`, bukan `2 * duration('5h')`.

### `today()`

`today(): date`

- `today()` mengembalikan objek tanggal yang merepresentasikan tanggal saat ini. Bagian waktu diatur ke nol.

### `random()`

`random(): number`

- `random()` mengembalikan angka acak antara 0 dan 1.
- Pembangkitan angka diperbarui setiap kali tampilan dimuat. Berpindah antar tampilan mengubah angka acak.

## Any

Fungsi yang dapat Anda gunakan dengan nilai apa pun. Ini termasuk string (misalnya `"hello"`), angka (misalnya `42`), daftar (misalnya `[1,2,3]`), objek, dan lainnya.

### `isTruthy()`

`any.isTruthy(): boolean`

- Mengembalikan nilai yang dikonversi menjadi boolean.
- Contoh: `1.isTruthy()` mengembalikan `true`.

### `isType()`

`any.isType(type: string): boolean`

- Mengembalikan true jika nilai bertipe yang diberikan.
- Contoh: `"example".isType("string")` dan `true.isType("boolean")` keduanya mengembalikan true.

### `toString()`

`any.toString(): string`

- Mengembalikan representasi string dari nilai apa pun.
- Contoh: `123.toString()` mengembalikan `"123"`.

## Date

Fungsi yang dapat Anda gunakan dengan tanggal dan waktu seperti `date("2025-05-27")`. Perbandingan tanggal dapat dilakukan menggunakan [[Sintaksis Basis#Aritmetika tanggal|aritmetika tanggal]].

### Field

Field berikut tersedia untuk tanggal:

| Field              | Tipe     | Deskripsi                      |
| ------------------ | -------- | ------------------------------ |
| `date.year`        | `number` | Tahun dari tanggal             |
| `date.month`       | `number` | Bulan dari tanggal (1–12)      |
| `date.day`         | `number` | Hari dalam bulan               |
| `date.hour`        | `number` | Jam (0–23)                     |
| `date.minute`      | `number` | Menit (0–59)                   |
| `date.second`      | `number` | Detik (0–59)                   |
| `date.millisecond` | `number` | Milidetik (0–999)              |

### `date()`

`date.date(): date`

- Mengembalikan objek tanggal dengan waktu dihapus.
- Contoh: `now().date().format("YYYY-MM-DD HH:mm:ss")` mengembalikan string seperti "2025-12-31 00:00:00"

### `format()`

`date.format(format: string): string`

- `format` adalah string format (misalnya, `"YYYY-MM-DD"`).
- Mengembalikan tanggal yang diformat sesuai dengan string format Moment.js.
- Contoh: `date.format("YYYY-MM-DD")` mengembalikan `"2025-05-27"`.

### `time()`

`date.time(): string`

- Mengembalikan waktu.
- Contoh: `now().time()` mengembalikan string seperti "23:59:59"

### `relative()`

`date.relative(): string`

- Mengembalikan perbandingan tanggal yang mudah dibaca terhadap waktu saat ini.
- Contoh: `file.mtime.relative()` mengembalikan nilai seperti `3 days ago`.

### `isEmpty()`

`date.isEmpty(): boolean`

- Mengembalikan false.

## String

Fungsi yang dapat Anda gunakan dengan urutan karakter seperti `"hello"`.

### Field

| Field           | Tipe     | Deskripsi                          |
| --------------- | -------- | ---------------------------------- |
| `string.length` | `number` | Jumlah karakter dalam string       |

### `contains()`

`string.contains(value: string): boolean`

- `value` adalah substring yang dicari.
- Mengembalikan true jika string mengandung `value`.
- Contoh: `"hello".contains("ell")` mengembalikan `true`.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` adalah satu atau lebih substring yang dicari.
- Mengembalikan true jika string mengandung semua `values`.
- Contoh: `"hello".containsAll("h", "e")` mengembalikan `true`.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` adalah satu atau lebih substring yang dicari.
- Mengembalikan true jika string mengandung setidaknya satu dari `values`.
- Contoh: `"hello".containsAny("x", "y", "e")` mengembalikan `true`.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` adalah string yang diperiksa di akhir.
- Mengembalikan true jika string ini diakhiri dengan `query`.
- Contoh: `"hello".endsWith("lo")` mengembalikan `true`.

### `isEmpty()`

`string.isEmpty(): boolean`

- Mengembalikan true jika string tidak memiliki karakter, atau tidak ada.
- Contoh: `"Hello world".isEmpty()` mengembalikan `false`.
- Contoh: `"".isEmpty()` mengembalikan `true`.

### `lower()`

`string.lower(): string`

- Mengembalikan string yang dikonversi ke huruf kecil.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` adalah nilai yang dicari dalam string target.
- `replacement` adalah nilai untuk menggantikan pola yang ditemukan.
- Jika `pattern` adalah string, semua kemunculan pola akan diganti.
- Jika `pattern` adalah Regexp, flag `g` menentukan apakah hanya kemunculan pertama atau semua kemunculan yang diganti.
- Contoh: `""a:b:c:d".replace(/:/, "-")` mengembalikan `"a-b,c,d"`, sedangkan `"a:b:c:d".replace(/:/g, "-")` mengembalikan `"a-b-c-d"`.

### `repeat()`

`string.repeat(count: number): string`

- `count` adalah jumlah kali string diulang.
- Contoh: `"123".repeat(2)` mengembalikan `"123123"`

### `reverse()`

`string.reverse(): string`

- Membalikkan string.
- Contoh: `"hello".reverse()` mengembalikan `"olleh"`.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` adalah indeks awal inklusif.
- `end` adalah indeks akhir eksklusif opsional.
- Mengembalikan substring dari `start` (inklusif) hingga `end` (eksklusif).
- Contoh: `"hello".slice(1, 4)` mengembalikan `"ell"`.
- Jika `end` dihilangkan, memotong hingga akhir string.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` adalah pembatas untuk memisahkan string.
- `n` adalah angka opsional. Jika diberikan, hasilnya akan memiliki `n` elemen pertama.
- Mengembalikan daftar substring.
- Contoh: `"a,b,c,d".split(",", 3)` atau `"a,b,c,d".split(/,/, 3)` mengembalikan `["a", "b", "c"]`.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` adalah string yang diperiksa di awal.
- Mengembalikan true jika string ini dimulai dengan `query`.
- Contoh: `"hello".startsWith("he")` mengembalikan `true`.

### `title()`

`string.title(): string`

- Mengonversi string ke huruf kapital di awal setiap kata (title case).
- Contoh: `"hello world".title()` mengembalikan `"Hello World"`.

### `trim()`

`string.trim(): string`

- Menghapus spasi dari kedua ujung string.
- Contoh: `"  hi  ".trim()` mengembalikan `"hi"`.

## Number

Fungsi yang dapat Anda gunakan dengan nilai numerik seperti `42`, `3.14`.

### `abs()`

`number.abs(): number`

- Mengembalikan nilai absolut dari angka.
- Contoh: `(-5).abs()` mengembalikan `5`.

### `ceil()`

`number.ceil(): number`

- Membulatkan angka ke atas ke bilangan bulat terdekat.
- Contoh: `(2.1).ceil()` mengembalikan `3`.

### `floor()`

`number.floor(): number`

- Membulatkan angka ke bawah ke bilangan bulat terdekat.
- Contoh: `(2.9).floor()` mengembalikan `2`.

### `isEmpty()`

`number.isEmpty(): boolean`

- Mengembalikan true jika angka tidak ada.
- Contoh: `5.isEmpty()` mengembalikan `false`.

### `round()`

`number.round(digits: number): number`

- Membulatkan angka ke bilangan bulat terdekat.
- Secara opsional, berikan parameter `digits` untuk membulatkan ke jumlah digit desimal tersebut.
- Contoh: `(2.5).round()` mengembalikan `3`, dan `(2.3333).round(2)` mengembalikan `2.33`.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` adalah jumlah tempat desimal.
- Mengembalikan string dengan angka dalam notasi titik tetap.
- Contoh: `(3.14159).toFixed(2)` mengembalikan `"3.14"`.

## List

Fungsi yang dapat Anda gunakan dengan daftar elemen yang terurut seperti `[1, 2, 3]`.

### Field

| Field         | Tipe     | Deskripsi                        |
| ------------- | -------- | -------------------------------- |
| `list.length` | `number` | Jumlah elemen dalam daftar       |

### `contains()`

`list.contains(value: any): boolean`

- `value` adalah elemen yang dicari.
- Mengembalikan true jika daftar mengandung `value`.
- Contoh: `[1,2,3].contains(2)` mengembalikan `true`.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` adalah satu atau lebih elemen yang dicari.
- Mengembalikan true jika daftar mengandung semua `values`.
- Contoh: `[1,2,3].containsAll(2,3)` mengembalikan `true`.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` adalah satu atau lebih elemen yang dicari.
- Mengembalikan true jika daftar mengandung setidaknya satu dari `values`.
- Contoh: `[1,2,3].containsAny(3,4)` mengembalikan `true`.

### `filter()`

`list.filter(value: Boolean): list`

- Menyaring elemen daftar ini dengan memanggil fungsi filter, yang menggunakan variabel `index` dan `value`, dan mengembalikan nilai boolean apakah elemen harus dipertahankan.
- `value` adalah nilai dari item dalam daftar.
- `index` adalah indeks dari nilai saat ini.
- Contoh: `[1,2,3,4].filter(value > 2)` mengembalikan `[3,4]`.

### `flat()`

`list.flat(): list`

- Meratakan daftar bersarang menjadi daftar tunggal.
- Contoh: `[1,[2,3]].flat()` mengembalikan `[1,2,3]`.

### `isEmpty()`

`list.isEmpty(): boolean`

- Mengembalikan true jika daftar tidak memiliki elemen.
- Contoh: `[1,2,3].isEmpty()` mengembalikan `false`.

### `join()`

`list.join(separator: string): string`

- `separator` adalah string yang disisipkan di antara elemen.
- Menggabungkan semua elemen daftar menjadi satu string.
- Contoh: `[1,2,3].join(",")` mengembalikan `"1,2,3"`.

### `map()`

`list.map(value: Any): list`

- Mengubah setiap elemen daftar ini dengan memanggil fungsi konversi, yang menggunakan variabel `index` dan `value`, dan mengembalikan nilai baru yang akan ditempatkan dalam daftar.
- `value` adalah nilai dari item dalam daftar.
- `index` adalah indeks dari nilai saat ini.
- Contoh: `[1,2,3,4].map(value + 1)` mengembalikan `[2,3,4,5]`.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Mereduksi elemen daftar ini menjadi satu nilai dengan menjalankan ekspresi untuk setiap elemen. Ekspresi dapat menggunakan variabel `index`, `value`, dan `acc` (akumulator), dan harus mengembalikan nilai akumulator berikutnya.
- `expression` dievaluasi untuk setiap elemen dalam daftar.
- `value` adalah nilai dari item saat ini dalam daftar.
- `index` adalah indeks dari item saat ini.
- `acc` adalah nilai yang diakumulasi sejauh ini.
- Contoh (jumlah): `[1,2,3].reduce(acc + value, 0)` mengembalikan `6`.
- Contoh (maksimum): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` mengembalikan angka terbesar, atau `null` jika tidak ada.

### `reverse()`

`list.reverse(): list`

- Membalikkan daftar di tempat.
- Contoh: `[1,2,3].reverse()` mengembalikan `[3,2,1]`.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` adalah indeks awal inklusif.
- `end` adalah indeks akhir eksklusif opsional.
- Mengembalikan salinan dangkal dari sebagian daftar dari `start` (inklusif) hingga `end` (eksklusif).
- Contoh: `[1,2,3,4].slice(1,3)` mengembalikan `[2,3]`.
- Jika `end` dihilangkan, memotong hingga akhir daftar.

### `sort()`

`list.sort(): list`

- Mengurutkan elemen daftar dari terkecil ke terbesar.
- Contoh: `[3, 1, 2].sort()` mengembalikan `[1, 2, 3]`.
- Contoh: `["c", "a", "b"].sort()` mengembalikan `["a", "b", "c"]`.

### `unique()`

`list.unique(): list`

- Menghapus elemen duplikat.
- Contoh: `[1,2,2,3].unique()` mengembalikan `[1,2,3]`.

## Link

Fungsi yang dapat Anda gunakan pada tautan. Tautan dapat dibuat dari file (`file.asLink()`) atau path (`link("path")`).

### `asFile()`

`link.asFile(): file`

- Mengembalikan objek file jika tautan merujuk ke file lokal yang valid.
- Contoh: `link("[[namafile]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- Mengembalikan apakah file yang direpresentasikan oleh `link` memiliki tautan ke `file`.

## File

Fungsi yang dapat Anda gunakan dengan file di brankas.

### Field

Field berikut tersedia untuk file:

| Field             | Tipe     | Deskripsi                                                   |
| ----------------- | -------- | ----------------------------------------------------------- |
| `file.name`       | `string` | Nama file ini.                                              |
| `file.basename`   | `string` | Nama file ini tanpa extension.                              |
| `file.path`       | `string` | Path lengkap ke file ini, relatif terhadap root brankas.    |
| `file.folder`     | `string` | Path lengkap ke folder induk.                               |
| `file.ext`        | `string` | Extension file untuk file ini.                              |
| `file.size`       | `number` | Ukuran file ini, dalam byte.                                |
| `file.properties` | `object` | Properti catatan untuk file ini.                            |
| `file.tags`       | `list`   | Tag untuk file ini. Termasuk tag inline.                    |
| `file.links`      | `list`   | Tautan internal dalam file ini.                             |
| `file.ctime`      | `date`   | Timestamp kapan file ini dibuat.                            |
| `file.mtime`      | `date`   | Timestamp kapan file ini terakhir dimodifikasi.             |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` teks tampilan opsional untuk tautan.
- Mengembalikan objek Link yang dirender sebagai tautan yang berfungsi.
- Contoh: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` adalah objek file lain atau path string yang diperiksa.
- Mengembalikan true jika `file` menautkan ke `otherFile`.
- Contoh: `file.hasLink(otherFile)` mengembalikan `true` jika ada tautan dari `file` ke `otherFile`.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Mengembalikan true jika catatan memiliki properti file yang diberikan.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` adalah satu atau lebih nama tag.
- Mengembalikan true jika file memiliki salah satu tag dalam `values`.
- Contoh: `file.hasTag("tag1", "tag2")` mengembalikan `true` jika file memiliki tag `#tag1` atau `#tag2`. Ini juga mencakup [[Tag#Tag bersarang|tag bersarang]], seperti `#tag1/a` atau `#tag2/b`.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` adalah nama folder yang diperiksa.
- Mengembalikan true jika file berada di folder yang ditentukan atau salah satu sub-foldernya.
- Contoh: `file.inFolder("notes")` mengembalikan `true`.

## Object

Fungsi yang dapat Anda gunakan dengan kumpulan pasangan kunci-nilai seperti `{"a": 1, "b": 2}`.

### `isEmpty()`

`object.isEmpty(): boolean`

- Mengembalikan true jika objek tidak memiliki properti sendiri.
- Contoh: `{}.isEmpty()` mengembalikan `true`.

### `keys()`

`object.keys(): list`

- Mengembalikan daftar yang berisi kunci-kunci dari objek.

### `values()`

`object.values(): list`

- Mengembalikan daftar yang berisi nilai-nilai dari objek.

## Ekspresi reguler

Fungsi yang dapat Anda gunakan dengan pola ekspresi reguler. Contoh: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` adalah string yang diuji.
- Mengembalikan true jika ekspresi reguler cocok dengan `value`.
- Contoh: `/abc/.matches("abcde")` mengembalikan `true`.

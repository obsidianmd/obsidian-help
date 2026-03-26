---
permalink: syntax
publish: true
mobile: true
description: 'Pelajari cara menerapkan pemformatan dasar pada catatan Anda di Obsidian, menggunakan Markdown.'
aliases:
  - Bagaimana/Memformat catatan Anda
---
Pelajari cara menerapkan format dasar pada catatan Anda, menggunakan [Markdown](https://daringfireball.net/projects/markdown/). Untuk sintaksis format yang lebih lanjut, lihat [[Sintaksis format lanjutan]].

## Paragraf

Untuk membuat paragraf dalam Markdown, gunakan **baris kosong** untuk memisahkan blok teks. Setiap blok teks yang dipisahkan oleh baris kosong diperlakukan sebagai paragraf yang berbeda.

```md
Ini adalah sebuah paragraf.

Ini adalah paragraf lainnya.
```

Ini adalah sebuah paragraf.

Ini adalah paragraf lainnya.

Baris kosong antara baris teks membuat paragraf terpisah. Ini adalah perilaku bawaan dalam Markdown.

> [!tip]- Beberapa spasi kosong
> Beberapa spasi kosong yang berdekatan di dalam dan di antara paragraf akan diciutkan menjadi satu spasi saat ditampilkan di [[Tampilan dan mode penyuntingan#Tampilan baca|tampilan baca]] atau di situs [[Pengantar Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Beberapa          spasi          berdekatan
> 
> 
> 
> dan beberapa baris baru di antara paragraf.
> ```
> 
> > Beberapa          spasi          berdekatan
> > 
> > 
> > 
> > dan beberapa baris baru di antara paragraf.
> 
> Jika Anda ingin mencegah spasi diciutkan atau menambahkan beberapa spasi kosong, Anda dapat menggunakan tag HTML `&nbsp;` (non-breaking space) atau `<br>` (pemisah baris).

### Pemisah baris

Secara bawaan di Obsidian, menekan `Enter` sekali akan membuat baris baru di catatan Anda, tetapi ini diperlakukan sebagai *kelanjutan* dari paragraf yang sama dalam output yang dirender, mengikuti perilaku Markdown pada umumnya. Untuk menyisipkan pemisah baris *di dalam* paragraf tanpa memulai paragraf baru, Anda dapat:

- Menambahkan **dua spasi** di akhir baris sebelum menekan `Enter`, atau
- Menggunakan pintasan `Shift+Enter` untuk langsung menyisipkan pemisah baris.

> [!question]- Mengapa menekan `Enter` beberapa kali tidak membuat lebih banyak pemisah baris di tampilan baca?
> Dalam Markdown, satu `Enter` diabaikan, dan beberapa `Enter` berturut-turut hanya menghasilkan satu paragraf baru. Perilaku ini sesuai dengan aturan soft wrap Markdown, di mana baris kosong tambahan tidak menghasilkan pemisah baris atau paragraf tambahan—semuanya diciutkan menjadi satu pemisah paragraf. Inilah cara Markdown menangani teks secara bawaan, memastikan paragraf mengalir secara alami tanpa pemisah yang tidak terduga.

Obsidian menyertakan pengaturan **[[Pengaturan#Pemisah baris ketat|Pemisah baris ketat]]**, yang membuat Obsidian mengikuti spesifikasi Markdown standar untuk pemisah baris.

Untuk mengaktifkan fitur ini:

1. Buka **[[Pengaturan]]**.
2. Pergi ke tab **Editor**.
3. Aktifkan **Pemisah Baris Ketat**.

Saat **Pemisah Baris Ketat** diaktifkan di Obsidian, pemisah baris memiliki tiga perilaku berbeda tergantung pada bagaimana baris dipisahkan:

**Enter tunggal tanpa spasi**: Satu `Enter` tanpa spasi di akhir akan menggabungkan dua baris terpisah menjadi satu baris saat dirender.

```md
baris satu
baris dua
```

Dirender sebagai:

baris satu baris dua

**Enter tunggal dengan dua atau lebih spasi di akhir**: Jika Anda menambahkan dua atau lebih spasi di akhir baris pertama sebelum menekan `Enter`, kedua baris tetap menjadi bagian dari paragraf yang sama, tetapi dipisahkan oleh pemisah baris (elemen HTML `<br>`). Kami akan menggunakan dua garis bawah untuk mewakili spasi dalam contoh ini.

```md
baris tiga__  
baris empat
```

Dirender sebagai:

baris tiga<br>
baris empat

**Enter ganda (dengan atau tanpa spasi di akhir)**: Menekan `Enter` dua kali (atau lebih) memisahkan baris menjadi dua paragraf berbeda (elemen HTML `<p>`), terlepas dari apakah Anda menambahkan spasi di akhir baris pertama.

```md
baris lima

baris enam
```

Dirender sebagai:

<p>baris lima</p>
<p>baris enam</p>

## Judul

Untuk membuat judul, tambahkan hingga enam simbol `#` sebelum teks judul Anda. Jumlah simbol `#` menentukan tingkat judul (seperti yang ditampilkan di [[Kerangka]]).

```md
# Ini adalah judul 1
## Ini adalah judul 2
### Ini adalah judul 3
#### Ini adalah judul 4
##### Ini adalah judul 5
###### Ini adalah judul 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Ini adalah judul 1</h1>
<h2>Ini adalah judul 2</h2>
<h3>Ini adalah judul 3</h3>
<h4>Ini adalah judul 4</h4>
<h5>Ini adalah judul 5</h5>
<h6>Ini adalah judul 6</h6>

## Tebal, miring, sorotan

Pemformatan teks juga dapat diterapkan menggunakan [[Pintasan penyuntingan]].

| Gaya | Sintaksis | Contoh | Hasil |
|-|-|-|-|
| Tebal | `** **` atau `__ __` | `**Teks tebal**` | **Teks tebal** |
| Miring | `* *` atau `_ _`  | `*Teks miring*` | *Teks miring* |
| Coret | `~~ ~~` |  `~~Teks dicoret~~` | ~~Teks dicoret~~ |
| Sorotan | `== ==` |  `==Teks disorot==` | ==Teks disorot== |
| Tebal dan miring bersarang | `** **` dan `_ _`  | `**Teks tebal dan _miring bersarang_**` | **Teks tebal dan _miring bersarang_** |
| Tebal dan miring | `*** ***` atau `___ ___` |  `***Teks tebal dan miring***` | ***Teks tebal dan miring*** |

Pemformatan dapat dipaksa ditampilkan sebagai teks biasa dengan menambahkan garis miring terbalik `\` di depannya.

\*\*Baris ini tidak akan menjadi tebal\*\*

```markdown
\*\*Baris ini tidak akan menjadi tebal\*\*
```

\**Baris ini akan menjadi miring dan menampilkan tanda bintang*\*

```markdown
\**Baris ini akan menjadi miring dan menampilkan tanda bintang*\*
```

## Tautan internal

Obsidian mendukung dua format untuk [[Tautan internal|tautan internal]] antar catatan:

- Tautan wiki: `[[Three laws of motion]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion.md)`

## Tautan eksternal

Jika Anda ingin menautkan ke URL eksternal, Anda dapat membuat tautan inline dengan mengapit teks tautan dalam kurung siku (`[ ]`), lalu URL dalam tanda kurung (`( )`).

```md
[Bantuan Obsidian](https://help.obsidian.md)
```

[Bantuan Obsidian](https://help.obsidian.md)

Anda juga dapat membuat tautan eksternal ke file di brankas lain, dengan menautkan ke [[Obsidian URI|Obsidian URI]].

```md
[Catatan](obsidian://open?vault=MainVault&file=Note.md)
```

### Meloloskan spasi kosong dalam tautan

Jika URL Anda mengandung spasi kosong, Anda harus meloloskannya dengan menggantinya menggunakan `%20`.

```md
[Catatan Saya](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Anda juga dapat meloloskan URL dengan mengapitnya menggunakan kurung sudut (`< >`).

```md
[Catatan Saya](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Gambar eksternal

Anda dapat menambahkan gambar dengan URL eksternal, dengan menambahkan simbol `!` sebelum [[#Tautan eksternal|tautan eksternal]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Anda dapat mengubah dimensi gambar, dengan menambahkan `|640x480` ke tujuan tautan, di mana 640 adalah lebar dan 480 adalah tinggi.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Jika Anda hanya menentukan lebar, gambar akan diskalakan sesuai rasio aspek aslinya. Contoh:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Tip
> Jika Anda ingin menambahkan gambar dari dalam brankas Anda, Anda juga dapat [[Sematkan file#Sematkan gambar di catatan|menyematkan gambar di catatan]].

## Kutipan

Anda dapat mengutip teks dengan menambahkan simbol `>` sebelum teks.

```md
> Manusia menghadapi masalah yang semakin kompleks dan mendesak, dan efektivitas mereka dalam menangani masalah ini adalah hal yang kritis bagi stabilitas dan kemajuan berkelanjutan masyarakat.

\- Doug Engelbart, 1961
```

> Manusia menghadapi masalah yang semakin kompleks dan mendesak, dan efektivitas mereka dalam menangani masalah ini adalah hal yang kritis bagi stabilitas dan kemajuan berkelanjutan masyarakat.

\- Doug Engelbart, 1961

> [!tip]- Tip
> Anda dapat mengubah kutipan menjadi [[Callout|callout]] dengan menambahkan `[!info]` sebagai baris pertama dalam kutipan.

## Daftar

Anda dapat membuat daftar tidak berurutan dengan menambahkan `-`, `*`, atau `+` sebelum teks.

```md
- Item daftar pertama
- Item daftar kedua
- Item daftar ketiga
```

- Item daftar pertama
- Item daftar kedua
- Item daftar ketiga

Untuk membuat daftar berurutan, awali setiap baris dengan angka diikuti simbol `.` atau `)`.

```md
1. Item daftar pertama
2. Item daftar kedua
3. Item daftar ketiga
```

1. Item daftar pertama
2. Item daftar kedua
3. Item daftar ketiga

```md
1) Item daftar pertama
2) Item daftar kedua
3) Item daftar ketiga
```

1) Item daftar pertama
2) Item daftar kedua
3) Item daftar ketiga

Anda dapat menggunakan `Shift+Enter` untuk menyisipkan [[#Pemisah baris|pemisah baris]] dalam daftar berurutan tanpa mengubah penomoran.

```md
1. Item daftar pertama
   
2. Item daftar kedua
3. Item daftar ketiga
   
4. Item daftar keempat
5. Item daftar kelima
6. Item daftar keenam
```

### Daftar tugas

Untuk membuat daftar tugas, awali setiap item daftar dengan tanda hubung dan spasi diikuti `[ ]`.

```md
- [x] Ini adalah tugas yang sudah selesai.
- [ ] Ini adalah tugas yang belum selesai.
```

- [x] Ini adalah tugas yang sudah selesai.
- [ ] Ini adalah tugas yang belum selesai.

Anda dapat menandai tugas di tampilan baca dengan memilih kotak centang.

> [!tip]- Tip
> Anda dapat menggunakan karakter apa pun di dalam tanda kurung untuk menandainya sebagai selesai.
>
> ```md
> - [x] Susu
> - [?] Telur
> - [-] Telur
> ```
>
> - [x] Susu
> - [?] Telur
> - [-] Telur

### Daftar bersarang

Anda dapat menyarangkan jenis daftar apa pun—berurutan, tidak berurutan, atau daftar tugas—di bawah jenis daftar apa pun lainnya.

Untuk membuat daftar bersarang, indentasikan satu atau lebih item daftar. Anda dapat mencampur jenis daftar dalam struktur bersarang:

```md
1. Item daftar pertama
   1. Item bersarang berurutan
2. Item daftar kedua
   - Item bersarang tidak berurutan
```

1. Item daftar pertama
   1. Item bersarang berurutan
2. Item daftar kedua
   - Item bersarang tidak berurutan

Demikian pula, Anda dapat membuat daftar tugas bersarang dengan mengindentasikan satu atau lebih item daftar:

```md
- [ ] Item tugas 1
	- [ ] Subtugas 1
- [ ] Item tugas 2
	- [ ] Subtugas 1
```

- [ ] Item tugas 1
	- [ ] Subtugas 1
- [ ] Item tugas 2
	- [ ] Subtugas 1

Gunakan `Tab` atau `Shift+Tab` untuk menambah atau mengurangi indentasi item daftar yang dipilih agar mudah mengaturnya.

## Garis horizontal

Anda dapat menggunakan tiga atau lebih tanda bintang `***`, tanda hubung `---`, atau garis bawah `___` pada barisnya sendiri untuk menambahkan garis horizontal. Anda juga dapat memisahkan simbol menggunakan spasi.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Kode

Anda dapat memformat kode baik secara inline di dalam kalimat, maupun dalam blok terpisah.

### Kode inline

Anda dapat memformat kode di dalam kalimat menggunakan backtick tunggal.

```md
Teks di dalam `backtick` pada sebuah baris akan diformat seperti kode.
```

Teks di dalam `backtick` pada sebuah baris akan diformat seperti kode.

Jika Anda ingin menempatkan backtick dalam blok kode inline, apitlah dengan backtick ganda seperti ini: inline ``kode dengan backtick ` di dalamnya``.

### Blok kode

Untuk memformat kode sebagai blok, apitlah dengan tiga backtick atau tiga tilde.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Anda juga dapat membuat blok kode dengan mengindentasikan teks menggunakan `Tab` atau 4 spasi kosong.
`````md
    cd ~/Desktop
`````

Anda dapat menambahkan penyorotan sintaksis ke blok kode, dengan menambahkan kode bahasa setelah set backtick pertama.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian menggunakan Prism untuk penyorotan sintaksis. Untuk informasi lebih lanjut, lihat [Bahasa yang didukung](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS dan tampilan pengeditan
> [[Tampilan dan mode penyuntingan#Mode sumber|Mode sumber]] dan [[Tampilan dan mode penyuntingan#Pratinjau langsung|Pratinjau langsung]] tidak mendukung PrismJS, dan mungkin merender penyorotan sintaksis secara berbeda.

#### Blok kode bersarang

Ketika Anda perlu menyertakan blok kode di dalam blok kode lain (misalnya, saat mendokumentasikan cara menggunakan blok kode), Anda dapat menggunakan lebih dari tiga backtick atau tilde untuk blok kode luar.

Untuk menyarangkan blok kode, gunakan empat atau lebih backtick (atau tilde) untuk blok luar, sementara blok dalam menggunakan tiga:
`````md
````md
Berikut cara membuat blok kode:
```js
console.log("Hello world")
```
````
`````

Anda juga dapat mencampur backtick dan tilde. Ini sangat berguna saat bekerja dengan kode yang menghasilkan blok kode lain:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

Prinsip utamanya adalah blok kode luar harus menggunakan **lebih banyak** karakter pagar (backtick atau tilde) daripada blok kode dalam mana pun, atau menggunakan jenis karakter pagar yang berbeda.

## Catatan kaki

Anda dapat menambahkan catatan kaki[^footnote] ke catatan Anda menggunakan sintaksis berikut:

[^footnote]: Ini adalah catatan kaki.

```md
Ini adalah catatan kaki sederhana[^1].

[^1]: Ini adalah teks yang dirujuk.
[^2]: Tambahkan 2 spasi di awal setiap baris baru.
  Ini memungkinkan Anda menulis catatan kaki yang mencakup beberapa baris.
[^note]: Catatan kaki bernama tetap ditampilkan sebagai angka, tetapi dapat memudahkan untuk mengidentifikasi dan menautkan referensi.
```

Anda juga dapat menyisipkan catatan kaki inline di dalam kalimat. Perhatikan bahwa tanda sisipan berada di luar tanda kurung.

```md
Anda juga dapat menggunakan catatan kaki inline. ^[Ini adalah catatan kaki inline.]
```

> [!note] Catatan
> Catatan kaki inline hanya berfungsi di tampilan baca, tidak di Pratinjau Langsung.

## Komentar

Anda dapat menambahkan komentar dengan mengapit teks menggunakan `%%`. Komentar hanya terlihat di tampilan pengeditan.

```md
Ini adalah komentar %%inline%%.

%%
Ini adalah komentar blok.

Komentar blok dapat mencakup beberapa baris.
%%
```

## Meloloskan Sintaksis Markdown

Dalam beberapa kasus, Anda mungkin perlu menampilkan karakter khusus dalam Markdown, seperti `*`, `_`, atau `#`, tanpa memicu pemformatannya. Untuk menampilkan karakter ini secara literal, tempatkan garis miring terbalik (`\`) di depannya.

> [!example] Karakter umum yang perlu diloloskan
> 
> - Tanda bintang: `\*`
> - Garis bawah: `\_`
> - Tagar: `\#`
> - Backtick: `` \` ``
> - Pipa (digunakan dalam tabel): `\|`
> - Tilde: `\~`

```md
\*Teks ini tidak akan menjadi miring\*.
```

\*Teks ini tidak akan menjadi miring\*.

Saat bekerja dengan daftar bernomor, Anda mungkin perlu meloloskan titik setelah angka untuk mencegah pemformatan daftar otomatis. Tempatkan garis miring terbalik (`\`) sebelum titik, **bukan** sebelum angka.

```md
1\. Ini tidak akan menjadi item daftar.
```

1\. Ini tidak akan menjadi item daftar.

## Pelajari lebih lanjut

Untuk mempelajari sintaksis format yang lebih lanjut, seperti tabel, diagram, dan ekspresi matematika, lihat [[Sintaksis format lanjutan]].

Untuk mempelajari lebih lanjut tentang cara Obsidian mengurai Markdown, lihat [[Obsidian Flavored Markdown]].

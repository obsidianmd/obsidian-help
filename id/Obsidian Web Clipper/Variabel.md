---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Template|Templat Web Clipper]] dapat menggunakan variabel untuk mengisi data secara otomatis dari halaman ke dalam templat. Variabel dapat digunakan di **nama catatan**, **lokasi catatan**, **properti**, dan **konten catatan**. Variabel juga dapat dimodifikasi menggunakan [[Filter|filter]].

Gunakan ikon `...` di ekstensi [[Pengantar Obsidian Web Clipper|Web Clipper]] untuk mengakses variabel halaman saat ini yang dapat digunakan dalam templat. Ada lima jenis variabel yang dapat Anda gunakan:

- [[Variabel#Variabel preset|Variabel preset]]
- [[Variabel#Variabel prompt|Variabel prompt]]
- [[Variabel#Variabel meta|Variabel meta]]
- [[Variabel#Variabel selektor|Variabel selektor]]
- [[Variabel#Variabel Schema.org|Variabel Schema.org]]

## Variabel preset

Variabel preset dihasilkan secara otomatis berdasarkan konten halaman. Variabel ini biasanya berfungsi untuk sebagian besar situs web.

Variabel konten utama adalah `{{content}}`, yang berisi konten artikel, atau [[Penyorot|sorotan]], atau seleksi jika ada teks yang dipilih pada halaman. Perlu diperhatikan bahwa `{{content}}` mencoba mengekstrak konten utama halaman, yang mungkin tidak selalu sesuai keinginan Anda. Dalam hal ini, Anda dapat menggunakan variabel preset lain atau variabel selektor untuk mengekstrak konten yang Anda butuhkan.

| Variabel            | Deskripsi                                                                              |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Penulis halaman                                                                        |
| `{{content}}`       | Konten artikel, [[Penyorot\|sorotan]], atau seleksi, dalam format Markdown    |
| `{{contentHtml}}`   | Konten artikel, [[Penyorot\|sorotan]], atau seleksi, dalam format HTML        |
| `{{date}}`          | Tanggal saat ini, dapat diformat menggunakan filter `date`                             |
| `{{description}}`   | Deskripsi atau kutipan                                                                 |
| `{{domain}}`        | Domain                                                                                 |
| `{{favicon}}`       | URL favicon                                                                            |
| `{{fullHtml}}`      | HTML yang belum diproses untuk konten halaman penuh                                    |
| `{{highlights}}`    | [[Penyorot\|Sorotan]] dengan teks dan stempel waktu                          |
| `{{image}}`         | URL gambar berbagi sosial                                                              |
| `{{published}}`     | Tanggal terbit, dapat diformat menggunakan filter `date`                               |
| `{{selection}}`     | Seleksi dalam format Markdown                                                          |
| `{{selectionHtml}}` | Seleksi dalam format HTML                                                              |
| `{{site}}`          | Nama situs atau penerbit                                                               |
| `{{title}}`         | Judul halaman                                                                          |
| `{{time}}`          | Tanggal dan waktu saat ini                                                             |
| `{{url}}`           | URL saat ini                                                                           |
| `{{words}}`         | Jumlah kata                                                                            |

## Variabel prompt

Variabel prompt memanfaatkan model bahasa untuk mengekstrak dan memodifikasi data menggunakan bahasa alami. Variabel prompt memerlukan [[Interpreter|Interpreter]] untuk diaktifkan dan dikonfigurasi.

Variabel prompt menggunakan sintaksis `{{"ringkasan halaman"}}`. Tanda kutip ganda di sekitar prompt penting dan membedakan prompt dari variabel preset. Respons prompt dapat diproses lanjutan dengan [[Filter|filter]], misalnya `{{"ringkasan halaman"|blockquote}}`.

### Kapan menggunakan variabel prompt

Variabel prompt memiliki keuntungan sangat fleksibel dan mudah ditulis, namun ada beberapa pertukaran: lebih lambat dijalankan, dan mungkin memiliki pertimbangan biaya dan privasi tergantung pada [[Interpreter#Model|penyedia]] yang Anda pilih.

Berbeda dengan jenis variabel lain, variabel prompt perlu diproses oleh model bahasa eksternal, sehingga variabel ini baru diganti setelah [[Interpreter|Interpreter]] dijalankan.

Sebaiknya *jangan* menggunakan variabel prompt jika data yang ingin Anda ekstrak memiliki format konsisten yang dapat diekstrak dengan jenis variabel lain.

Di sisi lain, variabel prompt dapat berguna jika data yang ingin Anda ekstrak memiliki format yang *tidak konsisten* di berbagai situs web. Misalnya, Anda dapat membuat [[Obsidian Web Clipper/Template|templat]] untuk menyimpan buku yang tidak tergantung pada situs buku tertentu. Variabel prompt seperti `{{"penulis buku"}}` akan berfungsi di situs buku mana pun, sedangkan variabel selektor biasanya hanya berfungsi untuk satu situs.

### Contoh

Prompt dapat menggunakan hampir semua kueri bahasa alami. Tergantung pada model yang Anda gunakan, prompt dapat mengkueri atau menerjemahkan data lintas bahasa.

- `{{"ringkasan tiga poin, diterjemahkan ke bahasa Prancis"}}` untuk mengekstrak poin-poin tentang halaman, dan menerjemahkannya ke bahasa Prancis.
- `{{"un resumé de la page en trois points"}}` untuk mengekstrak tiga poin menggunakan prompt dalam bahasa Prancis.

Prompt dapat mengubah konten halaman menjadi JSON yang dapat dimanipulasi dengan [[Filter|filter]]. Misalnya:

```
{{"return a JSON object for each tweet, that includes the author, tweet_text, date in YYYY-MM-DD format, and images array (if there are any)"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Variabel meta

Variabel meta memungkinkan Anda mengekstrak data dari [elemen meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) di halaman, termasuk data [Open Graph](https://ogp.me/) yang digunakan untuk mengisi pratinjau berbagi sosial.

- `{{meta:name}}` mengembalikan konten tag meta name dengan nama yang diberikan, misalnya `{{meta:name:description}}` untuk tag meta `description`.
- `{{meta:property}}` mengembalikan konten tag meta property dengan properti yang diberikan, misalnya `{{meta:property:og:title}}` untuk tag meta `og:title`.

## Variabel selektor

Variabel selektor memungkinkan Anda mengekstrak konten teks dari elemen pada halaman menggunakan [selektor CSS](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators).

Sintaksisnya adalah `{{selector:cssSelector?attribute}}`, di mana `?attribute` bersifat opsional. Jika tidak ada atribut yang ditentukan, konten teks elemen akan dikembalikan. Anda juga dapat menggunakan `{{selectorHtml:cssSelector}}` untuk mendapatkan konten HTML dari elemen. Variabel selektor cenderung bekerja paling baik pada situs web tertentu atau kumpulan situs web yang memiliki struktur HTML konsisten.

- `{{selector:h1}}` mengembalikan konten teks dari elemen `h1` pada halaman.
- `{{selector:.author}}` mengembalikan konten teks dari elemen `.author` pada halaman.
- `{{selector:img.hero?src}}` mengembalikan atribut `src` dari gambar dengan kelas `hero`.
- `{{selector:a.main-link?href}}` mengembalikan atribut `href` dari tag anchor dengan kelas `main-link`.
- `{{selectorHtml:body|markdown}}` mengembalikan seluruh HTML dari elemen `body`, dikonversi ke Markdown menggunakan [[Filter#Pemrosesan HTML|filter]] `markdown`.
- Selektor CSS bertingkat dan kombinator didukung jika Anda membutuhkan spesifisitas lebih.
- Jika beberapa elemen cocok dengan selektor, array akan dikembalikan, yang dapat Anda proses dengan [[Filter#Array dan objek|filter array dan objek]] seperti `join` atau `map`.

Variabel selektor juga dapat digunakan langsung dalam [[Logika|logika templat]]:

- Dalam perulangan: `{% for comment in selector:.comment %}...{% endfor %}`
- Dalam kondisional: `{% if selector:.premium-badge %}...{% endif %}`
- Dalam penetapan variabel: `{% set items = selector:.list-item %}`

## Variabel Schema.org

Variabel schema memungkinkan Anda mengekstrak data dari [schema.org](https://schema.org/) JSON-LD pada halaman. Data Schema.org juga dapat digunakan untuk secara otomatis [[Obsidian Web Clipper/Template#Pencocokan Schema.org|memicu templat]].

- `{{schema:@Type:key}}` mengembalikan nilai key dari schema.
- `{{schema:@Type:parent.child}}` mengembalikan nilai properti bertingkat.
- `{{schema:@Type:arrayKey}}` mengembalikan item pertama dalam array.
- `{{schema:@Type:arrayKey[index].property}}` mengembalikan item pada indeks tertentu dalam array.
- `{{schema:@Type:arrayKey[*].property}}` mengembalikan properti tertentu dari semua item dalam array.

Anda juga dapat menggunakan notasi singkat tanpa menentukan jenis schema:

- `{{schema:author}}` akan mencocokkan properti `author` pertama yang ditemukan dalam jenis schema apa pun.
- `{{schema:name}}` akan mencocokkan properti `name` pertama yang ditemukan dalam jenis schema apa pun.

Notasi singkat ini sangat berguna ketika Anda tidak mengetahui atau tidak mempermasalahkan jenis schema tertentu, tetapi Anda tahu nama properti yang Anda cari.

Properti bertingkat dan akses array juga berfungsi, baik dengan maupun tanpa `@Type` schema yang ditentukan:

- `{{schema:author.name}}` akan menemukan properti `author` pertama dan kemudian mengakses sub-properti `name`-nya.
- `{{schema:author[0].name}}` akan mengakses `name` dari penulis pertama dalam array penulis.
- `{{schema:author[*].name}}` akan mengembalikan array dari semua nama penulis.

---
permalink: web-clipper/filters
---
Filter memungkinkan Anda memodifikasi [[Variabel|variabel]] di [[Obsidian Web Clipper/Template|templat Web Clipper]]. Filter diterapkan pada variabel menggunakan sintaksis `{{variable|filter}}`.

- Filter bekerja untuk semua jenis [[Variabel|variabel]] termasuk variabel `prompt`, `meta`, `selector`, dan `schema`.
- Filter dapat dirangkai, misalnya `{{variable|filter1|filter2}}`, dan diterapkan sesuai urutan penambahannya.

## Tanggal

Mengonversi dan memodifikasi tanggal.

### `date`

Mengonversi tanggal ke format yang ditentukan, [lihat referensi](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` mengonversi tanggal saat ini ke "YYYY-MM-DD".
- Gunakan `date:("outputFormat", "inputFormat")` untuk menentukan format input, misalnya `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` memproses "12/01/2024" dan mengembalikan `"2024-12-01"`.

### `date_modify`

Memodifikasi tanggal dengan menambahkan atau mengurangi jumlah waktu tertentu, [lihat referensi](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` mengembalikan `"2025-12-01"`
- `"2024-12-01"|date_modify:"- 2 months"` mengembalikan `"2024-10-01"`

### `duration`

Mengonversi string durasi ISO 8601 atau detik menjadi string waktu yang diformat. Menggunakan token: `HH` (jam dengan padding), `H` (jam), `mm` (menit dengan padding), `m` (menit), `ss` (detik dengan padding), `s` (detik).

- `"PT1H30M"|duration:"HH:mm:ss"` mengembalikan `"01:30:00"`.
- `"3665"|duration:"H:mm:ss"` mengembalikan `"1:01:05"`.
- Mengatur `duration` tanpa parameter menggunakan `HH:mm:ss` untuk di atas 1 jam, `mm:ss` untuk di bawah 1 jam.
- Mendukung string durasi ISO 8601 (misalnya, `PT6702S`, `PT1H30M`) dan detik biasa.

## Konversi teks dan kapitalisasi

Mengonversi string teks dari satu format ke format lainnya.

### `camel`

Mengonversi teks ke `camelCase`.

### `capitalize`

Mengkapitalisasi karakter pertama dari nilai dan mengonversi sisanya menjadi huruf kecil, misalnya `"hELLO wORLD"|capitalize` mengembalikan `"Hello world"`.

### `decode_uri`

Mendekode string yang dikodekan URI, misalnya `"%E4%BD%A0%E5%A5%BD"|decode_uri` mengembalikan `"你好"`.

- `"hello%20world"|decode_uri` mengembalikan `"hello world"`.
- Mengembalikan string asli jika dekode gagal (misalnya urutan URI yang salah format).

### `encode_uri`

Mengkodekan teks untuk digunakan dalam URL, termasuk karakter yang direservasi seperti `/`, `?`, dan `&`.

- `"hello world/page"|encode_uri` mengembalikan `hello%20world%2Fpage`.

### `indent`

Menambahkan indentasi spasi pada setiap baris yang tidak kosong. Secara bawaan menggunakan dua spasi.

- `indent:4` menambahkan indentasi empat spasi pada setiap baris.
- `indent:0` membiarkan teks tidak berubah.

### `kebab`

Mengonversi teks ke `kebab-case`.

### `lower`

Mengonversi teks ke `huruf kecil`.

### `pascal`

Mengonversi teks ke `PascalCase`.

### `replace`

Mengganti kemunculan teks yang ditentukan:

- Penggantian sederhana: `"hello!"|replace:",":""` menghapus semua koma.
- Penggantian ganda: `"hello world"|replace:("e":"a","o":"0")` mengembalikan `"hall0 w0rld"`.
- Penggantian diterapkan sesuai urutan yang ditentukan.
- Untuk menghapus teks yang ditentukan, gunakan `""` sebagai nilai pengganti.
- Karakter khusus termasuk `: | { } ( ) ' "` harus di-escape dengan backslash saat digunakan dalam istilah pencarian, misalnya `\:` untuk mencari titik dua literal.

Ekspresi reguler didukung menggunakan sintaksis regex JavaScript:

- Ganti semua vokal: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Tidak peka huruf besar-kecil: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Regex ganda: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Flag yang tersedia: `g` (global), `i` (tidak peka huruf besar-kecil), `m` (multibaris), `s` (dotAll), `u` (unicode), `y` (sticky).

### `safe_name`

Mengonversi teks menjadi nama file yang aman.

- Secara bawaan, `safe_name` menerapkan aturan sanitasi paling konservatif.
- Aturan khusus OS dapat diterapkan dengan `safe_name:os` di mana `os` bisa berupa `windows`, `mac`, atau `linux` untuk hanya menerapkan aturan untuk sistem operasi tersebut.

### `snake`

Mengonversi teks ke `snake_case`.

### `title`

Mengonversi teks ke `Huruf Kapital Setiap Kata`, misalnya `"hello world"|title` mengembalikan `"Hello World"`.

### `trim`

Menghapus spasi kosong dari kedua ujung string.

- `"  hello world  "|trim` mengembalikan `"hello world"`.

### `truncate`

Mempersingkat teks ke sejumlah karakter dan mengakhirinya dengan `…`. Sufiks dihitung terhadap batas.

- `"A concise introduction"|truncate:10` mengembalikan `A concise…`.
- `"A concise introduction"|truncate:(12, "...")` mengembalikan `A concise...`.
- `"A concise introduction"|truncate:(9, "")` mengembalikan `A concise`.

### `truncatewords`

Mempersingkat teks ke sejumlah kata dan menambahkan `…`.

- `"A concise introduction to Knap"|truncatewords:3` mengembalikan `A concise introduction…`.
- `"A concise introduction to Knap"|truncatewords:(3, "")` mengembalikan `A concise introduction`.

### `unescape`

Mengonversi tanda kutip yang di-escape dan urutan baris baru menjadi karakter literal.

- `"Line 1\\nLine 2"|unescape` mengembalikan teks dalam dua baris.
- `'He said \\"hello\\"'|unescape` mengembalikan `He said "hello"`.

### `uncamel`

Mengonversi camelCase atau PascalCase menjadi kata-kata yang dipisahkan spasi, yang dapat Anda format lebih lanjut dengan filter lain seperti `title` atau `capitalize`.

- `"camelCase"|uncamel` mengembalikan `"camel case"`.
- `"PascalCase"|uncamel` mengembalikan `"pascal case"`.

### `upper`

Mengonversi nilai menjadi huruf besar, misalnya `"hello world"|upper` mengembalikan `"HELLO WORLD"`.

## Pemformatan teks

Menerapkan [[Sintaksis format dasar]] dan [[Sintaksis format lanjutan]] pada teks.

### `blockquote`

Menambahkan prefiks kutipan Markdown (`> `) ke setiap baris input.

### `bold`

Membungkus teks dengan penanda tebal.

- `"Important"|bold` mengembalikan `**Important**`.
- `"Important"|bold:_` mengembalikan `__Important__`.

### `callout`

Membuat [[Callout|callout]] dengan parameter opsional: `{{variable|callout:("type", "title", foldState)}}`

- `type` adalah jenis callout, dan secara bawaan adalah "info"
- `title` adalah judul callout, dan secara bawaan kosong
- `foldState` adalah boolean untuk mengatur status lipatan (true untuk dilipat, false untuk tidak dilipat, null untuk tidak dapat dilipat)

### `code`

Memformat teks sebagai kode inline. Teks multibaris, atau parameter bahasa, membuat blok kode berpagar sebagai gantinya.

- `"const answer = 42"|code` mengembalikan `` `const answer = 42` ``.
- `"const answer = 42"|code:"typescript"` mengembalikan blok kode yang ditandai sebagai `typescript`.

### `code_block`

Selalu membuat blok kode berpagar, dengan bahasa opsional, misalnya `code_block:"typescript"`.

### `comment`

Membungkus teks dengan penanda [[Sintaksis format dasar#Komentar|komentar]].

- `"Hidden note"|comment` mengembalikan `%%Hidden note%%`.

### `embed`

Mengonversi string, array, atau objek menjadi [[Sematkan file|sematan]].

- Untuk string: `"diagram.png"|embed` mengembalikan `![[diagram.png]]`.
- Untuk string dengan alias: `"Project Atlas"|embed:"Preview"` mengembalikan `![[Project Atlas|Preview]]`.
- Untuk objek: `{"one.md": "One", "two.md": "Two"}|embed` mengembalikan sematan dengan kunci sebagai file dan nilai sebagai alias.

### `escape_md`

Menambahkan backslash sebelum tanda baca Markdown sehingga ditampilkan sebagai teks biasa.

- `"# Draft *title*"|escape_md` mengembalikan `\# Draft \*title\*`.

### `footnote`

Mengonversi array atau objek menjadi daftar catatan kaki Markdown.

- Untuk array: `["first item","second item"]|footnote` mengembalikan: `[^1]: first item` dst.
- Untuk objek: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` mengembalikan: `[^first-note]: Content 1` dst.

### `fragment_link`

Mengonversi string dan array menjadi tautan [fragmen teks](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments). Secara bawaan menggunakan "link" untuk teks tautan.

- `highlights|fragment_link` mengembalikan `Highlight content [link](text-fragment-url)`
- `highlights|fragment_link:"custom title"` mengembalikan `Highlight content [custom title](text-fragment-url)`

### `h1` hingga `h6`

Mengubah setiap baris yang tidak kosong menjadi judul dengan level tersebut.

- `"Introduction"|h2` mengembalikan `## Introduction`.

### `hard_break`

Menambahkan dua spasi sebelum setiap jeda baris tunggal, sehingga jeda baris ditampilkan dalam tampilan baca. Baris kosong antar paragraf tetap seperti semula.

### `highlight`

Membungkus teks dengan penanda sorotan.

- `"Remember this"|highlight` mengembalikan `==Remember this==`.
- Tambahkan [[Sintaksis format dasar#Warna sorotan|warna sorotan]] dengan `red`, `orange`, `yellow`, `green`, `blue`, atau `purple`, misalnya `"Remember this"|highlight:blue` mengembalikan `==🔵Remember this==`.

### `hr`

Menambahkan garis horizontal (`---`) setelah teks, dipisahkan oleh baris kosong.

- `"Section end"|hr` menambahkan garis setelah teks.
- `hr:before` menambahkannya sebelum teks, dan `hr:both` menambahkannya di kedua sisi.

### `image`

Mengonversi string, array, atau objek menjadi sintaksis gambar Markdown.

- Untuk string: `"image.jpg"|image:"alt text"` mengembalikan `![alt text](image.jpg)`.
- Untuk array: `["image1.jpg","image2.jpg"]|image:"alt text"` mengembalikan array string gambar Markdown dengan teks alt yang sama untuk semua gambar.
- Untuk objek: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` mengembalikan string gambar Markdown dengan teks alt dari kunci objek.

### `italic`

Membungkus teks dengan penanda miring.

- `"Emphasized"|italic` mengembalikan `*Emphasized*`.
- `"Emphasized"|italic:_` mengembalikan `_Emphasized_`.

### `link`

Mengonversi string, array, atau objek menjadi sintaksis tautan Markdown (jangan disamakan dengan [[Filter#`wikilink`|wikilink]]).

- Untuk string: `"url"|link:"author"` mengembalikan `[author](url)`.
- Untuk array: `["url1","url2"]|link:"author"` mengembalikan array tautan Markdown dengan teks yang sama untuk semua tautan.
- Untuk objek: `{"url1": "Author 1", "url2": "Author 2"}|link` mengembalikan tautan Markdown dengan teks yang cocok dengan kunci objek.

### `list`

Mengonversi array menjadi daftar Markdown.

- `list` untuk mengonversi menjadi daftar berpoin.
- `list:task` untuk mengonversi menjadi daftar tugas.
- `list:numbered` untuk mengonversi menjadi daftar bernomor.
- `list:numbered-task` untuk mengonversi menjadi daftar tugas bernomor.

### `math`

Memformat teks sebagai [[Sintaksis format lanjutan#Matematika|matematika]] inline. Teks multibaris menjadi blok matematika.

- `"x^2 + y^2"|math` mengembalikan `$x^2 + y^2$`.

### `math_block`

Selalu membuat blok matematika, dengan `$$` pada baris sebelum dan sesudah teks.

### `strike`

Membungkus teks dengan penanda coret.

- `"Removed"|strike` mengembalikan `~~Removed~~`.

### `table`

Mengonversi array atau array objek menjadi [[Sintaksis format lanjutan#Tabel|tabel Markdown]]:

- Untuk array objek, menggunakan kunci objek sebagai header.
- Untuk array dari array, membuat tabel dengan setiap array bersarang sebagai baris.
- Untuk array sederhana, membuat tabel satu kolom dengan "Value" sebagai header.
- Header kolom kustom dapat ditentukan menggunakan: `table:("Column 1", "Column 2", "Column 3")`. Saat digunakan dengan array sederhana, secara otomatis membagi data menjadi baris berdasarkan jumlah kolom yang ditentukan.

### `table_pretty`

Bekerja seperti [[Filter#`table`|table]], dan menambahkan padding pada kolom ke lebar yang sama sehingga tabel terlihat rapi dalam mode Sumber.

### `wikilink`

Mengonversi string, array, atau objek menjadi sintaksis [[Hubungkan catatan|tautan wiki]] Obsidian.

- Untuk string: `"page"|wikilink` mengembalikan `[[page]]`.
- Untuk string dengan alias: `"page"|wikilink:"alias"` mengembalikan `[[page|alias]]`.
- Untuk array: `["page1","page2"]|wikilink` mengembalikan array tautan wiki tanpa alias.
- Untuk array dengan alias: `["page1","page2"]|wikilink:"alias"` mengembalikan array tautan wiki dengan alias yang sama untuk semua tautan.
- Untuk objek: `{"page1": "alias1", "page2": "alias2"}|wikilink` mengembalikan tautan wiki dengan kunci sebagai nama halaman dan nilai sebagai alias.

## Angka

`calc`, `round`, dan `length` mengembalikan angka, mempertahankan tipenya dalam filter dan penetapan variabel selanjutnya. `number_format` mengembalikan teks.

### `calc`

Melakukan operasi aritmatika dasar pada angka.

- Mendukung operator: `+`, `-`, `*`, `/`, `**` (atau `^`) untuk eksponensial.
- Contoh: `5|calc:"+10"` mengembalikan `15`.
- Contoh: `2|calc:"**3"` mengembalikan `8` (2 pangkat tiga).
- Mengembalikan input asli jika kosong, bukan angka, atau perhitungan menghasilkan hasil yang tidak terbatas.

### `length`

Mengembalikan panjang string, array, atau jumlah kunci dalam objek.

- Untuk string: `"hello"|length` mengembalikan `5`.
- Untuk array: `["a","b","c"]|length` mengembalikan `3`.
- Array dengan satu item tetap dihitung sebagai satu: `[42]|length` mengembalikan `1`.
- Untuk objek: `{"a":1,"b":2}|length` mengembalikan `2`.

### `number_format`

Memformat angka dengan jumlah desimal yang ditentukan dan pemisah desimal serta ribuan opsional.

- `1234.567|number_format:2` mengembalikan `"1,234.57"`.
- `1234.567|number_format:(2,",",".")` mengembalikan `"1.234,57"`.
- Array dan objek diformat secara rekursif.

### `round`

Membulatkan angka ke bilangan bulat terdekat atau ke jumlah desimal yang ditentukan.

- Tanpa parameter: `3.7|round` mengembalikan `4`.
- Dengan jumlah desimal yang ditentukan: `3.14159|round:2` mengembalikan `3.14`.
- Array dan objek mempertahankan strukturnya, dengan nilai numerik dibulatkan secara rekursif. String numerik menjadi angka, misalnya `["1.234","2.345"]|round:2` mengembalikan `[1.23,2.35]`.
- Input yang tidak valid seperti `"42abc"` dipertahankan alih-alih dikonversi menjadi angka.

## Pemrosesan HTML

Memproses konten HTML dan mengonversi HTML ke Markdown. Perhatikan bahwa [[Variabel|variabel]] input Anda harus berisi konten HTML, misalnya menggunakan `{{fullHtml}}`, `{{contentHtml}}` atau variabel `{{selectorHtml:}}`.

### `html_to_json`

Mengonversi HTML menjadi JSON terstruktur yang berisi tag, atribut, dan anak dari setiap elemen. Node teks menggunakan format `{"type":"text","content":"..."}`. Ini dapat digabungkan dengan filter seperti `map`, `object`, dan `template` untuk membentuk ulang HTML yang diekstrak.

### `markdown`

Mengonversi string menjadi string berformat [[Obsidian Flavored Markdown]].

- Berguna saat digabungkan dengan variabel yang mengembalikan HTML seperti `{{contentHtml}}`, `{{fullHtml}}`, dan variabel selektor seperti `{{selectorHtml:cssSelector}}`.

### `remove_attr`

Menghapus hanya atribut HTML yang ditentukan dari tag.

- Contoh: `'<div class="test" id="example">Content</div>'|remove_attr:"class"` mengembalikan `<div id="example">Content</div>`.
- Beberapa atribut: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Menghapus elemen HTML yang ditentukan beserta kontennya dari string.

- Mendukung nama tag, kelas, atau id, misalnya `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- Untuk menghapus hanya tag atau atribut HTML tanpa menghapus konten, gunakan filter `strip_tags` atau `strip_attr`.

### `remove_tags`

Menghapus hanya tag HTML yang ditentukan. Mempertahankan konten tag.

- Contoh: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` mengembalikan `"<p>Hello world!</p>"`.
- Beberapa tag: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

Mengganti tag HTML, mempertahankan konten dan atribut tag.

- `{{fullHtml|replace_tags:"strong":"h2"}}` mengganti semua tag `<strong>` dengan `<h2>`.

### `strip_attr`

Menghapus **semua** atribut HTML dari string.

- Gunakan `strip_attr:("class, id")` untuk mempertahankan atribut tertentu.
- Contoh: `'<div class="test" id="example">Content</div>'|strip_attr:("class")` mengembalikan `<div class="test">Content</div>`.

### `strip_md`

Menghapus **semua** pemformatan Markdown dan mengembalikan string teks biasa, misalnya mengubah `**text**` menjadi `text`.

- Mengubah teks berformat menjadi teks biasa tanpa format, termasuk tebal, miring, sorotan, judul, kode, kutipan blok, tabel, daftar tugas, dan tautan wiki.
- Menghapus sepenuhnya tabel, catatan kaki, gambar, dan elemen HTML.
- `stripmd` adalah alias.

### `strip_tags`

Menghapus **semua** tag HTML dari string. Konten di dalam tag dipertahankan.

- Gunakan `strip_tags:("p,strong,em")` untuk mempertahankan tag tertentu.
- Contoh: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` mengembalikan `Hello <b>world</b>!`.

## Array dan objek

Memproses array dan objek.

### `compact`

Menghapus nilai `null` dan string kosong dari array dan objek. Mempertahankan `0` dan `false`.

- `[null,"","one",0,false,"two"]|compact` mengembalikan `["one",0,false,"two"]`.

### `first`

Mengembalikan elemen pertama dari array, mempertahankan tipenya. Objek dan array bersarang ditampilkan sebagai JSON.

- `["a","b","c"]|first` mengembalikan `"a"`.
- Array kosong mengembalikan `null`, yang ditampilkan sebagai teks kosong.
- Jika input bukan array, mengembalikan input tanpa perubahan.

### `join`

Menggabungkan elemen array menjadi string.

- `["a","b","c"]|join` mengembalikan `"a,b,c"`.
- Pemisah kustom dapat ditentukan: `["a","b","c"]|join:" "` mengembalikan `"a b c"`. Gunakan `join:"\n"` untuk memisahkan elemen dengan jeda baris.
- Berguna setelah `split` atau `slice`: `"a,b,c,d"|split:","|slice:1,3|join:" "` mengembalikan `"b c"`.

### `last`

Mengembalikan elemen terakhir dari array, mempertahankan tipenya. Objek dan array bersarang ditampilkan sebagai JSON.

- `["a","b","c"]|last` mengembalikan `"c"`.
- Array kosong mengembalikan `null`, yang ditampilkan sebagai teks kosong.
- Jika input bukan array, mengembalikan input tanpa perubahan.

### `map`

Menerapkan transformasi ke setiap elemen array menggunakan sintaksis `map:item => item.property` atau `map:item => item.nested.property` untuk properti bersarang.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` mengembalikan `["obsidian", "amethyst"]`.
- Gunakan tanda kurung untuk literal objek dan ekspresi kompleks: `map:item => ({key: value})`, misalnya: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` mengembalikan `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]`.

Literal string juga didukung, misalnya `["rock", "pop"]|map:item => "genres/${item}"` mengembalikan `["genres/rock", "genres/pop"]`.

Gabungkan `map` dengan filter `template`, misalnya `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Untuk map literal string, gunakan `${str}` dalam templat, misalnya `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Catatan: Filter bawaan tidak dapat digunakan di dalam `map`. Ini berarti bahwa, misalnya, memangkas setiap nilai array tidak dapat dilakukan dengan `map`.

### `merge`

Menambahkan nilai baru ke array.

- Untuk array: `["a","b"]|merge:("c","d")` mengembalikan `["a","b","c","d"]`.
- Nilai tunggal: `["a","b"]|merge:"c"` mengembalikan `["a","b","c"]`.
- Jika input bukan array, membuat array baru: `"a"|merge:("b","c")` mengembalikan `["a","b","c"]`.
- Nilai dapat dikutip: `["a"]|merge:('b,"c,d",e')` mengembalikan `["a","b","c,d","e"]`.

### `nth`

Mempertahankan item ke-n dalam array menggunakan sintaksis nth-child gaya CSS dan pola grup. Semua posisi berbasis 1 (item pertama adalah posisi 1).

- `array|nth:3` hanya mempertahankan elemen ke-3.
- `array|nth:3n` mempertahankan setiap elemen ke-3 (3, 6, 9, dst.).
- `array|nth:n+3` mempertahankan elemen ke-3 dan semua elemen setelahnya.

Hasilnya tetap berupa array untuk filter koleksi selanjutnya. Jika berisi satu nilai primitif, nilai tersebut ditampilkan tanpa tanda kurung array dan diteruskan langsung ke filter teks, misalnya `[1,2]|nth:2` menampilkan `2`.

Sintaksis pola grup untuk struktur berulang:

- `array|nth:1,2,3:5` mempertahankan posisi 1, 2, 3 dari setiap grup 5 item. Contoh: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` mengembalikan `[1,2,3,6,7,8]`.

### `object`

Memanipulasi data objek:

- `object:array` mengonversi objek menjadi array pasangan kunci-nilai.
- `object:keys` mengembalikan array kunci objek.
- `object:values` mengembalikan array nilai objek.
- Contoh: `{"a":1,"b":2}|object:array` mengembalikan `[["a",1],["b",2]]`.

### `parse_json`

Memproses teks JSON menjadi nilai bertipe. Gunakan ini sebelum filter koleksi atau serialisasi YAML ketika variabel berisi teks JSON, misalnya `'[1,2]'|parse_json|yaml:flow` mengembalikan `[1,2]`.

### `reverse`

Membalikkan string, array, dan urutan entri objek.

- `"abc"|reverse` mengembalikan `"cba"`.
- `["a","b","c"]|reverse` mengembalikan `["c","b","a"]`.

### `slice`

Mengekstrak bagian dari string atau array.

- Untuk string: `"hello"|slice:1,4` mengembalikan `"ell"`.
- Untuk array: `["a","b","c","d"]|slice:1,3` mengembalikan `["b","c"]`.
- Jika hanya satu parameter yang diberikan, memotong dari indeks tersebut hingga akhir: `"hello"|slice:2` mengembalikan `"llo"`.
- Indeks negatif dihitung dari akhir: `"hello"|slice:-3` mengembalikan `"llo"`.
- Parameter kedua bersifat eksklusif: `"hello"|slice:1,4` mencakup karakter pada indeks 1, 2, dan 3.
- Menggunakan parameter kedua negatif mengecualikan elemen dari akhir: `"hello"|slice:0,-2` mengembalikan `"hel"`.

### `sort`

Mengurutkan array dalam urutan naik. Angka diurutkan berdasarkan nilai.

- `[10,2,1]|sort` mengembalikan `[1,2,10]`.
- `["a","c","b"]|sort:"desc"` mengembalikan `["c","b","a"]`.
- Untuk array objek, berikan properti: `[{"name":"Lin"},{"name":"Ada"}]|sort:"name"` mengembalikan `[{"name":"Ada"},{"name":"Lin"}]`. Gunakan `sort:("name", "desc")` untuk membalikkannya. Item tanpa properti tersebut ditempatkan di akhir.

### `split`

Membagi string menjadi array substring.

- `"a,b,c"|split:","` mengembalikan `["a","b","c"]`.
- `"hello world"|split:" "` mengembalikan `["hello","world"]`.
- Jika tidak ada pemisah yang diberikan, memisahkan pada setiap karakter: `"hello"|split` mengembalikan `["h","e","l","l","o"]`.
- Ekspresi reguler dapat digunakan sebagai pemisah: `"a1b2c3"|split:[0-9]` mengembalikan `["a","b","c",""]`. Item terakhir kosong karena string diakhiri dengan pemisah.

### `sum`

Menjumlahkan angka dalam array. Teks yang bukan angka dilewati, dan array kosong mengembalikan `0`.

- `[10,"2.5","","none"]|sum` mengembalikan `12.5`.
- Untuk array objek, berikan properti: `[{"amount":10},{"amount":"2.5"}]|sum:"amount"` mengembalikan `12.5`.

### `template`

Menerapkan string templat ke objek atau array objek, menggunakan sintaksis `object|template:"Template with ${variable}"`.

- Akses properti bersarang: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` mengembalikan `"Obsidian"`.
- Untuk objek: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` mengembalikan `"obsidian has a hardness of 5"`.
- Untuk array: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` mengembalikan daftar terformat.

Bekerja dengan literal string dari `map` menggunakan `${str}`:

- Contoh: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` mengembalikan daftar terformat.

### `unique`

Menghapus nilai duplikat dari array dan objek.

- Untuk array primitif: `[1,2,2,3,3]|unique` mengembalikan `[1,2,3]`.
- Untuk array objek: `[{"a":1},{"b":2},{"a":1}]|unique` mengembalikan `[{"a":1},{"b":2}]`.
- Untuk objek menghapus properti dengan nilai duplikat, mempertahankan kunci dari kemunculan terakhir.
- Untuk string mengembalikan input tanpa perubahan.

### `where`

Mempertahankan item array yang propertinya cocok dengan nilai. Tipe juga harus cocok, jadi angka `1` tidak cocok dengan teks `"1"`.

- `[{"title":"One","published":true},{"title":"Two","published":false}]|where:("published", true)` mengembalikan `[{"title":"One","published":true}]`.
- Gunakan jalur bertitik untuk properti bersarang, misalnya `where:("author.name", "Ada")`.

## YAML

### `yaml`

Memformat nilai sebagai YAML. String selalu dikutip, termasuk string seperti `"null"`, `"true"`, dan `"123"`. Nilai null, boolean, dan angka yang sebenarnya tetap tidak dikutip.

- Array dan objek menggunakan gaya blok secara bawaan. Gunakan `yaml:flow` untuk koleksi inline yang ringkas.
- Gunakan `parse_json` terlebih dahulu untuk membuat serial teks JSON sebagai data terstruktur alih-alih string yang dikutip.

### `yaml_property`

Memformat properti YAML bernama, termasuk indentasi untuk array dan objek. String dan nilai bertipe mengikuti aturan yang sama seperti `yaml`.

- `"42.567"|round:2|yaml_property:"price"` mengembalikan `price: 42.57`.

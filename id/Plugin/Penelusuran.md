![[Search.png]]

Penelusuran merupakan fitur yang kuat, dan berpotensi untuk membingungkan. Pada kebanyakan kasus, jika Anda hanya menuliskan apa yang Anda ingin cari, pasti akan bekerja. Tetapi penelusuran memiliki banyak kemampuan untuk menyempitkan ketepatan penelusuran yang Anda inginkan.

## Saran Cepat

### Memulai penelusuran

Anda dapat memulai penelusuran dengan menekan `Ctrl-Shift-F` atau `Cmd-Shift-F`. Anda juga dapat mengkustomisasi pintasan ini pada Pengaturan => Pintasan. Ketika penelusuran dimulai, fokus akan secara otomatis ditempatkan pada bilah penelusuran sehingga Anda dapat mulai mengetikkan penelusuran Anda.

### Mencari teks terpilih

Setelah Anda memilih teks, Anda dapat mencarinya dengan cukup memulai Penelusuran seperti di atas.

## Riwayat Penelusuran

Obsidian akan mengingan kueri penelusuran yang paling sering Anda gunakan.

Kueri tersebut akan ditampilkan ketika kueri Anda sedang kosong. Anda dapat menekan pada salah satunya untuk mencarinya kembali, memudahkan Anda untuk menjalankan kembali kueri yang sebelumnya.

Untuk membersihkan riwayat penelusuran, cukup menekan tombol "X".

## Pengaturan Penelusuran

Terdapat banyak peralih yang tersedia ketika melakukan Penelusuran:

- `Sesuaikan huruf` mengaktifkan kecocokan dengan kepekaan huruf besar/kecil, tetapi perhatikan bahwa hal tersebut dapat ditimpa berdasarkan penelusuran menggunakan operator  `match-case:` dan `ignore-case:` yang dijelaskan di atas.
- `Jelaskan istilah penelusuran` akan menampilkan apa yang sebenarnya kueri penelusuran lakukan secara sederhana.
- `Ciutkan hasil` akan mengalihkan antara hanya menampilkan nama catatan yang sama atau menampilkan baris mana kesamaan muncul. Ini memanjangkan hasil yang dapat diatur untuk setiap catatan dengan menekan pada tanda segitiga di sebelah nama berkas.
- `Tampilkan lebih banyak konteks` akan melebarkan tampilan dari yang serupa untuk memperlihatkan lebih banyak teks di sekitarnya.
- `Ubah urutan sortir` mengurutkan hasil bedasarkan banyak urutan serupa seperti bagaimana berkas diurutkan pada [[Penjelajah berkas]].

## Menyalin hasil penelusuran

Untuk mengambil penelusuran Anda ke daftar secara cepat dan mudah, gunakan opsi "salin hasil penelusuran".

Anda dapat mengubah bagaimana Anda ingin menampilkan alurnya, yang mana gaya tautan akan digunakan (wikilink ataupun tautan Markdown), serta bagaimana Anda ingin daftar Anda ditampilkan.

## Menyematkan hasil penelusuran

Anda dapat menyematkan hasil penelusuran pada catatan.

Misalnya, jika Anda menuliskan:

<pre><code>```query
sematan OR penelusuran
```</code></pre>

Anda dapat melihat tampilan pencarian tersemat berikut (catatan: tidak akan bekerja pada [[Introduction to Obsidian Publish|Obsidian Publish]] sejak 2020/01/18):

```query
sematan OR penelusuran
```

## Sintaks penelusuran

### Mengkombinasikan sub kueri

Ketika membangun kueri penelusuran, perlu diingan bahwa menekan "Jelaskan istilah penelusuran" akan memberikan penjelasan mengenai apa yang sedang ditelusuri, yang mana dapat sangat berguna ketika menggunakan pencarian yang kompleks.

- Kata-kata dalam kueri pencarian yang dipisahkan dengan spasi akan dicari pada setiap  catatan secara mandiri. Misalnya `foo bar` akan mencari catatan yang mengandung `foo` dan `bar`  di mana pun.
- `"String dengan petikan"` dapat digunakan untuk mencari banyak kata yang berurutan yang dipisahkan oleh spasi, atau dengan kata lain, sebuah kalimat. Jadi penelusuran untuk `"foo bar"` dengan tanda petik akan mencari catatan yang mengandung kalimat tersebut. Anda dapat menggunakan garis miring terbalik `\"` untuk membebaskan tanda petik jika Anda ingin melakukan penelusuran untuk kalimat yang mengandung tanda petik tersebut. Dan `\\` akan melakukan hal yang sama untuk garis miring terbalik.
- Operasi boolean dapat digunakan. Gunakan `OR` untuk mencocokkan satu atau lebih. Gunakan `-` untuk mentiadakan kueri. Karakter spasi digunakan untuk boolean "and".
	- Misalnya: `foo OR bar` akan mencari semua catatan yang mengandung antara kedua kata tersebut, mereka tidaklah harus memilika keduanya pada catatan yang sama. `foo -bar` akan mencari semua catatan yang mengandung `foo`, tetapi tidak mengandung `bar`.
- Tanda kurung dapat digunakan untuk operasi kelompok boolean. Misalnya `((a OR b) (c OR d))`. Ini akan berguna ketika membangun penelusuran yang kompleks untuk memastikan semuanya terjadi pada urutan yang Anda inginkan.
- Regular expressions (regex) sekarang dapat digunakan pada penelusuran. Gunakan garis miring untuk menunjukkan sebuah regular expression. Misalnua: `/[a-z]{3}/`. Obsidian menerima regular ecpressions dari JavaScript. Anda dapat mempelajari lebih lanjut mengenai hal tersebut [di sini](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions).

### Operator penelusuran

Terdapat beberapa operator khusus. Beberapa operator memperbolehkan kueri bersarang menggunakan tanda kurung, misalnya: `file:("to be" OR -"2B")`. Anda dapat menggunakan `-` untuk mengecualikan hasil yang spesifik dari penelusuran, misalnya: `foo -tag:#bar`.

- `file:(...)` akan menjalankan sub kueri pada nama berkas. Misalnya: `file:.jpg`. Jika Anda menggunakan UID bergaya Zettelkasten, ini akan sangat berguna untuk membatasi rentang waktu, misalnya `file:202007` untuk berkas yang dibuat pada Juli 2020.
- `path:(...)` akan menjalankan sub kueri pada alur berkas, absolut dari akar. Misalnya: `path:"Catatan Harian/2020-07"`.
- `content:(...)` akan menjalankan sub kueri pada konten berkas. Misalnya: `content:"kucing yang bahagia"`.
- `match-case:(...)` dan `ignore-case(...):` akan menimpa logika pencocokkan yang peka huruf besar/kecil untuk sub kueri tersebut.
- `tag:` akan menelusuri tag spesifik Anda pada berkas, misalnya `tag:#kerja`. Ini akan lebih cepat dan lebih akurat dibandingkan dengan menelusuri tag menggunakan teks `#kerja` polos, karena menggunakan informasi yang di-cache dan mengabaikan teks pada blok kode dan bagian yang bukan merupakan teks markdown.
- `line:(...)` akan menjalankan sub kueri berbasiskan per-baris, dibadingkan berbasis per-berkas. Misalnya, jika Anda mencari `foo bar`, ini akan mencocokkan berkas yang memiliki `foo` pada paragraf pertamanya dan `bar` pada paragraf terakhirnya. Penelusuran menggunakan `line:(foo bar)` hanya akan mencocokkan jika `foo` dan `bar` berada pada baris yang sama.
- `block:(...)` akan menjalankan sub kueri berbasiskan per-blok, yang mana setiap blok didefinisian sebagai blok markdown, biasanya dipisahkan oleh baris kosong atau daftar item. Ini merupakan pengkomputasian yang mahal dikarenakan membutuhkan penguraian pada setiap berkasnya, yang berarti ini mungkin akan lebih lambat dibandingkan mode yang lain.
- `section:(...)` akan menjalankan sub kueri berbasiskan per-bagian, yang mana setiap bagian merupakan teks di antara dua judul, termasuk judul yang pertama.
- `task:(...)` akan menjalankan sub kueri hanya pada setiap [[Memformat catatan Anda#Daftar tugas|tugas]] dan pada basis per-blok. Gunakan `task:""` untuk mencocokkan semua tugas.
- `task-todo:(...)` akan menjalankan sub kueri hanya pada setiap [[Memformat catatan Anda#Daftar tugas|tugas]] *yang belum selesai* dan pada basis per-blok. Gunakan `task-todo:""` untuk mencocokkan semua tugas yang belum selesai.
- `task-done:(...)` akan menjalankan sub kueri hanya pada setiap [[Memformat catatan Anda#Daftar tugas|tugas]] *yang telah selesai* dan pada basis per-blok. Gunakan `task-done:""` untuk mencocokkan semua tugas yang telah selesai.

---
permalink: plugins/search
publish: true
mobile: true
description: Search adalah plugin inti yang membantu Anda menemukan data di vault Obsidian Anda dengan menggunakan istilah pencarian dan operator untuk mempersempit hasil.
aliases:
  - Plugin/Penelusuran
---
Cari adalah [[Plugin inti|plugin inti]] yang membantu Anda menemukan data di brankas Obsidian Anda dengan menggunakan istilah pencarian dan operator untuk mempersempit hasil.

Secara bawaan, Anda dapat menemukan Cari di bilah samping kiri ![[lucide-search.svg#icon]]. Anda juga dapat membuka Cari dengan menekan `Ctrl+Shift+F` (Windows/Linux) atau `Command+Shift+F` (macOS).

- **Cari teks yang dipilih**: Jika Anda memilih teks di editor dan membuka Cari dengan pintasan keyboard, Cari akan menampilkan hasil pencarian untuk teks yang dipilih.
- **Cari istilah pencarian terbaru**: Buka Cari dengan istilah pencarian kosong untuk menampilkan daftar istilah pencarian terbaru. Klik salah satu untuk menggunakan istilah pencarian tersebut lagi.

> [!info] Berkas yang dikecualikan
> File yang cocok dengan pola [[Pengaturan#Berkas yang dikecualikan|Berkas yang dikecualikan]] Anda tidak akan muncul dalam hasil pencarian.

## Istilah pencarian

Istilah pencarian adalah kata atau frasa yang Anda masukkan di kolom pencarian. Mempelajari cara menulis istilah pencarian secara efektif dapat membantu Anda menemukan apa yang Anda cari dengan cepat, bahkan di brankas yang besar. Obsidian hanya mencari konten catatan dan Canvas.

> [!tip]- Mencari path dan nama file
> Secara bawaan, Anda hanya dapat mencari path dan nama file dari catatan dan Canvas. Untuk mencari path atau nama file dari file apa pun di brankas, gunakan operator `path` atau `file`.

Setiap kata dalam istilah pencarian dicocokkan secara independen di dalam setiap file. Untuk mencari frasa yang tepat, apit dengan tanda kutip, misalnya `"star wars"`. Untuk mencari teks yang dikutip di dalam frasa yang tepat, Anda dapat _meng-escape_ tanda kutip dengan menambahkan garis miring terbalik (`\`) di depan tanda kutip, misalnya `"they said \"hello\" to each other"`.

Anda dapat mengontrol apakah akan mengembalikan file yang berisi _semua_ kata dalam istilah pencarian Anda, atau _salah satu_ dari kata-kata tersebut:

- `meeting work` mengembalikan file yang berisi baik `meeting` maupun `work`.
- `meeting OR work` mengembalikan file yang berisi `meeting` atau `work`.

Anda bahkan dapat menggabungkan keduanya dalam istilah pencarian yang sama.

- `meeting work OR meetup personal` mengembalikan file untuk rapat kerja dan pertemuan pribadi.

Anda dapat menggunakan tanda kurung untuk mengontrol prioritas setiap ekspresi.

- `meeting (work OR meetup) personal` mengembalikan file yang berisi `meeting`, `personal`, dan salah satu dari `work` atau `meetup`.

Untuk mengecualikan, atau menegasikan, sebuah kata dari hasil pencarian, tambahkan tanda hubung (`-`) di depannya:

- `meeting -work` mengembalikan file yang berisi `meeting` tetapi tidak `work`.

Anda dapat mengecualikan beberapa ekspresi:

- `meeting -work -meetup` mengembalikan file yang berisi `meeting` tetapi tidak `work` atau `meetup`.

Anda dapat mengecualikan kombinasi ekspresi menggunakan tanda kurung:

- `meeting -(work meetup)` mengembalikan file yang berisi `meeting` tetapi tidak _keduanya_ `work` dan `meetup`.

Untuk memfilter hasil menggunakan operator kurang dari (`<`) dan lebih dari (`>`), apit dengan tanda kurung siku (`[]`) atau tanda kutip (`""`):

- `meeting [duration:<5]` mengembalikan file di mana meeting ada, dan duration kurang dari 5.
- `meeting [duration:>5]` mengembalikan file di mana meeting ada, dan duration lebih dari 5.

> [!tip]- Jelaskan istilah pencarian
> Jika Anda perlu memecahkan masalah istilah pencarian yang kompleks, Anda dapat mengklik **Jelaskan istilah pencarian** di Cari untuk mendapatkan penjelasan tentang istilah pencarian Anda.

## Operator pencarian

Operator pencarian memungkinkan istilah pencarian yang lebih detail untuk memfilter hasil Anda lebih lanjut.

Beberapa operator bahkan memungkinkan Anda menambahkan istilah pencarian bersarang di dalam tanda kurung, misalnya: `task:(call OR email)`.

| Operator pencarian | Deskripsi                                                                                                                                                                                                                                                                                                          |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`            | Mencari teks di nama file. Mencocokkan file apa pun di brankas.<p/>Contoh: `file:.jpg` atau `file:202209`.                                                                                                                                                                                                        |
| `path:`            | Mencari teks di path file. Mencocokkan file apa pun di brankas.<p/>Contoh: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                          |
| `content:`         | Mencari teks di konten file.<p/>Contoh: `content:"happy cat"`.                                                                                                                                                                                                                                                     |
| `match-case:`      | Pencocokan peka huruf besar/kecil.<p/>Contoh: `match-case:HappyCat`.                                                                                                                                                                                                                                              |
| `ignore-case:`     | Pencocokan tidak peka huruf besar/kecil.<p/>Contoh: `ignore-case:ikea`.                                                                                                                                                                                                                                           |
| `tag:`             | Mencari tag di file.<p/>Contoh: `tag:#work`.<p/>Perlu diingat bahwa mencari `tag:#work` tidak akan mengembalikan hasil untuk `#myjob/work`.<br /><br />**Catatan**: Karena `tag:` mengabaikan kecocokan di blok kode dan konten non-Markdown, pencarian ini sering lebih cepat dan lebih akurat daripada pencarian teks lengkap biasa untuk `#work`. |
| `line:`            | Mencari file yang berisi setidaknya satu baris yang cocok dengan `x`.<p/>Contoh: `line:(mix flour)`.<p/><br>**Catatan:** Menggunakan `-line` menegasikan pencarian, artinya akan mencari file di mana tidak ada baris yang cocok dengan `x`.                                                                       |
| `block:`           | Mencari kecocokan dalam blok yang sama.<p/>Contoh: `block:(dog cat)`.<p/>**Catatan**: Karena `block:` memerlukan Cari untuk mengurai konten Markdown di setiap file, ini dapat menyebabkan istilah pencarian Anda membutuhkan waktu lebih lama untuk selesai.                                                      |
| `section:`         | Mencari kecocokan dalam bagian yang sama (teks antara dua judul).<p/>Contoh: `section:(dog cat)`.                                                                                                                                                                                                                  |
| `task:`            | Mencari kecocokan dalam [[Sintaksis format dasar#Daftar Tugas\|tugas]] berdasarkan blok per blok.<p/>Contoh: `task:call`.                                                                                                                                                                                         |
| `task-todo:`       | Mencari kecocokan dalam [[Sintaksis format dasar#Daftar Tugas\|tugas]] yang *belum selesai* berdasarkan blok per blok.<p/>Contoh: `task-todo:call`.                                                                                                                                                                |
| `task-done:`       | Mencari kecocokan dalam [[Sintaksis format dasar#Daftar Tugas\|tugas]] yang *telah selesai* berdasarkan blok per blok.<p/>Contoh: `task-done:call`.                                                                                                                                                                |

## Mencari properti

Anda dapat menggunakan data yang tersimpan di [[Properti]] dalam istilah pencarian Anda.

Gunakan tanda kurung siku di sekitar nama properti `[property]` untuk mengembalikan file dengan properti tersebut:

- `[aliases]` mengembalikan file yang berisi properti `aliases`

Gunakan tanda kurung siku dan titik dua `[property:value]` untuk mengembalikan file dengan properti dan nilai tersebut:

- `[aliases:Name]` mengembalikan file di mana nilai properti `aliases` adalah `Name`

Gunakan `null` sebagai nilai untuk menemukan properti yang tidak memiliki nilai:

- `[aliases:null]` mengembalikan file di mana properti `aliases` ada tetapi tidak memiliki nilai

> [!info]+ Nilai kosong
> Operator `null` berfungsi ketika properti kosong (misalnya, `aliases: `), tetapi tidak ketika properti berisi tanda kutip kosong (`""`) atau tanda kurung siku kosong (`[]`).

Baik properti maupun nilai memungkinkan sub-kueri, seperti tanda kurung untuk pengelompokan, operator `OR`, tanda kutip ganda untuk pencocokan tepat, dan ekspresi reguler.

- `[status:Draft OR Published]` mengembalikan file di mana nilai properti `status` adalah `Draft` atau `Published`

## Mengubah sensitivitas huruf besar/kecil

Secara bawaan, istilah pencarian tidak peka huruf besar/kecil. Jika Anda ingin mencari dengan huruf besar/kecil yang tepat dari istilah pencarian Anda, pilih **Sesuaikan huruf** ![[obsidian-icon-upper-lowercase.svg#icon]] di dalam bilah pencarian.

Pengaturan ini dapat diaktifkan/dinonaktifkan. Jika ikon **Sesuaikan huruf** disorot, itu berarti Anda sedang melakukan pencarian yang peka huruf besar/kecil.

## Mengubah urutan pengurutan hasil

1. Masukkan [[#Istilah pencarian|istilah pencarian]].
2. Di bawah kolom pencarian, pilih dropdown di sebelah kanan.
3. Pilih urutan pengurutan yang Anda inginkan. Bawaan adalah "Nama berkas (A ke Z)".

Opsi berikut tersedia:

- Nama berkas (A ke Z)
- Nama berkas (Z ke A)
- Waktu modifikasi (baru ke lama)
- Waktu modifikasi (lama ke baru)
- Waktu pembuatan (baru ke lama)
- Waktu pembuatan (lama ke baru)

## Salin hasil pencarian

1. Masukkan [[#Istilah pencarian|istilah pencarian]].
2. Di bawah kolom pencarian, pilih ikon tiga titik di samping jumlah hasil.
3. Pilih **Salin hasil penelusuran**.

## Menggunakan ekspresi reguler

Ekspresi reguler adalah sekumpulan karakter yang mendeskripsikan pola teks. Untuk menggunakan ekspresi reguler dalam istilah pencarian Anda, apit ekspresi dengan garis miring (`/`).

- `/\d{4}-\d{2}-\d{2}/` mencocokkan tanggal ISO 8601, seperti 2022-01-01.

Anda bahkan dapat menggabungkan ekspresi reguler dengan operator pencarian:

- `path:/\d{4}-\d{2}-\d{2}/` mengembalikan file dengan tanggal di path file.

Untuk informasi lebih lanjut tentang cara menulis ekspresi reguler, lihat [Panduan Regex Praktis](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) dari FreeCodeCamp atau [Ekspresi reguler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) dari Mozilla.

> [!info]+ Ekspresi reguler berformat JavaScript
> Ekspresi reguler hadir dalam berbagai format yang mungkin terlihat berbeda satu sama lain. Obsidian menggunakan ekspresi reguler berformat JavaScript.

## Mengonfigurasi pengaturan pencarian

Untuk mengonfigurasi Cari, pilih **Pengaturan pencarian** ![[lucide-sliders-horizontal.svg#icon]] di sisi kanan bilah pencarian untuk melihat toggle.

| Pengaturan                    | Deskripsi                                                                   |
|-------------------------------|-----------------------------------------------------------------------------|
| **Jelaskan istilah pencarian** | Menguraikan istilah pencarian dan menjelaskannya dalam teks biasa.          |
| **Ciutkan hasil**             | Mengaktifkan/menonaktifkan apakah konteks pencarian ditampilkan.            |
| **Tampilkan lebih banyak konteks** | Memperluas hasil pencarian untuk menampilkan lebih banyak teks di sekitar kecocokan. |

## Menyematkan hasil pencarian di catatan

Untuk menyematkan hasil pencarian di catatan, tambahkan blok kode `query`:

````
```query
embed OR search
```
````

[[Pengantar Obsidian Publish|Obsidian Publish]] tidak mendukung [[Batasan Publish#Search|hasil pencarian]] yang disematkan. Untuk melihat contoh yang dirender langsung, gunakan blok kode di atas di dalam brankas Anda.

![[search-query-rendered.png]]

---
permalink: web-clipper/templates
description: Pelajari cara membuat templat yang menangkap dan mengorganisasi metadata halaman web secara otomatis dengan Web Clipper.
---
[[Pengantar Obsidian Web Clipper|Web Clipper]] memungkinkan Anda membuat templat yang secara otomatis menangkap dan mengatur metadata dari halaman web. Contoh templat tersedia di [repositori clipper-templates](https://github.com/kepano/clipper-templates).

## Buat atau ubah templat

Untuk **membuat** templat, buka pengaturan Web Clipper dan klik tombol **Template baru** di bilah samping. Anda juga dapat **menduplikasi** templat di menu **Lainnya** di pojok kanan atas.

Untuk **mengubah** templat, pilih templat dari bilah samping. Perubahan Anda akan disimpan secara otomatis.

Templat menggunakan [[Variabel]] dan [[Filter]], yang memungkinkan Anda menyesuaikan bagaimana konten akan disimpan.

## Impor dan ekspor templat Web Clipper

Untuk mengimpor templat:

1. Buka ekstensi dan klik ikon roda gigi **[[Pengaturan]]**.
2. Buka templat mana pun dalam daftar.
3. Klik **Impor** di pojok kanan atas atau seret dan lepas file templat `.json` Anda di mana saja di area templat.

Untuk mengekspor templat, klik **Ekspor** di pojok kanan atas. Ini akan mengunduh file templat `.json`. Anda juga dapat menyalin data templat ke papan klip Anda melalui menu **Lainnya**.

## Pengaturan templat

### Perilaku

Tentukan bagaimana konten dari Web Clipper akan ditambahkan ke Obsidian:

- **Buat catatan baru**
- **Tambahkan ke catatan yang sudah ada**, di bagian atas atau bawah
- **Tambahkan ke catatan harian**, di bagian atas atau bawah (memerlukan plugin [[Catatan harian]] untuk aktif)

### Secara otomatis memicu templat

Pemicu templat memungkinkan Anda secara otomatis memilih templat berdasarkan URL halaman saat ini atau data [schema.org](https://schema.org/). Anda dapat menentukan beberapa aturan untuk setiap templat, dipisahkan oleh baris baru.

Kecocokan pertama dalam daftar templat Anda menentukan templat mana yang digunakan. Anda dapat menyeret templat ke atas dan ke bawah di pengaturan Web Clipper untuk mengubah urutan pencocokan templat.

#### Pencocokan URL sederhana

Pencocokan sederhana memicu templat jika URL halaman saat ini *dimulai dengan* pola yang diberikan. Misalnya:

- `https://obsidian.md` akan mencocokkan URL apa pun yang dimulai dengan teks ini.

#### Pencocokan ekspresi reguler

Anda dapat memicu templat berdasarkan pola URL yang lebih kompleks menggunakan ekspresi reguler. Apit pola regex Anda dengan garis miring (`/`). Ingat untuk meng-escape karakter khusus dalam pola regex (seperti `.` dan `/`) dengan garis miring terbalik (`\`). Misalnya:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` akan mencocokkan halaman referensi IMDB mana pun.

#### Pencocokan Schema.org

Anda dapat memicu templat berdasarkan data [schema.org](https://schema.org/) yang ada di halaman. Gunakan awalan `schema:` diikuti oleh kunci schema yang ingin Anda cocokkan. Anda dapat secara opsional menentukan nilai yang diharapkan. Misalnya:

- `schema:@Recipe` akan mencocokkan halaman di mana tipe schema adalah "Recipe".
- `schema:@Recipe.name` akan mencocokkan halaman di mana `@Recipe.name` ada.
- `schema:@Recipe.name=Cookie` akan mencocokkan halaman di mana `@Recipe.name` adalah "Cookie".

Nilai Schema.org juga dapat digunakan untuk [[Variabel#Variabel Schema.org|mengisi data secara otomatis dalam templat]].

### Konteks interpreter

Ketika [[Interpreter|Interpreter]] diaktifkan, Anda dapat menggunakan [[Variabel#Variabel prompt|variabel prompt]] untuk mengekstrak konten halaman dengan bahasa alami. Untuk setiap templat, Anda dapat menentukan [[Interpreter#Konteks|konteks]] yang dapat diakses oleh Interpreter.

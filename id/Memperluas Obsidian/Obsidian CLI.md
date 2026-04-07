---
permalink: cli
description: Apa pun yang dapat Anda lakukan di Obsidian dapat dilakukan dari baris perintah.
---
Obsidian CLI adalah antarmuka baris perintah yang memungkinkan Anda mengontrol Obsidian dari terminal untuk keperluan skrip, otomatisasi, dan integrasi dengan perangkat eksternal.

Apa pun yang bisa Anda lakukan di Obsidian, bisa Anda lakukan dari baris perintah. Obsidian CLI bahkan menyertakan [[#Perintah pengembang|perintah pengembang]] untuk mengakses perangkat pengembang, menginspeksi elemen, mengambil tangkapan layar, memuat ulang plugin, dan lainnya.

![[obsidian-cli.mp4#interface]]

> [!warning] Memerlukan penginstal Obsidian 1.12
> Menggunakan CLI memerlukan penginstal Obsidian 1.12. Lihat [[Perbarui Obsidian#Pembaruan penginstal|panduan pembaruan versi penginstal]].

## Pasang Obsidian CLI

Tingkatkan ke [[Perbarui Obsidian|versi penginstal Obsidian]] terbaru (1.12.7+).

Aktifkan Obsidian CLI di Obsidian:

1. Buka **Pengaturan** → **Umum**.
2. Aktifkan **Antarmuka baris perintah**.
3. Ikuti petunjuk untuk mendaftarkan Obsidian CLI.

Jika Anda mengalami masalah saat memasang Obsidian CLI, lihat [[#Pemecahan masalah]].

## Mulai

Obsidian CLI mendukung perintah tunggal dan antarmuka pengguna terminal (TUI) dengan bantuan interaktif dan lengkapi otomatis.

> [!info] Aplikasi Obsidian harus berjalan
> Obsidian CLI memerlukan aplikasi Obsidian untuk berjalan. Jika Obsidian tidak berjalan, perintah pertama yang Anda jalankan akan meluncurkan Obsidian.
>
> Ingin menyinkronkan tanpa aplikasi desktop? Lihat [[Obsidian Headless|Obsidian Headless]].

### Jalankan perintah

Jalankan perintah individual tanpa membuka TUI:

```shell
# Jalankan perintah help
obsidian help
```

### Gunakan antarmuka terminal

Gunakan TUI dengan memasukkan `obsidian`. Perintah selanjutnya bisa dimasukkan tanpa `obsidian`.

```shell
# Buka TUI, lalu jalankan help
obsidian
help
```

TUI mendukung lengkapi otomatis, riwayat perintah, dan pencarian mundur. Gunakan `Ctrl+R` untuk mencari riwayat perintah Anda. Lihat [[#Pintasan keyboard]] untuk semua pintasan yang tersedia.

## Contoh

Berikut beberapa contoh apa yang bisa dilakukan Obsidian CLI.

### Penggunaan sehari-hari

```shell
# Buka catatan harian hari ini
obsidian daily

# Tambahkan tugas ke catatan harian Anda
obsidian daily:append content="- [ ] Beli bahan makanan"

# Cari di brankas Anda
obsidian search query="catatan rapat"

# Baca file aktif
obsidian read

# Daftar semua tugas dari catatan harian Anda
obsidian tasks daily

# Buat catatan baru dari templat
obsidian create name="Perjalanan ke Paris" template=Travel

# Daftar semua tag di brankas Anda dengan jumlah
obsidian tags counts

# Bandingkan dua versi file
obsidian diff file=README from=1 to=3
```

### Untuk pengembang

Banyak [[#Perintah pengembang]] tersedia untuk pengembangan plugin dan tema. Perintah-perintah ini memungkinkan perangkat coding agentik untuk menguji dan melakukan debug secara otomatis.

```shell
# Buka perangkat pengembang
obsidian devtools

# Muat ulang plugin komunitas yang sedang Anda kembangkan
obsidian plugin:reload id=my-plugin

# Ambil tangkapan layar aplikasi
obsidian dev:screenshot path=screenshot.png

# Jalankan JavaScript di konsol aplikasi
obsidian eval code="app.vault.getFiles().length"
```

## Cara menggunakan

### Gunakan parameter dan flag

Perintah bisa menggunakan **parameter** dan **flag**. Kebanyakan perintah tidak memerlukan parameter atau flag. Parameter yang wajib ditandai sebagai `required`. Contohnya:

```shell
# Buat catatan baru menggunakan nama bawaan "Tanpa judul"
obsidian create
```

Sebuah **parameter** menerima nilai, ditulis sebagai `parameter=value`. Jika nilai mengandung spasi, bungkus dengan tanda kutip:

```shell
# Buat catatan baru bernama "Note" dengan konten "Hello world"
obsidian create name=Note content="Hello world"
```

Sebuah **flag** adalah saklar boolean tanpa nilai. Sertakan untuk mengaktifkannya, misalnya `open` dan `overwrite` adalah flag:

```shell
# Buat catatan dan buka
obsidian create name=Note content="Hello" open overwrite
```

Untuk konten multibaris gunakan `\n` untuk baris baru. Gunakan `\t` untuk tab.

```bash
obsidian create name=Note content="# Judul\n\nTeks isi"
```

### Menargetkan brankas

Jika direktori kerja saat ini dari terminal Anda adalah folder brankas, brankas tersebut digunakan secara bawaan. Jika tidak, brankas yang sedang aktif yang digunakan.

Gunakan `vault=<name>` atau `vault=<id>` untuk menargetkan brankas tertentu. Ini harus menjadi parameter pertama sebelum perintah Anda:

```shell
obsidian vault=Notes daily
obsidian vault="My Vault" search query="test"
```

Di TUI, gunakan `vault:open <name>` atau `<id>` untuk beralih ke brankas berbeda.

### Menargetkan file

Banyak perintah menerima parameter `file` dan `path` untuk menargetkan file tertentu. Jika keduanya tidak diberikan, perintah secara bawaan menggunakan file aktif.

- `file=<name>` menyelesaikan file menggunakan resolusi tautan yang sama seperti [[Tautan internal|tautan wiki]], mencocokkan berdasarkan nama file tanpa memerlukan path lengkap atau ekstensi.
- `path=<path>` memerlukan path tepat dari root brankas, contoh `folder/note.md`.

```shell
# Ini setara jika "Recipe.md" adalah satu-satunya file dengan nama tersebut
obsidian read file=Recipe
obsidian read path="Templates/Recipe.md"
```

### Salin output

Tambahkan `--copy` ke perintah apa pun untuk menyalin output ke papan klip:

```shell
read --copy
search query="TODO" --copy
```


## Perintah umum

### `help`

Tampilkan daftar semua perintah yang tersedia.

| Parameter   | Deskripsi                                |
| ----------- | ---------------------------------------- |
| `<command>` | Tampilkan bantuan untuk perintah tertentu. |

### `version`

Tampilkan versi Obsidian.

### `reload`

Muat ulang jendela aplikasi.

### `restart`

Mulai ulang aplikasi.


## Basis

Perintah untuk [[Pengenalan Basis|Basis]].

### `bases`

Daftar semua file `.base` di brankas.

### `base:views`

Daftar tampilan di file basis saat ini.

### `base:create`

Buat item baru di basis. Secara bawaan menggunakan tampilan basis aktif jika tidak ada file yang ditentukan.

```bash
file=<name>        # nama file basis
path=<path>        # path file basis
view=<name>        # nama tampilan
name=<name>        # nama file baru
content=<text>     # konten awal

open               # buka file setelah membuat
newtab             # buka di tab baru
```

### `base:query`

Kueri basis dan kembalikan hasil.

```bash
file=<name>                    # nama file basis
path=<path>                    # path file basis
view=<name>                    # nama tampilan untuk dikueri
format=json|csv|tsv|md|paths   # format output (bawaan: json)
```

## Penanda

Perintah untuk [[Penanda]].

### `bookmarks`

Daftar penanda.

```bash
total              # kembalikan jumlah penanda
verbose            # sertakan tipe penanda
format=json|tsv|csv  # format output (bawaan: tsv)
```

### `bookmark`

Tambahkan penanda.

```bash
file=<path>        # file untuk ditandai
subpath=<subpath>  # subpath (judul atau blok) dalam file
folder=<path>      # folder untuk ditandai
search=<query>     # kueri pencarian untuk ditandai
url=<url>          # URL untuk ditandai
title=<title>      # judul penanda
```

## Palet perintah

Perintah untuk [[Palet perintah]] dan [[Pintasan]]. Ini mencakup semua perintah yang didaftarkan oleh plugin.

### `commands`

Daftar ID perintah yang tersedia.

```bash
filter=<prefix>    # filter berdasarkan awalan ID
```

### `command`

Jalankan perintah Obsidian.

```bash
id=<command-id>    # (required) ID perintah untuk dijalankan
```

### `hotkeys`

Daftar pintasan keyboard untuk semua perintah.

```bash
total              # kembalikan jumlah pintasan keyboard
verbose            # tampilkan apakah pintasan keyboard kustom
format=json|tsv|csv  # format output (bawaan: tsv)
```

### `hotkey`

Dapatkan pintasan keyboard untuk sebuah perintah.

```bash
id=<command-id>    # (required) ID perintah

verbose            # tampilkan apakah kustom atau bawaan
```

## Catatan harian

Perintah untuk [[Catatan harian]].

### `daily`

Buka catatan harian.

```bash
paneType=tab|split|window    # tipe panel untuk dibuka
```

### `daily:path`

Dapatkan path catatan harian. Mengembalikan path yang diharapkan meskipun file belum dibuat.

### `daily:read`

Baca konten catatan harian.

### `daily:append`

Tambahkan konten di akhir catatan harian.

```bash
content=<text>     # (required) konten untuk ditambahkan
paneType=tab|split|window    # tipe panel untuk dibuka

inline             # tambahkan tanpa baris baru
open               # buka file setelah menambahkan
```

### `daily:prepend`

Tambahkan konten di awal catatan harian.

```bash
content=<text>     # (required) konten untuk ditambahkan di awal
paneType=tab|split|window    # tipe panel untuk dibuka

inline             # tambahkan di awal tanpa baris baru
open               # buka file setelah menambahkan
```

## Riwayat file

### `diff`

Daftar atau bandingkan versi dari [[Pemulih berkas|Pemulihan file]] lokal dan [[Pengantar Obsidian Sync|Sync]]. Versi dinomori dari terbaru ke terlama.

```bash
file=<name>          # nama file
path=<path>          # path file
from=<n>             # nomor versi untuk membandingkan dari
to=<n>               # nomor versi untuk membandingkan ke
filter=local|sync    # filter berdasarkan sumber versi
```

**Contoh:**

```shell
# Daftar semua versi file aktif
diff

# Daftar semua versi file tertentu
diff file=Recipe

# Bandingkan versi terbaru dengan file saat ini
diff file=Recipe from=1

# Bandingkan dua versi
diff file=Recipe from=2 to=1

# Hanya tampilkan versi Sync
diff filter=sync
```

### `history`

Daftar versi dari [[Pemulih berkas]] saja. Lihat [[#Sync|sync:history]] untuk perintah Sync yang setara.

```bash
file=<name>        # nama file
path=<path>        # path file
```

### `history:list`

Daftar semua file dengan riwayat lokal.

### `history:read`

Baca versi riwayat lokal.

```bash
file=<name>        # nama file
path=<path>        # path file
version=<n>        # nomor versi (bawaan: 1)
```

### `history:restore`

Pulihkan versi riwayat lokal.

```bash
file=<name>        # nama file
path=<path>        # path file
version=<n>        # (required) nomor versi
```

### `history:open`

Buka pemulihan file.

```bash
file=<name>        # nama file
path=<path>        # path file
```

## File dan folder

### `file`

Tampilkan info file (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file
```

Contoh:

```
path       Notes/Recipe.md
name       Recipe
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Daftar file di brankas.

```bash
folder=<path>      # filter berdasarkan folder
ext=<extension>    # filter berdasarkan ekstensi

total              # kembalikan jumlah file
```

### `folder`

Tampilkan info folder.

```bash
path=<path>              # (required) path folder
info=files|folders|size  # kembalikan info tertentu saja
```

### `folders`

Daftar folder di brankas.

```bash
folder=<path>      # filter berdasarkan folder induk

total              # kembalikan jumlah folder
```

### `open`

Buka file.

```bash
file=<name>        # nama file
path=<path>        # path file

newtab             # buka di tab baru
```

### `create`

Buat atau timpa file.

```bash
name=<name>        # nama file
path=<path>        # path file
content=<text>     # konten awal
template=<name>    # templat yang digunakan

overwrite          # timpa jika file sudah ada
open               # buka file setelah membuat
newtab             # buka di tab baru
```

### `read`

Baca konten file (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file
```

### `append`

Tambahkan konten di akhir file (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file
content=<text>     # (required) konten untuk ditambahkan

inline             # tambahkan tanpa baris baru
```

### `prepend`

Tambahkan konten di awal setelah metadata awal (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file
content=<text>     # (required) konten untuk ditambahkan di awal

inline             # tambahkan di awal tanpa baris baru
```

### `move`

Pindahkan atau ganti nama file (bawaan: file aktif). Ini akan secara otomatis memperbarui [[Tautan internal|tautan internal]] jika diaktifkan di [[Pengaturan#Secara otomatis perbarui tautan internal|pengaturan brankas]] Anda.

```bash
file=<name>        # nama file
path=<path>        # path file
to=<path>          # (required) folder atau path tujuan
```

### `rename`

Ganti nama file (bawaan: file aktif). Ekstensi file dipertahankan secara otomatis jika dihilangkan dari nama baru. Gunakan [[#`move`|move]] untuk mengganti nama dan memindahkan file sekaligus. Ini akan secara otomatis memperbarui [[Tautan internal|tautan internal]] jika diaktifkan di [[Pengaturan#Secara otomatis perbarui tautan internal|pengaturan brankas]] Anda.

```bash
file=<name>        # nama file
path=<path>        # path file
name=<name>        # (required) nama file baru
```

### `delete`

Hapus file (bawaan: file aktif, tempat sampah secara bawaan).

```bash
file=<name>        # nama file
path=<path>        # path file

permanent          # lewati tempat sampah, hapus permanen
```

## Tautan

Perintah untuk [[Backlink]] dan [[Tautan Keluar]].

### `backlinks`

Daftar tautan balik ke file (bawaan: file aktif).

```bash
file=<name>        # nama file target
path=<path>        # path file target

counts             # sertakan jumlah tautan
total              # kembalikan jumlah tautan balik
format=json|tsv|csv  # format output (bawaan: tsv)
```

### `links`

Daftar tautan keluar dari file (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file

total              # kembalikan jumlah tautan
```

### `unresolved`

Daftar tautan yang belum terselesaikan di brankas.

```bash
total              # kembalikan jumlah tautan belum terselesaikan
counts             # sertakan jumlah tautan
verbose            # sertakan file sumber
format=json|tsv|csv  # format output (bawaan: tsv)
```

### `orphans`

Daftar file tanpa tautan masuk.

```bash
total              # kembalikan jumlah file tanpa induk
```

### `deadends`

Daftar file tanpa tautan keluar.

```bash
total              # kembalikan jumlah file tanpa tautan keluar
```

## Kerangka

Perintah untuk [[Kerangka]].

### `outline`

Tampilkan judul untuk file saat ini.

```bash
file=<name>        # nama file
path=<path>        # path file
format=tree|md|json  # format output (bawaan: tree)

total              # kembalikan jumlah judul
```

## Plugin

Perintah untuk [[Plugin inti]] dan [[Plugin komunitas]].

### `plugins`

Daftar plugin yang terpasang.

```bash
filter=core|community  # filter berdasarkan tipe plugin

versions               # sertakan nomor versi
format=json|tsv|csv    # format output (bawaan: tsv)
```

### `plugins:enabled`

Daftar plugin yang diaktifkan.

```bash
filter=core|community  # filter berdasarkan tipe plugin

versions               # sertakan nomor versi
format=json|tsv|csv    # format output (bawaan: tsv)
```

### `plugins:restrict`

Alihkan atau periksa mode terbatas.

```bash
on                 # aktifkan mode terbatas
off                # matikan mode terbatas
```

### `plugin`

Dapatkan info plugin.

```bash
id=<plugin-id>     # (required) ID plugin
```

### `plugin:enable`

Aktifkan plugin.

```bash
id=<id>                # (required) ID plugin
filter=core|community  # tipe plugin
```

### `plugin:disable`

Matikan plugin.

```bash
id=<id>                # (required) ID plugin
filter=core|community  # tipe plugin
```

### `plugin:install`

Pasang plugin komunitas.

```bash
id=<id>            # (required) ID plugin

enable             # aktifkan setelah memasang
```

### `plugin:uninstall`

Hapus pemasangan plugin komunitas.

```bash
id=<id>            # (required) ID plugin
```

### `plugin:reload`

Muat ulang plugin (untuk pengembang).

```bash
id=<id>            # (required) ID plugin
```

## Properti

Perintah terkait [[Properti]].

### `aliases`

Daftar alias di brankas. Gunakan `active` atau `file`/`path` untuk menampilkan alias file tertentu.

```bash
file=<name>        # nama file
path=<path>        # path file

total              # kembalikan jumlah alias
verbose            # sertakan path file
active             # tampilkan alias untuk file aktif
```

### `properties`

Daftar properti di brankas. Gunakan `active` atau `file`/`path` untuk menampilkan properti file tertentu.

```bash
file=<name>        # tampilkan properti untuk file
path=<path>        # tampilkan properti untuk path
name=<name>        # dapatkan jumlah properti tertentu
sort=count         # urutkan berdasarkan jumlah (bawaan: name)
format=yaml|json|tsv  # format output (bawaan: yaml)

total              # kembalikan jumlah properti
counts             # sertakan jumlah kemunculan
active             # tampilkan properti untuk file aktif
```

### `property:set`

Atur properti pada file (bawaan: file aktif).

```bash
name=<name>                                    # (required) nama properti
value=<value>                                  # (required) nilai properti
type=text|list|number|checkbox|date|datetime   # tipe properti
file=<name>                                    # nama file
path=<path>                                    # path file
```

### `property:remove`

Hapus properti dari file (bawaan: file aktif).

```bash
name=<name>        # (required) nama properti
file=<name>        # nama file
path=<path>        # path file
```

### `property:read`

Baca nilai properti dari file (bawaan: file aktif).

```bash
name=<name>        # (required) nama properti
file=<name>        # nama file
path=<path>        # path file
```

## Publish

Perintah untuk [[Pengantar Obsidian Publish|Obsidian Publish]].

### `publish:site`

Tampilkan info situs publish (slug, URL).

### `publish:list`

Daftar file yang terpublikasikan.

```bash
total              # kembalikan jumlah file terpublikasikan
```

### `publish:status`

Daftar perubahan publish.

```bash
total              # kembalikan jumlah perubahan
new                # tampilkan file baru saja
changed            # tampilkan file yang berubah saja
deleted            # tampilkan file yang terhapus saja
```

### `publish:add`

Publikasikan file atau semua file yang berubah (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file

changed            # publikasikan semua file yang berubah
```

### `publish:remove`

Batalkan publikasi file (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file
```

### `publish:open`

Buka file di situs yang terpublikasikan (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file
```

## Catatan acak

Perintah untuk [[Catatan acak]].

### `random`

Buka catatan acak.

```bash
folder=<path>      # batasi ke folder

newtab             # buka di tab baru
```

### `random:read`

Baca catatan acak (menyertakan path).

```bash
folder=<path>      # batasi ke folder
```

## Pencarian

Perintah untuk [[Cari]].

### `search`

Cari teks di brankas. Mengembalikan path file yang cocok.

```bash
query=<text>       # (required) kueri pencarian
path=<folder>      # batasi ke folder
limit=<n>          # maks file
format=text|json   # format output (bawaan: text)

total              # kembalikan jumlah kecocokan
case               # peka huruf besar/kecil
```

### `search:context`

Cari dengan konteks baris yang cocok. Mengembalikan output bergaya grep `path:line: text`.

```bash
query=<text>       # (required) kueri pencarian
path=<folder>      # batasi ke folder
limit=<n>          # maks file
format=text|json   # format output (bawaan: text)

case               # peka huruf besar/kecil
```

### `search:open`

Buka tampilan pencarian.

```bash
query=<text>       # kueri pencarian awal
```

## Sync

Perintah untuk [[Pengantar Obsidian Sync|Obsidian Sync]].

> [!tip] Sinkronisasi tanpa aplikasi desktop
> Perintah-perintah ini mengontrol Sync dalam aplikasi Obsidian yang sedang berjalan. Untuk menyinkronkan brankas dari baris perintah tanpa aplikasi desktop, lihat [[Headless Sync]].

### `sync`

Jeda atau lanjutkan sync.

```bash
on                 # lanjutkan sync
off                # jeda sync
```

### `sync:status`

Tampilkan status dan penggunaan sync.

### `sync:history`

Daftar riwayat versi sync untuk file (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file

total              # kembalikan jumlah versi
```

### `sync:read`

Baca versi sync (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file
version=<n>        # (required) nomor versi
```

### `sync:restore`

Pulihkan versi sync (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file
version=<n>        # (required) nomor versi
```

### `sync:open`

Buka riwayat sync (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file
```

### `sync:deleted`

Daftar file yang dihapus di sync.

```bash
total              # kembalikan jumlah file terhapus
```

## Tag

Perintah untuk [[Tag]].

### `tags`

Daftar tag di brankas. Gunakan `active` atau `file`/`path` untuk menampilkan tag file tertentu.

```bash
file=<name>        # nama file
path=<path>        # path file
sort=count         # urutkan berdasarkan jumlah (bawaan: name)

total              # kembalikan jumlah tag
counts             # sertakan jumlah tag
format=json|tsv|csv  # format output (bawaan: tsv)
active             # tampilkan tag untuk file aktif
```

### `tag`

Dapatkan info tag.

```bash
name=<tag>         # (required) nama tag

total              # kembalikan jumlah kemunculan
verbose            # sertakan daftar file dan jumlah
```

## Tugas

Perintah untuk manajemen tugas.

### `tasks`

Daftar tugas di brankas. Gunakan `active` atau `file`/`path` untuk menampilkan tugas file tertentu.

```bash
file=<name>        # filter berdasarkan nama file
path=<path>        # filter berdasarkan path file
status="<char>"    # filter berdasarkan karakter status

total              # kembalikan jumlah tugas
done               # tampilkan tugas yang selesai
todo               # tampilkan tugas yang belum selesai
verbose            # kelompokkan berdasarkan file dengan nomor baris
format=json|tsv|csv  # format output (bawaan: text)
active             # tampilkan tugas untuk file aktif
daily              # tampilkan tugas dari catatan harian
```

**Contoh:**

```bash
# Daftar semua tugas di brankas
tasks

# Daftar tugas yang belum selesai di brankas
tasks todo

# Daftar tugas yang selesai dari file tertentu
tasks file=Recipe done

# Daftar tugas dari catatan harian hari ini
tasks daily

# Hitung tugas di catatan harian
tasks daily total

# Daftar tugas dengan path file dan nomor baris
tasks verbose

# Filter berdasarkan status kustom (kutip karakter khusus)
tasks 'status=?'
```

### `task`

Tampilkan atau perbarui tugas.

```bash
ref=<path:line>    # referensi tugas (path:line)
file=<name>        # nama file
path=<path>        # path file
line=<n>           # nomor baris
status="<char>"    # atur karakter status

toggle             # alihkan status tugas
daily              # catatan harian
done               # tandai selesai
todo               # tandai belum selesai
```

**Contoh:**

```bash
# Tampilkan info tugas
task file=Recipe line=8
task ref="Recipe.md:8"

# Alihkan penyelesaian tugas
task ref="Recipe.md:8" toggle

# Alihkan tugas di catatan harian
task daily line=3 toggle

# Atur status tugas
task file=Recipe line=8 done      # → [x]
task file=Recipe line=8 todo      # → [ ]
task file=Recipe line=8 status=-  # → [-]
task daily line=3 done            # Tandai tugas catatan harian selesai
```


## Template

Perintah untuk [[Template|Template]].

### `templates`

Daftar templat.

```bash
total              # kembalikan jumlah templat
```

### `template:read`

Baca konten templat.

```bash
name=<template>    # (required) nama templat
title=<title>      # judul untuk resolusi variabel

resolve            # selesaikan variabel templat
```

### `template:insert`

Sisipkan templat ke file aktif.

```bash
name=<template>    # (required) nama templat
```

**Catatan:**
- Opsi `resolve` memproses variabel `{{date}}`, `{{time}}`, `{{title}}`
- Gunakan `create path=<path> template=<name>` untuk membuat file dengan templat

## Tema dan cuplikan

Perintah untuk [[Tema]] dan [[Cuplikan CSS]].

### `themes`

Daftar tema yang terpasang.

```bash
versions           # sertakan nomor versi
```

### `theme`

Tampilkan tema aktif atau dapatkan info.

```bash
name=<name>        # nama tema untuk detail
```

### `theme:set`

Atur tema aktif.

```bash
name=<name>        # (required) nama tema (kosong untuk bawaan)
```

### `theme:install`

Pasang tema komunitas.

```bash
name=<name>        # (required) nama tema

enable             # aktifkan setelah memasang
```

### `theme:uninstall`

Hapus pemasangan tema.

```bash
name=<name>        # (required) nama tema
```

### `snippets`

Daftar cuplikan CSS yang terpasang.

### `snippets:enabled`

Daftar cuplikan CSS yang diaktifkan.

### `snippet:enable`

Aktifkan cuplikan CSS.

```bash
name=<name>        # (required) nama cuplikan
```

### `snippet:disable`

Matikan cuplikan CSS.

```bash
name=<name>        # (required) nama cuplikan
```

## Catatan unik

Perintah untuk [[Pembuat catatan unik]].

### `unique`

Buat catatan unik.

```bash
name=<text>        # nama catatan
content=<text>     # konten awal
paneType=tab|split|window    # tipe panel untuk dibuka

open               # buka file setelah membuat
```

## Brankas

### `vault`

Tampilkan info brankas.

```bash
info=name|path|files|folders|size  # kembalikan info tertentu saja
```

### `vaults`

Daftar brankas yang dikenal.

```bash
total              # kembalikan jumlah brankas
verbose            # sertakan path brankas
```

### `vault:open`

Beralih ke brankas berbeda (TUI saja).

```bash
name=<name>        # (required) nama brankas
```

## Penampil web

Perintah untuk [[Penampil web]].

### `web`

Buka URL di penampil web.

```bash
url=<url>          # (required) URL untuk dibuka

newtab             # buka di tab baru
```

## Penghitung kata

Perintah untuk [[Penghitung kata]].

### `wordcount`

Hitung kata dan karakter (bawaan: file aktif).

```bash
file=<name>        # nama file
path=<path>        # path file

words              # kembalikan jumlah kata saja
characters         # kembalikan jumlah karakter saja
```

## Ruang kerja

Perintah untuk [[Ruang kerja]] dan plugin [[Ruang kerja]].

### `workspace`

Tampilkan pohon ruang kerja.

```bash
ids                # sertakan ID item ruang kerja
```

### `workspaces`

Daftar ruang kerja yang tersimpan.

```bash
total              # kembalikan jumlah ruang kerja
```

### `workspace:save`

Simpan tata letak saat ini sebagai ruang kerja.

```bash
name=<name>        # nama ruang kerja
```

### `workspace:load`

Muat ruang kerja yang tersimpan.

```bash
name=<name>        # (required) nama ruang kerja
```

### `workspace:delete`

Hapus ruang kerja yang tersimpan.

```bash
name=<name>        # (required) nama ruang kerja
```

### `tabs`

Daftar tab yang terbuka.

```bash
ids                # sertakan ID tab
```

### `tab:open`

Buka tab baru.

```bash
group=<id>         # ID grup tab
file=<path>        # file untuk dibuka
view=<type>        # tipe tampilan untuk dibuka
```

### `recents`

Daftar file yang baru dibuka.

```bash
total              # kembalikan jumlah file terbaru
```

## Perintah pengembang

Perintah untuk membantu Anda mengembangkan [[Plugin komunitas]] dan [[Tema]]. Pelajari lebih lanjut dengan mengunjungi [Dokumentasi Pengembang Obsidian](https://docs.obsidian.md).

### `devtools`

Alihkan perangkat pengembang Electron.

### `dev:debug`

Pasang/lepas debugger Chrome DevTools Protocol.

```bash
on                 # pasang debugger
off                # lepas debugger
```

### `dev:cdp`

Jalankan perintah Chrome DevTools Protocol.

```bash
method=<CDP.method>  # (required) metode CDP untuk dipanggil
params=<json>        # parameter metode sebagai JSON
```

### `dev:errors`

Tampilkan kesalahan JavaScript yang tertangkap.

```bash
clear              # hapus buffer kesalahan
```

### `dev:screenshot`

Ambil tangkapan layar (mengembalikan PNG base64).

```bash
path=<filename>    # path file output
```

### `dev:console`

Tampilkan pesan konsol yang tertangkap.

```bash
limit=<n>                        # maks pesan untuk ditampilkan (bawaan 50)
level=log|warn|error|info|debug  # filter berdasarkan level log

clear                            # hapus buffer konsol
```

### `dev:css`

Inspeksi CSS dengan lokasi sumber.

```bash
selector=<css>     # (required) selektor CSS
prop=<name>        # filter berdasarkan nama properti
```

### `dev:dom`

Kueri elemen DOM.

```bash
selector=<css>     # (required) selektor CSS
attr=<name>        # dapatkan nilai atribut
css=<prop>         # dapatkan nilai properti CSS

total              # kembalikan jumlah elemen
text               # kembalikan konten teks
inner              # kembalikan innerHTML alih-alih outerHTML
all                # kembalikan semua kecocokan alih-alih yang pertama
```

### `dev:mobile`

Alihkan emulasi seluler.

```bash
on                 # aktifkan emulasi seluler
off                # matikan emulasi seluler
```

### `eval`

Jalankan JavaScript dan kembalikan hasil.

```bash
code=<javascript>  # (required) kode JavaScript untuk dijalankan
```

## Pintasan keyboard

Pintasan ini tersedia di [[#Gunakan antarmuka terminal|TUI]].

### Navigasi

| Aksi                                                         | Pintasan        |
| ------------------------------------------------------------ | --------------- |
| Gerakkan kursor ke kiri                                      | `←` / `Ctrl+B` |
| Gerakkan kursor ke kanan (terima saran di akhir baris)       | `→` / `Ctrl+F` |
| Lompat ke awal baris                                         | `Ctrl+A`        |
| Lompat ke akhir baris                                        | `Ctrl+E`        |
| Mundur satu kata                                             | `Alt+B`         |
| Maju satu kata                                               | `Alt+F`         |

### Pengeditan

| Aksi                          | Pintasan                   |
| ----------------------------- | -------------------------- |
| Hapus ke awal baris           | `Ctrl+U`                   |
| Hapus ke akhir baris          | `Ctrl+K`                   |
| Hapus kata sebelumnya         | `Ctrl+W` / `Alt+Backspace` |

### Lengkapi otomatis

| Aksi                                                    | Pintasan    |
| ------------------------------------------------------- | ----------- |
| Masuk mode saran / terima saran yang dipilih            | `Tab`       |
| Keluar mode saran                                       | `Shift+Tab` |
| Masuk mode saran (dari input baru)                      | `↓`         |
| Terima saran pertama/yang dipilih (di akhir baris)      | `→`         |

### Riwayat

| Aksi                                                                  | Pintasan        |
| --------------------------------------------------------------------- | --------------- |
| Entri riwayat sebelumnya / navigasi saran ke atas                     | `↑` / `Ctrl+P` |
| Entri riwayat berikutnya / navigasi saran ke bawah                    | `↓` / `Ctrl+N` |
| Pencarian riwayat mundur (ketik untuk filter, `Ctrl+R` untuk siklus)  | `Ctrl+R`        |

### Lainnya

| Aksi                                                          | Pintasan            |
| ------------------------------------------------------------- | ------------------- |
| Jalankan perintah atau terima saran                           | `Enter`             |
| Urungkan lengkapi otomatis / keluar mode saran / hapus input  | `Escape`            |
| Bersihkan layar                                               | `Ctrl+L`            |
| Keluar                                                        | `Ctrl+C` / `Ctrl+D` |

## Pemecahan masalah

Jika Anda mengalami kesulitan menjalankan Obsidian CLI:

- Pastikan Anda menggunakan [[Perbarui Obsidian|versi penginstal Obsidian]] terbaru (1.12.7 atau lebih baru).
- Jika Anda baru saja memperbarui Obsidian dari versi sebelumnya, matikan pengaturan CLI lalu aktifkan kembali, kemudian izinkan Obsidian melakukan pendaftaran PATH otomatis.
- Mulai ulang terminal Anda setelah mendaftarkan CLI agar perubahan PATH berlaku.
- Obsidian harus berjalan. CLI terhubung ke instance Obsidian yang sedang berjalan.

### Windows

Obsidian CLI di Windows memerlukan penginstal Obsidian 1.12.7+. Lihat [[Perbarui Obsidian|Pembaruan versi penginstal]].

Windows menggunakan redirector terminal yang menghubungkan Obsidian ke stdin/stdout dengan benar. Ini diperlukan karena Obsidian biasanya berjalan sebagai aplikasi GUI yang tidak kompatibel dengan output terminal di Windows. Ketika Anda memasang Obsidian 1.12.7+, redirector terminal `Obsidian.com` akan ditambahkan di folder tempat Anda memasang file `Obsidian.exe`.

Pendaftaran CLI menambahkan Obsidian ke variabel PATH pengguna Anda, yang hanya berlaku setelah Anda memulai ulang terminal.

### macOS

Pendaftaran CLI membuat symlink di `/usr/local/bin/obsidian` yang menunjuk ke biner CLI yang dibundel di dalam aplikasi. Ini memerlukan hak administrator — Anda akan diminta melalui dialog sistem.

Periksa bahwa symlink ada dan menunjuk ke biner yang benar:

```
ls -l /usr/local/bin/obsidian
```

Jika symlink tidak ada, buat secara manual:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Jika Anda sebelumnya mendaftarkan CLI dengan versi Obsidian yang lebih lama, Anda mungkin memiliki entri PATH yang tersisa di `~/.zprofile`. Proses pendaftaran baru menghapus ini secara otomatis, tetapi jika masih ada, Anda bisa dengan aman menghapus baris yang dimulai dengan `# Added by Obsidian` dari `~/.zprofile`.

### Linux

Pendaftaran CLI menyalin biner CLI ke `~/.local/bin/obsidian`. Ini dilakukan karena beberapa metode instalasi Linux berjalan dari direktori sementara yang tidak bisa di-symlink secara persisten.

Pastikan `~/.local/bin` ada di PATH Anda. Tambahkan yang berikut ke `~/.bashrc` atau `~/.zshrc` Anda jika belum ada:

```
export PATH="$PATH:$HOME/.local/bin"
```

Periksa bahwa biner ada:

```
ls -l ~/.local/bin/obsidian
```

Jika biner tidak ada, salin secara manual dari direktori instalasi Obsidian:

```
cp /path/to/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```

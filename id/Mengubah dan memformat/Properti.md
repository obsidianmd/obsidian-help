---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Properti memungkinkan Anda mengorganisasi informasi tentang sebuah catatan. Properti berisi data terstruktur seperti teks, tautan, tanggal, kotak centang, dan angka.'
aliases:
  - Topik lanjutan/YAML front matter
---
Properti memungkinkan Anda mengorganisir informasi tentang sebuah catatan. Properti berisi data terstruktur seperti teks, tautan, tanggal, kotak centang, dan angka. Properti juga dapat digunakan dalam kombinasi dengan [[Plugin komunitas]] yang dapat melakukan hal-hal berguna dengan data terstruktur Anda.

## Menambahkan properti ke catatan

Ada beberapa cara untuk menambahkan properti ke catatan:

- Gunakan [[Palet perintah|perintah]] **Tambah properti berkas**.
- Gunakan [[Pintasan|pintasan keyboard]] **`Cmd/Ctrl+;`**.
- Pilih **Tambah properti berkas** dari menu **Opsi lainnya** (dimunculkan oleh ikon tiga titik atau dengan mengklik kanan tab).
- Ketik `---` di bagian paling awal file.

Setelah Anda menambahkan properti, sebuah baris akan muncul di bagian atas file dengan dua input: _nama_ properti dan _value_ properti.

Untuk nama, Anda dapat memilih apa saja yang Anda suka. Obsidian menyediakan beberapa properti bawaan: `tags`, `cssclasses`, dan `aliases`.

Setelah Anda memilih nama properti, Anda dapat memberikannya sebuah value.

### Tipe properti

Selain nama dan value, properti juga memiliki _tipe_. Tipe properti menentukan jenis value apa yang dapat disimpannya dan bagaimana Obsidian menanganinya. Untuk mengubah tipe properti, klik ikon tipe di samping nama properti dan pilih opsi yang berbeda. Anda juga dapat mengelola tipe properti menggunakan plugin inti [[Tampilan properti]].

Obsidian mendukung tipe properti berikut:

- **[[#Teks]]**
- **[[#Daftar]]**
- **[[#Angka]]**
- **[[#Kotak centang]]**
- **[[#Tanggal]]**
- **[[#Tanggal & waktu]]**
- **[[#Tag]]**

Setelah tipe properti ditetapkan ke nama properti, semua properti dengan nama tersebut di seluruh brankas Anda akan menggunakan tipe yang sama.

## Penggunaan lanjutan

### Mencari properti

Properti memiliki [[Cari|sintaksis pencarian]] tersendiri yang dapat Anda gunakan bersama dengan istilah dan operator pencarian lainnya. [[Cari#Mencari properti|Lihat sintaksis pencarian untuk properti]].

### Template

Anda dapat menambahkan properti ke [[Plugin/Template|Template]].

Ketika Anda menyisipkan templat ke catatan aktif, semua properti dari templat akan ditambahkan ke catatan. Obsidian juga akan menggabungkan properti yang sudah ada di catatan Anda dengan properti di templat. ^templates-properties

### Mengganti nama properti

Anda dapat mengganti nama properti dengan mengklik kanan properti tersebut di [[Tampilan properti|tampilan Semua properti]].

### Mode tampilan

Anda dapat mengubah cara properti ditampilkan di catatan Anda dengan membuka **[[Pengaturan]] → Editor → Properti di dokumen**. Pilihannya adalah:

- **Ditampilkan** (bawaan) – menampilkan properti di bagian atas catatan, jika ada.
- **Tersembunyi** – menyembunyikan properti, masih dapat ditampilkan di bilah samping melalui [[Tampilan properti]].
- **Sumber** – menampilkan properti dalam format teks biasa YAML.

### Cuplikan CSS

Anda dapat menggunakan [[Cuplikan CSS]] untuk mengubah tampilan catatan tertentu.

### Tidak didukung

Beberapa fitur saat ini belum didukung di Obsidian:

- **Properti bersarang**: Untuk melihat properti bersarang, kami merekomendasikan menggunakan [[Tampilan dan mode penyuntingan#Mode sumber|mode sumber]].
- **Penyuntingan properti massal**: Untuk penyuntingan massal yang mendalam di luar [[Tampilan properti]], kami merekomendasikan menggunakan alat penyuntingan massal seperti VSCode, skrip, dan plugin komunitas.
- **Markdown dalam properti**: Ini adalah batasan yang disengaja karena properti dimaksudkan untuk potongan informasi kecil dan atomik yang dapat dibaca oleh manusia dan mesin.

## Pintasan keyboard

### Menambahkan properti

| Aksi | Pintasan keyboard |
|---|---|
|Tambah properti baru|`Cmd + ;`|

### Menavigasi antar properti

Ketika sebuah properti difokuskan

| Aksi | Pintasan keyboard |
|---|---|
|Fokus properti berikutnya|`Down arrow` atau `Tab`|
|Fokus properti sebelumnya|`Up arrow` atau `Shift+Tab`|
|Lompat ke editor|`Alt+Down arrow`|

### Memilih properti

| Aksi | Pintasan keyboard |
|---|---|
|Perluas pilihan ke atas|`Shift+Up arrow`|
|Perluas pilihan ke bawah|`Shift+Down arrow`|
|Pilih semua|`Cmd+A`|

### Mengedit properti

| Aksi | Pintasan keyboard |
|---|---|
|Edit nama properti|`Left arrow`|
|Edit value properti|`Right arrow`|
|Fokus properti|`Escape`|
|Hapus properti|`Cmd+Backspace`<br><br>jika ada properti yang dipilih, ini akan menghapus pilihan tersebut.|
|Urungkan|`Cmd+Z`|
|Ulangi|`Cmd+Shift+Z`|

### Vim (lanjutan)

| Aksi | Pintasan keyboard |
|---|---|
|Pindah ke bawah|`j`|
|Pindah ke atas|`k`|
|Fokus kunci|`h`|
|Fokus value|`l`|
|Fokus value (Kursor di akhir)|`A`|
|Fokus value (Kursor di awal)|`i`|
|Buat properti baru|`o`|

## Format properti

Properti disimpan dalam format [YAML](https://yaml.org/) di bagian atas file. YAML adalah format populer yang mudah dibaca oleh manusia dan komputer.

Nama properti dipisahkan dari valuenya oleh titik dua diikuti spasi:

```yaml
---
name: value
---
```

Meskipun urutan setiap pasangan nama-value tidak penting, setiap nama harus unik dalam sebuah catatan. Misalnya, Anda tidak dapat memiliki lebih dari satu properti `tags`.

Value dapat berupa [[#Teks|teks]], [[#Angka|angka]], [[#Kotak centang|kotak centang]], [[#Tanggal|tanggal]], [[#Tanggal & waktu|tanggal dan waktu]], atau [[#Daftar|daftar]].

### Teks

Properti teks berisi satu baris teks. Pemformatan Markdown tidak dirender dalam properti teks. Tagar tidak membuat tag ketika digunakan dalam properti teks.

Properti teks dapat berisi URL dan [[Tautan internal]] menggunakan sintaksis `[[Link]]`. [[Tautan internal]] dalam properti teks harus diapit dengan tanda kutip. Obsidian akan menambahkan ini secara otomatis jika Anda memasukkan tautan internal ke properti secara manual, tetapi berhati-hatilah untuk menambahkannya saat menggunakan plugin templat.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Daftar

Properti daftar berisi beberapa value. Setiap value dalam daftar muncul di barisnya sendiri, didahului oleh tanda hubung (-) dan spasi.

Value daftar dapat berisi teks, angka, dan [[Tautan internal]]. Saat menggunakan [[Tautan internal]] dalam properti daftar, apit dengan tanda kutip.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Angka

Properti tipe angka harus selalu berupa angka literal, bukan ekspresi dengan operator. Bilangan bulat dan desimal keduanya diperbolehkan.

```yaml
---
year: 1977
pie: 3.14
---
```

### Kotak centang

Properti kotak centang bernilai `true` atau `false`. Dalam pratinjau langsung, ini ditampilkan sebagai kotak centang.

```yaml
---
favorite: true
reply: false
last: # Nilai tak tentu; sering diperlakukan sebagai false
```

### Tanggal

Properti tanggal disimpan dalam format berikut:

```yaml
---
date: 2020-08-21
---
```

Pemilih tanggal mengikuti format tanggal dan waktu bawaan sistem operasi Anda. Anda dapat mengubahnya di preferensi sistem Anda:

> [!info]- Windows
> **[[Pengaturan]] → Time & Language → Language & Region → Regional Format → Change Formats**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **System Preferences → Language and Region → Date format**
> 
> ![[Mac-OS-DateTime.png|450]]

Dengan plugin [[Catatan harian]] diaktifkan, properti tanggal juga akan berfungsi sebagai tautan internal ke catatan harian yang sesuai untuk tanggal tersebut.

![[Catatan harian#^daily-notes-date]]

### Tanggal & waktu

Properti tanggal & waktu mencakup tanggal dan waktu tertentu, disimpan dalam format berikut:

```yaml
---
time: 2020-08-21T10:30:00
---
```

Seperti [[#Tanggal|properti tanggal]], pemilih tanggal dan waktu mengikuti format bawaan sistem operasi Anda. Anda dapat mengubahnya di preferensi sistem Anda.

### Tag

Properti tag adalah tipe properti khusus yang digunakan secara eksklusif oleh properti `tags`. Tipe properti ini tidak dapat ditetapkan ke properti lain.

Properti tag diformat sebagai daftar, dengan setiap tag di barisnya sendiri didahului oleh tanda hubung (-) dan spasi.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

Properti `tags` adalah salah satu [[#Properti bawaan]] Obsidian. Lihat [[Tag]] untuk informasi lebih lanjut tentang penggunaan tag di Obsidian.

### Properti JSON

Meskipun kami merekomendasikan menggunakan YAML untuk mendefinisikan properti, Anda juga dapat mendefinisikan properti menggunakan [JSON](https://www.json.org/):

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

Perhatikan bahwa blok JSON akan dibaca, diinterpretasikan, dan disimpan sebagai YAML.

## Properti bawaan

Obsidian dilengkapi dengan serangkaian properti bawaan:

| Properti     | Tipe | Deskripsi                                                    |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | Daftar | Lihat [[Mengubah dan memformat/Tag\|Tag]].                 |
| `aliases`    | Daftar | Lihat [[Alias]].                                            |
| `cssclasses` | Daftar | Memungkinkan Anda menata catatan individual menggunakan [[Cuplikan CSS]]. |

### Properti untuk Obsidian Publish

Properti bawaan berikut dapat digunakan dengan [[Pengantar Obsidian Publish|Obsidian Publish]]:

| Properti      | Deskripsi                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Lihat [[Publikasikan konten Anda#Secara otomatis memilih data untuk dipublikasikan\|Secara otomatis memilih data untuk dipublikasikan]]. |
| `permalink`   | Lihat [[Permalink\|Permalink]].                                                                            |
| `description` | Lihat [[Pratinjau tautan media sosial#Deskripsi\|Deskripsi]].                                              |
| `image`       | Lihat [[Pratinjau tautan media sosial#Gambar\|Gambar]].                                                    |
| `cover`       | Lihat [[Pratinjau tautan media sosial#Gambar\|Gambar]].                                                    |

### Properti yang tidak digunakan lagi

Properti ini tidak digunakan lagi sejak Obsidian 1.4 dan harus diganti dengan padanan modernnya. Dukungan untuk properti ini sebagai [[#Properti bawaan]] dihentikan di Obsidian 1.9.

| Properti | Deskripsi |
|-|-|
| `tag` | Alias yang tidak digunakan lagi untuk `tags`. |
| `alias` | Alias yang tidak digunakan lagi untuk `aliases`. |
| `cssclass` | Alias yang tidak digunakan lagi untuk `cssclasses`. |

> [!tip] Jika Anda perlu mengonversi file di brankas Anda ke format [[#Properti bawaan]], Anda dapat menggunakan [[Importir format Markdown]] untuk mengubah brankas Anda secara massal.

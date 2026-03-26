---
permalink: tags
aliases:
  - Bagaimana/Bekerja dengan tag
---
Tag adalah kata kunci atau topik yang membantu Anda menemukan catatan yang diinginkan dengan cepat.

## Menambahkan tag ke catatan

Untuk membuat tag, masukkan simbol tanda pagar (`#`) di editor, diikuti dengan kata kunci. Misalnya, `#meeting`.

Anda juga dapat menambahkan tag menggunakan [[Properti|properti]] `tags`. Tag dalam YAML harus selalu diformat sebagai daftar:

```yaml
---
tags:
  - recipe
  - cooking
---
```

## Menemukan catatan menggunakan tag

Untuk menemukan catatan menggunakan plugin [[Cari]], gunakan [[Cari#Operator pencarian|operator pencarian]] `tag` dalam istilah pencarian Anda, misalnya `tag:#meeting`.

Anda juga dapat mencari tag dengan mengkliknya di catatan Anda.

Untuk menemukan catatan menggunakan plugin [[Panel tag|Panel tag]], pilih **Tags: Show tags** di [[Palet perintah]], lalu pilih tag yang ingin Anda cari.

## Tag bertingkat

Tag bertingkat mendefinisikan hierarki tag yang memudahkan pencarian dan penyaringan tag terkait.

Buat tag bertingkat dengan menggunakan garis miring (`/`) dalam nama tag, misalnya `#inbox/to-read` dan `#inbox/processing`.

- Di [[Cari]], `tag:inbox` akan mencocokkan `#inbox` serta semua tag bertingkat seperti `#inbox/to-read`.
- Di [[Panel tag]], tag bertingkat ditampilkan sebagai bagian dari tag induknya.
- Di [[Pengenalan Basis|Basis]], tag bertingkat dikenali oleh fungsi [[Fungsi#hasTag|`hasTag`]], sehingga `file.hasTag("a")` akan mencocokkan baik `#a` maupun `#a/b`.

## Format tag

Anda dapat menggunakan karakter berikut dalam tag Anda:

- Huruf alfabet
- Angka
- Garis bawah (`_`)
- Tanda hubung (`-`)
- Garis miring (`/`) untuk [[#Tag bertingkat]]

Tag harus mengandung setidaknya satu karakter non-numerik. Misalnya, #1984 bukan tag yang valid, tetapi #y1984 valid.

Tag tidak peka huruf besar-kecil. Misalnya, #tag dan #TAG akan diperlakukan sebagai identik.

> [!note]
> Tag akan ditampilkan dengan huruf besar-kecil sesuai saat pertama kali dibuat di [[Panel tag]].
> Misalnya, membuat #Tag lalu #TAG akan menampilkan #Tag untuk keduanya.

Tag tidak boleh mengandung spasi. Untuk memisahkan dua kata atau lebih, Anda dapat menggunakan format berikut:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case

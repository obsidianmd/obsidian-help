---
permalink: embeds
cssclasses:
  - soft-embed
aliases:
  - Bagaimana/Menyematkan berkas
---
Pelajari cara menyematkan catatan dan media lain ke dalam catatan Anda. Dengan menyematkan file di catatan Anda, Anda dapat menggunakan kembali konten di seluruh brankas Anda.

Untuk menyematkan file di brankas Anda, tambahkan tanda seru (`!`) di depan [[Tautan internal|Tautan internal]]. Anda dapat menyematkan file dalam format apa pun yang termasuk [[Format file yang diterima]].

> [!tip] Sematkan dengan Seret dan Lepas
> Di desktop, Anda juga dapat menyeret dan melepaskan file yang didukung langsung ke catatan Anda untuk menyematkannya secara otomatis.

## Menyematkan catatan di catatan lain

Untuk menyematkan catatan:

```md
![[Tautan internal]]
```

Anda juga dapat menyematkan tautan ke [[Tautan internal#Tautan ke judul dalam catatan|judul]] dan [[Tautan internal#Tautan ke blok dalam catatan|blok]].

```md
![[Tautan internal#^b15695]]
```

Teks di bawah ini adalah contoh blok yang disematkan:

![[Tautan internal#^b15695]]

## Menyematkan gambar di catatan

Untuk menyematkan gambar:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Anda dapat mengubah dimensi gambar dengan menambahkan `|640x480` ke tujuan tautan, di mana 640 adalah lebar dan 480 adalah tinggi.

```md
![[Engelbart.jpg|100x145]]
```

Jika Anda hanya menentukan lebar, gambar akan diskalakan sesuai rasio aspek aslinya. Misalnya, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Anda juga dapat menyematkan gambar yang dihosting secara eksternal menggunakan tautan markdown. Anda dapat mengontrol lebar dan tinggi dengan cara yang sama seperti tautan wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Menyematkan file audio di catatan

Untuk menyematkan file audio:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Menyematkan PDF di catatan

Untuk menyematkan PDF:

```md
![[Document.pdf]]
```

Anda juga dapat membuka halaman tertentu di PDF, dengan menambahkan `#page=N` ke tujuan tautan, di mana `N` adalah nomor halaman:

```md
![[Document.pdf#page=3]]
```

Anda juga dapat menentukan tinggi dalam piksel untuk penampil PDF yang disematkan, dengan menambahkan `#height=[number]` ke tautan. Misalnya:

```md
![[Document.pdf#height=400]]
```

## Menyematkan daftar di catatan

Untuk menyematkan daftar dari catatan lain, pertama tambahkan [[Tautan internal#Tautan ke blok dalam catatan|identifikasi blok]] ke daftar Anda:

```md

- item daftar 1
- item daftar 2

^my-list-id
```

Kemudian tautkan ke daftar menggunakan identifikasi blok:

```md
![[Catatan saya#^my-list-id]]
```

## Menyematkan hasil pencarian

![[Cari#Menyematkan hasil pencarian di catatan]]

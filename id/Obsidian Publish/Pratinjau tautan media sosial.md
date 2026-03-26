---
permalink: publish/social-share
---
Banyak jejaring sosial menampilkan pratinjau kaya untuk situs web Anda ketika pengguna membagikan tautannya. Menggunakan [[Properti]], Anda dapat menyesuaikan bagaimana catatan Anda muncul di pratinjau.

> [!warning] Peringatan
> Tag yang ditimpa di bagian ini **hanya** terlihat oleh perayap web. Peramban web biasa akan menerima halaman yang tidak dimodifikasi demi performa.

## Deskripsi

Obsidian secara otomatis menghasilkan deskripsi berdasarkan konten catatan, tetapi Anda dapat menyediakan sendiri menggunakan `description`.

```yaml
---
description: Pengenalan tentang tata surya kita.
---
```

> [!note] Tag meta
> `description` menimpa deskripsi yang dihasilkan otomatis di `<meta name="description" content="...">` dan padanannya untuk `og:description` dan `twitter:description`.

## Gambar

Anda dapat menggunakan gambar kustom untuk pratinjau tautan, dengan menambahkan `image` atau `cover` beserta alur menuju gambar tersebut. Gambar harus diunggah ke Publish.

Alur dapat berupa alur absolut dari akar brankas Anda:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Alur menuju gambar bersifat peka huruf besar/kecil. Pada contoh sebelumnya, kita memiliki alur menuju gambar bernama `Cover image.png`. Alur di bawah ini tidak akan berfungsi, karena menggunakan huruf besar/kecil yang salah.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Sebagai pengganti alur absolut di brankas Anda, Anda juga dapat menggunakan url eksternal:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` dan `cover` bersifat identik. Gunakan hanya salah satu dari keduanya.

> [!note] Tag meta
> `image` dan `cover` menimpa gambar yang dihasilkan otomatis di `<meta property="og:image" content="...">`.

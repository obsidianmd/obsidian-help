---
permalink: aliases
cssclasses:
  - soft-embed
aliases:
  - Bagaimana/Menambah alias ke catatan
---
Jika Anda ingin mereferensikan sebuah file menggunakan nama yang berbeda, pertimbangkan untuk menambahkan _alias_ pada catatan tersebut. Alias adalah nama alternatif untuk sebuah catatan.

Gunakan alias untuk hal-hal seperti singkatan, nama panggilan, atau untuk merujuk catatan dalam bahasa yang berbeda.

Jika Anda hanya ingin mengubah tampilan tautan di satu tempat, lihat cara [[Tautan internal#Mengubah teks tampilan tautan|Mengubah teks tampilan tautan]] sebagai gantinya.

![[Tautan internal#^callout-internal-links-link-text]]

## Menambahkan alias ke catatan

Untuk menambahkan alias pada catatan, tambahkan properti `aliases` di [[Properti]] catatan. Alias harus selalu diformat sebagai daftar dalam YAML.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Menautkan ke catatan menggunakan alias

Untuk menautkan ke catatan menggunakan alias:

1. Mulai ketikkan alias dalam sebuah [[Tautan internal|tautan internal]]. Setiap alias akan muncul dalam daftar saran, dengan ikon panah melengkung di sampingnya.
2. Tekan `Enter` untuk memilih alias.

Obsidian membuat tautan dengan alias sebagai teks tampilan kustomnya, misalnya `[[Artificial Intelligence|AI]]`.

> [!note] Catatan
> Alih-alih hanya menggunakan alias sebagai tujuan tautan (`[[AI]]`), Obsidian menggunakan format tautan `[[Artificial Intelligence|AI]]` untuk memastikan interoperabilitas dengan aplikasi lain yang menggunakan format tautan wiki.

## Menemukan sebutan yang belum tertaut untuk alias

Dengan menggunakan [[Backlink]], Anda dapat menemukan sebutan yang belum tertaut dari alias.

Misalnya, setelah menetapkan "AI" sebagai alias untuk "Artificial intelligence", Anda dapat melihat penyebutan "AI" di catatan lain.

Jika Anda menautkan sebutan yang belum tertaut ke alias, Obsidian mengubah sebutan tersebut menjadi [[Tautan internal|tautan internal]] dengan alias sebagai teks tampilannya.

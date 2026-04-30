---
permalink: web-clipper/highlight
aliases:
  - Sorot halaman web
---
[[Pengantar Obsidian Web Clipper|Web Clipper]] memungkinkan Anda menyorot teks pada halaman web, dan memilih elemen yang ingin Anda simpan ke Obsidian. Sorotan disimpan sehingga Anda dapat melihatnya saat Anda kembali ke halaman tersebut.

Sorotan dapat disimpan ke Obsidian menggunakan ekstensi. Anda dapat menentukan opsi penyorot di pengaturan ekstensi.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Menggunakan penyorot

Penyorot dapat digunakan pada halaman web langsung atau [[Pembaca]]. Dalam tampilan Reader, membuat seleksi teks memberi Anda opsi untuk menyorotnya.

Anda juga dapat secara otomatis menambahkan seleksi ke sorotan Anda, dengan mengaktifkan penyorot:

- ![[lucide-highlighter.svg#icon]] **Ikon penyorot** di panel ekstensi atau bilah alat Reader.
- **Pintasan keyboard** yang dapat disesuaikan di pengaturan ekstensi.
- **Menu konteks** dengan mengklik kanan halaman web yang sedang Anda kunjungi.

Setelah Penyorot diaktifkan, teks, gambar, dan elemen yang dipilih akan ditambahkan ke sorotan Anda. Semua metode di atas juga memungkinkan Anda untuk keluar dari penyorot.

## Menambahkan sorotan ke catatan

Ada tiga opsi untuk menyisipkan sorotan ke dalam catatan yang dikliping:

- **Sorot konten laman web** — menambahkan sorotan langsung ke teks dengan [[Obsidian Flavored Markdown|sintaksis]] `==highlight==`.
- **Ganti konten laman web** — mengembalikan daftar sorotan, tanpa konten halaman apa pun.
- **Tidak melakukan apa-apa** — mengembalikan konten asli tanpa sorotan.
 
Opsi-opsi ini mengubah [[Variabel|variabel]] `{{content}}` di templat Anda. Anda juga dapat menambahkan sorotan langsung ke templat Anda menggunakan variabel `{{highlights}}`, misalnya:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Melihat dan mencari sorotan

Semua sorotan yang Anda buat dapat dilihat di halaman Sorotan Anda. Anda dapat membuka halaman ini dengan membuka **Pengaturan** → **Penyorot**.

## Mengekspor sorotan

Sorotan dapat diekspor ke file `.json`, baik di halaman Pengaturan maupun di halaman Sorotan.

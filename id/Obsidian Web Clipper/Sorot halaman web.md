---
permalink: web-clipper/highlight
---
[[Pengantar Obsidian Web Clipper|Web Clipper]] memungkinkan Anda menyorot teks pada halaman web, dan memilih elemen yang ingin Anda simpan ke Obsidian. Sorotan Anda disimpan, sehingga Anda dapat mengunjunginya kembali saat Anda kembali ke halaman tersebut.

Sorotan dapat [[Kliping halaman web|ditangkap]] dan disimpan ke Obsidian saat Anda membuka ekstensi.

## Mengaktifkan penyorot

Anda dapat mengaktifkan penyorotan dengan beberapa cara, tergantung pada peramban Anda:

- Ikon penyorot di panel ekstensi.
- Pintasan keyboard, untuk mengaktifkan ekstensi dari keyboard Anda.
- Menu konteks, dengan mengklik kanan halaman web yang sedang Anda kunjungi.

Setelah penyorotan diaktifkan, Anda dapat memilih teks, gambar, dan elemen yang ingin Anda sorot.

## Pengaturan penyorot

Anda dapat mengubah perilaku penyorot dengan membuka pengaturan Web Clipper. Di sini Anda juga dapat mengekspor sorotan Anda ke file `.json`.

Ada tiga opsi untuk menyisipkan sorotan ke dalam catatan yang dikliping melalui [[Variabel|variabel]] `{{content}}`:

- **Sorot konten laman web** — menambahkan sorotan langsung ke teks dengan [[Obsidian Flavored Markdown|sintaksis]] `==highlight==`.
- **Ganti konten laman web** — mengembalikan daftar sorotan, tanpa konten halaman apa pun.
- **Tidak melakukan apa-apa** — mengembalikan konten asli tanpa sorotan.

Anda dapat menambahkan sorotan langsung ke templat Anda menggunakan variabel `{{highlights}}`, misalnya:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

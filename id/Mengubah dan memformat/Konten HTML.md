---
permalink: html
publish: true
mobile: true
description: 'Pelajari cara menggunakan HTML di Obsidian, termasuk keterbatasan dalam rendering Markdown, dan persyaratan blok HTML.'
aliases:
  - Topik lanjutan/Sanitisasi HTML
---
Obsidian mendukung HTML agar Anda dapat menampilkan catatan sesuai keinginan, atau bahkan [[Sematkan halaman web|menyematkan halaman web]]. Mengizinkan HTML di dalam catatan Anda memiliki risiko. Untuk mencegah kode berbahaya menimbulkan kerusakan, Obsidian _membersihkan_ (sanitize) semua HTML di catatan Anda.

> [!example] 
> Elemen `<script>` biasanya memungkinkan Anda menjalankan JavaScript setiap kali dimuat. Jika Obsidian tidak membersihkan HTML, penyerang dapat meyakinkan Anda untuk menempelkan teks berisi JavaScript yang mengekstrak informasi sensitif dari komputer Anda dan mengirimkannya kembali kepada mereka.

Meskipun demikian, karena sintaksis Markdown tidak mendukung semua bentuk penyesuaian gaya, menggunakan HTML yang telah dibersihkan bisa menjadi cara lain untuk meningkatkan kualitas catatan Anda. Kami telah menyertakan beberapa penggunaan HTML yang lebih umum.

## Batasan HTML

Obsidian memiliki batasan spesifik saat menggunakan HTML di catatan Anda:

### Tidak ada Markdown di dalam HTML

Obsidian tidak merender sintaksis Markdown di dalam elemen HTML. Ini adalah pilihan desain yang disengaja untuk optimasi kinerja dan menjaga kompleksitas parser tetap rendah saat mengelola dokumen besar.

Misalnya, ini tidak akan berfungsi seperti yang diharapkan:

```md
<div>
Ini **tidak akan** menjadi tebal dan ini `tidak akan` menjadi kode.
</div>
```

### Blok HTML harus berdiri sendiri

Blok HTML harus lengkap dan tidak boleh mengandung baris kosong di dalamnya. Baris kosong akan memecah blok HTML.

Ini akan berfungsi:

```md
<table>
<tr>
<td>Konten di sini</td>
</tr>
</table>
```

Ini tidak akan berfungsi dengan benar:

```md
<table>

<tr>

<td>Konten di sini</td>

</tr>

</table>
```

### Ketika Markdown tampak berfungsi di dalam HTML

Beberapa tag HTML inline seperti `<span>` atau `<a>` memiliki fungsionalitas terbatas dan mungkin tampak merender Markdown, tetapi sebenarnya bukan itu yang terjadi. Markdown diproses di luar konteks HTML.

Untuk detail lebih lanjut tentang bagaimana Obsidian menangani Markdown, lihat [[Obsidian Flavored Markdown]].

## Penggunaan HTML umum

> [!info] Detail lebih lanjut tentang penggunaan `<iframe>` dapat ditemukan di [[Sematkan halaman web]].

### Komentar

[[Sintaksis format dasar#Komentar|Komentar Markdown]] adalah cara yang disarankan untuk menambahkan komentar tersembunyi di dalam catatan Anda. Namun beberapa metode konversi catatan Markdown, seperti [Pandoc](https://pandoc.org), memiliki dukungan terbatas untuk komentar Markdown. Dalam kasus tersebut, Anda dapat menggunakan `<!-- Komentar HTML -->` sebagai gantinya!

### Garis bawah

Jika Anda perlu dengan cepat menggarisbawahi item di catatan Anda, Anda dapat menggunakan `<u>Contoh</u>` untuk membuat <u>teks bergaris bawah Anda</u>.

### Span/Div

Tag span dan div dapat digunakan untuk menerapkan kelas kustom dari [[Cuplikan CSS|cuplikan CSS]], atau penyesuaian gaya yang didefinisikan secara kustom, pada area teks yang dipilih. Misalnya, menggunakan `<span style="font-family: cursive">teks Anda</span>` dapat memungkinkan Anda dengan cepat <span style="font-family: cursive">mengubah font Anda</span>.

## Teks dicoret

Perlu mencoret <s>beberapa teks</s>? Gunakan `<s>ini</s>` untuk mencoretnya.

---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Pelajari cara menautkan ke catatan, lampiran, dan file lainnya dari catatan Anda, menggunakan tautan internal.'
aliases:
  - Bagaimana/Tautan internal
  - Bagaimana/Tautan ke blok
---
Pelajari cara menautkan ke catatan, lampiran, dan file lain dari catatan Anda, menggunakan _tautan internal_. Dengan menautkan catatan, Anda dapat membuat jaringan pengetahuan. ^b15695

Obsidian dapat secara otomatis memperbarui tautan internal di brankas Anda saat Anda mengganti nama file. Jika Anda ingin diminta konfirmasi terlebih dahulu, Anda dapat menonaktifkannya di:

**[[Pengaturan]]** → **[[Pengaturan#Berkas dan Tautan|Berkas & Tautan]]** → **[[Pengaturan#Secara otomatis perbarui tautan internal|Secara otomatis perbarui tautan internal]]**.

## Format yang didukung untuk tautan internal

Obsidian mendukung format tautan berikut:

- Tautan wiki: `[[Three laws of motion]]` atau `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` atau `[Three laws of motion](Three%20laws%20of%20motion.md)`

Contoh di atas adalah setara, dan keduanya tampil dengan cara yang sama di editor serta menaut ke catatan yang sama.

> [!note] Catatan
> Saat menggunakan format Markdown, pastikan untuk [mengenkode URL](https://en.wikipedia.org/wiki/Percent-encoding) tujuan tautan. Misalnya, spasi menjadi `%20`.

Secara bawaan, karena formatnya yang lebih ringkas, Obsidian menghasilkan tautan menggunakan format tautan wiki. Jika interoperabilitas penting bagi Anda, Anda dapat menonaktifkan tautan wiki dan menggunakan tautan Markdown sebagai gantinya.

Untuk menggunakan format Markdown:

1. Buka **[[Pengaturan]]**.
2. Di bawah **Berkas & Tautan**, nonaktifkan **Gunakan \[\[Wikilink\]\]**.

Meskipun Anda menonaktifkan format tautan wiki, Anda masih dapat melengkapi otomatis tautan dengan mengetik dua tanda kurung siku `[[`. Saat Anda memilih salah satu file yang disarankan, Obsidian akan menghasilkan tautan Markdown sebagai gantinya.

> [!note] Karakter tidak valid
> String yang mengandung karakter berikut mungkin tidak berfungsi sebagai tautan: `# | ^ : %% [[ ]]`.
> 
> Kami menyarankan untuk menghindari penggunaan karakter tersebut dan mempraktikkan [praktik penamaan file yang aman](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names).

## Menautkan ke file

Untuk membuat tautan saat dalam tampilan Pengubah, gunakan salah satu cara berikut:

- Ketik `[[` di editor lalu pilih file yang ingin Anda tautkan.
- Pilih teks di editor lalu ketik `[[`.
- Buka [[Palet perintah]] lalu pilih Tambahkan tautan internal.

![[Peralih cepat#^search-autocomplete-large]]

Meskipun Anda dapat menautkan ke semua [[Format file yang diterima]], tautan ke format file selain Markdown perlu menyertakan extension file, seperti `[[Figure 1.png]]`.

> [!tip] Menambahkan awalan tanda seru (!) pada tautan internal memungkinkan Anda menyematkan konten yang ditautkan. Untuk detail lebih lanjut, lihat [[Sematkan file]].

> [!info] Berkas yang dikecualikan
> File yang cocok dengan pola [[Pengaturan#Berkas yang dikecualikan|Berkas yang dikecualikan]] Anda akan diprioritaskan lebih rendah dalam saran tautan saat membuat tautan internal.

## Menautkan ke judul dalam catatan

Anda dapat menautkan ke judul tertentu dalam catatan, juga dikenal sebagai _tautan jangkar_.

**Menautkan ke judul dalam catatan yang sama**

Untuk menautkan ke judul dalam catatan yang sama, ketik `[[#` untuk mendapatkan daftar judul dalam catatan yang dapat ditautkan.

Misalnya, `[[#Pratinjau file yang ditautkan]]` akan membuat tautan ke [[#Pratinjau file yang ditautkan]].

**Menautkan ke judul di catatan lain**

Untuk menautkan ke judul di catatan lain, tambahkan tanda pagar (`#`) di akhir tujuan tautan, diikuti dengan teks judul.

Misalnya, `[[Tentang Obsidian#Tautan adalah warga kelas satu]]` akan membuat tautan ke [[Tentang Obsidian#Tautan adalah warga kelas satu]].

**Menautkan ke subjudul**

Anda dapat menambahkan beberapa tanda pagar untuk setiap subjudul.

Misalnya, `[[Bantuan dan dukungan#Questions and advice#Report bugs and request features]]` akan membuat tautan ke [[Bantuan dan dukungan#Questions and advice#Report bugs and request features]].

**Mencari judul di seluruh brankas**

Untuk mencari judul di seluruh brankas, gunakan sintaksis `[[## judul]]`.

Misalnya, `[[##` akan mencari secara umum di seluruh brankas, sedangkan `[[## team]]` akan mencari semua judul yang mengandung kata _team_.

> [!info]- Tangkapan layar pencarian tautan judul
>
> ![[internal-links-header.png#interface]]

## Menautkan ke blok dalam catatan

Blok adalah unit teks dalam catatan Anda, seperti paragraf, kutipan blok, atau item daftar.

Anda dapat menautkan ke blok dengan menambahkan `#^` di akhir tujuan tautan, diikuti dengan pengidentifikasi blok yang unik. Misalnya: `[[2023-01-01#^37066d]]`. Untungnya, Anda tidak perlu mencari pengidentifikasi secara manual—saat Anda mengetik tanda sisipan (`^`), daftar saran akan muncul, memungkinkan Anda memilih blok yang benar.

Untuk *paragraf sederhana*, tempatkan spasi diikuti tanda sisipan `^` dan pengidentifikasi blok di akhir baris:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

Untuk *blok terstruktur* (daftar, kutipan, callout, tabel), pengidentifikasi blok harus berada di baris terpisah, dengan baris kosong sebelum dan sesudahnya:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

Untuk *baris tertentu dalam daftar*, pengidentifikasi blok dapat ditempatkan langsung pada poin:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Kami tidak mendukung tautan ke bagian tertentu dari kutipan, callout, dan tabel.

**Mencari blok di seluruh brankas**

Anda juga dapat mencari blok untuk ditautkan dari seluruh brankas menggunakan sintaksis `[[^^blok]]`. Namun, lebih banyak item yang termasuk sebagai blok dibandingkan dengan [[#Menautkan ke judul dalam catatan|tautan judul]], sehingga daftar ini akan jauh lebih panjang.

> [!info]- Tangkapan layar pencarian tautan blok
> ![[link-block-heading.png#interface]]

Anda juga dapat membuat pengidentifikasi blok yang mudah dibaca dengan menambahkan spasi diikuti tanda sisipan (`^`) dan pengidentifikasi. Pengidentifikasi blok hanya dapat terdiri dari huruf Latin, angka, dan tanda hubung.

Misalnya, tambahkan `^quote-of-the-day` di akhir blok:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Sekarang Anda dapat menautkan ke blok tersebut dengan mengetik `[[2023-01-01#^quote-of-the-day]]`.

> [!warning] Interoperabilitas
> Referensi blok bersifat spesifik untuk Obsidian dan bukan bagian dari format Markdown standar. Tautan yang mengandung referensi blok tidak akan berfungsi di luar Obsidian.

## Mengubah teks tampilan tautan

Secara bawaan, Obsidian akan menampilkan teks tautan sebagaimana adanya. Misalnya:
- `[[Example]]` ditampilkan sebagai [[Example]]
- `[[Example#Details]]` ditampilkan sebagai [[Example#Details]]

Anda dapat mengubah cara tautan ditampilkan dengan menyesuaikan teks tampilan tautan:

**Format tautan wiki**:
Gunakan garis vertikal (`|`) untuk mengubah teks tampilan.

- `[[Example|Nama kustom]]` muncul sebagai [[Example|Nama kustom]]
- `[[Example#Details|Nama bagian]]` muncul sebagai [[Example#Details|Nama bagian]]

**Format Markdown**:
Gunakan `[Teks tampilan](URL Tautan)` untuk menyesuaikan cara tautan ditampilkan.

- `[Nama kustom](Example.md)` muncul sebagai [Nama kustom](Example.md)
- `[Nama bagian](Example.md#Details)` muncul sebagai [Nama bagian](Example.md#Details)

Metode ini berguna untuk situasi tertentu di mana Anda ingin mengubah tampilan tautan dalam konteks spesifik. Jika Anda ingin menyiapkan nama tautan alternatif yang dapat digunakan kembali di seluruh brankas, pertimbangkan untuk menggunakan [[Alias|alias]] sebagai gantinya.

Misalnya, jika Anda sering merujuk `[[Three laws of motion]]` sebagai `[[The 3 laws]]`, menambahkan "3 laws" sebagai alias memungkinkan Anda cukup mengetikkan itu saja — tanpa perlu menambahkan teks tampilan kustom setiap kali.

> [!tip] Tip
> Gunakan [[#Mengubah teks tampilan tautan|teks tampilan tautan]] ketika Anda ingin menyesuaikan tampilan tautan *di tempat tertentu*.
> 
> Gunakan [[Alias|alias]] ketika Anda ingin merujuk ke catatan yang sama menggunakan *nama berbeda* di seluruh brankas Anda.
^callout-internal-links-link-text

## Pratinjau file yang ditautkan

> [!note] Catatan
> Untuk mempratinjau file yang ditautkan, Anda harus terlebih dahulu mengaktifkan [[Pratinjau halaman]].

Untuk mempratinjau file yang ditautkan, arahkan kursor ke tautan internal. Saat dalam mode pengeditan, tekan `Ctrl` (atau `Cmd` di macOS) sambil mengarahkan kursor ke tautan. Pratinjau konten file akan muncul di samping kursor.

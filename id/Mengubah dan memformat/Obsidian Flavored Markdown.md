---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: 'Pelajari tentang Obsidian Flavored Markdown, termasuk ekstensi yang didukung dan bagaimana Markdown berinteraksi dengan elemen HTML.'
---
Obsidian berupaya memberikan kemampuan maksimal tanpa merusak format yang sudah ada. Oleh karena itu, kami menggunakan kombinasi varian [[Sintaksis format dasar|Markdown]].

Obsidian mendukung [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/), dan [LaTeX](https://www.latex-project.org/).

> [!tip]- Markdown di dalam HTML
> Obsidian tidak merender sintaksis Markdown di dalam elemen HTML. Ini adalah pilihan desain yang disengaja untuk optimalisasi kinerja dan menjaga kompleksitas parser tetap rendah saat mengelola dokumen besar.
>
> Sebagai contoh, format Markdown seperti `**bold**` atau `` `code` `` tidak akan diproses di dalam `<div>`, `<span>`, `<table>`, atau tag HTML lainnya.
>
> ```md
> <div>
> Ini **tidak akan** menjadi tebal.
> </div>
> ```

### Ekstensi Markdown yang didukung

| Sintaksis       | Deskripsi                                                                    |
| --------------- | ---------------------------------------------------------------------------- |
| `[[Link]]`      | [[Tautan internal]]                                                          |
| `![[Link]]`     | [[Sematkan file]]                                                            |
| `![[Link#^id]]` | [[Tautan internal#Tautan ke blok dalam catatan\|Referensi blok]]              |
| `^id`           | [[Tautan internal#Tautan ke blok dalam catatan\|Mendefinisikan blok]]         |
| `[^id]`         | [[Sintaksis format dasar#Catatan kaki\|Catatan kaki]]                        |
| `%%Text%%`      | [[Sintaksis format dasar#Komentar\|Komentar]]                                |
| `~~Text~~`      | [[Sintaksis format dasar#Tebal, miring, sorotan\|Coret]]                     |
| `==Text==`      | [[Sintaksis format dasar#Tebal, miring, sorotan\|Sorotan]]                   |
| `` ``` ``       | [[Sintaksis format dasar#Blok kode\|Blok kode]]                              |
| `- [ ]`         | [[Sintaksis format dasar#Daftar tugas\|Tugas belum selesai]]                 |
| `- [x]`         | [[Sintaksis format dasar#Daftar tugas\|Tugas selesai]]                       |
| `> [!note]`     | [[Callout]]                                                                  |
| (lihat tautan)  | [[Sintaksis format lanjutan#Tabel\|Tabel]]                                   |

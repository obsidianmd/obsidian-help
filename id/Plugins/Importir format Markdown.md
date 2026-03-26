---
permalink: plugins/format-converter
publish: true
mobile: true
description: Format converter adalah plugin inti yang memungkinkan Anda mengonversi Markdown dari aplikasi lain ke format Obsidian.
aliases:
  - Plugin/Pengonversi format Markdown
---
Importir format Markdown adalah [[Plugin inti|plugin inti]] yang memungkinkan Anda mengonversi Markdown dari aplikasi lain ke format Obsidian. Plugin ini juga memungkinkan Anda mengonversi [[Properti]] tertentu ke format baru yang diperlukan.

> [!warning] Peringatan
> Importir format Markdown mengonversi seluruh brankas Anda berdasarkan pengaturan Anda. [[Cadangkan file Obsidian Anda]] sebelum Anda melakukan konversi.

Untuk mengonversi semua catatan di brankas Anda:

1. Di [[Palet perintah]], pilih **Buka importir Markdown**. Ini juga dapat ditemukan di [[Bilah alat]] dengan ikon **Buka importir Markdown** ![[lucide-binary.svg#icon]].
2. Aktifkan format yang ingin Anda konversi.
3. Klik **Mulai konversi**.

Untuk informasi lebih lanjut, lihat [[Sintaksis format dasar]].

## Format yang didukung

### Roam Research

Importir format Markdown dapat mengonversi sintaksis Roam Research berikut:

- **Tag**: Mengonversi `#tag` dan `#[[tag]]` menjadi `[[tag]]`
- **Sorotan**: Mengonversi `^^highlight^^` menjadi `==highlight==`
- **Item TODO**: Mengonversi `{{[[TODO]]}}` menjadi `[ ]`

### Bear

Importir format Markdown dapat mengonversi sintaksis Bear berikut:

- **Sorotan**: Mengonversi `::highlight::` menjadi `==highlight==`

### Zettelkasten

Importir format Markdown dapat mengonversi sintaksis Zettelkasten berikut:

- **Tautan lengkap**: Mengonversi `[[UID]]` menjadi `[[UID File Name]]`
- **Tautan cantik**: Mengonversi `[[UID]]` menjadi `[[UID File Name|File Name]]`

### [[Properti]]

Sejak Obsidian `1.9.3`, Importir format Markdown dapat mengonversi format [[Properti#Properti yang tidak digunakan lagi|properti yang tidak digunakan lagi]] ke format saat ini:

**Alias**

```yaml
# Sebelum

alias: My Note Title

# Sesudah

aliases:
  - My Note Title
```

**Tag**

```yaml
# Sebelum

tag: project, important

# Sesudah

tags:
  - project
  - important
```

**Kelas CSS**

```yaml
# Sebelum

cssclass: custom-style

# Sesudah

cssclasses:
  - custom-style
```

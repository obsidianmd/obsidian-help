---
permalink: plugins/format-converter
publish: true
mobile: true
description: Format converter adalah plugin inti yang memungkinkan Anda mengonversi Markdown dari aplikasi lain ke format Obsidian.
aliases:
  - Plugin/Pengonversi format Markdown
---
Importir format Markdown memigrasikan [[Properti#Properti yang tidak digunakan lagi|format properti yang tidak digunakan lagi]] ke format saat ini yang digunakan oleh Obsidian.

> [!warning] Cadangkan brankas Anda
> Konversi berlaku untuk seluruh brankas Anda. [[Cadangkan file Obsidian Anda]] sebelum Anda memulai.

Untuk mengonversi properti di catatan Anda:

1. Buka [[Palet perintah]].
2. Pilih **Importir format Markdown: Migrasi metadata awal**.
3. Pilih **Mulai konversi**.

## Format properti yang didukung

Importir memperbarui alias, tag, dan kelas CSS dari format yang tidak digunakan lagi:

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

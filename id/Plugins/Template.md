---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Templat adalah plugin inti yang memungkinkan Anda menyisipkan cuplikan teks yang telah ditentukan sebelumnya ke dalam catatan aktif Anda.
aliases:
  - Plugin/Template
---
Template adalah [[Plugin inti|plugin inti]] yang memungkinkan Anda menyisipkan cuplikan teks yang telah ditentukan sebelumnya ke dalam catatan aktif Anda.

## Mengatur folder template

1. Di pojok kiri bawah, klik **[[Pengaturan]]** ![[lucide-cog.svg#icon]].
2. Di bawah **Plugin inti → Template → Lokasi folder template**, masukkan folder yang berisi template Anda.

## Variabel template

Anda dapat menambahkan informasi dinamis ke template Anda, menggunakan _variabel template_. Saat Anda menyisipkan template yang berisi variabel template, Template menggantikannya dengan nilai yang sesuai.

| Variabel    | Deskripsi                                              |
|-------------|--------------------------------------------------------|
| `{{title}}` | Judul dari catatan aktif.                              |
| `{{date}}`  | Tanggal hari ini. **Format bawaan:** `YYYY-MM-DD`.    |
| `{{time}}`  | Waktu saat ini. **Format bawaan:** `HH:mm`.           |

Baik `{{date}}` maupun `{{time}}` memungkinkan Anda mengubah format bawaan menggunakan _string format_.

Untuk mengatur string format, tambahkan titik dua (`:`) diikuti dengan rangkaian [token format Moment.js](https://momentjs.com/docs/#/displaying/format/), misalnya `{{date:YYYY-MM-DD}}`.

Anda dapat menggunakan `{{date}}` dan `{{time}}` secara bergantian dengan string format, misalnya `{{time:YYYY-MM-DD}}`.

Anda dapat mengubah format tanggal dan waktu bawaan di bawah **[[Pengaturan]] → Template → Format tanggal** dan **[[Pengaturan]] → Template → Format waktu**.

> [!tip] Tip
> Anda juga dapat menggunakan variabel template `{{date}}` dan `{{time}}` di plugin [[Catatan harian]] dan [[Pembuat catatan unik]].

## Membuat template

Di [[#Mengatur folder template|folder template]], [[Kelola catatan#Membuat catatan baru|buat catatan]] yang berisi teks yang ingin Anda tampilkan saat menggunakan template. Anda dapat menggunakan [[#Variabel template|variabel template]] untuk teks dinamis seperti tanggal saat ini.

Misalnya, berikut adalah template untuk catatan belajar:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Konsep Utama


## Detail Penting


## Contoh


## Pertanyaan
- 

## Ringkasan


## Topik Terkait
- [[]]
```

## Menyisipkan template ke dalam catatan aktif

**Penting:** Untuk menyisipkan template, Anda perlu terlebih dahulu [[#Mengatur folder template]].

1. Di bilah alat, klik **Masukkan template**.
2. Pilih template untuk disisipkan pada posisi kursor di catatan aktif.

## Properti template

![[Properti#^templates-properties]]

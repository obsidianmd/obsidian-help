---
permalink: import/templates
description: 'Sesuaikan nama catatan, properti, dan konten yang dibuat oleh Importer.'
---
[[Impor]] memungkinkan Anda mendefinisikan templat yang mengontrol bagaimana catatan Anda diimpor dari aplikasi lain. Ini berarti Anda dapat memodifikasi judul, properti, dan konten catatan yang Anda impor.

## Ubah templat impor

Pilih **Ubah** di atas pratinjau untuk mengedit templat bawaan. Anda dapat mengedit:

- Nama catatan yang ditampilkan sebagai judul sebaris.
- Properti di awal catatan.
- Konten Markdown dari catatan.

Pilih **Simpan** untuk kembali ke pratinjau. Impor mengingat templat sebaris yang telah diedit untuk impor di masa mendatang yang menggunakan format yang sama.

Sebagai alternatif, Anda dapat memuat templat dari file Markdown di brankas saat ini.

## Pratinjau hasil

Pratinjau menampilkan hingga sepuluh sampel dari data yang Anda pilih. Gunakan tombol panah untuk berpindah antar sampel. Perubahan pada pengaturan impor dan templat memperbarui pratinjau sebelum apa pun ditambahkan ke brankas Anda.

Beberapa lampiran, item jarak jauh, dan referensi antar-catatan tidak dapat sepenuhnya diselesaikan hingga impor berjalan. Dalam kasus tersebut, pratinjau mungkin mempertahankan tautan sumber atau menampilkan placeholder.

## Sintaksis templat

Templat Impor menggunakan sintaksis yang terdiri dari variabel, [[Filter]], dan [[Logika]]. Ini menggunakan sintaksis [Knap](https://github.com/obsidianmd/knap) yang sama seperti [[Pengantar Obsidian Web Clipper|Web Clipper]].

Sisipkan variabel dengan kurung kurawal ganda, seperti `{{title}}`, `{{content}}`, atau `{{date}}`. Variabel dapat digunakan dalam nama catatan, properti, dan konten.

Anda dapat memodifikasi variabel menggunakan [[Filter]]. Misalnya untuk mengubah format tanggal menggunakan `{{date|date:"YYYY-MM-DD"}}`. Gunakan [[Logika]] untuk kondisional, perulangan, dan penugasan variabel yang lebih lanjut.

## Variabel

Variabel berikut tersedia untuk digunakan dalam templat Impor mana pun:

| Variabel         | Deskripsi                                                                                                    |
| ---------------- | ------------------------------------------------------------------------------------------------------------ |
| `{{body}}`       | Isi Markdown tanpa properti (tanpa metadata awal).                                                           |
| `{{content}}`    | Markdown lengkap sebelum templat yang dipilih diterapkan.                                                    |
| `{{ctime}}`      | Waktu pembuatan sumber sebagai stempel waktu ISO 8601; kosong jika tidak tersedia.                           |
| `{{date}}`       | Tanggal dan waktu saat ini ketika templat dirender, sebagai stempel waktu ISO 8601.                          |
| `{{importer}}`   | ID Impor, seperti `keep`, `html`, atau `notion-api`.                                                         |
| `{{folder}}`     | Folder induk relatif terhadap brankas terakhir. Kosong jika catatan berada di root brankas.                  |
| `{{mtime}}`      | Waktu modifikasi sumber sebagai stempel waktu ISO 8601; kosong jika tidak tersedia.                          |
| `{{noteName}}`   | Nama catatan akhir yang telah diselesaikan, setelah menghapus karakter tidak valid dan menambahkan sufiks untuk duplikat. |
| `{{path}}`       | Alur relatif terhadap brankas terakhir, termasuk ekstensi `.md`.                                             |
| `{{properties}}` | Objek yang berisi properti metadata awal.                                                                    |
| `{{source}}`     | Objek yang berisi properti yang dihasilkan dan nilai khusus sumber.                                          |
| `{{sourceId}}`   | Pengidentifikasi sumber yang stabil jika impor menyediakannya; jika tidak, kosong.                           |
| `{{time}}`       | Alias untuk `{{date}}`.                                                                                      |
| `{{title}}`      | Judul catatan asli sebelum sanitasi dan deduplikasi.                                                         |

## Nilai sumber untuk properti

Untuk format impor yang mendukung [[Properti]], nilai sumber juga tersedia sebagai variabel tingkat atas untuk kemudahan.

Jika nilai sumber memiliki nama yang sama dengan variabel bersama, akses melalui `{{source}}`. Misalnya, jika sumber impor Anda memiliki properti bernama `content`, properti tersebut tersedia sebagai `{{source.content}}`, sementara `{{content}}` tetap menjadi variabel Impor bawaan.

Gunakan notasi kurung siku ketika nama bidang mengandung spasi, tanda baca, atau karakter khusus lainnya:

```twig
{{source["Project: status"]}}
```

## Contoh templat

Berikut adalah contoh templat yang menggunakan variabel dan [[Filter|filter]]:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

Anda dapat menambahkan data ke dalam catatan secara kondisional menggunakan [[Logika]]:

```twig
{% if tags %}
## Tag
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```

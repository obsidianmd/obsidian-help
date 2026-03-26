---
permalink: web-clipper/logic
description: 'Gunakan kondisional, perulangan, dan penetapan variabel dalam templat Web Clipper.'
---
[[Pengantar Obsidian Web Clipper|Web Clipper]] mendukung logika templat untuk kondisional, perulangan, dan penugasan variabel. Sintaksis ini terinspirasi dari bahasa templating [Twig](https://twig.symfony.com/) dan [Liquid](https://shopify.github.io/liquid/).


> [!warning] Memerlukan versi terbaru
> Fitur logika memerlukan Obsidian Web Clipper 1.0.0 yang belum disetujui di semua toko ekstensi.

## Kondisional

Gunakan `{% if %}` untuk menyertakan konten secara kondisional berdasarkan variabel atau ekspresi.

```twig
{% if author %}
Author: {{author}}
{% endif %}
```

Gunakan `{% else %}` untuk menyediakan konten cadangan, dan `{% elseif %}` untuk merangkai beberapa kondisi:

```twig
{% if status == "published" %}
Live article
{% elseif status == "draft" %}
Draft article
{% else %}
Unknown status
{% endif %}
```

### Operator perbandingan

Operator perbandingan berikut didukung:

| Operator | Deskripsi |
|----------|-------------|
| `==` | Sama dengan |
| `!=` | Tidak sama dengan |
| `>` | Lebih besar dari |
| `<` | Lebih kecil dari |
| `>=` | Lebih besar dari atau sama dengan |
| `<=` | Lebih kecil dari atau sama dengan |
| `contains` | Memeriksa apakah string mengandung substring, atau array mengandung nilai |

Contoh:
- `{% if title == "Home" %}` — kesamaan string
- `{% if price >= 100 %}` — perbandingan numerik
- `{% if title contains "Review" %}` — pemeriksaan substring
- `{% if tags contains "important" %}` — keanggotaan array

### Operator logika

Gabungkan kondisi menggunakan operator logika:

| Operator | Alternatif | Deskripsi                              |
| -------- | ---------- | -------------------------------------- |
| `and`    | `&&`       | Kedua kondisi harus bernilai benar     |
| `or`     | \|\|       | Setidaknya satu kondisi harus benar    |
| `not`    | `!`        | Menegasi sebuah kondisi                |

Contoh:
- `{% if author and published %}` — keduanya harus ada
- `{% if draft or archived %}` — salah satu kondisi
- `{% if not hidden %}` — negasi
- `{% if (premium or featured) and published %}` — kondisi yang dikelompokkan

### Kebenaran (Truthiness)

Ketika variabel digunakan tanpa operator perbandingan, variabel tersebut dievaluasi berdasarkan "truthiness":

- `false`, `null`, `undefined`, string kosong `""`, dan `0` dianggap **falsy**.
- Array kosong `[]` dianggap **falsy**.
- Semua yang lain dianggap **truthy**.

```twig
{% if content %}
Has content
{% endif %}
```

## Menetapkan variabel

Gunakan `{% set %}` untuk membuat atau memodifikasi variabel dalam templat Anda:

```twig
{% set slug = title|lower|replace:" ":"-" %}
File: {{slug}}.md
```

Variabel dapat diatur ke:
- Variabel lain: `{% set name = author %}`
- Literal: `{% set count = 5 %}` atau `{% set label = "Draft" %}`
- Ekspresi dengan filter: `{% set excerpt = content|truncate:100 %}`
- Hasil selektor: `{% set comments = selector:.comment %}`

Variabel yang diatur dengan `{% set %}` dapat digunakan dalam logika templat berikutnya dan dalam keluaran `{{variable}}`.

## Nilai cadangan

Gunakan operator `??` untuk menyediakan nilai cadangan ketika variabel kosong atau tidak terdefinisi:

```twig
{{title ?? "Untitled"}}
```

Jika `title` kosong, tidak terdefinisi, atau falsy, nilai cadangan `"Untitled"` akan digunakan sebagai gantinya.

Ini adalah singkatan dari pernyataan `if` yang setara:

```twig
{% if title %}{{title}}{% else %}Untitled{% endif %}
```

### Merangkai nilai cadangan

Anda dapat merangkai beberapa nilai cadangan:

```twig
{{title ?? headline ?? "No title"}}
```

Ini akan menggunakan `title` jika tersedia, jika tidak `headline`, jika tidak string `"No title"`.

### Dengan filter

Filter mengikat lebih erat daripada `??`, sehingga filter diterapkan sebelum pemeriksaan cadangan:

```twig
{{title|upper ?? "UNTITLED"}}
```

Ini menerapkan `upper` ke `title` terlebih dahulu, kemudian kembali ke `"UNTITLED"` jika hasilnya kosong. Untuk menerapkan filter ke nilai cadangan, gunakan tanda kurung atau ekspresi terpisah:

```twig
{{title ?? "Untitled"|lower}}
```

Ini akan menggunakan `title` jika tersedia, jika tidak menerapkan `lower` ke nilai cadangan, menghasilkan `"untitled"`.

## Perulangan

Gunakan `{% for %}` untuk mengiterasi array:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Sumber perulangan

Anda dapat melakukan perulangan pada:
- Array schema: `{% for item in schema:author %}`
- Hasil selektor: `{% for comment in selector:.comment %}`
- Variabel yang diatur sebelumnya: `{% set items = selector:.item %}{% for item in items %}`

### Variabel perulangan

Di dalam perulangan, Anda memiliki akses ke objek `loop` dengan properti berikut:

| Variabel | Deskripsi |
|----------|-------------|
| `loop.index` | Iterasi saat ini (dimulai dari 1) |
| `loop.index0` | Iterasi saat ini (dimulai dari 0) |
| `loop.first` | `true` jika iterasi pertama |
| `loop.last` | `true` jika iterasi terakhir |
| `loop.length` | Jumlah total item |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (end of list){% endif %}
{% endfor %}
```

Untuk kompatibilitas mundur, Anda juga dapat menggunakan `item_index` (di mana `item` adalah nama variabel iterator Anda) untuk mendapatkan posisi berindeks-0:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Mengakses item array berdasarkan indeks

Gunakan notasi kurung siku untuk mengakses elemen array berdasarkan indeks:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Ini berguna ketika Anda perlu mengakses item dari beberapa array secara paralel:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Notasi kurung siku juga berfungsi dengan properti objek:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### Perulangan bersarang

Perulangan dapat disarangkan untuk struktur data yang kompleks:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Menggabungkan logika

Kondisional dan perulangan dapat digabungkan:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Urutan evaluasi

Logika templat diproses dalam urutan berikut:

1. **Logika templat** — `{% if %}`, `{% for %}`, `{% set %}`, dan `{{variables}}` dievaluasi terlebih dahulu
2. **Variabel prompt** — [[Variabel#Variabel prompt|Variabel prompt]] seperti `{{"summarize this"|prompt}}` dikirim ke Interpreter setelah logika templat selesai

Ini berarti Anda dapat menggunakan logika templat untuk membangun prompt secara dinamis, tetapi hasil prompt tidak tersedia untuk digunakan dalam kondisional atau perulangan.

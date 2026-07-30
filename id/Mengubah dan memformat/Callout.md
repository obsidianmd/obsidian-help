---
permalink: callouts
publish: true
mobile: true
description: Halaman ini menjelaskan cara menggunakan callout untuk menyertakan konten tambahan tanpa mengganggu alur catatan Anda.
aliases:
  - Bagaimana/Menggunakan callout
---
Gunakan callout untuk menyertakan konten tambahan tanpa mengganggu alur catatan Anda.

Untuk membuat callout, tambahkan `[!info]` ke baris pertama kutipan blok, di mana `info` adalah _pengenal tipe_. Pengenal tipe menentukan tampilan dan nuansa callout. Untuk melihat semua tipe yang tersedia, lihat [[#Tipe yang didukung]]. Callout juga didukung secara bawaan di [[Pengantar Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Ini adalah judul callout
> Ini adalah blok callout.
> Mendukung **Markdown**, [[Tautan internal|Tautan wiki]], dan [[Sematkan file|sematan]]!
> ![[Engelbart.jpg]]
```

> [!info] Ini adalah judul callout
> Ini adalah blok callout.
> Mendukung **Markdown**, [[Tautan internal|Tautan wiki]] dan [[Sematkan file|sematan]]!
> ![[Engelbart.jpg]]

Anda dapat menyisipkan callout bawaan `[!note]` menggunakan [[Palet perintah|perintah]] `Masukkan callout`. Kursor secara otomatis diposisikan di bidang nama callout, memungkinkan Anda menghapus nama bawaan dan mengetik nama baru sebelum mengedit kontennya.

Untuk membungkus konten yang sudah ada dalam callout, pilih teks (termasuk daftar, blok kode, dll.) dan jalankan perintah `Masukkan callout`. Konten yang dipilih akan secara otomatis dimasukkan ke dalam callout.

Di [[Tampilan dan mode penyuntingan#Pratinjau langsung|Pratinjau langsung]], Anda juga dapat mengklik kanan nama callout untuk mengubah tipe callout.


### Mengubah judul

Secara bawaan, judul callout adalah pengenal tipenya dalam huruf kapital di awal kata. Anda dapat mengubahnya dengan menambahkan teks setelah pengenal tipe:

```markdown
> [!tip] Callout dapat memiliki judul kustom
> Seperti yang ini.
```

> [!tip] Callout dapat memiliki judul kustom
> Seperti yang ini.

Anda bahkan dapat menghilangkan isi untuk membuat callout hanya judul:

```markdown
> [!tip] Callout hanya judul
```

> [!tip] Callout hanya judul

### Callout yang dapat dilipat

Anda dapat membuat callout yang dapat dilipat dengan menambahkan tanda plus (`+`) atau minus (`-`) langsung setelah pengenal tipe.

Tanda plus memperluas callout secara bawaan, dan tanda minus melipat callout.

```markdown
> [!faq]- Apakah callout dapat dilipat?
> Ya! Dalam callout yang dapat dilipat, konten disembunyikan saat callout dilipat.
```

> [!faq]- Apakah callout dapat dilipat?
> Ya! Dalam callout yang dapat dilipat, konten disembunyikan saat dilipat.

### Callout bersarang

Anda dapat menyarangkan callout dalam beberapa tingkat.

```markdown
> [!question] Bisakah callout disarangkan?
> > [!todo] Ya!, bisa.
> > > [!example]  Anda bahkan dapat menggunakan beberapa lapisan penyarangan.
```

> [!question] Bisakah callout disarangkan?
> > [!todo] Ya!, bisa.
> > > [!example]  Anda bahkan dapat menggunakan beberapa lapisan penyarangan.

### Kustomisasi callout

[[Cuplikan CSS]] dan [[Plugin komunitas]] dapat mendefinisikan callout kustom, atau bahkan menimpa konfigurasi bawaan.

Untuk mendefinisikan callout kustom, buat blok CSS berikut:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

Nilai atribut `data-callout` adalah pengenal tipe yang ingin Anda gunakan, misalnya `[!custom-question-type]`.

- `--callout-color` mendefinisikan warna latar belakang menggunakan angka (0–255) untuk merah, hijau, dan biru.
- `--callout-icon` dapat berupa ID ikon dari [lucide.dev](https://lucide.dev), atau elemen SVG.

> [!warning] Catatan tentang versi ikon lucide
> Obsidian memperbarui ikon Lucide secara berkala. Versi terkini yang disertakan ditampilkan di bawah; gunakan ikon ini atau yang lebih lama dalam callout kustom.
> ![[Kredit#^lucide]]

> [!tip] Ikon SVG
> Alih-alih menggunakan ikon Lucide, Anda juga dapat menggunakan elemen SVG sebagai ikon callout.
>
> ```css
> --callout-icon: '<svg>...svg kustom...</svg>';
> ```

### Tipe yang didukung

Anda dapat menggunakan beberapa tipe callout dan alias. Setiap tipe memiliki warna latar belakang dan ikon yang berbeda.

Untuk menggunakan gaya bawaan ini, ganti `info` dalam contoh dengan salah satu tipe berikut, seperti `[!tip]` atau `[!warning]`. Tipe callout juga dapat diubah dengan mengklik kanan callout dalam mode Pratinjau langsung.

Kecuali Anda [[#Kustomisasi callout]], tipe yang tidak didukung akan menggunakan tipe `note` secara bawaan. Pengenal tipe tidak peka huruf besar-kecil.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Alias: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Alias: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Alias: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Alias: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Alias: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Alias: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alias: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`

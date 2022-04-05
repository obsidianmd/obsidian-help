Sejak versi 0.14.0, Obsidian mendukung blok callout, terkadang disebut dengan "admonitions". Blok callout ditulis sama halnya dengan kutipan, terinspirasi dari sintaks "alert" dari Microsoft Docs.

Callout juga didukung secara langsung pada [[Berkenalan dengan Obsidian Publish|Obsidian Publish]].

> [!NOTE]
> Untuk masalah kompabilitas, jika Anda juga menggunakan plugin Admonitions, Anda harus memperbaruinya setidaknya ke versi 8.0.0 untuk menghindari masalah dengan sistem callout yang baru.

Gunakan sintaks berikut untuk memunculkan blok callout: `> [!INFO]`.

```markdown
> [!INFO]
> Ini merupakan blok callout.
> Ia mendukung **markdown** serta [[Tautan internal|wikilink]].
```

Ini akan ditampilkan seperti berikut:

> [!INFO]
> Ini merupakan blok callout.
> Ia mendukung **markdown** serta [[Tautan internal|wikilink]].

### Tipe

Secara bawaan, terdapat 12 tipe callout yang berbeda, yang memiliki beberapa alias. Setiap tipe hadir dengan warna latar dan ikon yang berbeda.

Untuk menggunakan gaya bawaan tersebut, ubah `INFO` pada contoh dengan tipe yang tersedia berikut. Semua tipe yang tidak dikenali akan dianggap sebagai tipe "note", hingga mereka [[#Kustomisasi|dikustomisasi]]. Pengenal tipe tidak sensitif terhadap huruf besar dan kecil.

- note
- abstract, summary, tldr
- info, todo
- tip, hint, important
- success, check, done
- question, help, faq
- warning, caution, attention
- failure, fail, missing
- danger, error
- bug
- example
- quote, cite

### Judul dan badan

Anda dapat mendefinisikan judul dari blok callout, dan Anda dapat pula menggunakan callout tanpa adanya badan konten.

```markdown
> [!TIP] Judul callout dapat dikustomisasi, yang mana juga mendukung **markdown**!
```

### Pelipatan

Sebagai tambahan, Anda dapat melipat callout dengan menambahkan `+` (terbuka secara bawaan) atau `-` (tertutup secara bawaan) setelah blok.

```markdown
> [!FAQ]- Apakah callout dapat dilipat?
> Ya! Pada callout terlipat, konten akan disembunyikan hingga ia terbuka.
```

Akan ditampilkan menjadi:

> [!FAQ]- Apakah callout dapat dilipat?
> Ya! Pada callout terlipat, konten akan disembunyikan hingga ia terbuka.

### Kustomisasi

Cuplikan dan plugin dapat mendefinisikan callout kustom, juga atau menimpa opsi bawaan. Tipe dan ikon callout didefinisikan pada CSS, yang mana warna merupakan `r, g, b` dan ikon merupakan ID ikon dari ikon yang didukung secara internal (seperti `lucide-info`). Sebagai alternatif, Anda dapat mengkhususkan sebuah ikon SVG sebagai string.

```CSS
.callout[data-callout="tipe-callout-saya"] {
    --callout-color: 0, 0, 0;
    --callout-icon: icon-id;
    --callout-icon: '<svg>...kustom svg...</svg>';
}
```

---
aliases: alias, aliases
---

Terkadang, Anda mungkin ingin merujuk berkas yang sama dengan banyak nama di beragam konteks. Nama alternatif tersebut dikenal dengan nama "alias".

Misalnya, Anda ingin mejuruk teman dengan nama penuh, nama depan, ataupun nama panggilan mereka. Atau mungkin Anda ingin merujuk "Kamus Besar Bahasa Indonesia" dengan singkatannya "KBBI". Jika Anda memahami berbagai bahasa, Anda mungkin ingin merujuk ke konsep yang sama dengan nama mereka di bahasa yang sama dengan keseluruhan catatan yang ditulis.

### Mengatur Alias

Sejak 0.9.16, Anda dapat menenentukan properti "alias" seperti halnya pada catatan [[YAML front matter]]:

```
---
aliases: [KBBI, Kamus Besar Bahasa Indonesia]
---
```

Harap diingat bahwa bagian ini haruslah ditempatkan di bagian paling atas dari catatan untuk mendapatkan perubahan.

Di masa yang akan datang, kami mempertimbangkan cara yang yang lebih ramah pengguna untuk mengelola alias dibandingkan dengan menuliskannya secara manual pada front matter.

### Menautkan alias

Ketika Anda mengatur alias pada berkas, Anda dapat menuliskan `[[alias]]` untuk menautkan ke laman aslinya. Ikon beralih akan muncul pada daftar penyelesai otomatis seperti ini:

![[Insert alises.png]]

Tautan internal dengan tampilan teks akan mendapatkan masukan seperti ini: `[[Menambah alias ke catatan|alias]]`.

Catatan: tautan ke alias **TIDAK** dimasukkan sebagai `[[alias]]` untuk memudahkan bekerja di banyak tempat, sehingga perangkat lunak lain dapat mengenalinya dengan baik.

### Menemukan sebutan yang belum tertaut

Setelah Anda mengatur alias pada catatan, Anda dapat menemukan sebutan yang belum tertaut baik untuk nama maupun aliasnya.

Misalnya, setelah mengatur "KBBI" sebagai alias dari "Kamus Besar Bahasa Indonesia", Anda akan melihat sebutan untuk "KBBI" di berkas lain pada bagian [[Backlink]].

Jika Anda memutuskan untuk menautkan sebutan ini, tautan dengan teks tampilan yang diatur ke alias akan dibuat. Berdasarkan contoh di atas, `KBBI` menjadi `[[Kamus Besar Bahasa Indonesia|KBBI]]` ketika Anda menekan tombol "Hubungkan".

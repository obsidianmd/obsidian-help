Tampilkan representasi grafik dari [[tautan internal]] di antara catatan Anda.

Catatan dengan banyak catatan yang mereferensikannya akan muncul dengan titik yang lebih besar pada grafik.

![[Pasted image 10.png]]

### Saran visualisasi

- Anda dapat mengarahkan kursor pada setiap titik untuk menyorot koneksinya, dan memudarkan yang lain.
- Anda dapat menyeret titik untuk menyusun ulang grafik. Ini mungkin berguna jika beberapat titik saling bertumpuk satu sama lain.

### Saran bernavigasi

- Untuk memperbesar, Anda dapat menggunakan roda gulir tetikus, serta tombol `+` dan `-`.
- Untuk menggeser, seret latar belakang atau menggunakan tombol panah di keyboard.
- Tahan tombol `Shift` saat bernavigasi dengan keyboard untuk mempercepat.

### CSS kustom

Dikarenakan grafik dirender menggunakan `<canvas>` dan WebGL, [[Kustomisasi CSS|CSS]] tidak dapat mempengaruhi beberapa hal seperti titik dan tautan. Untuk mengubah tampilan grafik. kami menyediakan cara untuk mengubah warna CSS menjadi perintah WebGL.

#### Kelas CSS berikut telah didukung:

```css
.graph-view.color-fill
.graph-view.color-fill-focused (gunakan transparent untuk mematikan)
.graph-view.color-fill-tag (tergantung tema)
.graph-view.color-fill-attachment (tergantung tema)
.graph-view.color-arrow
.graph-view.color-circle
.graph-view.color-line
.graph-view.color-text
.graph-view.color-fill-highlight
.graph-view.color-line-highlight
.graph-view.color-fill-unresolved
```

\* tergantung tema maksudnya Anda mungkin menambahkan `.theme-dark` atau `.theme-light` untuk mengubah gaya pada tema yang berbeda. Lihat [[#CSS kustom#Bawaan]] untuk penjelasanya.

#### Aturan CSS berikut telah didukung:

```css
 .graph-view.color-class {
	/* Mendukung semua warna direktif CSS, seperti #HEX, rgb dan rgba */
	color:   #FFF;
	color:   #FFFFFF;
	color:   rgb(0, 0, 0);
	color:   rgba(0, 0, 0, 1);
	/* Opacity (serupa dengan rgba) akan membuat warna menjadi transparan */
	opacity: 0.5;
}
```

#### Bawaan:

Aturan CSS berikut merupakan yang Obsidian gunakan secara bawaan. Anda mungkin menimpa aturan CSS apa pun yang serupa atau [yang lebih spesifik](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity). Ini diterapkan khususnya pada `.color-fill-tag` dan `.color-fill-attachment` Sebagai upaya terakhir, tambahkan `!important` di akhir aturan Anda.

```css
.graph-view.color-fill,
.theme-dark .graph-view.color-fill-tag,
.theme-light .graph-view.color-fill-tag,
.theme-dark .graph-view.color-fill-attachment,
.theme-light .graph-view.color-fill-attachment,
.graph-view.color-arrow,
.graph-view.color-circle,
.graph-view.color-line,
.graph-view.color-text,
.graph-view.color-fill-highlight,
.graphview.color-line-highlight,
.graph-view.color-fill-unresolved {}
```

### Menyematkan lampiran

Anda dapat sematkan file lampiran seperti gambar dan suara di catatan Anda. Gunakan sintaks seperti `![[namagambar.png]]`:

![[Engelbart.jpg]]

![[Excerpt from Mother of All Demos (1968).ogg]]

Anda dapat menyematkan berkas PDF di catatan Anda dengan sintaks yang sama. Tambahan, Anda dapat menulis `[[Berkas Saya.pdf#page=nomorhalaman]]` untuk membuka ke halaman tertentu dari PDF secara langsung.

### Menyematkan catatan

Anda juga dapat menyematkan catatan, dengan sintaks yang sama:

![[Format berkas yang didukung]]

### iframe

"iframe" adalah cara untuk menyematkan halaman web pada web lainnya. Ini berguna karena Markdown dapat menerima HTML, yang mana adalah bahasa sederhana untuk membuat halaman web yang kita lihat setiap harinya.

Contoh:

```html
<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>
```

Menghasilkan:

<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>

Sintaks dasarnya:

```html
<iframe src="MASUKKAN Tautan ANDA DI SINI"></iframe>
```

Beberapa laman web tidak memperbolehkan Anda untuk menyematkan mereka. Misalnya, Anda tidak dapat menyematkan video YouTube dengan Tautan biasa, tetapi Anda dapat menggunakan Tautan sematan yaitu  `https://www.youtube.com/embed/ID_VIDEO`.

Jika Anda ingin menyematkan situs web, coba cari "sematkan iframe {situs web}".

Contohnya, Anda dapat menyematkan cuitan Twitter sebagaimana yang disarankan hasil penelusuran:

```html
<iframe
	border=0
	frameborder=0
	height=250
	width=550  
	src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20">
</iframe>
```

<iframe border=0 frameborder=0 height=250 width=550  
 src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>

---

### Catatan pengembang

Sintaks terinspirasi oleh sintaks gambar Markdown. Kami punya dua observasi:

 1. `[Gambar](Tautan.png)` menautkan ke gambar, tetapi sebenarnya `![Gambar](Tautan.png)` menampilkannya.

 2. Sintaks Tautan internal berdasarkan asumsi: `[[Halaman saya]]` merupakan pintasan (atau "syntactic sugar" jika Anda menginginkannya) untuk `[Halaman saya](Halaman saya)`.

Untuk mengkombinasikan dua hal ini, kami memberikan solusi dengan pola ketiga: `![[Halaman saya]]` yang seharusnya setara dengan `[Halaman saya](Halaman saya)`, yang secara kesepakatan, jika nama file sama dengan link, seharusnya menampilkannya.

Terdapat pengimplementasian lain di luar, contohnya Roam Research menggunakan `{{embed: ((NODE_ID))}}`. Kami juga mempertimbangkan menggunakan sintaks `((Nama laman))`, tetapi kami merasa `![[Nama laman]]` lebih konsisten, lebih familiar, dan menyisakan ruang lebih bagi simbol lain untuk memiliki makna tersendiri.

#### Mengubah ukuran gambar
Anda dapat mengubah ukuran gambar dengan sintaks berikut :

Untuk gambar markdown, gunakan `![AltText|100x100](https://Tautan/ke/gambar.png)`

Untuk menyematkan, gunakan `![[gambar.png|100x100]]`

Untuk punya ukuran gambar sesuai dengan aspek rasionya, hilangkan tingginya `![[gambar.png|100]]`

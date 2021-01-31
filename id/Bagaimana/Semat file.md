### Menyematkan lampiran

Anda dapat sematkan file lampiran seperti gambar dan audio di catatan Anda. Gunakan sintaks seperti `![[namagambar.png]]`:

![[Engelbart.jpg]]

![[Excerpt from Mother of All Demos (1968).ogg]]

Anda dapat sematkan file PDF di catatan Anda dengan sintaks yang sama. Tambahan, Anda dapat menulis `[[fileku.pdf#page=halaman]]` untuk membuka ke halaman tertentu dari PDF secara langsung.

### Menyematkan catatan

Anda dapat sematkan catatan juga, dengan sintaks yang sama:

![[Format file yang diterima]]

### iframe

"iframe" adalah cara untuk menyematkan halaman web di web lain. Ini berguna karena Markdown dapat menerima HTML, yang mana adalah bahasa sederhana untuk membuat halaman web yang kita lihat setiap hari.

Contoh:

```html
<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>
```

Hasil:

<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>

Sintaks dasarnya:

```html
<iframe src="INSERT YOUR URL HERE"></iframe>
```

Beberapa website tidak membolehkan Anda untuk menyematkan mereka. Contoh, Anda tidak dapat menyematkan video YouTube dengan URL normal, tetapi Anda bisa menggunakan URL semat yaitu 
`https://www.youtube.com/embed/VIDEO_ID`.

Jika Anda ingin menyematkan situs web, coba cari " sematkan iframe {situs web}".

Contohnya, Anda dapat menyematkan tweet Twitter sebagaimana yang disarankan hasil pencarian:

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

 1. `[Gambar](link.png)` link ke gambar, tetapi sebenarnya `![Gambar](link.png)` menampilkannya.

 2. Sintaks internal link berdasarkan asumsi: `[[Halaman saya]]` adalah pintasan (atau "syntactic sugar" jika Anda ingin) untuk `[Halaman saya](Halaman saya)`.

Untuk mengkombinasikan dua hal ini, kami dapat solusi dengan pola ketiga: `![[Halaman saya]]` yang seharusnya setara dengan `[Halaman saya](Halaman saya)`, yang secara kesepakatan, jika nama file sama dengan link, seharusnya menampilkannya.

Terdapat pengimplementasian lain di luar, contohnya Roam Research menggunakan `{{embed: ((NODE_ID))}}`. Kami juga mempertimbangkan menggunakan sintaks `((Page name))`, tetapi kami merasa `![[Page name]]` lebih konsisten, lebih familiar, dan menyisakan ruang lebih bagi simbol lain untuk memiliki makna tersendiri.

#### Ubah ukuran gambar

Anda dapat mengubah ukuran gambar dengan sintaks berikut :

Untuk gambar markdown, gunakan `![AltText|100x100](https://url/to/image.png)`

Untuk menyematkan, gunakan `![[image.png|100x100]]`

Untuk punya ukuran gambar sesuai dengan rasio aspeknya, hilangkan tingginya `![[image.png|100]]`

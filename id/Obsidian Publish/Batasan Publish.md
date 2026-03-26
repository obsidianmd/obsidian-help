---
permalink: publish/limitations
---
> [!tip] Anggota komunitas kami yang luar biasa telah menemukan solusi untuk beberapa keterbatasan ini. Untuk informasi lebih lanjut, silakan kunjungi utas [Publish Resources](https://forum.obsidian.md/t/obsidian-publish-resources/74582) di forum Obsidian.

## Plugin komunitas

Obsidian Publish memiliki dukungan minimal untuk [[Plugin komunitas]].

Plugin yang menghasilkan keluaran dalam Markdown mentah, seperti plugin Waypoint, kompatibel dengan Publish karena tidak memerlukan aplikasi untuk merender datanya.

Sedangkan plugin yang memerlukan blok kode plugin untuk merender, seperti Dataview atau Fantasy Statblocks, tidak akan berfungsi secara bawaan di Publish.

## Grafik

Publish menawarkan kustomisasi warna dasar untuk tampilan grafiknya menggunakan CSS. Anda dapat mengubah warna node di file `publish.css` Anda dengan memanfaatkan [variabel CSS Tampilan Grafik](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph).

Perlu diperhatikan bahwa grafik yang dipublikasikan tidak mendukung opsi pengurutan dan tampilan yang komprehensif seperti yang tersedia di [[Tampilan grafik]] aplikasi.

## File media

Obsidian Publish tidak dioptimalkan untuk streaming video atau file audio berukuran besar. Kami menyertakan beberapa praktik terbaik untuk menangani [[File media|file media]] Anda di dokumen ini.

Untuk meningkatkan pengalaman pengunjung Anda, kami merekomendasikan agar Anda menggunakan layanan hosting video, seperti YouTube atau Vimeo.

Anda dapat mengunggah file **hingga 50mb** ke situs Publish Anda. ^publish-media-limit

## PDF

Di perangkat seluler, tablet, dan komputer dengan layar kecil, Anda mungkin mengalami masalah di mana PDF yang disematkan tidak dimuat atau hanya halaman pertama yang ditampilkan. Ini disebabkan oleh keterbatasan PDF Renderer di perangkat seluler.

Untuk konten yang ditujukan bagi pengguna seluler, kami menyarankan untuk menyediakan tautan ke PDF yang dihosting secara eksternal atau menyertakan tautan internal yang memungkinkan pengguna mengunduh PDF langsung ke perangkat mereka.

## Pencarian

Publish memiliki dukungan dasar untuk mencari teks biasa di konten yang dipublikasikan. Preferensi untuk hasil pencarian diberikan kepada:

- Nama file
- Alias
- Nama judul

Setelah mencari kecocokan di atas, pencarian kemudian akan menyertakan teks biasa dari catatan yang dipublikasikan.

Untuk meningkatkan kemampuan pencarian situs yang dipublikasikan, disarankan untuk menggunakan nama file yang deskriptif, menambahkan beberapa alias, dan memilih nama judul yang secara akurat mencerminkan konten.

Selain itu, Publish saat ini tidak mendukung fitur [[Cari#Sematkan hasil pencarian di catatan|hasil pencarian tersemat]] dari aplikasi.

Tedapat beberapa perbedaan di antara bebagai kerja PKM dan sistem mencatat yang berarti berpindah di antara mereka dapat sedikit rumit. Untuk bagian besarnya, jika apa pun yang Anda gunakan dapat dikonversikan ke Markdown, ia akan bekerja baik dalam Obsidian. Tetapi beberapa hal, seperti tag dan link, dapat menjadi rumit.

Dalam Forum kami, terdapat [pos yang mengkoleksi metode-metode yang orang lain telah kembangkan](https://forum.obsidian.md/t/meta-post-migration-workflows/768). Saat ini, termasuk: 

- [Impor dari Notion](https://forum.obsidian.md/t/import-from-notion/636)
- [Impor dari Notion (otomatis)](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728)
- [Impor dari Evernote](https://forum.obsidian.md/t/import-from-evernote/108)
- [Impor dari OneNote](https://forum.obsidian.md/t/new-tool-for-migration-from-onenote-updated-and-improved-version/3055)
- [Impor dari Apple Notes](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
- [Impor dari Bear](https://forum.obsidian.md/t/import-from-bear-app/2284)
- [Impor dari Zkn3](https://forum.obsidian.md/t/migrating-from-zkn3-to-obsidian-without-losing-your-tags-and-internal-links-documentation/7457)
- [Impor dari TiddlyWiki 5](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)

Tetapi jika Anda tidak dapat melihat sistem Anda di daftar, coba cek pos forum, seseorang mungkin telah memecahkan isu Anda semenjak dokumen ini telah ditulis.

Juga catatan, pembuat dari nvUltra, program mencatatan berbasis markdown lainnya, telah memiliki daftar di website mereka tentang [cara ekspor ke nvUltra](https://nvultra.com/help/importing). Dalam banyak kasus, ini akan sama. atau setidaknya tempat awalan yang membantu.

## Alat bawaan

### Dari Roam Research

JIka Anda memiliki data di Roam, ia mudah untuk diekspor dan bermain dengannya dalam Obsidian.

> 1. Pilih "Export all" pada menu:
> ![[Pasted image.png]]

> 2. Klik tombol biru "Export all":
> ![[Pasted image 1.png]]

> 3. Unzip "Roam-Export-xxxxxxxxxxxxx.zip" menjadi folder.

> 4. Klik pada ikon vault (tipsalat yang "Buka vault lain") di pojok kiri bawah aplikasi, dan pilih "Buka folder sebagai vault".
> Pilih folder yang Anda baru saja unzip.

> 5. Gunakan [[Pengonversi format Markdown]] kami untuk mengkonversi format Markdown Roam Research ke format Obsidian.
> Ia dapat digunakan untuk mengubah `#tag` ke Obsidian `[[link]]`.
> Ia juga mengkonversi `^^sorotan^^` ke `==sorotan==`.


### Dari Bear

Jika Anda mengimpor dari Bear, plugin [[Pengonversi format Markdown]] memiliki opsi untuk mengkonversi `::sorotan::` ke `==sorotan==`.

### Menggunakan Zettelkasten

Jika Anda telah menggunakan metode Zettelkasten untuk menstruktur catatan Anda, ini sesuatu yang mungkin Anda ingin tahu:

Link di Obsidian butuhkan kecocokan penuh ke nama catatan. Ini berarti `[[202001010000]]` tidak akan terhubung dengan baik ke `[[202001010000 Catatan Saya]]`.

Untuk memperbaikinya, Anda dapat gunakan [[Pengonversi format Markdown]] kami untuk mengkonversi link Zettelkasten Anda ke  `[[202001010000 My Note]]` atau `[[202001010000 My Note|My Note]]`.

Anda juga mungkin tertarik dengan plugin [[Awalan Zettelkasten]].

Terdapat beberapa perbedaan di antara bebagai sistem PKM dan pecatatan yang berarti berpindah di antara mereka akan sedikit rumit. Untuk bagian besarnya, jika apa pun yang Anda gunakan dapat dikonversikan ke Markdown, maka akan bekerja baik dalam Obsidian. Tetapi beberapa hal, seperti tag dan link, akan menjadi rumit.

Pada Forum kami, terdapat [postingan yang berisikan metode-metode yang orang lain telah kembangkan](https://forum.obsidian.md/t/meta-post-migration-workflows/768). Saat ini, termasuk: 

- [Impor dari Notion](https://forum.obsidian.md/t/import-from-notion/636)
- [Impor dari Notion (otomatis)](https://forum.obsidian.md/t/notion-2-obsidian-migration-instructions/2728)
- [Impor dari Evernote](https://forum.obsidian.md/t/import-from-evernote/108)
- [Impor dari OneNote](https://forum.obsidian.md/t/new-tool-for-migration-from-onenote-updated-and-improved-version/3055)
- [Impor dari Apple Notes](https://forum.obsidian.md/t/migrate-from-apple-notes-to-obsidian/732)
- [Impor dari Bear](https://forum.obsidian.md/t/import-from-bear-app/2284)
- [Impor dari Zkn3](https://forum.obsidian.md/t/migrating-from-zkn3-to-obsidian-without-losing-your-tags-and-internal-links-documentation/7457)
- [Impor dari TiddlyWiki 5](https://forum.obsidian.md/t/migrate-from-tiddlywiki-5-to-obsidian/731)

Tetapi jika Anda tidak melihat sistem Anda pada daftar, coba periksa postingan forum, seseorang mungkin telah memecahkan isu Anda sejak dokumen ini ditulis.

Sebagai catatan pula, pembuat dari nvUltra, program mencatatan berbasis markdown lainnya, telah memiliki daftar di website mereka tentang [cara mengekspor ke nvUltra](https://nvultra.com/help/importing). Dalam banyak kasus, ini akan sama. atau setidaknya tempat awalan yang membantu.

## Alat bawaan

### Dari Roam Research

Jika Anda memiliki data di Roam, ia mudah untuk diekspor dan bermain dengannya dalam Obsidian.

> 1. Pilih "Export all" pada menu:
> ![[Pasted image.png]]

> 2. Klik tombol biru "Export all":
> ![[Pasted image 1.png]]

> 3. Ekstrak "Roam-Export-xxxxxxxxxxxxx.zip" menjadi folder.

> 4. Klik pada ikon vault (bantuan akan tertulis "Buka vault lain") pada pojok kiri bawah aplikasi, dan pilih "Buka folder sebagai vault".
> Pilih folder yang Anda baru saja ekstrak.

> 5. Gunakan [[Pengonversi format Markdown]] kami untuk mengkonversi format Markdown Roam Research ke dalam format Obsidian.
> Ia dapat digunakan untuk mengubah `#tag` menjadi `[[tautan]]` Obsidian .
> Ia juga dapat mengkonversi `^^sorotan^^` menjadi `==sorotan==`.


### Dari Bear

Jika Anda mengimpor dari Bear, plugin [[Pengonversi format Markdown]] memiliki opsi untuk mengkonversi `::sorotan::` menjadi `==sorotan==`.

### Menggunakan Zettelkasten

Jika Anda telah menggunakan metode Zettelkasten untuk menstrukturisasi catatan Anda, ini sesuatu yang mungkin Anda ingin tahu:

Tautan di Obsidian butuhkan kecocokan penuh dengan nama catatan. Ini berarti `[[202001010000]]` tidak akan terhubung dengan baik ke `[[202001010000 Catatan Saya]]`.

Untuk memperbaikinya, Anda dapat gunakan [[Pengonversi format Markdown]] kami untuk mengkonversi tautan Zettelkasten Anda ke  `[[202001010000 Catatan Saya]]` atau `[[202001010000 Catatan Saya|Catatan Saya]]`.

Anda juga mungkin tertarik dengan plugin [[Awalan Zettelkasten]].

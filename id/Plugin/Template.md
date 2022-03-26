Plugin Template memberikan pada Anda cuplikan cepat dari teks menuju ke catatan terkini Anda.

### Mengatur folder template

Setiap cuplikan template hanyalah catatan Markdown biasa, seperti halnya yang lain pada Obsidian.

Untuk mengatur berkas template, buat sebuah folder, dan pilih folder tersebut di Pengaturan => Template => "Lokasi folder template" setelah mengaktifkan plugin.

### Memasukkan template

Setelah mengatur lokasi folder, gunakan ikon ribbon utnuk memasukkan template. Seperti biasa, Anda dapat pula menggunakan pintasan untuk opsi ini, atau menggunakan palet perintah untuk mengaksesnya.

Cuplikan template akan dimasukkan pada posisi caret terkini, dengan teks khusus digantikan oleh nilai sebenarnya pada saat memasukannya (lihat di bawah).

### Memasukkan judul

Jika Anda ingin memasukkan judul dari catatan, Anda dapat mengaturnya di template dengan `{{title}}`.

### Memasukkan waktu dan tanggal

Pada pengaturan Template, Anda dapat pula mengatur format waktu dan format tanggal.

Setelah mengatur format tersebut, `{{date}}` dan `{{time}}` pada berkas template akan digantikan dengan waktu terkini yang diformat.

Untuk dokumentasi sintaks pemformatan, [harap lihat di sini](https://momentjs.com/docs/#/displaying/format/).

_Saran: jika Anda ingin memiliki dua format waktu atau dua format tanggal, Anda tapat menggunakan `{{time}}` lain sebagai `{{date}}` kedua, atau `{{date}}` sebagai `{{time}}` kedua._

### Format tanggal sekali pakai

Sebagai tambahan untuk `{{date}}` dan `{{time}}`, yang mana bekerja pada sebuah berkas template, Anda dapat pula menuliskan `{{date:YYYY-MM-DD}}` untuk memasukkan tanggal dengan format tertentu hanya sekali. Ini akan menimpa format `{{date}}`. Apa pun setelah `:` akan dianggap sebagai bagian dari format tanggal.

`{{time:HH:mm}}` juga bekerja dengan serupa.

### Menggunakan format tanggal kustom di mana pun

Saat ini, penanggalan seperti `{{date:YYYY-MM-DD}}` dan `{{time:HH:mm}}` juga bekerja pada berkas template dari plugin [[Catatan harian]] dan [[Awalan Zettelkasten]]. Namun, `{{date}}` dan `{{time}}` tidak bekerja.

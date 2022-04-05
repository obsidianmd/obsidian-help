Pada Obsidian 0.9.5 atau yang lebih tinggi, sebagai tambahan untuk [[Tautan internal#Tautan ke judul|penautan ke judul]], Anda dapat pula menautkan ke blok.

### Apa itu blok

Sebuah "blok"dapat berupa paragraf, kutipan, daftar item, dsb. Pada umumnya, semua yang memiliki baris kosong di sebelum dan sesudahnya merupakan sebuah blok ^dcf64c

### Menautkan ke blok

Untuk menautkan sebuah blok pada berkas spesifik, pertama-tama ketik `[[nama berkas` untuk memunculkan daftar berkas yang sesuai. Setelah memilih berkas, ketikkan `^` dan lanjutkan pengetikkan untuk mencari blok yang ingin ditautkan.

Ketika Anda menekan enter, sebuah tautan menuju blok tersebut akan dihasilkan, format ini serupa dengan `[[nama berkas#^dcf64c]]`, yang mana `dcf64c` merupakan ID blok yang baru saja dibuat.

Jika Anda tidak yakin di berkas mana blok tersebut berada, metode lainnya ialah dengan mengetikkan `[[^^` dan mencari blok pada semua berkas. Ini akan mencari di keseluruhan blok pada vault Anda. Jadi mungkin akan terdapat sedikit keterlambatan jika vault Anda berukuran besar.

Misalnya, [[#^dcf64c]] merupakan tautan menuju blok di atas.

### Menyematkan atau menyisipkan blok

Serupa dengan [[Menyematkan berkas|penyematan berkas]], Anda dapat menyematkan tautam blok cukup dengan menambahkan `!` di depan tautan blok.

Berikut contohnya:

![[#^dcf64c]]

### ID blok manual

Jika Anda menginginkan ID blok yang mudah terbaca, Anda dapat menambahkan `^id-Anda` secara manual setelah blok. Pastikan terdapat satu buah spasi jika Anda meletakkan ID pada ujung baris.

Untuk perujukan blok kompleks seperti tabel, letakkan ID blok pada baris setelah blok, dan pastikan terdapat baris kosong pada sebelum dan sesudah ID blok.

Setelah Anda menambahkan ID blok secara manual, ketika Anda merujuk kepada blok tersebut, `id-Anda` akan digunakan menggantikan ID blok yang dibuat secara acak.

Perlu dicatat bahwa hanya huruf, angka, dan tanda pisah yang diperbolehkan pada ID blok manual.

### Hubungan antar perangkat lunak

Harap diperhatikan bahwa blok referensi bukan merupakan bagian dari Markdown standar, tetapi merupakan bagian khusus dari Markdown Obsidian. Itu artinya tautan tersebut tidak akan bekerja di luar dari Obsidian.

Anda tetap dapat merujuk blok dengan melakukan penelusuran untuk ID blok, meskipun hal tersebut masih manual. Koneksi tidaklah hilang selama Anda memiliki perangkat lunak yang dapat melakukan penelusuran di folder.

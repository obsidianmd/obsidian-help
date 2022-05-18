Untuk keamanan Anda, [[Berkenalan dengan Obsidian Sync|Obsidian Sync]] mengenkripsi [[Vault lokal dan remote|vault remote]] Anda dan semua komunikasi dengan server Obsidian. Sebelum siapa pun dapat mengakses vault remote Anda, mereka perlu mendekripsikannya dengan sebuah _kata sandi enkripsi_.

Ketika Anda membuat vault remote baru, Anda memiliki dua opsi:

- **Enkripsi ujung-ke-ujung:** Obsidian mengenkripsi vault pada perangkat Anda dengan kunci enkripsi kustom sebelum dikirim menuju server Obsidian. Ini menjamin bahwa siapa pun—bahkan tim dari Obsidian—tidak dapat mengakses catatan Anda.
- **Mengelola enkripsi:** Jika Anda tidak ingin mengingat kata sandi lain, Anda dapat membiarkan Obsidian mengelola kata sandi enkripsi untuk Anda. Meskipun kami menyimpan kata sandi enkripsi Anda pada server kami, kami hanya menggunakannya untuk menawarkan cara yang mudah untuk mengelola vault Anda. Obsidian tidak akan pernah mengakses vault Anda tanpa adanya persetujuan yang jelas dari Anda.

Jika Anda melupakan atau kehilangan kata sandi enkripsi kustom Anda, Data Anda akan terenkripsi dan tidak dapat digunakan selamanya. Kami tidak dapat memulihkan kata sandi Anda, atau data apa pun yang terenkripsi kepada Anda.

Pilihan Anda hanya berpengaruh kepada vault remote Anda. Obsidian tidak mengenkripsi vault lokal Anda.

## Apa yang dimaksud dengan enkripsi ujung-ke-ujung?

Enkripsi ujung-ke-ujung maksudnya data akan terenkripsi pada saat meninggalkan perangkat Anda, dan hanya dapat didekripsi menggunakan kunci enkripsi Anda saja pada saat dikembalikan ke perangkat Anda.

Kami tidak dapat membaca data Anda. Ataupun potensi penyadapan apa pun, seperti penyedia layanan internet Anda.

Pada kasus yang jarang pada kebocoran keseluruhan server, data anda tetap terenkripsi—tidak ada satu orang pun yang dapat mendekripsikannya tanpa mengetahui kata sandi Anda.

## Enkripsi apa yang digunakan?

Kami menggunakan AES-256 standar industri untuk mengenkripsi data Anda. AES-256 merupakan spesifikasi enkripsi setingkat militer yang digunakan secara luas misalnya pada perbankan daring.

Berikut adalah rincian teknisnya:

- Fungsi derivasi kunci yang digunakan: scrypt dengan salt
- Algoritma enkripsi yang digunakan: AES-256 menggunakan GCM

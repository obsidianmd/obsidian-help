Catatan harian membuka catatan berdasasrkan tanggal hari ini, atau membuatnya jika tidak tersedia. Gunakan catatan harian untuk membuat jurnal, daftar kegiatan, atau catatan harian untuh perihal yang Anda temukan seharian ini.

Untuk membuka catatan harian hari ini, antara:

- Mengklik **Buka catatan hari ini** (ikon kalender dengan tanda centang) pada [[ribbon]].
- Jalankan **Buka catatan hari ini** melalui [[Palet Perintah]].
- [[Pintasan kustom#Mengatur pintasan|Gunakan pintasan]] untuk perintah **Buka catatan hari ini**.

Secara bawaan, Obsidian membuat catatan kosong yang dinamai sesuai dengan tanggal hari ini dengan format YYYY-MM-DD.

> **Saran:** Jika Anda lebih menyukai memisahkan catatan harian Anda di folder terpisah, Anda dapat mengatur **Lokasi berkas baru** pada opsi plugin untuk mengubah di mana Obsidian membuat catatan harian baru.

## Membuat catatan harian berdasarkan template

Jika catatan harian Anda memiliki struktur yang sama, Anda dapat menggunakan [[template]] untuk menambahkan pendefinisian awal konten untuk catatan harian Anda ketika Anda membuatnya.

1. Buat catatan baru dengan nama "Template Harian" dengan teks berikut (atau apa pun yang sesuai dengan keinginan Anda!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tugas

   - [ ]
   ```

2. Buka **Pengaturan**.
3. Pada bilah alat, klik **Catatan harian** pada **Opsi plugin**.
4. Pada kotak teks di sebelah **Lokasi berkas template**, pilih catatan "Template Harian".

Obsidian akan menggunakan template tersebut ketika Anda membuat catatan harian baru selanjutnya.

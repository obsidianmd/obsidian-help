---
permalink: plugins/daily-notes
aliases:
  - Plugin/Catatan harian
---
Catatan harian adalah [[Plugin inti|plugin inti]] yang membuka catatan berdasarkan tanggal hari ini, atau membuatnya jika belum ada. Gunakan catatan harian untuk membuat jurnal, daftar tugas, atau log harian untuk hal-hal yang Anda temukan sepanjang hari.

Untuk membuka catatan harian hari ini, Anda bisa:

- Klik **Buka catatan hari ini** ![[lucide-calendar.svg#icon]] di [[Bilah alat|bilah alat]].
- Jalankan **Buka catatan hari ini** dari [[Palet perintah]].
- [[Pintasan#Menetapkan pintasan keyboard|Gunakan pintasan keyboard]] untuk perintah **Buka catatan hari ini**.

Secara bawaan, Obsidian membuat catatan kosong baru dengan nama sesuai tanggal hari ini dalam format YYYY-MM-DD.

> [!tip] Jika Anda lebih suka menyimpan catatan harian di folder terpisah, Anda dapat mengatur <u>Lokasi berkas baru</u> di pengaturan plugin untuk mengubah lokasi Obsidian membuat catatan harian baru.

> [!example]- Subfolder otomatis
> Anda dapat secara otomatis mengatur catatan harian ke dalam folder menggunakan fitur **Format tanggal**.
> 
> Misalnya, jika Anda mengatur format tanggal sebagai `YYYY/MMMM/YYYY-MMM-DD`, catatan Anda akan dibuat sebagai `2023/January/2023-Jan-01`. 
> 
> Anda dapat menjelajahi lebih banyak opsi pemformatan di situs dokumentasi [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Membuat catatan harian dari templat

Jika catatan harian Anda memiliki struktur yang sama, Anda dapat menggunakan [[Plugin/Template|templat]] untuk menambahkan konten yang sudah ditentukan ke catatan harian saat Anda membuatnya.

1. Buat catatan baru bernama "Templat harian" dengan teks berikut (atau apa pun yang sesuai untuk Anda!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Tugas

   - [ ]
   ```

2. Buka **[[Pengaturan]]**.
3. Di bilah samping, klik **Catatan harian** di bawah **Pengaturan plugin**.
4. Di kotak teks di samping **Lokasi berkas template**, pilih catatan "Templat harian".

Obsidian akan menggunakan templat tersebut saat Anda membuat catatan harian baru berikutnya.

## Catatan harian dan properti

Ketika plugin Catatan harian diaktifkan dan properti tanggal ada dalam catatan mana pun, Obsidian akan secara otomatis mencoba membuat tautan ke catatan harian untuk hari tersebut. Misalnya, jika catatan berjudul `example.md` menyertakan properti tanggal seperti `2023-01-01`, tanggal ini akan berubah menjadi tautan yang dapat diklik di bagian [[Tampilan dan mode penyuntingan#Pratinjau langsung|pratinjau langsung]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date

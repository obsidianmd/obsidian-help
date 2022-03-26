Plugin penyusun catatan mempersilakan Anda untuk menggabungkan dua catatan atau memisahkan bagian dari catatan menjadi catatan tersendiri.

## Penggabungan

Ketika bekerja dengan berkas, Anda dapat memilih "Gabungkan kesemua berkas dengan..." pada menu Opsi Lainnya.

Selain itu, Anda dapat membuka [[Palet perintah]] dan menjalankan perintah "Penyusun catatan: Gabungkan berkas ini dengan berkas lain...".

Ini akan memunculkan menu untuk memilih berkas yang akan digabungkan. Setelah Anda mengkonfirmasi penggabungan, semua tautan menuju catatan terkini akan diperbarui ke berkas tergabung.

Catatan terkini akan digabungkan ke bagian bawah secara bawaan; Anda dapat menggunakan `Shift-Enter` bukannya `Enter` untuh menggabungkannya ke bagian Atas.

## Pemisahan

Ketika memilih teks, Anda dapat mengklik kanan di sana, lalu memilih "Ekstrak seleksi ini...", atau menggunakan [[Palet perintah]] untuk menemukan perintah "Penyusun catatan: Ekstrak seleksi ini...".

Serupa dengan penggabungan, ini akan memunculkan menu untuk memilih berkas tujuan pemisahan. Jika tidak ditemukan, catatan baru akan dibuat. Jika Anda ingin membuat catatan baru bukannya hasil yang pertama, tekan `Ctrl-Enter` (atau `Cmd-Enter` pada macOS).

## Opsi

Penyusun catatan memiliki beberapa opsi plugin yang berguna.

### Teks setelah memindahkan

Setelah Anda memisahkan sebagian teks, sering kali ide yang bagus meninggalkan tautan ke berkas yang baru. Secara bawaan, tautan yang dibuat. Tetapi Anda dapat pula mengubah opsi ini untuk membuat sematan, atau tidak memasukkan apa pun.

### Berkas template

Ketika menggabungkan atau memisahkan, bukan hanya mengirimkan konteks, Anda dapat pula menerapkan berkas template.

Berkas template ini dapat mengandung variabel berikut:

- `{{content}}`: lokasi dimana konten akan ditempatkan. Jika Anda tidak memasukkan variabel ini, konten akan secara otomatis ditempatkan pada bagian bawah dari template.
- `{{fromTitle}}`: nama dari catatan dimana catatan baru berasal
- `{{newTitle}}`: judul dari berkas yang baru. Sesuai jika Anda lebih suka memiliki judul pada bagian atas dari berkas yang serupa dengan nama berkas.
- `{{date:FORMAT}}`: Anda dapat menambahkan banyak tanggal dengan format kustom Anda. Contohnya, Anda dapat menambahkan `{{date:YYYY-MM-DD}}` dan akan menghasilkan tanggal dan waktu ketika catatan dibuat.

### Konfirmasi penggabungan berkas

Menggabungkan berkas akan menghapus berkas dan merusaknya, jadi secara bawaan kamu akan mengkonfirmasikannya kepada Anda. Jika Anda menyukainya, Anda dapat memilih untuk melewati konfirmasi ini.

Dalam kasus Anda secara tidak sengaja menggabungkan sesuatu dan ingin mengembalikannya, pertimbangkan untuk menggunakan plugin [[Pemulih berkas]] untuk memulihkannya.
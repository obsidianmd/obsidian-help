---
permalink: plugins/note-composer
aliases:
  - Plugin/Penyusun catatan
---
Komposer catatan adalah [[Plugin inti|plugin inti]] yang memungkinkan Anda menggabungkan dua catatan atau mengekstrak bagian dari catatan ke dalam catatan baru.

## Gabungkan catatan

Menggabungkan catatan menambahkan sebuah catatan ke catatan lain dan menghapus catatan yang pertama. Komposer catatan memperbarui semua tautan untuk merujuk ke catatan yang digabungkan.

Ketika Anda memilih catatan tujuan penggabungan, Anda dapat memilih antara metode berikut:

- `Enter`: Menambahkan catatan sumber di _akhir_ catatan tujuan.
- `Shift+Enter`: Menambahkan catatan sumber di _awal_ catatan tujuan.
- `Ctrl+Enter` (atau `Cmd+Enter` di macOS): Membuat catatan baru dengan konten catatan sumber.

Untuk menggabungkan catatan aktif dengan catatan lain di brankas Anda:

**Penjelajah file**

1. Di Penjelajah berkas, klik kanan catatan yang ingin Anda gabungkan.
2. Klik **Gabungkan kesemua berkas dengan...**.
3. Pilih catatan tujuan penggabungan.
4. Klik **Gabungkan** untuk mengonfirmasi.

**Palet perintah**

1. Buka [[Palet perintah]].
2. Pilih **Komposer catatan: Gabungkan berkas ini dengan berkas lain...**.
3. Pilih catatan tujuan penggabungan.
4. Klik **Gabungkan** untuk mengonfirmasi.

> [!tip] Tip
> Secara bawaan, Komposer catatan meminta Anda untuk mengonfirmasi saat menggabungkan catatan. Jika Anda menonaktifkan konfirmasi, dan Anda menggabungkan catatan secara tidak sengaja, Anda masih dapat memulihkannya dengan plugin [[Pemulih berkas]].

## Ekstrak catatan

Ketika Anda memilih catatan tujuan ekstraksi, Anda dapat memilih antara metode berikut:

- `Enter`: Menambahkan teks terpilih di _akhir_ catatan tujuan.
- `Shift+Enter`: Menambahkan teks terpilih di _awal_ catatan tujuan.
- `Ctrl+Enter` (atau `Cmd+Enter` di macOS): Membuat catatan baru dengan teks terpilih.

Untuk mengekstrak teks ke dalam catatan baru:

**Editor**

1. Saat dalam **Pengubah**, pilih teks yang ingin Anda ekstrak.
2. Klik kanan teks yang dipilih.
3. Klik **Ekstrak seleksi ini...**.
4. Pilih catatan tujuan ekstraksi.

**Palet perintah**

1. Saat dalam **Pengubah**, pilih teks yang ingin Anda ekstrak.
2. Buka [[Palet perintah]].
3. Pilih **Komposer catatan: Ekstrak seleksi ini...**.
4. Pilih catatan tujuan ekstraksi.

> [!tip] Tip
> Secara bawaan, Komposer catatan mengganti teks yang diekstrak dengan tautan ke catatan tujuan. Di pengaturan, Anda juga dapat mengubahnya untuk [[Sematkan file|menyematkan]] catatan tujuan, atau tidak menyisakan apa pun.

## File templat

Dengan mengonfigurasi templat, Anda dapat menyesuaikan konten sebelum menambahkannya ke catatan baru. Untuk menggunakan templat, masukkan **Lokasi berkas template** di pengaturan plugin.

Templat dapat berisi variabel berikut:

| Variabel          | Deskripsi                                                                                                                                              |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Konten yang akan digabungkan, atau teks seleksi yang diekstrak. Jika Anda tidak menyertakan variabel ini, Komposer catatan menambahkan konten di bagian bawah templat. |
| `{{fromTitle}}`   | Nama catatan sumber.                                                                                                                                 |
| `{{newTitle}}`    | Nama catatan tujuan. Contohnya, untuk menambahkan nama file sebagai judul di bagian atas file.                                                     |
| `{{date:FORMAT}}` | Tanggal pembuatan catatan baru. Contohnya, `{{date:YYYY-MM-DD}}`.                                                                                       |

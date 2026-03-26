---
permalink: publish/sites
aliases:
  - Obsidian Publish/Mengelola situs
---
Halaman ini menjelaskan cara mengelola situs [[Pengantar Obsidian Publish|Obsidian Publish]].

Sebuah situs adalah kumpulan catatan yang dihosting oleh Obsidian Publish dan tersedia secara daring, baik melalui alamat Obsidian Publish maupun [[Domain kustom|domain kustom]].

## Membuat situs baru

> [!note] Jumlah situs yang dapat Anda miliki secara bersamaan ditentukan oleh langganan Obsidian Publish Anda. Sebelum membuat situs baru, pastikan langganan Anda mengizinkannya.

1. Di bilah alat, di sisi kiri jendela aplikasi, klik **Publikasikan perubahan** ![[lucide-send.svg#icon]].
2. Jika Anda sudah memiliki situs, klik **Alihkan situs** ![[lucide-repeat.svg#icon]].
3. Di **ID situs**, masukkan alur yang Anda inginkan untuk situs Anda. Misalnya, situs dengan ID `my-amazing-site` tersedia di publish.obsidian.md/my-amazing-site.
4. Klik **Buat**.

## Menghapus situs yang ada

> [!note] Catatan tetap ada di brankas Anda meskipun Anda menghapus situs.

1. Di bilah alat, di sisi kiri jendela aplikasi, klik **Publikasikan perubahan** ![[lucide-send.svg#icon]].
2. Klik **Alihkan situs** ![[lucide-repeat.svg#icon]].
3. Klik **Hapus situs** ![[lucide-x.svg#icon]] di sebelah kanan situs yang ingin Anda hapus.
4. Klik **Hapus** untuk mengonfirmasi.

## Beralih antar situs

1. Di bilah alat, di sisi kiri jendela aplikasi, klik **Publikasikan perubahan** ![[lucide-send.svg#icon]].
2. Klik **Alihkan situs** ![[lucide-repeat.svg#icon]].
3. Klik **Pilih** di sebelah kanan situs yang ingin Anda tuju.

## Mengubah ID situs

1. Di bilah alat, di sisi kiri jendela aplikasi, klik **Publikasikan perubahan** ![[lucide-send.svg#icon]].
2. Klik **Alihkan situs** ![[lucide-repeat.svg#icon]].
3. Klik **Ubah ID situs** ![[lucide-edit-3.svg#icon]] di sebelah kanan situs yang ingin Anda ubah.
4. Di **ID situs**, masukkan ID baru untuk situs Anda.
5. Klik **Ubah**.

## Melihat opsi situs

1. Di bilah alat, di sisi kiri jendela aplikasi, klik **Publikasikan perubahan** ![[lucide-send.svg#icon]].
2. Di dialog **Publikasikan perubahan**, klik **Ubah pengaturan situs** ![[lucide-cog.svg#icon]].

## Opsi situs

### Umum

| Opsi                                        | Tipe   | Deskripsi                                                                                                                      |
| ------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Nama situs                                  | Input  | Nama publik dan judul situs Obsidian Publish Anda.                                                                             |
| Berkas laman                                | Input  | Lokasi file Markdown yang ingin Anda jadikan halaman utama.                                                                    |
| Logo                                        | Input  | Gambar yang ingin Anda jadikan banner situs. Gambar harus [[Publikasikan konten Anda#Publish notes\|dipublikasikan]].           |
| Kolaborasi situs                            | Tombol | Tentukan pengguna lain yang ingin Anda beri akses untuk menyunting catatan yang dipublikasikan. Pengguna harus memiliki akun Obsidian. |
| Domain kustom                               | Tombol | [[Domain kustom]]                                                                                                              |
| Jangan izinkan mesin cari mengindeks        | Toggle | Mencegah mesin pencari yang kooperatif merayapi situs Anda dengan menambahkan file `robots.txt`.                               |

### Tampilan

| Opsi                   | Tipe     | Deskripsi                                                                                            |
|------------------------|----------|------------------------------------------------------------------------------------------------------|
| Tema                   | Dropdown | Pilih bagaimana tema ditampilkan di situs Anda; **Terang**, **Gelap**, atau **Mengikuti sistem**.    |
| Peralih terang/gelap   | Toggle   | Izinkan pengguna untuk beralih mode **Terang**/**Gelap** dengan tombol peralih di situs Anda.        |

## Pengalaman membaca

| Opsi                           | Tipe   | Deskripsi                                                                                                  |
|--------------------------------|--------|------------------------------------------------------------------------------------------------------------|
| Tampilkan pratinjau melayang   | Toggle | Aktifkan atau matikan pratinjau halaman saat mengarahkan kursor ke tautan internal yang aktif.              |
| Sembunyikan judul laman        | Toggle | Aktifkan atau matikan judul sebaris dari catatan yang dipublikasikan untuk ditampilkan.                     |
| Panjang baris yang dapat dibaca| Toggle | Aktifkan atau matikan panjang baris yang dapat dibaca di situs Anda.                                       |
| Pemisah baris ketat            | Toggle | Aktifkan atau matikan pemisah baris tunggal agar ditampilkan di situs Anda.                                |
| Gunakan jendela geser          | Toggle | Aktifkan atau matikan [[Tab#Stack tab groups\|Tab bertumpuk]] di situs Anda.                               |

### Komponen

| Opsi                         | Tipe   | Deskripsi                                                                                                                                          |
|------------------------------|--------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| Tampilkan navigasi           | Toggle | Aktifkan atau matikan tampilan [[Penjelajah berkas]] di situs publish Anda.                                                                        |
| Kustomisasi navigasi         | Tombol | [[Kustomisasi situs Anda#Customize navigation\|Kustomisasi]] urutan file Anda ditampilkan jika **Tampilkan navigasi** diaktifkan.                  |
| Tampilkan bilah penelusuran  | Toggle | Aktifkan atau matikan bilah pencarian di situs Anda.                                                                                               |
| Tampilkan tapilan grafik     | Toggle | Aktifkan atau matikan tampilan grafik di bilah sisi kanan situs Anda.                                                                              |
| Tampilkan daftar isi         | Toggle | Aktifkan atau matikan tampilan [[Kerangka\|Daftar isi]] di situs Anda.                                                                             |
| Tampilkan backlink           | Toggle | Aktifkan atau matikan [[Backlink]] di situs Anda.                                                                                                  |

### Pengaturan lain situs

| Opsi                                    | Tipe   | Deskripsi                                                                                                          |
| --------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------ |
| Kata sandi                              | Tombol | [[Obsidian Publish/Keamanan dan privasi#Add a site password\|Atur kata sandi]] untuk membatasi akses ke seluruh situs Anda. |
| Kode pelacakan Google Analytics         | Input  | **Hanya untuk URL Domain Kustom**. Tempatkan kode pelacakan Google Analytics situs Anda di sini.                   |

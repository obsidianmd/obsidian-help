---
permalink: import/notion
---
Obsidian memungkinkan Anda dengan mudah memigrasikan catatan dari Notion menggunakan [[Importer|plugin Importer]]. Ini akan mengonversi data Notion Anda menjadi file Markdown yang tahan lama yang dapat Anda gunakan secara offline dengan Obsidian dan banyak aplikasi lainnya.

Obsidian menawarkan dua cara untuk mengimpor data Notion Anda:

1. **Impor API** mempertahankan seluruh ruang kerja Anda termasuk Database dan rumus yang dikonversi menjadi [[Pengenalan Basis|Basis]], tetapi memerlukan token integrasi Notion dan koneksi internet.
2. **Impor file** tidak mempertahankan Database tetapi tidak memerlukan token API atau koneksi internet.

## Impor API

### Membuat token integrasi API Notion

Untuk mengakses data Notion Anda melalui API, Anda memerlukan token integrasi. Langkah ini membutuhkan waktu sekitar 2 menit untuk diselesaikan.

Token tersebut adalah rangkaian panjang angka dan huruf yang biasanya dimulai dengan `ntn_...` yang memungkinkan Anda mengunduh data dari Notion.

1. Masuk ke dasbor [Notion Integrations](https://www.notion.so/profile/integrations/internal) Anda.
2. Pilih **New integration**.

![[notion-integration.png#interface]]

2. Beri nama integrasi Anda, misalnya "Personal". Nama apa pun dapat digunakan.
3. Pilih ruang kerja yang ingin Anda ekspor.
4. Klik **Save** dan lanjutkan ke **Configure integration settings**.
5. Di tab **Configuration**, token API Anda dapat diakses di kolom **Internal Integration Secret**.
6. Pilih **Show** lalu **Copy**.
7. Simpan token tersebut di tempat yang aman seperti pengelola kata sandi Anda.

![[notion-token.png#interface]]

Selanjutnya, berikan integrasi Anda akses ke halaman dan database Notion yang ingin Anda impor.

1. Buka tab **Access** dari integrasi yang baru Anda buat.
2. Klik **Edit access**.
3. Tambahkan halaman dan database yang ingin Anda impor.

Sekarang Anda dapat mengonversi data Anda menggunakan Obsidian Importer.

### Mengimpor data Notion Anda melalui API

Anda memerlukan plugin resmi Obsidian [[Importer]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Notion (API)**
6. Di bagian **API token**, tempel **Internal Integration Secret** Anda dari Notion.
7. Klik **Muat** untuk memilih database dan halaman yang ingin Anda impor.
8. Tinjau dan ubah opsi impor.
9. Pilih **Impor** dan tunggu hingga impor selesai
10. Selesai!

### Batasan

> [!info] Impor API masih baru
> Importer API Notion masih baru. Karena kompleksitas ruang kerja Notion, beberapa kasus khusus mungkin belum diperhitungkan. Jika Anda menemui masalah dengan konversi, [kirim laporan bug](https://github.com/obsidianmd/obsidian-importer/issues) agar kami dapat memperbaikinya.

Karena batas kecepatan API Notion, mengimpor ruang kerja besar mungkin memerlukan waktu yang cukup lama. Harap bersabar.

Karena keterbatasan dalam API Notion, beberapa data tidak tersedia atau tidak dapat dikonversi:

- Hanya tampilan utama untuk setiap database yang diimpor.
- [Sumber data terhubung](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) tidak diimpor: *"API Notion saat ini tidak mendukung sumber data terhubung. Saat membagikan database dengan integrasi Anda, pastikan database tersebut berisi sumber data asli!"*
- Fungsi `People`: `name()` dan `email()`
- Fungsi `Text`: `style()` dan `unstyle()`

Selain itu, Importer akan melakukan perubahan berikut:

- Halaman tanpa subhalaman atau database akan diimpor sebagai `[namafile].md` alih-alih `[namafile]/[namafile].md`.
- Database selalu direpresentasikan sebagai folder bernama `[nama database]` dengan file `[nama database].base` di dalamnya.

## Impor file

Impor file adalah cara alternatif untuk mengimpor data Notion Anda. Metode ini tidak mempertahankan Database tetapi tidak memerlukan token API atau koneksi internet.

### Mengekspor data Anda dari Notion

Untuk mempersiapkan data Anda untuk impor, Anda perlu mengekspor seluruh ruang kerja menggunakan format ekspor HTML Notion. Kami menyarankan agar Anda tidak menggunakan ekspor Markdown Notion karena mengabaikan data penting. Anda harus memiliki akses admin ke ruang kerja Notion untuk mengekspor semua konten ruang kerja.

1. Buka **[[Pengaturan]]** di bagian atas bilah samping Notion.
2. Di bagian **Workspace** pilih **General**.
3. Temukan dan pilih **Export all workspace content**.
4. Di bagian **Export format** pilih **HTML**.
5. Pilih **Include everything**.
6. Aktifkan **Create folders for subpages**.
7. Anda akan menerima file `.zip` melalui email atau langsung di browser.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Mengimpor file .zip Notion Anda

Anda memerlukan plugin resmi Obsidian [[Importer]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Notion (.zip)**
6. Pilih file `.zip` berisi file Notion yang ingin Anda impor. *Disarankan untuk mengimpor semua Notion Anda sekaligus agar tautan internal dapat direkonsiliasi dengan benar.*
7. _Opsional_, pilih folder untuk impor. Halaman dan database Notion Anda akan disusun di dalam folder ini.
8. Aktifkan **Save parent pages in subfolders** untuk mempertahankan struktur Notion. *Perlu diketahui bahwa di Notion Anda dapat menulis konten di Folder, ini tidak mungkin dilakukan di Obsidian dan halaman-halaman tersebut akan ditambahkan sebagai subhalaman di bawah folder.*
9. Pilih **Impor** dan tunggu hingga impor selesai
10. Selesai!

### Pemecahan masalah

Jika Anda mengalami masalah saat mengimpor dari Notion:

- Pastikan Anda menggunakan **HTML** sebagai format ekspor di Notion, **bukan Markdown**.
- Jika Obsidian tampak tidak responsif selama impor, matikan plugin komunitas dan coba lagi.

Menemui masalah lain? Cari di [repositori Importer](https://github.com/obsidianmd/obsidian-importer/issues) untuk melihat apakah orang lain pernah mengalaminya.

#### Mengimpor ruang kerja besar

Jika Anda mengimpor ruang kerja dengan data berukuran beberapa gigabyte, ekspor dari Notion mungkin berisi file `.zip` bersarang. Dalam kasus ini Anda mungkin melihat pesan kesalahan impor yang terlihat seperti ini:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Jika Anda melihat kesalahan ini, Anda dapat mengekstrak file dari Notion, lalu mengimpor file `Export-{id}-Part-1.zip` yang bersarang.

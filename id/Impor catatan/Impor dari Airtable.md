---
permalink: import/airtable
---
Obsidian memungkinkan Anda untuk memigrasikan data dari Airtable menggunakan [[Impor|plugin Impor]]. Ini akan mengonversi basis Airtable Anda menjadi file Markdown yang tahan lama yang dapat Anda gunakan secara offline dengan Obsidian dan banyak aplikasi lainnya.

Setiap tabel menjadi folder catatan dengan satu catatan per rekaman, ditambah file [[Pengenalan Basis|Basis]] yang membuat ulang tabel dan tampilannya. Karena menggunakan Airtable API, impor memerlukan token akses personal dan koneksi internet.

## Buat token akses personal Airtable

Untuk mengakses data Airtable Anda melalui API, Anda memerlukan token akses personal. Langkah ini membutuhkan waktu sekitar 1 menit untuk diselesaikan.

Token adalah string panjang berisi angka dan huruf yang biasanya dimulai dengan `pat...` yang memungkinkan Anda mengunduh data dari Airtable.

1. Masuk ke Airtable dan buka halaman [Personal access tokens](https://airtable.com/create/tokens) di pengaturan akun Anda.
2. Pilih **Create new token**.
3. Beri nama token Anda, misalnya "Obsidian". Nama apa saja dapat digunakan.
4. Di bagian **Scopes**, tambahkan `data.records:read` dan `schema.bases:read`.
5. Di bagian **Access**, tambahkan basis yang ingin Anda impor, atau pilih semua basis dalam satu ruang kerja.
6. Pilih **Create token**, lalu **Copy** token tersebut.
7. Simpan token di tempat yang aman seperti pengelola kata sandi Anda.

Airtable hanya menampilkan token satu kali. Jika Anda kehilangannya, buat yang baru.

## Impor data Airtable Anda

Anda memerlukan plugin resmi Obsidian [[Impor|Impor]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Impor](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Impor.
4. Buka plugin **Impor** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Airtable (API)**.
6. Di bagian **Airtable Personal Access Token**, tempel token yang telah Anda buat.
7. Klik **Muat** untuk menelusuri basis Anda, lalu pilih tabel yang ingin Anda impor.
8. Tinjau dan ubah pengaturan impor.
9. Pilih **Impor** untuk mengonfigurasi bagaimana bidang Anda akan dikonversi menjadi catatan dengan [[Properti|properti]].
10. Klik **Lanjutkan** dan tunggu hingga impor selesai.
11. Selesai!

### Pengaturan impor

- **Convert formulas** — pilih apakah bidang formula, lookup, rollup, dan count ditulis ulang sebagai [[Rumus|rumus Basis]], kembali ke nilai yang dihitung Airtable ketika tidak ada padanan, atau diimpor sebagai nilai statis saja.
- **Unduh lampiran** — simpan file lampiran ke brankas Anda, menggunakan pengaturan folder lampiran dan format tautan Anda. Jika dinonaktifkan, atau ketika unduhan gagal, catatan akan menautkan ke URL file di Airtable.
- **View property name** — properti yang mencatat tampilan Airtable mana yang dimiliki suatu rekaman. Setiap tampilan dalam Basis yang dihasilkan memfilter berdasarkan properti ini. Nilai bawaan adalah `base`.
- **Incremental import** — menambahkan properti `airtable-id` ke setiap catatan sehingga impor berikutnya dapat melewati rekaman yang sudah diimpor. Pada impor penuh, properti ini dihapus kembali.

## Konfigurasi bagaimana bidang Airtable diimpor

Pada langkah kedua impor, Anda dapat memilih bagaimana setiap bidang diimpor.

Setiap bidang dalam tabel Anda diberikan variabel bernama `{{field_name}}`. Secara bawaan setiap bidang menjadi properti, dan Anda dapat menggunakan variabel ini untuk mengganti nama properti, mengubah nilainya, atau menulis konten ke dalam isi setiap catatan.

Bidang utama setiap tabel selalu digunakan sebagai judul catatan, dan rekaman selalu ditempatkan di folder yang dinamai sesuai tabelnya, sehingga pengaturan tersebut tidak dapat dikonfigurasi.

## Apa yang diimpor

Untuk basis bernama `Projects` dengan tabel `Tasks`, importir membuat:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Satu catatan per rekaman, dengan bidang utama sebagai judul catatan, dan bidang lainnya sebagai [[Properti|properti]].
- Satu file `.base` per tabel, dengan setiap tampilan Airtable dipetakan ke [[Tampilan|tampilan Basis]]:
	- **Grid** menjadi [[Tampilan tabel]].
	- **Gallery** menjadi [[Tampilan kartu]].
	- **List** menjadi [[Tampilan daftar]].
	- Semua tipe tampilan lainnya dikonversi ke tampilan tabel.
- Tipe bidang Airtable dipetakan ke tipe properti Obsidian, tanpa menimpa tipe yang sudah Anda atur.
- Rekaman yang ditautkan menjadi tautan ke catatan yang sesuai.
- Lampiran diunduh ke brankas Anda menggunakan pengaturan brankas Anda.

## Keterbatasan

> [!info] Impor Airtable masih baru
> Importir Airtable masih baru. Jika Anda menemukan masalah dengan konversi, [kirim laporan bug](https://github.com/obsidianmd/obsidian-importer/issues) agar kami dapat memperbaikinya.

Karena batasan kecepatan API Airtable, mengimpor basis yang besar mungkin membutuhkan waktu yang cukup lama. Harap bersabar.

Karena keterbatasan API Airtable, beberapa data tidak tersedia atau tidak dapat dikonversi:

- Nilai rollup tidak diimpor. API tidak menyediakan agregasi yang digunakan untuk nilai yang dihitung rollup, sehingga hanya nama properti yang ditulis, bersama dengan rumus Basis ketika skema bidang menyediakan ekspresi.
- Rumus yang menggunakan fungsi yang tidak memiliki padanan di Obsidian, seperti `SWITCH`, `FIND`, `REGEX_EXTRACT`, dan `SQRT`, kembali ke nilai statis dari Airtable.
- Hanya tampilan grid, gallery, dan list yang diimpor. Tipe tampilan lainnya, seperti calendar, kanban, timeline, dan Gantt, diabaikan.
- Tautan ke rekaman dalam tabel yang tidak Anda pilih menjadi judul teks biasa rekaman tersebut, bukan tautan.
- Desain antarmuka, otomasi, komentar, dan riwayat revisi tidak diimpor.

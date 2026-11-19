---
permalink: plugins/canvas
mobile: true
---
Canvas adalah [[Plugin inti|plugin inti]] untuk pencatatan visual. Plugin ini memberi Anda ruang tak terbatas untuk menata catatan dan menghubungkannya ke catatan lain, lampiran, dan halaman web.

Mengatur catatan Anda dalam ruang 2D membantu Anda melihat dan memahami koneksi di antara mereka. Hubungkan catatan dengan garis dan kelompokkan catatan terkait.

Obsidian menyimpan kanvas sebagai file `.canvas` menggunakan format terbuka [JSON Canvas](https://jsoncanvas.org/).

## Membuat kanvas baru

Untuk mulai menggunakan Canvas, Anda perlu membuat file untuk menyimpan kanvas Anda terlebih dahulu. Anda dapat membuat kanvas baru menggunakan metode berikut.

**Palet perintah:**

1. Buka [[Palet perintah]].
2. Pilih **Canvas: Buat kanvas baru** untuk membuat kanvas di folder yang sama dengan file aktif.

**Penjelajah file:**

- Di [[Penjelajah berkas]], klik kanan folder tempat Anda ingin membuat kanvas.
- Pilih **Kanvas baru**.

**Bilah alat:**

- Di menu bilah alat vertikal, pilih **Buat kanvas baru** ![[lucide-layout-dashboard.svg#icon]] untuk membuat kanvas di folder yang sama dengan file aktif.

> [!note] Extension file .canvas
> Obsidian menyimpan data kanvas Anda sebagai file `.canvas` menggunakan format file terbuka yang disebut [JSON Canvas](https://jsoncanvas.org/).

## Menambahkan kartu

Anda dapat menyeret file ke kanvas dari Obsidian atau dari aplikasi lain. Misalnya, file Markdown, gambar, audio, PDF, atau bahkan jenis file yang tidak dikenali.

### Menambahkan kartu teks

Anda dapat menambahkan kartu khusus teks yang tidak mereferensikan file. Anda dapat menggunakan Markdown, tautan, dan blok kode dengan cara yang sama seperti dalam catatan.

Untuk menambahkan kartu teks baru ke kanvas Anda:

- Pilih atau seret ikon file kosong di bagian bawah kanvas.

Anda juga dapat menambahkan kartu teks dengan mengklik dua kali pada kanvas.

Untuk mengubah kartu teks menjadi file:

1. Klik kanan kartu teks lalu pilih **Ubah ke berkas...**.
2. Masukkan nama catatan lalu pilih **Simpan**.

> [!note] Kartu khusus teks dan tautan balik
> Kartu khusus teks tidak muncul di [[Backlink]]. Agar muncul, Anda perlu mengubahnya menjadi file.

### Menambahkan kartu dari catatan

Untuk menambahkan catatan dari brankas ke kanvas Anda:

1. Pilih atau seret ikon dokumen di bagian bawah kanvas.
2. Pilih catatan yang ingin Anda tambahkan.

Anda juga dapat menambahkan catatan dari menu konteks kanvas:

1. Klik kanan kanvas lalu pilih **Tambah catatan dari vault**.
2. Pilih catatan yang ingin Anda tambahkan.

Anda juga dapat menyeret catatan dari [[Penjelajah berkas]] ke kanvas.

Untuk menampilkan hanya sebagian catatan di kartu, klik kanan kartu dan pilih **Sempitkan ke judul...** atau **Sempitkan ke blok...**. Lalu pilih judul atau blok yang diinginkan.

### Menambahkan kartu dari media

Untuk menambahkan media dari brankas ke kanvas Anda:

1. Pilih atau seret ikon file gambar di bagian bawah kanvas.
2. Pilih file media yang ingin Anda tambahkan.

Anda juga dapat menambahkan media dari menu konteks kanvas:

1. Klik kanan kanvas lalu pilih **Tambah media dari vault**.
2. Pilih file media yang ingin Anda tambahkan.

Anda juga dapat menyeret file media dari [[Penjelajah berkas]] ke kanvas.

### Menambahkan kartu dari halaman web

Untuk menyematkan halaman web di kanvas Anda:

1. Klik kanan kanvas lalu pilih **Tambah laman web**.
2. Masukkan URL halaman web lalu pilih **Simpan**.

Anda juga dapat memilih URL di browser lalu menyeretnya ke kanvas untuk menyematkannya di kartu.

Untuk membuka halaman web di browser Anda, tekan `Ctrl` (atau `Cmd` di macOS) dan pilih label kartu. Atau, klik kanan kartu dan pilih **Buka tautan eksternal**.

Klik kanan kartu halaman web untuk opsi lebih lanjut.

- **Salin URL** menyalin alamat halaman web.
- **Ubah URL...** mengubah alamat yang ditampilkan kartu.
- **Muat ulang halaman** memuat ulang halaman web.

### Menambahkan kartu dari basis

Untuk menampilkan [[Pengenalan Basis|basis]] di kanvas Anda, seret file basis dari Penjelajah berkas ke kanvas. Kartu akan menampilkan basis tersebut.

Kartu basis menampilkan tampilan bawaan dari basis. Untuk menampilkan tampilan lain:

1. Klik kanan kartu dan pilih **Sematkan tampilan...**.
2. Pilih tampilan yang Anda inginkan.

Untuk kembali ke tampilan bawaan, pilih **Sematkan tampilan...** lagi, lalu pilih **Tampilkan tampilan bawaan**.

### Menambahkan kartu dari folder

Seret folder dari [[Penjelajah berkas]] untuk menambahkan semua file dalam folder tersebut ke kanvas.

### Mengedit kartu

Klik dua kali pada kartu teks atau catatan untuk mulai mengeditnya. Pilih di mana saja di luar kartu untuk berhenti mengedit. Anda juga dapat menekan `Escape` untuk berhenti mengedit kartu.

Anda juga dapat mengedit kartu dengan mengklik kanan dan memilih **Ubah**. Atau, pilih kartu lalu pilih **Ubah** ![[lucide-square-pen.svg#icon]] di kontrol seleksi.

### Menghapus kartu

Hapus kartu yang dipilih dengan mengklik kanan salah satunya, lalu pilih **Hapus**. Atau, tekan `Backspace` (atau `Delete` di macOS).

Anda juga dapat memilih **Hapus** ![[lucide-trash-2.svg#icon]] di kontrol seleksi di atas pilihan Anda.

### Menukar kartu

Anda dapat menukar kartu catatan atau media dengan kartu lain dari jenis yang sama.

Untuk menukar kartu catatan:

1. Klik kanan kartu yang ingin Anda ganti.
2. Pilih **Tukar file**.
3. Pilih catatan yang ingin Anda gunakan sebagai pengganti.

## Memilih kartu

Pilih kartu individual, atau seret seleksi di sekitar beberapa kartu.

Anda juga dapat menambah dan menghapus kartu dari seleksi yang ada dengan menekan `Shift` dan memilihnya.

Tekan `Ctrl+a` (atau `Cmd+a` di macOS) untuk memilih semua kartu di kanvas.

Untuk menggulir konten kartu, Anda perlu memilihnya terlebih dahulu.

### Mengatur kartu

Seret kartu yang dipilih untuk memindahkannya.

Tekan `Alt` (atau `Option` di macOS) dan seret untuk menduplikasi seleksi.

Anda dapat menekan `Shift` saat menyeret untuk hanya bergerak dalam satu arah.

Tekan `Space` saat memindahkan seleksi untuk menonaktifkan penempelan.

Memilih kartu akan memindahkannya ke depan.

### Mengubah ukuran kartu

Seret salah satu tepi kartu untuk mengubah ukurannya.

Anda dapat menekan `Space` saat mengubah ukuran untuk menonaktifkan penempelan.

Untuk mempertahankan rasio aspek saat mengubah ukuran, tekan `Shift` saat mengubah ukuran.

### Meratakan dan mengatur kartu

Untuk menyejajarkan beberapa kartu, pilih dua atau lebih kartu. Di kontrol seleksi, pilih **Perata**, lalu pilih opsi.

- **Rata kiri**, **Rata tengah**, dan **Rata kanan** menyejajarkan kartu pada garis vertikal.
- **Rata atas**, **Rata pusat**, dan **Rata bawah** menyejajarkan kartu pada garis horizontal.
- **Atur dalam satu baris**, **Atur dalam satu kolom**, dan **Atur dalam satu kisi** memindahkan kartu ke tata letak tersebut.
- **Sebarkan secara horizontal** dan **Sebarkan secara vertikal** memberi jarak kartu secara merata.
- **Ratakan secara horizontal** dan **Ratakan secara vertikal** mengubah ukuran setiap kartu agar sesuai dengan lebar atau tinggi penuh seleksi.

## Menghubungkan kartu

Gambar garis antar kartu untuk menunjukkan hubungan. Tambahkan warna dan label untuk menjelaskan bagaimana mereka saling terkait.

### Menghubungkan dua kartu

Untuk menghubungkan dua kartu dengan garis berarah:

1. Arahkan kursor ke salah satu tepi kartu hingga Anda melihat lingkaran terisi.
2. Seret lingkaran tersebut ke tepi kartu lain untuk menghubungkannya.

> [!tip]- Membuat kartu dari koneksi baru
> Jika Anda menyeret garis tanpa menghubungkannya ke kartu lain, Anda dapat membuat kartu baru di ujung lainnya.

### Memutuskan hubungan dua kartu

Untuk menghapus koneksi antara dua kartu:

1. Arahkan kursor ke garis koneksi hingga dua lingkaran kecil muncul pada garis tersebut.
2. Seret salah satu lingkaran dari kartu tanpa menghubungkannya ke kartu lain.

Anda juga dapat memutuskan hubungan dua kartu dengan mengklik kanan garis di antara mereka, lalu memilih **Hapus**. Atau, pilih garis tersebut lalu tekan `Backspace` (atau `Delete` di macOS).

### Menghubungkan kartu ke kartu lain

Untuk memindahkan salah satu ujung garis koneksi:

1. Arahkan kursor ke garis koneksi hingga dua lingkaran kecil muncul pada garis tersebut.
2. Seret lingkaran ke kartu lain untuk menghubungkannya kembali.

### Menavigasi koneksi

Jika dua kartu yang terhubung berjauhan, Anda dapat melompat ke kartu di ujung lain koneksi. Klik kanan garis dekat salah satu ujung, lalu pilih **Ikuti koneksi**. Kanvas akan berpindah ke kartu di ujung yang berlawanan.

### Menambahkan label ke koneksi

Anda dapat menambahkan label ke garis untuk menjelaskan hubungan antara dua kartu.

Untuk memberi label pada koneksi:

1. Klik dua kali pada garis.
2. Masukkan label lalu tekan `Escape` atau pilih di mana saja pada kanvas.

Anda juga dapat memberi label pada koneksi dengan memilihnya lalu memilih **Ubah label** dari kontrol seleksi.

Untuk mengedit label koneksi, klik dua kali pada garis, atau klik kanan garis lalu pilih **Ubah label**.

Untuk menghapus label, pilih koneksi lalu pilih **Hapus label** di kontrol seleksi.

### Mengubah arah koneksi

Secara bawaan, koneksi memiliki panah di ujung yang menunjuk ke kartu kedua. Untuk mengubahnya:

1. Pilih koneksi.
2. Di kontrol seleksi, pilih **Arah garis**.
3. Pilih **Tidak searah**, **Searah**, atau **Dua arah**.

### Mengubah warna kartu atau koneksi

1. Pilih kartu atau koneksi yang ingin Anda warnai.
2. Di kontrol seleksi, pilih **Atur warna** ![[lucide-palette.svg#icon]].
3. Pilih warna.

## Mengelompokkan kartu

### Mengelompokkan kartu yang dipilih

Untuk membuat grup kosong:

- Klik kanan kanvas lalu pilih **Buat grup**.

Untuk mengelompokkan kartu terkait:

1. Pilih kartu-kartu tersebut.
2. Klik kanan salah satu kartu yang dipilih lalu pilih **Buat grup**.

**Mengganti nama grup:** Klik dua kali nama grup untuk mengeditnya, lalu tekan `Enter` untuk menyimpan.

### Menambahkan latar belakang ke grup

Anda dapat menampilkan gambar di belakang kartu-kartu dalam grup.

1. Pilih grup.
2. Di kontrol seleksi, pilih **Atur latar**.
3. Pilih gambar dari brankas Anda.

Untuk mengubah latar belakang, pilih grup lalu pilih **Ubah latar**.

- **Ganti latar** memilih gambar yang berbeda.
- **Hapus latar** menghapus gambar.
- **Sampul** membuat gambar mengisi grup.
- **Biarkan aspek rasio** mempertahankan proporsi gambar.
- **Ulangi** menyusun gambar secara berulang di seluruh grup.

## Menavigasi kanvas

Gunakan penggeseran dan pembesaran untuk bergerak melintasi kanvas.

### Menggeser kanvas

Untuk memindahkan kanvas secara vertikal dan horizontal, juga dikenal sebagai _menggeser_, Anda dapat menggunakan salah satu pendekatan berikut:

- Tekan `Space` dan seret kanvas.
- Seret kanvas menggunakan tombol tengah mouse.
- Gulir mouse untuk menggeser secara vertikal, dan tekan `Shift` sambil menggulir untuk menggeser secara horizontal.

### Memperbesar kanvas

Untuk memperbesar kanvas, tekan `Space` atau `Ctrl` (atau `Cmd` di macOS) dan gulir menggunakan roda mouse. Atau, pilih **Perbesar** ![[lucide-plus.svg#icon]] dan **Perkecil** ![[lucide-minus.svg#icon]] dari kontrol zoom di pojok kanan atas.

#### Perbesar untuk paskan

Untuk memperbesar kanvas sehingga setiap item terlihat, pilih **Perbesar untuk paskan** ![[lucide-maximize.svg#icon]]. Atau, gunakan pintasan keyboard `Shift+1`.

#### Perbesar ke seleksi

Untuk memperbesar kanvas sehingga semua item yang dipilih terlihat, klik kanan kartu yang dipilih lalu pilih **Perbesar ke seleksi**. Atau, tekan `Shift+2`.

#### Atur ulang pembesaran

Untuk mengubah tingkat pembesaran kembali ke bawaan, pilih **Atur ulang pembesaran** di kontrol zoom di pojok kanan atas.


### Lompat ke grup

Untuk berpindah langsung ke grup dalam kanvas yang besar, buka palet perintah dan pilih **Canvas: Lompat ke grup**. Daftar grup di kanvas Anda akan muncul. Pilih grup yang ingin Anda tuju, dan kanvas akan berpindah ke tengahnya.

## Pengaturan kanvas

Pilih **Pengaturan kanvas** ![[lucide-settings.svg#icon]] di atas kontrol kanvas untuk mengubah perilaku kanvas Anda.

- **Kaitkan ke kisi** mengaitkan kartu ke kisi latar saat Anda memindahkan dan mengubah ukurannya.
- **Kaitkan ke objek** mengaitkan kartu ke kartu terdekat saat Anda memindahkan dan mengubah ukurannya.
- **Hanya-baca** mencegah perubahan pada kanvas.

## Mengekspor kanvas sebagai gambar

Anda dapat mengekspor kanvas sebagai gambar PNG di desktop. Mengekspor gambar tidak tersedia di aplikasi Obsidian pada perangkat seluler.

1. Buka kanvas yang ingin Anda ekspor.
2. Buka palet perintah dan pilih **Canvas: Ekspor sebagai gambar**.
3. Pilih pengaturan Anda.
    - **Viewport** mengatur apa yang diekspor. Pilih **Kanvas secara penuh** untuk seluruh kanvas, atau **Viewport saja** untuk bagian yang saat ini terlihat.
    - **Perbesar** mengatur kualitas gambar. Pembesaran yang lebih tinggi menghasilkan gambar yang lebih besar dan lebih tajam. Dialog menampilkan estimasi ukuran gambar.
    - **Tampilkan logo** menambahkan logo Obsidian di kiri bawah. Ini aktif secara bawaan.
    - **Mode Privat** menyembunyikan semua teks di kanvas Anda. Ini nonaktif secara bawaan.
4. Pilih **Simpan**.
5. Pilih tempat untuk menyimpan file. Nama file secara bawaan menggunakan nama kanvas Anda, dengan ekstensi `.png`.

Anda tidak dapat mengekspor kanvas kosong.

## Urungkan dan ulangi

Untuk mengurungkan perubahan terakhir, pilih **Urungkan** di kontrol kanvas di sisi kanan kanvas. Atau, tekan `Ctrl+Z` (Windows dan Linux) atau `Command+Z` (macOS).

Untuk mengulangi perubahan, pilih **Ulangi**. Atau, tekan `Ctrl+Y` atau `Ctrl+Shift+Z` (Windows dan Linux), atau `Command+Y` atau `Command+Shift+Z` (macOS).

## Bantuan kanvas

Di desktop, pilih **Bantuan kanvas** ![[lucide-help-circle.svg#icon]] di bawah kontrol kanvas untuk melihat daftar pintasan untuk menggeser, memperbesar, memilih, dan memindahkan kartu.

## Menyematkan kanvas

Anda dapat menyematkan kanvas dalam catatan menggunakan sintaks sematan standar. Untuk informasi lebih lanjut, lihat [[Sematkan file#Embed a canvas in a note|Menyematkan kanvas dalam catatan]].

## Menggunakan Canvas di perangkat seluler

Saat Anda membuka kanvas di ponsel atau tablet, Obsidian menampilkan tiga petunjuk.

- **Seret untuk menggeser**
- **Cubit untuk memperbesar**
- **Sentuh dan tahan untuk menambah / memindah / memilih**

### Membuka menu kanvas

Sentuh dan tahan area kosong di kanvas. Menu memiliki item berikut.

- **Tambah kartu** menambahkan kartu teks.
- **Tambah catatan dari vault** menambahkan catatan dari brankas Anda.
- **Tambah media dari vault** menambahkan media dari brankas Anda.
- **Tambah laman web** menyematkan halaman web.
- **Buat grup** membuat grup kosong.
- **Kaitkan ke kisi**, **Kaitkan ke objek**, dan **Hanya-baca** adalah opsi yang sama seperti di **Pengaturan kanvas**.

### Menambahkan kartu

Anda dapat menambahkan kartu dari menu kanvas. Anda juga dapat memilih ikon di bagian bawah kanvas.

- Ikon file kosong menambahkan kartu teks.
- Ikon dokumen menambahkan catatan dari brankas Anda.
- Ikon gambar menambahkan media dari brankas Anda.

### Bekerja dengan kartu yang dipilih

Ketuk kartu untuk memilihnya. Bilah alat muncul di atas kartu.

- **Hapus** ![[lucide-trash-2.svg#icon]] menghapus kartu.
- **Atur warna** ![[lucide-palette.svg#icon]] mengubah warna kartu.
- **Perbesar ke seleksi** memperbesar kanvas ke kartu.
- **Ubah** ![[lucide-square-pen.svg#icon]] mengedit kartu.

### Memindahkan kartu

1. Ketuk kartu untuk memilihnya.
2. Sentuh dan tahan kartu yang dipilih, lalu seret ke posisi baru.

### Mengubah ukuran kartu

1. Ketuk kartu untuk memilihnya.
2. Seret sisi kartu untuk membuatnya lebih besar atau lebih kecil.

### Membuka menu kartu

Sentuh dan tahan kartu. Menu memiliki item berikut.

- **Perbesar ke seleksi** memperbesar kanvas ke kartu.
- **Ubah** mengedit kartu.
- **Ubah ke berkas...** mengubah kartu teks menjadi catatan.
- **Duplikasi** membuat salinan kartu.
- **Hapus** menghapus kartu.

### Mengedit kartu

Untuk mengedit kartu teks atau kartu catatan, gunakan salah satu cara.

- Ketuk kartu untuk memilihnya, lalu ketuk dua kali. Keyboard akan terbuka.
- Ketuk kartu untuk memilihnya, lalu pilih **Ubah** ![[lucide-square-pen.svg#icon]] di bilah alat di atas kartu.

### Memberi label pada koneksi

1. Ketuk garis untuk memilihnya.
2. Di bilah alat, pilih **Ubah label** ![[lucide-square-pen.svg#icon]]. Keyboard akan terbuka.
3. Masukkan label.

Untuk menghapus label, ketuk garis lalu pilih **Hapus label** di bilah alat.

### Mengubah arah koneksi

1. Ketuk garis untuk memilihnya.
2. Di bilah alat, pilih **Arah garis**.
3. Pilih **Tidak searah**, **Searah**, atau **Dua arah**.

### Membuka menu garis

Sentuh dan tahan garis yang menghubungkan dua kartu. Menu memiliki item berikut.

- **Ubah label** menambahkan atau mengubah label garis.
- **Ikuti koneksi** memindahkan kanvas ke kartu di ujung berlawanan dari garis.
- **Hapus** menghapus koneksi.

### Menghubungkan kartu

1. Ketuk kartu untuk memilihnya.
2. Seret salah satu lingkaran di tepinya ke kartu lain.

Jika Anda menyeret garis dan melepaskannya di area kosong, menu akan terbuka dengan **Tambah kartu** dan **Tambah catatan dari vault**. Pilih salah satu untuk menambahkan kartu di ujung garis.

### Memutuskan koneksi kartu

Untuk menghapus koneksi, gunakan salah satu cara.

- Ketuk garis, lalu pilih **Hapus** ![[lucide-trash-2.svg#icon]].
- Seret ujung panah garis kembali ke kartu asalnya. Garis akan menghilang.

### Mengelompokkan kartu

Untuk membuat grup:

1. Sentuh dan tahan area kosong di kanvas.
2. Pilih **Buat grup**.
3. Seret tepi grup untuk mengubah ukurannya.

Untuk menambahkan kartu ke grup, seret kartu ke dalam area grup. Saat Anda memindahkan grup, kartu di dalamnya ikut berpindah.

Untuk mengganti nama grup, ketuk dua kali namanya. Keyboard akan terbuka. Masukkan nama baru.

### Kontrol kanvas

Kontrol di sisi kanan kanvas mengubah tampilan dan pengaturan Anda.

- **Perbesar** dan **Perkecil** mengubah tingkat pembesaran.
- **Atur ulang pembesaran** mengembalikan kanvas ke tingkat pembesaran bawaan.
- **Perbesar untuk paskan** menampilkan setiap kartu di kanvas.
- **Urungkan** dan **Ulangi** membalik atau mengulangi perubahan terakhir Anda.
- **Pengaturan kanvas** memiliki opsi **Kaitkan ke kisi**, **Kaitkan ke objek**, dan **Hanya-baca**.

## Tips lanjutan

Kami telah membuat beberapa video singkat untuk mendemonstrasikan beberapa kasus penggunaan lanjutan Canvas.

Anda dapat [melihat semua 72 tips di sini](https://obsidian.md/canvas#protips). Video tips hanya terlihat di desktop.

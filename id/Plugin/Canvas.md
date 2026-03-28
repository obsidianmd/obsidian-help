---
permalink: plugins/canvas
---
Canvas adalah [[Plugin inti|plugin inti]] untuk pencatatan visual. Plugin ini memberi Anda ruang tak terbatas untuk menata catatan dan menghubungkannya ke catatan lain, lampiran, dan halaman web.

Pencatatan visual membantu Anda memahami catatan dengan mengaturnya dalam ruang 2D. Hubungkan catatan dengan garis dan kelompokkan catatan terkait untuk lebih memahami hubungan di antara mereka.

Data Canvas yang Anda buat di Obsidian disimpan sebagai file `.canvas` menggunakan format file terbuka [JSON Canvas](https://jsoncanvas.org/).

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

Anda dapat menambahkan kartu khusus teks yang tidak mereferensikan file. Anda dapat menggunakan Markdown, tautan, dan blok kode seperti dalam catatan.

Untuk menambahkan kartu teks baru ke kanvas Anda:

- Pilih atau seret ikon file kosong di bagian bawah kanvas.

Anda juga dapat menambahkan kartu teks dengan mengklik dua kali pada kanvas.

Untuk mengubah kartu teks menjadi file:

1. Klik kanan kartu teks lalu pilih **Ubah ke berkas...**.
2. Masukkan nama catatan lalu pilih **Simpan**.

> [!note] Catatan
> Kartu khusus teks tidak muncul di [[Backlink]]. Agar muncul, Anda perlu mengubahnya menjadi file.

### Menambahkan kartu dari catatan

Untuk menambahkan catatan dari brankas ke kanvas Anda:

1. Pilih atau seret ikon dokumen di bagian bawah kanvas.
2. Pilih catatan yang ingin Anda tambahkan.

Anda juga dapat menambahkan catatan dari menu konteks kanvas:

1. Klik kanan kanvas lalu pilih **Tambah catatan dari vault**.
2. Pilih catatan yang ingin Anda tambahkan.

Atau, Anda dapat menambahkannya ke kanvas dengan menyeret file dari [[Penjelajah berkas]].

### Menambahkan kartu dari media

Untuk menambahkan media dari brankas ke kanvas Anda:

1. Pilih atau seret ikon file gambar di bagian bawah kanvas.
2. Pilih file media yang ingin Anda tambahkan.

Anda juga dapat menambahkan media dari menu konteks kanvas:

1. Klik kanan kanvas lalu pilih **Tambah media dari vault**.
2. Pilih file media yang ingin Anda tambahkan.

Atau, Anda dapat menambahkannya ke kanvas dengan menyeret file dari [[Penjelajah berkas]].

### Menambahkan kartu dari halaman web

Untuk menyematkan halaman web di kanvas Anda:

1. Klik kanan kanvas lalu pilih **Tambah laman web**.
2. Masukkan URL halaman web lalu pilih **Simpan**.

Anda juga dapat memilih URL di browser lalu menyeretnya ke kanvas untuk menyematkannya di kartu.

Untuk membuka halaman web di browser Anda, tekan `Ctrl` (atau `Cmd` di macOS) dan pilih label kartu. Atau, klik kanan kartu dan pilih **Buka di browser**.

### Menambahkan kartu dari folder

Seret folder dari penjelajah file untuk menambahkan semua file dalam folder tersebut ke kanvas.

### Mengedit kartu

Klik dua kali pada kartu teks atau catatan untuk mulai mengeditnya. Klik di luar kartu untuk berhenti mengedit. Anda juga dapat menekan `Escape` untuk berhenti mengedit kartu.

Anda juga dapat mengedit kartu dengan mengklik kanan dan memilih **Ubah**.

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

Pilih kartu di kanvas dengan mengkliknya. Anda dapat memilih beberapa kartu dengan menyeret seleksi di sekitarnya.

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

## Menghubungkan kartu

Gambar garis antar kartu untuk membuat hubungan di antara mereka. Gunakan warna dan label untuk menjelaskan bagaimana mereka saling terkait.

### Menghubungkan dua kartu

Untuk menghubungkan dua kartu dengan garis berarah:

1. Arahkan kursor ke salah satu tepi kartu hingga Anda melihat lingkaran terisi.
2. Seret lingkaran tersebut ke tepi kartu lain untuk menghubungkannya.

> [!tip] Tip
> Jika Anda menyeret garis tanpa menghubungkannya ke kartu lain, Anda kemudian dapat menambahkan kartu yang ingin Anda hubungkan.

### Memutuskan hubungan dua kartu

Untuk menghapus koneksi antara dua kartu:

1. Arahkan kursor ke garis koneksi hingga dua lingkaran kecil muncul pada garis tersebut.
2. Seret salah satu lingkaran dari kartu tanpa menghubungkannya ke kartu lain.

Anda juga dapat memutuskan hubungan dua kartu dengan mengklik kanan garis di antara mereka, lalu memilih **Hapus**. Atau, dengan memilih garis tersebut lalu menekan `Backspace` (atau `Delete` di macOS).

### Menghubungkan kartu ke kartu lain

Untuk memindahkan salah satu ujung garis koneksi:

1. Arahkan kursor ke garis koneksi hingga dua lingkaran kecil muncul pada garis tersebut.
2. Seret lingkaran di ujung yang ingin Anda hubungkan ulang, ke kartu lain.

### Menavigasi koneksi

Jika dua kartu yang terhubung berjauhan, Anda dapat menavigasi ke sumber atau target koneksi dengan mengklik kanan garis dan memilih **Pergi ke target** atau **Pergi ke sumber**.

### Menambahkan label ke koneksi

Anda dapat menambahkan label ke garis untuk menjelaskan hubungan antara dua kartu.

Untuk memberi label pada koneksi:

1. Klik dua kali pada garis.
2. Masukkan label lalu tekan `Escape` atau klik di mana saja pada kanvas.

Anda juga dapat memberi label pada koneksi dengan memilihnya lalu memilih **Ubah label** dari kontrol seleksi.

Untuk mengedit label koneksi, klik dua kali pada garis, atau klik kanan garis lalu pilih **Ubah label**.

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

## Menavigasi kanvas

Saat Anda mulai menambahkan lebih banyak kartu ke kanvas, Anda perlu memahami cara menavigasi kanvas untuk melihat bagian tertentu. Pelajari cara menggeser dan memperbesar untuk bergerak melintasi kanvas dengan mudah.

### Menggeser kanvas

Untuk memindahkan kanvas secara vertikal dan horizontal, juga dikenal sebagai _menggeser_, Anda dapat menggunakan salah satu pendekatan berikut:

- Tekan `Space` dan seret kanvas.
- Seret kanvas menggunakan tombol tengah mouse.
- Gulir mouse untuk menggeser secara vertikal, dan tekan `Shift` sambil menggulir untuk menggeser secara horizontal.

### Memperbesar kanvas

Untuk memperbesar kanvas, tekan `Space` atau `Ctrl` (atau `Cmd` di macOS) dan gulir menggunakan roda mouse. Atau, pilih **Perbesar** ![[lucide-plus.svg#icon]] dan **Perkecil** ![[lucide-minus.svg#icon]] dari kontrol zoom di pojok kanan atas.

#### Perbesar untuk paskan

Untuk memperbesar kanvas sehingga setiap item terlihat, pilih **Perbesar untuk paskan** ![[lucide-maximize.svg#icon]]. Atau, gunakan pintasan keyboard, `Shift+1`.

#### Perbesar ke seleksi

Untuk memperbesar kanvas sehingga semua item yang dipilih terlihat, klik kanan kartu yang dipilih lalu pilih **Perbesar ke seleksi**. Atau, gunakan pintasan keyboard dengan menekan `Shift+2`.

#### Atur ulang pembesaran

Untuk mengubah tingkat pembesaran kembali ke bawaan, pilih **Atur ulang pembesaran** di kontrol zoom di pojok kanan atas.

## Tips lanjutan

Kami telah membuat beberapa video singkat untuk mendemonstrasikan beberapa kasus penggunaan lanjutan Canvas.

Anda dapat [melihat semua 72 tips di sini](https://obsidian.md/canvas#protips). Harap dicatat bahwa video tips hanya terlihat di desktop.

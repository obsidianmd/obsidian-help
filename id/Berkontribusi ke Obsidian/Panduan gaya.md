---
permalink: style-guide
publish: true
mobile: true
description: Halaman ini menjelaskan panduan gaya untuk menulis dokumentasi dukungan kami.
---
Dokumentasi Obsidian mengikuti panduan gaya yang tercantum di halaman ini. Panduan ini didasarkan pada praktik terbaik industri, khususnya [panduan gaya dokumentasi pengembang Google](https://developers.google.com/style) dan [Panduan Gaya Microsoft](https://learn.microsoft.com/en-us/style-guide/). Untuk kasus-kasus khusus yang tidak tercakup di bawah ini, gunakan panduan eksternal tersebut sebagai referensi sekunder.

> [!tip]- Berkontribusi
> Sebagian besar dokumentasi sudah ada sebelum panduan gaya ini dibuat.
> 
> Jika Anda menemukan pelanggaran panduan gaya ini, silakan [buat issue](https://github.com/obsidianmd/obsidian-docs/issues/new) dan kirimkan pull request ke [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs).

## Terminologi dan tata bahasa

### Gaya bahasa

Untuk dokumentasi bahasa Inggris kami, disarankan menggunakan [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) untuk melayani audiens kami di seluruh dunia dengan lebih baik dan untuk membantu [[#Terjemahan]]. Ini berarti:

- Menghindari idiom dan ekspresi yang spesifik secara budaya
- Menggunakan kalimat aktif dan konstruksi kalimat langsung
- Memilih kata-kata sederhana dan umum daripada terminologi yang kompleks
- Bersikap eksplisit daripada tersirat
- Untuk konvensi ejaan, gunakan bahasa Inggris Amerika (misalnya, 'organize' bukan 'organise').

### Istilah

- Lebih baik gunakan "keyboard shortcut" daripada "hotkey". Gunakan Hotkey ketika merujuk pada fitur spesifik.
- Lebih baik gunakan "aplikasi Obsidian" di seluler, dan "aplikasi Obsidian" di desktop.
- Lebih baik gunakan "sync" atau "syncing" daripada "synchronise" atau "synchronising".
- Lebih baik gunakan "istilah pencarian" daripada "kueri pencarian".
- Lebih baik gunakan "heading" daripada "header" ketika merujuk pada teks yang memperkenalkan suatu bagian.
- Lebih baik gunakan "maximum" daripada "max" dan "minimum" daripada "min".

### Nama produk

Nama produk Obsidian dimulai dengan "Obsidian", misalnya "Obsidian Publish" dan "Obsidian Sync".

Jika sebuah paragraf menjadi terlalu repetitif, Anda dapat menggunakan bentuk singkat pada penyebutan berikutnya.

Misalnya:

_Untuk memungkinkan konfigurasi khusus perangkat, Obsidian Sync tidak menyinkronkan pengaturannya sendiri. Anda perlu mengonfigurasi Sync untuk setiap perangkat Anda._

### UI dan interaksi

- Gunakan **tebal** untuk menunjukkan teks tombol
- Lebih baik gunakan "pilih" daripada "ketuk" atau "klik".
	- Untuk instruksi khusus seluler, "ketuk" dapat diterima saat menjelaskan interaksi sentuh karena "klik" tidak tersedia.
- Lebih baik gunakan "bilah samping" daripada "side bar".
- Lebih baik gunakan "jalankan" daripada "invoke" dan "execute" ketika merujuk pada perintah atau tindakan.

Ketika merujuk pada beberapa interaksi UI secara berurutan, gunakan simbol → (U+2192). Misalnya, "**[[Pengaturan]] → Plugin komunitas**".

### Catatan, file, dan folder

- Gunakan "catatan" ketika merujuk pada file Markdown di brankas.
- Gunakan "file" ketika merujuk pada ekstensi file selain Markdown.
- Lebih baik gunakan "nama catatan" daripada "judul catatan".
- Lebih baik gunakan "catatan aktif" daripada "catatan saat ini".
- Lebih baik gunakan "folder" daripada "direktori".
- Lebih baik gunakan "tipe file" daripada "format file", kecuali jika secara spesifik merujuk pada format data dari konten file.

Ketika berpindah antar catatan, gunakan "buka" jika tujuan tersembunyi, dan "beralih" jika catatan sumber dan tujuan keduanya terbuka di panel terpisah.

### Dokumentasi referensi untuk pengaturan

Jika memungkinkan, pengaturan apa pun sebaiknya didokumentasikan di dalam Obsidian menggunakan teks deskriptif. Hindari mendokumentasikan pengaturan spesifik di Bantuan Obsidian kecuali:

- Memerlukan pengetahuan yang lebih mendalam tentang cara dan kapan menggunakannya.
- Sering disalahgunakan atau ditanyakan.
- Secara _drastis_ mengubah pengalaman pengguna.

Pertimbangkan menggunakan callout tip jika Anda ingin menarik perhatian ke pengaturan tertentu.

### Istilah arah

Gunakan tanda hubung pada istilah arah ketika menggunakannya sebagai kata sifat. Hindari tanda hubung ketika arah digunakan sebagai kata benda.

**Disarankan:**

- Pilih **[[Pengaturan]]** di pojok kiri bawah.
- Pilih **[[Pengaturan]]** di kiri bawah.

**Tidak disarankan:**

- Pilih **[[Pengaturan]]** di pojok kiri bawah. (tanpa tanda hubung saat digunakan sebagai kata sifat)
- Pilih **[[Pengaturan]]** di kiri-bawah. (dengan tanda hubung saat digunakan sebagai kata benda)

Lebih baik gunakan "kiri atas" dan "kanan atas" daripada "pojok kiri atas" dan "pojok kanan atas" jika tidak diperlukan.

Jangan menunjukkan arah ketika merujuk pada pengaturan. Lokasi kontrol pengaturan bergantung pada perangkat.

**Disarankan:**

- Di samping **Pilih brankas jarak jauh**, pilih **Pilih**.

**Tidak disarankan:**

- Di sebelah kanan **Pilih brankas jarak jauh**, pilih **Pilih**.

Ketika menjelaskan arah vertikal dalam elemen UI, gunakan "di atas" dan "di bawah" untuk hubungan spasial. Hindari "ke atas" dan "ke bawah" karena ambigu dalam konteks yang berbeda.

**Disarankan:**

- Kotak pencarian muncul di atas daftar file.
- Opsi tambahan tersedia di bawah.

**Tidak disarankan:**

- Kotak pencarian ada di atas dari daftar file.
- Opsi lainnya ada ke bawah.

### Instruksi

Gunakan kalimat imperatif untuk nama panduan, judul bagian, dan instruksi langkah demi langkah. Modus imperatif ringkas dan berorientasi tindakan, yang lebih mudah dipahami pengguna saat mengikuti instruksi.

- Lebih baik "Siapkan" daripada "Menyiapkan"
- Lebih baik "Pindahkan file" daripada "Memindahkan file"
- Lebih baik "Impor catatan Anda" daripada "Mengimpor catatan Anda"

### Huruf kapital kalimat

Lebih baik gunakan *huruf kapital kalimat (sentence case)* daripada *huruf kapital judul (title case)* untuk judul, tombol, dan judul halaman. Ketika merujuk pada elemen UI, selalu sesuaikan huruf besar/kecil dengan teks di UI.

**Disarankan:**

- Cara Obsidian menyimpan data

**Tidak disarankan:**

- Cara Obsidian Menyimpan Data

### Contoh

Lebih baik gunakan contoh realistis daripada istilah yang tidak bermakna.

**Disarankan:**

- `task:(telepon OR jadwalkan)`

**Tidak disarankan:**

- `task:(foo OR bar)`

### Nama tombol dan pintasan keyboard

Ketika merujuk pada tombol keyboard dan pintasan, gunakan notasi yang konsisten.

**Nama tombol individual:**

Ketika merujuk pada karakter di keyboard berdasarkan nama, tambahkan karakter tersebut di antara tanda kurung tepat setelah nama.

**Disarankan:**

- Tekan tombol tanda hubung (-) untuk menambahkan strip.
- Gunakan tanda tanya (?) untuk mencari.

**Tidak disarankan:**

- Tekan tombol tanda hubung untuk menambahkan strip.
- Gunakan ? untuk mencari.
- Tambahkan `-` di depan kata.

**Pintasan keyboard:**

Format pintasan keyboard tanpa spasi di sekitar tanda plus. Ketika pintasan berbeda antar sistem operasi, tentukan keduanya.

**Disarankan:**

- Tekan `Ctrl+Z` (Windows) atau `Command+Z` (macOS) untuk urungkan.
- Tekan `Escape` untuk menutup jendela ini.
- Gunakan `Tab` untuk berpindah antar bidang.

**Tidak disarankan:**

- Tekan `Cmd+Z` untuk urungkan.
- Tekan `Ctrl + Z` (dengan spasi) untuk urungkan.
- Tekan `Ctrl/Cmd+Z` untuk urungkan.

Untuk pintasan yang identik di semua platform, Anda tidak perlu menentukan OS. Jika Anda tidak yakin apakah pintasan berbeda antar platform, tentukan OS untuk amannya. Windows dan Linux biasanya menggunakan pintasan yang sama.

### Markdown

Gunakan baris baru di antara blok Markdown:

**Disarankan:**

```md
# Judul 1

Ini adalah sebuah bagian.

1. Item pertama
2. Item kedua
3. Item ketiga
```

**Tidak disarankan:**

```md
# Judul 1
Ini adalah sebuah bagian.
1. Item pertama
2. Item kedua
3. Item ketiga
```

**Em dash dalam daftar:**

Gunakan em dash (—) untuk memisahkan istilah yang ditebalkan dari deskripsinya dalam daftar berpoin. Jangan gunakan em dash dalam daftar bersarang sederhana dengan tautan.

**Disarankan:**

- **Menu tampilan** — buat, edit, dan beralih tampilan.
- **Hitung nilai** — tambahkan harga, hitung total, atau lakukan operasi matematika.

**Tidak disarankan:**

- [[Buat basis]] — Pelajari cara membuat dan menyematkan basis.

### Gambar

Gunakan "**lebar** x **tinggi** piksel" untuk menjelaskan dimensi gambar atau layar.

**Contoh:**

Dimensi gambar yang disarankan: 1920 x 1080 piksel.

## Struktur informasi

### Jenis callout

Gunakan callout secara strategis untuk menyorot jenis informasi tertentu:

**Tip** (`[!tip]-`) - Saran praktis atau praktik terbaik yang meningkatkan alur kerja pengguna. Gunakan untuk pintasan, solusi alternatif, atau informasi yang tidak esensial tetapi berguna. Callout ini dimulai dalam keadaan terlipat.

**Info** (`[!info]+`) - Konteks tambahan, informasi latar belakang, atau klarifikasi. Gunakan ketika informasi menambah pemahaman tetapi tidak diperlukan untuk menyelesaikan tugas. Callout ini dimulai dalam keadaan terbuka.

**Peringatan** (`[!warning]+`) - Peringatan penting yang mencegah kehilangan data, kesalahan, atau konsekuensi yang tidak diinginkan. Gunakan dengan hemat untuk situasi yang benar-benar berisiko. Callout ini tidak boleh dilipat.

**Contoh** (`[!example]-`) - Catatan umum atau detail tambahan. Gunakan untuk informasi yang mungkin relevan bagi beberapa pengguna. Callout ini dimulai dalam keadaan terlipat.

**Contoh:**
```md
> [!tip]- Gunakan pintasan keyboard
> Anda dapat mempercepat alur kerja dengan menghafal pintasan yang paling sering digunakan.

> [!info]+ Ini adalah addon berbayar
> Fitur ini memerlukan langganan berbayar untuk digunakan.

> [!warning]+ Tindakan ini tidak dapat dibatalkan
> Menghapus brankas bersifat permanen. Pertimbangkan untuk mengekspor catatan Anda terlebih dahulu.

> [!example]- Penggunaan lanjutan
> Anda juga dapat mengonfigurasi pengaturan ini melalui menu Grafik.
```

### Daftar vs. prosa

Gunakan daftar ketika menyajikan item-item terpisah yang tidak memiliki hubungan sekuensial atau kausal yang kuat. Gunakan prosa dan paragraf ketika item-item saling membangun, memerlukan penjelasan, atau mendapat manfaat dari alur naratif.

**Gunakan daftar untuk:**
- Sekumpulan fitur yang tidak saling berhubungan
- Persyaratan instalasi
- Opsi konfigurasi
- Langkah-langkah pemecahan masalah

**Gunakan prosa untuk:**
- Penjelasan tentang cara sesuatu bekerja
- Alur kerja dengan dependensi
- Ringkasan konseptual
- Panduan yang memerlukan konteks

### Tabel

Gunakan tabel untuk membandingkan fitur, versi, atau poin data terkait di mana perataan membantu pemahaman. Hindari tabel untuk daftar sederhana atau data satu kolom.

**Kasus penggunaan yang baik:**

| Fitur | Seluler | Desktop |
|---------|--------|---------|
| Sync | Ya | Ya |
| Plugin | Tidak | Ya |
| Tema | Terbatas | Penuh |

### Referensi silang

Gunakan tautan wiki internal (`[[Nama catatan]]`) secara luas untuk membantu pengguna menavigasi topik terkait. Namun, hindari tautan berlebihan:

- Jangan menautkan istilah yang sama beberapa kali dalam satu halaman
- Tautkan hanya ketika halaman yang dirujuk memberikan konteks tambahan yang signifikan
- Gunakan teks tautan deskriptif jika membantu: `[[Nama catatan#Bagian|teks deskriptif]]`

**Contoh:**

Penyebutan pertama: "Pelajari tentang [[Pengantar Obsidian Sync|Obsidian Sync]] untuk menjaga brankas Anda tetap terbaru di seluruh perangkat."
Penyebutan selanjutnya: "Anda dapat mengonfigurasi Sync untuk setiap perangkat secara terpisah."

### Konten khusus platform

Ketika mendokumentasikan fitur yang berbeda antar platform, gunakan judul bagian untuk mengorganisasi konten.

Gunakan `Desktop` dan `Seluler` sebagai judul subbagian untuk memisahkan instruksi atau fitur khusus platform.

**Disarankan:**
```md
## Kustomisasi bilah alat

### Desktop

Pada versi desktop, Anda dapat mengkustomisasi bilah alat sebagai berikut:

- Atur ulang urutan aksi bilah alat dengan menyeret dan melepas ikon.
- Untuk menyembunyikan aksi tertentu, klik kanan pada ruang kosong dan hapus centang aksi yang ingin Anda sembunyikan.

### Seluler

Pada versi seluler, Anda dapat mengkustomisasi bilah alat melalui pengaturan:

1. Buka **[[Pengaturan]]**.
2. Navigasi ke **Tampilan**.
3. Klik **Kelola** di bawah **Atur Ribbon**.
```

> [!info]+ Kapan membuat bagian terpisah?
> Buat bagian terpisah hanya jika konten berbeda secara signifikan. Jika instruksi sebagian besar sama dengan variasi kecil, gunakan catatan inline sebagai gantinya.

## Ikon dan gambar

Sertakan ikon dan gambar ketika memudahkan untuk menjelaskan hal-hal yang sulit dideskripsikan dengan kata-kata, atau ketika Anda perlu menunjukkan bagian penting dari aplikasi Obsidian. Anda dapat menyimpan gambar di folder `Attachments`.

- Gambar harus membuat teks yang menyertainya lebih mudah dipahami.

 **Contoh**: Setelah diaktifkan, plugin [[Penghitung kata]] akan membuat entri baru di bilah status bawah Anda.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Gambar harus dalam format `.png` atau `.svg`.
- Jika gambar terlihat terlalu besar di catatan, perkecil di luar Obsidian, atau sesuaikan dimensinya seperti yang dijelaskan di [[Sematkan file#Sematkan gambar dalam catatan|menyematkan gambar dalam catatan]].
- Dalam kasus langka, Anda mungkin ingin menempatkan gambar yang sangat besar atau kompleks dalam [[Callout#Callout yang dapat dilipat|callout yang dilipat]].
- Untuk jendela pop-up atau modal, gambar harus menunjukkan seluruh jendela aplikasi Obsidian.
 ![[Style-guide-modal-example.png#interface]]

### Ikon

Ikon [Lucide](https://lucide.dev/icons/) dan ikon kustom Obsidian dapat digunakan bersama elemen detail untuk memberikan representasi visual dari sebuah fitur.

**Contoh:** Di bilah alat di sebelah kiri, pilih **Buat kanvas baru** ![[lucide-layout-dashboard.svg#icon]] untuk membuat canvas di folder yang sama dengan file aktif.

**Panduan untuk ikon**

- Simpan ikon di folder `Attachments/icons`.
- Tambahkan awalan `lucide-` sebelum nama ikon Lucide.
- Tambahkan awalan `obsidian-icon-` sebelum nama ikon Obsidian.

**Contoh:** Ikon untuk membuat canvas baru harus diberi nama `lucide-layout-dashboard`.

- Gunakan versi SVG dari ikon yang tersedia.
- Ikon harus berukuran `18` piksel lebarnya, `18` piksel tingginya, dan memiliki lebar garis `1.5`. Anda dapat menyesuaikan pengaturan ini di data SVG.

> [!info]- Menyesuaikan ukuran dan garis di SVG
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="WIDTH" height="HEIGHT" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="STROKE-WIDTH" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Gunakan anchor `icon` di gambar yang disematkan, untuk mengatur jarak di sekitar ikon sehingga sejajar dengan teks di sekitarnya.
- Ikon harus dikelilingi tanda kurung. ![[lucide-cog.svg#icon]]

**Contoh**: `![[lucide-cog.svg#icon]]`

### Tag anchor gambar

Tag anchor gambar tersedia untuk menambahkan perubahan dekoratif pada gambar yang disematkan.

> [!warning] Peringatan pratinjau langsung
> Tag anchor ikon tidak akan ditampilkan dengan benar di **Pratinjau langsung.** Gunakan **Tampilan baca** untuk mengonfirmasi bahwa tag anchor telah diterapkan.

**Ikon**

`![[lucide-menu.svg#icon]]`

Tag anchor ikon memastikan perataan vertikal yang benar untuk ikon yang digunakan untuk menunjukkan elemen antarmuka.

Ikon menu pertama menggunakan tag anchor ![[lucide-menu.svg#icon]], sedangkan ikon menu kedua ( ![[lucide-menu.svg]] ) tidak.

**Antarmuka**

`![[Vault picker.png#interface]]`

Tag anchor antarmuka menambahkan bayangan kotak dekoratif di sekitar gambar. Pada gambar pertama, tag anchor antarmuka diterapkan.
![[Vault picker.png#interface]]
Sebaliknya, gambar kedua tidak memiliki anchor antarmuka yang diterapkan.

![[Vault picker.png]]

**Garis tepi**

`![[Backlinks.png#outline]]`

Tag anchor garis tepi menambahkan batas halus di sekitar gambar. Pada gambar pertama, tag anchor garis tepi diterapkan.

> [!tip] Perhatikan bagian kiri bawah gambar untuk melihat perbedaannya.

![[Backlinks.png#outline]]

Gambar kedua tidak memiliki tag anchor garis tepi.

![[Backlinks.png]]

### Optimisasi

Gambar memperlambat waktu pemuatan halaman, dan menggunakan ruang penyimpanan [[Pengantar Obsidian Publish|Publish]] yang berharga. Mengoptimalkan gambar memungkinkan pengurangan ukuran file, tetapi mempertahankan integritas visual gambar.

Baik gambar maupun ikon harus dioptimalkan.

> [!info] Alat untuk mengoptimalkan gambar
> Berikut adalah beberapa program yang direkomendasikan untuk mengurangi ukuran gambar Anda.
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> Kami merekomendasikan tingkat optimisasi 65-75%.

## Tata letak

### Tautan rusak

Sebelum mengirimkan Pull Request Anda, silakan periksa tautan rusak dalam dokumentasi terjemahan yang sedang Anda kerjakan, dan perbaiki. Tautan rusak dapat terjadi secara alami dari waktu ke waktu, jadi memverifikasi keakuratannya membantu menjaga kualitas dokumentasi.

Anda dapat memeriksa tautan rusak menggunakan [[Plugin komunitas]] atau alat yang tersedia di IDE Anda.

### Deskripsi

Dokumentasi ini diedit di GitHub dan dihosting secara online melalui [[Pengantar Obsidian Publish|Obsidian Publish]], yang menyertakan [[Pratinjau tautan media sosial#Deskripsi|deskripsi]] untuk kartu sosial dan elemen [[SEO]] lainnya.

Jika halaman yang sedang Anda kerjakan tidak memiliki [[Properti|properti]] `description`, silakan tambahkan satu. Deskripsi harus 150 karakter atau kurang dan memberikan ringkasan objektif dari konten halaman.

**Baik**: Pelajari cara membuat templat yang menangkap dan mengorganisasi metadata halaman web secara otomatis dengan Web Clipper.
**Bisa diperbaiki**: Pelajari cara membuat templat yang secara otomatis menangkap dan mengorganisasi metadata dari halaman web dengan Web Clipper.

### Arah

Ketika menulis atau menulis ulang [[#Instruksi]] tentang cara melakukan tindakan dalam aplikasi, pastikan untuk menyertakan langkah-langkah untuk versi seluler dan desktop.

Jika Anda tidak memiliki akses ke perangkat seluler atau desktop, silakan sebutkan ini saat mengirimkan Pull Request Anda.

## Terjemahan

  Terjemahkan seluruh konten ketika menyelesaikan terjemahan. Ini termasuk dan tidak terbatas pada:

- Nama catatan
- Nama folder
- Alias
- Nama lampiran
- Teks tautan alternatif

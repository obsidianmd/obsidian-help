---
permalink: sync/security
publish: true
mobile: false
description: Pelajari tentang pertimbangan keamanan dan privasi untuk Obsidian Sync.
aliases:
  - Obsidian Sync/Keamanan dan privasi
---
## Enkripsi

Demi keamanan Anda, [[Pengantar Obsidian Sync|Obsidian Sync]] mengenkripsi [[Vault lokal dan remote|brankas jarak jauh]] Anda dan semua komunikasi dengan server Obsidian.

Ketika Anda membuat brankas jarak jauh baru, Anda memiliki dua pilihan:

- **Enkripsi ujung-ke-ujung (bawaan)** menawarkan keamanan terkuat tetapi mengharuskan Anda menyimpan kata sandi enkripsi Anda dengan aman. Ini menjamin bahwa tidak ada seorang pun — termasuk tim Obsidian — yang dapat mengakses catatan Anda.
- **Enkripsi standar** menggunakan kunci enkripsi yang dikelola oleh Obsidian untuk melindungi data Anda saat transit dan di server kami.

Kami merekomendasikan enkripsi ujung-ke-ujung untuk semua pengguna karena ini adalah opsi yang paling privat dan aman. Namun, perlu diketahui bahwa jika Anda lupa atau kehilangan kata sandi enkripsi Anda, data Anda tetap terenkripsi dan tidak dapat digunakan selamanya. Kami tidak dapat memulihkan kata sandi Anda, atau data terenkripsi apa pun untuk Anda.

Pilihan Anda hanya memengaruhi brankas jarak jauh Anda. Obsidian tidak mengenkripsi brankas lokal Anda.

### Apa yang dimaksud dengan enkripsi ujung-ke-ujung?

Enkripsi ujung-ke-ujung berarti data dienkripsi sejak meninggalkan perangkat Anda, dan hanya dapat didekripsi menggunakan kunci enkripsi Anda setelah kembali ke salah satu perangkat Anda.

Kami tidak dapat membaca data Anda. Begitu juga pihak yang berpotensi menyadap, seperti penyedia layanan internet Anda.

Dalam kasus yang jarang terjadi yaitu pembobolan server secara menyeluruh, data Anda tetap terenkripsi—tidak ada yang dapat mendekripsi file Anda tanpa mengetahui kata sandi Anda.

### Apa risiko menggunakan enkripsi standar?

Enkripsi standar secara fundamental kurang aman dibandingkan enkripsi ujung-ke-ujung, tetapi bisa menjadi pilihan yang nyaman jika Anda tidak mengharapkan data yang Anda sinkronkan benar-benar privat. Misalnya, jika brankas yang disinkronkan [[Pengantar Obsidian Publish|dipublikasikan]] ke situs web publik seperti situs Bantuan ini, maka enkripsi ujung-ke-ujung tidak diperlukan.

Enkripsi standar adalah metode enkripsi yang sama yang digunakan oleh perusahaan penyimpanan cloud dan platform perangkat lunak sebagai layanan, seperti Google Docs, Dropbox, dan iCloud (tanpa Advanced Data Protection). Kunci enkripsi Anda dibuat oleh aplikasi dan digunakan untuk melindungi data Anda saat transit dan di server. Karena kunci enkripsi disimpan di server perusahaan, kunci tersebut dapat digunakan untuk mendekripsi data Anda, misalnya dalam kasus di mana perusahaan tunduk pada surat perintah penggeledahan, atau dalam kasus di mana Anda ingin mengakses data Anda melalui peramban web.

Enkripsi ujung-ke-ujung menjamin bahwa Obsidian tidak pernah dapat mengakses data Anda dan harus selalu digunakan untuk menyinkronkan data yang Anda inginkan tetap benar-benar privat dan aman.

### Enkripsi apa yang Anda gunakan?

Untuk keamanan data, kami menerapkan protokol enkripsi standar industri. Secara khusus, kami menggunakan [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0), standar enkripsi terkuat, yang banyak digunakan dalam konteks seperti perbankan online. Proses enkripsi melibatkan detail teknis berikut:

- **Fungsi derivasi kunci:** [scrypt](https://en.wikipedia.org/wiki/Scrypt) dengan salt
- **Algoritma enkripsi:** AES-256 menggunakan [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode)

### Bisakah saya memverifikasi bahwa data saya dienkripsi ujung-ke-ujung?

Ya. Lihat panduan kami, [cara memverifikasi enkripsi ujung-ke-ujung Obsidian Sync](https://obsidian.md/blog/verify-obsidian-sync-encryption/). Panduan ini memberikan instruksi langkah demi langkah untuk Anda memverifikasi enkripsi ujung-ke-ujung data Anda secara mandiri saat dikirim dan diterima melalui server Sync.

### Apakah Obsidian telah menyelesaikan audit keamanan pihak ketiga?

Ya. Obsidian telah diaudit secara independen. Kunjungi [halaman Keamanan](https://obsidian.md/security) kami untuk melihat laporan audit. Audit rutin oleh firma keamanan pihak ketiga memastikan bahwa kode dan prosedur Obsidian memenuhi standar keamanan tertinggi.

### Apa yang terjadi jika saya lupa kata sandi enkripsi saya?

Jika Anda kehilangan atau lupa kata sandi enkripsi, Anda tidak akan dapat menghubungkan brankas tambahan ke brankas jarak jauh Anda. Karena kata sandi enkripsi tidak disimpan di mana pun, kata sandi tersebut hilang selamanya.

Namun, data Anda biasanya tersimpan dengan aman secara lokal di setiap perangkat Anda.

Untuk terus menggunakan Obsidian Sync, kami menyarankan melakukan pengaturan ulang penuh agar dapat menambahkan perangkat baru ke sistem Sync Anda:

1. Buat cadangan penuh brankas di perangkat utama Anda, untuk berjaga-jaga jika terjadi kesalahan. Ini bisa sesederhana membuat salinan folder brankas, atau membuat file zip dari brankas tersebut.
2. Putuskan sambungan brankas jarak jauh di setiap perangkat Anda. Ini dapat dilakukan dengan pergi ke **[[Pengaturan]] → Sync → Pilih brankas jarak jauh → Putuskan**.
3. [[Menyiapkan Obsidian Sync#Buat brankas jarak jauh baru|Buat brankas jarak jauh baru]] di perangkat utama Anda dari halaman Pengaturan yang sama. Secara opsional, Anda dapat menghapus brankas jarak jauh sebelumnya karena Anda tidak memiliki kata sandinya. (Anda mungkin harus menghapus brankas jarak jauh sebelumnya jika Anda berada di [[Pertanyaan yang sering diajukan#Berapa banyak brankas jarak jauh yang bisa saya miliki?|batas brankas]])
4. Tunggu perangkat utama Anda selesai menyinkronkan. Perhatikan indikator sinkronisasi di kanan bawah layar hingga menampilkan tanda centang hijau.
5. Hubungkan setiap perangkat Anda ke brankas jarak jauh yang baru dibuat. Saat menghubungkan, Anda akan ditampilkan peringatan tentang penggabungan brankas, ini normal dan Anda dapat melanjutkan. Tunggu setiap perangkat selesai menyinkronkan sepenuhnya sebelum melanjutkan ke perangkat berikutnya. Ini mengurangi kemungkinan masalah.
6. Sekarang semua perangkat Anda seharusnya terhubung ke brankas jarak jauh yang baru.

## Hosting

### Di mana Anda menghosting server untuk Obsidian Sync?

Pusat data kami, didukung oleh [DigitalOcean](https://www.digitalocean.com), menyediakan opsi hosting brankas jarak jauh berdasarkan wilayah geografis di lokasi berikut:

> [!abstract] Wilayah Sync
> **Otomatis**: Pusat data Anda dipilih berdasarkan lokasi IP Anda, pada saat pertama kali Anda mengaturnya.
> 
> **Asia**: Singapura
> **Eropa**: Frankfurt, Jerman
> **Amerika Utara**: San Francisco, AS
> **Oseania**: Sydney, Australia
^sync-geo-regions

### Di mana saya dapat menemukan server Sync saya saat ini dan di mana server tersebut dihosting?

Untuk menemukan server Obsidian Sync Anda, ikuti langkah-langkah berikut:
1. Pergi ke **[[Pengaturan]]** → **Sync** → **Salin info debug**.
2. Tempel informasi yang disalin ke dalam catatan atau file.
3. Cari baris yang mirip dengan ini: `Host server: wss://sync-xx.obsidian.md`

Baris ini menunjukkan server tempat brankas jarak jauh Anda dihosting. Untuk detail lebih lanjut tentang lokasi dan waktu aktif server, kunjungi [halaman status](https://status.obsidian.md/) kami.

## Jaringan dan akses

### Mengelola akses ke Obsidian Sync di jaringan Anda

Untuk mengatur akses ke Obsidian Sync di jaringan Anda, Anda perlu mengelola domain berikut:

`sync-xx.obsidian.md`

`xx` dalam hal ini mewakili angka mulai dari `1 - 100`.

> [!tip] Jika sistem firewall Anda mendukungnya, kami merekomendasikan untuk memasukkan `sync-*.obsidian.md` ke daftar putih untuk mengakomodasi pertumbuhan berkelanjutan dalam jumlah subdomain.

## Batasan

Obsidian Sync dirancang untuk menjaga catatan Anda tetap privat dan aman. Untuk memberikan sinkronisasi yang cepat, andal, dan penyimpanan yang efisien di seluruh perangkat, kami membuat beberapa kompromi yang disengaja dalam cara enkripsi diterapkan.

### Enkripsi hash file deterministik

Kami mengenkripsi hash file secara deterministik: konten file yang sama, menggunakan kunci enkripsi dan salt yang sama, selalu menghasilkan hash terenkripsi yang sama di server. Ini membantu Sync mendeteksi duplikat dan menghindari pengunggahan ulang atau penyimpanan ulang data identik, yang menghemat bandwidth dan penyimpanan jarak jauh, terutama dalam riwayat versi atau ketika file besar berulang.

Namun, jika penyerang mengkompromikan server Sync, dan mereka memiliki cara terpisah untuk memaksa pengguna mengunggah file pilihan mereka, maka penyerang dapat memaksa pengguna mengunggah file tertentu dan menentukan apakah file tersebut cocok dengan file yang sebelumnya diunggah pengguna.

### Tidak ada pengikatan kriptografi antara path dan konten

Beberapa metadata tidak dienkripsi ujung-ke-ujung: perangkat mana yang mengunggah atau menghapus file, kapan file diunggah, dan *pemetaan* antara path file terenkripsi dan konten terenkripsi. Data ini dapat dibaca oleh server sehingga dapat merutekan perubahan, menentukan riwayat versi untuk file, dan menjaga perangkat tetap tersinkronisasi.

Jika server Sync dikompromikan, penyerang dapat memanipulasi pemetaan tersebut, menyebabkan konten satu file terenkripsi dikirimkan di bawah path file yang berbeda. Ini tidak mengungkapkan data teks biasa Anda, data tetap terenkripsi.

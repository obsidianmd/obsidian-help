Sinkronisasi berarti membiarkan catatan Anda tetap terbaru antar perangkat Anda, seperti laptop dan perangkat seluler.

Cara paling mudah untuk menyinkronkan catatan Anda antar perangkat ialah dengan menggunakan [[Berkenalan dengan Obsidian Sync|Obsidian Sync]]. Jika Anda telah berlangganan dengan Obsidian Sync, lihatlah bagaimana cara [[Mengatur Obsidian Sync]].

Jika Anda tidak ingin menggunakan Obsidian Sync, laman ini berisi daftar metode alternatif untuk menyinkronkan vault Anda dengan banyak perangkat.

## Menyinkronkan catatan dengan banyak desktop

Jika Anda tidak menggunakan Obsidian pada perangkat seluler Anda, Anda dapat menggunakan layanan pihak ketiga yang dapat menyinkronkan folder lokal Anda ke penyimpanan awan.

Contohnya, Anda dapat menggunakan layanan berikut:

- Dropbox
- Google Drive
- iCloud Drive
- OneDrive
- Syncthing

Untuk menyinkronkan catatan Anda, ikuti instruksi dari layanan yang Anda gunakan untuk menyinkronkan folder pada sistem berkas lokal Anda. Lalu buka folder sebagai vault yang tersedia pada seluruh perangkat desktop Anda.

## Menyinkronkan catatan Anda pada iPhone dan iPad

Untuk menyinkrokan catatan Anda ke iPhone ataupun iPad Anda, kami sepenuhnya mendukung opsi berikut:

- [[Berkenalan dengan Obsidian Sync|Obsidian Sync]]
- [[#iCloud Drive]]

**Catatan:** Layanan berikut tidak didukung. Jika Anda menemukan cara menyinkronkan catatan Anda pada perangkat iOS Anda menggunakan layanan tersebut, beri tahu kami pada channel komunitas kami.

- Dropbox
- Google Drive
- OneDrive
- Syncthing

### iCloud Drive

Obsidian dapat menggunakan iCloud Drive sebagai sistem berkas lokal.

 Ketika menggunakan iCloud Drive di macOS, pastikan memperbarui versi pemasang aplikasi desktop Anda ke v0.13.0 atau yang lebih baru.

#### Membuat vault baru di iCloud Drive

Untuk membuat vault baru di iCloud Drive pada iPhone atau iPad Anda:

1. Ketuk **Create new vault**.
2. Pada **Vault name**, masukkan nama dari vault Anda.
3. Aktifkan **Store in iCloud**.
4. Ketuk **Create**.

Obsidian membuat folder baru di dalam iCloud Drive Anda. Untuk membuka folder iCloud Drive sebagai vault di komputer Anda:

1. Buka **Obsidian** di komputer Anda.
2. Pada peralih vault, pada bagian kanan dari **Buka folder sebagai vault**, klik **Buka**.
3. Arahkan menuju **iCloud Drive** → **Obsidian**.
4. Pilih folder dengan nama vault yang Anda ingin sinkronkan.

#### Menyinkronkan vault yang tersedia dengan iCloud Drive

Untuk menyinkronkan vault yang tersedia menggunakan iCloud, Anda perlu membuat vault kosong di iCloud Drive dan memindahkan catatan Anda pada perangkat lain Anda ke vault kosong tersebut.

Untuk membuat vault kosong di iCloud Drive:

1. Ketuk **Create new vault**.
2. Pada **Vault name**, masukkan nama yang sama dengan vault yang ingin Anda sinkronkan.
3. Aktifkan **Store in iCloud**.
4. Ketuk **Create**.

Untuk memindahkan catatan Anda ke vault baru di iCloud Drive Anda:

1. Pada komputer Anda, buka folder **iCloud Drive**.
2. Buka folder **Obsidian**. Mungkin akan memerlukan waktu beberapa menit untuk memunculkannya.
3. Pindahkan berkas-berkas pada vault yang tersedia ke folder degan nama yang sama dengan vault Anda.

iCloud menyinkronkan berkas-berkas ke perangkat seluler Anda. Tergantung seberapa besar ukuran vault Anda, mungkin akan memerlukanwaktu beberapa menit.

### Working Copy

Jika Anda menyimpan catatan di repositori [Git](https://git-scm.com/), Anda mungkin ingin melihat [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)—sebuah klien Git iOS Anda.

Untuk menyinkronkan menggunakan Working Copy:

1. Buat vault kosong pada iPhone atau iPad Anda.
2. Gunakan aksi **Setup Folder Sync** dan pilih vault kosong Anda.
3. Commit dan push setiap perubahan ke vault Anda menggunakan aplikasi Working Copy.

**Catatan:** Selama kami tidak mendukung metode ini, beberapa pengguna kami melaporkan bahwa mereka berhasil menggunakan Working Copy untuk menyinkronkan catatan mereka.

### Mengapa saya tidak bisa menyinkronkan menggunakan X?

Kami paham banyak dari Anda menggunakan layanan lain untuk menyinkronkan berkas dan Anda lebih suka menggunakannya pula untuk menynkronkan catatan Anda.

Obsidian bekerja secara berbeda dengan pengubah Markdown lain pada iOS. Pengubah seperti 1Writer dan iA Writer mengakses satu catatan pada satu waktu, yang mana membiarkan mereka menggunakan dukungan bawaan untuk dokumen.

Sebaliknya, banyak fitur Obsidian memerlukan akses ke seluruh vault Anda. Misalnya jika Anda mengubah nama berkas, lalu Obsidian perlu memperbarui semua berkas pada vault yang memliki tautan menuju berkas tersebut.

Mengimplementasikan sebuah sistem untuk membaca, mengubah, dan memantau seluruh struktur folder yang terdiri atas kemungkinan ribuan catatan di luar dari lokasi yang didukung sangatlah penuh tantangan. Kami berharap dapat mengatasi pembatasan ini di masa depan.

Jika Anda seorang pengembang, Anda dapat membangun plugin yang menggunakan API Web untuk setiap layanan sinkronisasi.

### Di mana vault saya tersimpan?

Jika Anda memilih untuk tidak menggunakan iCloud Drive saat membuat vault Anda, Obsidian menyimpannya pada sistem berkas lokas untuk aplikasi Obsidian. Aplikasi lain seperti [[#Working Copy]], dapat mengakses vault Anda dengan menyeleksi vault melalui sistem berkas.

**Peringatan:** Setiap catatan yang tersimpan pada sistem berkas lokal akan terhapus oleh iOS ketika Anda menghapus aplikasi. Pastikan untuk mencadangkan catatan Anda sebelum Anda menghapus aplikasi Obsidian.

## Menyinkronkan catatan pada Android

Cara termudah untuk menyinkronkan catatan Anda pada perangkat Android Anda ialah menggunakan [[Berkenalan dengan Obsidian Sync|Obsidian Sync]].

Sejak Obsidian menyimpan catatan pada folder lokal di perangkat Android Anda, Anda dapat pula menggunakan aplikasi apa pun yang memperbolehkan Anda menyinkronkan folder, seperti:

- [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync)
- [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite)

**Catatan:** Obsidian membuat folder Obsidian pada folder berbagi Dokumen. Semua folder di dalam `Documents/Obsidian` dianggap sebagai vault Obsidian.

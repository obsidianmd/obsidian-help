---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian Sync menyimpan catatan semua perubahan yang dilakukan pada catatan Anda dan secara berkala memeriksa pembaruan serta membuat versi baru dari catatan Anda.
aliases:
  - Obsidian Sync/Riwayat versi
---
[[Pengantar Obsidian Sync|Obsidian Sync]] secara berkala memeriksa pembaruan pada [[Pengaturan Sync dan sinkronisasi selektif|file yang disinkronkan]], menyimpan catatan setiap perubahan. Perubahan ini disimpan sebagai entri baru di [[#Riwayat versi]]. Informasi ini dapat diakses dengan beberapa cara:

- [[#Riwayat Sync]]
- [[#Riwayat versi]]

Meskipun bukan bagian dari Obsidian Sync, riwayat versi lokal juga tersedia di setiap perangkat jika plugin [[Pemulih berkas]] diaktifkan.

## Riwayat Sync

Fitur riwayat Sync (atau bilah samping Sync), diperkenalkan di Obsidian versi 1.7, memungkinkan Anda melihat dengan cepat catatan dan lampiran yang baru dibuat atau dimodifikasi yang telah disinkronkan. Anda juga bisa menganggapnya sebagai riwayat _penyuntingan_.

Di bilah samping, Anda dapat memilih item untuk membuka filenya di jendela aktif Anda. Item juga memiliki menu konteks, memungkinkan Anda melakukan tindakan seperti memindahkan file atau melihat [[#Catatan dan lampiran|Riwayat versi]]-nya.

> [!compatibility] Fitur khusus desktop
> Saat Anda mengarahkan kursor ke file yang disinkronkan di bilah samping, Anda dapat melihat siapa yang terakhir mengedit file tersebut. Ini sangat berguna jika Anda [[Berkolaborasi di vault bersama|berkolaborasi]] di brankas bersama.

> [!tip] 
> Pengaturan dan item yang dihapus tidak akan muncul di bilah samping riwayat Sync. Ini dapat ditemukan di [[#Catatan dan lampiran|Riwayat versi]] sebagai gantinya.

### Tampilkan riwayat Sync

Saat Anda mengaktifkan plugin inti [[Pengantar Obsidian Sync|Sync]], riwayat Sync otomatis diaktifkan tetapi tidak muncul di bilah samping secara bawaan. Anda perlu menambahkannya secara manual menggunakan perintah atau pintasan keyboard.

#### Aktifkan melalui Palet perintah

> [!info] Opsi ini memerlukan plugin inti [[Palet perintah]] untuk diaktifkan.

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]

1. Buka **Palet perintah**. ![[lucide-terminal.svg#icon]]
2. Ketik "Sync".
3. Pilih opsi "Sync: Show Sync history".

Riwayat Sync kemudian akan muncul di [[Bilah samping|bilah samping kanan]].

**Seluler** ![[obsidian-icon-smartphone.svg#icon]]

1. Buka [[Bilah alat]] ![[lucide-menu.svg#icon]].
2. Buka **Palet perintah**. ![[lucide-terminal.svg#icon]]
3. Ketik "Sync".
4. Pilih opsi "Sync: Show Sync history".

Riwayat Sync kemudian akan muncul sebagai opsi dropdown di [[Bilah samping|bilah samping kanan]].

#### Aktifkan melalui Pintasan keyboard

1. Buka **[[Pengaturan]]**.
2. Di kategori **Pengaturan**, pilih **Pintasan**.
3. Di bilah pencarian pintasan, ketik "Sync".
4. Di samping "Sync: Show Sync history," tetapkan pintasan keyboard pilihan Anda.

## Riwayat versi

Selain [[#Riwayat Sync]], Obsidian juga menyimpan riwayat versi untuk memulihkan catatan dan lampiran. Jika Anda tidak sengaja menghapus catatan atau ingin kembali ke versi sebelumnya, Anda dapat memulihkannya dari riwayat versi.

Periode penyimpanan riwayat versi Anda tergantung pada [[Paket dan batas penyimpanan|paket Obsidian Sync]] Anda. Pada paket Standard, catatan disimpan selama 1 bulan, sedangkan pada paket Plus, catatan disimpan selama 12 bulan. Setelah periode ini, versi lama catatan Anda akan dihapus.

Untuk [[Lampiran|lampiran]], versi lama disimpan selama <u>dua minggu</u>.

![[Berkolaborasi di vault bersama#^version-history-image]]

### Catatan dan lampiran

Proses untuk memulihkan catatan dan lampiran adalah sama.

#### Lihat riwayat versi sebuah file

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. Di **Penjelajah file**, pilih catatan yang ingin Anda pulihkan.
2. Pilih **Buka riwayat versi**.
3. Pilih versi catatan yang ingin Anda lihat di sebelah kiri. Isinya akan ditampilkan di sebelah kanan.

**Seluler** ![[obsidian-icon-smartphone.svg#icon]]
1. Di **Penjelajah file**, pilih catatan yang ingin Anda pulihkan.
2. Tekan lama untuk memunculkan menu konteks.
3. Pilih **Buka riwayat versi**.
4. Di menu pop-up, pilih versi catatan yang ingin Anda lihat.
5. Setelah dipilih, isi catatan akan tersedia untuk ditinjau.

#### Lihat riwayat versi file yang dihapus atau diganti namanya

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, di bawah **Plugin inti**, pilih **Sync**.
3. Di samping **Berkas terhapus**, pilih **Tampilan**.
4. Pilih catatan yang ingin Anda lihat riwayat versinya.
5. Di pop-up riwayat versi, pilih versi catatan yang ingin Anda lihat di sebelah kiri.

#### Pulihkan versi sebelumnya dari sebuah file

**Desktop/Tablet** ![[lucide-monitor-check.svg#icon]]
1. Di **Penjelajah file**, pilih catatan yang ingin Anda pulihkan.
2. Pilih **Buka riwayat versi**.
3. Pilih versi catatan yang ingin Anda pulihkan di sebelah kiri. Isinya akan ditampilkan di sebelah kanan.
4. Pilih tombol **Pulihkan**.
5. Isi catatan akan diganti dengan versi yang dipulihkan.

**Seluler** ![[obsidian-icon-smartphone.svg#icon]]
1. Di **Penjelajah file**, pilih catatan yang ingin Anda pulihkan.
2. Tekan lama untuk memunculkan menu konteks.
3. Pilih **Buka riwayat versi**.
4. Di menu pop-up, pilih versi catatan yang ingin Anda pulihkan.
5. Setelah dipilih, isi catatan akan tersedia untuk ditinjau.
6. Pilih tombol **Pulihkan**.
7. Isi catatan akan diganti dengan versi yang dipulihkan.

#### Pulihkan file yang dihapus

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, di bawah **Plugin inti**, pilih **Sync**.
3. Di samping **Berkas terhapus**, pilih **Tampilan**.
4. Pilih catatan yang ingin Anda pulihkan.
5. Di daftar versi di sebelah kiri, pilih versi yang ingin Anda pulihkan.
6. Pilih tombol **Pulihkan** di sebelah kanan.
7. Catatan akan dipulihkan ke lokasi aslinya di sistem file.

> [!tip] Anda dapat memilih beberapa catatan dengan **pemulihan banyak** dengan mencentang kotak centang, atau menggunakan `shift+click`. File-file ini tidak akan dapat ditinjau di menu ini.

### Riwayat pengaturan

Obsidian Sync juga melacak perubahan yang dibuat pada pengaturan konfigurasi brankas Anda.

#### Lihat riwayat versi sebuah pengaturan

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, di bawah **Plugin inti**, pilih **Sync**.
3. Navigasi ke bawah ke **Sinkronkan konfigurasi vault**.
4. Pilih tombol **Tampilan** di samping **Riwayat versi [[Pengaturan]]**.
5. Di pop-up **File [[Pengaturan]]**, pilih file pengaturan yang ingin Anda lihat.

#### Pulihkan versi sebelumnya dari sebuah pengaturan

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, di bawah **Plugin inti**, pilih **Sync**.
3. Navigasi ke bawah ke **Sinkronkan konfigurasi vault**.
4. Pilih tombol **Tampilan** di samping **Riwayat versi [[Pengaturan]]**.
5. Di pop-up **File [[Pengaturan]]**, pilih file pengaturan yang ingin Anda lihat.
6. Di jendela perubahan, pilih tombol **Pulihkan**.
7. Muat ulang atau mulai ulang Obsidian agar pengaturan berlaku. Untuk detail lebih lanjut, lihat instruksi di [[Menyiapkan Obsidian Sync#Sesuaikan pengaturan Obsidian Sync|Sesuaikan pengaturan Obsidian Sync]].

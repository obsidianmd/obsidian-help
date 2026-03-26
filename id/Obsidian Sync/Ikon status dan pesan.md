---
permalink: sync/messages
publish: true
mobile: true
description: Halaman ini menjelaskan ikon status Obsidian Sync dan memberikan detail tentang log aktivitas sinkronisasi.
---
Obsidian Sync menyediakan beberapa elemen untuk menunjukkan status sinkronisasi, terutama [[#Ikon status Sync]] dan [[#Log aktivitas Sync]]. Detail tentang kontrol versi di Obsidian Sync dibahas di halaman [[Riwayat versi]].

## Ikon status Sync

Ikon status Sync terletak di [[Bilah status]] pada versi desktop dan di [[Bilah samping#Membuka bilah samping tersembunyi|bilah samping kanan]] pada seluler dan tablet. Ikon ini mencerminkan berbagai status sinkronisasi:

- ![[obsidian-icon-sync-synced.svg#icon]] **Disinkronkan**: Obsidian Sync telah sepenuhnya menyinkronkan file Anda. Ikon ini biasanya berwarna hijau.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Menyinkronkan**: Obsidian sedang memperbarui brankas jarak jauh. Ikon ini biasanya berwarna ungu.
- ![[obsidian-icon-sync-paused.svg#icon]] **Dijeda**: Sinkronisasi telah dijeda, tetapi Obsidian masih terhubung ke brankas jarak jauh. Ikon ini biasanya berwarna ungu.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Terputus**: Plugin inti Sync aktif, tetapi [[Vault lokal dan remote|vault lokal]] tidak terhubung ke brankas jarak jauh. Ikon ini biasanya berwarna merah.

Mengklik atau mengetuk ikon akan membuka menu konteks dengan opsi berikut:
- ![[obsidian-icon-sync-paused.svg#icon]] Jeda (atau ![[lucide-circle-play.svg#icon]] Lanjutkan jika dijeda)
- ![[lucide-history.svg#icon]] [[Riwayat versi]] (Tidak aktif jika tidak sedang melihat catatan)
- ![[lucide-align-left.svg#icon]] Buka [[#Log aktivitas Sync|Log sinkronisasi]]
- ![[lucide-trash-2.svg#icon]] [[Riwayat versi#Memulihkan file yang dihapus|Berkas terhapus]]
- ![[lucide-cog.svg#icon]] [[Pengaturan Sync dan sinkronisasi selektif|Pengaturan Sync]]

## Log aktivitas Sync

Obsidian Sync menyertakan log sinkronisasi terperinci yang melacak semua interaksi antara file lokal Anda dan brankas jarak jauh. Log menampilkan unggahan, unduhan, penghapusan, dan masalah apa pun seperti konflik penggabungan atau masalah konektivitas.

**Mengakses log aktivitas:**
- Klik ikon status sinkronisasi di bilah status
- Buka **[[Pengaturan]] → Sync → Log aktivitas**
- Gunakan **Palet perintah → Sync: Buka log aktivitas**

Log menyediakan stempel waktu dan detail untuk setiap operasi sinkronisasi, sehingga berguna untuk memecahkan masalah sinkronisasi.

> [!warning] Log Sync tidak tersimpan setelah Obsidian ditutup. Jika Anda mengalami masalah, pastikan Anda menyalin log _sebelum_ menutup aplikasi.

Log mengategorikan pesan ke dalam jenis berikut:

- [[#Pesan umum]]
- [[#Pesan kesalahan]]
- [[#Pesan dilewati]]
- [[#Pesan akun]]

Anda dapat memfilter log Sync berdasarkan **Semua**, **Kesalahan**, **Dilewati**, dan **Konflik Penggabungan**. Selain itu, Anda dapat mencari di log Sync menggunakan kotak pencarian di jendela Sync.

> [!summary] Kami telah menyertakan beberapa pesan yang mungkin Anda temui di bawah ini. Daftar ini tidak lengkap. Jika Anda mengalami masalah dan memiliki pesan log sinkronisasi yang tidak Anda pahami, [[Bantuan dan dukungan#Menghubungi dukungan Obsidian|hubungi dukungan Obsidian]].

### Pesan umum

Ini adalah pesan umum sehari-hari yang mungkin Anda temui.

**Connecting to server**
Obsidian sedang mencoba terhubung ke [[Obsidian Sync/Keamanan dan privasi#Di mana saya bisa menemukan server Sync saya saat ini dan di mana server tersebut dihosting?|server Sync]] brankas jarak jauh Anda.

**Connected to server. Detecting changes...**
Obsidian telah membuat koneksi dan sedang membandingkan vault lokal dengan brankas jarak jauh untuk menentukan apakah diperlukan perubahan.

> [!info] Pesan ini juga dapat mengindikasikan masalah Sync potensial lainnya. Jika Anda melihatnya berulang kali dan yakin masih ada item yang perlu disinkronkan, [[Bantuan dan dukungan#Menghubungi dukungan Obsidian|hubungi dukungan Obsidian]].

**Fully synced**
- Vault lokal dan brankas jarak jauh telah sepenuhnya disinkronkan.

**Merging conflicted file**
Konflik terdeteksi selama sinkronisasi, dan file digabungkan alih-alih ditimpa. Lihat [[Pemecahan masalah Obsidian Sync#Resolusi konflik|resolusi konflik]] untuk informasi lebih lanjut. Jika penggabungan tidak diinginkan, Anda dapat memulihkan versi sebelumnya melalui [[Riwayat versi]] atau [[Pemulih berkas]].

**Rejected server change**
Perubahan pada brankas jarak jauh lebih lama dari versi pada perangkat lokal Anda, sehingga versi lokal dipertahankan dan perubahan jarak jauh diabaikan.

### Pesan kesalahan

Ini adalah pesan yang merinci kesalahan dalam menyinkronkan file.

**Out of memory**
Masalah ini biasanya terjadi pada perangkat seluler ketika tidak ada cukup ruang penyimpanan atau memori yang tersedia untuk mengunduh file. Ini paling umum terjadi pada file besar, seperti video.

### Pesan dilewati

Ini adalah pesan yang merinci apa yang dilewati, dan kemungkinan alasannya.

**Unable to download file with illegal name**

File mengandung [karakter khusus atau konvensi penamaan](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) yang tidak diizinkan pada sistem operasi penerima. Untuk kemudahan, Anda dapat mengganti nama file pada perangkat sumbernya untuk menghapus semua karakter khusus kecuali `-` dan `_`.

Perhatikan bahwa ini juga mencakup file dengan beberapa titik `.` dalam namanya pada perangkat Android.

### Pesan akun

Ini adalah pesan yang terkait dengan perubahan pada langganan atau akun Anda.

**Vault limit exceeded**
Akun Anda telah melebihi [[Pertanyaan yang sering diajukan#Seberapa besar setiap brankas jarak jauh?|ukuran penyimpanan maksimum]]. Lampiran dan riwayat versi berkontribusi pada ukuran ini. Bahkan jika vault Anda tampak lebih kecil dari batas, versi dan file lama dapat mendorongnya melampaui batas.

Untuk mengurangi ukuran vault:
1. Buka **[[Pengaturan]] → Sync**.
2. Gunakan opsi di bawah **Ukuran vault melebihi batas** untuk menghapus file besar.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Kesalahan ini dapat terjadi dalam kasus berikut:

1. Vault dihapus dari perangkat lain.
2. Langganan sinkronisasi tidak aktif selama lebih dari 30 hari, menyebabkan brankas jarak jauh dihapus.
3. Langganan dibatalkan atau dikembalikan dananya, mengakibatkan penghapusan brankas jarak jauh.

Dalam kasus ini, Anda perlu [[Menyiapkan Obsidian Sync#Memutuskan koneksi dari brankas jarak jauh|memutuskan koneksi dari brankas jarak jauh]] dan [[Menyiapkan Obsidian Sync#Membuat brankas jarak jauh baru|membuat brankas jarak jauh baru]], pastikan data lokal Anda tetap terjaga.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
Akun Anda sekarang dalam status kedaluwarsa penuh karena kami tidak dapat memproses pembayaran yang tercatat.

Untuk terus menggunakan Obsidian Sync, Anda perlu berlangganan kembali melalui [akun Anda](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync mendeteksi bahwa Anda saat ini tidak masuk. Anda perlu masuk kembali pada aplikasi di bagian [[Pengaturan#Umum#Akun|Akun]] pada **[[Pengaturan]]**.

Dalam beberapa kasus, plugin komunitas juga dapat mencegah Obsidian Sync mengonfirmasi status masuk akun Anda. Silakan masuk ke **[[Keamanan plugin#Mode terbatas|Mode terbatas]]** dan coba lagi.

### Pesan jaringan

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync telah terputus dari server Sync karena alasan yang tidak diketahui. Sync akan mencoba menyambung kembali ke server secara berkala.

Di iOS, pesan ini ditampilkan sebagai kesalahan berikut:
`Null is not an object (evaluating 'this.socket.send')`

Artinya persis sama dengan pesan `Unable to connect to server`, dan bukan merupakan indikasi bahwa ada hal lain yang salah.

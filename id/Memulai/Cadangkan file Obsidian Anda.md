---
permalink: backup
---
Jika Anda belum mencadangkan komputer Anda, mulailah sekarang! Plugin [[Pemulih berkas|Pemulih berkas]] Obsidian berguna tetapi terbatas. Plugin ini hanya dapat memulihkan sejumlah data tertentu, dan menyimpan informasi pemulihan per perangkat. Untuk perlindungan yang lebih kuat, kami menyarankan Anda menerapkan sistem pencadangan yang tepat.

**Mengapa mencadangkan data Anda?**

Secara bawaan, Obsidian menyimpan catatan Anda **secara lokal** di perangkat Anda, bukan di cloud. Ini berarti [data sepenuhnya milik Anda](https://obsidian.md/about), memberi Anda kendali atasnya. Namun, penyimpanan lokal dapat terpengaruh oleh masalah seperti kerusakan atau kehilangan data. Ini bukan masalah apakah akan terjadi, tetapi kapan. Mencadangkan data Anda melindungi dari hal-hal yang tak terhindarkan ini dan memastikan Anda tetap mengendalikan catatan Anda.

## Sinkronisasi bukan cadangan

Layanan seperti [[Pengantar Obsidian Sync|Obsidian Sync]], iCloud, OneDrive, dan Dropbox membantu Anda menyinkronkan catatan di berbagai perangkat. Meskipun mereka mungkin menawarkan fitur seperti [[Riwayat versi|pemulihan catatan]], **mereka tidak dirancang untuk pencadangan**. Sinkronisasi menjaga catatan Anda tetap terbaru, tetapi tidak melindungi dari kehilangan data.

- **Sinkronisasi:** Sinkronisasi memastikan file Anda sama di semua perangkat. Ketika Anda mengubah file di satu perangkat, file tersebut diperbarui di semua perangkat yang disinkronkan. Layanan sinkronisasi tidak memiliki perangkat "utama".
- **Cadangan:** Cadangan menyimpan salinan data Anda di lokasi berbeda untuk membantu memulihkannya jika terjadi kehilangan data atau kerusakan. Cadangan tidak dimaksudkan untuk pembaruan waktu nyata atau kolaborasi.

Untuk mencadangkan brankas Anda dengan benar, gunakan alat pencadangan khusus yang membuat salinan satu arah dari data Anda. Alat ini akan mengirim data Anda ke lokasi cadangan yang aman tanpa mengubah data di perangkat Anda.

Jika Anda menggunakan beberapa perangkat dengan sinkronisasi, pilih **satu perangkat** sebagai perangkat cadangan Anda. Ini biasanya perangkat utama atau "primer" Anda, perangkat yang paling sering Anda gunakan. Perlu diketahui bahwa sebagian besar layanan sinkronisasi tidak mengenali perangkat mana pun sebagai "primer"; ini hanya konsep untuk membantu Anda mengelola cadangan.

> [!Example] Anda menggunakan Obsidian Sync di laptop, tablet, ponsel, dan desktop kantor. Anda paling sering menggunakan brankas di desktop kantor, kadang di laptop, dan jarang di tablet atau ponsel. Dalam hal ini, desktop kantor Anda akan menjadi "perangkat utama" untuk pencadangan.

## Menggunakan plugin komunitas

Meskipun Tim Obsidian tidak dapat secara resmi mendukung plugin tertentu, kami menyadari dua plugin komunitas yang telah menjadi populer di kalangan pengguna untuk mencadangkan file mereka:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Gunakan plugin ini untuk mencadangkan brankas Anda dengan melakukan commit isinya ke [Repositori Git](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Ini adalah cara efektif untuk mengontrol versi catatan Anda dan memastikan keamanannya di server jarak jauh. Namun, perlu diketahui bahwa data Anda mungkin disimpan di [[#Menggunakan layanan berbasis cloud|platform hosting eksternal]] menggunakan metode ini.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Plugin ini memungkinkan Anda membuat salinan lokal brankas Anda di folder pilihan Anda, dengan opsi untuk pengarsipan. Anda bahkan dapat menggunakan folder sinkronisasi, seperti folder Dropbox, untuk menggabungkan cadangan lokal dan cloud. Metode ini **cocok dipadukan** dengan opsi pencadangan yang dijelaskan di bawah.

## Menggunakan layanan berbasis cloud

> [!info] Tidak disarankan untuk menyimpan lokasi brankas Anda di layanan cadangan yang Anda pilih.

Menyimpan cadangan di cloud adalah alternatif dan pelengkap penyimpanan data fisik, alih-alih hard drive eksternal atau stik USB. Hard drive eksternal atau stik USB dapat hilang atau rusak. Keuntungan terbesar menyimpan file di cloud adalah file tersedia kapan saja, di mana saja. Kekurangannya adalah, sebagian besar layanan cadangan dimiliki oleh perusahaan swasta.

Dalam hal keamanan, Anda harus selalu memperhatikan akses dan keamanan dengan cadangan cloud. [Worldbackupday](https://www.worldbackupday.com/en) menyimpan daftar terbaru layanan cadangan online yang patut dipertimbangkan.

## Menggunakan drive eksternal

**Hard drive dan drive SSD**
Cadangan hard drive eksternal masih berharga di dunia yang semakin berbasis cloud, dan terutama digunakan untuk penyimpanan data dan cadangan komputer. Kerugian terbesar dari drive eksternal adalah drive dapat rusak atau hilang. Keuntungan terbesar adalah ruang penyimpanan hanya perlu dibeli sekali. Menggunakan hard drive eksternal sering dikombinasikan dengan [[#Menggunakan cadangan komputer|cadangan komputer]].

**Flash drive USB**
Flash drive (juga disebut thumb drive, memory stick, atau pen drive) adalah metode sederhana dan efektif untuk pencadangan cepat.

1. Masukkan flash drive ke komputer atau laptop Anda.
2. Pastikan perangkat dikenali dan terpasang di sistem file Anda. Jika perlu, format flash drive agar kompatibel dengan sistem file Anda.
3. Salin folder brankas Anda dari lokasi saat ini ke flash drive.
4. Lepas flash drive dengan aman.
5. Cabut flash drive dari perangkat Anda.

**Cadangan NAS**
Untuk pengguna berpengalaman, mencadangkan data di server NAS (Network Attached Storage) adalah metode yang baik dan aman, karena memiliki beberapa hard drive dan mekanisme pemulihan tambahan.

> [!tip] Jika drive eksternal Anda berisi informasi sensitif, disarankan untuk menyimpan drive eksternal di tempat yang aman, seperti di ruangan yang terkunci.

## Menggunakan cadangan komputer

Sistem operasi Anda sendiri menawarkan kemampuan untuk membantu membuat cadangan, baik secara online di cloud, maupun di drive eksternal.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Cadangkan dengan OneDrive atau drive eksternal.
- **[Mac](https://support.apple.com/en-us/104984)**: Cadangkan ke perangkat eksternal dengan Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` ke direktori atau drive pilihan.

## Langkah selanjutnya

Halaman bantuan ini memberikan gambaran singkat tentang opsi pencadangan, tetapi tidak lengkap. Untuk informasi lebih mendalam, kunjungi [Worldbackupday.com](https://www.worldbackupday.com/en) atau tanyakan kepada pengguna Obsidian lainnya di [komunitas kami](https://obsidian.md/community) tentang strategi pencadangan mereka!

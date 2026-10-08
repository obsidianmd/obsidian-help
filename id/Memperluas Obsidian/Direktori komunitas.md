---
permalink: community-directory
description: Apa yang ditampilkan oleh halaman listing publik plugin atau tema di direktori Komunitas Obsidian.
---
Setiap plugin dan tema memiliki halaman daftar publik di [direktori Komunitas Obsidian](https://community.obsidian.md). Pilih plugin dari [[Plugin komunitas#Telusuri plugin komunitas|Telusuri]], atau tema dari [[Tema#Telusuri tema|Telusuri]], di Obsidian, atau telusuri [community.obsidian.md](https://community.obsidian.md) secara langsung, untuk membuka halaman daftarnya.

Halaman ini akan membantu Anda memahami fungsi setiap bagian, dari sudut pandang pengguna Obsidian.

> [!tip]- Apakah Anda pengembang plugin atau tema?
> Pelajari cara mengirimkan dan mengelola plugin dan tema Anda sendiri di [dokumentasi direktori komunitas](https://docs.obsidian.md/community-directory).

## Header

Header menampilkan ikon dan nama entri, dengan lencana **Official** jika dibuat oleh pembuat asli plugin atau tema, beserta ikon dan nama penulis serta total unduhan entri.

Pilih **Add to Obsidian** untuk membuka entri langsung di Obsidian dan memasangnya.

## Ikhtisar

Tab **Overview** menampilkan tangkapan layar entri, deskripsi panjangnya, kutipan dari file README-nya, dan kisi plugin atau tema terkait dalam kategori yang sama.

## Kartu Skor

Tab **Scorecard** menampilkan metrik kesehatan dan tinjauan otomatis untuk entri tersebut.

Peringkat kesehatan keseluruhan, seperti Excellent, dipecah menjadi hygiene (apakah README, lisensi, panduan kontribusi, dan deskripsi tersedia), maintenance (aktivitas commit dan rilis terbaru), responsiveness (berapa banyak isu yang telah ditutup dan berapa banyak kontributor yang aktif baru-baru ini), dan adoption (jumlah instalasi dan bintang).

Bagian tinjauan menampilkan hasil pemindaian otomatis terbaru, seperti Passed, yang dikelompokkan menjadi pemeriksaan yang lolos (misalnya tidak ada dependensi rentan yang diketahui, tidak ada kode yang diobfuskasi, attestasi artefak GitHub yang terverifikasi, dan API Obsidian mana yang digunakan entri, seperti Vault Read atau Vault Write), pengungkapan (hal-hal yang dilakukan entri yang tidak selalu bermasalah tetapi perlu Anda ketahui, seperti mengakses papan klip Anda atau membuat permintaan ke domain eksternal), dan catatan lainnya (seperti menggunakan penyimpanan browser alih-alih API data plugin Obsidian).

> [!info]+ Menginterpretasikan skor yang lebih rendah
> Plugin atau tema dengan skor kesehatan atau tinjauan yang lebih rendah tidak selalu berarti tidak aman, tetapi ada baiknya melihat lebih dekat pengungkapannya sebelum memasang. Anggap saja seperti lampu lalu lintas:
> - 🟢 Sedikit atau tanpa pengungkapan berarti risiko rendah
> - 🟡 Beberapa pengungkapan, layak diperiksa untuk hal-hal seperti akses papan klip atau jaringan
> - 🔴 Banyak pengungkapan atau peringatan berarti Anda harus meninjau dengan cermat apa yang dilakukan entri tersebut sebelum memasangnya.

## Pembaruan

Tab **Updates** mencantumkan riwayat rilis entri, dengan versi dan tanggal setiap rilis. Pilih **View all releases on GitHub** untuk melihat riwayat lengkap di repositori entri.

## Bilah Samping

Di samping tab, bilah samping menampilkan ringkasan kesehatan dan tinjauan yang sesuai dengan tab Scorecard, deskripsi panjang entri, dan detail seperti versi saat ini, kapan terakhir diperbarui dan dibuat, jumlah pembaruan dan unduhan, versi Obsidian yang kompatibel, platform yang didukung, dan lisensi. Jika entri tidak Free, bagian Payments menjelaskan cara kerja harganya, misalnya tingkatan berbayar atau batas penggunaan. Jika penulis menambahkan tautan pendanaan, tautan Support juga muncul di sini, beserta ikon, nama penulis atau organisasi, dan tautan ke profil mereka yang lain.

## Pertanyaan yang sering diajukan

**Apa perbedaan antara Free, Optional payment, dan Paid pada daftar?**
Free berarti tidak ada pembayaran yang terlibat. Optional payment berarti entri bergantung pada layanan pihak ketiga berbayar, atau mengunci fitur tertentu di balik pembayaran, sambil tetap dapat digunakan secara gratis. Paid berarti entri hanya dapat diakses dengan pembayaran.

Periksa bagian Payments pada daftar di bilah samping untuk detail spesifik tentang cara kerja harga entri tertentu.

**Mengapa saya tidak dapat menemukan atau memasang plugin atau tema yang pernah saya lihat disebutkan di tempat lain?**
Penulisnya mungkin telah mengarsipkannya. Pengarsipan menghapus entri dari direktori komunitas dan mencegah instalasi baru.

**Apa perbedaan antara skor Health dan Review pada daftar?**
Health mencerminkan kebersihan dan pemeliharaan berkelanjutan entri, seperti commit terbaru dan responsivitas terhadap isu. Review mencerminkan hasil pemindaian otomatis terbaru dari sebuah rilis.

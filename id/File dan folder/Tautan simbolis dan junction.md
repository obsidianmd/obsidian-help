---
permalink: symlinks
---
Anda dapat menggunakan [tautan simbolis](https://en.wikipedia.org/wiki/Symbolic_link) (symlink) dan [junction](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) di brankas Anda untuk menyimpan file di luar brankas dan [[Cara Obsidian menyimpan data#Pengaturan global|folder sistem]].

> [!danger] Gunakan dengan risiko sendiri
> Kami sangat menyarankan untuk tidak menggunakan tautan simbolis. Dengan menggunakan tautan simbolis dan junction di brankas Anda, Anda berisiko kehilangan atau merusak data Anda, atau menyebabkan Obsidian crash. Pastikan Anda melakukan pencadangan rutin terhadap brankas dan pengaturan Anda.

Berikut adalah beberapa batasan atau masalah yang kami ketahui yang mungkin perlu Anda perhatikan:

- Loop symlink tidak diizinkan, untuk mencegah crash Obsidian akibat loop tak terbatas.
- Target symlink harus sepenuhnya terpisah dari root brankas atau target symlink lainnya. Terpisah berarti satu folder tidak memuat folder lainnya, atau sebaliknya. Obsidian mengabaikan symlink apa pun ke folder induk brankas, atau dari satu folder di brankas ke folder lain di brankas yang sama. Ini adalah perlindungan untuk memastikan Anda tidak mendapatkan file duplikat di brankas Anda, yang dapat menyebabkan tautan menjadi ambigu.
- Symlink mungkin tidak berfungsi dengan baik dengan Obsidian Sync, atau _jenis sinkronisasi lainnya_. Jika target symlink itu sendiri adalah folder yang disinkronkan oleh brankas Obsidian lain, Anda berpotensi mengalami konflik sinkronisasi atau kehilangan data. Beberapa alat sinkronisasi, seperti Git, tidak mengikuti symlink, melainkan menyinkronkan _alur_ yang ditunjuk oleh symlink, yang dapat menghasilkan hasil yang tidak diinginkan jika Anda membagikan brankas Anda dengan orang lain dengan cara tersebut.
- Pengelola file Obsidian tidak dapat memindahkan file melintasi batas perangkat, jadi jika Anda membuat symlink ke folder di drive yang berbeda dari brankas Anda, Anda tidak akan dapat menyeret file antara folder tersebut dan folder lain menggunakan penjelajah file Obsidian. (Anda perlu menggunakan penjelajah file OS Anda untuk pemindahan tersebut, dan Obsidian akan melihat pemindahan itu sebagai penghapusan dan pembuatan file baru. Obsidian juga _tidak_ akan memperbarui tautan apa pun yang bergantung pada alur file tersebut.)
- Symlink file (berbeda dengan symlink folder) _mungkin_ berfungsi, tetapi tidak didukung secara resmi saat ini. Perubahan yang dilakukan di luar Obsidian tidak dipantau, jadi jika Anda mengubah file secara langsung, Obsidian tidak akan mendeteksi perubahan tersebut, memperbarui indeks pencarian, dll.
- Membuat symlink pada hal-hal di dalam folder `.obsidian/` untuk membagikannya antar brankas **memiliki kemungkinan tinggi merusak pengaturan Anda**, kecuali Anda _benar-benar_ tahu apa yang Anda lakukan. Jika Anda memutuskan untuk melakukan ini, setidaknya siapkan cadangan.

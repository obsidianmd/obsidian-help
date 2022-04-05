Kami yakin [[Obsidian#Kenapa kami berbeda|data Anda selalu menjadi milik dan dalam kendali Anda]]. Catatan Anda tersimpan dalam markdown, yang mana merupakan format terbuka yang berbasis pada berkas teks polos, dan harus terbaca di masa depan oleh komputer mana pun yang dapat menggunakan berkas teks. Anda dapat dengan mudah mengubac catatan di perangkat lunak lain, bahkan ketika masih terbuka di Obsidian.

### Data per vault
 
Bagaimanapun, beberapa data yang dibutuhkan oleh perangkat lunak tidak tersimpan dalam bentuk markdown. Obsidian membuat direktori dengan nama `.obsidian` pada akar dari vault yang Anda buat. Ini mengandung konfigurasi, termasuk pintasan kustom dan plugin yang sedang aktif. Direktori manapun yang diawali dengan `.` akan disembunyikan pada kebanyakan sistem, sehingga Anda mungkin tidak melihatmya hingga anda mencobanya. Jika Anda menghapus direktori ini, tidak ada data yang akan hilang, tetapi Anda akan kehilangan pengaturan kustom Anda. Ia akan dibuatkan ulang ketika Anda membuka kembali vault di Obsidian. Jika Anda menggunakan `git`, mungkin akan lebih baik untuk `ignore` berkas `.obsidian/workspace`, dikarenakan berkas ini menyimpan panel dan berkas terbuka Anda, tetapi kami tidak menemukan masalah apa pun ketika memasukkannya.

### Direktori sistem

Obsidian juga menyimpan beberapa informasi di direktori sistem. Ini akan berbeda tergantung pada Sistem Operasi; pada Mac berada di `/Users/namapengguna/Library/Application Support/obsidian`, pada Windows `%APPDATA%\Obsidian\`, dan `$XDG_CONFIG_HOME/Obsidian/` atau `~/.config/Obsidian/` pada Linux. Sehingga, kami merekomendasikan untuk tidak membuat vault pada direktori ini.

Disamping itu, Anda dapat membuat Vault di mana pun sistem operasi memperbolehkannya. Berkas Obsidian tersinkronisasi dengan baik dengan Dropbox, iCloud, OneDrive, git, dan layanan penyinkronan lainnya yang telah kami coba.

### Symbolic link
Sejak v0.11.1, Obsidian akan mengenali symbolic link dan junction. Kami secara resmi tidak merekomendasikan untuk menggunakannya, tetapi kami memahami terdapat kasus tertentu untuk penggunaannya. Resiko akan Anda tanggung sendiri jika menggunakannya.

Berhati-hatilah bahwa terdapat banyak jebakan dalam penggunakan symbolic links, dan beberapa dari mereka memiliki konsekuensi yang serius seperti kehilangan data, kerusakan berkas, ataupun akan merusak Obsidian.

Di bawah ini merupakan beberapa pembatasan atau masalah yang kami ketahui untuk dapat Anda pahami:

- Symlink loops tidak diperbolehkan, untuk mengindari kerusakan pada Obsidian dikarinakan perputaran yang tidak terhingga.
- Target symlink haruslah terputus dengan akar vault atau target symlink lain. Terputus di sini maksudnya ialah satu folder tidak boleh mengandung yang lain, atau sebaliknya. Obsidian akan mengabaikan symlink apa pun yang menuju ke folder induk dari vault, atau dari satu folder di vault ke folder lainnya pada vault yang sama. Ini merupakan pengamanan untuk memastikan Anda tidak berakhir dengan menggandakan berkas pada vault Anda yang mana penautan akan menjadi membingungkan.
- Symlink mungkin tidak bekerja dengan baik pada Obsidian sync, atau _jenis-jenis sinkronisasi lain_. Jika target dari symlink itu sendiri merupakan sebuah direktori yang tersinkron dengan vault Obsidian yang berbeda, Anda mungkin (berpotensi) akan berakhir dengan permasalahan sinkronisasi atau kehilangan data. Beberapa peralatan sinkronisasi (mis. git) tidak mengikuti symlink, tetapi mensinkronisasikan _alur_ tujuan dari symlink, yang mana mungkin memberikan hasil yang tidak diinginkan jika Anda membagikan vault Anda melalui cara tersebut.
- Penjelajah berkas Obsidian tidak dapat memindahkan berkas melintasi batas perangkat, sehingga jika anda melakukan symlink menuju folder pada drive yang berbeda melaui vault Anda, Anda tidak akan dapat menyeret berkas antara folder tersebut dengan folder yang lain menggunakan penjelajah berkah Obsidian. (Anda perlu menggunakan penjelajah dari OS Anda untuk pemindahan semacam itu, dan Obsidian akan melihat pemindahan sebagai penghapusan dan pembuatan berkas baru. Juga _tidak_ akan memperbarui tautan apa pun yang bergantung pada alur dari berkas tersebut).
- Symlink berkas (sebagai lawan dari symlink folder) _mungkin_ bekerja, tetapi tidak didukung secara resmi untuk saat ini. Perubahan yang dilakukan di luar Obsidian tidak akan dilihat, sehingga jika Anda mengubah berkas secara langsung, Obsidian tidak akan mendeteksi perubahan, memperbarui indeks penelusuran, dsb.
- Melakukan symlink terhadap hal-hal pada direktori `.obsidian/` untuk membagikannyanya antar vault **berpotensi merusak pengaturan Anda**, kecuali jika Anda _benar-benar_ mengetahui apa yang Anda lakukan. Jika Anda tetap melanjutkannya, setidaknya buatlah pencadangan.

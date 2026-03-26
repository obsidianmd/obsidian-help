---
permalink: plugins/web-viewer
---
Penampil web adalah [[Plugin inti|plugin inti]] yang memungkinkan Anda membuka tautan eksternal di dalam Obsidian pada desktop. Ini memungkinkan Anda membaca konten tautan tanpa meninggalkan aplikasi dan mempermudah multitasking pada proyek riset web.

Tautan eksternal dibuka sebagai [[Tab|tab]] yang dapat Anda atur ulang, pisah, dan buka di [[Jendela pop-out|jendela pop-out]]. Kartu halaman web mana pun yang tersemat di file [[Canvas]] dapat dibuka sebagai tab penampil web.

Penampil web bukan pengganti browser utama Anda. Penampil web menyediakan cara cepat untuk mengakses halaman web untuk riset di dalam Obsidian. Namun, fitur ini tidak menawarkan fungsionalitas penuh, kontrol keamanan, atau ekstensibilitas dari browser khusus.

## Tampilan pembaca

Klik ikon kacamata untuk melihat versi teks biasa dari halaman web. Fitur ini bekerja dengan membersihkan konten menggunakan pustaka Readability Mozilla yang dikembangkan untuk Firefox.

## Simpan ke brankas

Klik ikon tindakan lainnya untuk menyimpan halaman web ke brankas Anda. Anda dapat menyesuaikan lokasi penyimpanan halaman dengan membuka **[[Pengaturan]]** → **Penampil web**.

## Pemblokiran iklan

Penampil web memblokir iklan secara bawaan. Anda dapat menyesuaikan aturan pemblokiran iklan dengan menambahkan daftar seperti [Easylist](https://easylist.to/).

## Keamanan

Jika Anda menggunakan plugin Obsidian pihak ketiga, kami merekomendasikan menggunakan browser utama Anda untuk tugas sensitif dan situs web yang dilindungi kata sandi alih-alih Penampil web.

Penampil web didasarkan pada fitur [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) yang sama yang memungkinkan Anda menyematkan halaman web di [[Canvas]]. Penampil web telah [diaudit secara independen](https://obsidian.md/blog/cure53-second-client-audit/) untuk memverifikasi bahwa fitur ini telah diimplementasikan dengan aman.

Plugin Obsidian [[Keamanan plugin#Kemampuan plugin|tidak di-sandbox]] dan memiliki kontrol mendalam atas aplikasi. Desain ini memungkinkan fungsionalitas yang kuat tetapi juga memiliki kompromi keamanan. Selama Obsidian berjalan, plugin pihak ketiga memiliki akses penuh ke cookie di Penampil web.

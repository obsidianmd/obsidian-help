# Memilih berkas dan pengaturan untuk disinkronkan

Semua berkas ataupun pengaturan yang disinkronkan ke [[Vault lokal dan remote|remote vault]] Anda akan dihitung sebagai [[Pembatasan#Seberapa besarkah setiap vault remote|ruang penyimpanan]] Anda. Secara bawaan, [[Berkenalan dengan Obsidian Sync|Obsidian Sync]] mengecualikan berkas-berkas besar seperti audio, video, dan PDF.

**Catatan:**

- Berkas tersinkron berada di vault remote Anda bahkan jika anda mengecualikannya. Jika memungkinkan, atur berkas-berkas dan pengaturan yang ingin Anda sinkronkan sebelum menyinkronkan vault Anda.
- Pengaturan hanya akan disinkronkan saat membuka aplikasi. Jika Anda ingi mengubah pengaturan apa yang ingin disinkronkan, Anda perlu memulai ulang Obsidian pada perangkat Anda yang lain untuk mendapatkan perubahan yang terbaru.

## Memilih pengaturan untuk disinkronkan

1. Buka **Pengaturan** -> **Sinkronisasi**.
2. Pada **Sinkronkan konfigurasi vault**, aktifkan pengaturan yang ingin Anda sinkronkan.

## Memilih jenis berkas untuk disinkronkan

1. Buka **Pengaturan** -> **Sinkronisasi**.
2. Pada **Sinkronisasi selektif**, aktifkan jenis berkas yang ingin Anda sinkronkan.

## Mengecualikan folder dari penyinkronan

Secara bawaan, Obsidian menyinkronkan semua berkas dan folder pada vault Anda. Jika Anda tidak ingin menyinkronkan folder tertentu, Anda dapat mengecualikannya.

1. Buka **Pengaturan** -> **Sinkronisasi**.
2. Pada **Sinkronisasi selektif**, di sebelah **Kecualikan folder**, klik **Kelola**.
3. Klik centang pada sisi kiri dari folder yang ingin Anda kecualikan.
4. Klik **Selesai**.

## Membuat profil pengaturan

Obsidian Sync dapat menyinkronkan banyak folder pengaturan pada vault remote yang sama. Anda dapat menggunakan ini untuk membuat profil yang berbeda, misalnya satu untuk perangkat seluler dan yang lainnya untuk laptop Anda.

Untuk mengatur folder pengaturan Anda:

1. Buka **Pengaturan** -> **Tentang**.
2. Pada **Timpa folder konfigurasi**, ketikkan nama dari profil Anda, dimulai dengan titik (`.`). Misalnya, `.obsidian-mobile`.

---
permalink: install
aliases:
  - Memulai/Mengunduh dan memasang Obsidian
---
Obsidian tersedia untuk semua platform desktop dan seluler utama. Berikut adalah semua cara yang didukung untuk mengunduh dan memasang Obsidian.

## Memasang Obsidian di Windows

1. Buka browser Anda dan kunjungi [Unduh Obsidian](https://obsidian.md/download).
2. Di bagian **Windows**, klik **Universal** untuk mengunduh file instalasi.
3. Buka file instalasi dan ikuti petunjuknya.
4. Buka Obsidian seperti Anda membuka aplikasi lainnya.

## Memasang Obsidian di macOS

1. Buka browser Anda dan kunjungi [Unduh Obsidian](https://obsidian.md/download).
2. Di bagian **macOS**, klik **Universal** untuk mengunduh file instalasi.
3. Buka file instalasi.
4. Di jendela yang terbuka, seret Obsidian ke folder Applications.
5. Buka Obsidian seperti Anda membuka aplikasi lainnya.

## Memasang Obsidian di Linux

Jika Anda menggunakan Linux, Anda dapat memasang Obsidian dengan beberapa cara. Ikuti petunjuk untuk sistem pengemasan yang Anda gunakan.

### Memasang Obsidian menggunakan Snap

1. Buka browser Anda dan kunjungi [Unduh Obsidian](https://obsidian.md/download).
2. Di bagian **Linux**, klik **Snap** untuk mengunduh file instalasi.
3. Buka terminal dan navigasikan ke folder tempat Anda mengunduh file instalasi.
4. Di terminal, jalankan perintah berikut untuk memasang paket Snap: (flag `--dangerous` diperlukan karena Canonical, perusahaan yang membuat Snap, tidak meninjau paket kami, flag `--classic` memungkinkan Obsidian mengakses di luar sandbox, tempat catatan Anda disimpan)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Buka Obsidian seperti Anda membuka aplikasi lainnya.

### Memasang Obsidian menggunakan AppImage

1. Buka browser Anda dan kunjungi [Unduh Obsidian](https://obsidian.md/download).
2. Di bagian **Linux**, klik **AppImage** untuk mengunduh file instalasi.
3. Buka terminal dan navigasikan ke folder tempat Anda mengunduh file instalasi.
4. Di terminal, jalankan perintah berikut untuk membuka Obsidian:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Catatan: Di Chromebook, paket `libnss3-dev` harus dipasang atau Anda mungkin menerima kesalahan `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory`.

### Memasang Obsidian menggunakan Flatpak

1. Di terminal Anda, jalankan perintah berikut untuk memasang Obsidian:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Buka Obsidian dengan menjalankan perintah berikut:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Memasang Obsidian di Android

1. Temukan Obsidian di [Play Store](https://play.google.com/store/apps/details?id=md.obsidian).
2. Ketuk **Install** untuk mengunduh aplikasi.
3. Buka Obsidian seperti Anda membuka aplikasi lainnya.

Anda juga dapat mengunduh APK untuk Android dari halaman [Unduh Obsidian](https://obsidian.md/download).

## Memasang Obsidian di iPhone dan iPad

1. Temukan Obsidian di [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442).
2. Ketuk **Get** untuk mengunduh aplikasi.
3. Buka Obsidian seperti Anda membuka aplikasi lainnya.

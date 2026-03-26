---
permalink: ribbon
publish: true
mobile: true
description: 'Pelajari cara menggunakan ribbon, ruang untuk perintah umum di Obsidian, dan cara menyesuaikannya di desktop dan seluler.'
aliases:
  - Antarmuka pengguna/Ruang kerja/Ribbon
---
Bilah alat berfungsi sebagai tempat untuk perintah-perintah umum di dalam Obsidian.

Di desktop, bilah alat terletak di [[Bilah samping#Membuka bilah samping tersembunyi|Bilah Samping kiri]] dan tetap terlihat meskipun Bilah Samping kiri ditutup.

Di perangkat seluler, Anda dapat mengakses [[Aplikasi seluler#Aksi bilah alat|Aksi Bilah Alat]] dengan mengetuk **Opsi Menu** ![[lucide-menu.svg#icon]] di sudut kanan bawah aplikasi saat Anda tidak sedang mengedit catatan.

## Aksi

Setiap aksi diwakili oleh ikon di bilah alat. Mengarahkan kursor ke ikon-ikon ini akan menampilkan tooltip, sementara memilihnya akan mengaktifkan aksi terkait. Di perangkat seluler, Anda dapat mengetuk ikon-ikon ini untuk mengaktifkannya.

1. Buka **[[Kelola brankas|Pengalih brankas]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Akses **bantuan** ![[lucide-help-circle.svg#icon]].
3. Buka **[[Pengaturan]]** ![[lucide-settings.svg#icon]].

Di versi seluler, Anda dapat mengonfigurasi aksi akses cepat di bilah alat. Untuk informasi lebih lanjut, lihat [[#Seluler|bagian seluler]] dan [[Aplikasi seluler]].

## Kustomisasi bilah alat

Tata letak bilah alat yang dikustomisasi akan diingat antar sesi. Tata letak ini disinkronkan dengan perangkat lain dan aplikasi seluler ketika pengaturan aplikasi (dalam file `workspace.json` dan `workspace-mobile.json`) disinkronkan.

### Desktop

Di versi desktop, Anda dapat mengkustomisasi bilah alat sebagai berikut:

- Atur ulang urutan aksi bilah alat dengan menyeret dan melepaskan ikon.
- Untuk menyembunyikan aksi tertentu, klik kanan pada area kosong di bilah alat dan hapus centang pada aksi yang ingin Anda sembunyikan.

#### Menyembunyikan bilah alat

Anda dapat menyembunyikan bilah alat dengan dua cara:

- Klik kanan pada bilah alat dan pilih **Sembunyikan bilah alat**.
- Buka **[[Pengaturan]]** → **Tampilan**, gulir ke bawah ke **Lanjutan**, dan nonaktifkan **Tampilkan bilah alat**.

#### Menampilkan bilah alat

Jika Anda telah menyembunyikan bilah alat dan ingin menampilkannya kembali:

1. Buka **[[Pengaturan]]** → **Tampilan**.
2. Gulir ke bawah ke **Lanjutan**.
3. Aktifkan **Tampilkan bilah alat**.
4. Bilah alat akan muncul kembali di sisi kiri jendela.

> [!tip] CSS Kustom
> Jika Anda menggunakan tema komunitas atau CSS kustom, pastikan tema atau CSS tersebut tidak menyembunyikan bilah alat melalui aturan gaya kustom.

### Seluler

Di versi seluler Obsidian, Anda dapat melakukan aksi akses cepat, mengatur ulang item, dan mengkustomisasi menu bilah alat. Untuk mengakses kustomisasi ini, ikuti langkah-langkah berikut:

1. Buka **[[Pengaturan]]** Obsidian ![[lucide-cog.svg#icon]].
2. Navigasi ke bagian **tampilan**.
3. Gulir ke bawah ke opsi **lanjutan**.
4. Pilih tombol **Kelola** di bawah item **Atur Ribbon**.

#### Akses cepat

Secara bawaan, opsi akses cepat diatur ke "Buka menu bilah alat" dengan *tekan singkat*. Jika Anda memilih opsi lain sebagai akses cepat:

- Opsi yang dipilih akan dipicu dengan *tekan singkat*.
- Akses menu bilah alat akan berubah menjadi *tekan lama*.

> [!info] Opsi akses cepat bergantung pada pengaturan Obsidian dan plugin inti yang Anda aktifkan.

#### Mengatur ulang dan visibilitas

Untuk mengubah urutan item di menu bilah alat, tekan dan tahan tombol **seret dan lepas** ![[lucide-menu.svg#icon]] lalu pindahkan item yang dipilih ke atas atau ke bawah.

Anda dapat menampilkan atau menyembunyikan item di menu bilah alat menggunakan tombol merah **hapus** ![[lucide-minus-circle.svg#icon]] atau tombol hijau **tambah** ![[lucide-plus-circle.svg#icon]] untuk mengubah visibilitasnya.

 ![[ribbon-rearrange-visibility.jpeg#interface]]

---
permalink: headless
description: Obsidian Headless adalah klien baris perintah untuk layanan Obsidian. Sinkronkan vault Anda tanpa aplikasi desktop.
---
Obsidian Headless **(beta terbuka)** adalah klien headless untuk layanan Obsidian. Obsidian Headless memungkinkan Anda [[Headless Sync|menyinkronkan brankas]] dari baris perintah tanpa aplikasi desktop, dengan semua kecepatan, privasi, dan manfaat enkripsi ujung-ke-ujung dari [[Pengantar Obsidian Sync|Obsidian Sync]].

Alasan Anda mungkin menggunakan Obsidian Headless:

- Mengotomatiskan pencadangan jarak jauh.
- Mengotomatiskan publikasi situs web.
- Memberikan akses brankas kepada alat agentik tanpa akses ke seluruh komputer Anda.
- Menyinkronkan brankas tim bersama ke server yang menyuplai alat lainnya.
- Menjalankan otomatisasi terjadwal, misalnya menggabungkan catatan harian menjadi ringkasan mingguan, penandaan otomatis, dll.

> [!info] Obsidian Headless vs Obsidian CLI
> [[Obsidian CLI]] mengendalikan aplikasi desktop Obsidian dari terminal Anda. Obsidian Headless adalah klien mandiri yang berjalan secara independen, tanpa memerlukan aplikasi desktop.

## Pasang

Obsidian Headless **(beta terbuka)** memerlukan Node.js 22 atau yang lebih baru. Pasang dari [npm](https://www.npmjs.com/package/obsidian-headless):

```shell
npm install -g obsidian-headless
```

## Autentikasi

### Masuk

```shell
ob login
```

Jika sudah masuk, `ob login` menampilkan informasi akun Anda. Untuk beralih akun, berikan `--email` dan/atau `--password` untuk masuk kembali.

```
ob login [--email <email>] [--password <password>] [--mfa <code>]
```

Semua opsi bersifat interaktif jika tidak disertakan — email dan kata sandi akan diminta, dan 2FA akan diminta secara otomatis jika diaktifkan pada akun.

Untuk keluar dan menghapus kredensial yang tersimpan:

```shell
ob logout
```

## Layanan

- [[Headless Sync]]: gunakan [[Pengantar Obsidian Sync|Obsidian Sync]] dari baris perintah tanpa aplikasi desktop.
- [[Headless Publish]]: gunakan [[Pengantar Obsidian Publish|Obsidian Publish]] dari baris perintah tanpa aplikasi desktop.

---
permalink: sync/headless
cssclasses:
  - reference
description: 'Obsidian Sync menawarkan klien headless untuk menyinkronkan vault tanpa menggunakan aplikasi desktop. Berguna untuk pipeline CI, agen, dan alur kerja otomatis. Sinkronkan perubahan terbaru atau jaga file tetap mutakhir secara terus-menerus.'
---
[[Pengantar Obsidian Sync|Obsidian Sync]] menawarkan klien headless untuk menyinkronkan brankas tanpa menggunakan aplikasi desktop. Berguna untuk pipeline CI, agen, dan alur kerja otomatis. Sinkronkan perubahan terbaru atau jaga file tetap terkini secara berkelanjutan.

Pasang [[Obsidian Headless]] **(beta terbuka)** untuk berinteraksi dengan [[Pengantar Obsidian Sync|Obsidian Sync]] dari baris perintah tanpa aplikasi desktop Obsidian. Headless Sync menggunakan [[Keamanan dan privasi|perlindungan enkripsi dan privasi]] yang sama seperti aplikasi desktop, termasuk enkripsi ujung-ke-ujung.

## Memulai cepat

> [!error] Cadangkan data Anda sebelum memulai
> 1. Selalu cadangkan data Anda sebelum memulai untuk berjaga-jaga jika terjadi hal yang tidak terduga.
> 2. Jangan gunakan Sync aplikasi desktop *dan* Headless Sync secara bersamaan di perangkat yang sama, karena dapat menyebabkan konflik data. Gunakan hanya satu metode sinkronisasi per perangkat.

Pasang [[Obsidian Headless|Obsidian Headless]] **(beta terbuka)**:

```shell
npm install -g obsidian-headless
```

Anda harus memiliki [[Paket dan batas penyimpanan|langganan Obsidian Sync]] yang aktif.

```shell
# Masuk
ob login

# Daftar vault remote Anda
ob sync-list-remote

# Siapkan brankas untuk sinkronisasi
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Jalankan sinkronisasi satu kali
ob sync

# Jalankan sinkronisasi berkelanjutan (memantau perubahan)
ob sync --continuous
```

## Perintah

### `ob sync-list-remote`

Daftar semua vault remote yang tersedia untuk akun Anda, termasuk vault yang dibagikan.

### `ob sync-list-local`

Daftar brankas yang dikonfigurasi secara lokal beserta alurnya.

### `ob sync-create-remote`

Buat vault remote baru.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Opsi | Deskripsi |
| --- | --- |
| `--name` | Nama vault (wajib) |
| `--encryption` | `standard` untuk enkripsi terkelola, `e2ee` untuk enkripsi ujung-ke-ujung |
| `--password` | Kata sandi enkripsi ujung-ke-ujung (akan diminta jika tidak disertakan) |
| `--region` | [[Wilayah Sync\|Wilayah]] server (otomatis jika tidak disertakan) |

### `ob sync-setup`

Siapkan sinkronisasi antara brankas lokal dan vault remote.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Opsi | Deskripsi |
| --- | --- |
| `--vault` | ID atau nama vault remote (wajib) |
| `--path` | Direktori lokal (bawaan: direktori saat ini) |
| `--password` | Kata sandi enkripsi E2E (akan diminta jika tidak disertakan) |
| `--device-name` | Nama perangkat yang ditampilkan di [[Riwayat versi\|riwayat versi sinkronisasi]] |
| `--config-dir` | Nama [[Folder konfigurasi\|direktori konfigurasi]] (bawaan: `.obsidian`) |

### `ob sync`

Jalankan sinkronisasi untuk brankas yang sudah dikonfigurasi.

```
ob sync [--path <local-path>] [--continuous]
```

| Opsi | Deskripsi |
| --- | --- |
| `--path` | Alur brankas lokal (bawaan: direktori saat ini) |
| `--continuous` | Jalankan secara berkelanjutan, memantau perubahan |

### `ob sync-config`

Lihat atau ubah [[Pengaturan Sync dan sinkronisasi selektif|pengaturan sinkronisasi]] untuk brankas. Jalankan tanpa opsi untuk menampilkan konfigurasi saat ini.

```
ob sync-config [--path <local-path>] [options]
```

| Opsi                  | Deskripsi                                                                                                                                                                                                         |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Alur brankas lokal (bawaan: direktori saat ini)                                                                                                                                                                   |
| `--mode`              | Mode sinkronisasi: `bidirectional` (bawaan), `pull-only` (hanya unduh, abaikan perubahan lokal), atau `mirror-remote` (hanya unduh, kembalikan perubahan lokal)                                                   |
| `--conflict-strategy` | `merge` atau `conflict`                                                                                                                                                                                           |
| `--file-types`        | Jenis lampiran yang disinkronkan: `image`, `audio`, `video`, `pdf`, `unsupported` (dipisahkan koma, kosongkan untuk menghapus)                                                                                    |
| `--configs`           | Kategori konfigurasi yang disinkronkan: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (dipisahkan koma, kosongkan untuk menonaktifkan sinkronisasi konfigurasi) |
| `--excluded-folders`  | Folder yang dikecualikan (dipisahkan koma, kosongkan untuk menghapus)                                                                                                                                             |
| `--device-name`       | Nama perangkat untuk mengidentifikasi klien ini dalam riwayat versi sinkronisasi                                                                                                                                  |
| `--config-dir`        | Nama direktori konfigurasi (bawaan: `.obsidian`)                                                                                                                                                                  |

### `ob sync-status`

Tampilkan status sinkronisasi dan konfigurasi untuk brankas.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Putuskan brankas dari sinkronisasi dan hapus kredensial yang tersimpan.

```
ob sync-unlink [--path <local-path>]
```

## Modul native

Obsidian Headless menyertakan addon native yang sudah dikompilasi untuk mengatur waktu pembuatan file (birthtime) di Windows dan macOS. Ini mempertahankan stempel waktu pembuatan asli saat mengunduh file dari server.

Addon ini menargetkan N-API versi 3, sehingga biner yang dikompilasi stabil secara ABI dan bekerja di berbagai versi Node.js tanpa perlu kompilasi ulang.

Di Linux, birthtime tidak didukung — addon tidak disertakan dan sinkronisasi beroperasi normal tanpanya.

Biner yang sudah dikompilasi disertakan untuk:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`

---
permalink: publish/headless
cssclasses:
  - reference
description: Obsidian Publish menawarkan klien headless untuk menerbitkan vault tanpa menggunakan aplikasi desktop. Berguna untuk pipeline CI dan alur kerja otomatis.
---
[[Pengantar Obsidian Publish|Obsidian Publish]] menawarkan klien headless untuk mempublikasikan brankas tanpa menggunakan aplikasi desktop. Berguna untuk pipeline CI dan alur kerja otomatis. Publikasikan perubahan terbaru Anda sesuai jadwal atau sebagai bagian dari pipeline build.

Pasang [[Obsidian Headless]] **(beta terbuka)** untuk berinteraksi dengan [[Pengantar Obsidian Publish|Obsidian Publish]] dari baris perintah tanpa aplikasi desktop Obsidian.

## Memulai cepat

Pasang [[Obsidian Headless|Obsidian Headless]] **(beta terbuka)**:

```shell
npm install -g obsidian-headless
```

Anda harus memiliki [[Pengantar Obsidian Publish|langganan Obsidian Publish]] yang aktif.

```shell
# Masuk
ob login

# Daftar situs publish Anda
ob publish-list-sites

# Hubungkan brankas lokal ke situs publish
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Pratinjau perubahan tanpa mempublikasikan
ob publish --dry-run

# Publikasikan perubahan
ob publish
```

## Perintah

### `ob publish-list-sites`

Menampilkan semua situs Publish yang tersedia untuk akun Anda.

### `ob publish-create-site`

Membuat situs Publish baru.

```
ob publish-create-site --slug <slug>
```

| Opsi | Deskripsi |
| --- | --- |
| `--slug` | Pengidentifikasi URL untuk situs Anda (mis. `my-notes` membuat `publish.obsidian.md/my-notes`) |

### `ob publish-setup`

Menghubungkan brankas lokal ke situs Publish.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Opsi | Deskripsi |
| --- | --- |
| `--site` | ID situs atau slug |
| `--path` | Path brankas lokal (bawaan: direktori saat ini) |

### `ob publish`

Mempublikasikan perubahan brankas ke situs Anda. Secara bawaan, hanya file dengan `publish: true` di metadata awalnya yang disertakan.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Opsi | Deskripsi |
| --- | --- |
| `--path` | Path brankas lokal (bawaan: direktori saat ini) |
| `--all` | Sertakan semua file, tidak hanya yang memiliki tanda publish |
| `--dry-run` | Tampilkan perubahan tanpa mempublikasikan |
| `--yes` | Publikasikan tanpa meminta konfirmasi |

### `ob publish-config`

Melihat atau mengubah pengaturan folder sertakan/kecualikan untuk brankas. Jalankan tanpa opsi untuk menampilkan konfigurasi saat ini.

```
ob publish-config [--path <local-path>] [options]
```

| Opsi | Deskripsi |
| --- | --- |
| `--path` | Path brankas lokal (bawaan: direktori saat ini) |
| `--includes` | Folder yang disertakan, dipisahkan koma (string kosong untuk menghapus) |
| `--excludes` | Folder yang dikecualikan, dipisahkan koma (string kosong untuk menghapus) |

### `ob publish-site-options`

Melihat atau memperbarui pengaturan tampilan dan navigasi seluruh situs. Jalankan tanpa opsi untuk menampilkan pengaturan saat ini.

```
ob publish-site-options [--path <local-path>] [options]
```

| Opsi | Deskripsi |
| --- | --- |
| `--path` | Path brankas lokal (bawaan: direktori saat ini) |
| `--site-name` | Nama situs |
| `--index-file` | Path file halaman beranda |
| `--logo` | Path file logo (string kosong untuk menghapus) |
| `--show-navigation` | Tampilkan bilah samping navigasi |
| `--show-graph` | Tampilkan tampilan grafik |
| `--show-outline` | Tampilkan daftar isi |
| `--show-search` | Tampilkan pencarian |
| `--show-backlinks` | Tampilkan backlink |
| `--show-hover-preview` | Tampilkan pratinjau melayang |
| `--show-theme-toggle` | Tampilkan tombol tema |
| `--default-theme` | Tema bawaan: `light` atau `dark` |
| `--readable-line-length` | Panjang baris yang dapat dibaca |
| `--strict-line-breaks` | Pemisah baris ketat |
| `--hide-title` | Sembunyikan judul sebaris |
| `--sliding-window` | Mode jendela geser |
| `--nav-order` | Urutan navigasi, path dipisahkan koma (string kosong untuk menghapus) |
| `--nav-hidden` | Item navigasi tersembunyi, path dipisahkan koma (string kosong untuk menghapus) |

### `ob publish-unlink`

Memutuskan brankas dari situs Publish.

```
ob publish-unlink [--path <local-path>]
```

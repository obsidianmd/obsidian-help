---
permalink: publish/security
aliases:
  - Obsidian Publish/Keamanan dan privasi
---
Anda dapat memilih catatan yang ingin Anda publikasikan ke [[Pengantar Obsidian Publish|Obsidian Publish]]. Sisa catatan Anda tetap aman di brankas Anda.

Hanya catatan yang Anda pilih untuk dipublikasikan yang dikirim ke server Obsidian, dan catatan yang Anda batalkan publikasinya akan dihapus.

## Perlindungan kata sandi

Untuk kontrol akses yang lebih baik pada situs publish Anda, terapkan kata sandi situs. Pengunjung akan diminta memasukkan kata sandi saat mencoba mengaksesnya. Jika Anda memutuskan untuk menghapus kata sandi situs nanti, seluruh situs akan kembali terlihat oleh publik.

> [!warning] Perlindungan kata sandi individual untuk catatan yang dipublikasikan saat ini belum didukung.

### Menambahkan kata sandi situs

1. Di bilah alat, di sebelah kiri jendela aplikasi, klik **Publish changes** ![[lucide-send.svg#icon]].
2. Di dialog **Publish changes**, klik **Ubah pengaturan situs** ![[lucide-cog.svg#icon]].
3. Di bawah **Pengaturan lain situs**, di samping **Kata sandi**, klik **Kelola**.
4. Klik **Kata sandi baru**.
5. Di **Kata sandi**, masukkan kata sandi untuk situs Anda.
6. (Opsional) Di **Nickname**, masukkan nama panggilan untuk kata sandi, misalnya, orang yang ingin Anda beri akses situs.
7. Klik **Tambahkan kata sandi ini**.

### Menghapus kata sandi situs

1. Di bilah alat, di sebelah kiri jendela aplikasi, klik **Publish changes** ![[lucide-send.svg#icon]].
2. Di dialog **Publish changes**, klik **Ubah pengaturan situs** ![[lucide-cog.svg#icon]].
3. Di bawah **Pengaturan lain situs**, di samping **Kata sandi**, klik **Kelola**.
5. Klik ikon silang di samping kata sandi yang ingin Anda hapus.

## Pengumpulan data
### Data pengunjung

Secara bawaan, Obsidian Publish **tidak** mengumpulkan data pengunjung, menyimpan cookie, atau memproses informasi pribadi. Namun Anda dapat mengimplementasikan analitik atau mencatat data pengguna lainnya dengan [[Kustomisasi situs Anda|mengkustomisasi situs Anda]].

Sebagai pemilik situs, Anda bertanggung jawab untuk mematuhi GDPR dan regulasi privasi di wilayah Anda. Ini termasuk membuat banner notifikasi Anda sendiri, yang dapat diimplementasikan menggunakan publish.js, dan menambahkan halaman kebijakan privasi ke situs Anda.

## Akses

Obsidian mengontrak [Cloudflare](https://www.cloudflare.com) untuk menyediakan hosting situs bagi situs Publish kami. Server dihosting di San Francisco, CA.

### Mengelola akses ke Obsidian Publish di jaringan Anda

Untuk mengatur akses ke Obsidian Publish di jaringan Anda, Anda perlu mengelola domain berikut:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Selain itu, layanan backend menggunakan subdomain berikut: `publish-xx.obsidian.md`, di mana `xx` adalah angka mulai dari `1 - 100`.

> [!tip] Jika sistem firewall Anda mendukungnya, kami merekomendasikan untuk memasukkan `publish-*.obsidian.md` ke dalam whitelist untuk mengakomodasi perluasan subdomain kami yang berkelanjutan.

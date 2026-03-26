---
permalink: 2fa
---
Jika Anda memiliki [akun Obsidian](https://obsidian.md/account), Anda dapat mengaktifkan autentikasi dua faktor (2FA) untuk melindungi akun Anda dengan langkah verifikasi kedua.

## Mengaktifkan 2FA

- Masuk ke [akun Obsidian Anda](https://obsidian.md/account/profile) dari peramban web Anda.
- Di bagian **Profil**, buka **Autentikasi 2 faktor** dan pilih **Aktifkan**.
- Jendela popup akan muncul untuk meminta Anda menghubungkan aplikasi autentikator dengan **kode QR** atau **kunci pengaturan**.

> [!hint]- Aplikasi autentikasi populer
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Keychain](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Setelah terhubung, aplikasi autentikator Anda akan memberikan kode enam digit. Masukkan kode tersebut di bawah bagian **kode QR/kunci pengaturan**, pada langkah 3.
- Terakhir, masukkan kata sandi Anda saat ini.
- Pilih **Selesaikan pengaturan**.
- Jendela popup akan digantikan dengan jendela konfirmasi dan kode pemulihan Anda. Silakan unduh kode pemulihan Anda, karena Anda akan membutuhkannya untuk membuka kunci akun Anda.

2FA Anda sekarang telah diatur.

> [!warning]- Cadangan kode QR/kunci pengaturan
> Jika Anda memutuskan untuk menyimpan cadangan **kode QR** atau **kunci pengaturan** selain kode pemulihan, kami sangat menyarankan untuk menyimpannya dalam sistem yang terenkripsi kata sandi.

## Membuat kode pemulihan

Jika Anda mengaktifkan 2FA sebelum kode pemulihan tersedia, atau jika Anda ingin memuat ulang kode pemulihan Anda, ikuti langkah-langkah berikut:

- Masuk ke [akun Obsidian Anda](https://obsidian.md/account/profile) dari peramban web Anda.
- Di samping Autentikasi 2 faktor, pilih **Muat ulang kode pemulihan**.
- Di jendela popup, masukkan **kata sandi** dan **kode autentikator 6 digit** Anda.
- Jendela konfirmasi akan menampilkan kode pemulihan Anda. Anda memiliki dua pilihan:
    - **Salin kode pemulihan**: Salin kode untuk ditempel di tempat lain.
    - **Unduh kode pemulihan**: Unduh file `obsidian-recovery-codes.txt` yang berisi kode Anda.
- Pilih **Mengerti** untuk menutup jendela popup.

Anda dapat menggunakan kode pemulihan **sekali** sebagai pengganti **kode autentikator 6 digit** Anda. Anda juga dapat memuat ulang kode pemulihan kapan saja.

## Menonaktifkan 2FA

- Masuk ke [akun Obsidian Anda](https://obsidian.md/account/profile) dari peramban web Anda.
- Di bagian **Profil**, buka **Autentikasi 2 faktor** dan pilih **Matikan**.
- Masukkan Kata Sandi Obsidian Anda.
- Masukkan kode enam digit saat ini dari aplikasi autentikasi Anda.
- Pilih **Matikan 2FA**.
- Anda akan dibawa kembali ke layar manajemen Akun.

Pengaturan **Autentikasi 2 faktor** akan kembali menampilkan tombol **Aktifkan**, yang menunjukkan bahwa 2FA telah dinonaktifkan.

## FAQ

**Saya telah mengaktifkan 2FA. Apakah saya akan dikeluarkan dari perangkat Obsidian saya saat ini?**
Tidak. Mengaktifkan 2FA tidak mengeluarkan Anda dari semua perangkat demi kenyamanan Anda. Jika diperlukan, Anda dapat melakukannya secara manual dari halaman akun Anda, dan kemudian masuk kembali di setiap perangkat Anda.

**Saya mengaktifkan, lalu menonaktifkan 2FA. Saya ingin mengaturnya kembali. Bisakah saya menggunakan kode QR atau kunci pengaturan yang asli?**
Tidak. Anda akan diberikan **kode QR** baru dan **kunci pengaturan** baru setiap kali Anda memulai pengaturan 2FA yang baru.

**Saya telah mengaktifkan 2FA. Saya belum pernah diminta untuk memasukkannya setelah beberapa kali keluar/masuk. Apakah ini berfungsi?**
Cache peramban Anda mungkin membuat Anda tampak seolah-olah sedang melakukan perubahan pada halaman (seperti masuk atau keluar) padahal sebenarnya Anda mengakses data yang tersimpan. Coba gunakan jendela penjelajahan pribadi untuk masuk guna mengonfirmasi bahwa 2FA berfungsi.

Jika Anda terus mengalami perilaku ini, silakan [kirimkan laporan bug](https://forum.obsidian.md/c/bug-reports/7).

**Saya kehilangan kode pemulihan, autentikator, dan semua yang diperlukan untuk masuk ke akun saya. Apa yang harus saya lakukan?**

Jika Anda kehilangan kode pemulihan dan autentikator, silakan kirim email ke [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) untuk mendapatkan bantuan dalam memulihkan akses ke akun Anda.

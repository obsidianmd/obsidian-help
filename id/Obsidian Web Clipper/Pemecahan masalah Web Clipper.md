---
permalink: web-clipper/troubleshoot
---
Jika Anda mengalami masalah dengan [[Pengantar Obsidian Web Clipper|Web Clipper]], Anda bisa mendapatkan bantuan melalui [saluran Discord resmi](https://discord.com/channels/686053708261228577/1285652864089198672). Anda juga dapat melaporkan bug di [repositori GitHub](https://github.com/obsidianmd/obsidian-clipper).

## Umum

### Beberapa konten hilang

Secara bawaan, Web Clipper mencoba menangkap konten dari halaman secara cerdas. Namun, hal ini mungkin tidak berhasil di semua situs web.

Web Clipper menggunakan [Defuddle](https://github.com/kepano/defuddle) untuk menangkap hanya konten utama halaman. Ini mengecualikan header, footer, dan elemen lainnya, tetapi terkadang bisa terlalu konservatif dan menghapus konten yang ingin Anda simpan. Anda dapat [melaporkan bug](https://github.com/kepano/defuddle) ke Defuddle.

Untuk melewati Defuddle di Web Clipper, gunakan metode berikut:

- Pilih teks, atau gunakan `Cmd/Ctrl+A` untuk memilih semua teks.
- [[Sorot halaman web|Sorot konten]] untuk memilih secara tepat apa yang ingin Anda tangkap.
- Gunakan [[Obsidian Web Clipper/Template|templat kustom]] untuk situs tersebut.

### Tidak ada konten yang muncul di Obsidian

Jika Anda tidak melihat konten apa pun di Obsidian saat Anda mengklik **Tambah ke Obsidian**:

- Periksa kesalahan di [[Bantuan dan dukungan#Tangkap log konsol|konsol pengembang]] Obsidian.
- Periksa bahwa nama vault Anda di pengaturan Web Clipper sama persis dengan *nama vault* Anda di Obsidian, *bukan alur vault*.
- Periksa bahwa nama folder diformat dengan benar.

## Linux

#### Obsidian tidak terbuka

- Pastikan protokol [[Obsidian URI]] [[Obsidian URI#Daftarkan URI Obsidian|sudah terdaftar]].
- Jika Anda menggunakan Firefox, Anda mungkin perlu [mendaftarkannya di pengaturan browser](https://kb.mozillazine.org/Register_protocol).

#### Obsidian terbuka tetapi hanya nama file yang tersimpan

Kemungkinan besar Obsidian tidak dapat mengakses papan klip Anda. Akses papan klip diperlukan untuk meneruskan data dari browser Anda ke Obsidian. Konfigurasi Anda dapat memengaruhi cara aplikasi di-sandbox, dan izin papan klip.

Jika Anda menggunakan Wayland, pastikan Obsidian memiliki izin untuk membaca papan klip saat aplikasi tidak dalam fokus. Preferensi ini mungkin ada di tiling window manager Anda, misalnya Hyprland atau Sway.

Jika Anda menggunakan Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Jika Anda menggunakan Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Jika Anda menggunakan Flatpak, pertimbangkan untuk mencoba [versi Obsidian yang didukung secara resmi](https://obsidian.md/download).
- Jika Anda menggunakan KDE, buka **System Settings** → **Window Management** → **Window Rules** dan izinkan Obsidian untuk mengambil fokus, [[web-clipper-kde.png|lihat tangkapan layar]].
- Sebagai cadangan, coba beralih ke **Mode Legacy** di **Pengaturan Web Clipper** → **Umum**. Ini akan melewati papan klip dan menyimpan konten langsung melalui URI. Perhatikan bahwa ini akan membatasi jumlah karakter yang dapat dikliping tergantung pada browser dan distribusi Linux Anda.

## iOS dan iPadOS

Untuk mengaktifkan ekstensi Web Clipper untuk Safari:

1. Buka Safari, ketuk tombol paling kiri di bilah URL browser, yang terlihat seperti persegi panjang dengan garis di bawahnya.
2. Ketuk **Manage Extensions**.
3. Aktifkan **Obsidian Web Clipper** di daftar Ekstensi.
4. Keluar dari menu.
5. Untuk menggunakan ekstensi, **ketuk ikon potongan puzzle** di bilah URL.

Untuk mengizinkan Web Clipper berjalan di semua situs web:

1. Buka **[[Pengaturan]]** iOS → **Apps** → **Safari** → **Extensions**.
2. Di bagian **Permissions**, izinkan untuk berjalan di semua situs web.

Untuk mengizinkan Obsidian selalu menerima konten Web Clipper:

1. Buka **[[Pengaturan]]** iOS → **Apps** → **Obsidian**.
2. Atur **Paste from other apps** ke **Allow**.

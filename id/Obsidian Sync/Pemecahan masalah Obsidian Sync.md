Laman ini beriskan masalah unum yang mungkin Anda temukan, dan cara mengatasinya.

## Perubahan dari

Sebuah konflik terjadi ketika Anda membuat perubahan ke berkas yang sama pada dua atau lebih perangkat di antara sinkronisasi. Misalnya, pada

Konflik biasanya lebih sering terjadi jika anda bekerja secara luring, dikarenakan terdapat perubahan yang banyak serta jangka waktu yang lama di antara sinkronisasi dan hal tersebut lebih berpotensi menghasilkan konflik.

Ketika Sinkronisasi mengunduh versi baru dari berkas, dan menemukan konflik dengan versi lokal, perubahan akan digabungkan dengan algoritma Google's diff-match-patch.

> [!tip]
> Untuk menemukan konflik yang telah terjadi, Anda dapat mencari "Menggabungkan berkas terkonflik" pada **Pengaturan** → **Sinkronisasi** → **Aktivitas sinkronisasi** → **Tampilkan**.

## Apa maksud dari kesalahan `vault limit exceeded`?

Vault anda melebihi [[Pembatasan#Seberapa besarkah setiap vault remote|ukuran maksimum dari 10 GB]].

Dikarenakan lampiran dan riwayat versi berkontribusi pada ukuran total dari vault Anda, vault Anda dapat melebihi ukuran maksimum bahkan jika ukuran sebenarnya dari vault Anda lebih kecil dari batas.

Untuk mengidentifikasi dan membersihkan berkas-berkas besar dari vault:

1. Buka **Pengaturan** -> **Sinkronisasi**.
2. Jelajai opsi-opsi pada **Ukuran vault melebihi batas** untuk bagaimana Anda mengurangi ukuran dari vault Anda.

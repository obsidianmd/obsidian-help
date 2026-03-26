---
permalink: sync/collaborate
publish: true
mobile: true
description: Halaman ini merinci bagaimana Anda dapat berkolaborasi dengan pengguna Obsidian Sync lainnya.
---
Dengan [[Pengantar Obsidian Sync|Obsidian Sync]] Anda dapat berkolaborasi di brankas bersama dengan tim Anda.

Semua kolaborator harus memiliki langganan Sync yang aktif untuk mengakses brankas bersama. Bergabung ke brankas bersama tidak dihitung terhadap [[Pertanyaan yang sering diajukan#Berapa banyak brankas jarak jauh yang bisa saya miliki?|batas brankas]] Anda.

Jika brankas jarak jauh [[Obsidian Sync/Keamanan dan privasi|dienkripsi ujung-ke-ujung]], kolaborator harus memasukkan kata sandi enkripsi saat mereka menyiapkan brankas.

## Kelola pengguna

### Tambah pengguna

Untuk mengundang pengguna berbagi brankas jarak jauh:

1. Buka **[[Pengaturan]]**.
2. Di menu samping, pilih **Sync**.
3. Di samping **Remote vault**, pilih **Kelola**.
4. Di samping brankas jarak jauh yang ingin Anda bagikan, pilih **Kelola berbagi** ![[lucide-users.svg#icon]].
5. Di **Undang pengguna**, masukkan email pengguna yang ingin Anda undang.
6. Pilih **Tambah**.

### Hapus pengguna

1. Buka **[[Pengaturan]]**.
2. Di menu samping, pilih **Sync**.
3. Di samping **Remote vault**, pilih **Kelola**.
4. Di samping pengguna yang ingin Anda cabut aksesnya, pilih **Hapus pengguna** ![[lucide-x.svg#icon]].

## Berkolaborasi dengan tim Anda

### Izin

Izin terperinci belum didukung saat ini. Semua kolaborator menerima izin yang sama dengan pemilik brankas, dengan satu pengecualian: hanya pemilik brankas yang dapat mengundang kolaborator.

### Penyuntingan langsung

Brankas bersama memungkinkan tim bekerja bersama pada sekumpulan file, namun Obsidian belum mendukung penyuntingan langsung secara kolaboratif pada file yang sama. Anda tidak akan melihat kursor pengguna lain, dan suntingan mereka hanya akan muncul setelah perubahan disinkronkan.

Jika beberapa pengguna menyunting file yang sama pada saat bersamaan, [[Pemecahan masalah Obsidian Sync#Resolusi konflik|perubahan akan digabungkan]] selama proses sinkronisasi. Perubahan dapat dilihat dan dipulihkan menggunakan [[Riwayat versi]].

![[version-history-collaboration.png]]^version-history-image

## Batasan

Perlu diketahui bahwa Obsidian Sync memiliki [[Pertanyaan yang sering diajukan|Batasan]] yang mungkin memengaruhi tim Anda:

- Jumlah maksimum kolaborator pada brankas bersama adalah 20 pengguna.
- Ukuran file maksimum untuk lampiran bergantung pada [[Paket dan batas penyimpanan|paket]] pemilik brankas jarak jauh Anda, dengan 5 MB untuk Paket Standard dan 200 MB untuk Paket Plus.

Pelajari lebih lanjut tentang [[Sync untuk tim]].

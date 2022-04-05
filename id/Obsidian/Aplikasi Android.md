Bantuan ini merupakan artikel lawas dan hanya berfungsi sebagai jembatan utuk menghindari kerusakan tautan. Untuk informasi mengenai aplikasi seluler, harap lihat [[Menyinkronkan catatan Anda antar perangkat]].

## Sinkronisasi

Untuk informasi mengenai penyinkronan pada aplikasi Android, harap lihat [[Menyinkronkan catatan Anda antar perangkat#Menyinkronkan catatan pada Android|Menyinkronkan catatan pada Android]].

## Perizinan Penyimpanan

Ketika memulai Obsidian, Anda mungkin menyadari bahwa terdapat permintaan untuk mengakses media dan dokumen dari perangkat Anda.

Idealnya, kami menyarankan untuk memberikan hak akses ke folder vault yang Anda pilih saja. Namun, API perizinan berkas ramah privasi dari Android (dikenal dengan sebutan "scoped storage") memiiki beberapa batasan yang membuat Obsidian sulit berfungsi dengan benar.

Dua halangan besarnya adalah:
- Scoped storage melakukan banyah pemeriksaan perizinan tambahan untuk setiap akses berkas, menghasilkan pengurangan kinerja yang signifikan ketika membuka dan menggunakan Obsidian.
- Scoped storage tidak memberikan jalan untuk memantau perubahan eksternal, yang mana sangat penting ketika menggunakan Obsidian dengan alat sinkronisasi pihak ketiga.

Google secara khusus memberikan instruksi perizinan khusus kepada pengembang aplikasi semacam ini. Obsidian termasuk ke dalam dua kategori dalam daftar pengecualian: "document management apps", serta "on-device file search". [Pelajari lebih lanjut di sini.](https://developer.android.com/training/data-storage/manage-all-files)
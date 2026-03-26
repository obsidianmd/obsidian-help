---
permalink: import/zettelkasten
---
Jika Anda telah menggunakan metode Zettelkasten untuk memberi nama dan menautkan catatan Anda, Anda mungkin perlu mengonversi tautan dari `[[UID]]` menjadi `[[UID Judul catatan saya]]`.

Sebagai contoh, jika Anda memiliki catatan dengan nama `202301011230 Judul catatan saya` dan menautkannya dari catatan lain hanya menggunakan UID, `[[202301011230]]`. Karena Obsidian menggunakan nama lengkap catatan untuk menyelesaikan tautan internal, tautan seperti ini akan rusak.

Untuk memperbarui semua tautan `[[UID]]` di brankas Anda agar menggunakan nama lengkap catatan, gunakan [[Importir format Markdown]].

1. Buka **[[Pengaturan]]**.
2. Di bawah **Plugin inti**, aktifkan **Importir format Markdown** lalu tutup jendela Pengaturan.
3. Di bilah alat, di sisi kiri jendela aplikasi, pilih **Buka konversi format** ![[lucide-binary.svg#icon]].
4. Aktifkan **Perbaikan tautan Zettelkasten**.
5. Pilih **Mulai konversi**. Ini akan mengonversi semua catatan di seluruh brankas Anda.

> [!tip] Perindah tautan Zettelkasten
> [[Importir format Markdown]] juga dapat memperindah tautan Anda dengan menghapus UID dari nama tampilan. Sebagai contoh, `[[UID]]` dikonversi menjadi `[[UID Judul catatan saya|Judul catatan saya]]`.
>
> Untuk memperindah tautan Zettelkasten Anda, aktifkan **Perindah tautan Zettelkasten** di jendela importir format Markdown.

Anda juga dapat menggunakan [[Pembuat catatan unik]] untuk membuat catatan Zettelkasten di Obsidian.

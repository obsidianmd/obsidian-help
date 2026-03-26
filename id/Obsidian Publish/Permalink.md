---
permalink: publish/permalinks
---
Anda dapat mengganti nama URL ke catatan Anda, menggunakan _permalink_.

Sebagai contoh, Anda dapat mengubah ini:

```
https://publish.obsidian.md/username/Company/About+us
```

Menjadi ini:

```
https://publish.obsidian.md/username/about
```

Untuk membuat permalink untuk sebuah catatan, tambahkan properti `permalink` ke [[Properti]] Anda.

```yaml
---
permalink: about
---
```

Jika seseorang mengunjungi catatan menggunakan URL asli, mereka akan secara otomatis diarahkan ke permalink.

## Mengalihkan catatan lama

Mengganti nama dan menghapus catatan adalah bagian alami dari memelihara brankas yang terus berkembang. Meskipun Obsidian secara otomatis memperbarui tautan saat Anda memindahkan catatan di dalam brankas lokal, situs web lain mungkin masih menautkan ke catatan lama Anda di situs [[Pengantar Obsidian Publish|Obsidian Publish]] yang telah dipublikasikan. Anda dapat mengalihkan pembaca dari satu catatan ke catatan lainnya.

Bayangkan Anda ingin memindahkan catatan dari satu folder ke folder lain:

- **Guides**
  - ~~Making friends.md~~ (dihapus)
- **Tutorials**
  - *How to make friends.md* (ditambahkan)

Setelah Anda memindahkan catatan, Obsidian secara otomatis memperbarui semua tautan di dalam brankas. Namun, jika Anda mempublikasikan perubahan ke situs Publish Anda, semua tautan ke `/Guides/Making+friends` akan menghasilkan halaman 404.

Untuk mengalihkan pembaca dari `/Guides/Making+friends` ke `/Tutorials/How+to+make+friends`, Anda perlu menambahkan [[Alias|alias]] di `How to make friends.md`, catatan yang ingin Anda alihkan tujuannya.

```md
---
alias: Guides/Making friends
---

# How to make friends
```

> [!important] Penting
> Pastikan Anda menyertakan alur lengkap ke catatan lama di dalam alias. Meskipun menggunakan hanya nama catatan sebagai alias berfungsi di brankas lokal Anda, Publish memerlukan alur lengkap ke catatan tersebut agar dapat mengalihkan ke sana.

Anda dapat mengalihkan beberapa catatan dengan menambahkan alias untuk masing-masing.

```md
---
aliases: 
  - Guides/Making friends
  - Developing friendships
---

# How to make friends
```

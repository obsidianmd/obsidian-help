---
permalink: import/evernote
---
Obsidian memudahkan Anda untuk memigrasikan catatan dari Evernote menggunakan [[Importer|plugin Importer]]. Ini akan mengonversi data Evernote Anda ke file Markdown yang tahan lama, yang dapat Anda gunakan dengan Obsidian dan banyak aplikasi lainnya.

## Ekspor data Anda dari Evernote

Obsidian menggunakan format ekspor Evernote yaitu file `.enex`.

Anda dapat menemukan instruksi Evernote untuk mengekspor data Anda [di situs web Evernote](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML). Metode ini memungkinkan Anda mengekspor seluruh buku catatan di klien desktop.

1. Buka layar Buku Catatan (Notebooks).
2. Klik **Opsi lain** ( `•••` ) dan pilih **Export Notebook...**
3. Pilih **ENEX** sebagai format file.
3. Pilih lokasi untuk file `.enex` yang diekspor.

## Impor data Evernote Anda ke Obsidian

Anda memerlukan plugin resmi Obsidian [[Importer]], yang dapat Anda [pasang di sini](obsidian://show-plugin?id=obsidian-importer).

1. Buka **[[Pengaturan]]**.
2. Buka **Plugin komunitas** dan [pasang Importer](obsidian://show-plugin?id=obsidian-importer).
3. Aktifkan plugin Importer.
4. Buka plugin **Importer** menggunakan palet perintah atau ikon bilah alat.
5. Di bagian **Format file** pilih **Evernote (.enex)**.
6. Pilih lokasi file cadangan Evernote Anda.
7. Klik **Impor** dan tunggu hingga impor selesai.
8. Selesai!

## Opsi impor lanjutan

### Mempertahankan hierarki tag

Ekspor Evernote tidak menyimpan hierarki tag. Untuk mempertahankan hierarki tag, Anda dapat "meratakan" tag yang dipisahkan dengan "/". Misalnya, dengan asumsi Anda memiliki struktur tag berikut:

```
ParentTag
    ChildTag
```

Yang perlu Anda lakukan untuk menjaga hubungan tag di Obsidian adalah:

1. Klik kanan pada ChildTag.
2. Pilih "Ganti nama."
3. Ganti namanya menjadi `ParentTag/ChildTag`.

### Menangani tumpukan buku catatan

Karena proses ekspor terbatas pada buku catatan tunggal, file ekspor bawaan tidak memiliki informasi tentang tumpukan buku catatan (notebook stacks). Namun, importer dapat mengenali pola dalam nama file enex untuk membuat ulang tumpukan buku catatan sebagai folder.

Dengan asumsi Anda memiliki buku catatan bernama ```NotebookA``` dalam tumpukan bernama ```Stack1```, Anda dapat membuat ulang tumpukan buku catatan dengan mengganti nama file enex menjadi ```Stack1@@@NotebookA```.

Hasilnya, catatan yang dikonversi akan dibuat di dalam folder Stack1/NotebookA.

### Opsi lainnya

Untuk opsi impor lanjutan lainnya dari Evernote, Anda juga dapat mencoba [mengimpor melalui Yarle](https://github.com/akosbalasko/yarle).

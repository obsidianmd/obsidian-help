---
aliases: front matter
---

YAML, dikenal pula sebagai front matter, yang didesain sebagai metadata setingkat berkas yang dapat dibaca oleh manusia *dan* Obsidian.

Bagian front matter merupakan atribut teks polos yang dimulai pada baris pertama dari berkas. Ini merupakan cara yang paling populer untuk menambahkan metadata pada berkas Markdown, dan telah dipopulerkan oleh pembuat stasi seperti Jekyll, Hugo, dan Gatsby.

Bloh YAML memerlukan **tiga garis datar** pada bagian awal dan akhir untuk terbaca oleh Obsidian (dan aplikasi lain). ==Ini juga diperlukan untuk ditempatkan di bagian paling atas dari berkas.==

Contoh:

```
---
kunci: nilai
kunci2: nilai2
kunci3: [satu, dua, tiga]
kunci4:
- empat
- lima
- enam
---
```

Sejal 0.12.12, terdapat empat kunci yang didukung decara bawaan:
- `tags` ([[Bekerja dengan tag|informasi lebih lanjut]])
- `aliases` ([[Menambah alias ke catatan|informasi lebih lanjut]])
- `cssclass`
- `publish` ([[Mempublikasi dan membatalkan publikasi catatan#Memilih catatan untuk dipublikasikan secara otomatis]] dan [[Mempublikasi dan membatalkan publikasi catatan#Mengecualikan catatan]])

Seiring Obsidian yangterus berkembang, kami secara bertahap akan membuatnya lebih mudah diakses oleh pengembang plugin, dan membuatnya lebih ramah pengguna.

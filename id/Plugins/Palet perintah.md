---
permalink: plugins/command-palette
aliases:
  - Plugin/Palet perintah
---
[[Plugin inti|Plugin]] Palet perintah memungkinkan Anda menjalankan perintah apa pun langsung dari keyboard. Plugin ini juga memungkinkan Anda menjelajahi semua perintah yang tersedia dan [[Pintasan|pintasan keyboard]] mereka.

Untuk menjalankan perintah dari Palet perintah:

1. Tekan `Ctrl+P` (atau `Cmd+P` di macOS) untuk membuka Palet perintah. Anda juga bisa membukanya dari [[Bilah alat]] dengan ikon Palet perintah ![[lucide-terminal.svg#icon]].
2. Ketik nama perintah yang ingin Anda jalankan.
3. Navigasikan ke perintah menggunakan tombol panah.
4. Tekan `Enter`.

> [!tip] Tip
> Palet perintah mendukung _pencocokan fuzzy_, memungkinkan Anda mencari perintah meskipun Anda tidak mengetahui nama persisnya. Misalnya, mengetik "scf" akan menemukan perintah **S**ave **c**urrent **f**ile.

Sejak **versi 1.8.3**, perintah yang baru digunakan muncul di bagian atas Palet perintah. Namun, perintah yang baru digunakan ini tetap tunduk pada algoritma _pencocokan fuzzy_. Ketika Anda mulai memfilter, perintah yang lebih pendek akan diprioritaskan di atas perintah yang baru digunakan.

## Perintah tersemat

Anda dapat menyematkan perintah yang sering digunakan di bagian atas Palet perintah agar dapat mengaksesnya dengan cepat tanpa harus mengetik namanya.

> [!tip] Tip
> Jika Anda ingin menjalankan perintah yang sering digunakan dengan cepat, Anda juga bisa [[Pintasan#Mengatur pintasan keyboard|mengatur pintasan keyboard]] untuk perintah tersebut.

### Menyematkan perintah

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, klik **Command palette** di bawah **Pengaturan plugin**.
3. Di samping **Perintah tersemat baru**, klik **Pilih perintah**.
4. Pilih perintah yang ingin Anda sematkan dari daftar.
5. Tekan `Enter`.

### Melepas sematan perintah

1. Buka **[[Pengaturan]]**.
2. Di bilah samping, klik **Command palette** di bawah **Pengaturan plugin**.
3. Di bawah **Perintah tersemat**, klik ikon silang di samping perintah yang ingin Anda lepas sematannya.

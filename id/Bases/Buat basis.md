---
permalink: bases/create-base
---
[[Pengenalan Basis|Basis]] memungkinkan Anda membuat tampilan mirip basis data dari catatan Anda. Berikut cara membuat basis dan menyematkannya dalam catatan. Setiap basis dapat memiliki satu atau lebih [[Tampilan|tampilan]] untuk menampilkan informasi dengan cara yang berbeda.

## Buat basis baru

**Palet perintah:**

1. Buka **Palet perintah**.
2. Pilih
	- **Basis: Buat basis baru** untuk membuat basis di folder yang sama dengan file aktif.
	- **Basis: Sisipkan basis baru** untuk membuat basis dan menyematkannya di file saat ini.

**Penjelajah berkas:**

1. Di Penjelajah berkas, klik kanan folder tempat Anda ingin membuat basis.
2. Pilih **Basis baru**.

**Bilah alat:**

- Di menu bilah alat vertikal, pilih **Buat basis baru** untuk membuat basis di folder yang sama dengan file aktif.

## Sematkan basis

### Sematkan file basis

Anda dapat menyematkan file basis di [[Sematkan file|file lainnya]] menggunakan sintaksis `![[File.base]]`. Untuk menentukan tampilan bawaan gunakan `![[File.base#Tampilan]]`.

### Sematkan basis sebagai blok kode

Basis juga dapat disematkan langsung ke dalam catatan menggunakan blok kode `base` dan [[Sintaksis Basis|sintaksis basis]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~

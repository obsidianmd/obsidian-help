---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Halaman ini merinci beberapa masalah umum yang mungkin Anda temui saat menggunakan Obsidian Publish.
---
Halaman ini mencantumkan masalah umum yang mungkin Anda temui dengan [[Pengantar Obsidian Publish|Obsidian Publish]] dan cara mengatasinya.

Pastikan untuk meninjau [[File media]] dan [[Batasan Publish|Batasan Publish]] terlebih dahulu.

## Umum

### Mempublikasikan catatan

**Saya menerima kesalahan hash saat mencoba mempublikasikan catatan.**

Apakah Anda menggunakan [[Plugin komunitas|plugin komunitas]] yang mengubah waktu modifikasi file saat pembaruan? Jika ya, plugin ini mungkin bertentangan dengan Publish. Silakan ajukan laporan bug kepada pengembang plugin untuk menyelesaikan masalah tersebut.

**Saya menerima kesalahan jaringan yang aneh, dan situs Publish saya sangat besar.**

Kemungkinan kami perlu memeriksa basis data Anda. Silakan [[Bantuan dan dukungan#Menghubungi dukungan Obsidian|hubungi dukungan Obsidian]] untuk bantuan.

## CSS dan tema

**CSS saya di [[Folder konfigurasi]] tidak berfungsi di Publish. Mengapa?**

Publish tidak membaca dari folder konfigurasi. Sebagai gantinya, Anda perlu membuat file `publish.css` di direktori tingkat atas brankas penerbitan Anda. Anda dapat mempelajari lebih lanjut tentang ini di [[Kustomisasi situs Anda]].

**CSS saya tidak terlihat sama di Publish seperti di aplikasi. Mengapa?**

CSS Obsidian Publish tidak persis sama dengan di aplikasi. Kami merekomendasikan untuk [mengembangkan CSS dan tema apa pun](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) khusus untuk Publish dari awal.

Secara _umum_, apa yang berfungsi untuk [[Tampilan dan mode penyuntingan#Tampilan baca|tampilan baca]] memiliki kemungkinan besar untuk berfungsi di Publish.

---
permalink: publish/analytics
---
## Prasyarat

Untuk menggunakan analitik di situs [[Pengantar Obsidian Publish|Obsidian Publish]] Anda, Anda memerlukan [[Domain kustom|domain kustom]].

> [!important] Penting
> Sebelum Anda mengaktifkan analitik, pastikan bahwa hukum dan regulasi setempat mengizinkan Anda untuk melacak pengunjung. Tergantung alat yang Anda gunakan, Anda mungkin perlu menambahkan banner persetujuan ke situs Anda.

## Google Analytics

Untuk mengaktifkan Google Analytics untuk situs Obsidian Publish Anda:

1. Di bilah alat, di sebelah kiri jendela aplikasi, klik **Publikasikan perubahan** ![[lucide-send.svg#icon]].
2. Di dialog **Publikasikan perubahan**, klik **Ubah pengaturan situs** ![[lucide-cog.svg#icon]].
3. Di **Kode pelacakan Google Analytics**, masukkan kode pelacakan Anda.

Untuk menggunakan Google Tag Manager alih-alih Google Analytics, gunakan JavaScript kustom untuk menambahkan skrip Anda sendiri.

## Plausible, Fathom, dan layanan analitik lainnya

Anda dapat menambahkan sebagian besar layanan analitik ke situs Anda melalui file [[Kustomisasi situs Anda|publish.js]]. Pastikan untuk mengganti `yourdomain.com` dengan domain Anda, dan `src` skrip dengan skrip dari penyedia analitik Anda.

Berikut adalah contoh menggunakan [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

Pendekatan yang sama dapat digunakan untuk [Fathom Analytics](https://usefathom.com/). Perhatikan perubahan dari `data-domain` ke `data-site` — penyedia analitik yang berbeda mungkin memiliki format yang berbeda untuk cara skrip harus disisipkan.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Pemecahan masalah

Untuk memverifikasi bahwa situs Anda menggunakan layanan analitik, nonaktifkan ekstensi browser pemblokir iklan, seperti uBlock Origin, yang mungkin memblokir skrip pelacakan agar tidak berjalan.

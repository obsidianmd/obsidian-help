Anda dapat mengatur domain kustom ataupun subdomain untuk situs [[Berkenalan dengan Obsidian Publish|Obsidian Publish]] Anda.

Kami belum memiliki cara untuk menyediakan sertifikat SSL atas nama Anda. Jika Anda ingin mengaktifkan HTTPS untuk domain kustom, Anda pelu menggunakan proksi Anda sendiri atau membuat situs pada CloudFlare.

## Mengatur menggunakan CloudFlare

Cara termudah untuk mengatur domain kustom ataupun subdomain ialah dengan membuat akun [CloudFlare](https://cloudflare.com) dan membuarkan CloudFlare mengelola DNS domain Anda.

Saat Anda bermigrasi ke CloudFlare, Anda secara otomatis menyimpan semua pengaturan DNS Anda yang tersedia, termasuk subdomain, layanan surel, serta layanan hosting. Menggunakan CloudFlare dapat mempercepat situs web dan menambahkan SSL ke situs Anda secara gratis.

Khususnya, pengguna menghosting konten Obsidian Publish mereka pada domain akar (mis. `situs-saya.com`) atau pada subdomain terdekat (mis. `catatan.situs-saya.com`).

**CloudFlare:**

1. Buka Cloudflare ke domain yang Anda ingin tambahkan Publish juga, seperti `situs-saya.com`, bahkan jika Anda menginginkan subdomain seperti `catatan.situs-saya.com`.
2. Pergi ke **DNS** dan klik **Add Record**.
3. Pilih **CNAME**
4. Pada **name**, masukkan nama domain atau subdomain Anda, misalnya `catatan.situs-saya.com`.
5. Pada **target**, masukkan `publish-main.obsidian.md`. Jangan masukkan sub Tautan pribadi Anda pada masukan ini. Obsidian Publish akan menanganinya melalui konfigurasi Anda.
6. Pergi ke **SSL/TLS** dan atur mode enkripsi SSL/TLS ke "Full" untuk mengatur sertifikat SSL/TLS secara otomatis.

**Catatan:** Untuk mengalihkan baik `situs-saya.com` dan `www.situs-saya.com` menuju Obsidian Publish, Anda perlu membuat [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) dengan pengaturan berikut:

- URL match: `www.situs-saya.com/*`
- Foward URL - 301 Permanent Redirect
- Redirect URL: `https://situs-saya.com/$1`

Setelah Anda membuat page rule, Anda harus pula membuat CNAME record untuk `www.situs-saya.com` seperti halnya Anda membuat untuk `situs-saya.com`

**Obsidian:**

1. Pada ribbon, di bagian kiri dari jendela aplikasi, klik **Publikasikan perubahan** (ikon pesawat kertas).
2. Pada dialog **Publikasikan perubahan**, klik **Ubah pengaturan situs** (ikon gerigi).
3. Di sebelah **Domain kustom**, klik **Konfigurasi**.
4. Pada **Tautan kustom**, masukkan Tautan dari domain atau subdomain Anda.

**Catatan:**: Jika pengaturan domain kustom Anda berakhir pada pengalihan tak terhingga, tampaknya mode enkripsi pada CloudFlare telah diatur ke "Flexible" bukannya "Full".

## Mengatur menggunakan proksi

Jika Anda ingin menghosting server web Anda sendiri dan mengatur enkripsi SSL Anda sendiri, Anda dapat memilih opsi ini

Jika Anda telah menghosting situs web pada domain ataupun subdomain Anda, Anda dapat pula menggunakan opsi ini dan atur situs web Anda untuk memuat situs Obsidian Publish dengan alur Tautan spesifik, bukannya menghosting situs secara penuh.

Proksikan semua permintaan pada alur tersebut ke `https://publish.obsidian.md/serve?url=situs-saya.com/catatan-saya/...` dan **konfigurasikan opsi situs pada Obsidian menuju alur Tautan yang sama** dengan mengatur **Tautan kustom** ke `situs-saya.com/catatan-saya`.

Anda dapat pula mengatur Obsidian Publish sebagai sub Tautan dari situs yang Anda miliki. Misalnya, `https://situs-saya.com/catatan-saya/`. Untuk mendapatkan ini, Anda haruslah menghosting server Anda sendiri dan proksikan semua permintaan menuju server kami di `https://publish.obsidian.md/`.

### NGINX

Pada konfigurasi NGINX, tambahkan:

```nginx
location /catatan-saya {
  proxy_pass https://publish.obsidian.md/serve?url=situs-saya.com/catatan-saya/;
  proxy_ssl_server_name on;
}
```

### Apache

Pada `.htaccess`, tambahkan:

```htaccess
RewriteEngine  on
RewriteRule    "^catatan-saya/(.*)$"  "https://publish.obsidian.md/serve?url=situs-saya.com/catatan-saya/$1"  [L,P]
```

**Catatan:** `mod_rewrite` haruslah aktif, dan Anda mungkin juga memerlukan untuk mengatur [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

```
[[redirects]]
  from = "https://situs-saya.com/catatan-saya/*"
  to = "https://publish.obsidian.md/serve?url=situs-saya.com/catatan-saya/:splat"
  status = 200
  force = true
```

### Vercel

Pada `vercel.json`, [konfigurasikan rewrites](https://vercel.com/docs/configuration#project/rewrites):

```json
{
  ...

  "rewrites": [
    {
      "source": "/catatan-saya/",
      "destination": "https://publish.obsidian.md/serve?url=situs-saya.com/catatan-saya"
    },
    {
      "source": "/catatan-saya/:path*",
      "destination": "https://publish.obsidian.md/serve?url=situs-saya.com/catatan-saya/:path*"
    }
  ]
}
```

### HTTP X-Headers yang didukung

Jika layanan proksi Anda tidak memperbolehkan query paths, Anda dapat menggunakan `https://publish.obsidian.md/` dengan custom header `x-obsidian-custom-domain` diatur ke Tautan situs Anda `situs-saya.com/sub-alur-saya`.

## Mengalihkan situs lama ke domain kustom

Jika Anda ingin mengalihkan pengunjung dari situs `publish.obsidian.md` lama menuju ke domain kustom Anda, aktifkan opsi**Alihkan ke kustom domain Anda** saat mengatur domain kustom Anda.

## Pemecahan masalah

Ketika Anda mengatur domain kustom Anda, jika Anda mengunjungi situs Anda melalui Tautan `https://publish.obsidian.md/slug` Anda sebelumnya, Anda mungkin perlu membersikan cachae peramban Anda untuk beberapa hal (seperti fonta, grafik, ataupun kata sandi akses) untuk bekerja dengan baik. Ini dikarenakan pembatasan keamanan antar-domain yang dikenakan oleh peramban terkini. Kabar baiknya ialah pembaca situs Anda tidak akan perna mendapatkan masalah ini jika Anda hanya mempersilakan pengunjung menggunakan domain kustom Anda.

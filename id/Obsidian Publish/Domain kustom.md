---
permalink: publish/domains
mobile: true
description: Anda dapat menyiapkan domain atau subdomain kustom untuk situs Obsidian Publish Anda.
aliases:
  - Obsidian Publish/Mengatur domain kustom
---
Anda dapat menyiapkan domain kustom atau subdomain untuk situs [[Pengantar Obsidian Publish|Obsidian Publish]] Anda.

> [!warning] Peringatan
> Saat ini, kami hanya mendukung konfigurasi domain kustom menggunakan metode berikut:
>
> - [[#Menyiapkan menggunakan CloudFlare]] menggunakan [mode Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Menyiapkan menggunakan proxy]]
> 
> Kami belum memiliki cara untuk menyediakan sertifikat SSL atas nama Anda.

## Menyiapkan menggunakan CloudFlare

Cara termudah untuk menyiapkan domain kustom atau subdomain adalah membuat akun [CloudFlare](https://cloudflare.com) dan membiarkan CloudFlare mengelola DNS domain Anda.

Langkah-langkah berikut menggunakan CloudFlare untuk mengonfigurasi domain kustom untuk situs Obsidian Publish Anda, baik menggunakan domain root (`situssaya.com`) maupun subdomain (`catatan.situssaya.com`).

> [!important] Penting
> CloudFlare adalah **satu-satunya penyedia yang didukung secara resmi** untuk menyiapkan domain kustom. Menggunakan instruksi berikut dengan penyedia lain kemungkinan besar tidak akan berhasil.

**CloudFlare:**

1. Buka Cloudflare ke domain tempat Anda ingin meng-hosting situs Publish Anda, seperti `situssaya.com`, meskipun Anda menginginkan subdomain seperti `catatan.situssaya.com`.
2. Buka **DNS** dan klik **Add Record**.
3. Pilih **CNAME**.
4. Di **name**, masukkan domain atau subdomain Anda, misalnya `catatan.situssaya.com`.
5. Di **target**, masukkan `publish-main.obsidian.md`. Jangan sertakan sub-URL pribadi Anda dalam nilai ini. Obsidian Publish menangani ini dari konfigurasi Anda.
6. Pastikan **proxy status** diaktifkan. Seharusnya sudah diaktifkan secara bawaan.
7. Buka **SSL/TLS** dan atur mode enkripsi SSL/TLS ke "Full" untuk mengonfigurasi sertifikat SSL/TLS secara otomatis.

> [!note] Catatan
> Untuk mengalihkan `situssaya.com` dan `www.situssaya.com` ke Obsidian Publish, Anda perlu membuat [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) dengan pengaturan berikut:
>
> - URL match: `www.situssaya.com/*`
> - Forward URL - 301 Permanent Redirect
> - Redirect URL: `https://situssaya.com/$1`
>
> Setelah Anda membuat page rule, buat catatan CNAME untuk `www.situssaya.com` sama seperti yang Anda lakukan untuk `situssaya.com`.

**Obsidian:**

1. Buka Obsidian di komputer Anda.
2. Di [[Bilah alat]] di sebelah kiri, klik **Publish changes** ![[lucide-send.svg#icon]].
3. Di bawah **Publish changes**, pilih **Ubah pengaturan situs** ![[lucide-cog.svg#icon]].
4. Di samping **Custom domain**, pilih **Konfigurasi**.
5. Di **Custom URL**, masukkan URL ke domain atau subdomain Anda. Pastikan untuk tidak memasukkan `www.` di kotak custom URL.

> [!note] Catatan
> Jika pengaturan domain kustom Anda berakhir dalam pengulangan pengalihan (redirect loop), kemungkinan mode enkripsi di CloudFlare telah diatur ke "Flexible" alih-alih "Full".

## Menyiapkan menggunakan proxy

Anda juga dapat menyiapkan SSL/TLS untuk domain kustom Anda dengan menggunakan server web Anda sendiri.

Jika Anda sudah meng-hosting situs web di bawah domain atau subdomain Anda, Anda juga dapat menggunakan opsi ini dan menyiapkan situs web Anda untuk memuat situs Obsidian Publish Anda di bawah jalur URL tertentu, alih-alih meng-hosting seluruh situs.

Proksi semua permintaan di bawah jalur URL tersebut ke `https://publish.obsidian.md/serve?url=situssaya.com/catatan-saya/...` dan konfigurasikan opsi situs di Obsidian ke jalur URL yang sama, dengan mengatur **Custom URL** ke `situssaya.com/catatan-saya`.

Anda juga dapat menyiapkan Obsidian Publish sebagai sub-URL dari situs yang Anda miliki. Misalnya, `https://situssaya.com/catatan-saya/`. Untuk mencapai ini, Anda harus meng-hosting server Anda sendiri dan mem-proksi semua permintaan ke server kami di `https://publish.obsidian.md/`.

Contoh pengaturan proxy berikut tidak lengkap, tetapi menyediakan metode umum untuk implementasi ini.

### NGINX

Dalam konfigurasi NGINX Anda, tambahkan yang berikut:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Beberapa pengguna melaporkan bahwa menambahkan `$request_uri` ke proxy pass mungkin diperlukan:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

Di `.htaccess`, tambahkan yang berikut:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Catatan
> `mod_rewrite` harus diaktifkan, dan Anda mungkin juga perlu mengonfigurasi [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

Di `netlify.toml`, [konfigurasikan pengalihan](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

Di `vercel.json`, [konfigurasikan rewrites](https://vercel.com/docs/configuration#project/rewrites):

```json
{
  ...

  "rewrites": [
    {
      "source": "/my-notes/",
      "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes"
    },
    {
      "source": "/my-notes/:path*",
      "destination": "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:path*"
    }
  ]
}
```

### Caddy

```plain
mysite.com {
  encode zstd gzip
  handle /my-notes* {
    reverse_proxy https://publish.obsidian.md {
      header_up Host {upstream_hostport}
    }
    rewrite * /serve?url=mysite.com{path}
  }
}
```

### Traefik

Kutipan konfigurasi minimal ini mengalihkan `mysite.com` ke Obsidian Publish.
Lihat [dokumentasi Traefik](https://doc.traefik.io/traefik/routing/overview/)
untuk contoh lengkap.

```yaml
http:
  routers:
    mysite:
      rule: Host(`mysite.com`)
      service: obsidian-publish
      middlewares:
        - "publish-headers"
  services:
    obsidian-publish:
      loadBalancer:
        servers:
          - url: https://publish.obsidian.md
  middlewares:
    publish-headers:
      headers:
        customRequestHeaders:
          Host: "publish.obsidian.md"
          x-obsidian-custom-domain: "mysite.com"
```

### Header HTTP X yang Didukung

Jika layanan proxy Anda tidak mengizinkan jalur kueri, Anda dapat menggunakan `https://publish.obsidian.md/` dengan header kustom `x-obsidian-custom-domain` yang diatur ke URL situs Anda `mysite.com/my-subpath`.

## Mengalihkan situs lama ke domain kustom

Jika Anda ingin mengalihkan pengunjung dari situs `publish.obsidian.md` lama Anda ke domain kustom baru Anda, aktifkan opsi **Alihkan ke domain kustom Anda** saat mengonfigurasi domain kustom Anda.

## Pemecahan masalah

Setelah Anda menyiapkan domain kustom, jika Anda pernah mengunjungi situs dari tautan `https://publish.obsidian.md/slug` sebelumnya, Anda mungkin harus menghapus cache browser agar hal-hal tertentu (seperti font, grafik, atau akses kata sandi) dapat berfungsi dengan benar. Ini disebabkan oleh pembatasan keamanan lintas domain yang diberlakukan oleh browser modern. Kabar baiknya adalah pembaca situs Anda tidak akan pernah mengalami masalah ini jika Anda hanya mengizinkan pengunjung menggunakan domain kustom Anda.

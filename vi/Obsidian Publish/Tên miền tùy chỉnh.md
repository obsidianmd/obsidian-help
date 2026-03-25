---
permalink: publish/domains
mobile: true
description: "You can set up a custom domain or subdomain for your\_Obsidian Publish\_site."
---
Bạn có thể thiết lập tên miền tùy chỉnh hoặc tên miền phụ cho trang [[Giới thiệu về Obsidian Publish|Obsidian Publish]] của bạn.

> [!warning] Cảnh báo
> Hiện tại, chúng tôi chỉ hỗ trợ cấu hình tên miền tùy chỉnh bằng các phương pháp sau:
>
> - [[#Thiết lập bằng CloudFlare]] sử dụng [chế độ Full](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/).
> - [[#Thiết lập bằng proxy]]
> 
> Chúng tôi chưa có cách để cung cấp chứng chỉ SSL thay mặt bạn.

## Thiết lập bằng CloudFlare

Cách dễ nhất để thiết lập tên miền tùy chỉnh hoặc tên miền phụ là tạo tài khoản [CloudFlare](https://cloudflare.com) và để CloudFlare quản lý DNS của tên miền bạn.

Các bước sau đây sử dụng CloudFlare để cấu hình tên miền tùy chỉnh cho trang Obsidian Publish của bạn, bằng tên miền gốc (`mysite.com`) hoặc tên miền phụ (`notes.mysite.com`).

> [!important] Quan trọng
> CloudFlare là **nhà cung cấp duy nhất được hỗ trợ chính thức** để thiết lập tên miền tùy chỉnh. Sử dụng các hướng dẫn sau với bất kỳ nhà cung cấp nào khác có thể sẽ không hoạt động.

**CloudFlare:**

1. Mở Cloudflare tại tên miền bạn muốn lưu trữ trang Publish, ví dụ `mysite.com`, ngay cả khi bạn muốn dùng tên miền phụ như `notes.mysite.com`.
2. Đi đến **DNS** và nhấp **Add Record**.
3. Chọn **CNAME**.
4. Trong **name**, nhập tên miền hoặc tên miền phụ của bạn, ví dụ `notes.mysite.com`.
5. Trong **target**, nhập `publish-main.obsidian.md`. Không bao gồm sub-URL cá nhân của bạn trong giá trị này. Obsidian Publish xử lý điều này từ cấu hình của bạn.
6. Đảm bảo rằng **proxy status** đã được bật. Nó sẽ được bật theo mặc định.
7. Đi đến **SSL/TLS** và đặt chế độ mã hóa SSL/TLS thành "Full" để cấu hình chứng chỉ SSL/TLS tự động.

> [!note] Ghi chú
> Để chuyển hướng cả `mysite.com` và `www.mysite.com` đến Obsidian Publish, bạn cần tạo [Page Rule](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) với các cài đặt sau:
>
> - Khớp URL: `www.mysite.com/*`
> - Forward URL - 301 Permanent Redirect
> - URL chuyển hướng: `https://mysite.com/$1`
>
> Sau khi bạn đã tạo page rule, hãy tạo bản ghi CNAME cho `www.mysite.com` giống như bạn đã làm cho `mysite.com`.

**Obsidian:**

1. Mở Obsidian trên máy tính của bạn.
2. Trong [[Thanh công cụ]] ở bên trái, nhấp **Xuất bản thay đổi** ![[lucide-send.svg#icon]].
3. Dưới **Xuất bản thay đổi**, chọn **Thay đổi cài đặt trang web** ![[lucide-cog.svg#icon]].
4. Bên cạnh **Tên miền tùy chỉnh**, chọn **Cấu hình**.
5. Trong **URL tùy chỉnh**, nhập URL đến tên miền hoặc tên miền phụ của bạn. Đảm bảo không đặt `www.` trong ô URL tùy chỉnh.

> [!note] Ghi chú
> Nếu thiết lập tên miền tùy chỉnh của bạn bị vòng lặp chuyển hướng, có thể chế độ mã hóa trong CloudFlare đã được đặt thành "Flexible" thay vì "Full".

## Thiết lập bằng proxy

Bạn cũng có thể thiết lập SSL/TLS cho tên miền tùy chỉnh bằng cách sử dụng máy chủ web của riêng bạn.

Nếu bạn đã lưu trữ một trang web dưới tên miền hoặc tên miền phụ, bạn cũng có thể sử dụng tùy chọn này và thiết lập trang web của bạn để tải trang Obsidian Publish dưới một đường dẫn URL cụ thể, thay vì lưu trữ toàn bộ trang.

Proxy tất cả các yêu cầu dưới đường dẫn URL đó đến `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` và cấu hình cài đặt trang web trong Obsidian với cùng đường dẫn URL, bằng cách đặt **URL tùy chỉnh** thành `mysite.com/my-notes`.

Bạn cũng có thể thiết lập Obsidian Publish dưới dạng sub-URL của trang web bạn sở hữu. Ví dụ, `https://mysite.com/my-notes/`. Để đạt được điều này, bạn phải lưu trữ máy chủ riêng và proxy tất cả các yêu cầu đến máy chủ của chúng tôi tại `https://publish.obsidian.md/`.

Các ví dụ thiết lập proxy sau đây không đầy đủ, nhưng cung cấp các phương pháp phổ biến cho việc triển khai này.

### NGINX

Trong cấu hình NGINX của bạn, thêm phần sau:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Một số người dùng đã báo cáo rằng việc thêm `$request_uri` vào proxy pass có thể cần thiết:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

Trong `.htaccess`, thêm phần sau:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Ghi chú
> `mod_rewrite` phải được bật, và bạn cũng có thể cần cấu hình [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache)

### Netlify

Trong `netlify.toml`, [cấu hình chuyển hướng](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

Trong `vercel.json`, [cấu hình rewrites](https://vercel.com/docs/configuration#project/rewrites):

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

Đoạn cấu hình tối thiểu này chuyển hướng `mysite.com` đến Obsidian Publish.
Xem [tài liệu Traefik](https://doc.traefik.io/traefik/routing/overview/)
để có ví dụ đầy đủ.

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

### Các HTTP X-Header được hỗ trợ

Nếu dịch vụ proxy của bạn không cho phép đường dẫn truy vấn, bạn có thể sử dụng `https://publish.obsidian.md/` với header tùy chỉnh `x-obsidian-custom-domain` được đặt thành URL trang web của bạn `mysite.com/my-subpath`.

## Chuyển hướng trang cũ sang tên miền tùy chỉnh

Nếu bạn muốn chuyển hướng khách truy cập từ trang `publish.obsidian.md` cũ sang tên miền tùy chỉnh mới, hãy bật tùy chọn **Chuyển hướng đến tên miền tùy chỉnh của bạn** khi cấu hình tên miền tùy chỉnh.

## Khắc phục sự cố

Sau khi bạn thiết lập tên miền tùy chỉnh, nếu bạn đã truy cập trang web từ liên kết `https://publish.obsidian.md/slug` trước đó, bạn có thể cần xóa bộ nhớ đệm trình duyệt để một số thứ (như phông chữ, đồ thị, hoặc truy cập mật khẩu) hoạt động đúng. Điều này là do các hạn chế bảo mật xuyên miền được áp dụng bởi các trình duyệt hiện đại. Tin tốt là người đọc trang web của bạn sẽ không bao giờ gặp vấn đề này nếu bạn chỉ để khách truy cập sử dụng tên miền tùy chỉnh của bạn.

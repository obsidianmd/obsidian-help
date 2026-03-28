---
permalink: publish/domains
mobile: true
description: Obsidian Publish siteniz için özel bir alan adı veya alt alan adı ayarlayabilirsiniz.
---
[[Obsidian Publish'e giriş|Obsidian Publish]] siteniz için özel bir alan adı veya alt alan adı kurabilirsiniz.

> [!warning] Uyarı
> Şu anda yalnızca aşağıdaki yöntemlerle özel alan adı yapılandırmayı destekliyoruz:
>
> - [Tam mod](https://developers.cloudflare.com/ssl/origin-configuration/ssl-modes/full/) kullanarak [[#CloudFlare kullanarak kurulum]].
> - [[#Proxy kullanarak kurulum]]
> 
> Henüz sizin adınıza SSL sertifikası sağlama imkanımız bulunmamaktadır.

## CloudFlare kullanarak kurulum

Özel bir alan adı veya alt alan adı kurmanın en kolay yolu, bir [CloudFlare](https://cloudflare.com) hesabı oluşturmak ve CloudFlare'in alan adınızın DNS'ini yönetmesine izin vermektir.

Aşağıdaki adımlar, Obsidian Publish siteniz için bir kök alan adı (`mysite.com`) veya bir alt alan adı (`notes.mysite.com`) kullanarak özel alan adı yapılandırmak için CloudFlare'i kullanır.

> [!important] Önemli
> CloudFlare, özel alan adları kurmak için **resmi olarak desteklenen tek sağlayıcıdır**. Aşağıdaki talimatları başka sağlayıcılarla kullanmak büyük olasılıkla çalışmayacaktır.

**CloudFlare:**

1. Publish sitenizi barındırmak istediğiniz alan adı için Cloudflare'i açın, örneğin `mysite.com`, `notes.mysite.com` gibi bir alt alan adı istiyorsanız bile.
2. **DNS** bölümüne gidin ve **Add Record** (Kayıt Ekle) seçeneğine tıklayın.
3. **CNAME** seçin.
4. **name** (ad) alanına alan adınızı veya alt alan adınızı girin, örneğin `notes.mysite.com`.
5. **target** (hedef) alanına `publish-main.obsidian.md` girin. Bu değere kişisel alt URL'nizi eklemeyin. Obsidian Publish bunu yapılandırmanızdan yönetir.
6. **proxy status** (proxy durumu) seçeneğinin etkin olduğundan emin olun. Varsayılan olarak etkin olması gerekir.
7. **SSL/TLS** bölümüne gidin ve SSL/TLS sertifikasını otomatik olarak yapılandırmak için SSL/TLS şifreleme modunu "Full" olarak ayarlayın.

> [!note] Not
> Hem `mysite.com` hem de `www.mysite.com` adreslerini Obsidian Publish'e yönlendirmek için aşağıdaki ayarlarla bir [Sayfa Kuralı](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) oluşturmanız gerekir:
>
> - URL eşleşmesi: `www.mysite.com/*`
> - URL Yönlendirme - 301 Kalıcı Yönlendirme
> - Yönlendirme URL'si: `https://mysite.com/$1`
>
> Sayfa kuralını oluşturduktan sonra, `mysite.com` için yaptığınız gibi `www.mysite.com` için de bir CNAME kaydı oluşturun.

**Obsidian:**

1. Bilgisayarınızda Obsidian'ı açın.
2. Soldaki [[Araç çubuğu|Araç çubuğunda]] **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] seçeneğine tıklayın.
3. **Değişiklikleri yayınla** altında **Site seçeneklerini değiştir** ![[lucide-cog.svg#icon]] seçeneğini belirleyin.
4. **Özel alan adı** yanındaki **Yapılandırma** seçeneğini belirleyin.
5. **Özel URL** alanına alan adınızın veya alt alan adınızın URL'sini girin. Özel URL kutusuna `www.` yazmadığınızdan emin olun.

> [!note] Not
> Özel alan adı kurulumunuz bir yönlendirme döngüsüne neden oluyorsa, CloudFlare'deki şifreleme modunun "Full" yerine "Flexible" olarak ayarlanmış olması muhtemeldir.

## Proxy kullanarak kurulum

Kendi web sunucunuzu kullanarak özel alan adınız için SSL/TLS de kurabilirsiniz.

Alan adınız veya alt alan adınız altında zaten bir web sitesi barındırıyorsanız, bu seçeneği de kullanabilir ve sitenin tamamını barındırmak yerine web sitenizi belirli bir URL yolu altında Obsidian Publish sitenizi yükleyecek şekilde yapılandırabilirsiniz.

O URL yolu altındaki tüm istekleri `https://publish.obsidian.md/serve?url=mysite.com/my-notes/...` adresine proxy olarak yönlendirin ve Obsidian'daki site seçeneklerini aynı URL yoluna göre yapılandırın; **Özel URL** değerini `mysite.com/my-notes` olarak ayarlayın.

Obsidian Publish'i sahip olduğunuz bir sitenin alt URL'si olarak da kurabilirsiniz. Örneğin, `https://mysite.com/my-notes/`. Bunu gerçekleştirmek için kendi sunucunuzu barındırmanız ve tüm istekleri `https://publish.obsidian.md/` adresindeki sunucumuza proxy olarak yönlendirmeniz gerekir.

Aşağıdaki proxy kurulum örnekleri kapsamlı değildir, ancak bu uygulama için yaygın yöntemleri sağlar.

### NGINX

NGINX yapılandırmanızda aşağıdakileri ekleyin:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes/;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```


Bazı kullanıcılar proxy geçişine `$request_uri` eklenmesinin gerekli olabileceğini bildirmiştir:

```nginx
location /my-notes {
  proxy_pass https://publish.obsidian.md/serve?url=mysite.com/my-notes$request_uri;
  proxy_ssl_server_name on;
  proxy_set_header Host publish.obsidian.md;
}
```

### Apache

`.htaccess` dosyasına aşağıdakileri ekleyin:

```htaccess
RewriteEngine  on
RewriteRule    "^my-notes/(.*)$"  "https://publish.obsidian.md/serve?url=mysite.com/my-notes/$1"  [L,P]
```

> [!note] Not
> `mod_rewrite` etkinleştirilmiş olmalıdır ve ayrıca [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache) yapılandırmanız gerekebilir.

### Netlify

`netlify.toml` dosyasında [yönlendirmeleri yapılandırın](https://docs.netlify.com/routing/redirects/#syntax-for-the-netlify-configuration-file):

```plain
[[redirects]]
  from = "https://mysite.com/my-notes/*"
  to = "https://publish.obsidian.md/serve?url=mysite.com/my-notes/:splat"
  status = 200
  force = true
```

### Vercel

`vercel.json` dosyasında [yeniden yazmaları yapılandırın](https://vercel.com/docs/configuration#project/rewrites):

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

Bu minimal yapılandırma alıntısı `mysite.com` adresini Obsidian Publish'e yönlendirir.
Tam bir örnek için [Traefik belgelerine](https://doc.traefik.io/traefik/routing/overview/) bakın.

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

### Desteklenen HTTP X-Header'ları

Proxy hizmetiniz sorgu yollarına izin vermiyorsa, `https://publish.obsidian.md/` adresini özel bir `x-obsidian-custom-domain` başlığı ile kullanabilirsiniz; bu başlığı site URL'niz olan `mysite.com/my-subpath` olarak ayarlayın.

## Eski siteyi özel alan adına yönlendirme

Ziyaretçilerinizi eski `publish.obsidian.md` sitesinden yeni özel alan adınıza yönlendirmek istiyorsanız, özel alan adınızı yapılandırırken **Özel alan adınıza yönlendirin** seçeneğini etkinleştirin.

## Sorun giderme

Özel alan adınızı kurduktan sonra, sitenizi önceki `https://publish.obsidian.md/slug` bağlantısından ziyaret ettiyseniz, belirli şeylerin (yazı tipleri, grafikler veya parola erişimi gibi) düzgün çalışması için tarayıcı önbelleğinizi temizlemeniz gerekebilir. Bu, modern tarayıcılar tarafından uygulanan etki alanları arası güvenlik kısıtlamalarından kaynaklanmaktadır. İyi haber şu ki, yalnızca ziyaretçilerin özel alan adınızı kullanmasına izin verirseniz, sitenizin okuyucuları bu sorunla asla karşılaşmamalıdır.

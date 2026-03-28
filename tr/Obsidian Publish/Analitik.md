---
permalink: publish/analytics
---
## Ön koşullar

[[Obsidian Publish'e giriş|Obsidian Publish]] sitenizde analitik kullanmak için bir [[Özel alan adları|özel alan adına]] ihtiyacınız vardır.

> [!important] Önemli
> Analitiği etkinleştirmeden önce, yerel yasa ve düzenlemelerinizin ziyaretçilerinizi izlemenize izin verdiğinden emin olun. Kullandığınız araçlara bağlı olarak, sitenize bir onay bandı eklemeniz gerekebilir.

## Google Analytics

Obsidian Publish siteniz için Google Analytics'i etkinleştirmek üzere:

1. Uygulama penceresinin sol tarafındaki araç çubuğunda **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] düğmesine tıklayın.
2. **Değişiklikleri yayınla** iletişim kutusunda **Site seçeneklerini değiştir** ![[lucide-cog.svg#icon]] düğmesine tıklayın.
3. **Google Analytics takip kodu** alanına takip kodunuzu girin.

Google Analytics yerine Google Tag Manager kullanmak için, kendi betiklerinizi eklemek üzere özel JavaScript kullanın.

## Plausible, Fathom ve diğer analitik hizmetleri

Çoğu analitik hizmetini [[Sitenizi özelleştirin|publish.js]] dosyanız aracılığıyla sitenize ekleyebilirsiniz. `yourdomain.com` kısmını kendi alan adınızla ve `src` betiğini analitik sağlayıcınızdan aldığınız betikle değiştirdiğinizden emin olun.

İşte [Plausible Analytics](https://plausible.io/) kullanan bir örnek

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

 Aynı yaklaşım [Fathom Analytics](https://usefathom.com/) için de kullanılabilir. `data-domain` yerine `data-site` kullanıldığına dikkat edin — farklı analitik sağlayıcıları, betiğin nasıl eklenmesi gerektiği konusunda farklı biçimlere sahip olabilir.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Sorun giderme

Sitenizin analitik hizmetinizi kullandığını doğrulamak için, izleme betiğinin çalışmasını engelleyebilecek uBlock Origin gibi reklam engelleyici tarayıcı uzantılarını devre dışı bırakın.

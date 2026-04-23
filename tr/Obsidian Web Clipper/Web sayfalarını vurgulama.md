---
permalink: web-clipper/highlight
---
[[Obsidian Web Kırpıcı'ya giriş|Web Kırpıcı]], web sayfalarındaki metinleri vurgulamanıza ve Obsidian'a kaydetmek istediğiniz öğeleri seçmenize olanak tanır. Vurgular kaydedilir, böylece bir sayfaya geri döndüğünüzde bunları görebilirsiniz.

Vurgular uzantı kullanılarak Obsidian'a kaydedilebilir. Vurgulayıcı seçeneklerini uzantı ayarlarında tanımlayabilirsiniz.

<div style="padding:62.29% 0 0 0;position:relative;"><div class="interface" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/f2674kdaot?web_component=true&seo=false" title="2026-04-22 Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" width="100%" height="100%"></iframe></div></div>

## Vurgulayıcıyı kullanma

Vurgulayıcı canlı web sayfalarında veya [[Okuyucu|Okuyucu]]'da kullanılabilir. Okuyucu görünümünde metin seçimi oluşturmak size onu vurgulama seçeneği sunar.

Ayrıca vurgulayıcıyı etkinleştirerek seçimleri otomatik olarak vurgularınıza ekleyebilirsiniz:

- Uzantı panelindeki veya Okuyucu araç çubuğundaki ![[lucide-highlighter.svg#icon]] **Vurgulayıcı simgesi**.
- Uzantı ayarlarında özelleştirilebilir **kısayol tuşları**.
- Ziyaret ettiğiniz web sayfasına sağ tıklayarak **bağlam menüsü**.

Vurgulayıcı açıldığında, seçilen herhangi bir metin, görsel ve öğe vurgularınıza eklenecektir. Yukarıdaki tüm yöntemler ayrıca vurgulayıcıdan çıkmanıza da olanak tanır.

## Notlara vurgu ekleme

Vurguların kırpılmış notlarınıza nasıl ekleneceğine dair üç seçenek vardır:

- **Sayfa içeriğini vurgula** — vurguları doğrudan metne `==vurgu==` [[Obsidian Flavored Markdown|söz dizimi]] ile ekler.
- **Sayfa içeriğini değiştir** — sayfa içeriği olmadan yalnızca vurguların bir listesini döndürür.
- **Hiçbir şey yapma** — orijinal içeriği vurgular olmadan döndürür.
 
Bu seçenekler şablonunuzdaki `{{content}}` [[Değişkenler|değişkenini]] değiştirir. Ayrıca `{{highlights}}` değişkenini kullanarak vurguları doğrudan şablonunuza ekleyebilirsiniz, örneğin:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

## Vurguları görüntüleme ve arama

Oluşturduğunuz tüm vurgular Vurgular sayfanızda görüntülenebilir. Bu sayfayı **Ayarlar** → **Vurgulayıcı** yolunu izleyerek açabilirsiniz.

## Vurguları dışa aktarma

Vurgular, Ayarlar sayfasında veya Vurgular sayfasında bir `.json` dosyasına dışa aktarılabilir.

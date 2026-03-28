---
permalink: web-clipper/highlight
---
[[Obsidian Web Kırpıcı'ya giriş|Web Kırpıcı]], web sayfalarındaki metinleri vurgulamanıza ve Obsidian'a kaydetmek istediğiniz öğeleri seçmenize olanak tanır. Vurgularınız kaydedilir, böylece bir sayfaya geri döndüğünüzde bunları tekrar inceleyebilirsiniz.

Vurgular, uzantıyı açtığınızda [[Web sayfalarını kırpma|yakalanabilir]] ve Obsidian'a kaydedilebilir.

## Vurgulayıcıyı açma

Tarayıcınıza bağlı olarak vurgulamayı birkaç yolla açabilirsiniz:

- Uzantı panelindeki vurgulayıcı simgesi.
- Kısayol tuşları, klavyenizden uzantıyı etkinleştirmek için.
- Bağlam menüsü, ziyaret ettiğiniz web sayfasına sağ tıklayarak.

Vurgulama açıldığında, vurgulamak istediğiniz metni, görselleri ve öğeleri seçebilirsiniz.

## Vurgulayıcı ayarları

Web Kırpıcı ayarlarına giderek vurgulayıcı davranışını değiştirebilirsiniz. Burada ayrıca vurgularınızı bir `.json` dosyasına dışa aktarabilirsiniz.

Vurguların `{{content}}` [[Değişkenler|değişkeni]] aracılığıyla kırpılmış notunuza eklenmesi için üç seçenek vardır:

- **Sayfa içeriğini vurgula** — vurguları doğrudan metne `==vurgu==` [[Obsidian Flavored Markdown|söz dizimi]] ile ekler.
- **Sayfa içeriğini değiştir** — sayfa içeriği olmadan yalnızca vurguların bir listesini döndürür.
- **Hiçbir şey yapma** — orijinal içeriği vurgular olmadan döndürür.

`{{highlights}}` değişkenini kullanarak vurguları doğrudan şablonunuza ekleyebilirsiniz, örneğin:

```
{{highlights|map: item => item.text|join:"\n\n"}}
```

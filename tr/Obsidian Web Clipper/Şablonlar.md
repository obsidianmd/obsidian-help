---
permalink: web-clipper/templates
description: Web Clipper ile web sayfası meta verilerini otomatik olarak yakalayan ve düzenleyen şablonlar oluşturmayı öğrenin.
---
[[Obsidian Web Kırpıcı'ya giriş|Web Kırpıcı]], web sayfalarından meta verileri otomatik olarak yakalayan ve düzenleyen şablonlar oluşturmanıza olanak tanır. Örnek şablonlar [clipper-templates deposunda](https://github.com/kepano/clipper-templates) mevcuttur.

## Şablon oluşturma veya düzenleme

Bir şablon **oluşturmak** için Web Kırpıcı ayarlarına gidin ve kenar çubuğundaki **Yeni şablon** düğmesine tıklayın. Ayrıca sağ üst köşedeki **Daha fazla** eylemler menüsünden bir şablonu **çoğaltabilirsiniz**.

Bir şablonu **düzenlemek** için kenar çubuğundan bir şablon seçin. Değişiklikleriniz otomatik olarak kaydedilecektir.

Şablonlar, içeriğin nasıl kaydedileceğini özelleştirmenize olanak tanıyan [[Değişkenler]] ve [[Filtreler]] kullanır.

## Web Kırpıcı şablonlarını içe ve dışa aktarma

Bir şablonu içe aktarmak için:

1. Uzantıyı açın ve **[[Ayarlar]]** dişli simgesine tıklayın.
2. Listedeki herhangi bir şablona gidin.
3. Sağ üstteki **İçe aktar** seçeneğine tıklayın veya `.json` şablon dosya(ları)nızı şablon alanında herhangi bir yere sürükleyip bırakın.

Bir şablonu dışa aktarmak için sağ üstteki **Dışa aktar** seçeneğine tıklayın. Bu, şablonun `.json` dosyasını indirecektir. Ayrıca **Daha fazla** menüsü aracılığıyla şablon verilerini panonuza kopyalayabilirsiniz.

## Şablon ayarları

### Davranış

Web Kırpıcı'dan gelen içeriğin Obsidian'a nasıl ekleneceğini tanımlayın:

- **Yeni bir not oluştur**
- **Mevcut bir nota ekle**, üste veya alta
- **Günlük nota ekle**, üste veya alta ([[Günlük Notlar]] eklentisinin etkin olması gerekir)

### Otomatik olarak bir şablon tetikleme

Şablon tetikleyicileri, mevcut sayfa URL'sine veya [schema.org](https://schema.org/) verilerine göre otomatik olarak bir şablon seçmenize olanak tanır. Her şablon için yeni bir satırla ayrılmış birden fazla kural tanımlayabilirsiniz.

Şablon listenizde ilk eşleşme, hangi şablonun kullanılacağını belirler. Şablonların eşleşme sırasını değiştirmek için Web Kırpıcı ayarlarında şablonları yukarı ve aşağı sürükleyebilirsiniz.

#### Basit URL eşleştirme

Basit eşleştirme, mevcut sayfa URL'si verilen kalıpla *başladığında* bir şablonu tetikler. Örneğin:

- `https://obsidian.md` bu metinle başlayan herhangi bir URL ile eşleşecektir.

#### Düzenli ifade eşleştirme

Düzenli ifadeler kullanarak daha karmaşık URL kalıplarına göre şablonları tetikleyebilirsiniz. Düzenli ifade kalıbınızı eğik çizgiler (`/`) içine alın. Düzenli ifade kalıplarındaki özel karakterleri (`.` ve `/` gibi) ters eğik çizgi (`\`) ile kaçırmayı unutmayın. Örneğin:

- `/^https:\/\/www\.imdb\.com\/title\/tt\d+\/reference\/?$/` herhangi bir IMDB referans sayfasıyla eşleşecektir.

#### Schema.org eşleştirme

Sayfada bulunan [schema.org](https://schema.org/) verilerine göre şablonları tetikleyebilirsiniz. `schema:` ön ekini ve ardından eşleştirmek istediğiniz şema anahtarını kullanın. İsteğe bağlı olarak beklenen bir değer belirtebilirsiniz. Örneğin:

- `schema:@Recipe` şema türünün "Recipe" olduğu sayfalarla eşleşecektir.
- `schema:@Recipe.name` `@Recipe.name` özelliğinin mevcut olduğu sayfalarla eşleşecektir.
- `schema:@Recipe.name=Cookie` `@Recipe.name` değerinin "Cookie" olduğu sayfalarla eşleşecektir.

Schema.org değerleri ayrıca [[Değişkenler#Schema.org değişkenleri|şablonlardaki verileri önceden doldurmak]] için de kullanılabilir.

### Yorumlayıcı bağlamı

[[Yorumlayıcı|Yorumlayıcı]] etkinleştirildiğinde, sayfa içeriğini doğal dil ile çıkarmak için [[Değişkenler#Prompt değişkenleri|prompt değişkenlerini]] kullanabilirsiniz. Her şablon için Yorumlayıcının erişebildiği [[Yorumlayıcı#Bağlam|bağlamı]] tanımlayabilirsiniz.

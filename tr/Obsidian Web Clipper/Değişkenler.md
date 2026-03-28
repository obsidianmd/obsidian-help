---
permalink: web-clipper/variables
---
[[Obsidian Web Clipper/Şablonlar|Web Kırpıcı şablonları]], bir şablonda sayfa verilerini otomatik olarak önceden doldurmak için değişkenler kullanabilir. Değişkenler **not adı**, **not konumu**, **özellikler** ve **not içeriği** alanlarında kullanılabilir. Değişkenler ayrıca [[Filtreler|filtreler]] kullanılarak değiştirilebilir.

Şablonlarda kullanmak üzere geçerli sayfa değişkenlerine erişmek için [[Obsidian Web Kırpıcı'ya giriş|Web Kırpıcı]] uzantısındaki `...` simgesini kullanın. Kullanabileceğiniz beş tür değişken vardır:

- [[Değişkenler#Ön ayar değişkenleri|Ön ayar değişkenleri]]
- [[Değişkenler#İstem değişkenleri|İstem değişkenleri]]
- [[Değişkenler#Meta değişkenler|Meta değişkenler]]
- [[Değişkenler#Seçici değişkenler|Seçici değişkenler]]
- [[Değişkenler#Schema.org değişkenleri|Schema.org değişkenleri]]

## Ön ayar değişkenleri

Ön ayar değişkenleri, sayfa içeriğine göre otomatik olarak oluşturulur. Bunlar genellikle çoğu web sitesinde çalışır.

Ana içerik değişkeni `{{content}}`'tir; bu değişken makale içeriğini, [[Web sayfalarını vurgulama|vurguları]] veya sayfada seçili metin varsa seçimi içerir. `{{content}}`'in sayfanın ana içeriğini çıkarmaya çalıştığını unutmayın; bu her zaman istediğiniz sonuç olmayabilir. Bu durumda, ihtiyacınız olan içeriği çıkarmak için diğer ön ayar değişkenlerini veya seçici değişkenleri kullanabilirsiniz.

| Değişken            | Açıklama                                                                               |
| ------------------- | -------------------------------------------------------------------------------------- |
| `{{author}}`        | Sayfanın yazarı                                                                        |
| `{{content}}`       | Makale içeriği, [[Web sayfalarını vurgulama\|vurgular]] veya seçim, Markdown biçiminde |
| `{{contentHtml}}`   | Makale içeriği, [[Web sayfalarını vurgulama\|vurgular]] veya seçim, HTML biçiminde     |
| `{{date}}`          | Geçerli tarih, `date` filtresi kullanılarak biçimlendirilebilir                        |
| `{{description}}`   | Açıklama veya özet                                                                     |
| `{{domain}}`        | Alan adı                                                                               |
| `{{favicon}}`       | Favicon URL'si                                                                         |
| `{{fullHtml}}`      | Tam sayfa içeriğinin işlenmemiş HTML'si                                                |
| `{{highlights}}`    | Metin ve zaman damgalarıyla [[Web sayfalarını vurgulama\|vurgular]]                    |
| `{{image}}`         | Sosyal paylaşım görseli URL'si                                                         |
| `{{published}}`     | Yayınlanma tarihi, `date` filtresi kullanılarak biçimlendirilebilir                    |
| `{{selection}}`     | Seçim, Markdown biçiminde                                                              |
| `{{selectionHtml}}` | Seçim, HTML biçiminde                                                                  |
| `{{site}}`          | Site adı veya yayıncı                                                                  |
| `{{title}}`         | Sayfanın başlığı                                                                       |
| `{{time}}`          | Geçerli tarih ve saat                                                                  |
| `{{url}}`           | Geçerli URL                                                                            |
| `{{words}}`         | Kelime sayısı                                                                          |

## İstem değişkenleri

İstem değişkenleri, doğal dil kullanarak verileri çıkarmak ve değiştirmek için dil modellerinden yararlanır. İstem değişkenleri, [[Web sayfalarını yorumlama|Yorumlayıcı]]'nın etkinleştirilmiş ve yapılandırılmış olmasını gerektirir.

İstem değişkenleri `{{"sayfanın bir özeti"}}` söz dizimini kullanır. İstemin etrafındaki çift tırnak işaretleri önemlidir ve istemleri ön ayar değişkenlerinden ayırır. İstem yanıtları [[Filtreler|filtreler]] ile sonradan işlenebilir, örneğin `{{"sayfanın bir özeti"|blockquote}}`.

### İstem değişkenleri ne zaman kullanılır

İstem değişkenleri son derece esnek olma ve yazılması kolay olma avantajına sahiptir, ancak birçok ödünleşim içerir: çalışmaları daha yavaştır ve seçtiğiniz [[Web sayfalarını yorumlama#Modeller|sağlayıcıya]] bağlı olarak maliyet ve gizlilik değerlendirmeleri olabilir.

Diğer değişken türlerinin aksine, istem değişkenlerinin harici bir dil modeli tarafından işlenmesi gerekir, bu nedenle yalnızca [[Web sayfalarını yorumlama|Yorumlayıcı]] çalıştırıldıktan sonra değiştirilirler.

Çıkarmak istediğiniz veriler diğer değişken türleriyle çıkarılabilecek tutarlı bir biçimdeyse istem değişkenlerini *kullanmamanız* en iyisidir.

Öte yandan, çıkarmak istediğiniz veriler web siteleri arasında *tutarsız* bir biçimdeyse istem değişkenleri yararlı olabilir. Örneğin, kitap sitesinden bağımsız olarak kitap kaydetmek için bir [[Obsidian Web Clipper/Şablonlar|şablon]] oluşturabilirsiniz. `{{"kitabın yazarı"}}` gibi istem değişkenleri herhangi bir kitap sitesinde çalışırken, seçici değişkenler genellikle yalnızca tek bir site için çalışır.

### Örnekler

İstemler neredeyse her türlü doğal dil sorgusunu kullanabilir. Kullandığınız modele bağlı olarak, istemler diller arasında veri sorgulayabilir veya çevirebilir.

- `{{"üç madde işaretli özet, Fransızcaya çevrilmiş"}}` sayfa hakkında madde işaretleri çıkarmak ve Fransızcaya çevirmek için.
- `{{"un resumé de la page en trois points"}}` Fransızca bir istem kullanarak üç madde işareti çıkarmak için.

İstemler, sayfa içeriğini [[Filtreler|filtrelerle]] manipüle edilebilecek JSON'a dönüştürebilir. Örneğin:

```
{{"her tweet için yazar, tweet_text, YYYY-MM-DD biçiminde tarih ve images dizisi (varsa) içeren bir JSON nesnesi döndür"|map:tweet => ({text: tweet.tweet_text, author: tweet.author, date: tweet.date})|template:"${text}\n— [[@${author}]], [[${date}]]\n"}}
```


## Meta değişkenler

Meta değişkenler, sosyal paylaşım önizlemelerini doldurmak için kullanılan [Open Graph](https://ogp.me/) verileri dahil olmak üzere sayfadaki [meta öğelerinden](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) veri çıkarmanıza olanak tanır.

- `{{meta:name}}` verilen ada sahip meta name etiketinin içeriğini döndürür, örneğin `description` meta etiketi için `{{meta:name:description}}`.
- `{{meta:property}}` verilen özelliğe sahip meta property etiketinin içeriğini döndürür, örneğin `og:title` meta etiketi için `{{meta:property:og:title}}`.

## Seçici değişkenler

Seçici değişkenler, [CSS seçicileri](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors/Selectors_and_combinators) kullanarak sayfadaki öğelerden metin içeriği çıkarmanıza olanak tanır.

Söz dizimi `{{selector:cssSeçici?nitelik}}` şeklindedir; burada `?nitelik` isteğe bağlıdır. Hiçbir nitelik belirtilmezse öğenin metin içeriği döndürülür. Öğenin HTML içeriğini almak için `{{selectorHtml:cssSeçici}}` de kullanabilirsiniz. Seçici değişkenler, tutarlı HTML yapısına sahip belirli bir web sitesinde veya web sitesi grubunda en iyi şekilde çalışma eğilimindedir.

- `{{selector:h1}}` sayfadaki tüm `h1` öğelerinin metin içeriğini döndürür.
- `{{selector:.author}}` sayfadaki tüm `.author` öğelerinin metin içeriğini döndürür.
- `{{selector:img.hero?src}}` `hero` sınıfına sahip görselin `src` niteliğini döndürür.
- `{{selector:a.main-link?href}}` `main-link` sınıfına sahip bağlantı etiketinin `href` niteliğini döndürür.
- `{{selectorHtml:body|markdown}}` `body` öğesinin tüm HTML'sini `markdown` [[Filtreler#HTML işleme|filtresi]] kullanılarak Markdown'a dönüştürülmüş şekilde döndürür.
- Daha fazla özgüllüğe ihtiyacınız varsa iç içe CSS seçicileri ve birleştiriciler desteklenir.
- Birden fazla öğe seçiciyle eşleşirse bir dizi döndürülür; bunu `join` veya `map` gibi [[Filtreler#Diziler ve nesneler|dizi ve nesne filtreleri]] ile işleyebilirsiniz.

Seçici değişkenler doğrudan [[Mantık|şablon mantığında]] da kullanılabilir:

- Döngülerde: `{% for comment in selector:.comment %}...{% endfor %}`
- Koşullarda: `{% if selector:.premium-badge %}...{% endif %}`
- Değişken atamasında: `{% set items = selector:.list-item %}`

## Schema.org değişkenleri

Schema değişkenleri, sayfadaki [schema.org](https://schema.org/) JSON-LD'den veri çıkarmanıza olanak tanır. Schema.org verileri ayrıca otomatik olarak [[Obsidian Web Clipper/Şablonlar#Schema.org eşleştirme|bir şablonu tetiklemek]] için de kullanılabilir.

- `{{schema:@Tür:anahtar}}` şemadan anahtarın değerini döndürür.
- `{{schema:@Tür:üst.alt}}` iç içe bir özelliğin değerini döndürür.
- `{{schema:@Tür:diziAnahtarı}}` bir dizideki ilk öğeyi döndürür.
- `{{schema:@Tür:diziAnahtarı[indeks].özellik}}` bir dizide belirtilen indeksteki öğeyi döndürür.
- `{{schema:@Tür:diziAnahtarı[*].özellik}}` bir dizideki tüm öğelerden belirli bir özelliği döndürür.

Şema türünü belirtmeden kısa gösterim de kullanabilirsiniz:

- `{{schema:author}}` herhangi bir şema türünde bulunan ilk `author` özelliğiyle eşleşir.
- `{{schema:name}}` herhangi bir şema türünde bulunan ilk `name` özelliğiyle eşleşir.

Bu kısa gösterim, belirli şema türünü bilmediğinizde veya umursamadığınızda ancak aradığınız özellik adını bildiğinizde özellikle yararlıdır.

İç içe özellikler ve dizi erişimi, şema `@Türü` belirtilmiş veya belirtilmemiş olarak her iki şekilde de çalışır:

- `{{schema:author.name}}` ilk `author` özelliğini bulur ve ardından `name` alt özelliğine erişir.
- `{{schema:author[0].name}}` bir yazarlar dizisindeki ilk yazarın `name` özelliğine erişir.
- `{{schema:author[*].name}}` tüm yazar adlarının bir dizisini döndürür.

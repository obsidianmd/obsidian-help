---
permalink: import/templates
description: 'İçe Aktarıcı tarafından oluşturulan not adını, özellikleri ve içeriği özelleştirin.'
---
[[İçe aktarıcı]], notlarınızın diğer uygulamalardan nasıl içe aktarılacağını kontrol eden şablonlar tanımlamanıza olanak tanır. Bu sayede içe aktardığınız notların başlığını, özelliklerini ve içeriğini değiştirebilirsiniz.

## İçe aktarma şablonunu düzenleme

Varsayılan şablonu düzenlemek için önizlemenin üzerindeki **Düzenle** seçeneğini tıklayın. Şunları düzenleyebilirsiniz:

- Satır içi başlık olarak gösterilen not adı.
- Notun başındaki özellikler.
- Notun Markdown içeriği.

Önizlemeye dönmek için **Kaydet** seçeneğini tıklayın. İçe aktarıcı, aynı biçimi kullanan gelecekteki içe aktarmalar için düzenlenmiş satır içi şablonu hatırlar.

Alternatif olarak, mevcut kasadaki bir Markdown dosyasından şablon yükleyebilirsiniz.

## Sonuçları önizleme

Önizleme, seçtiğiniz verilerden en fazla on örnek gösterir. Örnekler arasında gezinmek için ok düğmelerini kullanın. İçe aktarma ayarlarında ve şablonda yapılan değişiklikler, kasanıza herhangi bir şey eklenmeden önce önizlemeyi günceller.

Bazı ekler, uzak öğeler ve notlar arası referanslar, içe aktarma çalıştırılana kadar tam olarak çözümlenemez. Bu durumlarda önizleme, kaynak bağlantısını koruyabilir veya bir yer tutucu gösterebilir.

## Şablon söz dizimi

İçe aktarıcı şablonları, değişkenler, [[Filtreler]] ve [[Mantık]]'tan oluşan bir söz dizimi kullanır. [[Obsidian Web Kırpıcı'ya giriş|Web Kırpıcı]] ile aynı [Knap](https://github.com/obsidianmd/knap) söz dizimini kullanır.

Değişkenleri çift süslü parantezlerle ekleyin; örneğin `{{title}}`, `{{content}}` veya `{{date}}`. Değişkenler not adı, özellikler ve içerikte kullanılabilir.

Değişkenleri [[Filtreler]] kullanarak değiştirebilirsiniz. Örneğin, tarih biçimini değiştirmek için `{{date|date:"YYYY-MM-DD"}}` kullanabilirsiniz. Daha gelişmiş koşullar, döngüler ve değişken atamaları için [[Mantık]] kullanın.

## Değişkenler

Aşağıdaki değişkenler herhangi bir İçe aktarıcı şablonunda kullanılabilir:

| Değişken         | Açıklama                                                                                                          |
| ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| `{{body}}`       | Özellikler olmadan Markdown gövdesi (ön tanımlı meta veriler yok).                                               |
| `{{content}}`    | Seçilen şablon uygulanmadan önceki tam Markdown.                                                                  |
| `{{ctime}}`      | ISO 8601 zaman damgası olarak kaynak oluşturma zamanı; kullanılamadığında boş.                                    |
| `{{date}}`       | Şablonun işlendiği andaki geçerli tarih ve saat, ISO 8601 zaman damgası olarak.                                   |
| `{{importer}}`   | İçe aktarıcı kimliği, örneğin `keep`, `html` veya `notion-api`.                                                  |
| `{{folder}}`     | Kasaya göre son üst klasör. Not kasa kökündeyse boş.                                                              |
| `{{mtime}}`      | ISO 8601 zaman damgası olarak kaynak değiştirme zamanı; kullanılamadığında boş.                                   |
| `{{noteName}}`   | Geçersiz karakterler kaldırıldıktan ve yinelemeler için son ekler eklendikten sonraki son çözümlenmiş not adı.    |
| `{{path}}`       | `.md` uzantısı dahil kasaya göre son yol.                                                                         |
| `{{properties}}` | Ön tanımlı meta veri özelliklerini içeren nesne.                                                                  |
| `{{source}}`     | Oluşturulan özellikleri ve kaynağa özgü değerleri içeren nesne.                                                   |
| `{{sourceId}}`   | İçe aktarıcı bir tane sağladığında kararlı kaynak tanımlayıcısı; aksi halde boş.                                 |
| `{{time}}`       | `{{date}}` için takma ad.                                                                                         |
| `{{title}}`      | Temizleme ve tekilleştirme öncesi orijinal not başlığı.                                                           |

## Özellikler için kaynak değerleri

[[Özellikler]]'i destekleyen içe aktarma biçimlerinde, kaynak değerleri kolaylık sağlamak amacıyla üst düzey değişkenler olarak da kullanılabilir.

Bir kaynak değeri paylaşılan bir değişkenle aynı ada sahipse, ona `{{source}}` aracılığıyla erişin. Örneğin, içe aktarma kaynağınızda `content` adlı bir özellik varsa, bu `{{source.content}}` olarak erişilebilirken, `{{content}}` varsayılan İçe aktarıcı değişkeni olarak kalır.

Alan adı boşluk, noktalama veya diğer özel karakterler içerdiğinde köşeli parantez gösterimini kullanın:

```twig
{{source["Project: status"]}}
```

## Örnek şablon

İşte değişkenler ve [[Filtreler|filtreler]] kullanan bir şablon örneği:

```twig
---
created: {{ctime | date:"YYYY-MM-DD"}}
modified: {{mtime | date:"YYYY-MM-DD"}}
source: {{importer}}
---
# {{title}}

{{body}}
```

[[Mantık]] kullanarak bir nota koşullu olarak veri ekleyebilirsiniz:

```twig
{% if tags %}
## Etiketler
{% for tag in tags %}
- {{tag}}
{% endfor %}
{% endif %}
```

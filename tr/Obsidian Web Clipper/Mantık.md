---
permalink: web-clipper/logic
description: 'Web Clipper şablonlarında koşullu ifadeler, döngüler ve değişken ataması kullanın.'
---
[[Obsidian Web Kırpıcı'ya giriş|Web Kırpıcı]], koşullar, döngüler ve değişken ataması için şablon mantığını destekler. Bu söz dizimi [Twig](https://twig.symfony.com/) ve [Liquid](https://shopify.github.io/liquid/) şablon dillerinden esinlenmiştir.


> [!warning] En son sürüm gereklidir
> Mantık özellikleri, henüz tüm uzantı mağazalarında onaylanmamış olan Obsidian Web Clipper 1.0.0 sürümünü gerektirir.

## Koşullar

Değişkenlere veya ifadelere göre içeriği koşullu olarak dahil etmek için `{% if %}` kullanın.

```twig
{% if author %}
Yazar: {{author}}
{% endif %}
```

Yedek içerik sağlamak için `{% else %}`, birden fazla koşulu zincirleme olarak bağlamak için `{% elseif %}` kullanın:

```twig
{% if status == "published" %}
Yayında olan makale
{% elseif status == "draft" %}
Taslak makale
{% else %}
Bilinmeyen durum
{% endif %}
```

### Karşılaştırma operatörleri

Aşağıdaki karşılaştırma operatörleri desteklenir:

| Operatör | Açıklama |
|----------|-------------|
| `==` | Eşittir |
| `!=` | Eşit değildir |
| `>` | Büyüktür |
| `<` | Küçüktür |
| `>=` | Büyük veya eşittir |
| `<=` | Küçük veya eşittir |
| `contains` | Dizenin alt dize içerip içermediğini veya dizinin değer içerip içermediğini kontrol eder |

Örnekler:
- `{% if title == "Home" %}` — dize eşitliği
- `{% if price >= 100 %}` — sayısal karşılaştırma
- `{% if title contains "Review" %}` — alt dize kontrolü
- `{% if tags contains "important" %}` — dizi üyeliği

### Mantıksal operatörler

Koşulları mantıksal operatörlerle birleştirin:

| Operatör | Alternatif | Açıklama                            |
| -------- | ----------- | ----------------------------------- |
| `and`    | `&&`        | Her iki koşul da doğru olmalıdır    |
| `or`     | \|\|        | En az bir koşul doğru olmalıdır     |
| `not`    | `!`         | Bir koşulu olumsuzlar               |

Örnekler:
- `{% if author and published %}` — her ikisi de mevcut olmalı
- `{% if draft or archived %}` — herhangi bir koşul
- `{% if not hidden %}` — olumsuzlama
- `{% if (premium or featured) and published %}` — gruplandırılmış koşullar

### Doğruluk değeri

Bir değişken karşılaştırma operatörü olmadan kullanıldığında, "doğruluk değeri" açısından değerlendirilir:

- `false`, `null`, `undefined`, boş dize `""` ve `0` **yanlış (falsy)** kabul edilir.
- Boş diziler `[]` **yanlış (falsy)** kabul edilir.
- Diğer her şey **doğru (truthy)** kabul edilir.

```twig
{% if content %}
İçerik var
{% endif %}
```

## Değişken atama

Şablonunuz içinde değişken oluşturmak veya değiştirmek için `{% set %}` kullanın:

```twig
{% set slug = title|lower|replace:" ":"-" %}
Dosya: {{slug}}.md
```

Değişkenler şunlara ayarlanabilir:
- Diğer değişkenler: `{% set name = author %}`
- Sabit değerler: `{% set count = 5 %}` veya `{% set label = "Draft" %}`
- Filtreli ifadeler: `{% set excerpt = content|truncate:100 %}`
- Seçici sonuçları: `{% set comments = selector:.comment %}`

`{% set %}` ile ayarlanan değişkenler, sonraki şablon mantığında ve `{{variable}}` çıktısında kullanılabilir.

## Yedek değerler

Bir değişken boş veya tanımsız olduğunda yedek değer sağlamak için `??` operatörünü kullanın:

```twig
{{title ?? "Başlıksız"}}
```

`title` boş, tanımsız veya yanlış (falsy) ise, bunun yerine `"Başlıksız"` yedek değeri kullanılacaktır.

Bu, eşdeğer `if` ifadesinin kısaltmasıdır:

```twig
{% if title %}{{title}}{% else %}Başlıksız{% endif %}
```

### Yedek değerleri zincirleme

Birden fazla yedek değeri zincirleyebilirsiniz:

```twig
{{title ?? headline ?? "Başlık yok"}}
```

Bu, varsa `title`'ı, yoksa `headline`'ı, yoksa `"Başlık yok"` dizesini kullanacaktır.

### Filtrelerle birlikte

Filtreler `??` operatöründen daha sıkı bağlanır, bu nedenle filtreler yedek değer kontrolünden önce uygulanır:

```twig
{{title|upper ?? "BAŞLIKSIZ"}}
```

Bu, önce `title`'a `upper` uygular, ardından sonuç boşsa `"BAŞLIKSIZ"` değerine geri döner. Yedek değere filtre uygulamak için parantez veya ayrı ifadeler kullanın:

```twig
{{title ?? "Başlıksız"|lower}}
```

Bu, varsa `title`'ı kullanacak, yoksa yedek değere `lower` uygulayarak `"başlıksız"` sonucunu verecektir.

## Döngüler

Diziler üzerinde yineleme yapmak için `{% for %}` kullanın:

```twig
{% for item in schema:author %}
- {{item.name}}
{% endfor %}
```

### Döngü kaynakları

Şunlar üzerinde döngü yapabilirsiniz:
- Şema dizileri: `{% for item in schema:author %}`
- Seçici sonuçları: `{% for comment in selector:.comment %}`
- Daha önce ayarlanmış değişkenler: `{% set items = selector:.item %}{% for item in items %}`

### Döngü değişkenleri

Bir döngü içinde, aşağıdaki özelliklere sahip bir `loop` nesnesine erişiminiz vardır:

| Değişken | Açıklama |
|----------|-------------|
| `loop.index` | Geçerli yineleme (1'den başlar) |
| `loop.index0` | Geçerli yineleme (0'dan başlar) |
| `loop.first` | İlk yinelemeyse `true` |
| `loop.last` | Son yinelemeyse `true` |
| `loop.length` | Toplam öğe sayısı |

```twig
{% for tag in tags %}
{{loop.index}}. {{tag}}
{% if loop.last %} (listenin sonu){% endif %}
{% endfor %}
```

Geriye dönük uyumluluk için, 0'dan başlayan konumu almak üzere `item_index` (burada `item` yineleyici değişken adınızdır) de kullanabilirsiniz:

```twig
{% for tag in tags %}
{{tag_index}}. {{tag}}
{% endfor %}
```

### Dizi öğelerine dizine göre erişim

Dizi öğelerine dizine göre erişmek için köşeli parantez gösterimini kullanın:

```twig
{{items[0]}}
{{items[loop.index0]}}
```

Bu, birden fazla dizideki öğelere paralel olarak erişmeniz gerektiğinde kullanışlıdır:

```twig
{% set transcripts = selector:.transcript-text %}
{% set timestamps = selector:.timestamp %}

{% for line in transcripts %}
{{timestamps[loop.index0]}} - {{line}}
{% endfor %}
```

Köşeli parantez gösterimi nesne özellikleriyle de çalışır:

```twig
{{user["name"]}}
{{data["my-key"]}}
```

### İç içe döngüler

Karmaşık veri yapıları için döngüler iç içe geçirilebilir:

```twig
{% for section in sections %}
## {{section.title}}
{% for item in section.items %}
- {{item}}
{% endfor %}
{% endfor %}
```

## Mantığı birleştirme

Koşullar ve döngüler birleştirilebilir:

```twig
{% for item in items %}
{% if item.active %}
- {{item.name}}
{% endif %}
{% endfor %}
```

## Değerlendirme sırası

Şablon mantığı aşağıdaki sırayla işlenir:

1. **Şablon mantığı** — `{% if %}`, `{% for %}`, `{% set %}` ve `{{variables}}` önce değerlendirilir
2. **Prompt değişkenleri** — `{{"summarize this"|prompt}}` gibi [[Değişkenler#Prompt değişkenleri|Prompt değişkenleri]], şablon mantığı tamamlandıktan sonra Yorumlayıcıya gönderilir

Bu, promptları dinamik olarak oluşturmak için şablon mantığını kullanabileceğiniz, ancak prompt sonuçlarının koşullarda veya döngülerde kullanılamayacağı anlamına gelir.

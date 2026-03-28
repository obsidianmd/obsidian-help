---
permalink: bases/syntax
publish: true
mobile: true
description: 'Bu sayfa, Obsidian''da Bases söz dizimine giriş sağlar.'
---
Obsidian'da [[Bir taban oluştur|bir taban oluşturduğunuzda]], `.base` dosyası olarak kaydedilir. Tabanlar genellikle uygulama arayüzü kullanılarak düzenlenir, ancak söz dizimi manuel olarak da düzenlenebilir ve bir kod bloğuna gömülebilir.

[[Tabanlara giriş|Tabanlar]] söz dizimi [[Görünümler|görünümleri]], filtreleri ve [[Formüller|formülleri]] tanımlar. Tabanlar, aşağıda tanımlanan şemaya uygun geçerli YAML olmalıdır.

## Örnek

İşte bir taban dosyası örneği. Her bölümü ayrıntılı olarak inceleyeceğiz.

```yaml
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
summaries:
  customAverage: 'values.mean().round(3)'
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

### Filtreler

Varsayılan olarak bir taban, kasadaki her dosyayı içerir. SQL veya Dataview'daki gibi `from` veya `source` yoktur. `filters` bölümü, veri kümesini daraltmak için koşullar tanımlamanızı sağlar.

```yaml
# Basit filtre:
filters:
  and:
    - file.hasTag("tag")

# Karmaşık filtre:
filters:
  or:
    - file.hasTag("tag")
    - and:
        - file.hasTag("book")
        - file.hasLink("Textbook")
    - not:
        - file.hasTag("book")
        - file.inFolder("Required Reading")
```

Filtre uygulamak için iki fırsat vardır:

1. Genel `filters` düzeyinde (yukarıda gösterildiği gibi); tabandaki tüm görünümlere uygulanır.
2. `view` düzeyinde; yalnızca belirli bir görünüme uygulanır.

Bu iki bölüm işlevsel olarak eşdeğerdir ve bir görünüm için değerlendirilirken `AND` ile birleştirilirler.

`filters` bölümü, bir dize olarak tek bir filtre ifadesi veya özyinelemeli olarak tanımlanmış bir filtre nesnesi içerir. Filtre nesneleri `and`, `or` veya `not` anahtarlarından birini içerebilir. Bu anahtarlar, diğer filtre nesnelerinin veya dize olarak filtre ifadelerinin heterojen bir listesidir. Filtre ifadesi, bir nota uygulandığında doğru veya yanlış olarak değerlendirilen bir satırdır. Aşağıdakilerden biri olabilir:

- Standart aritmetik operatörleri kullanan temel bir karşılaştırma.
- Bir fonksiyon. Çeşitli yerleşik [[Fonksiyonlar]] mevcuttur ve eklentiler ek fonksiyonlar ekleyebilir.

Filtreler ve formüller için söz dizimi ve kullanılabilir fonksiyonlar aynıdır.

### Formüller

`formulas` bölümü, taban dosyasındaki tüm görünümlerde görüntülenebilen [[Formüller|formül özelliklerini]] tanımlar.

```yaml
formulas:
  formatted_price: 'if(price, price.toFixed(2) + " dollars")'
  ppu: "(price / age).toFixed(2)"
```

Formül özellikleri temel aritmetik operatörleri ve çeşitli yerleşik [[Fonksiyonlar|fonksiyonları]] destekler. Gelecekte eklentiler, formüllerde kullanılmak üzere fonksiyonlar ekleyebilecektir.

Özelliklere türlerine göre farklı şekillerde başvurabilirsiniz:

- **Not özellikleri**, notun başlangıç meta verilerinde tanımlanan özelliklerdir. Örneğin `note.price` veya `note["price"]`.
  Hiçbir önek belirtilmezse, özelliğin bir `note` özelliği olduğu varsayılır.
- **Dosya özellikleri**, dosyanın kendisini tanımlar.
  Örneğin `file.size` veya `file.ext`. Dosya nesnesine doğrudan da başvurabilirsiniz, örn. `file.hasLink()`.
- **Formül özellikleri**, tabandaki diğer formüllerdir.
  Örnek: `formula.formatted_price`.

Bir formül, döngüsel referans olmadığı sürece diğer formül özelliklerindeki değerleri kullanabilir.

Formül özellikleri YAML'de her zaman dize olarak saklanır, ancak gerçek **çıktı veri türü**, temel alınan verinin türü ve kullanılan fonksiyonların dönüş değeri tarafından belirlenir.

YAML alanına metin sabitlerini dahil etmek için iç içe tırnak kullanımının gerekli olduğunu unutmayın. Metin sabitleri tek veya çift tırnak içine alınmalıdır.

### Özellikler

`properties` bölümü, her özellik hakkında yapılandırma bilgilerini saklamayı sağlar. Bu yapılandırma değerlerinin nasıl kullanılacağı bireysel görünüme bağlıdır. Örneğin, tablolarda görünen ad sütun başlıkları için kullanılır.

```yaml
properties:
  status:
    displayName: Status
  formula.formatted_price:
    displayName: "Price"
  file.ext:
    displayName: Extension
```

Görünen adlar filtrelerde veya formüllerde kullanılmaz.

### Özetler

`summaries` bölümü, özel özet formülleri tanımlamak için kullanılabilir. Burada özet formülleri tanımlamanın yanı sıra, birçok varsayılan özet formülü de mevcuttur.

```yaml
summaries:
  customAverage: 'values.mean().round(3)'
```

Bu örnekte, `customAverage` formülü varsayılan `Average` ile aynıdır, ancak değer farklı bir ondalık basamak sayısına yuvarlanır. Özet formüllerinde `values` anahtar kelimesi, sonuç kümesindeki tüm notlardaki o özelliğin tüm değerlerini içeren bir listedir. Özet formülü tek bir `Value` döndürmelidir.

Bu `summaries` bölümünün, özet formüllerinin belirli özelliklere atandığı görünüm yapılandırmasındaki `summaries` bölümünden (aşağıda açıklanmıştır) farklı olduğunu unutmayın.

#### Varsayılan Özet Formülleri

| Ad        | Girdi Türü | Açıklama                                                       |
| --------- | ---------- | -------------------------------------------------------------- |
| Average   | Sayı       | Girdi değerlerindeki tüm sayıların matematiksel ortalaması.   |
| Min       | Sayı       | Girdi değerlerindeki en küçük sayı.                            |
| Max       | Sayı       | Girdi değerlerindeki en büyük sayı.                            |
| Sum       | Sayı       | Girdideki tüm sayıların toplamı.                              |
| Range     | Sayı       | `Max` ve `Min` arasındaki fark.                                |
| Median    | Sayı       | Girdi değerlerindeki tüm sayıların matematiksel medyanı.      |
| Stddev    | Sayı       | Girdi değerlerindeki tüm sayıların standart sapması.          |
| Earliest  | Tarih      | Girdi değerlerindeki en erken tarih.                           |
| Latest    | Tarih      | Girdi değerlerindeki en geç tarih.                             |
| Range     | Tarih      | `Latest` ve `Earliest` arasındaki fark.                        |
| Checked   | Boolean    | `true` değerlerinin sayısı.                                    |
| Unchecked | Boolean    | `false` değerlerinin sayısı.                                   |
| Empty     | Herhangi   | Girdideki boş değerlerin sayısı.                               |
| Filled    | Herhangi   | Girdideki boş olmayan değerlerin sayısı.                       |
| Unique    | Herhangi   | Girdideki benzersiz değerlerin sayısı.                         |

### Görünümler

`views` bölümü, verilerin nasıl oluşturulabileceğini tanımlar. `views` listesindeki her girdi, aynı verinin ayrı bir görünümünü tanımlar ve ihtiyaç duyulduğu kadar farklı görünüm olabilir.

```yaml
views:
  - type: table
    name: "My table"
    limit: 10
    groupBy:
      property: note.age
      direction: DESC
    filters:
      and:
        - 'status != "done"'
        - or:
            - "formula.ppu > 5"
            - "price > 2.1"
    order:
      - file.name
      - file.ext
      - note.age
      - formula.ppu
      - formula.formatted_price
    summaries:
      formula.ppu: Average
```

- `type`, yerleşik ve eklenti tarafından eklenen görünüm türlerinden seçim yapar.
- `name`, görünen addır ve varsayılan görünümü tanımlamak için kullanılabilir.
- `filters`, yukarıda açıklananla tamamen aynıdır, ancak yalnızca görünüme uygulanır.
- `groupBy`, bir özellik ve sıralama yönü belirtir. Her satır için belirtilen özelliğin değeri, satırı gruplara yerleştirmek için kullanılır.
- `summaries`, özellik adlarını adlandırılmış bir özete eşler. Özetler, tüm satırlardaki özellik üzerinde bir toplama işlemi gerçekleştirir.

[[Görünümler]], durumu korumak veya doğru şekilde oluşturmak için gereken herhangi bir bilgiyi saklamak üzere ek veriler ekleyebilir, ancak eklenti geliştiricileri çekirdek Tabanlar eklentisi tarafından zaten kullanımda olan anahtarları kullanmamaya dikkat etmelidir. Örnek olarak, bir tablo görünümü bunu satır sayısını sınırlamak veya satırları sıralamak için hangi sütunun ve hangi yönün kullanılacağını seçmek için kullanabilir. Harita gibi farklı bir görünüm türü, notdaki hangi özelliğin enlem ve boylamla eşleştiğini ve hangi özelliğin pin başlığı olarak görüntüleneceğini belirlemek için bunu kullanabilir.

Gelecekte API, görünümlerin bu değerleri okumasına ve yazmasına izin verecek ve görünümün yapılandırma için kendi arayüzünü oluşturmasını sağlayacaktır.

## Özellikler

Tabanlarda kullanılan üç tür özellik vardır:

1. **Not özellikleri**, Markdown dosyalarının başlangıç meta verilerinde saklanır.
2. **Dosya özellikleri**, tüm dosya türleri için erişilebilir.
3. **Formül özellikleri**, `.base` dosyasının kendisinde tanımlanır (yukarıya bakın).

### Not özellikleri

[[Özellikler|Not özellikleri]] yalnızca Markdown dosyaları için kullanılabilir ve her notun YAML başlangıç meta verilerinde saklanır. Bu özelliklere `note.author` biçiminde veya kısaca `author` olarak erişilebilir.

### Dosya özellikleri

Dosya özellikleri, şu anda test edilen veya değerlendirilen dosyaya atıfta bulunur. Dosya özellikleri, ekler dahil tüm [[Kabul edilen dosya biçimleri|dosya türleri]] için kullanılabilir.

Örneğin, `file.ext == "md"` filtresi tüm Markdown dosyaları için doğru, diğerleri için yanlış olacaktır.

| Özellik       | Tür    | Açıklama                                                      |
| ------------- | ------ | ------------------------------------------------------------- |
| `file.backlinks`  | Liste  | Geri bağlantı dosyalarının listesi. Not: Bu özellik performans açısından ağırdır. Mümkün olduğunda aramayı tersine çevirin ve `file.links` kullanın. Kasa değiştirildiğinde sonuçlar otomatik olarak yenilenmez. |
| `file.ctime`  | Tarih  | Oluşturulma zamanı                                            |
| `file.embeds` | Liste  | Nottaki tüm gömülü öğelerin listesi                           |
| `file.ext`    | Dize   | Dosya uzantısı                                                |
| `file.file`   | Dosya  | Dosya nesnesi, yalnızca belirli fonksiyonlarda kullanılabilir  |
| `file.folder` | Dize   | Dosya klasörünün yolu                                         |
| `file.links`  | Liste  | Başlangıç meta verileri dahil, nottaki tüm dahili bağlantıların listesi |
| `file.mtime`  | Tarih  | Değiştirilme zamanı                                           |
| `file.name`   | Dize   | Dosya adı                                                     |
| `file.path`   | Dize   | Dosyanın yolu                                                 |
| `file.properties`   | Nesne | Dosyadaki tüm özellikler. Not: Kasa değiştirildiğinde sonuçlar otomatik olarak yenilenmez. |
| `file.size`   | Sayı   | Dosya boyutu                                                  |
| `file.tags`   | Liste  | Dosya içeriği ve başlangıç meta verilerindeki tüm etiketlerin listesi |

### `this` ile özelliklere erişim

Dosya özelliklerine erişmek için `this` nesnesini kullanın. `this`'in neye atıfta bulunduğu, tabanın nerede görüntülendiğine bağlıdır.

Taban ana içerik alanında açıldığında, `this` taban dosyasının kendi özelliklerine işaret eder. Örneğin, `this.file.folder` kullanmak tabanın bulunduğu klasör yolunu döndürür.

Taban başka bir dosyaya gömüldüğünde, `this` _gömme yapan_ dosyanın (tabanı içeren not veya Tuval) özelliklerine işaret eder. Örneğin, `this.file.name` kullanmak tabanın değil, gömme yapan dosyanın adını döndürür.

Taban bir kenar çubuğundayken, `this` ana içerik alanındaki etkin dosyaya atıfta bulunur. Bu, etkin dosyaya dayalı sorgular oluşturmanızı sağlar. Örneğin, geri bağlantılar panelini çoğaltmak için `file.hasLink(this.file)` kullanabilirsiniz.

## Operatörler

### Aritmetik operatörler

Aritmetik operatörler sayılar üzerinde aritmetik işlem gerçekleştirir. Örneğin, `radius * (2 * 3.14)`.

| Operatör | Açıklama   |
| -------- | ---------- |
| `+`      | toplama    |
| `-`      | çıkarma    |
| `*`      | çarpma     |
| `/`      | bölme      |
| `%`      | mod alma   |
| `( )`    | parantez   |

### Tarih aritmetiği

Tarihler, süre ekleyerek ve çıkararak değiştirilebilir. Süre birimleri birden fazla biçimi kabul eder:

| Birim                    | Süre    |
| ------------------------ | ------- |
| `y`, `year`, `years`     | yıl     |
| `M`, `month`, `months`   | ay      |
| `d`, `day`, `days`       | gün     |
| `w`, `week`, `weeks`     | hafta   |
| `h`, `hour`, `hours`     | saat    |
| `m`, `minute`, `minutes` | dakika  |
| `s`, `second`, `seconds` | saniye  |

Tarih nesnelerini değiştirmek veya kaydırmak için `+` veya `-` operatörünü bir süre dizesiyle kullanın. Örneğin, `date + "1M"` tarihe 1 ay ekler, `date - "2h"` ise tarihten 2 saat çıkarır.

Geçerli tarihi almak için genel [[Fonksiyonlar|fonksiyon]] `today()`, geçerli tarih ve saati almak için ise `now()` kullanılabilir.

- `now() + "1 day"` yürütme anından tam 24 saat sonrasını döndürür.
- `file.mtime > now() - "1 week"` dosya son bir hafta içinde değiştirilmişse `true` döndürür.
- `date("2024-12-01") + "1M" + "4h" + "3m"` `2025-01-01 04:03:00`'ı temsil eden bir Tarih nesnesi döndürür.
- İki tarih arasındaki milisaniye farkını almak için iki tarihi çıkarın, örneğin `now() - file.ctime`.
- Saat içeren bir Tarihin tarih kısmını almak için `datetime.date()` kullanın.
- Bir Tarih nesnesini biçimlendirmek için `format()` fonksiyonunu kullanın, örneğin `datetime.format("YYYY-MM-DD")`.

### Karşılaştırma operatörleri

Karşılaştırma operatörleri sayıları veya Tarih nesnelerini karşılaştırmak için kullanılabilir. Eşit ve eşit değil, yalnızca sayılar ve tarihlerle değil, her türlü değerle kullanılabilir.

| Operatör | Açıklama                |
| -------- | ----------------------- |
| `==`     | eşittir                 |
| `!=`     | eşit değil              |
| `>`      | büyüktür                |
| `<`      | küçüktür                |
| `>=`     | büyük veya eşittir      |
| `<=`     | küçük veya eşittir      |

### Mantıksal operatörler

Mantıksal operatörler, mantıksal değerleri birleştirmek veya tersine çevirmek için kullanılabilir ve doğru veya yanlış bir değer üretir.

| Operatör | Açıklama    |
| -------- | ----------- |
| `!`      | mantıksal değil |
| `&&`     | mantıksal ve    |
| \|\|     | mantıksal veya  |

## Fonksiyonlar

Formüllerde ve [[Görünümler|filtrelerde]] kullanılabilen [[Fonksiyonlar|fonksiyonların listesine]] bakın.

## Türler

Tabanlar, formüller ve filtreler tarafından özelliklere fonksiyon uygulamak için kullanılan bir tür sistemine sahiptir.

### Dizeler, sayılar ve boolean'lar

Dizeler, sayılar ve boolean'lar, oluşturmak için fonksiyon gerektirmeyen "ilkel" değerlerdir.

- Dizeler tek veya çift tırnak içine alınır, örneğin `"message"`.
- Sayılar rakam olarak yazılır ve isteğe bağlı olarak netlik için parantez içine alınabilir. Örneğin, `1` veya `(2.5)`.
- Boolean'lar tırnak olmadan `true` veya `false` olarak yazılır.

### Tarihler ve süreler

Tarihler, oluşturmak için kullanılan fonksiyona veya [[Özellikler|özelliğe]] atanmış türe bağlı olarak belirli bir tarihi veya tarih ve saati temsil eder.

- Bir tarih oluşturmak için `date` fonksiyonunu kullanın, örneğin `date("2025-01-01 12:00:00")`
- Bir tarihi değiştirmek için süre ekleyin veya çıkarın, örneğin `now() + "1 hour"` veya `today() + "7d"`
- Tarihleri karşılaştırma operatörleri (örn. `>` veya `<`) ve aritmetik operatörler kullanarak karşılaştırın (örneğin, `(now() + "1d") - now()` `86400000` milisaniye döndürür.)
- Bir tarihin bölümlerini çıkarmak için mevcut alanları (`now().hour`) veya kolaylık fonksiyonlarını (`now.time()`) kullanın.
- Tarih nesnelerinde birçok başka [[Fonksiyonlar|alan ve fonksiyon]] mevcuttur.

### Nesneler ve listeler

- `list()` fonksiyonunu kullanarak tek bir öğeyi listeye dönüştürün. Bu, liste veya tek değer karışımı içerebilen özellikler için özellikle yararlıdır.
- Liste öğelerine köşeli parantez ve 0 tabanlı dizin kullanarak erişin. Örneğin, `property[0]` listeden ilk öğeyi döndürür.
- Nesne öğelerine köşeli parantez ve öğe adı veya nokta gösterimi kullanarak erişin. Örneğin, `property.subprop` veya `property["subprop"]`.

### Dosyalar ve bağlantılar

[[Notları bağla|Wiki bağlantıları]], [[Özellikler|başlangıç meta verileri özelliklerinde]] otomatik olarak Bağlantı nesneleri olarak tanınır. Bağlantılar [[Görünümler|görünümde]] tıklanabilir bağlantı olarak oluşturulur.

- Bir bağlantı oluşturmak için genel `link` [[Fonksiyonlar|fonksiyonunu]] kullanın, örneğin `link("filename")` veya `link("https://obsidian.md")`.
- Herhangi bir dizeden bağlantı oluşturabilirsiniz, örneğin `link(file.ctime.date().toString())`.
- Görüntüleme metnini ayarlamak için isteğe bağlı bir dize veya simgeyi ikinci parametre olarak geçirin, örneğin `link("filename", "display")` veya `link("filename", icon("plus"))`.

Bir Dosya nesnesi, isteğe bağlı görüntüleme metniyle `file.asLink()` kullanılarak bağlantıya dönüştürülebilir.

Bağlantılar `==` ve `!=` ile karşılaştırılabilir. Aynı dosyaya işaret ettikleri sürece veya dosya arama sırasında mevcut değilse bağlantı metinleri aynı olmalıdır, eşdeğerdirler.

Bağlantılar `file` veya `this` gibi dosyalarla karşılaştırılabilir. Bağlantı dosyaya çözümlenirse eşit olurlar. Örneğin, `author == this`.

Bağlantılar ayrıca liste içerme kontrolünde de kullanılabilir, örneğin `authors.contains(this)`.

---
permalink: formulas
description: 'Formüller, diğer özelliklerdeki verileri kullanarak hesaplanmış özellikler oluşturmanızı sağlar. Hesaplamalar yapabilir, metinleri işleyebilir, tarihlerle çalışabilir ve daha fazlasını gerçekleştirebilirsiniz.'
---
Formüller, diğer [[Özellikler|özelliklerden]] gelen verileri kullanarak [[Tabanlara giriş|Tabanlarda]] hesaplanmış özellikler oluşturmanıza olanak tanır. Hesaplamalar yapabilir, metinleri işleyebilir, tarihlerle çalışabilir ve daha fazlasını gerçekleştirebilirsiniz.

## Formüller neler yapabilir

Formüller şunlarda yardımcı olabilir:

- **Değer hesaplama**, fiyat toplama, toplamları hesaplama veya matematik işlemleri gerçekleştirme.
- **Metin işleme**, dizeleri birleştirme, büyük/küçük harf değiştirme veya alt dizeler çıkarma.
- **Tarihlerle çalışma**, zaman farkları hesaplama, tarihleri biçimlendirme veya son tarihleri belirleme.
- **Mantık uygulama**, farklı değerler görüntülemek için koşullu ifadeler kullanma.
- **Listeleri işleme**, liste verilerini filtreleme, sıralama, eşleme veya toplama.

## Formül özelliği oluşturma

Bir formül özelliği oluşturmak için:

1. Tabanınızda araç çubuğundaki **Özellikler** seçeneğine tıklayın.
2. Menünün altındaki **Formül ekle** seçeneğine tıklayın.
3. Formül özelliğiniz için bir ad girin.
4. **Formül** alanına formülünüzü yazın.
5. İletişim kutusunu kapatın.

Formül düzenleyicisi, siz yazarken [[Fonksiyonlar|fonksiyon]] ve özellik adlarını otomatik tamamlayarak formül söz diziminizi doğrular. Formülünüz geçerli olduğunda yeşil bir onay işareti görünür.

Oluşturulduktan sonra, bir formül özelliğini tabanınızdaki diğer herhangi bir özellik gibi kullanabilirsiniz. [[Görünümler|Görünümlere]] ekleyin, filtrelerde kullanın, buna göre sıralayın ve daha fazlasını yapın.

## Formül yazma

Formül düzenleyicisinde özellikler, operatörler ve fonksiyonlar kullanarak bir ifade yazın.

### Özelliklere başvurma

Formüllerinizde farklı türde özelliklere başvurabilirsiniz:

- **Not özellikleri** — Bir notun [[Özellikler|başlangıç meta verilerinden]] gelen özellikler.
- **Dosya özellikleri** — `file.name`, `file.size` veya `file.mtime` gibi yerleşik özellikler.
- **Formül özellikleri** — `formula.formül_adı` kullanarak diğer formüller.

**Örnekler:**

- `price * quantity` — iki not özelliğini çarpma
- `file.name + " - " + description` — dosya adını bir not özelliğiyle birleştirme
- `formula.price_per_unit * 1.1` — başka bir formül özelliğini kullanma

### Operatörleri kullanma

**Aritmetik operatörler** sayılar üzerinde matematik işlemleri gerçekleştirir:

- `price + tax` — toplama
- `price - discount` — çıkarma
- `price * quantity` — çarpma
- `price / quantity` — bölme
- `(part / whole) * 100` — işlem önceliği için parantez kullanma

**Karşılaştırma operatörleri** değerleri karşılaştırır:

- `price > 100` — büyüktür
- `age < 18` — küçüktür
- `status == "Done"` — eşittir
- `status != "Done"` — eşit değildir
- `file.mtime > now() - '7d'` — tarihleri karşılaştırma

**Mantıksal operatörler** mantıksal koşulları birleştirir:

- `!completed` — değil
- `price > 0 && quantity > 0` — ve
- `urgent || important` — veya

[[Tabanlar söz dizimi#Operatörler|Tabanlar söz dizimi]] bölümünden daha fazlasını öğrenin.

### Fonksiyonları kullanma

Fonksiyonlar değerler üzerinde işlemler gerçekleştirir. Kullanılabilir fonksiyonlar, çalıştığınız değer türüne bağlıdır. [[Fonksiyonlar]] sayfasında tam listeyi görün.

**Yaygın fonksiyon kategorileri:**

- **Genel fonksiyonlar** — `if()`, `now()`, `date()`, `link()`, `max()`, `min()`
- **Dize fonksiyonları** — `contains()`, `replace()`, `split()`, `lower()`, `title()`
- **Sayı fonksiyonları** — `round()`, `ceil()`, `floor()`, `abs()`, `toFixed()`
- **Tarih fonksiyonları** — `format()`, `relative()`, `date()`, `time()`
- **Liste fonksiyonları** — `filter()`, `map()`, `sort()`, `join()`, `unique()`

**Örnekler:**

- `if(price, "$" + price.toFixed(2), "")` sayı biçimlendirmesiyle koşullu tanımlama.
- `file.name.lower()` küçük harfe dönüştürme.
- `tags.contains("urgent")` etiket listesinin bir değer içerip içermediğini kontrol etme.
- `due_date.format("YYYY-MM-DD")` tarihi biçimlendirme.

## Formül örnekleri

### Son tarih hesaplama

Bir projenin bitiş tarihini başlangıç tarihinden 2 hafta sonra olarak ayarlama:

```js
start_date + "2w"
```

### Gecikmiş durumu görüntüleme

Son tarih geçmişse ve durum "Done" değilse "Overdue" gösterme:

```js
if(due_date < now() && status != "Done", "Overdue", "")
```

### Para birimi biçimlendirme

Fiyatı 2 ondalık basamak ve para birimi simgesiyle görüntüleme:

```js
if(price, "$" + price.toFixed(2), "")
```

### Liste öğelerini sayma

Bir liste özelliğindeki öğe sayısını hesaplama:

```js
tasks.length
```

### Öncelik puanı hesaplama

Birden fazla faktörü bir öncelik puanında birleştirme:

```js
(impact * urgency) / effort
```

### Metin alanlarını birleştirme

Ad ve soyaddan tam ad oluşturma:

```js
first_name + " " + last_name
```

### Toplam maliyet hesaplama

Aylık maliyeti sahip olunan ay sayısıyla çarpma:

```js
monthlyUses * formula.Owned.round()
```

## Veri türleri

Formüller farklı veri türleriyle çalışır:

- **Dizeler** — Tırnak içindeki metin: `"hello"` veya `'world'`
- **Sayılar** — Sayısal değerler: `42`, `3.14`, `(2 + 2)`
- **Mantıksal değerler** — Doğru veya yanlış: `true`, `false`
- **Tarihler** — `date()`, `today()` veya `now()` ile oluşturulan
- **Listeler** — Değer koleksiyonları: `[1, 2, 3]`
- **Nesneler** — Anahtar-değer çiftleri: `{"name": "value"}`

Bir formülün çıktı türü, kullanılan veriler ve fonksiyonlar tarafından belirlenir.

## Diğer formüllere başvurma

Formüller, türetilmiş hesaplamalar oluşturarak diğer formüllere başvurabilir. Örneğin, `price_per_unit` adında bir formülünüz varsa:

```js
price / quantity
```

Buna başka bir formülde başvurabilirsiniz:

```js
formula.price_per_unit * 1.1
```

> [!warning] Döngüsel başvurulardan kaçının
> Bir formül, doğrudan veya diğer formüller aracılığıyla dolaylı olarak kendisine başvuramaz.

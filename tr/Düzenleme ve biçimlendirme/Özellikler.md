---
permalink: properties
cssclasses:
  - soft-embed
publish: true
mobile: false
description: 'Özellikler, bir not hakkındaki bilgileri düzenlemenizi sağlar. Özellikler; metin, bağlantılar, tarihler, onay kutuları ve sayılar gibi yapılandırılmış veriler içerir.'
---
Özellikler, bir not hakkındaki bilgileri düzenlemenizi sağlar. Özellikler; metin, bağlantılar, tarihler, onay kutuları ve sayılar gibi yapılandırılmış veriler içerir. Özellikler ayrıca yapılandırılmış verilerinizle faydalı işler yapabilen [[Topluluk Eklentileri]] ile birlikte kullanılabilir.

## Bir nota özellik ekleme

Bir nota özellik eklemenin birkaç yolu vardır:

- **Dosya özellikleri ekle** [[Komut Paleti|komutunu]] kullanın.
- **`Cmd/Ctrl+;`** [[Kısayol tuşları|klavye kısayolunu]] kullanın.
- **Diğer eylemler** menüsünden (üç nokta simgesiyle veya sekmeye sağ tıklayarak açılır) **Dosya özellikleri ekle** seçeneğini belirleyin.
- Dosyanın en başına `---` yazın.

Bir özellik eklediğinizde, dosyanın üst kısmında iki girişe sahip bir satır görünecektir: özellik _adı_ ve özellik _değeri_.

Ad için istediğiniz herhangi bir şeyi seçebilirsiniz. Obsidian birkaç varsayılan özellik sunar: `tags`, `cssclasses` ve `aliases`.

Özellik adını seçtikten sonra ona bir değer verebilirsiniz.

### Özellik tipleri

Ad ve değere ek olarak, özelliklerin bir _tipi_ de vardır. Bir özelliğin tipi, hangi tür değerleri saklayabileceğini ve Obsidian'ın bunları nasıl işlediğini belirler. Bir özelliğin tipini değiştirmek için özellik adının yanındaki tip simgesine tıklayın ve farklı bir seçenek belirleyin. Özellik tiplerini [[Özellikler görünümü]] çekirdek eklentisini kullanarak da yönetebilirsiniz.

Obsidian aşağıdaki özellik tiplerini destekler:

- **[[#Metin]]**
- **[[#Liste]]**
- **[[#Sayı]]**
- **[[#Onay kutusu]]**
- **[[#Tarih]]**
- **[[#Tarih ve zaman]]**
- **[[#Etiketler]]**

Bir özellik tipi bir özellik adına atandığında, kasanızdaki o ada sahip tüm özellikler aynı tipi kullanacaktır.

## Gelişmiş kullanımlar

### Özelliklerde arama

Özelliklerin, diğer arama terimleri ve operatörlerle birlikte kullanabileceğiniz kendi [[Ara|arama söz dizimi]] vardır. [[Ara#Özelliklerde arama|Özellikler için arama söz dizimine bakın]].

### Şablonlar

[[Şablonlar|Şablonlara]] özellikler ekleyebilirsiniz.

Etkin nota bir şablon eklediğinizde, şablondaki tüm özellikler nota eklenecektir. Obsidian ayrıca notunuzda bulunan özellikleri şablondaki özelliklerle birleştirecektir. ^templates-properties

### Özellikleri yeniden adlandırma

[[Özellikler görünümü|Tüm özellikler görünümünde]] bir özelliğe sağ tıklayarak onu yeniden adlandırabilirsiniz.

### Görüntüleme modları

Özelliklerin notunuzda nasıl görüntüleneceğini **[[Ayarlar]] → Düzenleyici → Dosyadaki özellikler** bölümüne giderek değiştirebilirsiniz. Seçenekler şunlardır:

- **Görünür** (varsayılan) – varsa özellikleri notun üst kısmında gösterir.
- **Gizli** – özellikleri gizler, yine de kenar çubuğunda [[Özellikler görünümü]] aracılığıyla görüntülenebilir.
- **Kaynak** – özellikleri düz metin YAML biçiminde gösterir.

### CSS kod parçaları

Belirli notların görünümünü değiştirmek için [[CSS kod parçaları]] kullanabilirsiniz.

### Desteklenmeyen özellikler

Şu anda Obsidian'da birkaç özellik desteklenmemektedir:

- **İç içe özellikler**: İç içe özellikleri görüntülemek için [[Görünümler ve düzenleme modu#Kaynak modu|kaynak modunu]] kullanmanızı öneririz.
- **Toplu özellik düzenleme**: [[Özellikler görünümü]] dışında derinlemesine toplu düzenleme için VSCode, betikler ve topluluk eklentileri gibi toplu düzenleme araçlarını kullanmanızı öneririz.
- **Özelliklerde Markdown**: Bu kasıtlı bir sınırlamadır çünkü özellikler hem insan hem de makine tarafından okunabilir küçük, atomik bilgi parçaları için tasarlanmıştır.

## Klavye kısayolları

### Özellik ekleme

| Eylem | Klavye kısayolu |
|---|---|
|Yeni özellik ekle|`Cmd + ;`|

### Özellikler arasında gezinme

Bir özellik odaklandığında

| Eylem | Klavye kısayolu |
|---|---|
|Sonraki özelliğe odaklan|`Aşağı ok` veya `Tab`|
|Önceki özelliğe odaklan|`Yukarı ok` veya `Shift+Tab`|
|Düzenleyiciye atla|`Alt+Aşağı ok`|

### Özellikleri seçme

| Eylem | Klavye kısayolu |
|---|---|
|Seçimi yukarı genişlet|`Shift+Yukarı ok`|
|Seçimi aşağı genişlet|`Shift+Aşağı ok`|
|Tümünü seç|`Cmd+A`|

### Özellikleri düzenleme

| Eylem | Klavye kısayolu |
|---|---|
|Özellik adını düzenle|`Sol ok`|
|Özellik değerini düzenle|`Sağ ok`|
|Özelliğe odaklan|`Escape`|
|Özelliği sil|`Cmd+Backspace`<br><br>herhangi bir özellik seçiliyse, bunun yerine seçimi siler.|
|Geri al|`Cmd+Z`|
|Yinele|`Cmd+Shift+Z`|

### Vim (gelişmiş)

| Eylem | Klavye kısayolu |
|---|---|
|Aşağı taşı|`j`|
|Yukarı taşı|`k`|
|Anahtara odaklan|`h`|
|Değere odaklan|`l`|
|Değere odaklan (İmleç sonda)|`A`|
|Değere odaklan (İmleç başta)|`i`|
|Yeni özellik oluştur|`o`|

## Özellik biçimi

Özellikler, dosyanın üst kısmında [YAML](https://yaml.org/) biçiminde saklanır. YAML, hem insanlar hem de bilgisayarlar tarafından kolayca okunabilen popüler bir biçimdir.

Özellik adları, değerlerinden iki nokta üst üste ve ardından bir boşluk ile ayrılır:

```yaml
---
name: value
---
```

Her ad-değer çiftinin sırası önemli olmasa da, her ad bir not içinde benzersiz olmalıdır. Örneğin, birden fazla `tags` özelliğine sahip olamazsınız.

Değerler [[#Metin|metin]], [[#Sayı|sayılar]], [[#Onay kutusu|onay kutuları]], [[#Tarih|tarihler]], [[#Tarih ve zaman|tarih ve zamanlar]] veya [[#Liste|listeler]] olabilir.

### Metin

Metin özellikleri tek satırlık metin içerir. Metin özelliklerinde Markdown biçimlendirmesi oluşturulmaz. Metin özelliklerinde kullanılan diyez işaretleri etiket oluşturmaz.

Metin özellikleri URL'ler ve `[[Bağlantı]]` söz dizimini kullanan [[Dahili bağlantılar]] içerebilir. Metin özelliklerindeki [[Dahili bağlantılar]] tırnak işaretleri ile çevrelenmelidir. Manuel olarak özelliklere dahili bağlantılar girerseniz Obsidian bunları otomatik olarak ekler, ancak şablonlama eklentileri kullanırken eklemeye dikkat edin.

```yaml
---
title: A New Hope
link: "[[Episode IV]]"
url: https://www.example.com
---
```

### Liste

Liste özellikleri birden fazla değer içerir. Bir listedeki her değer kendi satırında, bir tire (-) ve boşlukla başlayarak görünür.

Liste değerleri metin, sayı ve [[Dahili bağlantılar]] içerebilir. Liste özelliklerinde [[Dahili bağlantılar]] kullanırken bunları tırnak işaretleri ile çevreleyin.

```yaml
---
cast: 
  - Mark Hamill
  - Harrison Ford
  - Carrie Fisher
links:
  - "[[Link]]" 
  - "[[Link2]]"
---
```

### Sayı

Sayı tipindeki özellikler her zaman bir gerçek sayı olmalıdır, operatörlü bir ifade değil. Tam sayılar ve ondalık sayılar kabul edilir.

```yaml
---
year: 1977
pie: 3.14
---
```

### Onay kutusu

Onay kutusu özellikleri `true` veya `false` değerindedir. Canlı önizlemede bu, bir onay kutusu olarak görüntülenir.

```yaml
---
favorite: true
reply: false
last: # Belirsiz değer; genellikle false olarak değerlendirilir
```

### Tarih

Tarih özellikleri aşağıdaki biçimde saklanır:

```yaml
---
date: 2020-08-21
---
```

Tarih seçici, işletim sisteminizin varsayılan tarih ve saat biçimini takip eder. Bunu sistem tercihlerinizden değiştirebilirsiniz:

> [!info]- Windows
> **[[Ayarlar]] → Saat ve Dil → Dil ve Bölge → Bölgesel Biçim → Biçimleri Değiştir**
> 
> ![[Windows-OS-DateTime.png#interface]]

> [!info]- Mac OS
> **Sistem Tercihleri → Dil ve Bölge → Tarih biçimi**
> 
> ![[Mac-OS-DateTime.png|450]]

[[Günlük Notlar]] eklentisi etkinleştirildiğinde, tarih özelliği ayrıca o tarihe karşılık gelen günlük nota bir dahili bağlantı olarak işlev görecektir.

![[Günlük Notlar#^daily-notes-date]]

### Tarih ve zaman

Tarih ve zaman özellikleri hem bir tarih hem de belirli bir saat içerir ve aşağıdaki biçimde saklanır:

```yaml
---
time: 2020-08-21T10:30:00
---
```

[[#Tarih|Tarih özellikleri]] gibi, tarih ve saat seçici işletim sisteminizin varsayılan biçimini takip eder. Bunu sistem tercihlerinizden değiştirebilirsiniz.

### Etiketler

Etiketler özellikleri, yalnızca `tags` özelliği tarafından kullanılan özel bir özellik tipidir. Bu özellik tipi diğer özelliklere atanamaz.

Etiketler özellikleri bir liste olarak biçimlendirilir ve her etiket kendi satırında bir tire (-) ve boşlukla başlar.

```yaml
---
tags: 
  - journal
  - personal
  - draft
---
```

`tags` özelliği, Obsidian'ın [[#Varsayılan özellikler]]inden biridir. Obsidian'da etiket kullanımı hakkında daha fazla bilgi için [[Etiketler]] sayfasına bakın.

### JSON özellikleri

Özellikleri tanımlamak için YAML kullanmanızı önersek de, [JSON](https://www.json.org/) kullanarak da özellik tanımlayabilirsiniz:

```json
---
{
  "tags": ["journal"],
  "publish": false
}
---
```

JSON bloğunun okunacağını, yorumlanacağını ve YAML olarak kaydedileceğini unutmayın.

## Varsayılan özellikler

Obsidian bir dizi varsayılan özellik ile birlikte gelir:

| Özellik     | Tip | Açıklama                                                  |
| ------------ | ---- | ------------------------------------------------------------ |
| `tags`       | Liste | Bkz. [[Etiketler\|Etiketler]].                   |
| `aliases`    | Liste | Bkz. [[Takma adlar]].                                             |
| `cssclasses` | Liste | [[CSS kod parçaları]] kullanarak tek tek notları stillendirmenize olanak tanır. |

### Obsidian Publish için özellikler

Aşağıdaki varsayılan özellikler [[Obsidian Publish'e giriş|Obsidian Publish]] ile kullanılabilir:

| Özellik      | Açıklama                                                                                                |
| ------------- | ---------------------------------------------------------------------------------------------------------- |
| `publish`     | Bkz. [[İçeriğinizi yayınlayın#Yayınlanacak verileri otomatik olarak seçme\|Yayınlanacak verileri otomatik olarak seçme]]. |
| `permalink`   | Bkz. [[Kalıcı bağlantılar\|Kalıcı bağlantılar]].                                                                            |
| `description` | Bkz. [[Sosyal medya bağlantı önizlemeleri#Açıklama\|Açıklama]].                                               |
| `image`       | Bkz. [[Sosyal medya bağlantı önizlemeleri#Görsel\|Görsel]].                                                           |
| `cover`       | Bkz. [[Sosyal medya bağlantı önizlemeleri#Görsel\|Görsel]].                                                           |

### Kullanımdan kaldırılan özellikler

Bu özellikler Obsidian 1.4'te kullanımdan kaldırılmıştır ve modern eşdeğerleriyle değiştirilmelidir. [[#Varsayılan özellikler]] olarak destekleri Obsidian 1.9'da kaldırılmıştır.

| Özellik | Açıklama |
|-|-|
| `tag` | `tags` için kullanımdan kaldırılmış takma ad. |
| `alias` | `aliases` için kullanımdan kaldırılmış takma ad. |
| `cssclass` | `cssclasses` için kullanımdan kaldırılmış takma ad. |

> [!tip] Kasanızdaki dosyaları [[#Varsayılan özellikler]] biçimine dönüştürmeniz gerekiyorsa, kasanızı toplu olarak değiştirmek için [[Markdown formatı içe aktarıcı]] kullanabilirsiniz.

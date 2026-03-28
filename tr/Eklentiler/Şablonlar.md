---
permalink: plugins/templates
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Şablonlar, etkin notunuza önceden tanımlanmış metin parçacıkları eklemenizi sağlayan bir Çekirdek eklentiler|çekirdek eklentidir.'
---
[[Şablonlar]], etkin notunuza önceden tanımlanmış metin parçacıkları eklemenizi sağlayan bir [[Yerleşik Eklentiler|çekirdek eklenti]]dir.

## Şablon klasörünüzü ayarlayın

1. Sol alt köşede **[[Ayarlar]]** ![[lucide-cog.svg#icon]] simgesine tıklayın.
2. **Yerleşik Eklentiler → Şablonlar → Şablon klasör konumu** altında, şablonlarınızı içeren klasörü girin.

## Şablon değişkenleri

_Şablon değişkenleri_ kullanarak şablonlarınıza dinamik bilgi ekleyebilirsiniz. Şablon değişkeni içeren bir şablon eklediğinizde, Şablonlar bunu karşılık gelen değeriyle değiştirir.

| Değişken    | Açıklama                                              |
|-------------|-------------------------------------------------------|
| `{{title}}` | Etkin notun başlığı.                                  |
| `{{date}}`  | Bugünün tarihi. **Varsayılan biçim:** `YYYY-MM-DD`.   |
| `{{time}}`  | Geçerli saat. **Varsayılan biçim:** `HH:mm`.          |

Hem `{{date}}` hem de `{{time}}`, bir _biçim dizesi_ kullanarak varsayılan biçimi değiştirmenize olanak tanır.

Bir biçim dizesi ayarlamak için iki nokta üst üste (`:`) ve ardından [Moment.js biçim belirteçleri](https://momentjs.com/docs/#/displaying/format/) dizesi ekleyin, örneğin `{{date:YYYY-MM-DD}}`.

`{{date}}` ve `{{time}}` ifadelerini biçim dizeleriyle birbirinin yerine kullanabilirsiniz, örneğin `{{time:YYYY-MM-DD}}`.

Varsayılan tarih ve saat biçimlerini **[[Ayarlar]] → Şablonlar → Tarih biçimi** ve **[[Ayarlar]] → Şablonlar → Zaman formatı** altından değiştirebilirsiniz. ^template-settings-date-time-formatting

> [!tip] İpucu
> `{{date}}` ve `{{time}}` şablon değişkenlerini [[Günlük Notlar]] ve [[Benzersiz not oluşturucu]] eklentilerinde de kullanabilirsiniz.

## Şablon oluşturun

[[#Şablon klasörünüzü ayarlayın|Şablon klasöründe]], şablonu kullandığınızda görünmesini istediğiniz metni içeren bir [[Notları yönet#Yeni not oluştur|not oluşturun]]. Geçerli tarih gibi dinamik metinler için [[#Şablon değişkenleri|şablon değişkenleri]] kullanabilirsiniz.

Örneğin, ders notları için bir şablon:

```markdown
---
topic: 
date: "{{date}}"
course: 
tags:
  - studies
---

# {{title}}

## Temel Kavramlar


## Önemli Detaylar


## Örnekler


## Sorular
- 

## Özet


## İlgili Konular
- [[]]
```

## Etkin nota şablon ekleme

**Önemli:** Bir şablon eklemek için önce [[#Şablon klasörünüzü ayarlayın|şablon klasörünüzü ayarlamanız]] gerekir.

1. Araç çubuğunda **Şablon ekle**'ye tıklayın.
2. Etkin nottaki imleç konumuna eklenecek şablonu seçin.

[[Komut Paleti]] veya [[Kısayol tuşları#Klavye kısayolu ayarlama|özel klavye kısayolu]] kullanarak şablon eklemek için `Şablonlar: Şablon ekle` komutunu kullanın.

Şablonun içeriği geçerli imleç konumunuza eklenir. İmleciniz not gövdesinde değilse, içerik son imleç konumunuza eklenir.

### Şablon özellikleri

![[Özellikler#^templates-properties]]

## Etkin nota geçerli tarih ve saati ekleme

Geçerli tarih ve saati mevcut imleç konumunuza eklemek için `Şablonlar: Geçerli tarihi ekle` ve `Şablonlar: Geçerli saati ekle` komutlarını kullanın. `Şablon ekle` komutu gibi bu da [[Komut Paleti]] veya [[Kısayol tuşları#Klavye kısayolu ayarlama|özel klavye kısayolu]] ile yapılabilir.

Eklenen tarih ve saat, [[#^template-settings-date-time-formatting|eklenti ayarlarında belirlenen biçimlendirmeyi]] kullanır.

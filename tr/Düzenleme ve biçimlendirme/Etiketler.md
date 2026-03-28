---
permalink: tags
---
Etiketler, istediğiniz notları hızlıca bulmanıza yardımcı olan anahtar kelimeler veya konulardır.

## Bir nota etiket ekleme

Bir etiket oluşturmak için düzenleyiciye bir kare işareti (`#`) ve ardından bir anahtar kelime yazın. Örneğin, `#toplantı`.

Etiketleri `tags` [[Özellikler|özelliğini]] kullanarak da ekleyebilirsiniz. YAML'daki etiketler her zaman liste olarak biçimlendirilmelidir:

```yaml
---
tags:
  - tarif
  - yemek
---
```

## Etiketleri kullanarak not bulma

[[Ara]] eklentisini kullanarak not bulmak için arama teriminizde `tag` [[Ara#Arama operatörleri|arama operatörünü]] kullanın, örneğin `tag:#toplantı`.

Notlarınızdaki etiketlere tıklayarak da etiket arayabilirsiniz.

[[Etiket paneli|Etiket paneli]] eklentisini kullanarak not bulmak için [[Komut Paleti]]'nde **Etiketler: Etiket panelini göster**'i seçin ve ardından aramak istediğiniz etiketi seçin.

## İç içe etiketler

İç içe etiketler, ilgili etiketleri bulmayı ve filtrelemeyi kolaylaştıran etiket hiyerarşileri tanımlar.

Etiket adında eğik çizgi (`/`) kullanarak iç içe etiketler oluşturun, örneğin `#gelen-kutusu/okunacak` ve `#gelen-kutusu/işleniyor`.

- [[Ara]]'da `tag:gelen-kutusu` hem `#gelen-kutusu` hem de `#gelen-kutusu/okunacak` gibi tüm iç içe etiketlerle eşleşir.
- [[Etiket paneli]]'nde iç içe etiketler üst etiketlerine ait olarak gösterilir.
- [[Tabanlara giriş|Tabanlar]]'da iç içe etiketler [[Fonksiyonlar#hasTag|`hasTag`]] fonksiyonu tarafından tanınır, dolayısıyla `file.hasTag("a")` hem `#a` hem de `#a/b` ile eşleşir.

## Etiket biçimi

Etiketlerinizde aşağıdaki karakterlerden herhangi birini kullanabilirsiniz:

- Alfabetik harfler
- Sayılar
- Alt çizgi (`_`)
- Kısa çizgi (`-`)
- [[#İç içe etiketler]] için eğik çizgi (`/`)
- Emoji ve diğer semboller dahil yaygın olarak kabul edilen Unicode karakterleri

Etiketler en az bir sayısal olmayan karakter içermelidir. Örneğin, #1984 geçerli bir etiket değildir, ancak #y1984 geçerlidir.

Etiketler büyük/küçük harfe duyarsızdır. Örneğin, #etiket ve #ETİKET aynı olarak değerlendirilir.

> [!note]
> Etiketler [[Etiket paneli]]'nde ilk oluşturuldukları harf düzeniyle görüntülenir.
> Örneğin, #Etiket ve ardından #ETİKET oluşturursanız, her ikisi için de #Etiket görüntülenir.

Etiketler boşluk içeremez. İki veya daha fazla kelimeyi ayırmak için bunun yerine aşağıdaki biçimleri kullanabilirsiniz:

- #camelCase
- #PascalCase
- #snake_case
- #kebab-case

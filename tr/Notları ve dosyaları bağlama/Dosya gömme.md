---
permalink: embeds
cssclasses:
  - soft-embed
---
Gömülü dosyalar içeriklerini bir not içinde satır içi olarak görüntüler ve kaynak dosya değiştiğinde güncel kalır.

Kasanızdaki bir dosyayı gömmek için bir [[Dahili bağlantılar|dahili bağlantının]] önüne ünlem işareti (`!`) ekleyin. [[Kabul edilen dosya biçimleri|Kabul edilen dosya biçimlerinden]] herhangi birindeki dosyaları gömebilirsiniz.

> [!tip]- Sürükle ve Bırak ile Gömme
> Masaüstünde, desteklenen dosyaları otomatik olarak gömmek için doğrudan notunuza sürükleyip bırakabilirsiniz.

## Bir notu başka bir nota gömme

Bir notu gömmek için:

```md
![[Dahili bağlantılar]]
```

Ayrıca belirli [[Dahili bağlantılar#Bir nottaki başlığa bağlantı verme|başlıkları]] ve [[Dahili bağlantılar#Bir nottaki bloğa bağlantı verme|blokları]] da gömebilirsiniz.

```md
![[Dahili bağlantılar#^b15695]]
```

Aşağıdaki metin gömülü bir blok örneğidir:

![[Dahili bağlantılar#^b15695]]

## Bir nota görsel gömme

Bir görsel gömmek için:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Bağlantı hedefine `|640x480` ekleyerek görsel boyutlarını değiştirebilirsiniz; burada 640 genişlik ve 480 yüksekliktir.

```md
![[Engelbart.jpg|100x145]]
```

Yalnızca genişliği belirtirseniz, görsel orantılı olarak ölçeklenir. Örneğin, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Harici olarak barındırılan bir görseli Markdown bağlantısı kullanarak da gömebilirsiniz. Genişlik ve yüksekliği wiki bağlantısıyla aynı sözdizimini kullanarak kontrol edebilirsiniz.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Bir nota ses dosyası gömme

Bir ses dosyası gömmek için:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Bir nota PDF gömme

Bir PDF gömmek için:

```md
![[Document.pdf]]
```

Bağlantı hedefine `#page=N` ekleyerek PDF'de belirli bir sayfayı da açabilirsiniz; burada `N` sayfa numarasıdır:

```md
![[Document.pdf#page=3]]
```

Ayrıca bağlantı hedefine `#height=[sayı]` ekleyerek gömülü PDF görüntüleyicisinin yüksekliğini piksel cinsinden belirleyebilirsiniz. Örneğin:

```md
![[Document.pdf#height=400]]
```

## Bir nota tuval gömme

Bir [[Tuval|tuval]] gömmek için:

```md
![[My canvas.canvas]]
```

> [!info]+ Tuval gömmeleri yalnızca şekilleri gösterir
> Gömülü tuvaller şekilleri görüntüler ancak kartların içindeki metni göstermez. Tuvali tam olarak görüntülemek için doğrudan açın.

## Bir nota liste gömme

Farklı bir nottan bir liste gömmek için, önce listenize bir [[Dahili bağlantılar#Bir nottaki bloğa bağlantı verme|blok tanımlayıcısı]] ekleyin:

```md

- liste öğesi 1
- liste öğesi 2

^my-list-id
```

Ardından blok tanımlayıcısını kullanarak listeye bağlantı verin:

```md
![[Notum#^my-list-id]]
```

## Arama sonuçlarını gömme

![[Ara#Arama sonuçlarını bir nota gömme]]

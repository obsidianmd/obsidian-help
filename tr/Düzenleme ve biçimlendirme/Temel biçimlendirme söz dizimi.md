---
permalink: syntax
publish: true
mobile: true
description: Markdown kullanarak Obsidian'daki notlarınıza temel biçimlendirme uygulamayı öğrenin.
---
Notlarınıza temel biçimlendirmeyi [Markdown](https://daringfireball.net/projects/markdown/) kullanarak nasıl uygulayacağınızı öğrenin. Daha gelişmiş biçimlendirme söz dizimi için [[Gelişmiş biçimlendirme söz dizimi]] bölümüne bakın.

## Paragraflar

Markdown'da paragraf oluşturmak için metin blokları arasında **boş bir satır** kullanın. Boş bir satırla ayrılan her metin bloğu ayrı bir paragraf olarak kabul edilir.

```md
Bu bir paragraftır.

Bu başka bir paragraftır.
```

Bu bir paragraftır.

Bu başka bir paragraftır.

Metin satırları arasındaki boş bir satır ayrı paragraflar oluşturur. Bu, Markdown'daki varsayılan davranıştır.

> [!tip]- Birden fazla boşluk
> Paragraflar içindeki ve arasındaki birden fazla ardışık boşluk, [[Görünümler ve düzenleme modu#Okuma görünümü|Okuma görünümünde]] veya [[Obsidian Publish'e giriş|Obsidian Publish]] sitelerinde görüntülendiğinde tek bir boşluğa daraltılır.
> 
> ```md
> Birden          fazla          boşluk
> 
> 
> 
> ve paragraflar arasında birden fazla yeni satır.
> ```
> 
> > Birden          fazla          boşluk
> > 
> > 
> > 
> > ve paragraflar arasında birden fazla yeni satır.
> 
> Boşlukların daraltılmasını önlemek veya birden fazla boş alan eklemek istiyorsanız `&nbsp;` (bölünmez boşluk) veya `<br>` (satır sonu) HTML etiketlerini kullanabilirsiniz.

### Satır sonları

Obsidian'da varsayılan olarak `Enter` tuşuna bir kez basmak notunuzda yeni bir satır oluşturur, ancak bu, tipik Markdown davranışını izleyerek işlenmiş çıktıda aynı paragrafın *devamı* olarak kabul edilir. Yeni bir paragraf başlatmadan bir paragraf *içinde* satır sonu eklemek için şunları yapabilirsiniz:

- `Enter` tuşuna basmadan önce satırın sonuna **iki boşluk** ekleyin veya
- Doğrudan satır sonu eklemek için `Shift+Enter` kısayolunu kullanın.

> [!question]- Neden birden fazla `Enter` basışı okuma görünümünde daha fazla satır sonu oluşturmuyor?
> Markdown'da tek bir `Enter` yoksayılır ve ardışık birden fazla `Enter` basışı yalnızca tek bir yeni paragraf oluşturur. Bu davranış, Markdown'ın yumuşak sarmalama kuralıyla uyumludur; burada fazladan boş satırlar ek satır sonları veya paragraflar oluşturmaz—tek bir paragraf sonuna daraltılır. Bu, Markdown'ın metni varsayılan olarak işleme biçimidir ve paragrafların beklenmedik kesintiler olmadan doğal bir şekilde akmasını sağlar.

Obsidian, Obsidian'ın standart Markdown spesifikasyonunu satır sonları için takip etmesini sağlayan bir **[[Ayarlar#Katı kurallı yeni satırlar|Katı kurallı yeni satırlar]]** ayarı içerir.

Bu özelliği etkinleştirmek için:

1. **[[Ayarlar]]**'ı açın.
2. **Düzenleyici** sekmesine gidin.
3. **Katı Kurallı Yeni Satırlar**'ı etkinleştirin.

Obsidian'da **Katı Kurallı Yeni Satırlar** etkinleştirildiğinde, satır sonları satırların nasıl ayrıldığına bağlı olarak üç farklı davranış gösterir:

**Boşluksuz tek dönüş**: Sonunda boşluk olmadan tek bir `Enter`, iki ayrı satırı işlendiğinde tek bir satıra birleştirir.

```md
birinci satır
ikinci satır
```

Şu şekilde işlenir:

birinci satır ikinci satır

**İki veya daha fazla sondaki boşlukla tek dönüş**: `Enter` tuşuna basmadan önce ilk satırın sonuna iki veya daha fazla boşluk eklerseniz, iki satır aynı paragrafın parçası kalır ancak bir satır sonu (HTML `<br>` öğesi) ile ayrılır. Bu örnekte boşlukları temsil etmek için iki alt çizgi kullanacağız.

```md
üçüncü satır__  
dördüncü satır
```

Şu şekilde işlenir:

üçüncü satır<br>
dördüncü satır

**Çift dönüş (sondaki boşluklu veya boşluksuz)**: `Enter`'a iki kez (veya daha fazla) basmak, ilk satırın sonuna boşluk ekleyip eklemediğinize bakılmaksızın satırları iki ayrı paragraf (HTML `<p>` öğeleri) olarak ayırır.

```md
beşinci satır

altıncı satır
```

Şu şekilde işlenir:

<p>beşinci satır</p>
<p>altıncı satır</p>

## Başlıklar

Bir başlık oluşturmak için başlık metninizden önce en fazla altı adet `#` sembolü ekleyin. `#` sembollerinin sayısı başlığın düzeyini belirler ([[Anahat]]'ta gösterildiği gibi).

```md
# Bu birinci düzey başlıktır
## Bu ikinci düzey başlıktır
### Bu üçüncü düzey başlıktır
#### Bu dördüncü düzey başlıktır
##### Bu beşinci düzey başlıktır
###### Bu altıncı düzey başlıktır
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>Bu birinci düzey başlıktır</h1>
<h2>Bu ikinci düzey başlıktır</h2>
<h3>Bu üçüncü düzey başlıktır</h3>
<h4>Bu dördüncü düzey başlıktır</h4>
<h5>Bu beşinci düzey başlıktır</h5>
<h6>Bu altıncı düzey başlıktır</h6>

## Kalın, italik, vurgulama

Metin biçimlendirmesi [[Düzenleme kısayolları]] kullanılarak da uygulanabilir.

| Stil | Söz Dizimi | Örnek | Çıktı |
|-|-|-|-|
| Kalın | `** **` veya `__ __` | `**Kalın metin**` | **Kalın metin** |
| İtalik | `* *` veya `_ _`  | `*İtalik metin*` | *İtalik metin* |
| Üstü çizili | `~~ ~~` |  `~~Üstü çizili metin~~` | ~~Üstü çizili metin~~ |
| Vurgulama | `== ==` |  `==Vurgulanmış metin==` | ==Vurgulanmış metin== |
| Kalın ve iç içe italik | `** **` ve `_ _`  | `**Kalın metin ve _iç içe italik_ metin**` | **Kalın metin ve _iç içe italik_ metin** |
| Kalın ve italik | `*** ***` veya `___ ___` |  `***Kalın ve italik metin***` | ***Kalın ve italik metin*** |

Biçimlendirmenin önüne ters eğik çizgi `\` eklenerek düz metin olarak görüntülenmesi sağlanabilir.

\*\*Bu satır kalın olmayacak\*\*

```markdown
\*\*Bu satır kalın olmayacak\*\*
```

\**Bu satır italik olacak ve yıldızları gösterecek*\*

```markdown
\**Bu satır italik olacak ve yıldızları gösterecek*\*
```

## Dahili bağlantılar

Obsidian, notlar arasında [[Dahili bağlantılar]] için iki biçimi destekler:

- Wiki bağlantısı: `[[Hareketin üç yasası]]`
- Markdown: `[Hareketin üç yasası](Hareketin%20üç%20yasası.md)`

## Harici bağlantılar

Harici bir URL'ye bağlantı vermek istiyorsanız, bağlantı metnini köşeli parantez (`[ ]`) ile, ardından URL'yi normal parantez (`( )`) ile çevreleyerek satır içi bağlantı oluşturabilirsiniz.

```md
[Obsidian Yardım](https://help.obsidian.md)
```

[Obsidian Yardım](https://help.obsidian.md)

Ayrıca bir [[Obsidian URI|Obsidian URI]]'ye bağlantı vererek diğer kasalardaki dosyalara harici bağlantılar oluşturabilirsiniz.

```md
[Not](obsidian://open?vault=MainVault&file=Note.md)
```

### Bağlantılarda boşlukları kaçırma

URL'niz boşluk içeriyorsa, bunları `%20` ile değiştirerek kaçırmanız gerekir.

```md
[Notum](obsidian://open?vault=MainVault&file=My%20Note.md)
```

URL'yi açılı parantezlerle (`< >`) sararak da kaçırabilirsiniz.

```md
[Notum](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Harici görseller

[[#Harici bağlantılar|Harici bağlantı]]nın önüne `!` sembolü ekleyerek harici URL'lerden görsel ekleyebilirsiniz.

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Bağlantı hedefine `|640x480` ekleyerek görsel boyutlarını değiştirebilirsiniz; burada 640 genişlik ve 480 yüksekliktir.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Yalnızca genişliği belirtirseniz, görsel orijinal en-boy oranına göre ölçeklenir. Örneğin:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- İpucu
> Kasanızın içinden bir görsel eklemek istiyorsanız, [[Dosya gömme#Bir nota görsel gömme|bir nota görsel gömme]] işlemini de kullanabilirsiniz.

## Alıntılar

Metnin önüne `>` sembolü ekleyerek alıntı yapabilirsiniz.

```md
> İnsanlar giderek daha karmaşık ve acil sorunlarla karşılaşmaktadır ve bu sorunlarla başa çıkmadaki etkinlikleri, toplumun istikrarı ve süregelen ilerlemesi için kritik bir konudur.

\- Doug Engelbart, 1961
```

> İnsanlar giderek daha karmaşık ve acil sorunlarla karşılaşmaktadır ve bu sorunlarla başa çıkmadaki etkinlikleri, toplumun istikrarı ve süregelen ilerlemesi için kritik bir konudur.

\- Doug Engelbart, 1961

> [!tip]- İpucu
> Alıntınızın ilk satırına `[!info]` ekleyerek alıntınızı bir [[Belirtme çizgileri|vurgulu bloğa]] dönüştürebilirsiniz.

## Listeler

Metnin önüne `-`, `*` veya `+` ekleyerek sırasız liste oluşturabilirsiniz.

```md
- Birinci liste öğesi
- İkinci liste öğesi
- Üçüncü liste öğesi
```

- Birinci liste öğesi
- İkinci liste öğesi
- Üçüncü liste öğesi

Sıralı liste oluşturmak için her satırın başına bir sayı ve ardından `.` veya `)` sembolü koyun.

```md
1. Birinci liste öğesi
2. İkinci liste öğesi
3. Üçüncü liste öğesi
```

1. Birinci liste öğesi
2. İkinci liste öğesi
3. Üçüncü liste öğesi

```md
1) Birinci liste öğesi
2) İkinci liste öğesi
3) Üçüncü liste öğesi
```

1) Birinci liste öğesi
2) İkinci liste öğesi
3) Üçüncü liste öğesi

Numaralandırmayı bozmadan sıralı liste içinde [[#Satır sonları|satır sonu]] eklemek için `Shift+Enter` kullanabilirsiniz.

```md
1. Birinci liste öğesi
   
2. İkinci liste öğesi
3. Üçüncü liste öğesi
   
4. Dördüncü liste öğesi
5. Beşinci liste öğesi
6. Altıncı liste öğesi
```

### Görev listeleri

Görev listesi oluşturmak için her liste öğesini bir tire ve boşluk ardından `[ ]` ile başlatın.

```md
- [x] Bu tamamlanmış bir görevdir.
- [ ] Bu tamamlanmamış bir görevdir.
```

- [x] Bu tamamlanmış bir görevdir.
- [ ] Bu tamamlanmamış bir görevdir.

Okuma görünümünde onay kutusunu seçerek bir görevi değiştirebilirsiniz.

> [!tip]- İpucu
> Tamamlandı olarak işaretlemek için köşeli parantez içinde herhangi bir karakter kullanabilirsiniz.
>
> ```md
> - [x] Süt
> - [?] Yumurta
> - [-] Yumurta
> ```
>
> - [x] Süt
> - [?] Yumurta
> - [-] Yumurta

### İç içe listeler

Her türlü listeyi—sıralı, sırasız veya görev listelerini—başka herhangi bir liste türünün altında iç içe geçirebilirsiniz.

İç içe liste oluşturmak için bir veya daha fazla liste öğesini girintileyin. İç içe yapıda liste türlerini karıştırabilirsiniz:

```md
1. Birinci liste öğesi
   1. Sıralı iç içe liste öğesi
2. İkinci liste öğesi
   - Sırasız iç içe liste öğesi
```

1. Birinci liste öğesi
   1. Sıralı iç içe liste öğesi
2. İkinci liste öğesi
   - Sırasız iç içe liste öğesi

Benzer şekilde, bir veya daha fazla liste öğesini girintileyerek iç içe görev listesi oluşturabilirsiniz:

```md
- [ ] Görev öğesi 1
	- [ ] Alt görev 1
- [ ] Görev öğesi 2
	- [ ] Alt görev 1
```

- [ ] Görev öğesi 1
	- [ ] Alt görev 1
- [ ] Görev öğesi 2
	- [ ] Alt görev 1

Seçili liste öğelerini kolayca düzenlemek için `Tab` veya `Shift+Tab` kullanarak girintileyin veya girintiyi azaltın.

## Yatay çizgi

Kendi satırında üç veya daha fazla yıldız `***`, tire `---` veya alt çizgi `___` kullanarak yatay çizgi ekleyebilirsiniz. Sembolleri boşluklarla da ayırabilirsiniz.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Kod

Kodu hem bir cümle içinde satır içi olarak hem de kendi bloğunda biçimlendirebilirsiniz.

### Satır içi kod

Tek ters tırnak kullanarak bir cümle içindeki kodu biçimlendirebilirsiniz.

```md
Bir satırdaki `ters tırnaklar` içindeki metin kod gibi biçimlendirilir.
```

Bir satırdaki `ters tırnaklar` içindeki metin kod gibi biçimlendirilir.

Satır içi kod bloğuna ters tırnak koymak istiyorsanız, çift ters tırnakla çevreleyin: satır içi ``içinde ters tırnak ` olan kod``.

### Kod blokları

Kodu blok olarak biçimlendirmek için üç veya daha fazla ters tırnak ya da üç veya daha fazla tilde ile çevreleyin.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

`Tab` veya 4 boşluk kullanarak metni girintileyerek de kod bloğu oluşturabilirsiniz.
`````md
    cd ~/Desktop
`````

İlk ters tırnak grubundan sonra bir dil kodu ekleyerek kod bloğuna söz dizimi vurgulama ekleyebilirsiniz.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian söz dizimi vurgulama için Prism kullanır. Daha fazla bilgi için [Desteklenen diller](https://prismjs.com/#supported-languages) sayfasına bakın.

> [!info]+ PrismJS ve düzenleme görünümleri
> [[Görünümler ve düzenleme modu#Kaynak modu|Kaynak modu]] ve [[Görünümler ve düzenleme modu#Canlı Önizleme|Canlı Önizleme]] PrismJS'i desteklemez ve söz dizimi vurgulamasını farklı şekilde işleyebilir.

#### İç içe kod blokları

Bir kod bloğunu başka bir kod bloğunun içine eklemeniz gerektiğinde (örneğin, kod bloklarının nasıl kullanılacağını belgelendirirken), dış kod bloğu için üçten fazla ters tırnak veya tilde kullanabilirsiniz.

Kod bloklarını iç içe geçirmek için dış blok için dört veya daha fazla ters tırnak (veya tilde) kullanırken iç blok üç tane kullanır:
`````md
````md
İşte bir kod bloğu oluşturma yöntemi:
```js
console.log("Hello world")
```
````
`````

Ters tırnaklar ve tildeleri de karıştırabilirsiniz. Bu, özellikle başka kod blokları oluşturan kodlarla çalışırken kullanışlıdır:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

Temel prensip, dış kod bloğunun herhangi bir iç kod bloğundan **daha fazla** çit karakteri (ters tırnak veya tilde) kullanması veya farklı bir çit karakter türü kullanması gerektiğidir.

## Dipnotlar

Aşağıdaki söz dizimini kullanarak notlarınıza dipnot[^footnote] ekleyebilirsiniz:

[^footnote]: Bu bir dipnottur.

```md
Bu basit bir dipnottur[^1].

[^1]: Bu referans verilen metindir.
[^2]: Her yeni satırın başına 2 boşluk ekleyin.
  Bu, birden fazla satıra yayılan dipnotlar yazmanızı sağlar.
[^note]: Adlandırılmış dipnotlar hâlâ sayı olarak görünür, ancak referansları tanımlamayı ve bağlamayı kolaylaştırabilir.
```

Bir cümle içinde satır içi dipnot da kullanabilirsiniz. Şapka işaretinin parantezlerin dışında olduğuna dikkat edin.

```md
Satır içi dipnotlar da kullanabilirsiniz. ^[Bu bir satır içi dipnottur.]
```

> [!note] Not
> Satır içi dipnotlar yalnızca okuma görünümünde çalışır, Canlı Önizlemede çalışmaz.

Bir nottaki tüm dipnotları görmek için [[Dipnotlar görünümü]]nü kullanın.

## Yorumlar

Metni `%%` ile çevreleyerek yorum ekleyebilirsiniz. Yorumlar yalnızca Düzenleme görünümünde görünür.

```md
Bu bir %%satır içi%% yorumdur.

%%
Bu bir blok yorumdur.

Blok yorumlar birden fazla satıra yayılabilir.
%%
```

## Markdown Söz Dizimini Kaçırma

Bazı durumlarda Markdown'da `*`, `_` veya `#` gibi özel karakterleri biçimlendirmelerini tetiklemeden görüntülemeniz gerekebilir. Bu karakterleri olduğu gibi görüntülemek için önlerine ters eğik çizgi (`\`) koyun.

> [!example] Yaygın kaçırılan karakterler
> 
> - Yıldız: `\*`
> - Alt çizgi: `\_`
> - Diyez: `\#`
> - Ters tırnak: `` \` ``
> - Dikey çizgi (tablolarda kullanılır): `\|`
> - Tilde: `\~`

```md
\*Bu metin italik olmayacak\*.
```

\*Bu metin italik olmayacak\*.

Numaralı listelerle çalışırken, otomatik liste biçimlendirmesini önlemek için sayıdan sonraki noktayı kaçırmanız gerekebilir. Ters eğik çizgiyi (`\`) sayıdan önce **değil**, noktadan önce koyun.

```md
1\. Bu bir liste öğesi olmayacak.
```

1\. Bu bir liste öğesi olmayacak.

## Daha fazlasını öğrenin

Tablolar, diyagramlar ve matematik ifadeleri gibi daha gelişmiş biçimlendirme söz dizimini öğrenmek için [[Gelişmiş biçimlendirme söz dizimi]] bölümüne bakın.

Obsidian'ın Markdown'ı nasıl ayrıştırdığı hakkında daha fazla bilgi edinmek için [[Obsidian Flavored Markdown]] bölümüne bakın.

---
permalink: links
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Dahili bağlantılar kullanarak notlarınızdan diğer notlara, eklere ve dosyalara nasıl bağlantı oluşturacağınızı öğrenin.'
---
_Dahili bağlantılar_ kullanarak notlarınızdan notlara, eklere ve diğer dosyalara nasıl bağlantı oluşturacağınızı öğrenin. Notları bağlayarak bir bilgi ağı oluşturabilirsiniz. ^b15695

Obsidian, bir dosyayı yeniden adlandırdığınızda kasanızdaki dahili bağlantıları otomatik olarak güncelleyebilir. Bunun yerine onay istenmesini tercih ediyorsanız, aşağıdaki ayarı devre dışı bırakabilirsiniz:

**[[Ayarlar]]** → **[[Ayarlar#Dosyalar & Linkler|Dosyalar & Linkler]]** → **[[Ayarlar#Bağlantıları hep güncelle|Bağlantıları hep güncelle]]**.

## Dahili bağlantılar için desteklenen biçimler

Obsidian aşağıdaki bağlantı biçimlerini destekler:

- Wiki bağlantısı: `[[Three laws of motion]]` veya `[[Three laws of motion.md]]`
- Markdown: `[Three laws of motion](Three%20laws%20of%20motion)` veya `[Three laws of motion](Three%20laws%20of%20motion.md)`

Yukarıdaki örnekler eşdeğerdir; düzenleyicide aynı şekilde görünürler ve aynı nota bağlantı verirler.

> [!note] Not
> Markdown biçimini kullanırken, bağlantı hedefini [URL kodlaması](https://en.wikipedia.org/wiki/Percent-encoding) ile kodladığınızdan emin olun. Örneğin, boşluklar `%20` olur.

Varsayılan olarak, daha kompakt biçimi nedeniyle Obsidian wiki bağlantısı biçimini kullanarak bağlantılar oluşturur. Birlikte çalışabilirlik sizin için önemliyse, wiki bağlantılarını devre dışı bırakıp bunun yerine Markdown bağlantıları kullanabilirsiniz.

Markdown biçimini kullanmak için:

1. **[[Ayarlar]]**'ı açın.
2. **Dosyalar & Linkler** altında, **\[\[Wiki bağlantıları\]\] kullan** seçeneğini devre dışı bırakın.

Wiki bağlantısı biçimini devre dışı bıraksanız bile, iki köşeli parantez `[[` yazarak bağlantıları otomatik tamamlayabilirsiniz. Önerilen dosyalardan birini seçtiğinizde, Obsidian bunun yerine bir Markdown bağlantısı oluşturur.

> [!note] Geçersiz karakterler
> Aşağıdaki karakterleri içeren bir dize bağlantı olarak çalışmayabilir: `# | ^ : %% [[ ]]`.
> 
> Bu karakterlerden kaçınmanızı ve [güvenli dosya adı uygulamalarını](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) takip etmenizi öneririz.

## Bir dosyaya bağlantı verme

Düzenleyici görünümündeyken bir bağlantı oluşturmak için aşağıdaki yöntemlerden birini kullanın:

- Düzenleyicide `[[` yazın ve ardından bağlantı oluşturmak istediğiniz dosyayı seçin.
- Düzenleyicide bir metin seçin ve ardından `[[` yazın.
- [[Komut Paleti]]'ni açın ve ardından Dahili link ekle'yi seçin.

![[Hızlı Geçiş#^search-autocomplete-large]]

[[Kabul edilen dosya biçimleri|Kabul edilen dosya biçimlerinden]] herhangi birine bağlantı verebilirsiniz, ancak Markdown dışındaki dosya biçimlerine bağlantılar `[[Şekil 1.png]]` gibi bir dosya uzantısı içermelidir.

> [!tip] Dahili bağlantının başına ünlem işareti (!) eklemek, bağlantılı içeriği gömmenizi sağlar. Daha fazla ayrıntı için [[Dosya gömme]] sayfasına bakın.

> [!info] Hariç tutulan dosyalar
> [[Ayarlar#Hariç tutulan dosyalar|Hariç tutulan dosyalar]] desenlerinize uyan dosyalar, dahili bağlantılar oluştururken bağlantı önerilerinde daha düşük önceliğe sahip olur.

## Bir nottaki başlığa bağlantı verme

Notlardaki belirli başlıklara bağlantı verebilirsiniz; bunlar _çapa bağlantıları_ olarak da bilinir.

**Aynı not içindeki bir başlığa bağlantı verme**

Aynı not içindeki bir başlığa bağlantı vermek için `[[#` yazarak not içindeki başlıkların listesini alın.

Örneğin, `[[#Bağlantılı bir dosyayı önizleme]]` ifadesi [[#Bağlantılı bir dosyayı önizleme]] bağlantısını oluşturur.

**Başka bir nottaki başlığa bağlantı verme**

Başka bir nottaki bir başlığa bağlantı vermek için, bağlantı hedefinin sonuna bir diyez işareti (`#`) ve ardından başlık metnini ekleyin.

Örneğin, `[[Obsidian hakkında#Bağlantılar birinci sınıf vatandaşlardır]]` ifadesi [[Obsidian hakkında#Bağlantılar birinci sınıf vatandaşlardır]] bağlantısını oluşturur.

**Alt başlıklara bağlantı verme**

Her alt başlık için birden fazla diyez işareti ekleyebilirsiniz.

Örneğin, `[[Yardım ve destek#Questions and advice#Report bugs and request features]]` ifadesi [[Yardım ve destek#Questions and advice#Report bugs and request features]] bağlantısını oluşturur.

**Kasa genelinde başlık arama**

Tüm kasa genelinde başlık aramak için `[[## başlık]]` söz dizimini kullanın.

Örneğin, `[[##` ifadesi kasa genelinde genel bir arama yaparken, `[[## ekip]]` ifadesi _ekip_ kelimesini içeren tüm başlıkları arar.

> [!info]- Başlık bağlantısı arama ekran görüntüsü
>
> ![[internal-links-header.png#interface]]

## Bir nottaki bloğa bağlantı verme

Blok, notunuzdaki bir paragraf, blok alıntı veya liste öğesi gibi bir metin birimidir.

Bağlantı hedefinin sonuna `#^` ve ardından benzersiz bir blok tanımlayıcısı ekleyerek bir bloğa bağlantı verebilirsiniz. Örneğin: `[[2023-01-01#^37066d]]`. Neyse ki tanımlayıcıyı manuel olarak bulmanız gerekmez — şapka işaretini (`^`) yazdığınızda, doğru bloğu seçmenizi sağlayan bir öneri listesi görünür.

*Basit paragraflar* için, satırın sonuna bir boşluk ve ardından `^` şapka işareti ile blok tanımlayıcısını yerleştirin:

```md
The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place. ^37066d
```

*Yapılandırılmış bloklar* (listeler, alıntılar, vurgulu bloklar, tablolar) için, blok tanımlayıcısı ayrı bir satırda olmalı ve önce ve sonra boş bir satır bırakılmalıdır:

```md
> The quick purple gem dashes through the paragraph with blazing speed. Pen in hand and a paperclip in the other, Gemmy works toward her goal of making the world of note-taking a happier place.

^37066f

This is the tale of Gemmy, the Unhelpful assistant.  
```

*Bir liste içindeki belirli satırlar* için, blok tanımlayıcısı doğrudan bir madde işaretine yerleştirilebilir:

```mathjax
- Gemmy
    $$Paperclip / Pen$$ 
    ^37006f
- Unhelpful assistant
```

> [!warning] Alıntıların, vurgulu blokların ve tabloların belirli bölümlerine bağlantı vermeyi desteklemiyoruz.

**Kasa genelinde blok arama**

`[[^^blok]]` söz dizimini kullanarak kasa genelinde bağlantı verilecek blokları da arayabilirsiniz. Ancak [[#Bir nottaki başlığa bağlantı verme|başlık bağlantılarına]] kıyasla daha fazla öğe blok olarak nitelendirildiğinden, bu liste çok daha uzun olacaktır.

> [!info]- Blok bağlantısı arama ekran görüntüsü
> ![[link-block-heading.png#interface]]

Ayrıca bir boşluk, ardından şapka işareti (`^`) ve tanımlayıcı ekleyerek okunabilir blok tanımlayıcıları oluşturabilirsiniz. Blok tanımlayıcıları yalnızca Latin harflerinden, rakamlardan ve tirelerden oluşabilir.

Örneğin, bir bloğun sonuna `^quote-of-the-day` ekleyin:

```md
"You do not rise to the level of your goals. You fall to the level of your systems." by James Clear ^quote-of-the-day
```

Artık `[[2023-01-01#^quote-of-the-day]]` yazarak bloğa bağlantı verebilirsiniz.

> [!warning] Birlikte çalışabilirlik
> Blok referansları Obsidian'a özgüdür ve standart Markdown biçiminin bir parçası değildir. Blok referansları içeren bağlantılar Obsidian dışında çalışmaz.

## Bağlantı görüntüleme metnini değiştirme

Varsayılan olarak, Obsidian bağlantı metnini göründüğü gibi gösterir. Örneğin:
- `[[Örnek]]` şeklinde görüntülenir: [[Örnek]]
- `[[Örnek#Ayrıntılar]]` şeklinde görüntülenir: [[Örnek#Ayrıntılar]]

Bağlantı metnini özelleştirerek nasıl görüntüleneceğini değiştirebilirsiniz:

**Wiki bağlantısı biçimi**:
Görüntüleme metnini değiştirmek için dikey çubuk (`|`) kullanın.

- `[[Örnek|Özel ad]]` şeklinde görünür: [[Örnek|Özel ad]]
- `[[Örnek#Ayrıntılar|Bölüm adı]]` şeklinde görünür: [[Örnek#Ayrıntılar|Bölüm adı]]

**Markdown biçimi**:
Bağlantının nasıl görüneceğini özelleştirmek için `[Görüntüleme metni](Bağlantı URL'si)` kullanın.

- `[Özel ad](Örnek.md)` şeklinde görünür: [Özel ad](Örnek.md)
- `[Bölüm adı](Örnek.md#Ayrıntılar)` şeklinde görünür: [Bölüm adı](Örnek.md#Ayrıntılar)

Bu yöntem, bir bağlantının belirli bir bağlamda nasıl görüneceğini değiştirmek istediğiniz tek seferlik durumlar için yararlıdır. Kasanız genelinde yeniden kullanabileceğiniz alternatif bir bağlantı adı oluşturmak istiyorsanız, bunun yerine [[Takma adlar|takma ad]] kullanmayı düşünün.

Örneğin, `[[Three laws of motion]]` ifadesine düzenli olarak `[[The 3 laws]]` şeklinde atıfta bulunuyorsanız, "3 laws" ifadesini takma ad olarak eklemek yalnızca bunu yazmanıza olanak tanır — her seferinde özel görüntüleme metni eklemenize gerek kalmaz.

> [!tip] İpucu
> Bir bağlantının *belirli bir yerde* nasıl göründüğünü özelleştirmek istediğinizde [[#Bağlantı görüntüleme metnini değiştirme|bağlantı görüntüleme metni]] kullanın.
> 
> Aynı nota kasanız genelinde *farklı adlarla* atıfta bulunmak istediğinizde [[Takma adlar|takma adlar]] kullanın.
^callout-internal-links-link-text

## Bağlantılı bir dosyayı önizleme

> [!note] Not
> Bağlantılı dosyaları önizlemek için önce [[Sayfa Önizlemesi]]'ni etkinleştirmeniz gerekir.

Bağlantılı bir dosyayı önizlemek için bir dahili bağlantının üzerine gelin. Düzenleme modundayken, bağlantının üzerine gelirken `Ctrl` (veya macOS'ta `Cmd`) tuşuna basın. İmlecin yanında dosya içeriğinin bir önizlemesi görünür.

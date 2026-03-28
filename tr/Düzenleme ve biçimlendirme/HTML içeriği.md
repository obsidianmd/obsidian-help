---
permalink: html
publish: true
mobile: true
description: Markdown oluşturma sınırlamaları ve HTML blok gereksinimleri dahil olmak üzere Obsidian'da HTML kullanmayı öğrenin.
---
Obsidian, notlarınızı istediğiniz şekilde görüntülemenize ve hatta [[Web sayfalarını göm|web sayfalarını gömmenize]] olanak tanımak için HTML'yi destekler. Notlarınızda HTML'ye izin vermek bazı riskler taşır. Kötü amaçlı kodların zarar vermesini önlemek için Obsidian, notlarınızdaki tüm HTML'yi _temizler_.

> [!example] 
> `<script>` öğesi normalde yüklendiğinde JavaScript çalıştırmanıza izin verir. Obsidian HTML'yi temizlemeseydi, bir saldırgan sizi, bilgisayarınızdan hassas bilgileri çıkaran ve bunları saldırgana geri gönderen JavaScript içeren bir metin yapıştırmaya ikna edebilirdi.

Bununla birlikte, Markdown söz dizimi tüm biçimlendirme türlerini desteklemediğinden, temizlenmiş HTML kullanmak notlarınızın kalitesini artırmanın bir başka yolu olabilir. HTML'nin daha yaygın kullanımlarından bazılarını aşağıda derledik.

## HTML sınırlamaları

Obsidian, notlarınızda HTML kullanırken belirli sınırlamalara sahiptir:

### HTML içinde Markdown kullanılamaz

Obsidian, HTML öğeleri içindeki Markdown söz dizimini işlemez. Bu, performans optimizasyonu ve büyük belgeleri yönetirken ayrıştırıcı karmaşıklığını düşük tutmak için bilinçli bir tasarım tercihidir.

Örneğin, bu beklendiği gibi çalışmayacaktır:

```md
<div>
Bu **kalın olmayacak** ve bu `kod olmayacak`.
</div>
```

### HTML blokları bağımsız olmalıdır

HTML blokları eksiksiz olmalı ve içlerinde boş satırlar bulunmamalıdır. Boş satırlar HTML bloğunu bozar.

Bu çalışacaktır:

```md
<table>
<tr>
<td>İçerik burada</td>
</tr>
</table>
```

Bu doğru çalışmayacaktır:

```md
<table>

<tr>

<td>İçerik burada</td>

</tr>

</table>
```

### Markdown'ın HTML içinde çalışıyor gibi göründüğü durumlar

`<span>` veya `<a>` gibi bazı satır içi HTML etiketleri sınırlı işlevselliğe sahiptir ve Markdown'ı işliyormuş gibi görünebilir, ancak aslında olan bu değildir. Markdown, HTML bağlamının dışında işlenmektedir.

Obsidian'ın Markdown'ı nasıl işlediği hakkında daha fazla bilgi için [[Obsidian Flavored Markdown]] sayfasına bakın.

## Yaygın HTML kullanımı

> [!info] `<iframe>` kullanımı hakkında daha fazla bilgi [[Web sayfalarını göm]] sayfasında bulunabilir.

### Yorumlar

[[Temel biçimlendirme söz dizimi#Yorumlar|Markdown yorumları]], notlarınıza gizli yorumlar eklemenin tercih edilen yoludur. Ancak [Pandoc](https://pandoc.org) gibi bazı Markdown not dönüştürme yöntemleri, Markdown yorumları için sınırlı destek sunar. Bu durumlarda, bunun yerine `<!-- HTML Yorumu -->` kullanabilirsiniz!

### Altı çizili

Notlarınızda bir öğenin altını hızlıca çizmeniz gerekiyorsa, <u>altı çizili metninizi</u> oluşturmak için `<u>Örnek</u>` kullanabilirsiniz.

### Span/Div

Span ve div etiketleri, bir [[CSS kod parçaları|CSS kod parçasından]] özel sınıflar veya özel tanımlanmış biçimlendirme uygulamak için seçili bir metin alanında kullanılabilir. Örneğin, `<span style="font-family: cursive">metniniz</span>` kullanarak hızlıca <span style="font-family: cursive">yazı tipinizi değiştirebilirsiniz</span>.

## Üstü çizili

<s>Bir metnin</s> üstünü çizmeniz mi gerekiyor? Üstünü çizmek için `<s>bunu</s>` kullanın.

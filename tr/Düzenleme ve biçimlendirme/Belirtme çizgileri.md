---
permalink: callouts
publish: true
mobile: true
description: 'Bu sayfa, notlarınızın akışını bozmadan ek içerik eklemek için açıklama kutularının nasıl kullanılacağını ayrıntılı olarak açıklar.'
---
Notlarınızın akışını bozmadan ek içerik eklemek için belirtme çizgilerini kullanın.

Bir belirtme çizgisi oluşturmak için, bir blok alıntının ilk satırına `[!info]` ekleyin; burada `info` _tür tanımlayıcısıdır_. Tür tanımlayıcısı, belirtme çizgisinin görünümünü ve hissini belirler. Kullanılabilir tüm türleri görmek için [[#Desteklenen türler]] bölümüne bakın. Belirtme çizgileri [[Obsidian Publish'e giriş|Obsidian Publish]] üzerinde de yerel olarak desteklenir.

```markdown
> [!info] İşte bir belirtme çizgisi başlığı
> İşte bir belirtme çizgisi bloğu.
> **Markdown**, [[Dahili bağlantılar|Wiki bağlantıları]] ve [[Dosya gömme|gömmeleri]] destekler!
> ![[Engelbart.jpg]]
```

> [!info] İşte bir belirtme çizgisi başlığı
> İşte bir belirtme çizgisi bloğu.
> **Markdown**, [[Dahili bağlantılar|Wiki bağlantıları]] ve [[Dosya gömme|gömmeleri]] destekler!
> ![[Engelbart.jpg]]

[[Komut Paleti|Komut]] kullanarak varsayılan bir `[!note]` belirtme çizgisi ekleyebilirsiniz: `Belirtme çizgisi ekle`. İmleç otomatik olarak belirtme çizgisi ad alanına konumlanır, böylece içeriği düzenlemeden önce varsayılan adı silip yeni bir ad yazabilirsiniz.

Mevcut içeriği bir belirtme çizgisiyle sarmak için metni (listeler, kod blokları vb. dahil) seçin ve `Belirtme çizgisi ekle` komutunu çalıştırın. Seçilen içerik otomatik olarak belirtme çizgisi içine alınır.

[[Görünümler ve düzenleme modu#Canlı Önizleme|Canlı Önizleme]]'de, belirtme çizgisi türünü değiştirmek için belirtme çizgisi adına sağ tıklayabilirsiniz.


### Başlığı değiştirme

Varsayılan olarak, belirtme çizgisinin başlığı, tür tanımlayıcısının baş harfleri büyük halidir. Tür tanımlayıcısından sonra metin ekleyerek bunu değiştirebilirsiniz:

```markdown
> [!tip] Belirtme çizgileri özel başlıklara sahip olabilir
> Bunun gibi.
```

> [!tip] Belirtme çizgileri özel başlıklara sahip olabilir
> Bunun gibi.

Yalnızca başlıklı belirtme çizgileri oluşturmak için gövdeyi bile atlayabilirsiniz:

```markdown
> [!tip] Yalnızca başlıklı belirtme çizgisi
```

> [!tip] Yalnızca başlıklı belirtme çizgisi

### Katlanabilir belirtme çizgileri

Tür tanımlayıcısından hemen sonra bir artı (`+`) veya eksi (`-`) işareti ekleyerek belirtme çizgisini katlanabilir yapabilirsiniz.

Artı işareti belirtme çizgisini varsayılan olarak genişletir, eksi işareti ise daraltır.

```markdown
> [!faq]- Belirtme çizgileri katlanabilir mi?
> Evet! Katlanabilir bir belirtme çizgisinde, belirtme çizgisi daraltıldığında içerikler gizlenir.
```

> [!faq]- Belirtme çizgileri katlanabilir mi?
> Evet! Katlanabilir bir belirtme çizgisinde, daraltıldığında içerikler gizlenir.

### İç içe belirtme çizgileri

Belirtme çizgilerini birden fazla düzeyde iç içe yerleştirebilirsiniz.

```markdown
> [!question] Belirtme çizgileri iç içe yerleştirilebilir mi?
> > [!todo] Evet!, yerleştirilebilir.
> > > [!example]  Hatta birden fazla iç içe yerleştirme katmanı bile kullanabilirsiniz.
```

> [!question] Belirtme çizgileri iç içe yerleştirilebilir mi?
> > [!todo] Evet!, yerleştirilebilir.
> > > [!example]  Hatta birden fazla iç içe yerleştirme katmanı bile kullanabilirsiniz.

### Belirtme çizgilerini özelleştirme

[[CSS kod parçaları]] ve [[Topluluk Eklentileri]] özel belirtme çizgileri tanımlayabilir, hatta varsayılan yapılandırmanın üzerine yazabilir.

Özel bir belirtme çizgisi tanımlamak için aşağıdaki CSS bloğunu oluşturun:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

`data-callout` özniteliğinin değeri, kullanmak istediğiniz tür tanımlayıcısıdır, örneğin `[!custom-question-type]`.

- `--callout-color`, kırmızı, yeşil ve mavi için sayılar (0–255) kullanarak arka plan rengini tanımlar.
- `--callout-icon`, [lucide.dev](https://lucide.dev) sitesinden bir simge kimliği veya bir SVG öğesi olabilir.

> [!warning] Lucide simge sürümleri hakkında not
> Obsidian, Lucide simgelerini periyodik olarak günceller. Dahil edilen mevcut sürüm aşağıda gösterilmektedir; özel belirtme çizgilerinde bu veya daha önceki simgeleri kullanın.
> ![[Katkıda bulunanlar#^lucide]]

> [!tip] SVG simgeleri
> Lucide simgesi kullanmak yerine, belirtme çizgisi simgesi olarak bir SVG öğesi de kullanabilirsiniz.
>
> ```css
> --callout-icon: '<svg>...özel svg...</svg>';
> ```

### Desteklenen türler

Birçok belirtme çizgisi türü ve takma ad kullanabilirsiniz. Her tür farklı bir arka plan rengi ve simgeyle gelir.

Bu varsayılan stilleri kullanmak için örneklerdeki `info` ifadesini `[!tip]` veya `[!warning]` gibi bu türlerden herhangi biriyle değiştirin. Belirtme çizgisi türleri, Canlı Önizleme modunda bir belirtme çizgisine sağ tıklayarak da değiştirilebilir.

[[#Belirtme çizgilerini özelleştirme|Belirtme çizgilerini özelleştirmediğiniz]] sürece, desteklenmeyen herhangi bir tür varsayılan olarak `note` türüne döner. Tür tanımlayıcısı büyük/küçük harf duyarsızdır.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Takma adlar: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Takma adlar: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Takma adlar: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Takma adlar: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Takma adlar: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Takma adlar: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Takma ad: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Takma ad: `cite`

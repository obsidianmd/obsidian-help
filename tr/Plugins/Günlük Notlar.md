---
permalink: plugins/daily-notes
---
Günlük Notlar, bugünün tarihine göre bir not açan veya mevcut değilse oluşturan bir [[Yerleşik Eklentiler|çekirdek eklenti]]dir. Günlük notları; günlükler, yapılacaklar listeleri veya gün içinde keşfettiğiniz şeyler için günlük kayıtlar oluşturmak amacıyla kullanın.

Bugünün günlük notunu açmak için şunlardan birini yapın:

- [[Araç çubuğu|Araç çubuğunda]] **Bugünün Notunu Aç** ![[lucide-calendar.svg#icon]] simgesine tıklayın.
- [[Komut Paleti]]'nden **Bugünün Notunu Aç** komutunu çalıştırın.
- **Bugünün Notunu Aç** komutu için [[Kısayol tuşları#Kısayol tuşu belirleme|bir kısayol tuşu kullanın]].

Varsayılan olarak Obsidian, YYYY-MM-DD biçiminde bugünün tarihiyle adlandırılmış yeni boş bir not oluşturur.

> [!tip] Günlük notlarınızı ayrı bir klasörde tutmayı tercih ediyorsanız, Obsidian'ın yeni günlük notları nerede oluşturacağını değiştirmek için eklenti seçenekleri altındaki <u>Yeni dosya konumu</u> ayarını yapabilirsiniz.

> [!example]- Otomatik alt klasörler
> **Tarih biçimi** özelliğini kullanarak günlük notlarınızı otomatik olarak klasörlere düzenleyebilirsiniz.
> 
> Örneğin, tarih biçimini `YYYY/MMMM/YYYY-MMM-DD` olarak ayarlarsanız, notlarınız `2023/January/2023-Jan-01` şeklinde oluşturulur.
> 
> Daha fazla biçimlendirme seçeneğini [momentJS](https://momentjs.com/docs/#/displaying/format/) belgelendirme sitesinde keşfedebilirsiniz.

## Şablondan günlük not oluşturma

Günlük notlarınız aynı yapıya sahipse, oluşturduğunuzda günlük notlarınıza önceden tanımlanmış içerik eklemek için bir [[Plugins/Şablonlar|şablon]] kullanabilirsiniz.

1. Aşağıdaki metinle (veya size uygun ne varsa!) "Günlük şablon" adında yeni bir not oluşturun:

   ```md
   # {{date:YYYY-MM-DD}}

   ## Görevler

   - [ ]
   ```

2. **[[Ayarlar]]**'ı açın.
3. Kenar çubuğunda, **Eklenti seçenekleri** altında **Günlük Notlar**'a tıklayın.
4. **Şablon dosya konumu**'nun yanındaki metin kutusunda "Günlük şablon" notunu seçin.

Obsidian, bir sonraki yeni günlük not oluşturduğunuzda şablonu kullanır.

## Günlük notlar ve özellikler

Günlük Notlar eklentisi etkinleştirildiğinde ve herhangi bir notta bir tarih özelliği bulunduğunda, Obsidian o güne ait günlük nota otomatik olarak bir bağlantı oluşturmaya çalışır. Örneğin, `example.md` başlıklı bir not `2023-01-01` gibi bir tarih özelliği içeriyorsa, bu tarih [[Görünümler ve düzenleme modu#Canlı Önizleme|canlı önizleme]] bölümünde tıklanabilir bir bağlantıya dönüşür.

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date

---
permalink: import/notion
cssclasses:
  - soft-embed
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisini]] kullanarak verilerinizi Notion'dan kolayca taşımanızı sağlar. Bu işlem, Notion çalışma alanınızı Obsidian ve diğer birçok uygulamayla çevrimdışı kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürür.

Obsidian, Notion verilerinizi içe aktarmak için iki yol sunar:

1. **Notion hesabı (önerilen)** doğrudan çalışma alanınıza bağlanır ve Veritabanları ile formülleri koruyarak bunları [[Tabanlara giriş|Tabanlar]]'a dönüştürmenizi sağlar. Bir Notion entegrasyon belirteci ve internet bağlantısı gerektirir.
2. **Dosya ile içe aktarma**, Notion'ın `.zip` dışa aktarma dosyalarını kullanır. Veritabanlarını korumaz ancak bir API belirteci veya internet bağlantısı gerektirmez.

## İçe aktarılan sayfaları özelleştirme

Her iki içe aktarma yöntemi de içe aktarma başlamadan önce bir önizleme gösterir. Oluşturulan şablonu düzenleyebilir veya kasanızdan bir Markdown şablonu seçebilirsiniz. Kapak ve veritabanı özellik adları gibi ayarlar, önizlemede gösterilen oluşturulan özellikleri günceller. Bkz. [[İçe aktarıcı şablonları]].

## Notion hesabınızdan içe aktarma

### Notion API erişim belirteci oluşturma

Notion verilerinize API üzerinden erişmek için bir erişim belirtecine ihtiyacınız vardır. Bu adımın tamamlanması yaklaşık iki dakika sürer.

Belirteç, genellikle `ntn_...` ile başlayan uzun bir sayı ve harf dizisidir ve verilerinizi Notion'dan indirmenize olanak tanır.

1. [Notion Connections](https://app.notion.com/developers/connections) panonuzda oturum açın.
2. **New connection** öğesini seçin.
	1. Bağlantınıza bir ad verin, örneğin "Personal". Herhangi bir ad kullanılabilir.
	2. Kimlik doğrulama yöntemi olarak **Access token** öğesini seçin.
	3. Dışa aktarmak istediğiniz çalışma alanını **Installable in** olarak seçin.

![[notion-integration.png#interface]]

3. **Create connection** öğesine tıklayın.
4. **Configuration** sekmesinde API belirtecinize **Access token** alanından erişilebilir.
5. **Show** ardından **Copy** öğesini seçin.
6. Belirteci parola yöneticiniz gibi güvenli bir yere kaydedin.

![[notion-token.png#interface]]

Ardından, bağlantınıza içe aktarmak istediğiniz Notion sayfaları ve veritabanlarına erişim verin.

1. Az önce oluşturduğunuz bağlantının **Content access** sekmesine gidin.
2. İçe aktarmak istediğiniz sayfaları ve veritabanlarını ekleyin.

![[notion-content.png#interface]]

Artık Obsidian İçe Aktarıcı'yı kullanarak verilerinizi dönüştürebilirsiniz.

### Notion verilerinizi API üzerinden içe aktarma

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]** öğesini açın.
2. **Topluluk Eklentileri** bölümüne gidin ve [İçe Aktarıcı'yı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **File format** altında **Notion (API)** öğesini seçin.
6. **API token** altında, yeni bir gizli bilgi eklemek için **Bağla...** öğesine tıklayın. **Kimlik** için `notion` gibi bir ad verin ve **Gizli bilgi** için Notion'dan aldığınız **Access token** değerini yapıştırın.
7. İçe aktarmak istediğiniz veritabanlarını ve sayfaları seçmek için **Yükle** öğesine tıklayın.
8. İçe aktarma seçeneklerini gözden geçirin ve düzenleyin.
9. Oluşturulan şablonu gözden geçirmek ve sayfalarınızdan önizleme örneklerini görmek için **İçe aktar** öğesini seçin.
10. İçe aktarma işleminin tamamlanması için tekrar **İçe aktar** öğesini seçin ve bekleyin.

### Sınırlamalar

> [!info] API ile içe aktarma yeni bir özelliktir
> Notion API içe aktarıcısı yenidir. Notion çalışma alanlarının karmaşıklığı nedeniyle bazı uç durumlar göz önünde bulundurulmamış olabilir. Dönüştürme sırasında sorunlarla karşılaşırsanız, iyileştirebilmemiz için [bir hata raporu gönderin](https://github.com/obsidianmd/obsidian-importer/issues).

Notion API hız sınırlamaları nedeniyle büyük çalışma alanlarının içe aktarılması önemli ölçüde zaman alabilir. Lütfen sabırlı olun.

Notion API'sindeki sınırlamalar nedeniyle bazı veriler mevcut değildir veya dönüştürülemez:

- Her veritabanı için yalnızca birincil görünüm içe aktarılır.
- [Bağlantılı veri kaynakları](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) içe aktarılmaz: *"Notion'ın API'si şu anda bağlantılı veri kaynaklarını desteklemiyor. Bir veritabanını entegrasyonunuzla paylaşırken, orijinal veri kaynağını içerdiğinden emin olun!"*
- `People` fonksiyonları: `name()` ve `email()`
- `Text` fonksiyonları: `style()` ve `unstyle()`

Ek olarak, İçe Aktarıcı şu değişiklikleri yapacaktır:

- Alt sayfaları veya veritabanları olmayan sayfalar `[dosyaadı]/[dosyaadı].md` yerine `[dosyaadı].md` olarak içe aktarılır.
- Veritabanları her zaman `[veritabanı adı]` adlı klasörler olarak temsil edilir ve içlerinde bir `[veritabanı adı].base` dosyası bulunur.

## Notion dosyalarını içe aktarma (.zip)

Dosya ile içe aktarma, Notion verilerinizi içe aktarmanın alternatif bir yoludur. Bu yöntem Veritabanlarını korumaz ancak bir API belirteci veya internet bağlantısı gerektirmez.

### Verilerinizi Notion'dan dışa aktarma

Verilerinizi içe aktarmaya hazırlamak için tüm çalışma alanınızı Notion'ın HTML dışa aktarma biçimini kullanarak dışa aktarmanız gerekir. Notion'ın Markdown dışa aktarma özelliğini kullanmamanızı öneririz çünkü önemli verileri atlar. Tüm çalışma alanı içeriğini dışa aktarmak için Notion çalışma alanında yönetici erişiminiz olmalıdır.

1. Notion kenar çubuğunun üst kısmındaki **Settings** bölümüne gidin.
2. **Workspace** altında **General** öğesini seçin.
3. **Export all workspace content** öğesini bulun ve seçin.
4. **Export format** altında **HTML** öğesini seçin.
5. **Include everything** öğesini seçin.
6. **Create folders for subpages** seçeneğini etkinleştirin.
7. E-posta yoluyla veya doğrudan tarayıcıda bir `.zip` dosyası alacaksınız.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Notion .zip dosyanızı içe aktarma

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]** öğesini açın.
2. **Topluluk Eklentileri** bölümüne gidin ve [İçe Aktarıcı'yı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **File format** altında **Notion (.zip)** öğesini seçin.
6. İçe aktarmak istediğiniz Notion dosyalarını içeren `.zip` dosyasını seçin. *Dahili bağlantıların doğru şekilde eşleştirilmesi için tüm Notion verilerinizi tek seferde içe aktarmanız önerilir.*
7. _İsteğe bağlı olarak_, içe aktarma için bir klasör seçin. Notion sayfalarınız ve veritabanlarınız bu klasörün içine yerleştirilecektir.
8. Notion yapısını korumak için **Save parent pages in subfolders** seçeneğini etkinleştirin. *Notion'da klasörlere içerik yazabileceğinizi, ancak bunun Obsidian'da mümkün olmadığını ve bu sayfaların klasör altında bir alt sayfa olarak ekleneceğini unutmayın.*
9. Oluşturulan şablonu gözden geçirmek ve sayfalarınızdan önizleme örneklerini görmek için **İçe aktar** öğesini seçin.
10. İçe aktarma işleminin tamamlanması için tekrar **İçe aktar** öğesini seçin ve bekleyin.

### Sorun giderme

Notion'dan içe aktarırken sorunlarla karşılaşırsanız:

- Notion'da dışa aktarma biçimi olarak **Markdown değil**, **HTML** kullandığınızdan emin olun.
- İçe aktarma sırasında Obsidian donmuş gibi görünürse, topluluk eklentilerini devre dışı bırakın ve tekrar deneyin.

Başka bir şeyle mi karşılaştınız? Başkalarının da aynı sorunu yaşayıp yaşamadığını görmek için [İçe Aktarıcı deposunu](https://github.com/obsidianmd/obsidian-importer/issues) arayın.

#### Büyük çalışma alanlarını içe aktarma

Birden fazla gigabayt veri içeren bir çalışma alanını içe aktarıyorsanız, Notion'dan dışa aktarma iç içe `.zip` dosyaları içerebilir. Bu durumda şuna benzer bir içe aktarma hata mesajı görebilirsiniz:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Bu hatayı görürseniz, Notion'dan gelen dosyayı açabilir ve ardından iç içe geçmiş `Export-{id}-Part-1.zip` dosyalarını içe aktarabilirsiniz.

## Şablonlar

Notion verilerinizin nasıl içe aktarılacağını tam olarak yapılandırmak için [[İçe aktarıcı şablonları|İçe Aktarıcı şablonlarını]] kullanın.

![[İçe aktarıcı şablonları#Variables]]

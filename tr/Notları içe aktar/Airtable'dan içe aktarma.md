---
permalink: import/airtable
cssclasses:
  - soft-embed
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisini]] kullanarak verilerinizi Airtable'dan taşımanıza olanak tanır. Bu işlem, Airtable tabanlarınızı Obsidian ve diğer birçok uygulamayla çevrimdışı kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürür.

Her tablo, kayıt başına bir not içeren bir not klasörüne ve tabloyu ve görünümlerini yeniden oluşturan bir [[Tabanlara giriş|Taban]] dosyasına dönüşür. Airtable API'sini kullandığı için içe aktarma, kişisel erişim belirteci ve internet bağlantısı gerektirir.

## Airtable kişisel erişim belirteci oluşturma

Verilerinize Airtable API aracılığıyla erişmek için kişisel bir erişim belirtecine ihtiyacınız vardır. Bu adımın tamamlanması yaklaşık iki dakika sürer.

Belirteç, genellikle `pat...` ile başlayan uzun bir sayı ve harf dizisidir ve verilerinizi Airtable'dan indirmenizi sağlar.

1. Airtable'a giriş yapın ve hesap ayarlarınızdaki [Kişisel erişim belirteçleri](https://airtable.com/create/tokens) sayfasına gidin.
2. **Create new token** seçeneğini seçin.
3. Belirtecinize bir ad verin, örneğin "Obsidian". Herhangi bir ad kullanılabilir.
4. **Scopes** altında `data.records:read` ve `schema.bases:read` ekleyin.
5. **Access** altında içe aktarmak istediğiniz tabanları ekleyin veya bir çalışma alanındaki tüm tabanları seçin.
6. **Create token** seçeneğini seçin, ardından belirteci **Copy** ile kopyalayın.
7. Belirteci parola yöneticiniz gibi güvenli bir yere kaydedin.

Airtable belirteci yalnızca bir kez gösterir. Kaybederseniz yeni bir tane oluşturun.

## Airtable verilerinizi içe aktarma

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcı'yı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya şerit menü simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **File format** altında **Airtable** seçeneğini seçin.
6. **Airtable Personal Access Token** altında **Bağla...** düğmesine tıklayarak yeni bir gizli bilgi ekleyin. **Kimlik** olarak `airtable` gibi bir ad verin ve **Gizli bilgi** alanına kişisel erişim belirtecinizi yapıştırın.
7. Tabanlarınıza göz atmak için **Yükle** düğmesine tıklayın, ardından içe aktarmak istediğiniz tabloları seçin.
8. İçe aktarma seçeneklerini gözden geçirin ve düzenleyin.
9. Alanlarınızın [[Özellikler|özelliklerle]] birlikte notlara nasıl dönüştürüleceğini yapılandırmak için **Import** seçeneğini seçin.
10. Oluşturulan şablonu gözden geçirmek ve kayıtlarınızdan örnekleri önizlemek için **Devam et** seçeneğini seçin.
11. **Import** seçeneğini seçin ve içe aktarmanın tamamlanmasını bekleyin.

## İçe aktarma seçenekleri

- **Convert formulas** — formül, lookup, rollup ve count alanlarının [[Formüller|Tabanlar formüllerine]] dönüştürülüp dönüştürülmeyeceğini seçin; eşdeğeri olmadığında Airtable'ın hesapladığı değere geri dönülür veya yalnızca statik değerler olarak içe aktarılır.
- **Ekleri indir** — ek dosyalarını ek klasörü ve bağlantı biçimi ayarlarınızı kullanarak kasanıza kaydedin. Devre dışı bırakıldığında veya indirme başarısız olduğunda, not Airtable'daki dosyanın URL'sine bağlantı verir.
- **View property name** — bir kaydın hangi Airtable görünümlerine ait olduğunu kaydeden özellik. Oluşturulan Tabandaki her görünüm bu özelliğe göre filtre uygular. Varsayılan değeri `Views`'dur.
- **Save Airtable record ID** — gelecekteki içe aktarmaların notları taşındıktan veya yeniden adlandırıldıktan sonra kayıtları tanıyabilmesi için bir `airtable-id` özelliği ekler.

## Airtable alanlarının nasıl içe aktarılacağını yapılandırma

Alan yapılandırma adımında, her alanın nasıl içe aktarılacağını seçebilirsiniz.

Varsayılan olarak her Airtable alanı bir özellik olur. Şablon önizlemesine geçmeden önce özellikleri yeniden adlandırabilir, kaldırabilir ve değerlerini değiştirebilirsiniz.

Her tablonun birincil alanı varsayılan not adını sağlar. Not adı şablonunu önizleme adımından düzenleyebilirsiniz. Kayıtlar daima tablolarının adını taşıyan bir klasöre yerleştirilir.

Oluşturulan Markdown'ı özelleştirmek için [[İçe aktarıcı şablonları]] bölümüne bakın.

## Neler içe aktarılır

`Projects` adında bir tabanda bulunan `Tasks` tablosu için içe aktarıcı şunu oluşturur:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Kayıt başına bir not; birincil alan not başlığı olarak, kaydın diğer alanları [[Özellikler|özellik]] olarak kullanılır.
- Tablo başına bir `.base` dosyası; her Airtable görünümü bir [[Görünümler|Tabanlar görünümüne]] eşlenir:
	- **Grid**, [[Tablo görünümü]]ne dönüşür.
	- **Gallery**, [[Kartlar görünümü]]ne dönüşür.
	- **List**, [[Liste görünümü]]ne dönüşür.
	- Diğer tüm görünüm türleri tablo görünümüne dönüştürülür.
- Airtable alan türleri, önceden ayarladığınız türleri geçersiz kılmadan Obsidian özellik türlerine eşlenir.
- Bağlantılı kayıtlar, ilgili notlara bağlantılara dönüşür.
- Ekler, kasa ayarlarınız kullanılarak kasanıza indirilir.


## Sınırlamalar

Airtable API hız sınırlamaları nedeniyle büyük tabanların içe aktarılması uzun sürebilir. Lütfen sabırlı olun.

Airtable API'sindeki sınırlamalar nedeniyle bazı veriler mevcut değildir veya dönüştürülemez:

- Rollup değerleri içe aktarılmaz. API, bir rollup'ın hesaplanan değeri için kullanılan toplamayı göstermez, bu nedenle yalnızca özellik adı yazılır ve alanın şeması bir ifade içerdiğinde bir Tabanlar formülü eklenir.
- Obsidian'da eşdeğeri bulunmayan fonksiyonları kullanan formüller (`SWITCH`, `FIND`, `REGEX_EXTRACT` ve `SQRT` gibi), Airtable'dan gelen statik değere geri döner.
- Yalnızca grid, gallery ve list görünümleri içe aktarılır. Takvim, kanban, zaman çizelgesi ve Gantt gibi diğer görünüm türleri yok sayılır.
- Seçmediğiniz tablolardaki kayıtlara olan bağlantılar, bağlantı yerine kaydın düz başlığı olarak görünür.
- Arayüz tasarımları, otomasyonlar, yorumlar ve revizyon geçmişi içe aktarılmaz.

## Sorun giderme

Dönüştürme sırasında sorunlarla karşılaşırsanız, iyileştirmemiz için [hata raporu gönderin](https://github.com/obsidianmd/obsidian-importer/issues).

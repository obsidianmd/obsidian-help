---
permalink: import/apple-journal
cssclasses:
  - soft-embed
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisi]]ni kullanarak Apple Journal'daki günlük girişlerinizi kolayca taşımanızı sağlar. Bu, günlüklerinizi Obsidian ve diğer birçok uygulamayla kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürür.

## Verilerinizi Apple Journal'dan dışa aktarın

### iPhone'da
[iPhone'da Journal'da girişleri yazdırma ve dışa aktarma](https://support.apple.com/guide/iphone/print-and-export-entries-iph4cad323fe/ios#iph1edf66806) talimatlarını izleyin:

1. iPhone'unuzda Journal uygulamasına gidin.
2. Bir günlük seçin veya Tüm Girişler'e dokunun.
3. Ekranın üst kısmındaki Daha Fazla düğmesine dokunun.
4. Dışa Aktar'a dokunun, ardından Dışa Aktar'ı seçin.
5. Bir konum seçin, ardından Seçildi düğmesine dokunun.

### Mac'te (Tahoe)
[Mac'te Journal'da girişleri yazdırma ve dışa aktarma](https://support.apple.com/guide/journal/print-and-export-entries-dev883fc2329/mac#devc24a8f09a) talimatlarını izleyin:

1. Mac'inizde Journal uygulamasına gidin.
2. Dosya > Dışa Aktar'a gidin, ardından Dışa Aktar'ı seçin.

## Apple Journal verilerini Obsidian'a içe aktarın

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcı'yı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **Dosya biçimi** altında **Apple Journal (HTML Dışa Aktarma)** seçin.
6. **İçe aktarılacak dosyalar** bölümünde, dışa aktarılan verilerin bulunduğu klasörü (genellikle _AppleJournalEntries_) veya _Entries_ içindeki bireysel dosyaları seçin.
7. Diğer içe aktarma seçeneklerini gözden geçirin ve düzenleyin.
8. Oluşturulan şablonu gözden geçirmek ve girişlerinizden önizleme örneklerini görmek için **İçe Aktar**'ı seçin.
9. İçe aktarmanın tamamlanmasını beklemek için tekrar **İçe Aktar**'ı seçin.

## Şablonlar

Apple Journal verilerinizin nasıl içe aktarılacağını tam olarak yapılandırmak için [[İçe aktarıcı şablonları|İçe aktarıcı şablonları]]nı kullanın.

![[İçe aktarıcı şablonları#Değişkenler]]

**Meta verileri başlangıç meta verileri olarak ekle** etkinleştirildiğinde, Apple Journal meta verileri [[Özellikler|özellikler]]e dönüştürülür. Girişe bağlı olarak bunlar `state-of-mind`, `contact`, `location`, `motion-activity`, `third-party-media` ve `workout-route` değerlerini içerebilir.

Bu meta verilere erişmek için `properties` değişkenini kullanın. Örneğin, konum için `{{properties.location}}` veya ruh hali için `{{properties["state-of-mind"]}}` kullanın.

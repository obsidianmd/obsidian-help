---
permalink: import/apple-notes
cssclasses:
  - soft-embed
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisi]]ni kullanarak notlarınızı Apple Notes'tan kolayca taşımanıza olanak tanır. Bu işlem, Apple Notes verilerinizi Obsidian ve diğer birçok uygulamayla kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürür.

Şu anda İçe aktarıcı yalnızca macOS üzerinde Apple Notes'tan taşımayı desteklemektedir. iOS'ta henüz kullanılamamaktadır.

## Apple Notes verilerini Obsidian'a içe aktarma

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcıyı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **Dosya biçimi** altında **Apple Notes**'u seçin.
6. **İçe aktar**'ı seçin.
7. `Obsidian'ın Apple Notes verilerini okumasına izin vermek için "group.com.apple.notes" klasörünü seçin` başlıklı açılır pencerede **Aç**'ı seçin.
8. Oluşturulan şablonu ve notlarınızdan önizleme örneklerini gözden geçirin.
9. **İçe aktar**'ı seçin ve içe aktarma işleminin tamamlanmasını bekleyin.

## İçe aktarılan notları özelleştirme

İçe aktarma başlamadan önce, İçe aktarıcı Apple Notes seçiminizden oluşturulan bir önizleme gösterir. Oluşturulan şablonu, özellikleri ve not adını düzenleyebilir veya kasanızdan bir Markdown şablonu seçebilirsiniz. Bkz. [[İçe aktarıcı şablonları]].

## Desteklenen içerik

Obsidian İçe aktarıcı eklentisi neredeyse tüm Apple Notes içerik türlerini destekler. Buna tablolar, görseller, çizimler, taramalar, PDF'ler ve iOS 17'de tanıtılan bağlantılar dahildir.

> [!Warning]
> Parola korumalı notlar Apple tarafından şifrelenmiştir, bu nedenle içe aktarmadan önce kilitleri açılmalıdır. Kilitli notlar atlanacaktır.

### Taramalar

Apple, taramaları nasıl oluşturulduklarına bağlı olarak çeşitli biçimlerde saklar. Orijinal verileri korumak için bu, farklı şekillerde dışa aktarılacakları anlamına gelir.

* macOS veya iOS'un eski sürümlerinde oluşturulan veya görüntülenen taramalar, kırpılmamış görsel serisi olarak dışa aktarılacaktır.
* macOS veya iOS'un yeni sürümlerinde oluşturulan veya görüntülenen taramalar genellikle kırpılmış görseller olarak dışa aktarılacaktır.
* iOS 17'de tanıtılan özellikler kullanılarak düzenlenmiş taramalar genellikle PDF olarak dışa aktarılacaktır.

## Şablonlar

Apple Notes verilerinizin nasıl içe aktarılacağını tam olarak yapılandırmak için [[İçe aktarıcı şablonları|İçe aktarıcı şablonlarını]] kullanın.

![[İçe aktarıcı şablonları#Değişkenler]]

Ek olarak Apple Notes aşağıdaki değişkeni sağlar.

| Değişken       | Açıklama                       |
| -------------- | ------------------------------ |
| `{{isPinned}}` | Notun sabitlenip sabitlenmediği. |

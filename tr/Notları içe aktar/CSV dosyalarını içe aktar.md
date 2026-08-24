---
permalink: import/csv
cssclasses:
  - soft-embed
---
Obsidian, resmi [[İçe aktarıcı|İçe aktarıcı eklentisi]] ile CSV dosyalarından veri aktarmanıza olanak tanır. Bu, Excel, Google Sheets, Numbers, Notion veya Airtable gibi uygulamalarda tablo biçiminde saklanan verileriniz varsa kullanışlıdır.

CSV içe aktarma, her satır için Markdown dosyaları ve içe aktarılan tüm dosyaları tablo olarak görüntüleyen bir [[Tabanlara giriş|Taban]] dosyası oluşturur.

Belirli bir uygulamadan notlarınızı içe aktarıyorsanız, öncelikle taşıdığınız verileri daha iyi koruyacak özel bir dönüştürücü olup olmadığını kontrol etmek için [[İçe aktarıcı|İçe aktarıcı eklentisi]] tarafından desteklenen uygulamalar listesini incelemeniz faydalı olabilir.

## Obsidian'da CSV verilerinden notlar oluşturma

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan yükleyebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcı'yı yükleyin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesi ile **İçe aktarıcı** eklentisini açın.
5. **Dosya biçimi** altında **CSV (.csv)** seçin.
6. CSV dosyanızın konumunu seçin.
7. CSV dosyanızdaki verilerin [[Özellikler]] içeren notlara nasıl dönüştürüleceğini yapılandırmak için **İçe aktar**'ı seçin.
8. Oluşturulan şablonu ve satırlarınızdan önizleme örneklerini gözden geçirmek için **Devam et**'i seçin.
9. **İçe aktar**'ı seçin ve içe aktarmanın tamamlanmasını bekleyin.

## CSV alanlarının nasıl içe aktarılacağını yapılandırma

Alan yapılandırma adımında, verilerin nasıl içe aktarılacağını seçebilirsiniz. İçe aktarıcı, CSV başlıklarından bir şablon oluşturur, ilk sütunu başlangıç not adı olarak kullanır ve her sütun için bir özellik oluşturur.

## Şablonlar

Verilerinizin nasıl içe aktarılacağını tam olarak yapılandırmak için [[İçe aktarıcı şablonları|İçe aktarıcı şablonlarını]] kullanın.

Her CSV sütunu, başlığı kullanılarak erişilebilir. Bir sütunun başlığı yoksa, İçe aktarıcı oluşturduğu sütun adını kullanır.

Boşlukların ve noktalama işaretlerinin güvenle işlenmesi için köşeli parantez gösterimini kullanın:

```liquid
{{source["Project name"]}}
{{source["Price ($)"]|yaml}}
```

![[İçe aktarıcı şablonları#Değişkenler]]

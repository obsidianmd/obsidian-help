---
permalink: import/csv
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
7. CSV dosyanızdaki verilerin [[Özellikler]] içeren notlara nasıl dönüştürüleceğini yapılandırmak için **İçe aktar**'a tıklayın.
8. **Devam et**'e tıklayın ve içe aktarma tamamlanana kadar bekleyin.
9. Tamamlandı!

## CSV alanlarının nasıl içe aktarılacağını yapılandırma

CSV içe aktarmanın ikinci adımında, bir şablon kullanarak verilerin nasıl içe aktarılacağını seçebilirsiniz.

CSV dosyanızdaki her sütuna, dosyanızdaki başlık adını temsil eden `{{sütun_adı}}` adlı bir değişken atanır. Bu değişkeni notun başlığını, konumunu, içeriğini ve [[Özellikler|özelliklerini]] tanımlamak için kullanabilirsiniz.

---
permalink: import/html
cssclasses:
  - soft-embed
---
Obsidian, resmi [[İçe aktarıcı|İçe aktarıcı eklentisini]] kullanarak tek tek HTML dosyalarını ve HTML dosyalarından oluşan klasörleri kolayca içe aktarmanıza olanak tanır. Bu, tüm web sitelerini [[Obsidian Flavored Markdown|Markdown]] biçiminde kaydetmek istiyorsanız veya HTML olarak dışa aktarım yapan bir araçtan verileri içe aktarmak istiyorsanız kullanışlıdır.

Belirli bir uygulamadan notları içe aktarıyorsanız, taşıdığınız verileri daha iyi koruyacak özel bir dönüştürücü olup olmadığını kontrol etmek için önce [[İçe aktarıcı|İçe aktarıcı eklentisi]] tarafından desteklenen uygulamalar listesini incelemek isteyebilirsiniz.

## HTML verilerini Obsidian'a içe aktarma

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcı'yı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **Biçimlendirme** altında **HTML (.html)** seçeneğini seçin.
6. HTML dosyalarınızın veya klasörlerinizin konumunu seçin.
7. Oluşturulan şablonu incelemek ve dosyalarınızdan önizleme örneklerini görmek için **İçe aktar**'ı seçin.
8. Tekrar **İçe aktar**'ı seçin ve içe aktarma işleminin tamamlanmasını bekleyin.

### Ayarları içe aktar

- **Ek boyut sınırı**: Belirtilen boyuttan büyük ekleri içe aktarmayı atla.
- **Minimum görsel boyutu**: Her iki boyutta da belirtilen boyuttan küçük görselleri içe aktarmayı atla. Simgeleri ve logoları atlamak için kullanılabilir.

## Şablonlar

Verilerinizin nasıl içe aktarılacağını tam olarak yapılandırmak için [[İçe aktarıcı şablonları|İçe aktarıcı şablonlarını]] kullanın.

![[İçe aktarıcı şablonları#Variables]]

Ayrıca, HTML içe aktarmaları [[Obsidian Web Kırpıcı'ya giriş|Web Clipper]] ile aynı değişkenlerin çoğunu sağlar:

| Değişken | Açıklama |
| --- | --- |
| `{{author}}` | Sayfanın yazarı. |
| `{{contentHtml}}` | Çıkarılan sayfa içeriği HTML biçiminde. |
| `{{description}}` | Sayfa açıklaması veya özeti. |
| `{{domain}}` | Sayfanın alan adı. |
| `{{favicon}}` | Favicon URL'si. |
| `{{fullHtml}}` | Tam sayfanın işlenmemiş HTML'si. |
| `{{image}}` | Sosyal paylaşım görseli URL'si. |
| `{{language}}` | Sayfa dili. |
| `{{published}}` | Yayınlanma tarihi, `date` filtresi ile biçimlendirilebilir. |
| `{{site}}` | Site adı veya yayıncı. |
| `{{url}}` | İçe aktarılan belgede bulunan kaynak URL'si (mevcut olduğunda). |
| `{{words}}` | Kelime sayısı. |

---
permalink: import/google-keep
cssclasses:
  - soft-embed
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisini]] kullanarak notlarınızı Google Keep'ten kolayca taşımanızı sağlar. Bu işlem, Google Keep verilerinizi Obsidian ve diğer birçok uygulamayla kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürür.

## Verilerinizi Google Keep'ten dışa aktarın

1. [Google Takeout](https://takeout.google.com/settings/takeout) adresine gidin ve Google hesabınıza giriş yapın.
2. Sağ üst köşedeki **Hepsini kaldır** seçeneğine tıklayın.
3. Aşağı kaydırın ve listeden **Keep**'i seçin.
4. Sayfanın en altına kaydırın ve **Sonraki adım**'a tıklayın.
5. Sonraki ekranda **Dışa aktarma oluştur** düğmesine tıklayın.
6. `.zip` dosyasını hazır olduğunda indirin.

## Google Keep verilerinizi Obsidian'a içe aktarın

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcı'yı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **Dosya biçimi** altından **Google Keep (.zip)** seçeneğini seçin.
6. `.zip` dosyanızın konumunu seçin.
7. Oluşturulan şablonu incelemek ve notlarınızdan önizleme örnekleri görmek için **İçe aktar**'ı seçin.
8. Tekrar **İçe aktar**'ı seçin ve içe aktarma işleminin tamamlanmasını bekleyin.

## Sınırlamalar

- Tüm kontrol listeleri üst düzey öğeler olarak içe aktarılacaktır çünkü Google Keep girinti bilgilerini dışa aktarmaz.
- Notlardaki hatırlatmalar ve kullanıcı atamaları içe aktarılmayacaktır çünkü bu özellikler Obsidian tarafından desteklenmemektedir.


## Şablonlar

Google Keep verilerinizin nasıl içe aktarılacağını tam olarak yapılandırmak için [[İçe aktarıcı şablonları|İçe aktarıcı şablonlarını]] kullanın.

![[İçe aktarıcı şablonları#Variables]]

Ayrıca Google Keep, orijinal metin, listeler, etiketler, ekler, renkler, paylaşım verileri, görevler, açıklamalar ve not durumu için değişkenler sağlar.

| Değişken          | Açıklama                                          |
| ----------------- | ------------------------------------------------- |
| `{{isArchived}}`  | Notun arşivlenip arşivlenmediği.                  |
| `{{isPinned}}`    | Notun sabitlenip sabitlenmediği.                   |
| `{{isTrashed}}`   | Notun çöp kutusunda olup olmadığı.                 |
| `{{color}}`       | Google Keep renk adı.                              |
| `{{labels}}`      | Etiket kayıtları dizisi.                           |
| `{{sharees}}`     | Notun paylaşıldığı kişilerin dizisi.               |
| `{{annotations}}` | Bağlantı açıklama kayıtları dizisi.                |

Orijinal Google Keep başlığı `{{source.title}}` olarak kullanılabilir. Paylaşılan `{{title}}` değişkeni, içe aktarılan not başlığını içerir.

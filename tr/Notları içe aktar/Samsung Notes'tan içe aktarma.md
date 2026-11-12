---
permalink: import/samsung-notes
cssclasses:
  - soft-embed
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisini]] kullanarak notlarınızı Samsung Notes'tan taşımanıza olanak tanır. Bu işlem, notlarınızı Obsidian ve diğer birçok uygulamayla kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürür.

## Notlarınızı Samsung Notes'tan dışa aktarın

Samsung Notes her notu bir Samsung Notes dosyası (`.sdocx`) olarak kaydeder.

1. Telefon veya tabletinizde Samsung Notes'u açın.
2. Bir nota dokunup basılı tutun, ardından dışa aktarmak istediğiniz tüm notları seçin.
3. **Dosya olarak kaydet**'e dokunun, ardından **Samsung Notes dosyası**'nı seçin.
4. Bir klasör seçin ve **Kaydet**'e dokunun.
5. `.sdocx` dosyalarını Obsidian kullandığınız cihaza taşıyın; örneğin USB kablosu, Quick Share veya bir bulut sürücü kullanabilirsiniz.

Çok fazla dosyanız varsa, bunları bir `.zip` dosyasına koyup onun yerine onu içe aktarabilirsiniz. Samsung Notes, kaydettiği dosyalara klasörlerini dahil etmez, ancak İçe aktarıcı `.zip` dosyasının içindeki klasörleri korur. Notlarınızı düzenli tutmak için, sıkıştırmadan önce her Samsung Notes klasörünün notlarını aynı adlı bir klasöre kaydedin.

## Samsung Notes verilerinizi Obsidian'a içe aktarın

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcıyı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. **İçe aktarıcı** eklentisini komut paleti veya şerit menü simgesi ile açın.
5. **Dosya biçimi** altında **Samsung Notes (.sdocx)** seçeneğini belirleyin.
6. `.sdocx` dosyalarınızı veya bunları içeren bir `.zip` dosyasını seçin.
7. Oluşturulan şablonu incelemek ve notlarınızdan önizleme örnekleri görmek için **İçe aktar**'ı seçin.
8. **İçe aktar**'ı tekrar seçin ve içe aktarma işleminin tamamlanmasını bekleyin.

## Sınırlamalar

- El yazısı ve çizilmiş şekiller, notun sonunda bir SVG görsel olarak içe aktarılır. Çizgiler şekillerini ve renklerini korur, ancak basınca duyarlı kalemin değişen kalınlığı korunmaz. Şekiller ve çizgiler siyah olarak içe aktarılır.
- Metin kutuları, sayfaya yerleştirilmiş görseller ve açıklamalı PDF'ler henüz içe aktarılmamaktadır.
- Kontrol listesi öğeleri işaretlenmemiş olarak içe aktarılır.
- Metin renkleri, yazı tipleri ve yazı tipi boyutları korunmaz.
- Dışa aktarmadan önce Samsung Notes'taki kilitli notların kilidini açın.

## Şablonlar

Samsung Notes verilerinizin nasıl içe aktarılacağını tam olarak yapılandırmak için [[İçe aktarıcı şablonları|İçe aktarıcı şablonlarını]] kullanın.

![[İçe aktarıcı şablonları#Değişkenler]]

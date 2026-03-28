---
permalink: import/apple-notes
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisi]]ni kullanarak notlarınızı Apple Notes'tan kolayca taşımanıza olanak tanır. Bu işlem, Apple Notes verilerinizi Obsidian ve diğer birçok uygulamayla kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürecektir.

Şu anda İçe aktarıcı yalnızca macOS üzerinde Apple Notes'tan taşımayı desteklemektedir. iOS'ta henüz kullanılamamaktadır.

## Apple Notes verilerini Obsidian'a içe aktarma

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcıyı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **Dosya biçimi** altında **Apple Notes**'u seçin.
6. **İçe aktar**'a tıklayın.
7. `Obsidian'ın Apple Notes verilerini okumasına izin vermek için "group.com.apple.notes" klasörünü seçin` başlıklı açılır pencerede **Aç**'a tıklayın.
8. İçe aktarma tamamlanana kadar bekleyin.
9. İşlem tamamlandı!

## Desteklenen içerik

Obsidian İçe aktarıcı eklentisi neredeyse tüm Apple Notes içerik türlerini destekler. Buna tablolar, görseller, çizimler, taramalar, PDF'ler ve iOS 17'de tanıtılan bağlantılar dahildir.

> [!Warning]
> Parola korumalı notlar Apple tarafından şifrelenmiştir, bu nedenle içe aktarmadan önce kilitleri açılmalıdır. Kilitli notlar atlanacaktır.

### Taramalar

Apple, taramaları nasıl oluşturulduklarına bağlı olarak çeşitli biçimlerde saklar. Orijinal verileri korumak için bu, farklı şekillerde dışa aktarılacakları anlamına gelir.

* macOS veya iOS'un eski sürümlerinde oluşturulan veya görüntülenen taramalar, kırpılmamış görsel serisi olarak dışa aktarılacaktır.
* macOS veya iOS'un yeni sürümlerinde oluşturulan veya görüntülenen taramalar genellikle kırpılmış görseller olarak dışa aktarılacaktır.
* iOS 17'de tanıtılan özellikler kullanılarak düzenlenmiş taramalar genellikle PDF olarak dışa aktarılacaktır.

## Alternatif dışa aktarma yöntemleri

Apple, notlarınızı dışa aktarmak için yerel bir seçenek sunmamaktadır. Ancak Chintan Ghate tarafından geliştirilen [Exporter](https://apps.apple.com/us/app/exporter/id1099120373) gibi çeşitli üçüncü taraf araçlar mevcuttur. Çoğu aracın Apple Notes'tan dışa aktaracağı veriler konusunda sınırlı olduğunu ve en uyumlu çıktı verilerini sağlamayabileceğini lütfen unutmayın. Bu araçlar, Apple Notes'unuz ağırlıklı olarak yalnızca metin içeriyorsa ve çizimler ile taramalar gibi çok az ek veya özel özellik barındırıyorsa en iyi şekilde çalışır.

Kullandığınız araca bağlı olarak dışa aktarma Markdown biçiminde veya HTML biçiminde olabilir. Dışa aktardığınız dosya biçimine göre talimatları izleyin:

- [[HTML dosyalarını içe aktar]]
- [[Markdown dosyalarını içe aktar]]

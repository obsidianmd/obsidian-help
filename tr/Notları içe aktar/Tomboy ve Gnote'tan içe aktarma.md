---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian, resmi [[İçe aktarıcı|İçe aktarıcı eklentisi]] kullanarak Tomboy ve Gnote'tan notlarınızı taşımanıza olanak tanır. İçe aktarıcı, uygulamaların `.note` dosyalarını doğrudan okur ve XML içeriklerini Markdown'a dönüştürür.

## Not dosyalarınızı bulun

Tomboy ve Gnote normalde notları şu klasörlerde saklar:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` veya `~/.local/share/gnote`

Veri klasörünü taşıdıysanız veya uygulamanın farklı bir sürümünü kullanıyorsanız tam konum farklı olabilir.

## Tomboy veya Gnote notlarınızı içe aktarın

1. **[[Ayarlar]] → Topluluk Eklentileri** bölümünü açın ve [İçe aktarıcı'yı indirin](obsidian://show-plugin?id=obsidian-importer).
2. İçe aktarıcı eklentisini etkinleştirin.
3. [[Komut Paleti]] veya şerit menü simgesini kullanarak **İçe aktarıcı**'yı açın.
4. **Dosya biçimi** altında **Tomboy/Gnote (.note)** seçeneğini seçin.
5. Tek tek `.note` dosyalarını veya bunları içeren klasörü seçin.
6. İçe aktarma seçeneklerini, oluşturulan şablonu ve önizleme örneklerini gözden geçirin.
7. **İçe aktar**'ı seçin ve içe aktarma işleminin tamamlanmasını bekleyin.

## Şablonlar

Verilerinizin nasıl içe aktarılacağını tam olarak yapılandırmak için [[İçe aktarıcı şablonları|İçe aktarıcı şablonları]]nı kullanın.

![[İçe aktarıcı şablonları#Değişkenler]]

---
permalink: import/evernote
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisini]] kullanarak notlarınızı Evernote'tan kolayca taşımanızı sağlar. Bu işlem, Evernote verilerinizi Obsidian ve diğer birçok uygulamayla kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürür.

## Verilerinizi Evernote'tan dışa aktarın

Obsidian, Evernote'un dışa aktarma formatı olan `.enex` dosyalarını kullanır.

Evernote'un verilerinizi dışa aktarma talimatlarını [Evernote'un web sitesinde](https://help.evernote.com/hc/en-us/articles/209005557-Export-notes-and-notebooks-as-ENEX-or-HTML) bulabilirsiniz. Bu yöntem, masaüstü istemcisinde tüm not defterlerini dışa aktarmanızı sağlar.

1. Not Defterleri ekranına gidin.
2. **Daha fazla seçenek** ( `•••` ) düğmesine tıklayın ve **Not Defterini Dışa Aktar...** seçeneğini seçin.
3. Dosya biçimi olarak **ENEX**'i seçin.
3. Dışa aktarılan `.enex` dosyanız için bir konum seçin.

## Evernote verilerinizi Obsidian'a içe aktarın

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcıyı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **Dosya biçimi** altında **Evernote (.enex)** seçeneğini seçin.
6. Evernote yedek dosyanızın konumunu seçin.
7. **İçe aktar**'a tıklayın ve içe aktarma tamamlanana kadar bekleyin.
8. İşlem tamamlandı!

## Gelişmiş içe aktarma seçenekleri

### Etiket hiyerarşisini koruma

Evernote dışa aktarma işlemi etiket hiyerarşisini korumaz. Etiket hiyerarşinizi korumak için etiketleri "/" ile ayırarak "düzleştirebilirsiniz". Örneğin, aşağıdaki etiket yapısına sahip olduğunuzu varsayalım:

```
ÜstEtiket
    AltEtiket
```

Obsidian'da etiketleri ilişkili tutmak için yapmanız gereken:

1. AltEtiket'e sağ tıklayın.
2. "Yeniden Adlandır" seçeneğini seçin.
3. `ÜstEtiket/AltEtiket` olarak yeniden adlandırın.

### Not defteri yığınlarını yönetme

Dışa aktarma işlemi tek not defterleriyle sınırlı olduğundan, varsayılan dışa aktarma dosyası not defteri yığınları hakkında bilgi içermez. Ancak içe aktarıcı, enex dosya adındaki kalıpları tanıyarak not defteri yığınlarını klasörler olarak yeniden oluşturabilir.

```Stack1``` adlı bir yığında ```NotebookA``` adlı bir not defteriniz olduğunu varsayalım; enex dosyasını ```Stack1@@@NotebookA``` olarak yeniden adlandırarak bir not defteri yığınını yeniden oluşturabilirsiniz.

Bu işlem, dönüştürülen notların Stack1/NotebookA klasörü içinde oluşturulmasını sağlar.

### Daha fazla seçenek

Evernote'tan daha gelişmiş içe aktarma seçenekleri için [Yarle aracılığıyla içe aktarmayı](https://github.com/akosbalasko/yarle) da deneyebilirsiniz.

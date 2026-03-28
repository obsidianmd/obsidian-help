---
permalink: publish/customize
publish: true
description: Obsidian Publish sitenizin görünümünü ve stilini nasıl özelleştireceğinizi öğrenin.
---
Bu sayfa, [[Obsidian Publish'e giriş|Obsidian Publish]] sitenizin görünümünü ve hissini nasıl özelleştirebileceğinizi açıklar.

## Statik varlıklar

Aşağıdaki dosyaları sitenize [[İçeriğinizi yayınlayın#Notları yayınlama|yayınlayarak]] sitenizi özelleştirebilirsiniz:

- `publish.css` özel CSS eklemek için
- `publish.js` özel JavaScript eklemek için
- `favicon-32x32.png` site simgesini ayarlamak için

**Notlar:**

- [Publish için CSS değişkenleri](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) Belgelendirme sitemizde bulunabilir.
- Obsidian CSS veya JavaScript dosyalarını desteklemediğinden, bunları oluşturmak ve düzenlemek için başka bir uygulama kullanmanız gerekir.
- Hem `publish.css` hem de `publish.js` kasanızın kök dizininde (`/`) bulunmalıdır.
- Varsayılan olarak, `publish.css` ve `publish.js` dosya gezgininde görünmez, ancak bunları **Değişiklikleri yayınla** iletişim kutusundan yayınlayabilirsiniz.
- `publish.js` ile özel JavaScript kullanmak için [[Özel alan adları]] kurmanız gerekir.

Site simgeleri için Obsidian Publish, `32` sayısının simge boyutlarını piksel cinsinden temsil ettiği aşağıdaki adlandırma kurallarını destekler:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Aşağıdaki boyutlardan bir veya daha fazlasını sağlamanızı öneririz:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Site simgelerini kasa içinde herhangi bir yere yerleştirme esnekliğine sahipsiniz, yeter ki sitenize yayınlanmış olsunlar.

## Topluluk teması kullanma

Siteniz için topluluk temalarından birini kullanmak için:

1. Kasanızı işletim sisteminizin varsayılan dosya gezgininde açın.
2. Kasa ayarlar klasörüne gidin (varsayılan: `.obsidian`).
3. `themes` klasörünü açın.
4. Siteniz için kullanmak istediğiniz temanın CSS dosyasını kopyalayın.
5. Dosyayı kasanızın kök klasörüne yapıştırın.
6. CSS dosyasını `publish.css` olarak yeniden adlandırın.
7. `publish.css` dosyasını [[İçeriğinizi yayınlayın#Notları yayınlama|yayınlayın]].

**Notlar:**

- Stil birkaç dakika içinde güncellenmezse, tarayıcı önbelleğinizi yenilemeyi deneyin.
- [[Siteleri yönet#Site seçeneklerini görüntüleme|Site seçeneklerinden]] açık ve koyu mod arasında geçiş yapabilirsiniz.
- Birçok topluluk teması özel biçimlendirme için **Style Settings** kullanır, ancak bu ayarlar Obsidian Publish'te çalışmaz.

> [!tip] Tema geliştirme
> Kendinize uygun temayı bulamıyor musunuz? Kendiniz nasıl [Publish teması oluşturacağınızı](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) öğrenin.

## Arayüz özelliklerini etkinleştirme

Siteniz için graf görünümü veya içerik tablosu gibi çeşitli arayüz özelliklerini açıp kapatabilirsiniz.

[[Siteleri yönet#Site seçeneklerini görüntüleme|Site seçeneklerindeki]] **Okuma deneyimi** ve **Bileşenler** bölümlerinde mevcut arayüz özelliklerine göz atın

### Navigasyonu özelleştirme

Obsidian Publish içinde, Publish [[Dosya Gezgini|dosya gezginindeki]] dosya ve klasörlerin gezinti sırasını ve görüntülenme şeklini özelleştirme olanağına sahipsiniz. Gezinti öğeleri varsayılan olarak yayınlanma sırasına göre listelenir. Yayınlanmamış notlar bu panelde görünmez.

#### Navigasyonu özelleştirme seçeneklerine erişim

1. [[Araç çubuğu|Araç çubuğunda]], **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] seçeneğini belirleyin veya [[Komut Paleti|komut paletini]] açıp **Publish: Değişiklikleri yayınla...** yazın
2. **Değişiklikleri yayınla** iletişim kutusunda, **Site seçeneklerini değiştir** ![[lucide-cog.svg#icon]] seçeneğini belirleyin.
3. **Bileşenler ayarları** altında, **Navigasyonu özelleştirme** seçeneğinin yanındaki **yönet** düğmesini seçin.

**Site seçeneklerini değiştir** pencerenizin üzerinde **Navigasyon** başlıklı yeni bir açılır pencere görünecektir.

#### Gezinti öğelerini düzenleme

**Gezinme önizlemesi** olarak etiketlenen bölümde, yayınlanan içeriğinizin görüntülenme sırasını ayarlayabilirsiniz.

1. Düzenlemek istediğiniz klasör veya notu seçin.
2. Not veya klasörü istediğiniz yere gelene kadar yukarı veya aşağı sürükleyin.
3. **Navigasyon** penceresinin sağ alt köşesinde **Tamamlandı** seçeneğini belirleyin.

Publish, gezinti değişikliklerinizi sitenize gönderecektir.

#### Gezinti öğelerini gizleme ve gösterme

Yayınladığınız ancak gezintinizde görünür olmasını istemediğiniz notlar veya klasörler varsa, bu öğeleri gizlemeyi tercih edebilirsiniz.

1. Düzenlemek istediğiniz klasör veya notu seçin.
2. Sağ tıklayın ve **Navigasyonda gizle** seçeneğini belirleyin. Öğe artık **Gezinme önizlemesi** bölümünden kaybolmalıdır.
3. **Navigasyon** penceresinin sağ alt köşesinde **Tamamlandı** seçeneğini belirleyin.

Publish, gezinti değişikliklerinizi sitenize gönderecektir.

> [!tip] **Gezinme Önizlemesi** başlığının sağındaki onay kutusunu seçerek **Gizli göster** özelliğini kullanabilirsiniz

## SSS

**Navigasyon içinde dosyaları bir klasörden diğerine taşıyabilir miyim?**

Hayır. Klasörler içindeki notların dosya gezinti yapısının korunması gerekir. Klasörler içindeki not sırasını (kasa kökü dahil) ve diğer klasörler içindeki klasör sırasını ayarlayabilirsiniz.

**Tamamlandı seçeneğini belirlemeden önce birden fazla not ve klasörün sırasını düzenleyebilir miyim?**

Evet.

**Bu değişiklikleri nasıl geri alırım?**

- **Görüntüleme sırası**: **Gezinti öğesi görüntüleme sırası** seçeneğinin yanındaki **Varsayılana geri dön** simgesini (saat yönünün tersine dönen ok) seçin. Bu, gezinti öğelerinizi alfabetik sıraya geri yükleyecektir.
- **Gizlilik durumu**: **Sayfaları veya klasörleri gezintiden gizleme** seçeneğinin yanındaki **Varsayılana geri dön** simgesini (saat yönünün tersine dönen ok) seçin. Bu, gizli gezinti öğelerinizi görünür duruma geri yükleyecektir.

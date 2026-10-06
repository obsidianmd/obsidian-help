---
permalink: ios
---
iOS ve iPadOS için Obsidian mobil uygulaması, iPhone ve iPad'inize güçlü not tutma yetenekleri sunar. [Apple App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442) üzerinden indirebilirsiniz.

Bu sayfa; widget'lar, Siri entegrasyonu ve Kısayollar dahil olmak üzere iOS'a özgü özellikleri kapsar.

## Senkronizasyon

Notları cihazlar arasında senkronize etme hakkında bilgi için lütfen [[Notlarınızı cihazlar arasında senkronize edin]] sayfasına bakın.

## Widget'lar

iOS için Obsidian, kasanızda hızlı işlemler yapmanız için çeşitli widget'lar sunar.

> [!note] Not
> Widget'lar iOS ve iPadOS 18 ve üzeri sürümlerde kullanılabilir.
> Uygulamanın kilidini açmak için "Face ID Gerektir" kullanıldığında widget'lar kullanılamaz.


### Kilit Ekranı ve Kontrol Merkezi widget'ları

Kilit Ekranı ve Kontrol Merkezi widget'ları şunları yapmanıza olanak tanır:
- Hızlı Yakalama'yı açma
- Yeni not oluşturma
- Belirli bir notu açma
- Günlük notunu açma
- Aramayı açma
- Obsidian'ı açma

### Ana Ekran widget'ları

Ana Ekran widget'ları şunları yapmanıza olanak tanır:
- Hızlı Yakalama'yı açma
- Not oluşturma
- Not görüntüleme
- Günlük notunuzu açma

### Widget'ları özelleştirme

Widget'ları iş akışınıza uyacak şekilde özelleştirebilirsiniz; örneğin hangi kasanın kullanılacağını seçmek veya açılacak belirli bir not belirtmek gibi.

- **Ana Ekran widget'ları:** Widget'a dokunup basılı tutun, ardından **Widget'ı Düzenle**'yi seçin.
- **Kilit Ekranı widget'ları:** Kilit Ekranınıza dokunup basılı tutun, **Özelleştir**'e dokunun, Kilit Ekranını seçin, ardından özelleştirmek istediğiniz widget'a dokunun.
- **Kontrol Merkezi widget'ları:** Kontrol Merkezini açın, düzenlemeye başlamak için sol üstteki **+** düğmesine dokunun, ardından özelleştirmek istediğiniz widget'a dokunun.

**Yeni Not** widget yapılandırma seçenekleri:

![[ios-new-note-configuration.png|400]]

**Not Görüntüle** widget yapılandırma seçenekleri:

![[ios-view-note-configuration.png|400]]

## Hızlı Yakalama

Hızlı Yakalama, Kilit Ekranı, Kontrol Merkezi, Ana Ekran widget'ları veya Kısayollar aracılığıyla kasanızın yüklenmesini beklemeden kasanıza metin kaydetmenize olanak tanır. Seçtiğiniz yakalama konumuna bağlı olarak, Hızlı Yakalama yeni bir not oluşturabilir veya metni mevcut bir nota ekleyebilir.

![[ios-quick-capture-view.png|400]]

> [!note] Not
> Hızlı Yakalama, Obsidian 1.14 veya sonraki sürümlerini ve iOS veya iPadOS 26 veya sonraki sürümlerini gerektirir.

Metin yakalamak için:

1. **Hızlı Yakalama** widget'ını Kilit Ekranınıza, Kontrol Merkezinize veya Ana Ekranınıza ekleyin.
2. Hızlı Yakalama'yı açmak için widget'a dokunun.
3. Metninizi girin.
4. Metnin kaydedileceği yeri değiştirmek için ekranın üst kısmındaki yakalama konumuna dokunun ve başka bir konum seçin.
5. Metni kaydetmek için onay işaretine dokunun.

**Not**: Canlı Etkinlikler etkinleştirildiyse, hızlı yakalama notu Kilit Ekranında ve desteklenen iPhone modellerinde Dynamic Island'da da görünür. Düzenlemeye devam etmek için çubuğa veya Canlı Etkinliğe dokunun.

![[ios-quick-capture-live-activity.png|400]]

### Yakalama konumları

Yakalama konumları, Hızlı Yakalama'nın metninizi nereye kaydedeceğini belirler. Bir yakalama konumu şunları yapabilir:

- Seçilen bir klasörde, isteğe bağlı şablon ve özel not adıyla yeni bir not oluşturma.
- Metni günlük notunuza ekleme veya başına ekleme.
- Metni yer imi eklenmiş bir nota ekleme veya başına ekleme.
- Metni seçtiğiniz başka bir nota ekleme veya başına ekleme.

Yakalama konumu oluşturmak için:
1. Hızlı Yakalama'yı açın.
2. Ekranın üst kısmındaki yakalama konumuna dokunun.
3. Artı (+) düğmesine dokunun.
4. Bir davranış seçin ve isteğe bağlı ayarları yapılandırın.
5. **Kaydet**'e dokunun.

Yakalama sonrası Obsidian'ın hedef notu açıp açmayacağını seçmek için **Yakalama Sonrası Notu Aç** seçeneğini de kullanabilirsiniz.

![[ios-quick-capture-locations.png|400]]

![[ios-quick-capture-config.png|400]]

### Hızlı Yakalama şablonları

Yakalanan metni biçimlendirmek için bir şablon uygulayabilirsiniz. Hızlı Yakalama şablonları aşağıdaki yer tutucuları destekler:

| Yer Tutucu | Açıklama |
| --- | --- |
| `{{content}}` | Yakalanan metin |
| `{{date}}` | Geçerli tarih |
| `{{time}}` | Geçerli saat |
| `{{latitude}}` | Geçerli enlem |
| `{{longitude}}` | Geçerli boylam |
| `{{shortAddress}}` | Geçerli adresin kısa biçimi |
| `{{fullAddress}}` | Tam geçerli adres |
| `{{googleMapsLink}}` | Geçerli konuma Google Haritalar bağlantısı |
| `{{appleMapsLink}}` | Geçerli konuma Apple Haritalar bağlantısı |
| `{{openStreetMapLink}}` | Geçerli konuma OpenStreetMap bağlantısı |

Belirli bir yakalama konumu için Hızlı Yakalama widget'ını yapılandırmak üzere [[#Widget'ları özelleştirme]] bölümündeki adımları kullanın. Ana Ekran widget'ları birden fazla yakalama konumu görüntüleyebilir.

![[ios-quick-capture-widget.png|400]]

## Kısayollar

Obsidian, Apple'ın Kısayollar uygulamasıyla entegre olarak güçlü otomasyonlar oluşturmanıza olanak tanır. Kullanılabilir kısayollar şunlardır:

- **Hızlı Yakalama** — Yapılandırılmış bir yakalama konumu kullanarak Hızlı Yakalama'yı açın
- **Yer İmini Aç** - Kasanızdan yer imi eklenmiş bir notu açın
- **Yeni Not Aç** — Kasanızda yeni bir not oluşturun
- **Günlük Notunu Aç** — Doğrudan günün günlük notuna gidin
- **Günlük Nota Kaydet** — Obsidian uygulamasını açmadan günlük nota metin ekleyin veya başına metin ekleyin
- **Yer İmine Kaydet** — Obsidian uygulamasını açmadan yer imi eklenmiş bir nota metin ekleyin veya başına metin ekleyin
- **Yer İmi Eklenmiş Notu Al** — Yer imi eklenmiş bir nottan metin alır
- **Günlük Notu Al** — Günlük nottan metin alır
- **Kasada Ara** — Kasanızda bir anahtar kelime arayın
- **Bağlantıyı Yer İmlerine Ekle** — Yer imlerinize bir web bağlantısı ekleyin
- **Obsidian'ı Aç** — Obsidian'ı açar

Kayıt kısayolları, arka planda bir nota içerik eklemenize olanak tanıdıkları için hızlı not tutmada özellikle kullanışlıdır.

## Paylaş Sayfası

Obsidian'ın Paylaş Sayfası, web sayfalarından içerik yakalamanıza olanak tanır. Ayrıca YouTube ve diğer sosyal ağlar gibi uygulamalarla da çalışır.

> [!note]
> - Yerel Paylaş Sayfası iOS ve iPadOS 18 ve üzeri sürümlerde kullanılabilir.
> - Bu bölümde açıklanan Paylaş Sayfası özellikleri Obsidian 1.13.0 veya sonraki sürümlerini gerektirir.

Başka bir uygulamadan Obsidian'a hızlıca içerik göndermek için Paylaş Sayfasını kullanın:
1. Başka bir uygulamada **Paylaş** düğmesine dokunun.
2. **Obsidian**'ı seçin.
3. Bir Konum seçin.
4. Yakalanan içeriği gözden geçirin veya düzenleyin.
5. **Kaydet**'e dokunun.

![[ios-share-sheet-extension.png|400]]

### Konumlar

Konumlar, paylaşılan içeriğin kaydetmeden önce nereye gideceğine karar vermenizi sağlar.

Konumlar şunlara kaydedebilir:
- **Yeni not** — Bir kasada veya klasörde yeni bir not oluşturun.
- **Günlük not** — Günün günlük notuna içerik ekleyin veya başına içerik ekleyin.
- **Yer imi eklenmiş not** — Yer imi eklenmiş bir nota içerik ekleyin veya başına içerik ekleyin.
- **Not** — Kasanızdaki mevcut bir notu seçin.
- **Yeni yer imi** — Paylaşılan bir URL'yi Obsidian yer imlerine kaydedin.

![[ios-share-sheet-locations.png|400]]

### Konumları Özelleştirme

Makaleleri bir gelen kutusuna kaydetme, günlük notunuza alıntı ekleme veya yer imlerine bağlantı ekleme gibi yaygın iş akışları için Konumlar oluşturabilirsiniz.

Konumları özelleştirmek için:

1. iOS Paylaş Sayfasından Obsidian'ı açın.
2. Araç çubuğundaki mevcut Konuma dokunun.
3. Yeni bir Konum oluşturmak için **+** düğmesine dokunun veya düzenlemek için mevcut bir Konumu seçin.
4. Kasayı, davranışı ve isteğe bağlı ayarları seçin.

`Davranış` türüne bağlı olarak şu gibi seçenekleri yapılandırabilirsiniz:
- Klasör
- Şablon
- Yer imi grubu
- Ekleme veya başa ekleme konumu
- Paylaşılan bağlantıların **Tam Metin** mi yoksa yalnızca **URL** mi yakalayacağı

![[ios-share-sheet-add-location.png|400]]

### Paylaşırken Şablon Kullanma

Paylaş Sayfasından içerik paylaşırken bir şablon kullanabilirsiniz. Şablonlar, yakalanan web içeriğini sayfa başlığı, yazar, kaynak web sitesi ve yayın tarihi gibi ayrıntılarla biçimlendirmenize olanak tanır.

Şablonlu bir Konum ayarlamak için:

1. iOS Paylaş Sayfasından Obsidian'ı açın.
2. Araç çubuğundaki mevcut Konuma dokunun.
3. Yeni bir Konum oluşturmak için **+** düğmesine dokunun.
4. Konum için bir ad girin.
5. Bir kasa seçin.
6. **Davranış**'ı **Yeni Not** olarak ayarlayın.
7. **İsteğe Bağlı** bölümünde **Şablon**'a dokunun.
8. Şablon olarak kullanmak için kasanızdan bir not seçin.
9. Konumu kaydetmek için **Kaydet**'e dokunun.

![[ios-share-sheet-set-template.png|400]]

Bu Konumu kullanarak bir bağlantı paylaştığınızda, Obsidian önce şablonu uygular, ardından paylaşılan içeriği ekler.

Desteklenen şablon yer tutucuları:

| Yer Tutucu | Açıklama |
| --- | --- |
| `{{author}}` | Makalenin yazarı |
| `{{description}}` | Makalenin açıklaması veya özeti |
| `{{domain}}` | Web sitesinin alan adı |
| `{{favicon}}` | Web sitesinin favicon URL'si |
| `{{image}}` | Makalenin ana görselinin URL'si |
| `{{published}}` | Makalenin yayın tarihi, varsayılan tarih biçimini kullanır |
| `{{published: YYYY-MM-DD}}` | Özel tarih biçimi kullanan yayın tarihi |
| `{{site}}` | Web sitesinin adı |
| `{{title}}` | Makalenin başlığı |
| `{{url}}` | Makale URL'si |
| `{{wordCount}}` | Çıkarılan içerikteki toplam kelime sayısı |

Standart şablon tarih ve saat yer tutucularını da kullanabilirsiniz:

| Yer Tutucu | Açıklama |
| --- | --- |
| `{{date}}` | Geçerli tarih |
| `{{date: YYYY-MM-DD}}` | Özel biçim kullanan geçerli tarih |
| `{{time}}` | Geçerli saat |
| `{{time: HH:mm}}` | Özel biçim kullanan geçerli saat |

## Siri entegrasyonu

Obsidian ile etkileşim kurmak için Siri sesli komutlarını kullanabilirsiniz:

- "Capture using Obsidian"
- "Capture to Obsidian"
- "Open my daily note in Obsidian"
- "Search in Obsidian"

## Spotlight entegrasyonu

iOS Spotlight'ta "Obsidian" araması yaptığınızda hızlı işlemler göreceksiniz:
- Yeni Not
- Ara
- Günlük Not

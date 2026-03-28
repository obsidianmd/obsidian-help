---
permalink: android
---
Android için Obsidian mobil uygulaması, Android cihazınıza güçlü not alma yetenekleri sunar. [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) üzerinden veya [APK dosyası](https://obsidian.md/download) olarak indirebilirsiniz.
Android 5.1 ve üzeri sürümleri destekler.

Bu sayfa, widget'lar, Hızlı Ayarlar entegrasyonu ve kısayollar dahil olmak üzere Android'e özgü özellikleri kapsar.

## Senkronizasyon

Notlarınızı Android'deki Obsidian ile senkronize etmek için [[Notlarınızı cihazlar arasında senkronize edin]] sayfasına bakın.

## Kasa konumu

Android'de Obsidian'ı başlattığınızda, kasa verilerinizin nerede saklanacağını seçmeniz istenecektir. **Cihaz depolaması** (önerilen) veya **Uygulama depolaması** seçeneklerinden birini tercih edebilirsiniz.

### Cihaz depolaması

**Cihaz depolaması** seçeneğiyle verileriniz, cihazınızdaki paylaşımlı bir konumda saklanır. Bu, Obsidian kasanızın üçüncü taraf [[Notlarınızı cihazlar arasında senkronize edin|senkronizasyon]] araçları gibi diğer uygulamalar ve hizmetler tarafından erişilebilmesini sağlar.

Bu, senkronizasyon araçlarıyla daha iyi uyumluluk sunduğu ve uygulamayı kaldırsanız bile verilerinizin korunmasını sağladığı için önerilen seçenektir. Ancak bu seçenek, cihazınızın dosyalarına erişmek için ek izinler gerektirir.

Android'in kısıtlamaları nedeniyle Obsidian, güvenilir bir şekilde çalışabilmek için "Tüm dosyalar" erişimi talep edecektir. Google, Obsidian gibi "belge yönetimi uygulamaları" olarak kabul edilen uygulamalar için bunu önerir. [Daha fazlasını öğrenin](https://developer.android.com/training/data-storage/manage-all-files).

Uygulama bu izni yalnızca cihazınızdaki verilerinize erişmenize yardımcı olmak için kullanır. Verileriniz bizim tarafımızdan asla erişilebilir değildir. Verilerinizi nasıl koruduğumuz ve gizliliğinizi nasıl sağladığımız hakkında daha fazla bilgi edinmek için [Güvenlik sayfamızı](https://obsidian.md/security) ziyaret edin.

### Uygulama depolaması

**Uygulama depolaması** seçeneğiyle verileriniz, Obsidian'ın özel uygulama depolama alanında saklanır. Bu, ek gizlilik için verilerinizi diğer uygulamalardan izole tutar.

Harici senkronizasyon araçları kullanmıyorsanız ve notlarınız için daha sıkı uygulama düzeyinde korumalı alan tercih ediyorsanız bu iyi bir seçenektir.

Bu seçenekle [[Obsidian Sync'e giriş|Obsidian Sync]] ve [[Topluluk Eklentileri]] aracılığıyla sunulan üçüncü taraf senkronizasyon eklentilerini kullanabilirsiniz, ancak paylaşımlı depolamaya dayanan Syncthing gibi araçları kullanamazsınız.

> [!warning] Uygulama depolaması kullanıyorsanız Obsidian'ı kaldırmak yerel notlarınızı silecektir
> **Uygulama depolaması** seçeneğini kullanıyorsanız, uygulamayı kaldırdığınızda yerel kasa verileriniz silinecektir. Diğer cihazlarınızdaki Obsidian kasa verileri silinmeyecektir.

## Widget'lar

Android için Obsidian, ana ekranınızdan kasalarınıza ve notlarınıza hızlı erişim sağlamak için çeşitli widget seçenekleri sunar. Mevcut widget'lar şunlardır:

- **Not Aç** — Belirli bir notu açar
- **Yeni Not** — Yeni bir not oluşturur
- **Ara** — Bir arama sorgusu başlatır
- **Günlük Not** — Günlük notunuzu açar
- **Obsidian'ı Aç** — Uygulamayı başlatır

> [!note] Not
> Bu widget'lar statiktir ve seçilen not veya kasanın önizlemelerini göstermez.

Ana ekranınıza widget eklemek için:
1. Ana ekranınızda herhangi bir yere dokunup basılı tutun
2. "Widget'lar" seçeneğini seçin
3. Obsidian'ı bulun, ardından kullanmak istediğiniz bir widget'ı seçin.

> [!note] Not
> Obsidian widget'ları yeniden boyutlandırılabilir. Bir widget'ı yeniden boyutlandırmak için dokunup basılı tutun, ardından yeniden boyutlandırma tutamaçlarını sürükleyin.

Farklı dosyaları açmak veya farklı arama sorgularını tetiklemek için aynı türde birden fazla widget ekleyebilirsiniz.

Bir widget'ı yapılandırmak için ana ekranınızda widget'a uzun basın, ardından "Düzenle" veya "Yapılandır" seçeneğini bulun. Bu, o widget'ın dokunma eylemi için gereken belirli parametreleri (Dosya veya Yol, Arama Sorgusu ve Kasa Adı gibi) belirlemenizi sağlayacaktır.

Android Widget'ları hakkında daha fazla bilgi için bu [Google Destek makalesine](https://support.google.com/android/answer/9450271?hl=en) bakın.

## Hızlı Ayarlar kutucukları

Android 7.0 veya üzeri gerektirir.

Bildirim gölgesinden uygulamaya hızlı erişim için bir Obsidian Hızlı Ayarlar kutucuğu ekleyin. Ana Ekranınızda ve Kilit Ekranınızda çalışır.

> [!note] Not
> Uygulama widget'larından farklı olarak, aynı türde yalnızca bir Hızlı Ayarlar kutucuğu ekleyebilirsiniz.

Bildirim gölgenize bir hızlı ayarlar kutucuğu eklemek için:

1. Bildirim gölgenize erişin, genellikle durum çubuğunuzdan aşağı kaydırarak. Not: daha fazla seçenek görmek için bir kez daha kaydırmanız gerekebilir.
2. Hızlı Ayarlar kutucuklarında "Düzenle" seçeneğini seçin - bu genellikle Wi-Fi, Bluetooth ve Yön Kilidi gibi geçiş düğmelerinin bulunduğu bölümün aynısıdır.
3. Bir Obsidian Hızlı Ayarlar kutucuğu bulup seçin, ardından istediğiniz şekilde yeniden düzenleyin.
4. Bir Hızlı Ayarlar kutucuğunu yapılandırmak için yapılandırma ekranını açmak üzere dokunup basılı tutun.

Android Hızlı Ayarlar hakkında daha fazla bilgi için bu [Google Destek makalesine](https://support.google.com/android/answer/9083864?hl=en) bakın.

## Kısayollar

Android 7.1 veya üzeri gerektirir.

Obsidian, çeşitli yollarla erişilebilen uygulama kısayolları sağlar:

- Obsidian uygulama simgesine uzun basın
- Kısayol simgesini ana ekranınıza sürükleyin
- Başlatıcınızdaki arama çubuğu aracılığıyla erişin (çoğu cihaz üreticisinde mevcuttur)

Mevcut kısayollar:

- **Not aç** — Kasanızdaki belirli bir notu açar
- **Günlük not** — Doğrudan bugünün günlük notuna atlar

> [!note] Not
> Obsidian 1.11'deki kısayollar yapılandırılabilir değildir ve sonraki sürümlerde notlarınıza özel daha dinamik seçenekler sunmak üzere yeniden tasarlanacaktır.

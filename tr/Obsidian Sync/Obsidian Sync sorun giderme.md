---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Bu sayfa, Obsidian Sync ile karşılaşabileceğiniz nadir sorunları ve bunların nasıl çözüleceğini listeler.'
---
Bu sayfa, [[Obsidian Sync'e giriş|Obsidian Sync]] ile karşılaşabileceğiniz yaygın olmayan sorunları ve bunları nasıl çözeceğinizi listeler. Devam etmeden önce, [[Durum simgesi ve mesajlar]] ve [[Sıkça sorulan sorular]] sayfalarını gözden geçirmenizi öneririz.

## Genel

### Çakışma çözümleme

Bir çakışma, aynı dosyayı iki veya daha fazla cihazda senkronize olmadan önce değiştirdiğinizde meydana gelir. Örneğin, bilgisayarınızda bir not düzenlersiniz. Bu değişiklik yüklenmeden önce, aynı notu telefonunuzda da değiştirirsiniz.

Çakışmalar çevrimdışı çalışırken daha sık meydana gelir. Daha fazla değişiklik ve senkronizasyonlar arasında daha uzun süre olması, çakışma olasılığını artırır.

#### Obsidian Sync çakışmaları nasıl ele alır

Obsidian Sync bir çakışma bulduğunda, sonuç dosya türüne bağlıdır:

- **Markdown dosyaları**: Obsidian Sync, Google'ın [diff-match-patch](https://github.com/google/diff-match-patch) algoritmasını kullanarak değişiklikleri birleştirir.
- **Diğer dosya türleri**: Canvas dahil tüm diğer dosyalar için Obsidian, "en son değiştirilen kazanır" yaklaşımını kullanır. En son değiştirilen sürüm, önceki sürümlerin yerini alır.

Eklenti ayarları gibi Obsidian ayarlarındaki çakışmalar için Obsidian Sync, JSON dosyalarını birleştirir. Yerel JSON'daki anahtarları uzak JSON'un üzerine uygular.

#### Çakışma çözümleme seçenekleri

Obsidian 1.9.7'den itibaren çakışmaların nasıl ele alınacağını seçebilirsiniz. Bu ayarı yapılandırmak için:

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda **Sync**'i seçin.
3. **[[Sync ayarları ve seçici senkronizasyon#Çakışma çözümleme|Çakışma çözümleme]]** altında, tercih ettiğiniz seçeneği belirleyin:
   - **Otomatik olarak birleştir** (varsayılan): Obsidian Sync, farklı cihazlardan gelen tüm değişiklikleri tek bir dosyada birleştirir. Bu, tüm düzenlemeleri kaydeder, ancak bazen yinelenen metin veya biçimlendirme sorunları oluşturabilir. Bunları manuel olarak düzeltmeniz gerekir.
   - **Çakışma dosyası oluştur**: Obsidian çakışan değişiklikler bulduğunda, otomatik birleştirme yerine ayrı bir çakışma dosyası oluşturur. Daha sonra her iki sürümü de gözden geçirip kendiniz birleştirebilirsiniz. Bu, nihai sonuç üzerinde tam kontrol sağlar.

> [!warning]+ Tüm cihazlarda yapılandırın
> Çakışma çözümleme ayarları cihaza özeldir. Tercih ettiğiniz seçeneği her cihazınızda yapılandırmanız gerekir. Bu, tüm senkronize cihazlarınızda aynı davranışı sağlar.

**Çakışma dosyası adlandırma kalıbı**

"Çakışma dosyası oluştur" seçeneğini kullandığınızda, Obsidian bu adlandırma kalıbıyla yeni bir dosya oluşturur:

```
orijinal-not-adı (Conflicted copy cihaz-adı YYYYAAGGSSDKDK).md
```

Örneğin, `Toplantı notları.md` adlı bir notta çakışma olursa, çakışma dosyası şu şekilde adlandırılabilir:

```
Toplantı notları (Conflicted copy MyMacBook2 202411281430).md
```

Çakışma dosyası, çakışmanın tespit edildiği cihazdaki değişiklikleri içerir. Orijinal dosya uzak sürümü korur. Her iki dosyayı karşılaştırabilir ve içeriği manuel olarak birleştirebilirsiniz.

> [!info]+ Senkronizasyon günlüğünü kontrol edin
> Çakışmaların ne zaman gerçekleştiğini kontrol etmek için [[Durum simgesi ve mesajlar#Senkronizasyon etkinliği|Senkronizasyon günlüğü]]'nü açın. "Çakışmaları birleştir" için filtreleyin veya "Çakışma" arayın.

### Sync, iki cihazda yeni oluşturduğum bir notu sildi

Obsidian Sync genellikle cihazlar arasındaki çakışan notları [[#Çakışma çözümleme|birleştirerek çakışmaları çözmeye]] çalışır. Ancak, başlangıçta otomatik olarak not oluşturan veya değiştiren kullanıcılar için sorunlar yaşanabilir. Bu, [[Günlük Notlar]] veya topluluk eklentisi [Templater](https://github.com/SilentVoid13/Templater) kullanımını içerir.

Bir cihazda yerel olarak bir not oluşturursanız ve birkaç dakika içinde Sync aynı notun uzak bir sürümünü indirirse, Sync ikisini birleştirmeden uzak sürümü koruyacaktır. Bu durumda, yerel sürümü [[Dosya Kurtarma]] kullanarak kurtarabilirsiniz.

### Sync eklenti ve ayar güncellemelerimi senkronize etmiyor

Obsidian [[Sıkça sorulan sorular#Obsidian Sync ayarlarımı canlı olarak yeniden yükler mi?|tüm ayarları canlı olarak yeniden yüklemez]]. Ayarları veya eklentileri güncelledikten sonra, değişiklikleri görmek için diğer cihazlarda Obsidian'ı yeniden başlatmanız gerekir. Mobil cihazlarda uygulamayı zorla kapatmanız gerekebilir.

> [!example]- Tema değiştirme
> - Birincil cihazınızda (genellikle bir bilgisayar), temanızı özel bir temadan varsayılana geri değiştirirsiniz.
> - Senkronizasyon günlüğü, güncellenmiş dosyaların uzak kasaya gönderildiğini onaylar, ancak mobil cihazınız hâlâ özel temayı gösterir.
> - Mobil cihazda, güncellenmiş `appearance.json` dosyasının alındığını onaylamak için senkronizasyon günlüğünü kontrol edin.
> - Mobil cihazda Obsidian'ı yeniden yükleyin veya yeniden başlatın.
> - Yeniden yükleme veya yeniden başlatma sonrasında, mobil cihaz bilgisayarınızla aynı temayı görüntülemelidir.

### Dosyalarım geri yükler yüklemez Sync'ten kayboluyor

Bu sorun en çok Windows'ta yaşanır. Windows Defender, kod blokları içeren dosyaları karantinaya alabilir ve bu da belirli notların kaybolmasına neden olur.

Bir diğer yaygın neden çift senkronizasyondur. Bu, Obsidian Sync başka bir senkronizasyon hizmetiyle birlikte çalıştırıldığında meydana gelir.

![[Obsidian Sync'e geçiş#Kasanızı üçüncü taraf senkronizasyon hizmetinizden veya bulut depolamanızdan çıkarın]]

---

Son olarak, bu durum bir cihazda bir dosyayı geri yüklediğinizde, ancak dosyanın ikincil bir cihazdan kaldırılması durumunda meydana gelebilir. Bu, dosya adında [[Durum simgesi ve mesajlar#Atlanan mesajlar|geçersiz karakterler]] bulunduğunda gerçekleşir.

## Android

**Cihazım Sync aracılığıyla aldığım ekleri siliyor**

Bu sorun büyük olasılıkla Google veya Android Fotoğraflar'ın eklerinizi yönetmesinden kaynaklanmaktadır. Sistemin Sync aracılığıyla alınan dosyaları değiştirmesini önlemek için, Android cihazınızdaki kasanıza bir `.nomedia` [dosyası ekleyin](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en).

> [!tip]- Bir eklenti kullanın
> Topluluk eklentisi [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) bunu kolaylaştırır. Android telefonunuza kurun. `.nomedia` dosyalarının Obsidian Sync aracılığıyla cihazlar arasında senkronize edilmediğini unutmayın.

---
permalink: sync-notes
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Obsidian notlarınızı cihazlar ve platformlar arasında nasıl senkronize edebileceğinizi öğrenin.
---
Obsidian notları cihazınızda yerel olarak saklar, böylece çevrimdışıyken bile her zaman erişiminiz olur. Notlarınıza birden fazla cihazdan erişmek için bir senkronizasyon yöntemi kurmanız gerekir.

Bu rehber, veri kaybını önleme ipuçları ve sorunsuz bir deneyim sağlama dahil olmak üzere yaygın senkronizasyon yöntemlerini kapsar.

Verilerinizi korumak için [[Obsidian dosyalarınızı yedekleyin|yedekleme rehberimizi]] de okumanızı öneririz.

## Senkronizasyon yöntemleri

Obsidian'da verileriniz, [[Yerel ve uzak kasalar|kasa]] adı verilen bir klasörde basitçe dosya olarak saklanır. Bu, verilerinizi senkronize etmenin birçok yolu olduğu anlamına gelir.

[Obsidian Topluluğu](https://obsidian.md/community) üyeleri tarafından bildirilen yaygın senkronizasyon yöntemlerinden bazıları şunlardır:

1. **Birinci taraf senkronizasyon**: [[#Obsidian Sync]]
2. **Üçüncü taraf bulut senkronizasyon**: [[#iCloud]], [[#OneDrive]] ve [[#Google Drive]]
3. **Yerel senkronizasyon**: [[#Syncthing]]
4. **Sürüm kontrolü**: [[#Git]] ve [[#Working Copy]]

## Obsidian Sync

**Önerilen sistemler**: `Windows`, `macOS`, `Linux`, `iOS`, `Android`

En basit ve resmi olarak desteklenen senkronizasyon yöntemi birinci taraf çözümümüzdür: [[Obsidian Sync'e giriş|Obsidian Sync]].

Obsidian Sync, verilerinizin kopyalarını oluşturmak için site dışı bir uzak kasa kullanarak kasalarınızı tüm cihazlar arasında senkronize tutar. Yerel bir kopya her zaman cihazlarınızda kalır.

Obsidian Sync'i yapılandırmak için [[Obsidian Sync kurulumu|kurulum rehberini]] takip edin.

## iCloud

**Önerilen sistemler**: `macOS`, `iOS`, `iPadOS`

iCloud, iOS ve macOS arasında kasaları senkronize etmek için kullanılabilir. Ancak, **Windows'ta iCloud Drive** dosya çoğaltmasına veya bozulmasına yol açabilir.

**Kasanızı iCloud Drive'da oluşturma ve saklama**:

- **iCloud Drive'ı etkinleştirin**:
    - macOS'ta: **Sistem Tercihleri → Apple Kimliği → iCloud → iCloud Drive** yolunu izleyin.
    - iOS'ta: **Ayarlar → [Adınız] → iCloud → iCloud Drive** yolunu izleyin.
- **iCloud'da yeni bir kasa oluşturun**:
    - macOS'ta:
        1. **Obsidian**'ı açın ve **Yeni kasa oluştur** seçeneğini seçin.
        2. Dosya seçicide **iCloud Drive → Obsidian** yoluna gidin.
        3. Kasanız için bir klasör oluşturun ve adlandırın.
        4. Tamamlamak için **Oluştur** seçeneğini seçin.
    - iOS'ta:
        1. **Obsidian**'ı açın ve **Yeni kasa oluştur** seçeneğine dokunun.
        2. Kasanız için bir ad girin.
        3. **iCloud'da sakla** seçeneğini açın.
        4. **Oluştur** seçeneğine dokunun.
- **Kasayı başka bir Apple cihazında açın**: 
    - Başka bir macOS veya iOS cihazında **Obsidian**'ı açın, [[Kasaları yönet|Kasa değiştiriciye]] gidin ve **Bir klasörü kasa olarak belirle** seçeneğini seçin. **iCloud Drive → Obsidian** yoluna gidin.

> [!warning]+ iOS ve iPadOS klasör konumu
> Mobil cihazlarda iCloud kullanırken, kasanızın doğru konumda saklandığından emin olun: `iCloud Drive/Obsidian/[Kasa Adınız]`.
> 
> Kasalar, iCloud Drive içindeki **Obsidian** klasöründe olmalıdır. Sağdaki Obsidian simgeli klasör doğrudur. Uygulama simgesi olmayan düz klasörü kullanmayın.
> 
> ![[iCloud-folder-location.png#interface]]
> 
> Kasa konumunuzu doğrulamak için **Dosyalar** uygulamasını açın, **Tara** seçeneğine dokunun, **Konumlar** altından **iCloud Drive**'ı seçin ve kasanızın **Obsidian** klasörünün içinde olduğunu onaylayın. Kasanız farklı bir konumdaysa senkronizasyon sorunları yaşayabilirsiniz.

> [!tip] En iyi uygulamalar
> - **macOS 14 (Sonoma) ve öncesi** için: Dosyaların boşaltılmasını önlemek amacıyla iCloud ayarlarında **Mac Depolamayı Optimize Et** seçeneğini devre dışı bırakın. Bu ayar, yalnızca Obsidian'ı değil, cihazdaki tüm iCloud depolamasını etkiler.
> - **macOS 15 (Sequoia)** için: iCloud Drive'daki **Obsidian** klasörüne sağ tıklayın ve **İndirilmiş Olarak Tut** seçeneğini seçin.

## OneDrive

**Önerilen sistemler**: `Windows`, `macOS` (Android'de sınırlı işlevsellik)

[OneDrive](https://support.microsoft.com/en-us/office/Sync-with-OneDrive-bb89981b-e382-4969-b8fd-d413a90b6db3#ID0EAABAAA=Set_up), Windows ve macOS kullanıcıları için popüler bir bulut depolama seçeneğidir. Ancak Android'de sınırlamaları vardır ve iOS'ta Obsidian kasalarını senkronize etmek için resmi olarak desteklenmez.

> [!info] Dosyaları çevrimdışı kullanılabilir tutun
> Senkronizasyon için OneDrive'ı kullanmadan önce, kasa klasörünüzün **Her zaman bu cihazda tut** olarak işaretlendiğinden emin olun. Bu, OneDrive'ın dosyaları boşaltmasını ve Obsidian'ın dosyaların eksik olduğunu düşünmesini önler.

**Kasanızı OneDrive'da oluşturma ve saklama**:

1. **OneDrive'ı kurun**:
   - Windows'ta: OneDrive uygulaması veya Microsoft hesabınız aracılığıyla giriş yapın.
   - macOS'ta: OneDrive uygulamasını indirin ve giriş yapın.
2. **OneDrive'da yeni bir kasa oluşturun**:
   - Windows/macOS'ta:
     1. **Dosya Gezgini**'ni (Windows) veya **Finder**'ı (macOS) açın ve **OneDrive → Belgeler** yoluna gidin.
     2. Yeni bir klasör oluşturun (örn., \"Obsidian Vault\").
     3. **Obsidian**'ı açın, **Yeni kasa oluştur** seçeneğini seçin ve OneDrive klasörünü seçin.
3. **Kasayı başka bir cihazda açın**:
   - Başka bir cihazda **Obsidian**'ı açın, [[Kasaları yönet|Kasa değiştiriciye]] gidin ve **Bir klasörü kasa olarak belirle** seçeneğini seçin. **OneDrive → Belgeler** yoluna gidin.

> [!info] Android senkronizasyonu
> OneDrive, Android senkronizasyonu için iyi çalışmayabilir. [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync) veya [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite) gibi uygulamaları kullanmayı düşünün.

> [!tip] En iyi uygulamalar
> - Kasa dosyalarınızı her zaman klasöre sağ tıklayıp **Her zaman bu cihazda tut** seçeneğini seçerek **Çevrimdışı Kullanılabilir** tutun.
> - Senkronizasyon sorunlarını önlemek için kasalarda OneDrive'ın **İsteğe Bağlı Dosyalar** özelliğini kullanmaktan kaçının.

## Google Drive

**Önerilen sistemler**: `Windows`, `macOS`, `Android` (iOS'ta sınırlı işlevsellik)

[Google Drive](https://support.google.com/drive/answer/10838124?hl=en) bir diğer popüler bulut depolama çözümüdür. Obsidian kasalarını senkronize etmek için resmi olarak desteklenmese de, cihazlar arasında senkronizasyon için üçüncü taraf uygulamaları ve eklentileri kullanabilirsiniz.

> [!info] iOS desteği
> Google Drive, iOS'ta Obsidian kasalarını senkronize etmek için resmi olarak desteklenmez. iOS'ta senkronizasyon için üçüncü taraf bir çözüm veya eklenti kullanmayı düşünün.

**Kasanızı Google Drive'da oluşturma ve saklama**:

1. **Google Drive'ı kurun**:
    - Windows veya macOS'ta: Google Drive uygulamasını indirin ve giriş yapın.
    - Android'de: Google Drive'ın etkin ve giriş yapılmış olduğundan emin olun.
2. **Google Drive'da yeni bir kasa oluşturun**:
    - Windows/macOS'ta:
        1. **Dosya Gezgini**'ni (Windows) veya **Finder**'ı (macOS) açın ve **Google Drive** yoluna gidin.
        2. Yeni bir klasör oluşturun (örn., \"Obsidian Vault\").
        3. **Obsidian**'ı açın, **Yeni kasa oluştur** seçeneğini seçin ve Google Drive klasörünü seçin.
3. **Kasayı başka bir cihazda açın**:
    - Başka bir cihazda **Obsidian**'ı açın, [[Kasaları yönet|Kasa değiştiriciye]] gidin ve **Bir klasörü kasa olarak belirle** seçeneğini seçin. Google Drive klasörünüze gidin.

> [!tip] En iyi uygulamalar
> - Boşaltma nedeniyle oluşabilecek senkronizasyon sorunlarını önlemek için Google Drive'da kasa dosyalarını **Çevrimdışı Kullanılabilir** olarak ayarlayın.
> - iOS için [[Obsidian Sync'e giriş|Obsidian Sync]], [[#iCloud]] gibi alternatif yöntemleri veya **Remotely Save** eklentisini kullanmayı düşünün.

## Syncthing

**Önerilen sistemler**: `Windows`, `macOS`, `Linux`

Syncthing, bulut depolamaya dayanmayan merkeziyetsiz bir dosya senkronizasyon aracıdır. Kasanızı ağ veya internet üzerinden cihazlar arasında doğrudan senkronize eder.

> [!info]+ Android desteği
> Resmi Syncthing Android uygulaması artık bakımda değildir. Ancak, [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android) adlı bir topluluk çatalı aktif geliştirmeye devam etmektedir ve Android cihazlarda kullanılabilir.

**Syncthing kullanarak kasanızı oluşturma ve saklama**:

1. **Syncthing'i kurun**:
   - Her cihaza Syncthing'i yükleyin. Kurulum rehberleri için [Syncthing web sitesine](https://syncthing.net/) bakın.
   - Android'de, GitHub sürümlerinden veya F-Droid'den [Syncthing-Fork](https://github.com/Catfriend1/syncthing-android)'u yükleyin.
2. **Paylaşılan bir klasör oluşturun ve yapılandırın**:
   - Tüm cihazlarda:
     1. Syncthing'i açın ve paylaşılan bir klasör oluşturun. Klasör yolunu Obsidian kasanıza ayarlayın.
     2. Tüm cihazlarda aynı klasörün seçildiğinden emin olun.
     3. Klasör senkronizasyon tercihlerini yapılandırın (örn., çift yönlü senkronizasyon için **Gönder ve Al**).
3. **Kasayı Obsidian'da açın**:
   - Klasör cihazlar arasında senkronize edildikten sonra, **Obsidian**'ı açın, [[Kasaları yönet|Kasa değiştiriciye]] gidin ve **Bir klasörü kasa olarak belirle** seçeneğini seçin.

> [!info] Cihaz kullanılabilirliği
> Syncthing, sürekli senkronizasyonu sağlamak için en az bir cihazın her zaman açık olduğu durumlarda en iyi şekilde çalışır.

> [!tip] En iyi uygulamalar
> - Yerel senkronizasyon için tüm cihazların aynı ağa bağlı olduğundan emin olun.
> - Her cihazda ayrı ayarlar istiyorsanız `.obsidian` klasörünü senkronizasyondan hariç tutun.
> - Geçici veya yedek dosyaların senkronize edilmesini önlemek için yoksayma kalıpları kullanın.

## Git

**Önerilen sistemler**: `Windows`, `macOS`, `Linux`

**Git**, değişiklikleri izlemenize, başkalarıyla iş birliği yapmanıza ve kasalarınızı GitHub, GitLab veya kendi barındırdığınız bir sunucu gibi depolar aracılığıyla senkronize etmenize olanak tanıyan bir sürüm kontrol sistemidir.

**Git kullanarak kasanızı senkronize etme**:

1. **Uzak bir depo kurun**:
    - Bir Git barındırma platformunda (örn., GitHub, GitLab veya kendi barındırdığınız bir sunucu) bir depo oluşturun.
2. **Kasanızı senkronize edin**:
    1. Bir terminal veya Git GUI'si (örn., GitKraken, Sourcetree) açın.
    2. Kasa klasörünüzde `git init` kullanarak bir Git deposu başlatın.
    3. Uzak depoyu ekleyin: `git remote add origin [URL]`.
    4. Değişikliklerinizi kaydedin: `git add .` ve `git commit -m "Mesajınız"`.
    5. Değişiklikleri gönderin: `git push origin main`.
3. **Diğer cihazlarda değişiklikleri çekin**:
    - Depoyu başka bir cihazda klonlayın ve `git pull origin main` kullanarak değişiklikleri çekin.

> [!info] Manuel senkronizasyon gerekli
> Git güçlü sürüm kontrolü sağlar, ancak senkronizasyon otomatik değildir. Değişiklikleri manuel olarak göndermeniz ve çekmeniz gerekir.

## iPhone ve iPad senkronizasyonu

**Önerilen seçenekler**:
- [[Obsidian Sync'e giriş|Obsidian Sync]]
- [[#iCloud]]

> [!info] Senkronizasyon hizmetlerini karıştırmaktan kaçının
> Veri çakışmalarını veya bozulmasını önlemek için aynı kasayı birden fazla hizmet arasında senkronize etmekten kaçının (örn., Obsidian Sync ve iCloud'u aynı anda kullanmak).

**Desteklenmeyen seçenekler**:
Aşağıdaki hizmetler iOS'ta resmi olarak desteklenmez, ancak kullanıcılar üçüncü taraf araçlar veya eklentiler kullanarak çözümler bulmuştur:

- Dropbox
- Google Drive
- OneDrive
- Syncthing

Bazı kullanıcılar iOS'ta kasaları senkronize etmek için **Remotely Save** veya **LiveSync** gibi eklentileri başarıyla kullanmıştır. Ancak bu yöntemler resmi olarak desteklenmez ve sonuçlar değişkenlik gösterebilir.

### Working Copy

**Önerilen sistemler**: `iOS`
**Gerektirir**: [[#Git]]

**Working Copy**, bir Git deposuna klonlama, kaydetme ve gönderme yapmanıza olanak tanıyan iOS için bir Git istemcisidir. Git aracılığıyla Obsidian kasalarını senkronize etmek için iyi çalışır, ancak bazı özellikler uygulama içi satın alma gerektirir.

**Working Copy kullanarak kasanızı senkronize etme**:

1. **Working Copy'yi yükleyin**:
    - iPhone veya iPad'inize **[Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807)** uygulamasını indirin.
2. **Git deponuzu klonlayın**:
    - Working Copy'yi açın, **Depo Ekle** seçeneğine dokunun ve depo URL'nizi girin (örn., GitHub, GitLab).
3. **Depoyu Obsidian'a bağlayın**:
    - Klonlanan depo klasörünü **Obsidian**'da boş bir kasaya bağlayın.
4. **Değişiklikleri kaydedin ve gönderin**:
    - Obsidian'da notları düzenledikten sonra, Working Copy'yi kullanarak değişiklikleri **Kaydet** ve uzak depoya **Gönder** işlemi yapın.
    - Diğer cihazlarda, kasayı senkronize etmek için Git kullanarak değişiklikleri çekin.

> [!info] Topluluk kullanımı
> Working Copy resmi olarak desteklenmese de, birçok kullanıcı Git ile kasaları senkronize etmek için başarıyla kullanmıştır.

## Sıkça sorulan sorular

**Tercih ettiğim senkronizasyon hizmeti neden resmi olarak desteklenmiyor?**

Aynı anda tek bir dosyaya erişen bazı not alma uygulamalarının aksine, Obsidian özellikleri için tüm kasaya erişim gerektirir (örn., bir dosyayı yeniden adlandırırken bağlantıları güncelleme). Bu, bazı hizmetlerin Obsidian ile güvenilir bir şekilde çalışmasını zorlaştırır.

**Dosyaları neden "Çevrimdışı Kullanılabilir" tutmam gerekiyor?**

OneDrive veya iCloud gibi hizmetler dosyaları boşaltırsa (örn., **İsteğe Bağlı Dosyalar** veya **Mac Depolamayı Optimize Et** kullanarak), Obsidian bunlara erişemez ve senkronizasyon sorunlarına neden olur. Kasa klasörünüzü **Her zaman bu cihazda tut** (OneDrive) olarak işaretleyin veya **İndirilmiş Olarak Tut** seçeneğinin etkin olduğundan emin olun (iCloud).

**Kasalarım için farklı yapılandırmaları nasıl yönetirim?**

Obsidian, [[Yapılandırma klasörü|Yapılandırma klasörleri]] özelliğini kullanarak yapılandırma klasörünü cihaz başına özelleştirmenize olanak tanır.

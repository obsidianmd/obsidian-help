---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Mevcut senkronizasyon çözümünüzden Obsidian Sync'e nasıl geçiş yapacağınızı öğrenin.
---
Mevcut senkronizasyon çözümünüzden Obsidian Sync'e nasıl geçiş yapacağınızı öğrenin.

> [!warning] Aynı dosyaları senkronize etmek için birden fazla çözüm kullanmaktan kaçının
> Obsidian Sync'i bulut depolama hizmetleriyle (örneğin iCloud, Dropbox, OneDrive, Google Drive) birlikte kullanmanızı [[Sıkça sorulan sorular#Obsidian Sync ile birlikte üçüncü taraf senkronizasyon hizmeti kullanabilir miyim?|önermiyoruz]] çünkü bu çakışmalara neden olabilir. Ancak bulut depolama hizmetleri [[Obsidian dosyalarınızı yedekleyin|yedekleme]] stratejinizde bir rol oynayabilir.

## Kasanızı üçüncü taraf senkronizasyon hizmetinizden veya bulut depolamadan taşıyın

Kasanız aşağıdaki konumlardan herhangi birinde depolanıyorsa, muhtemelen bir üçüncü taraf hizmeti tarafından senkronize edilmektedir:

- **Windows**: `C:\Users\Username\Desktop` veya `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` veya `/users/username/Documents`
- **iOS**: Dosyalar uygulamasındaki **iCloud** klasörü
- **Diğer**: Bir senkronizasyon hizmeti altındaki herhangi bir klasör, örneğin `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault` vb.

Android ve Linux'ta bu konuda genellikle daha az sorun yaşansa da, bu cihazlarda kasa konumunuzu kontrol etmekte fayda vardır.

> [!tip] Mevcut yerel kasanız bir uzak kasaya bağlıysa, Obsidian kasanın bir senkronizasyon hizmetinde olup olmadığını tespit etmeye çalışacaktır. Eğer öyleyse, Obsidian Sync ayarlarının üst kısmında bir mesaj göreceksiniz.

Senkronizasyon hizmetleriyle çakışmayı önlemek için Obsidian kasalarınızı aşağıdaki konumlarda saklamanızı öneriyoruz:

- **Windows**: Önerilen konumlar sırasıyla:
    1. `D:\` veya cihazınızdaki C sürücüsü ve ağ sürücüsü olmayan herhangi bir sürücü
    2. `C:\Vaults` (C:\ sürücüsünü kullanma izniniz varsa)
    3. `C:\Users\Username\Vaults` (kasanızı C:\Users\Username içinde tutmanız gerekiyorsa, OneDrive'ın dosyaları kaldırmamasını sağlayın. OneDrive genellikle `Desktop` ve `Documents` klasörleri dışında daha az müdahaleci davranır.)
- **macOS**: `/users/username/vaults`
- **Linux**: Dosya sistemlerinin çeşitliliği nedeniyle belirli bir öneri yoktur. Sadece Obsidian'ın tam okuma/yazma erişimine sahip olduğundan ve hiçbir senkronizasyon hizmetinin klasörü yönetmediğinden emin olun.
- **iOS/iPadOS**: Kasayı **iPhone'umda** veya **Cihazda** saklayın.
- **Android**: Cihazınızdaki `Documents/` klasörünü kullanın.

## Masaüstünde Obsidian kullanarak kasanızı taşıyın

![[Kasaları yönet#Kasayı farklı bir klasöre taşı]]

## Kasanızı mobilde taşıyın

Mobil cihazlarda Obsidian, korumalı bir ortamda çalışır, bu nedenle kasaları masaüstünde olduğu gibi uygulama içinden taşıyamazsınız.

### Android

Android dosya sistemleri cihaza göre büyük ölçüde farklılık gösterir, ancak genel olarak kasanızı manuel olarak taşımak için aynı adımları izleyin ve cihazınızdaki herhangi bir senkronizasyon hizmetinden kaldırıldığından emin olun.

### iOS ve iPadOS

Mevcut bir iCloud kasasını cihazınıza taşımak için şu adımları izleyin:

> [!note] Verileriniz zaten başka bir cihazda varsa ve Obsidian Sync'i kurduysanız, bunun yerine [[Obsidian Sync kurulumu#Başka bir cihazda uzak kasayı senkronize etme|Sync'ten yeni bir yerel kasa kurmanız]] önerilir.

- Kasanızı [[Obsidian dosyalarınızı yedekleyin|yedekleyin]].
- Cihazınızda yeni bir kasa oluşturun ve **iCloud Drive'a Kaydet** seçeneğinin devre dışı olduğundan emin olun.
- Sync'i duraklatmak için tüm cihazlarda Obsidian uygulamasını zorla kapatın.
- iOS/iPadOS cihazınızda **Dosyalar** uygulamasını açın.
- **iCloud Drive → Obsidian** altındaki kasa klasörüne uzun basın, ardından **Taşı**'yı seçin.
- Kasayı **iPhone'umda/Cihazda → Obsidian** konumuna taşıyın ve artık görünür olduğunu onaylayın.
- **Kopyala**'ya dokunun.
- **iCloud Drive → Obsidian**'a geri dönün ve eski kasa klasörünü silin.

Obsidian'ı yeniden açtığınızda, kasa bir bulut simgesi yerine bir kasa simgesi göstermelidir; bu, artık iCloud Drive'da olmadığını doğrular. Obsidian Sync de ayarlarında artık uyarı mesajını göstermeyecektir.

## Sonraki adımlar

- Obsidian Sync'i kullanmaya başlamak mı istiyorsunuz? [[Obsidian Sync kurulumu]]
- Hâlâ yardıma mı ihtiyacınız var? [[Obsidian Sync sorun giderme]] sayfasına göz atın

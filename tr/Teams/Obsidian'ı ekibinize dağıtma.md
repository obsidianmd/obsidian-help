---
permalink: teams/deploy
cssclasses:
  - soft-embed
---
Obsidian, ekip üyelerinizin her birinin cihazında yerel bir uygulama olarak çalışır. Hem çevrimiçi hem de çevrimdışı, güvenli ve gizlilik odaklı çalışacak şekilde tasarlanmıştır ve ekibinizin verileri üzerinde tam kontrol sağlar. Obsidian web tabanlı bir uygulama olarak mevcut değildir, bu nedenle uygulamayı ekip üyelerinize dağıtmanız gerekecektir.

## Obsidian'ı kurun ve güncelleyin

Ekibiniz Obsidian'ı [İndirme sayfamızdan](https://obsidian.md/download) indirebilir. Sürümler ayrıca [değişiklik günlüğüne](https://obsidian.md/changelog/) bağlantılar içeren [GitHub sürümler sayfamızda](https://github.com/obsidianmd/obsidian-releases/releases) da mevcuttur.

> [!tip] Sistem yükleyicisine ihtiyaç duyan Windows kullanıcıları için Evrensel `.exe`, Obsidian'ı tüm kullanıcılar için kurma seçeneği içerir.

Uygulamada otomatik güncellemeler etkinleştirilmişse, kullanıcılar Obsidian'ı yeniden başlattığında gelecek sürümler otomatik olarak kurulacaktır. Ayrıca, güvenlik düzeltmeleri dahil Electron çerçevesinin en son güncellemelerini almak için periyodik olarak [[Obsidian'ı Güncelle#Yükleyici güncellemeleri|yükleyici güncellemeleri]] yapmanızı öneririz.

Bu süreçte Obsidian'a ağ erişimini nasıl kısıtlayacağınızı arıyorsanız, [[Ekipler için güvenlik değerlendirmeleri#Ağ ve erişim|ağ ve erişim]] bölümünü inceleyin.

## Obsidian'ı özelleştirme

Obsidian, ekibinizin ihtiyaçlarına uyacak şekilde kolayca değiştirilebilir. Kapsamlı bir API ve geniş bir kullanıcı ekosistemi ile Obsidian, çok sayıda eklenti, tema ve tamamlayıcı araca erişim sunar.

Bu konularla ilgili güvenlik soruları için lütfen [[Ekipler için güvenlik değerlendirmeleri]] sayfasına bakın.

### Yapılandırma klasörleri

[[Yapılandırma klasörü]], bir Obsidian [[Sözlük#Kasa|kasasının]] uygulama ayarlarını sakladığı yerdir. Varsayılan olarak bu klasör `.obsidian` olarak adlandırılır, ancak tercihinize göre [[Yapılandırma klasörü#Yapılandırma klasörünüzü değiştirin|yapılandırma klasörünün adını değiştirme]] esnekliğine sahipsiniz.

Ekibinizin cihazlarına dağıtılmak üzere yapılandırma klasörünün standartlaştırılmış bir şablonunu oluşturmanızı öneririz.

### Eklentiler

[[Yerleşik Eklentiler]], Obsidian ekibi tarafından oluşturulan isteğe bağlı özelliklerdir. Bu özellikler çekirdek uygulama kod tabanına entegre edilmiştir ve açılıp kapatılabilir.

[[Topluluk Eklentileri]], Obsidian uygulamasına eklenen üçüncü taraf özelliklerdir ve topluluk dizini aracılığıyla kurulabilir. Üçüncü taraf eklentiler [Obsidian API](https://github.com/obsidianmd/obsidian-api)'sini kullanır. Eklentiler, bir kasa içindeki `.obsidian/plugins` klasöründe bulunur ve bu konuma manuel olarak kurulabilir.

### Temalar ve parçacıklar

[[Temalar]], Obsidian arayüzünü görsel olarak değiştirir. Eklentiler gibi, temalar da topluluk dizinimizden indirilebilir. Temalar, bir kasa içindeki `.obsidian/themes` klasöründe bulunur.

[[CSS kod parçaları|Parçacıklar]], Obsidian arayüzünün görsel yönlerini değiştiren küçük `.css` dosyalarıdır. Bazı durumlarda işlevsel geliştirmeler de ekleyebilir. Parçacıklar, bir kasa içindeki `.obsidian/snippets` klasöründe bulunur.

## Sıkça sorulan sorular

Hesap yönetimi ve güvenlik ile ilgili sorular için lütfen [[Ekipler için güvenlik değerlendirmeleri#Hesap güvenliği|hesap güvenliği]] bölümüne bakın.

### Dağıtım

**Lisansları birden fazla kuruluma dağıtabilir miyim?**
Şu anda, lisansların bir `.json` dosyası gibi bir dağıtım betiği aracılığıyla dağıtılmasını desteklemiyoruz. Ekibiniz için bu özellikle ilgileniyorsanız, lütfen bir [özellik isteği](https://forum.obsidian.md/c/feature-requests/8) gönderin.

**Obsidian belirli özellikleri veya yapılandırmaları bir ayar veya uygulama bayrağı aracılığıyla kilitleyebilir mi?**
Şu anda bunu, yukarıda açıklanan `.obsidian` klasörüne veya içindeki belirli dosya ve klasörlere düzenleme erişimini engelleyerek yapabilirsiniz. Ekibiniz için daha fazla erişim kontrolüyle ilgileniyorsanız, lütfen bir [özellik isteği](https://forum.obsidian.md/c/feature-requests/8) gönderin.

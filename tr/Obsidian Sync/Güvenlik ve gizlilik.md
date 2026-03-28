---
permalink: sync/security
publish: true
mobile: false
description: Obsidian Sync için güvenlik ve gizlilik hususları hakkında bilgi edinin.
---
## Şifreleme

Güvenliğiniz için [[Obsidian Sync'e giriş|Obsidian Sync]], [[Yerel ve uzak kasalar|uzak kasanızı]] ve Obsidian sunucularıyla yapılan tüm iletişimi şifreler.

Yeni bir uzak kasa oluşturduğunuzda iki seçeneğiniz vardır:

- **Uçtan uca şifreleme (varsayılan)** en güçlü güvenliği sunar ancak şifreleme parolanızı güvenle saklamanızı gerektirir. Bu, Obsidian ekibi de dahil olmak üzere hiç kimsenin notlarınıza erişemeyeceğini garanti eder.
- **Standart şifreleme**, verilerinizi aktarım sırasında ve sunucumuzda korumak için Obsidian tarafından yönetilen bir şifreleme anahtarı kullanır.

Tüm kullanıcılara en özel ve güvenli seçenek olduğu için uçtan uca şifrelemeyi öneriyoruz. Ancak şifreleme parolanızı unutur veya kaybederseniz verilerinizin sonsuza kadar şifreli ve kullanılamaz kalacağını unutmayın. Parolanızı veya şifrelenmiş verilerinizi sizin için kurtarma imkânımız yoktur.

Seçiminiz yalnızca uzak kasanızı etkiler. Obsidian yerel kasanızı şifrelemez.

### Uçtan uca şifreleme ne anlama gelir?

Uçtan uca şifreleme, verilerin cihazınızdan ayrıldığı andan itibaren şifrelendiği ve yalnızca cihazlarınızdan birinde şifreleme anahtarınız kullanılarak çözülebildiği anlamına gelir.

Verilerinizi biz okuyamayız. İnternet servis sağlayıcınız gibi olası dinleyiciler de okuyamaz.

Tam bir sunucu ihlali gibi nadir bir durumda bile verileriniz şifreli kalır — parolanızı bilmeden hiç kimse dosyalarınızın şifresini çözemez.

### Standart şifreleme kullanmanın riskleri nelerdir?

Standart şifreleme temelde uçtan uca şifrelemeden daha az güvenlidir, ancak senkronize ettiğiniz verilerin tamamen özel olmasını beklemiyorsanız kullanışlı bir seçenek olabilir. Örneğin, senkronize edilen kasanız bu Yardım sitesi gibi herkese açık bir web sitesinde [[Obsidian Publish'e giriş|yayınlanmışsa]], uçtan uca şifreleme gerekli değildir.

Standart şifreleme, bulut depolama şirketleri ve hizmet olarak yazılım platformları (Google Docs, Dropbox ve iCloud (Gelişmiş Veri Koruma olmadan) gibi) tarafından kullanılan şifreleme yöntemiyle aynıdır. Şifreleme anahtarı uygulama tarafından oluşturulur ve verilerinizi aktarım sırasında ve sunucuda korumak için kullanılır. Şifreleme anahtarı şirket sunucularında saklandığı için verilerinizin şifresini çözmek amacıyla kullanılabilir; örneğin şirketin arama emrine tabi olduğu durumlarda veya verilerinize web tarayıcısı üzerinden erişmek istediğiniz durumlarda.

Uçtan uca şifreleme, Obsidian'ın verilerinize asla erişemeyeceğini garanti eder ve tamamen özel ve güvenli kalmasını istediğiniz verileri senkronize etmek için her zaman kullanılmalıdır.

### Hangi şifrelemeyi kullanıyorsunuz?

Veri güvenliği için endüstri standardı şifreleme protokolleri uyguluyoruz. Özellikle, çevrimiçi bankacılık gibi bağlamlarda yaygın olarak kullanılan en güçlü şifreleme standardı olan [AES-256](https://www.nist.gov/publications/advanced-encryption-standard-aes-0) kullanıyoruz. Şifreleme süreci aşağıdaki teknik detayları içerir:

- **Anahtar türetme fonksiyonu:** Salt ile [scrypt](https://en.wikipedia.org/wiki/Scrypt)
- **Şifreleme algoritması:** [Galois/Counter Mode (GCM)](https://en.wikipedia.org/wiki/Galois/Counter_Mode) kullanan AES-256

### Verilerimin uçtan uca şifrelendiğini doğrulayabilir miyim?

Evet. [Obsidian Sync'in uçtan uca şifrelemesini nasıl doğrularsınız](https://obsidian.md/blog/verify-obsidian-sync-encryption/) kılavuzumuza bakın. Bu kılavuz, verilerinizin Sync sunucuları aracılığıyla gönderilip alınırken uçtan uca şifrelemenin güvenilir bir şekilde doğrulanması için adım adım talimatlar sunar.

### Obsidian üçüncü taraf güvenlik denetiminden geçti mi?

Evet. Obsidian bağımsız olarak denetlenmiştir. Denetim raporlarını görüntülemek için [Güvenlik sayfamızı](https://obsidian.md/security) ziyaret edin. Üçüncü taraf güvenlik firmalarının düzenli denetimleri, Obsidian kodunun ve prosedürlerinin en yüksek güvenlik standartlarını karşılamasını sağlar.

### Şifreleme parolamı unutursam ne olur?

Şifreleme parolanızı kaybeder veya unutursanız, uzak kasanıza ek kasalar bağlayamazsınız. Şifreleme parolası hiçbir yerde kaydedilmediği için sonsuza kadar kaybolur.

Ancak verileriniz genellikle her bir cihazınızda yerel olarak güvenle saklanır.

Obsidian Sync kullanmaya devam etmek için Sync sisteminize yeni cihazlar ekleyebilmeniz adına tam bir yeniden kurulum yapmanızı öneririz:

1. Bir şeyler ters giderse diye birincil cihazınızda tam bir kasa yedeği alın. Bu, kasa klasörünün bir kopyasını oluşturmak veya kasadan bir zip dosyası oluşturmak kadar basit olabilir.
2. Her cihazınızda uzak kasanın bağlantısını kesin. Bunu **[[Ayarlar]] → Sync → Uzak kasayı seç → Bağlantıyı kes** yolunu izleyerek yapabilirsiniz.
3. Aynı Ayarlar sayfasından birincil cihazınızda [[Obsidian Sync kurulumu#Yeni bir uzak kasa oluşturma|yeni bir uzak kasa oluşturun]]. İsteğe bağlı olarak, zaten parolasına sahip olmadığınız önceki uzak kasayı silebilirsiniz. ([[Sıkça sorulan sorular#Kaç tane uzak kasam olabilir?|Kasa limitinde]] iseniz önceki uzak kasayı silmeniz gerekebilir)
4. Birincil cihazınızın senkronize olmasını bekleyin. Ekranın sağ alt köşesindeki senkronizasyon göstergesini yeşil bir onay işareti görünene kadar izleyin.
5. Her cihazınızı aynı yeni oluşturulan uzak kasaya bağlayın. Bağlanırken kasa birleştirme hakkında bir uyarı gösterilecektir, bu beklenen bir durumdur ve devam edebilirsiniz. Bir sonrakine geçmeden önce her cihazın tamamen senkronize olmasını bekleyin. Bu, sorun olasılığını azaltır.
6. Artık tüm cihazlarınız yeni uzak kasaya bağlı olmalıdır.

## Barındırma

### Obsidian Sync sunucularını nerede barındırıyorsunuz?

[DigitalOcean](https://www.digitalocean.com) tarafından desteklenen veri merkezlerimiz, aşağıdaki konumlarda coğrafi bölgesel uzak kasa barındırma seçenekleri sunar:

> [!abstract] Sync bölgeleri
> **Otomatik**: Veri merkeziniz, ilk kurulum sırasında IP konumunuza göre seçilir.
> 
> **Asya**: Singapur
> **Avrupa**: Frankfurt, Almanya
> **Kuzey Amerika**: San Francisco, ABD
> **Okyanusya**: Sidney, Avustralya
^sync-geo-regions

### Mevcut Sync sunucumu nasıl bulurum ve nerede barındırılıyor?

Obsidian Sync sunucunuzu bulmak için şu adımları izleyin:
1. **[[Ayarlar]]** → **Sync** → **Hata ayıklama bilgisini kopyala** yoluna gidin.
2. Kopyalanan bilgiyi bir nota veya dosyaya yapıştırın.
3. Şuna benzer bir satır arayın: `Host server: wss://sync-xx.obsidian.md`

Bu satır, uzak kasanızın barındırıldığı sunucuyu gösterir. Sunucunun konumları ve çalışma süresi hakkında daha fazla bilgi için [durum sayfamızı](https://status.obsidian.md/) ziyaret edin.

## Ağ ve erişim

### Ağınızda Obsidian Sync erişimini yönetme

Ağınızda Obsidian Sync erişimini düzenlemek için aşağıdaki alan adlarını yönetmeniz gerekir:

`sync-xx.obsidian.md`

Buradaki `xx`, `1 - 100` arasında değişen bir sayıyı temsil eder.

> [!tip] Güvenlik duvarı sisteminiz destekliyorsa, sürekli artan alt alan adı sayısını karşılamak için `sync-*.obsidian.md` adresini beyaz listeye eklemenizi öneririz.

## Sınırlamalar

Obsidian Sync, notlarınızı özel ve güvenli tutmak için tasarlanmıştır. Cihazlar arasında hızlı, güvenilir senkronizasyon ve verimli depolama sunmak için şifrelemenin nasıl uygulandığı konusunda bazı bilinçli ödünler veriyoruz.

### Deterministik dosya özeti şifreleme

Dosya özetlerini deterministik olarak şifreliyoruz: aynı dosya içeriği, aynı şifreleme anahtarı ve salt kullanılarak sunucuda her zaman aynı şifreli özeti üretir. Bu, Sync'in kopyaları algılamasına ve aynı verileri yeniden yüklemekten veya yeniden depolamaktan kaçınmasına yardımcı olur; bu da özellikle sürüm geçmişinde veya büyük dosyaların tekrarlandığı durumlarda bant genişliği ve uzak depolama tasarrufu sağlar.

Ancak bir saldırgan bir Sync sunucusunu ele geçirirse ve kullanıcıyı kendi seçtiği dosyaları yüklemeye zorlayacak ayrı bir yönteme sahipse, saldırgan kullanıcıyı belirli dosyaları yüklemeye zorlayabilir ve dosyanın kullanıcının daha önce yüklediği bir dosyayla eşleşip eşleşmediğini belirleyebilir.

### Yol ve içerik arasında kriptografik bağlama yok

Bazı meta veriler uçtan uca şifrelenmez: hangi cihazın bir dosyayı yüklediği veya sildiği, ne zaman yüklendiği ve şifreli dosya yolları ile şifreli içerik arasındaki *eşleme*. Bu veriler sunucu tarafından okunabilir, böylece değişiklikleri yönlendirebilir, bir dosyanın sürüm geçmişini belirleyebilir ve cihazları senkronize tutabilir.

Bir Sync sunucusu ele geçirilirse, bir saldırgan bu eşlemeyi değiştirerek şifreli bir dosyanın içeriğinin farklı bir dosya yolu altında teslim edilmesine neden olabilir. Bu, düz metin verilerinizi açığa çıkarmaz; veriler şifreli kalır.

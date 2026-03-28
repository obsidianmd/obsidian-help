---
permalink: sync/setup
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Obsidian Sync''i satın aldınız ve başlamaya hazırsınız. Bu kılavuz, Obsidian Sync ayarlarınızı günlük kullanım için kurmanıza ve düzenlemenize yardımcı olacaktır.'
---
Obsidian Sync satın aldınız ve başlamaya hazırsınız. Bu rehber, Obsidian Sync ayarlarınızı günlük kullanım için kurmanıza ve düzenlemenize yardımcı olacaktır.

- **Obsidian Sync'te yeni misiniz?** Bakınız: [[#Obsidian Sync'i ilk kez kurma]]
- **İkinci bir cihaz mı bağlıyorsunuz?** Bakınız: [[#Başka bir cihazda uzak kasayı senkronize etme]]
- **Değişiklik yapmanız mı gerekiyor?** Bakınız: [[#Uzak kasalarınızı yönetme]]

## Obsidian Sync'i ilk kez kurma

Bu bölümde, yeni bir [[Yerel ve uzak kasalar|uzak kasa]] oluşturacak ve mevcut bir yerel kasaya bağlayacaksınız. Bu amaç için Obsidian Sync kullanmak üzere yeni, boş bir yerel kasa oluşturmanıza gerek yoktur.

> [!info] Mevcut kasanız iCloud, OneDrive, Dropbox veya başka bir senkronizasyon klasöründe mi? Eğer **evet** veya **emin değilseniz**, devam etmeden önce lütfen [[Sıkça sorulan sorular#Obsidian Sync ile birlikte üçüncü taraf senkronizasyon hizmeti kullanabilir miyim?|bunu]] ve [[Obsidian Sync'e geçiş]] sayfasını okuyun.

**Ön koşullar**

- Bir Obsidian hesabı. Hesabınız yoksa, [hemen kaydolun](https://obsidian.md/auth?returnto=%2Faccount%2Fsync#signup).
- Aktif bir Obsidian Sync [[Planlar ve depolama limitleri|aboneliği]]. Aboneliğiniz yoksa, [hesap kontrol panelinizden](https://obsidian.md/account/sync) abone olun.
- **Önerilen**: Obsidian dosyalarınız için bir [[Obsidian dosyalarınızı yedekleyin|yedekleme sistemi]]. Senkronizasyon hizmeti yedekleme değildir.

### Obsidian hesabınızla giriş yapın

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda **Genel**'i seçin.
3. **Hesap → Hesabınız** altında **Giriş yap**'ı seçin.
4. **E-posta** alanına e-postanızı girin.
5. **Parola** alanına parolanızı girin.
6. **Giriş yap**'ı seçin.

### Obsidian Sync'i etkinleştirme

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda **Seçenekler** altında **Yerleşik Eklentiler**'i seçin.
3. **Sync**'i etkinleştirin.

### Yeni bir uzak kasa oluşturma

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda **Sync**'i seçin.
3. **Uzak kasa** yanında **Seç**'i seçin.
4. **Yeni kasa oluştur**'u seçin.
5. **Kasa adı** alanına uzak kasanın adını girin.
6. **Bölge** alanında, uzak kasanız için sunucu [[Obsidian Sync kurulumu#Bölgesel senkronizasyon sunucuları|bölgenizi]] seçin.
7. **Şifreleme şifresi** alanında, kasanız için bir parola seçin. Bu, uçtan uca şifrelenmiş bir kasa oluşturur. Kasa parolası, Obsidian hesap parolanızdan bağımsızdır ve her bir kasanız için farklı olabilir. Daha fazla bilgi için [[Güvenlik ve gizlilik]] sayfasına bakın.
8. **Oluştur**'u seçin.

### Uzak kasaya bağlanma

1. Yeni oluşturduğunuz kasanın yanındaki **Bağlan**'ı seçin.
2. [[Obsidian Sync/Güvenlik ve gizlilik#Uçtan uca şifreleme ne anlama gelir?|Uçtan uca şifreleme]] tercih ettiyseniz, kasa için yapılandırdığınız parolayı **Şifreleme şifresi** alanına girin.
3. **Kasanın kilidini aç**'ı seçin.
4. **Henüz senkronizasyonu başlatmayın.** [[#Obsidian Sync ayarlarını düzenleme|Obsidian Sync ayarlarını düzenleme]] bölümünde senkronizasyon ayarlarınızı kontrol edin.
    - Hemen senkronizasyona başlamak istiyorsanız, [[#Obsidian Sync ile senkronizasyonu başlatma|Obsidian Sync ile senkronizasyonu başlatma]] bölümüne geçin.
5. Henüz yapmadıysanız, **Klasörleri Hariç Tut** ve **Senkronizasyonu Başlat** uyarısını içeren açılır pencereyi kapatın veya görmezden gelin. Sonraki adıma geçin.

#### Obsidian Sync ayarlarını düzenleme

1. Gerekirse **[[Ayarlar]]** → **Sync** bölümüne gidin.
2. Bir cihaz adı eklenmemişse, Sync günlüklerinizi okumayı kolaylaştırmak için bir tane ekleyin!
3. **Seçici senkronizasyon** ve **Kasa ayarları senkronizasyonu** altındaki ayarları değiştirerek hangi öğelerin uzak kasa ile senkronize edilmesi gerektiğini belirleyin.
    - **Not**: Yakın zamanda bir uzak kasadan bağlantıyı kesip uygulama yeniden başlatılmadan tekrar bağlandıysanız, bazı ayarlar zaten açık olabilir.
4. Herhangi bir ayarı değiştirirseniz, Obsidian'ı tamamen yeniden başlatın.
5. Obsidian yeniden başlatıldığında, **[[Ayarlar]]** → **Sync** bölümüne geri dönün.

#### Obsidian Sync ile senkronizasyonu başlatma

Uzak kasaya bağlandıktan sonra senkronizasyonu başlatıyorsanız, bir **Senkronizasyonu Başlat** düğmesi göreceksiniz. Senkronizasyonu başlatmak için bu düğmeyi seçin.

Obsidian Sync ayarlarını düzenleyip uygulamayı yeniden başlattıktan sonra senkronizasyonu başlatıyorsanız, Sync ayarlarında bir **Devam et** düğmesi göreceksiniz. Senkronizasyonu başlatmak için bu düğmeyi seçin.

> [!done] Senkronizasyon durumu
> Obsidian Sync tamamlandığında, sağ alt köşede (masaüstü) veya sağ kenar çubuğunda (mobil) onay işaretli yeşil bir daire ![[obsidian-icon-sync-synced.svg#icon]] görünür. Sync günlüğü ayrıca en son mesajlarından biri olarak "Tamamen Senkronize Edildi" ifadesini gösterecektir.
>
> Senkronizasyon durumları hakkında daha fazla bilgi için [[Durum simgesi ve mesajlar]] sayfasına bakın.
^obsidian-sync-status

Diğer cihazları yeni oluşturulan ve senkronize edilen uzak kasanıza bağlamak için [[Obsidian Sync kurulumu#Başka bir cihazda uzak kasayı senkronize etme|Başka bir cihazda uzak kasayı senkronize etme]] bölümüne geçin.

Ayarlar ve dosyalar hakkında daha fazla bilgi edinmek için [[Sync ayarları ve seçici senkronizasyon]] sayfasına geçin.

## Başka bir cihazda uzak kasayı senkronize etme

Bu bölümde, zaten bir uzak kasa oluşturmuş ve ona veri yüklemiş olmanız gerekmektedir. Şimdi diğer cihazlarınızı bu kasaya bağlamak istiyorsunuz.

**Ön koşullar**
- Bir Obsidian hesabı. Hesabınız yoksa, [hemen kaydolun](https://obsidian.md/account#mode=signup).
- Aktif bir Obsidian Sync aboneliği. Aboneliğiniz yoksa, [hesap kontrol panelinizden](https://obsidian.md/account) abone olun.
- [[Yerleşik Eklentiler]] ayarlarında Sync etkinleştirilmiş olmalıdır.
- Aktif bir uzak kasa. Henüz oluşturmadıysanız, lütfen önce bir [[Obsidian Sync kurulumu#Yeni bir uzak kasa oluşturma|uzak kasa]] oluşturun.
- **Önerilen**: En çok kullandığınız cihazda Obsidian dosyalarınız için bir [[Obsidian dosyalarınızı yedekleyin|yedekleme sistemi]]. Senkronizasyon hizmeti yedekleme değildir.

### Kasa değiştiriciden kasanızı senkronize etme

Obsidian'ı yeni kurduysanız, programı açtığınızda [[Kasaları yönet|Kasa değiştirici]] karşınıza çıkacaktır. Uzak kasanın içeriğinden yeni bir yerel kasa oluşturmak için aşağıdaki adımları izleyin.

1. Obsidian'ı açın (ilk kez açtığınızı varsayarak)
2. Kurulumunuza bağlı olarak seçeneklerden birini seçin:
	1. **Masaüstü**: Obsidian Sync'ten kasa aç yazan bölümde **Kurulum**'u seçin
	2. **Mobil/Tablet**: **Obsidian Sync Kurulumu**
3. Obsidian kullanıcı hesabınızla giriş yapın
	1. [[2 faktörlü kimlik doğrulama|2FA]] kuruluysa, 2FA kodunuzu girin.
4. Bu cihaza hangi uzak kasayı senkronize etmek istediğinizi seçmeniz istenecektir. **Bağlan**'ı seçin.
5. Bu verileri tutmak için cihazda oluşturulacak yerel kasa için bir ad seçmeniz istenecektir. İstediğiniz adı girin.
	1. [[Obsidian URI]] kullanıyorsanız, diğer cihazınızdaki yerel kasayla aynı adı kullanmanız önerilir.
6. **Oluştur**'u seçin.
7. Obsidian Sync sunucunuza bağlanıp aboneliği doğrularken uzak kasalar penceresi kısa süreliğine görünecektir. Ardından bir *Bağlantı Kurulumu* penceresi sunulacaktır.
	1. Bu pencereyi kapatmanız veya aşağı kaydırmanız ve önce [[#Obsidian Sync ayarlarını düzenleme|Obsidian Sync ayarlarını düzenlemeniz]] şiddetle tavsiye edilir.
	2. Herhangi bir Sync ayarını değiştirirseniz, lütfen Obsidian'ı yeniden yükleyin veya yeniden başlatın.

### Obsidian Ayarlarından kasanızı senkronize etme

Bu cihazda zaten bir yerel kasa oluşturduysanız ve bu yerel kasayı bir uzak kasaya bağlamak istiyorsanız, talimatlar [[#Obsidian Sync'i ilk kez kurma]] bölümüyle çok benzerdir.

![[Obsidian Sync kurulumu#Obsidian hesabınızla giriş yapın]]

![[Obsidian Sync kurulumu#Obsidian Sync'i etkinleştirme]]

#### Uzak kasaya bağlanma

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda **Sync**'i seçin.
3. **Uzak kasa seç** yanında **Seç**'e tıklayın.
4. Bağlanmak istediğiniz uzak kasanın yanındaki **Bağlan**'a tıklayın.
5. **Şifreleme şifresi** alanına, varsa kasanızın parolasını girin.
6. Senkronizasyonu başlatmanız istenecektir. Önce senkronizasyon ayarlarınızı bekleyip düzenlemeniz önerilir. Kasanın tamamını olduğu gibi cihaza senkronize etmek istiyorsanız, **Senkronizasyonu Başlat**'ı seçebilirsiniz.

> [!warning] Cihazınızdaki kasa zaten bazı notlar içeriyorsa (önerilmez), devam etmeden önce bu notların birleştirileceği konusunda uyarılacaksınız. Çakışmalar [[Obsidian Sync sorun giderme#Çakışma çözümleme|Sync'in çakışma çözümleme]] yöntemiyle çözülecektir.

![[Obsidian Sync kurulumu#Obsidian Sync ayarlarını düzenleme]]

![[Obsidian Sync kurulumu#Obsidian Sync ile senkronizasyonu başlatma]]

## Uzak kasalarınızı yönetme

Bir uzak kasa oluşturup bağlandınız. Ayrıca bu uzak kasayı birden fazla cihaza senkronize etmiş olabilirsiniz. Bu bölüm, bu uzak kasayı yönetirken ihtiyaç duyabileceğiniz diğer yaygın talimatları kapsamaktadır.

### Uzak kasadan bağlantıyı kesme

1. Obsidian'ın **[[Ayarlar]]** bölümünü açın.
2. Kenar çubuğunda **Sync**'i seçin.
3. Uzak kasalar yanındaki **Bağlantıyı kes** düğmesine tıklayın.

Artık uzak kasadan bağlantınız kesilmiştir ve bu cihazda senkronizasyon yapılmamaktadır.

### Uzak kasayı silme

> [!tip] Bir uzak kasayı silmek, cihazınızdaki yerel verilerinizi silmez.

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda **Sync**'i seçin.
3. Uzak kasalar yanında **Yönet**'i seçin. Uzak kasalarınızın listesiyle bir pencere açılacaktır.
4. Silmek istediğiniz uzak kasanın yanındaki çöp kutusu simgesini ![[lucide-trash-2.svg#icon]] seçin.
5. Kırmızı **Sil** düğmesini seçerek silme işlemini onaylayın.
6. Uzak kasanız silinmiştir.

> [!info] Çöp kutusu simgesi görünmüyorsa, önce uzak kasadan bağlantıyı kesmeniz gerekebilir. Bağlantı kesildikten sonra, uzak kasaların listesini açmak için **Seç** düğmesini seçin.

### Bölgesel senkronizasyon sunucuları

Obsidian Sync, uzak kasanız için barındırma konumunu seçmenize olanak tanır. Obsidian'ın `1.4.16` veya daha eski bir sürümünü kullanıyorsanız, konum sizin için otomatik olarak seçilecektir.

Mevcut kasanızın bölgesinden emin değilseniz, rehberlik için [[Obsidian Sync/Güvenlik ve gizlilik#Mevcut Sync sunucumu nasıl bulurum ve nerede barındırılıyor?|Mevcut Sync sunucumu nerede bulabilirim ve nerede barındırılıyor?]] bölümüne bakın.

![[sync-regional-sync-servers.png#interface|300]]

Bir konum seçtikten sonra, veri merkeziniz verilerinizi yeniden yüklemeden farklı bir sunucuya **taşınamaz**. Bölge değiştirmek için [[Sync bölgeleri|kasa Sync bölgeleri rehberini takip edin]].

![[Obsidian Sync/Güvenlik ve gizlilik#^sync-geo-regions]]

## Sonraki adımlar

İşte bir sonraki adımda okumanız önerilen belgeler.

- [[Sync ayarları ve seçici senkronizasyon|Senkronize edilecek dosya ve ayarları seçme]] hakkında daha fazla bilgi edinin.
- Uzak kasanız [[Sürüm geçmişi|dolarsa]] ne olacağını öğrenin.
- Başka bir Obsidian Sync kullanıcısıyla [[Paylaşılan kasada iş birliği yapma|paylaşılan bir kasada iş birliği yapın]].
- Sık sorulan sorulara cevaplar için [[Sıkça sorulan sorular|Sync SSS]] sayfasına göz atın.

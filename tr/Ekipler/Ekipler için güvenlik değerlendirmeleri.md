---
permalink: teams/security
cssclasses:
  - soft-embed
---
[Güvenlik](https://obsidian.md/security) sayfamız, Obsidian'ın verilerinizi koruma yaklaşımı hakkındaki bilgileri bir araya getirir. Ayrıca üçüncü taraflarca tamamlanan güvenlik denetimlerinin de yer aldığı merkezdir.

## Değerlendirmeler

Obsidian, çevrimdışı ve bağımsız bir uygulama olarak çalışacak şekilde tasarlanmıştır. Obsidian ayrıca özel eklentileri ve temaları destekler. Ek olarak, çeşitli dosya senkronizasyon hizmetleri için hem resmi hem de gayri resmi destek sağlıyoruz.

Topluluk eklentilerini veya temalarını ya da [[Obsidian Sync'e giriş|Obsidian Sync]] veya [[Obsidian Publish'e giriş|Obsidian Publish]] kullanmayı planlamıyorsanız, uygulamaları güvence altına almak için standart prosedürleriniz geçerli olacaktır. Ancak, bu özelliklerden herhangi birini kullanmayı planlıyorsanız, bunların iş yeriniz için uygunluğunu kapsamlı bir şekilde değerlendirmenizi öneriyoruz.

## Topluluk eklentileri ve temaları

Bu bölüme ek olarak lütfen [[Eklenti güvenliği]] sayfasını inceleyin.

Obsidian ekipleri, resmi dizine gönderilen tüm topluluk eklentilerini ve temalarını [yayın deposu](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc) üzerinden inceler. Resmi dizine gönderilmemiş topluluk öğelerini incelemiyoruz.

[[CSS kod parçaları]] için bir topluluk mağazamız yoktur. Bu dosyalar genellikle [Obsidian Topluluğu](https://obsidian.md/community) içinden veya herkese açık GitHub depolarından elde edilir.

CSS kod parçaları ve temalarda varlıkların paketlenmesini zorunlu tutuyoruz. Ancak, mobil cihazlarda performansı korumak için [Google Fonts](https://fonts.google.com/) için bir istisna yaptık; çünkü yazı tiplerini paketlemenin etkisi mobil cihazlarda daha belirgindir.

## Ağ ve erişim

Uygulamamızın yerel-öncelikli yaklaşımına öncelik verirken, Obsidian kullandığınız hizmetlere ve özelliklere bağlı olarak ağ çağrıları yapar. Bu ağ bağlantıları, bir alan adı güvenlik duvarı veya uygulama kilitleme yoluyla devre dışı bırakılabilir.

Obsidian bu ağ bağlantılarını HTTPS 443 portunda gerçekleştirir.

Aşağıda Obsidian'ın yaptığı ağ bağlantılarının listesi bulunmaktadır.

### Obsidian kaynaklı bağlantılar

- **Erken erişim güncellemeleri**: `releases.obsidian.md` kullanır.
- **Hesap ve lisans yönetimi**: Ayarlar'da Obsidian hesabınıza erişirken ve Ticari Lisans uygularken `api.obsidian.md` çağrısı yapılır.
- **Obsidian Sync**: Notlarınızı cihazlar arasında senkronize etmek için kullanılır.
	- `sync-xx.obsidian.md`, burada `xx` 01-100 arasında bir sayıdır.
- **Obsidian Publish**:
    1. Arka uç: `publish-main.obsidian.md` ve `publish-xx.obsidian.md`, burada `xx` bir sayıdır.
    2. Ön uç: `publish.obsidian.md`.

### GitHub kaynaklı bağlantılar

Obsidian hem `github.com` hem de `raw.githubusercontent.com` adreslerine ağ istekleri yapar.

- **Genel sürümler**: Otomatik güncellemeler etkinleştirilmişse, Obsidian genel sürümler için GitHub'ı kontrol eder.
- **Üçüncü taraf temalar ve eklentiler**:
    - Uygulamanın başlatma zamanından itibaren her 12 saatte bir, GitHub'da barındırılan "eklenti kullanımdan kaldırmaları" dosyasını almak için bir kontrol yapılır. Bu dosya, arızalı olduğu bilinen, veri kaybına neden olan veya potansiyel olarak savunmasız ya da kötü amaçlı olan belirli eklenti sürümlerini uzaktan devre dışı bırakmaya yardımcı olur.
    - Etkin eklentiler, Obsidian ve GitHub'ın kontrolü dışında ağ trafiği oluşturabilir.

### Diğer bağlantılar

- **Gömülü çevrimiçi içerik**: Bir görsel gibi çevrimiçi içerik gömen notları açarken (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS istekleri**: HTTPS üzerinden DNS dahil olmak üzere, bir bağlantı kurmadan önce bir ana bilgisayar adının çözümlenmesi gerekiyorsa. Daha fazla bilgi için [Chromium belgelerine](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) bakın.

## Sıkça sorulan sorular

### Hesap güvenliği

**Obsidian Tek Oturum Açma (SSO) destekliyor mu?**
Obsidian SSO desteklememektedir. Çoğu kullanım senaryosunda, [[Obsidian Publish'e giriş|Obsidian Publish]] veya [[Obsidian Sync'e giriş|Obsidian Sync]] kullanmadığınız sürece Obsidian iş yerinizde bir hesap veya oturum açma gerektirmez.

**Obsidian Çok Faktörlü Kimlik Doğrulama (MFA) destekliyor mu?**
Obsidian, Obsidian hesapları için [[2 faktörlü kimlik doğrulama]] (2FA) destekler, ancak temel uygulamayı açmak ve kullanmak için 2FA'yı desteklemez. 2FA'yı etkinleştirmiş olan [[Obsidian Sync'e giriş|Obsidian Sync]] ve [[Obsidian Publish'e giriş|Obsidian Publish]] kullanıcılarının, uygulamaya ilk giriş yaptıklarında 2FA anahtarlarını onaylamaları gerekecektir.

### Değerlendirmeler ve sertifikalar

**Şirketimizin güvenlik değerlendirmelerini kabul ediyor musunuz?**
Bir güvenlik değerlendirmesini tamamlamayı değerlendirmeden önce minimum bir teklif edilen satın alma siparişi tutarı talep ediyoruz. Bu değerlendirmeler genellikle zaman alıcıdır ve Obsidian gibi çevrimdışı uygulamalar için geçerli olmayabilir, çünkü genellikle bulut tabanlı hizmetlere yönelik olarak tasarlanmıştır.

Ancak, bir hizmet bedeli ödemeyi kabul ederek bu teklif edilen satın alma siparişi tutarından muaf olabilirsiniz. Bu seçenek hakkında bilgi almak için lütfen [[Yardım ve destek#Obsidian desteğiyle iletişime geçin|Obsidian destek]] ile iletişime geçin.

**Bilgi Güvenliği veya kalite standartlarıyla ilgili ISO27001, NIST, COBIT veya diğer ISO ya da CSA sertifikaları gibi tanınmış sertifikalarınız var mı?**
Şu anda hayır. Gelecekte araştırabileceğimiz bir konu olabilir, ancak şimdilik odak noktamız [güvenlik denetimlerimizdir](https://obsidian.md/security).

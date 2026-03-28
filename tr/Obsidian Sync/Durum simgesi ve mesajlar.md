---
permalink: sync/messages
publish: true
mobile: true
description: 'Bu sayfa, Obsidian Sync durum simgelerini açıklar ve senkronizasyon etkinlik günlüğü hakkında ayrıntılar sunar.'
---
Obsidian Sync, senkronizasyon durumunu belirtmek için çeşitli öğeler sunar; bunlar başlıca [[#Sync durum simgesi]] ve [[#Sync etkinlik günlüğü]]'dür. Obsidian Sync'teki sürüm kontrolü hakkında ayrıntılar [[Sürüm geçmişi]] sayfasında ele alınmaktadır.

## Sync durum simgesi

Sync durum simgesi, masaüstü sürümünde [[Durum çubuğu]]nda, mobil ve tablet sürümlerinde ise [[Kenar çubuğu#Gizli kenar çubuklarını açma|sağ kenar çubuğunda]] bulunur. Simge, çeşitli senkronizasyon durumlarını yansıtır:

- ![[obsidian-icon-sync-synced.svg#icon]] **Senkronize**: Obsidian Sync dosyalarınızı tamamen senkronize etti. Bu simge genellikle yeşildir.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Senkronize ediliyor**: Obsidian şu anda uzak kasayı güncelliyor. Bu simge genellikle mordur.
- ![[obsidian-icon-sync-paused.svg#icon]] **Duraklatıldı**: Senkronizasyon duraklatıldı, ancak Obsidian hâlâ uzak kasaya bağlı. Simge genellikle mordur.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Bağlantı kesildi**: Sync çekirdek eklentisi etkin, ancak [[Yerel ve uzak kasalar|yerel kasa]] bir uzak kasaya bağlı değil. Bu simge genellikle kırmızıdır.

Simgeye tıklamak veya dokunmak aşağıdaki seçenekleri içeren bir bağlam menüsü açar:
- ![[obsidian-icon-sync-paused.svg#icon]] Dur (veya duraklatılmışsa ![[lucide-circle-play.svg#icon]] Devam et)
- ![[lucide-history.svg#icon]] [[Sürüm geçmişi]] (Bir not görüntülenmiyorsa gri renktedir)
- ![[lucide-align-left.svg#icon]] [[#Sync etkinlik günlüğü|Sync günlüğünü]] aç
- ![[lucide-trash-2.svg#icon]] [[Sürüm geçmişi#Silinen bir dosyayı geri yükleme|Silinen dosyalar]]
- ![[lucide-cog.svg#icon]] [[Sync ayarları ve seçici senkronizasyon|Sync Ayarları]]

## Sync etkinlik günlüğü

Obsidian Sync, yerel dosyalarınız ile uzak kasa arasındaki tüm etkileşimleri izleyen ayrıntılı bir senkronizasyon günlüğü içerir. Günlük; yüklemeleri, indirmeleri, silmeleri ve birleştirme çakışmaları veya bağlantı sorunları gibi sorunları gösterir.

**Etkinlik günlüğüne erişim:**
- Durum çubuğundaki senkronizasyon durum simgesine tıklayın
- **[[Ayarlar]] → Sync → Etkinlik günlüğü**'ne gidin
- **Komut paleti → Sync: Etkinlik günlüğünü aç** komutunu kullanın

Günlük, her senkronizasyon işlemi için zaman damgaları ve ayrıntılar sağlar, bu da senkronizasyon sorunlarını giderme konusunda faydalı olmasını sağlar.

> [!warning] Sync günlüğü, Obsidian kapatıldıktan sonra kalıcı olmaz. Bir sorunla karşılaşırsanız, uygulamayı kapatmadan _önce_ günlüğü kopyaladığınızdan emin olun.

Günlük, mesajları aşağıdaki türlere ayırır:

- [[#Genel mesajlar]]
- [[#Hata mesajları]]
- [[#Atlanan mesajlar]]
- [[#Hesap mesajları]]

Sync günlüğünü **Tümü**, **Hatalar**, **Atlandı** ve **Çakışmaları birleştir** seçeneklerine göre filtreleyebilirsiniz. Ayrıca Sync penceresindeki arama kutusunu kullanarak Sync günlüğünde arama yapabilirsiniz.

> [!summary] Aşağıda karşılaşmış olabileceğiniz bazı olası mesajları dahil ettik. Liste kapsamlı değildir. Bir sorun yaşıyorsanız ve emin olmadığınız bir senkronizasyon günlüğü mesajınız varsa, [[Yardım ve destek#Obsidian desteğe başvurun|Obsidian desteğe başvurun]].

### Genel mesajlar

Bunlar günlük kullanımda karşılaşabileceğiniz yaygın mesajlardır.

**Sunucuya bağlanılıyor**
Obsidian, uzak kasanızın [[Obsidian Sync/Güvenlik ve gizlilik#Mevcut Sync sunucumu nerede bulabilirim ve nerede barındırılıyor?|Sync sunucusuna]] bağlanmaya çalışıyor.

**Sunucuya bağlandı. Değişiklikler algılanıyor...**
Obsidian bir bağlantı kurdu ve değişiklik gerekip gerekmediğini belirlemek için yerel kasayı uzak kasa ile karşılaştırıyor.

> [!info] Bu mesaj ayrıca başka potansiyel Sync sorunlarını da gösterebilir. Bunu tekrar tekrar görüyorsanız ve hâlâ senkronize edilecek öğeler olduğunu düşünüyorsanız, [[Yardım ve destek#Obsidian desteğe başvurun|Obsidian desteğe başvurun]].

**Tamamen senkronize**
- Yerel ve uzak kasalar tamamen senkronize edilmiştir.

**Çakışan dosya birleştiriliyor**
Senkronizasyon sırasında bir çakışma tespit edildi ve dosya üzerine yazılmak yerine birleştirildi. Daha fazla bilgi için [[Obsidian Sync sorun giderme#Çakışma çözümleme|çakışma çözümleme]] bölümüne bakın. Birleştirme istenmeyen bir işlemse, [[Sürüm geçmişi]] veya [[Dosya Kurtarma]] aracılığıyla önceki sürümleri geri yükleyebilirsiniz.

**Sunucu değişikliği reddedildi**
Uzak kasadaki değişiklikler, yerel cihazınızdaki sürümden daha eski olduğundan yerel sürüm korunur ve uzak değişiklik yok sayılır.

### Hata mesajları

Bunlar bir dosyanın senkronizasyonunda yaşanan bir hatayı ayrıntılandıran mesajlardır.

**Bellek yetersiz**
Bu sorun genellikle mobil cihazlarda, bir dosyayı indirmek için yeterli depolama alanı veya bellek bulunmadığında ortaya çıkar. Videolar gibi büyük dosyalarda en yaygın olanıdır.

### Atlanan mesajlar

Bunlar neyin atlandığını ve potansiyel olarak nedenini ayrıntılandıran mesajlardır.

**Geçersiz ada sahip dosya indirilemiyor**

Dosya, alıcı işletim sisteminde izin verilmeyen [özel karakter veya adlandırma kuralı](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names) içeriyor. Kolaylık olması açısından, dosyayı kaynak cihazda `-` ve `_` dışındaki tüm özel karakterleri kaldıracak şekilde yeniden adlandırabilirsiniz.

Bunun, Android cihazlarda adlarında birden fazla nokta `.` bulunan dosyaları da kapsadığını unutmayın.

### Hesap mesajları

Bunlar aboneliğiniz veya hesabınızdaki bir değişiklikle ilgili mesajlardır.

**Kasa limiti aşıldı**
Hesabınız [[Sıkça sorulan sorular#Her uzak kasa ne kadar büyük olabilir|maksimum depolama boyutunu]] aşmıştır. Ekler ve sürüm geçmişi bu boyuta katkıda bulunur. Kasanız limitten küçük görünse bile, eski sürümler ve dosyalar limiti aşmasına neden olabilir.

Kasa boyutunu azaltmak için:
1. **[[Ayarlar]] → Sync** bölümünü açın.
2. Büyük dosyaları kaldırmak için **Kasa boyutu limiti aşıyor** altındaki seçenekleri kullanın.

**Kasa bulunamadı**
`{"res":"err","msg":"Vault not found."}`

Bu hata şu durumlarda oluşabilir:

1. Kasa başka bir cihazdan silindi.
2. Sync aboneliği 30 günden fazla süre etkin olmadığı için uzak kasa kaldırıldı.
3. Abonelik iptal edildi veya iade edildi ve bu da uzak kasanın silinmesine yol açtı.

Bu durumlarda, yerel verilerinizin korunduğundan emin olarak [[Obsidian Sync kurulumu#Uzak kasayla bağlantıyı kesme|uzak kasayla bağlantıyı kesmeniz]] ve [[Obsidian Sync kurulumu#Yeni bir uzak kasa oluşturma|yeni bir uzak kasa oluşturmanız]] gerekecektir.

**Kimlik doğrulama başarısız: Obsidian Sync aboneliğiniz sona erdi**
Kayıtlı ödeme yöntemiyle işlem gerçekleştirelemediği için hesabınız tamamen süresi dolmuş durumundadır.

Obsidian Sync'i kullanmaya devam etmek için [hesabınızdan](https://obsidian.md/account/sync) yeniden abone olmanız gerekecektir.

**Kimlik doğrulama başarısız: Giriş yapılmadı**

Obsidian Sync, şu anda giriş yapmadığınızı tespit etti. **[[Ayarlar]]**'ın [[Ayarlar#Genel#Hesap|Hesap]] bölümünden uygulamaya tekrar giriş yapmanız gerekecektir.

Bazı durumlarda, bir topluluk eklentisi de Obsidian Sync'in hesabınızın giriş durumunu doğrulamasını engelleyebilir. Lütfen **[[Eklenti güvenliği#Kısıtlı mod|Kısıtlı mod]]**a girin ve tekrar deneyin.

### Ağ mesajları

**Sunucu bağlantısı kesildi**
`Unable to connect to server`

Obsidian Sync, bilinmeyen bir nedenle Sync sunucusuyla bağlantısını kaybetti. Sync, düzenli aralıklarla sunucuya yeniden bağlanmayı deneyecektir.

iOS'ta bu mesaj şu hata olarak görüntülenir:
`Null is not an object (evaluating 'this.socket.send')`

Bu, `Unable to connect to server` mesajıyla tamamen aynı anlama gelir ve başka bir sorun olduğuna dair herhangi bir gösterge değildir.

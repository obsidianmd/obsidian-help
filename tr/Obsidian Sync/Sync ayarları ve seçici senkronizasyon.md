---
permalink: sync/settings
publish: true
mobile: true
description: 'Bu sayfa, Sync ayarlarını açıklar ve hangi dosyaların senkronize edileceğini seçmenizde size rehberlik eder.'
---
[[Planlar ve depolama limitleri#Yeni bir uzak kasa oluştur|Bir uzak kasa oluşturduğunuzda]] ve [[Obsidian Sync kurulumu#Uzak kasaya bağlanma|ona bağlandığınızda]], Sync çekirdek eklentisi uzak kasanızı yönetme merkezi haline gelir.

## Sync ayarları

**Uzak kasa**  
Bu bölüm, şu anda bağlı olduğunuz uzak kasayı gösterir. Uzak kasadan bağlantıyı kesmek için bir **Bağlantıyı kes** düğmesi ve hesabınızın erişebildiği tüm uzak kasaları ([[Paylaşılan kasada iş birliği yapma|iş birliği]] yoluyla paylaşılan kasalar dahil) görüntülemek için bir **Yönet** düğmesi içerir.

> [!warning]+ Üçüncü taraf eşitleme hizmetindeki uzak kasa
> Uzak kasanız bir üçüncü taraf eşitleme hizmetinde bulunuyorsa, kırmızı bir hata mesajı göreceksiniz. Bunu çözmek için [[Obsidian Sync'e geçiş]] adımlarını takip edin.

**Senkronizasyon durumu**  
Uzak kasanın mevcut senkronizasyon durumunu gösterir. Bu bölüm, duruma bağlı olarak bir **Dur** veya **Devam et** düğmesi içerir.

**Cihaz Adı**  
Şu anda senkronize eden cihaza benzersiz bir ad atayın. Bu, [[Durum simgesi ve mesajlar#Senkronizasyon etkinliği günlüğü|senkronizasyon günlüğünde]] aktiviteyi takip etmeye yardımcı olur. Bu ayar, [[#Seçici senkronizasyon]] gibi cihaza özeldir.

**[[#Çakışma çözümleme]]**
Bir dosyayı birden fazla cihazda değiştirdiğinizde çakışmaların nasıl çözüleceğini seçin. Bu ayar, [[#Seçici senkronizasyon]] gibi cihaza özeldir.

**Silinen dosyalar**  
Silinen dosyaları **Görüntüle** veya **Geri yükle** düğmesi içerir. Daha fazla ayrıntı için [[Sürüm geçmişi]] sayfasına bakın.

**Kasa boyutu**  
Sync depolama alanınızın ne kadarının kullanıldığını gösteren bir ilerleme çubuğu görüntüler.

> [!tip]- Sunucu işleme süresi
> Sunucu tarafı işleme nedeniyle mevcut kullanımın güncellenmesi 30 dakikaya kadar sürebilir.

**Destek ekibiyle iletişime geçin**  
[[Yardım ve destek#Obsidian desteğiyle iletişime geçme|Obsidian desteğiyle iletişime geçme]] talimatlarını sağlar; **Hata ayıklama bilgisini kopyala** ve **E-posta desteği** seçeneklerini içerir.

### Çakışma çözümleme

Senkronizasyon öncesinde bir dosyayı birden fazla cihazda değiştirdiğinizde çakışmaların nasıl çözüleceğini seçin. Değişiklikleri otomatik olarak birleştirebilir veya manuel inceleme için ayrı çakışma dosyaları oluşturabilirsiniz. Çakışmaların nasıl çalıştığı ve bu ayarın nasıl yapılandırılacağı hakkında ayrıntılar için [[Obsidian Sync sorun giderme#Çakışma çözümleme|Çakışma çözümleme]] sayfasına bakın.

> [!warning]+ Her cihazda ayrı yapılandırın
> Bu ayar her cihazda ayrı ayrı yapılandırılmalıdır.

---

Ayrıca Sync çekirdek eklentisinin ayarlarında nelerin senkronize edileceğini de seçebilirsiniz. Bu bölüm **seçici senkronizasyon** ve **kasa ayarları senkronizasyonu** ile ilgili uyarıları kapsar.

## Seçici senkronizasyon

[[Yerel ve uzak kasalar|Uzak kasanıza]] senkronize edilen dosyalar [[Sıkça sorulan sorular#Her uzak kasa ne kadar büyük olabilir|depolama limitinize]] katkıda bulunur. Varsayılan olarak, Obsidian Sync aşağıdaki dosya türleri için **seçici senkronizasyonu** etkinleştirir:
- Görseller
- Ses
- Videolar
- PDF'ler

Ek dosya türlerini senkronize etmek için `Diğer tüm türleri senkronize et` seçeneğini açın.

Varsayılan **kasa ayarları senkronizasyonu** ayarları şunları içerir:
- Diğer dosya türleri
- Ana ayarlar
- Görünüm
- Temalar ve snippet'ler
- Kısayol tuşları
- Aktif çekirdek eklenti listesi
- Çekirdek eklenti ayarları

Topluluk eklentilerini senkronize etmek için **Aktif topluluk eklenti listesi** ve **Kurulmuş topluluk eklenti listesi** seçeneklerini manuel olarak etkinleştirin.

### Senkronize etmek istediğiniz dosya türlerini değiştirme

1. **[[Ayarlar]] → Sync** bölümünü açın.
2. **Seçici senkronizasyon** altında, senkronize etmek istediğiniz dosya türlerini etkinleştirin.
3. Yeni ayarların uygulanması için uygulamayı yeniden başlatın. Mobil veya tablette, zorla kapatma gerekebilir.

[[Planlar ve depolama limitleri|Sync planınızın]] senkronize edebileceğiniz maksimum dosya boyutunu tanımladığını unutmayın. Standart plan 5 MB'a kadar dosyaları senkronize etmeye izin verirken, Plus plan 200 MB'a kadar dosyaları destekler.

> [!info]+ Hariç tutulan dosyalar uzak kasada kalır
> Bir dosyayı **Hariç tutulan dosyalar** listesine eklemek, dosya zaten senkronize edilmişse onu uzak kasadan kaldırmaz. Gereksiz depolama kullanımından kaçınmak için Sync ayarlarınızı senkronizasyondan önce yapılandırın.

### Bir klasörü senkronizasyondan hariç tutma

Varsayılan olarak, Obsidian kasanızdaki tüm dosya ve klasörleri senkronize eder. Belirli bir klasörü senkronizasyondan hariç tutmak için:
1. **[[Ayarlar]] → Sync** bölümünü açın.
2. **Hariç tutulan klasörler** yanında **Yönet** seçeneğini seçin.
3. Listeden hariç tutmak istediğiniz klasörü seçin.
4. **Tamamlandı** seçeneğini seçin.

Bir klasörü hariç tutma listesinden kaldırmak için klasör adının yanındaki ![[lucide-x.svg#icon]] düğmesini seçin.

#### Her zaman senkronizasyondan hariç tutulanlar

##### Dosya kurtarma anlık görüntüleri

[[Dosya Kurtarma]] eklentisindeki anlık görüntüler, anlık görüntüler [[Obsidian verileri nasıl saklar#Genel ayarlar|Genel ayarlarda]] tutulduğu için Obsidian Sync aracılığıyla senkronize edilmez.

##### Gizli dosya ve klasörler

`.` ile başlayan dosya ve klasörler gizli olarak kabul edilir ve senkronizasyondan hariç tutulur. Tek istisna kasanın [[Yapılandırma klasörü|yapılandırma klasörüdür]] (`.obsidian`); bu klasör senkronize edilir.

Senkronize edilmeyen yaygın gizli dosya ve klasör örnekleri:
- `.vscode`
- `.git`
- `.idea`
- `.gitignore`

##### Sync ayarları

Sync ayarları cihazlar arasında senkronize edilmez. Bunları gerektiğinde her cihazda ayrı ayrı yapılandırmanız gerekir.

## Senkronize edilen kasa ayarlarınızı güncelleme

Birden fazla cihazda senkronizasyon ayarlarını değiştirmek için şu adımları izleyin:

> [!tip]- Birincil ve ikincil cihazlar
> "Birincil" ve "ikincil" cihaz terimleri yalnızca netlik içindir. Sync aralarında ayrım yapmaz.

### Birincil cihaz

Birincil cihaz, doğruluk kaynağı olarak işlev görür. Burada yapılan değişiklikler diğer tüm cihazlara senkronize edilir.

1. **[[Ayarlar]] → Sync** bölümüne gidin.
2. **Kasa ayarları senkronizasyonu** altında istenen ayarları etkinleştirin.
3. Obsidian'ı yeniden yükleyin veya yeniden başlatın. Mobil veya tablette zorla kapatma gerekebilir.
4. Ayarların uzak kasanızla senkronize olması için zaman tanıyın.

### İkincil cihaz(lar)

İkincil cihazlar (telefonunuz gibi) birincil cihazdan güncellemeleri alır.

1. **[[Ayarlar]] → Sync** bölümüne gidin.
2. **Kasa ayarları senkronizasyonu** altında gerekli ayarları etkinleştirin.
3. Değişikliklerin uzak kasadan indirilmesini bekleyin.
4. Senkronize edilen ayarların uygulanması için uygulamayı yeniden yükleyin veya yeniden başlatın. Mobil veya tablette zorla kapatma gerekebilir.

### Ayarların yeniden yüklenmesi

Bazı ayarlar anında yeniden yüklenebilirken, diğerleri yeniden başlatma gerektirir:

- **Anında yeniden yüklenebilir**: Klavye kısayolları ve özellikler, görünüm ayarları ve zaten etkinleştirilmiş çekirdek eklentilerin yapılandırmaları dahil çoğu Obsidian ayarı.
- **Yeniden yükleme gerektirir**: CSS değişiklikleri (ör. [[CSS kod parçaları]], [[Temalar]]), graf görünümü yapılandırmaları ve çekirdek eklenti durumları (ör. Günlük Notlar'ı etkinleştirme/devre dışı bırakma).

Topluluk eklentileri genellikle anında yeniden yüklemeyi desteklemez ve yeni ayarlar uygulandığında yeniden başlatma gerektirir.

> [!info]+ Eklenti geliştiricileri için
> [Obsidian Sync ile anında yeniden yükleme işlevselliğini nasıl entegre edeceğinizi](https://docs.obsidian.md/Reference/TypeScript+API/Plugin/onExternalSettingsChange) öğrenin.

## Ayar profilleri

Obsidian Sync, aynı uzak kasaya birden fazla [[Yapılandırma klasörü|yapılandırma klasörünü]] senkronize edebilir ve böylece ayrı profiller oluşturmanıza olanak tanır (ör. biri mobil için, diğeri dizüstü bilgisayarınız için).

### Bir ayar profili oluşturma

Yeni bir ayar profili oluşturmak için:

1. **[[Ayarlar]] → Dosyalar & Linkler** bölümünü açın.
2. **Konfigürasyon dosyasını değiştir** altında, profiliniz için bir nokta (`.`) ile başlayan bir ad girin, ör. `.obsidian-mobile`.
3. Değişikliklerin uygulanması için Obsidian'ı yeniden başlatın.

> [!info]+ Eklenti ve temaları yeniden indirmekten kaçının
> Ayar profilini değiştirmek, senkronizasyon ayarlarınızı yeniden yapılandırmanızı gerektirecektir. Eklenti ve temaları yeniden indirmekten kaçınmak için değişiklik yapmadan önce mevcut `.obsidian` klasörünüzü kopyalayın ve yeni profilinizle eşleşecek şekilde yeniden adlandırın (ör. `.obsidian-mobile`).

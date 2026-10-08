---
permalink: sync/region
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Sync kasanızı farklı bir bölgeye taşıyın.
---
[[Obsidian Sync'e giriş|Obsidian Sync]] aracılığıyla bir [[Yerel ve uzak kasalar|uzak kasa]] oluşturduğunuzda, verileriniz şifrelenir ve Obsidian'ın bölgesel Sync sunucularından birinde depolanır. Bu rehber, Sync kasanızı farklı bir bölgesel sunucuya nasıl taşıyacağınızı açıklar.

## Mevcut bölgeler

Obsidian Sync ile aşağıdaki bölgeler kullanılabilir. Gecikmeyi azaltmak ve senkronizasyon sürecini hızlandırmak için **Otomatik** seçeneğini veya size yakın bir konum seçmenizi öneririz.

![[Obsidian Sync/Güvenlik ve gizlilik#^sync-geo-regions]]

## Ayarlarınızı kaydedin

Yeni uzak kasaya bir cihaz bağladığınızda, Sync o anda açık olan ayarları kullanabilir. Farklı cihazlarda farklı ayarlar tutuyorsanız, başlamadan önce bunları kaydedin. Örneğin, büyük medya dosyalarını telefonunuza senkronize etmiyor olabilirsiniz.

Uzak kasayı kullanan her cihazda **[[Ayarlar]] → Sync** bölümünü açın ve şu ayarları kaydedin. Ekran görüntüsü almak iyi bir yöntemdir.

- **Seçici senkronizasyon**
- **Kasa ayarları senkronizasyonu**
- **Hariç tutulan klasörler**
- **Cihaz adı** ve **Çakışma çözümleme** gibi cihaza özel ayarlar

Her ayarın ne yaptığı ve hangilerinin varsayılan olarak açık olduğu hakkında bilgi için [[Sync ayarları ve seçici senkronizasyon]] bölümüne bakın.

## Sync bölgesini değiştirme

Uzak kasanızın bölgesini değiştirmek için kasanızı farklı bir Sync sunucusunda yeniden oluşturmanız gerekir. Uzak kasanız daha eski bir sürümdeyse [[Sync şifrelemeyi yükseltme]] taşıma yardımcısını kullanarak da bölge değiştirebileceğinizi unutmayın.

> [!danger] Taşımalar yıkıcıdır
> 
> **Taşıma işlemine geçmeden önce daima kasanızı [[Obsidian dosyalarınızı yedekleyin|yedekleyin]].**
> 
> Bir uzak kasayı taşıdığınızda verileriniz değiştirilecektir. Bu şu anlama gelir:
> 
> 1. Uzak veriler Obsidian sunucularından kaldırılacak ve yerine kasa verileri yeniden yüklenecektir.
> 2. Kasaya ait tüm [[Sürüm geçmişi|sürüm geçmişi]] kaybolacaktır.

![[Obsidian Sync kurulumu#Uzak kasayla bağlantıyı kesme]]

[[Planlar ve depolama limitleri|Standart Plan]] kullanıyorsanız, devam etmeden önce [[Obsidian Sync kurulumu#Uzak kasayı silme|uzak kasanızı silmeniz]] gerekecektir.

![[Obsidian Sync kurulumu#Yeni bir uzak kasa oluşturma]]

## Diğer cihazlarınızı yeniden bağlayın

Yeni uzak kasa ilk cihazınızda senkronizasyonu tamamladıktan sonra, eski uzak kasayı kullanan diğer tüm cihazları değiştirin. Aynı anda tek bir cihaz üzerinde çalışın.

1. Cihazda [[Obsidian Sync kurulumu#Uzak kasayla bağlantıyı kesme|eski uzak kasayla bağlantıyı kesin]].
2. [[Obsidian Sync kurulumu#Başka bir cihazda uzak kasayı senkronize etme|Yeni uzak kasaya bağlanın]]. Henüz **Senkronizasyona başla** seçeneğini seçmeyin.
3. **Seçici senkronizasyon**, **Kasa ayarları senkronizasyonu** ve **Hariç tutulan klasörler** ayarlarını bu cihaz için kaydettiğiniz ayarlarla eşleşecek şekilde ayarlayın.
4. Obsidian'ı yeniden başlatın. Mobil veya tablette uygulamayı zorla kapatmanız gerekebilir.
5. **Senkronizasyona başla** veya **Devam et** seçeneğini seçin ve sonraki cihaza geçmeden önce Sync'in tamamlanmasını bekleyin.

Ayrıca, yeni uzak kasanıza ve bölgesine geçişi onayladıktan sonra [[Obsidian Sync kurulumu#Uzak kasayı silme|eski uzak kasanızı silebilirsiniz]].

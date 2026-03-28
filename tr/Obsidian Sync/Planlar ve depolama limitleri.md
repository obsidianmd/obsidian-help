---
permalink: sync/plans
publish: true
mobile: true
description: Obsidian Sync için sunduğumuz farklı plan seçenekleri hakkında bilgi edinin.
---
## Planlar

Notlarınızı [[Obsidian Sync'e giriş|Obsidian Sync]] ile senkronize etmek için bir abonelik planına ihtiyacınız vardır. Sync planını [hesabınıza](https://obsidian.md/account/sync) giriş yaparak satın alabilirsiniz. Fiyatlandırma için [Sync sayfasına](https://obsidian.md/sync) bakın.

Aşağıda Standart plan ve Plus plan karşılaştırması bulunmaktadır:

|                                                                | Sync Standart | Sync Plus       |
| -------------------------------------------------------------- | ------------- | --------------- |
| Senkronize kasalar                                             | 1             | 10              |
| Maksimum dosya boyutu                                          | 5 MB          | 200 MB          |
| Toplam depolama                                                | 1 GB          | 10 GB - 100 GB  |
| [[Sürüm geçmişi]]                                             | 1 ay          | 12 ay           |
| Cihazlar                                                       | Sınırsız      | Sınırsız        |
| [[Paylaşılan kasada iş birliği yapma\|Paylaşılan kasalar]]    | Evet          | Evet            |

## Depolama limitleri

[[Obsidian Sync'e giriş|Obsidian Sync]] kullanarak depolayabileceğiniz veri miktarı abonelik planınıza bağlıdır. Sync Plus planında [hesap panonuz](https://obsidian.md/account/sync) üzerinden 100 GB'a kadar ek depolama satın alabilirsiniz. Daha fazla ayrıntı için [[Sıkça sorulan sorular]] sayfasına bakın.

Tüm kasalarınızdaki notlar için hesap genelinde tek bir depolama limiti bulunmaktadır. [[Sürüm geçmişi]] ve [[Ekler|ekler]] de hesabınızın depolama limitine dahil edilir.

Hesabınızın depolama limitine ulaştığınızda, Sync eklentisi dosyaları senkronize etmeyi durduracak ve uzak kasanızı/kasalarınızı budamanız istenecektir.

### Büyük dosyaları belirleme ve silme

Kasadaki büyük dosyaları belirlemek ve silmek için:

1. **[[Ayarlar]] → Sync** bölümünü açın.
2. **Kasa boyutu limiti aşıyor** yanındaki **En büyük dosyaları görüntüle** seçeneğini tıklayın.
	1. **Kasa boyutu limiti aşıyor** ifadesini görmüyorsanız, bu ==henüz boyut limitine ulaşmadığınız== anlamına gelir.
3. **En büyük dosyaları görüntüle** penceresini kapatın.
4. Artık ihtiyacınız olmayan bazı büyük dosyaları silin.
5. Obsidian Sync'in işlemi tamamlamasını bekleyin. Bu biraz zaman alabilir.
6. **[[Ayarlar]] → Sync** bölümünü açın.
7. **Kasa boyutu limiti aşıyor** yanındaki **Temizle** seçeneğini tıklayın. Bu, silinen dosyaları uzak kasadan kaldırarak alan açacaktır.

Temizleme sunucuya senkronize edildikten sonra Obsidian Sync normal şekilde çalışmaya devam edecektir.

### Yeni bir uzak kasa oluşturma

Senkronizasyondan önce büyük dosyaları hariç tutmak için **yeni bir uzak kasa oluşturabilirsiniz**. Yeni bir uzak kasa oluşturursanız dosyalarınızın sürüm geçmişi sıfırlanacaktır. Lütfen devam etmeden önce eski dosyalar için sürüm geçmişine ihtiyacınız olmadığından emin olun.

Yeni bir uzak kasaya senkronize etmek için şu adımları izleyin:

1. **[[Ayarlar]] → Sync** bölümünü açın.
2. **Uzak kasa** yanındaki **Yönet** seçeneğini tıklayın.
3. **Yeni kasa oluştur** seçeneğini belirleyin ve oluşturma adımlarını takip edin. Kasa limitinize ulaştıysanız, önce mevcut uzak kasanın [[Obsidian Sync kurulumu#Uzak kasayla bağlantıyı kesme|bağlantısını kesmeniz]] ve [[Obsidian Sync kurulumu#Uzak kasayı silme|silmeniz]] gerekebilir.
4. Yeni uzak kasaya senkronizasyona başlamadan önce hariç tutulan dosyaları ayarlayın.
5. Değişikliklerinizin uygulanması için Obsidian'ı yeniden başlatın.
6. **[[Ayarlar]] → Sync** bölümünü açın.
7. Yeni uzak kasaya senkronizasyonu başlatmak için Devam et seçeneğini tıklayın.

Sürüm geçmişinin ve hariç tutulan dosyaların olmaması nedeniyle yeni uzak kasa öncekinden daha küçük olacaktır.

## Planınızı yükseltme

[Hesap panonuza](https://obsidian.md/account/sync) giriş yaparak planınızı yükseltebilirsiniz. Buradan Sync Standart planınızı Sync Plus'a yükseltebilir ve depolamayı 100 GB'a kadar artırabilirsiniz.

## Planınızı düşürme

Sync planınızı düşürmek istiyorsanız ancak depolama kullanımınız yeni planın limitini aşıyorsa, uzak kasanızda alan açmanız gerekecektir. Şu anda mevcut bir uzak kasadan belirli dosyaları hızlıca kaldırmanın doğrudan bir yöntemi yoktur. Bunun nedeni, eklerin sürüm geçmişinde iki haftaya kadar tutulması ve sürüm geçmişinin depolama limitinize dahil edilmesidir.

Sync depolama kullanımınızı azaltmanın en hızlı yolu, ekler devre dışı bırakılmış yeni bir uzak kasa oluşturmak ve ardından depolama limitlerini aşan eski uzak kasayı silmektir. Bunu yaparak sürüm geçmişini kaybedeceğinizi unutmayın.

Sync Plus'tan Sync Standart'a düşürüyorsanız, düşürmeye izin verilmeden önce mevcut kasa sayısını bire indirmeniz de gerekecektir.

### Sürüm geçmişini koruma

Ekler [[Sürüm geçmişi|sürüm geçmişinizde]] iki haftaya kadar tutulur. Yakın gelecekte plan düşürmeyi planlıyorsanız, yerel kasanızdan ekleri kaldırarak başlayabilirsiniz.

İki hafta sonra bunlar uzak kasadan temizlenecek ve artık depolama limitinize dahil edilmeyecektir. Bu noktada, Markdown dosyaları gibi diğer dosya türlerinin sürüm geçmişini koruyarak planınızı düşürebileceksiniz.

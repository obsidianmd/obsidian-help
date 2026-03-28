---
permalink: plugins/file-recovery
publish: true
mobile: true
description: 'Dosya Kurtarma, notlarınızın anlık görüntülerini düzenli aralıklarla otomatik olarak kaydederek çalışmanızı istem dışı veri kaybından korumaya yardımcı olur.'
---
Dosya Kurtarma, notlarınızın düzenli aralıklarla tam anlık görüntülerini otomatik olarak kaydederek çalışmanızı yanlışlıkla silme, dosya bozulması veya istenmeyen değişikliklerden koruyan bir [[Yerleşik Eklentiler|çekirdek eklenti]]dir. Dosya Kurtarma eksiksiz bir yedekleme çözümü değildir ve Obsidian dosyalarınızı ayrıca [[Obsidian dosyalarınızı yedekleyin|yedeklemenizi]] öneririz.

[[#Depolama ve performans|Çok fazla alan]] kaplamamak için Obsidian, anlık görüntüleri silmeden önce belirli bir gün sayısı boyunca saklar. Anlık görüntüler, yalnızca değişiklikleri değil, dosyalarınızın tam içeriğini yakalar ve önceki herhangi bir sürümü geri yüklemenize olanak tanır.

> [!info]+ Bilgi
> Varsayılan olarak anlık görüntüler birbirinden en az 5 dakika arayla kaydedilir ve 7 gün boyunca saklanır. Her iki aralığı da **[[Ayarlar]] → Yerleşik Eklentiler → Dosya Kurtarma** altından yapılandırabilirsiniz.

Anlık görüntüler, kasa ile ilgili veri kaybını hesaba katmak için kasanın dışında [[Obsidian verileri nasıl saklar#Genel ayarlar|Genel ayarlar]]'da tutulur. Bu, anlık görüntülerin notun mutlak yolu ile saklandığı anlamına gelir. Kasanızı yakın zamanda taşıdıysanız, anlık görüntünün alındığı andaki konumuna geri taşımanız gerekebilir.

> [!tip] [[Obsidian Sync'e giriş|Obsidian Sync]] veya [[Notlarınızı cihazlar arasında senkronize edin|diğer senkronizasyon hizmetleri]] kullanıyorsanız, Dosya Kurtarma anlık görüntüleri cihazlar arasında senkronize edilmez. Anlık görüntüler cihaza özgüdür ve her cihazda yerel olarak kalır.

## Bir anlık görüntüyü kurtarma

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda **Yerleşik Eklentiler** altından **Dosya Kurtarma**'yı seçin.
3. **Anlık görüntüler** altında **Görüntüle**'yi seçin.
4. Dosya adı alanına kurtarmak istediğiniz dosyanın adını yazmaya başlayın, bir öneri listesi göreceksiniz.
5. Dosyayı seçin, Enter tuşuna basın ve mevcut anlık görüntülerin listesini göreceksiniz.
6. Kurtarmak istediğiniz anlık görüntüyü seçin.
    1. Kopyalayıp yeni bir nota yapıştırmak istiyorsanız **Kopyala** düğmesini seçin.
    2. Dosyayı tamamen geri yüklemek istiyorsanız **Geri Yükle** düğmesini seçin.
7. İsteğe bağlı olarak **Farkı göster** seçeneğini açarak anlık görüntüler arasındaki farkları görebilirsiniz. Bu, anlık görüntü sürümleri arasında hangi içeriğin eklendiğini, kaldırıldığını veya değiştirildiğini gösterir.

## Anlık görüntü geçmişini temizleme

> [!danger] Anlık görüntü geçmişini temizlemek, kasanızdaki tüm anlık görüntüleri geri dönüşü olmayacak şekilde siler.

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda **Yerleşik Eklentiler** altından **Dosya Kurtarma**'yı seçin.
3. **Geçmişi temizle** altında **Temizle**'yi seçin.
4. **Temizle**'ye tıklayarak tüm anlık görüntüleri silmek istediğinizi onaylayın.

## Depolama ve performans

Dosya Kurtarma anlık görüntüleri, yalnızca değişen dosyaları sakladıkları için genellikle minimum disk alanı kullanır. Ancak çok sayıda büyük dosya veya sık düzenleme yapılan kasalarda anlık görüntüler zamanla birikebilir. Depolama kullanımınızı izleyin ve gerekirse saklama süresini ayarlayın.

## Sınırlamalar

- **Apple kilitleme modu**: Bu özellik, Obsidian muaf tutulmadığı sürece [Kilitleme modu](https://support.apple.com/en-us/105120) etkinleştirilmiş Apple cihazlarında kullanılamaz.
- **Dosya türleri**: Dosya Kurtarma kullanılarak yalnızca `.md` ve `.canvas` dosyaları geri yüklenebilir.
- **Kasa konumu**: Kasanızı [[Kasaları yönet#Kasayı farklı bir klasöre taşıma|kasa değiştirici]] kullanmadan farklı bir konuma taşırsanız, mevcut anlık görüntülere erişilemeyebilir.

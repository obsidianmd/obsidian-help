---
permalink: sync/version-history
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Obsidian Sync, notlarınızda yapılan tüm değişikliklerin kaydını tutar ve düzenli olarak güncellemeleri kontrol ederek notlarınızın yeni sürümlerini oluşturur.'
---
[[Obsidian Sync'e giriş|Obsidian Sync]], [[Sync ayarları ve seçici senkronizasyon|senkronize edilen dosyalarınızdaki]] güncellemeleri düzenli olarak kontrol eder ve yapılan değişikliklerin kaydını tutar. Bunlar [[#Sürüm geçmişi]]'nde yeni girdiler olarak saklanır. Bu bilgilere birkaç şekilde erişilebilir:

- [[#Senkronizasyon geçmişi]]
- [[#Sürüm geçmişi]]

Obsidian Sync'in bir parçası olmasa da, [[Dosya Kurtarma]] eklentisi etkinleştirilmişse her cihazda yerel bir sürüm geçmişi de kullanılabilir.

## Senkronizasyon geçmişi

Obsidian 1.7 sürümünde tanıtılan Senkronizasyon geçmişi (veya Sync kenar çubuğu) özelliği, yakın zamanda oluşturulan veya değiştirilen ve senkronize edilen notları ve ekleri hızlıca görüntülemenizi sağlar. Bunu bir _düzenleme_ geçmişi olarak da düşünebilirsiniz.

Kenar çubuğunda bir öğeyi seçerek dosyasını etkin pencerenizde açabilirsiniz. Öğelerin ayrıca bağlam menüleri vardır; dosyayı taşıma veya [[#Notlar ve ekler|Sürüm geçmişi]]ni görüntüleme gibi eylemler gerçekleştirmenize olanak tanır.

> [!compatibility] Yalnızca masaüstü özelliği
> Kenar çubuğunda senkronize edilmiş bir dosyanın üzerine geldiğinizde, dosyayı en son kimin düzenlediğini görebilirsiniz. Bu, paylaşılan bir kasada [[Paylaşılan kasada iş birliği yapma|iş birliği]] yapıyorsanız özellikle kullanışlıdır.

> [!tip] 
> Ayarlar ve silinen öğeler Senkronizasyon geçmişi kenar çubuğunda görünmez. Bunlar [[#Notlar ve ekler|Sürüm geçmişi]]'nde bulunabilir.

### Senkronizasyon geçmişini göster

[[Obsidian Sync'e giriş|Sync]] çekirdek eklentisini etkinleştirdiğinizde, Senkronizasyon geçmişi otomatik olarak etkinleştirilir ancak varsayılan olarak kenar çubuğunda görünmez. Bir komut veya klavye kısayolu kullanarak elle eklemeniz gerekecektir.

#### Komut Paleti aracılığıyla etkinleştirme

> [!info] Bu seçenek, [[Komut Paleti]] çekirdek eklentisinin etkinleştirilmiş olmasını gerektirir.

**Masaüstü/Tablet** ![[lucide-monitor-check.svg#icon]]

1. **Komut paleti**'ni açın. ![[lucide-terminal.svg#icon]]
2. "Sync" yazın.
3. "Sync: Show Sync history" seçeneğini seçin.

Senkronizasyon geçmişi daha sonra [[Kenar çubuğu|sağ kenar çubuğunda]] görünecektir.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]

1. [[Araç çubuğu]]'nu açın ![[lucide-menu.svg#icon]].
2. **Komut paleti**'ni açın. ![[lucide-terminal.svg#icon]]
3. "Sync" yazın.
4. "Sync: Show Sync history" seçeneğini seçin.

Senkronizasyon geçmişi daha sonra [[Kenar çubuğu|sağ kenar çubuğunda]] bir açılır seçenek olarak görünecektir.

#### Klavye kısayolu ile etkinleştirme

1. **[[Ayarlar]]**'ı açın.
2. **Seçenekler** kategorisinde **Kısayol tuşları**'nı seçin.
3. Kısayol tuşları arama çubuğuna "Sync" yazın.
4. "Sync: Show Sync history" yanında tercih ettiğiniz klavye kısayolunu atayın.

## Sürüm geçmişi

[[#Senkronizasyon geçmişi]]ne ek olarak, Obsidian notları ve ekleri geri yüklemek için bir sürüm geçmişi de tutar. Yanlışlıkla bir notu silerseniz veya önceki bir sürüme geri dönmek isterseniz, sürüm geçmişinden geri yükleyebilirsiniz.

Sürüm geçmişinizin saklama süresi [[Planlar ve depolama limitleri|Obsidian Sync planınıza]] bağlıdır. Standart planda notlar 1 ay boyunca saklanırken, Plus planda 12 ay boyunca saklanır. Bu sürenin ardından notlarınızın eski sürümleri silinir.

[[Ekler]] için eski sürümler <u>iki hafta</u> boyunca saklanır.

![[Paylaşılan kasada iş birliği yapma#^version-history-image]]

### Notlar ve ekler

Hem notları hem de ekleri geri yükleme işlemi aynıdır.

#### Bir dosyanın sürüm geçmişini görüntüleme

**Masaüstü/Tablet** ![[lucide-monitor-check.svg#icon]]
1. **Dosya gezgini**'nde geri yüklemek istediğiniz notu seçin.
2. **Sürüm geçmişini aç**'ı seçin.
3. Soldaki görüntülemek istediğiniz not sürümünü seçin. İçerik sağda görüntülenecektir.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. **Dosya gezgini**'nde geri yüklemek istediğiniz notu seçin.
2. Bağlam menüsünü açmak için uzun basın.
3. **Sürüm geçmişini aç**'ı seçin.
4. Açılır menüde görüntülemek istediğiniz not sürümünü seçin.
5. Seçildikten sonra notun içeriği incelemeye hazır olacaktır.

#### Silinen veya yeniden adlandırılan bir dosyanın sürüm geçmişini görüntüleme

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda, **Yerleşik Eklentiler*** altında **Sync**'i seçin.
3. **Silinen dosyalar** yanında **Görüntüle**'yi seçin.
4. Sürüm geçmişini görüntülemek istediğiniz notu seçin.
5. Sürüm geçmişi açılır penceresinde, soldaki görüntülemek istediğiniz not sürümünü seçin.

#### Bir dosyanın önceki sürümünü geri yükleme

**Masaüstü/Tablet** ![[lucide-monitor-check.svg#icon]]
1. **Dosya gezgini**'nde geri yüklemek istediğiniz notu seçin.
2. **Sürüm geçmişini aç**'ı seçin.
3. Soldaki geri yüklemek istediğiniz not sürümünü seçin. İçerik sağda görüntülenecektir.
4. **Geri yükle** düğmesini seçin.
5. Not içeriği geri yüklenen sürümle değiştirilecektir.

**Mobil** ![[obsidian-icon-smartphone.svg#icon]]
1. **Dosya gezgini**'nde geri yüklemek istediğiniz notu seçin.
2. Bağlam menüsünü açmak için uzun basın.
3. **Sürüm geçmişini aç**'ı seçin.
4. Açılır menüde geri yüklemek istediğiniz not sürümünü seçin.
5. Seçildikten sonra notun içeriği incelemeye hazır olacaktır.
6. **Geri yükle** düğmesini seçin.
7. Not içeriği geri yüklenen sürümle değiştirilecektir.

#### Silinen bir dosyayı geri yükleme

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda, **Yerleşik Eklentiler*** altında **Sync**'i seçin.
3. **Silinen dosyalar** yanında **Görüntüle**'yi seçin.
4. Geri yüklemek istediğiniz notu seçin.
5. Soldaki sürüm listesinde geri yüklemek istediğiniz sürümü seçin.
6. Sağdaki **Geri yükle** düğmesini seçin.
7. Not, dosya sistemindeki orijinal konumuna geri yüklenecektir.

> [!tip] Onay kutularını seçerek veya `shift+click` kullanarak **toplu geri yükleme** ile birden fazla not seçebilirsiniz. Bu dosyalar bu menüde incelenemeyecektir.

### Ayarlar geçmişi

Obsidian Sync ayrıca kasa yapılandırma ayarlarınızda yapılan değişiklikleri de takip eder.

#### Bir ayarın sürüm geçmişini görüntüleme

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda, **Yerleşik Eklentiler*** altında **Sync**'i seçin.
3. **Kasa ayarları senkronizasyonu**'na gidin.
4. **[[Ayarlar]] sürüm geçmişi** yanındaki **Görüntüle** düğmesini seçin.
5. **[[Ayarlar]] Dosyası** açılır penceresinde, görüntülemek istediğiniz ayar dosyasını seçin.

#### Bir ayarın önceki sürümünü geri yükleme

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda, **Yerleşik Eklentiler** altında **Sync**'i seçin.
3. **Kasa ayarları senkronizasyonu**'na gidin.
4. **[[Ayarlar]] sürüm geçmişi** yanındaki **Görüntüle** düğmesini seçin.
5. **[[Ayarlar]] Dosyası** açılır penceresinde, görüntülemek istediğiniz ayar dosyasını seçin.
6. Değişiklikler penceresinde **Geri yükle** düğmesini seçin.
7. Ayarın geçerli olması için Obsidian'ı yeniden yükleyin veya yeniden başlatın. Daha fazla ayrıntı için [[Obsidian Sync kurulumu#Obsidian Sync ayarlarını düzenleme|Obsidian Sync ayarlarını düzenleme]] bölümündeki talimatlara bakın.

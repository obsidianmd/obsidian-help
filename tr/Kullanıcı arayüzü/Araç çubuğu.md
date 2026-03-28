---
permalink: ribbon
publish: true
mobile: true
description: Obsidian'da sık kullanılan komutlar için bir alan olan şeridi nasıl kullanacağınızı ve masaüstü ile mobilde nasıl özelleştireceğinizi öğrenin.
---
Araç çubuğu, Obsidian içindeki yaygın komutlar için bir alan işlevi görür.

Masaüstünde, [[Kenar çubuğu#Gizli kenar çubuklarını açma|sol Kenar Çubuğu]]'nda yer alır ve sol Kenar Çubuğu kapatıldığında bile görünür kalır.

Mobilde, bir notu düzenlemediğiniz sırada uygulamanın sağ alt köşesindeki **Menü seçeneği** ![[lucide-menu.svg#icon]] öğesine dokunarak [[Mobil uygulama#Araç çubuğu eylemleri|Araç Çubuğu Eylemleri]]'ne erişebilirsiniz.

## Eylemler

Her eylem, araç çubuğunda bir simge ile temsil edilir. Bu simgelerin üzerine gelindiğinde bir araç ipucu görüntülenir, seçildiğinde ise ilgili eylem etkinleştirilir. Mobilde, bu simgelere dokunarak etkinleştirebilirsiniz.

1. **[[Kasaları yönet|Kasa değiştirici]]**'yi açın ![[obsidian-icon-vault-switcher.svg#icon]].
2. **Yardım**'a erişin ![[lucide-help-circle.svg#icon]].
3. **[[Ayarlar]]**'ı açın ![[lucide-settings.svg#icon]].

Mobil sürümde, araç çubuğunda hızlı erişim eylemi yapılandırabilirsiniz. Daha fazla bilgi için [[#Mobil|mobil bölüm]]'e ve [[Mobil uygulama]] sayfasına bakın.

## Araç çubuğunu özelleştirme

Özelleştirilmiş araç çubuğu düzeniniz oturumlar arasında hatırlanır. Uygulama ayarları (`workspace.json` ve `workspace-mobile.json` dosyaları) senkronize edildiğinde diğer cihazlar ve mobil uygulama ile senkronize olur.

### Masaüstü

Masaüstü sürümünde araç çubuğunu şu şekilde özelleştirebilirsiniz:

- Araç çubuğu eylemlerinin sırasını simgeleri sürükleyip bırakarak yeniden düzenleyin.
- Belirli eylemleri gizlemek için araç çubuğundaki boş bir alana sağ tıklayın ve gizlemek istediğiniz eylemlerin işaretini kaldırın.

#### Araç çubuğunu gizleme

Araç çubuğunu iki şekilde gizleyebilirsiniz:

- Araç çubuğuna sağ tıklayın ve **Araç çubuğunu gizle**'yi seçin.
- **[[Ayarlar]]** → **Görünüm** yolunu açın, **Gelişmiş** bölümüne kaydırın ve **Şeridi göster**'i devre dışı bırakın.

#### Araç çubuğunu gösterme

Araç çubuğunu gizlediyseniz ve tekrar görüntülemek istiyorsanız:

1. **[[Ayarlar]]** → **Görünüm** yolunu açın.
2. **Gelişmiş** bölümüne kaydırın.
3. **Şeridi göster**'i etkinleştirin.
4. Araç çubuğu pencerenin sol tarafında tekrar görünecektir.

> [!tip] Özel CSS
> Bir topluluk teması veya özel CSS kullanıyorsanız, bunların özel stil kuralları aracılığıyla araç çubuğunu gizlemediğinden emin olun.

### Mobil

Obsidian'ın mobil sürümünde hızlı erişim eylemleri gerçekleştirebilir, öğeleri yeniden sıralayabilir ve araç çubuğu menüsünü özelleştirebilirsiniz. Bu özelleştirmelere erişmek için şu adımları izleyin:

1. Obsidian'ın **[[Ayarlar]]** ![[lucide-cog.svg#icon]] bölümünü açın.
2. **Görünüm** bölümüne gidin.
3. **Gelişmiş** seçeneklerine kaydırın.
4. **Şerit Yapılandırması** öğesinin altındaki **Yönet** düğmesini seçin.

#### Hızlı erişim

Varsayılan olarak, hızlı erişim seçeneği *kısa basma* ile "Şerit menüsünü aç" olarak ayarlıdır. Hızlı erişiminiz olarak başka bir seçenek belirlerseniz:

- Seçilen seçenek *kısa basma* ile tetiklenir.
- Araç çubuğu menüsüne erişim *uzun basma* ile değişir.

> [!info] Hızlı erişim seçenekleri, etkinleştirdiğiniz Obsidian ayarlarına ve çekirdek eklentilere bağlıdır.

#### Yeniden sıralama ve görünürlük

Araç çubuğu menüsündeki öğelerin sırasını değiştirmek için **sürükle ve bırak** ![[lucide-menu.svg#icon]] düğmesine basılı tutun ve seçili öğeyi yukarı veya aşağı taşıyın.

Kırmızı **kaldır** ![[lucide-minus-circle.svg#icon]] veya yeşil **ekle** ![[lucide-plus-circle.svg#icon]] düğmelerini kullanarak araç çubuğu menüsündeki öğeleri gösterebilir veya gizleyebilirsiniz.

 ![[ribbon-rearrange-visibility.jpeg#interface]]

---
permalink: publish/publish
publish: true
mobile: true
description: Obsidian Publish kullanarak içeriğinizi nasıl yayımlayacağınızı öğrenin.
---
Bu sayfa, yayınlanmış içeriğinizi nasıl yöneteceğinizi açıklar. Sitenizin stilini nasıl özelleştireceğinizi öğrenmek için [[Sitenizi özelleştirin]] sayfasına bakın.

## Ön koşullar

- Bir Obsidian hesabı. Hesabınız yoksa [hemen kaydolun](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Etkin bir Obsidian Publish aboneliği. Aboneliğiniz yoksa [hesap panelinizden](https://obsidian.md/account/publish) abone olun.
- **Publish** çekirdek eklentisi [[Obsidian Publish'i kurma#Obsidian Publish'i etkinleştirin|etkinleştirilmiş]] olmalıdır.
- Bir [[Siteleri yönet#Yeni bir site oluşturma|Publish sitesi]] oluşturulmuş olmalıdır.

## Notları yayınlama

1. **Araç çubuğu**'nda **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] öğesini seçin.
2. **Değişiklikleri yayınla** iletişim kutusunda, yayınlanmamış tüm notları görüntülemek için **YENİ** seçeneğini belirleyin.
3. Yayınlamak istediğiniz notları seçin.
4. **Yayınla** öğesini seçin.

## Notları yayından kaldırma

Notlar, yayından kaldırdıktan sonra bile yerel kasanızda kalır.

1. **Araç çubuğu**'nda **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] öğesini seçin.
2. **Değişiklikleri yayınla** iletişim kutusunda, yayınlanmış tüm notları görüntülemek için **DEĞİŞMEMİŞ** seçeneğini belirleyin.
3. Yayından kaldırmak istediğiniz notları seçin.
4. **Yayınla** öğesini seçin.

## Yayınlanmış bir notu güncelleme

1. **Araç çubuğu**'nda **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] öğesini seçin.
2. **Değişiklikleri yayınla** iletişim kutusunda, son yayınlamadan bu yana değiştirilen tüm notları görüntülemek için **DEĞİŞİKLİKLER** seçeneğini belirleyin.
3. Güncellemek istediğiniz notları seçin.
4. **Yayınla** öğesini seçin.

> [!hint] Yeniden adlandırılmış veya kaldırılmış notları ve görselleri Publish'ten silme işlemi bu adımda gerçekleşir. Bu verileri silmek için onay kutusunu manuel olarak seçmeniz gerekir, çünkü güvenlik nedeniyle otomatik olarak seçilmez.

## Bağlantılı verileri yayınlama

Diğer notlara bağlantılar veya gömülü görseller içeren notları yayınlarken, bağlantılı notlar da yayınlanmadığı takdirde kırık bağlantılar oluşabilir. **Obsidian Publish**, önceden seçtiğiniz notlardan bağlantılı medyayı otomatik olarak seçerek bunu önlemeye yardımcı olur.

Tüm bağlantılı notları dahil etmek için **Değişiklikleri yayınla** iletişim kutusunda **Bağlantılı ekle** seçeneğini belirleyin.

Yayınlamadan önce, henüz yayınlamaya hazır olmadığınız verileri içermediğinden emin olmak için güncellenmiş seçimi gözden geçirin.

> [!tip] **Bağlantılı ekle** işlevi, [[#Verileri yoksayma]] bölümünde tanımlanan hariç tutmaları dikkate alır.

## Yayınlanacak verileri otomatik olarak seçme

Bir notu yayınlama için yeni veya değiştirilmiş olarak otomatik dahil etmek üzere notun [[Özellikler]] bölümünde `publish: true` ayarlayın.

Belirli klasörlerdeki notları ve bağlantılı görselleri **Dahil edilen** klasörler olarak ekleyerek otomatik olarak da seçebilirsiniz:

1. **Araç çubuğu**'nda **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] öğesini seçin veya [[Komut Paleti]]'ni açın ve **Publish: Değişiklikleri yayınla...** yazın.
2. **Yayınlama filtrelerini yönetme** ![[lucide-filter.svg#icon]] simgesini seçin.
3. **Dahil edilen klasörler** bölümünde **Yönet** seçeneğini belirleyin.
4. Önericiden dahil etmek istediğiniz klasörleri seçin.
5. Klasör, dahil edilen listeye eklenir.
6. İşiniz bittiğinde **Tamamlandı** seçeneğini belirleyin.

### Verileri yoksayma

Obsidian Publish'te bir notu yoksaymak için notun [[Özellikler]] bölümünde `publish: false` ayarlayın. Not artık yayınlanacak notlar listesinde görünmez.

Belirli klasörlerdeki notları ve görselleri **Hariç tutulan** klasörler olarak ekleyerek otomatik olarak da yoksayabilirsiniz:

1. **Araç çubuğu**'nda **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] öğesini seçin veya [[Komut Paleti]]'ni açın ve **Publish: Değişiklikleri yayınla...** yazın.
2. **Yayınlama filtrelerini yönetme** ![[lucide-filter.svg#icon]] simgesini seçin.
3. **Hariç tutulan klasörler** bölümünde **Yönet** seçeneğini belirleyin.
4. Önericiden hariç tutmak istediğiniz klasörleri seçin.
5. Klasör, hariç tutulan listeye eklenir.
6. İşiniz bittiğinde **Tamamlandı** seçeneğini belirleyin.

> [!note] `publish: true` hariç tutulan klasörleri geçersiz kılar
> Bir dosyada `publish: true` varsa, hariç tutulan bir klasör veya filtrede olsa bile yayınlanmaya devam eder. Bunun nedeni `publish: true` ifadesinin daha belirli bir kontrol sağlamasıdır.

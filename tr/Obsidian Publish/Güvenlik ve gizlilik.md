---
permalink: publish/security
---
[[Obsidian Publish'e giriş|Obsidian Publish]]'e yayınlamak istediğiniz notları seçebilirsiniz. Notlarınızın geri kalanı kasanızda güvende kalır.

Yalnızca yayınlamayı seçtiğiniz notlar Obsidian sunucularına gönderilir ve yayından kaldırdığınız notlar silinir.

## Parola koruması

Publish sitenizde daha iyi erişim kontrolü sağlamak için bir site parolası uygulayın. Ziyaretçiler siteye erişmeye çalıştıklarında parola girmeleri istenecektir. Daha sonra site parolasını kaldırmaya karar verirseniz, tüm site tekrar herkese açık hale gelecektir.

> [!warning] Yayınlanan notlar için bireysel parola koruması şu anda desteklenmemektedir.

### Site parolası ekleme

1. Araç çubuğunda, uygulama penceresinin solunda **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] düğmesine tıklayın.
2. **Değişiklikleri yayınla** iletişim kutusunda **Site seçeneklerini değiştir** ![[lucide-cog.svg#icon]] düğmesine tıklayın.
3. **Diğer site ayarları** altında, **Şifreler** yanında **Yönet** düğmesine tıklayın.
4. **Yeni şifre** düğmesine tıklayın.
5. **Şifre** alanına siteniz için bir parola girin.
6. (İsteğe bağlı) **Takma ad** alanına parola için bir takma ad girin, örneğin site erişimi vermek istediğiniz kişinin adı.
7. **Bu şifreyi ekle** düğmesine tıklayın.

### Site parolasını kaldırma

1. Araç çubuğunda, uygulama penceresinin solunda **Değişiklikleri yayınla** ![[lucide-send.svg#icon]] düğmesine tıklayın.
2. **Değişiklikleri yayınla** iletişim kutusunda **Site seçeneklerini değiştir** ![[lucide-cog.svg#icon]] düğmesine tıklayın.
3. **Diğer site ayarları** altında, **Şifreler** yanında **Yönet** düğmesine tıklayın.
5. Silmek istediğiniz parolanın yanındaki çarpı simgesine tıklayın.

## Veri toplama
### Ziyaretçi verileri

Varsayılan olarak, Obsidian Publish ziyaretçi verisi **toplamaz**, çerez saklamaz veya kişisel bilgileri işlemez. Ancak [[Sitenizi özelleştirin|sitenizi özelleştirerek]] analitik uygulayabilir veya diğer kullanıcı verilerini kaydedebilirsiniz.

Site sahibi olarak, bölgenizdeki GDPR ve gizlilik düzenlemelerine uymaktan siz sorumlusunuz. Bu, publish.js kullanılarak uygulanabilecek kendi bildirim bannerınızı oluşturmayı ve sitenize bir gizlilik politikası sayfası eklemeyi içerir.

## Erişim

Obsidian, Publish siteleri için site barındırma hizmeti sağlamak üzere [Cloudflare](https://www.cloudflare.com) ile sözleşme yapmıştır. Sunucular San Francisco, CA'da barındırılmaktadır.

### Ağınızda Obsidian Publish'e erişimi yönetme

Ağınızda Obsidian Publish'e erişimi düzenlemek için aşağıdaki alan adlarını yönetmeniz gerekir:

- Ön uç: `publish.obsidian.md`
- Arka uç: `publish-main.obsidian.md`

Ayrıca, arka uç hizmetleri şu alt alan adlarını kullanır: `publish-xx.obsidian.md`, burada `xx` `1 - 100` arasında bir sayıdır.

> [!tip] Güvenlik duvarı sisteminiz destekliyorsa, sürekli genişleyen alt alan adlarımıza uyum sağlamak için `publish-*.obsidian.md` adresini beyaz listeye eklemenizi öneririz.

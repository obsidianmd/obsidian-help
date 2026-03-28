---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Sync kasanızı farklı bir bölgeye taşıyın, şifreleme yükseltmesi gerçekleştirin.'
---
Varsayılan olarak Obsidian Sync, tüm verileriniz için [[Güvenlik ve gizlilik#Şifreleme|uçtan uca şifreleme]] kullanır. Bu, Obsidian ekibi de dahil olmak üzere hiç kimsenin notlarınıza erişemeyeceğini garanti eder.

Obsidian, en yüksek [[Güvenlik ve gizlilik|güvenlik]] standartlarını korumak için Sync şifrelemesini zaman zaman yükseltir. Bir şifreleme yükseltmesi mevcut olduğunda, **Obsidian Ayarları → Sync** bölümünde **Kasa şifrelemesini yükselt** başlıklı bir seçenek göreceksiniz. Bu işlem aynı zamanda [[Sync bölgeleri|Sync bölgenizi]] değiştirmenize de olanak tanır.

## Şifreleme versiyonları

Tüm yeni kasalar otomatik olarak en son şifrelemeyi kullanır. Mevcut kasalar, taşıma asistanı kullanılarak yükseltilebilir. Tüm cihazların, taşımak istediğiniz Sync şifreleme versiyonunu destekleyen bir Obsidian uygulama versiyonunu kullanıyor olması gerektiğini unutmayın.

| Yayın tarihi                                                            | Sync versiyonu | Minimum uygulama versiyonu |
| ----------------------------------------------------------------------- | -------------- | -------------------------- |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3              | 1.8.3                      |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0              | 0.9.21                     |

## Taşıma asistanı ile şifrelemeyi yükseltme

İlerlemeden önce, olası veri kaybını önlemek için kasanızın bir [[Obsidian dosyalarınızı yedekleyin|yedeğini]] oluşturun. Bu işlem, sürüm geçmişi dahil olmak üzere eski şifreleme ile uzak kasanızdaki tüm verileri kalıcı olarak silecektir.

> [!danger] Taşıma işlemleri yıkıcıdır
> 
> **Taşıma işlemine devam etmeden önce daima kasanızı [[Obsidian dosyalarınızı yedekleyin|yedekleyin]].**
> 
> Bir uzak kasayı taşıdığınızda verileriniz değiştirilecektir. Bu şu anlama gelir:
> 
> 1. Uzak veriler Obsidian sunucularından kaldırılacak ve kasa verileri yerine yeniden yüklenecektir.
> 2. Kasanın tüm [[Sürüm geçmişi|sürüm geçmişi]] kaybolacaktır.

1. **[[Ayarlar]]**'ı açın.
2. Kenar çubuğunda **Sync**'i seçin.
3. **Kasayı yükselt**'e tıklayın. Bu seçenek yalnızca uzak kasanız için bir yükseltme mevcut olduğunda görünecektir.
4. Yedeklerinizi tekrar kontrol edin ve **Devam et**'e tıklayın.
5. **Kasa adı** alanına uzak kasanın adını girin.
6. **Bölge** alanında, uzak kasanız için sunucu [[Obsidian Sync kurulumu#Bölgesel sync sunucuları|bölgenizi]] seçin.
7. **Şifreleme şifresi** alanında kasanız için bir parola seçin. Bu, uçtan uca şifrelenmiş bir kasa oluşturur. Kasa parolası Obsidian hesabınızdan bağımsızdır ve kasalarınızın her biri için farklı olabilir. Daha fazla bilgi için [[Güvenlik ve gizlilik]] bölümüne bakın.
8. Verilerinizi yeni şifreleme ile yeniden yükledikten sonra, diğer cihazlarınızda yeni Sync kasasına yeniden bağlanın.

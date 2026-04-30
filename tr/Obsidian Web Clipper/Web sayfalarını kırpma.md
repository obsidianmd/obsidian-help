---
permalink: web-clipper/capture
---
[[Obsidian Web Kırpıcı'ya giriş|Web Kırpıcı]] tarayıcı eklentisini yükledikten sonra, tarayıcınıza bağlı olarak birkaç şekilde erişebilirsiniz:

1. Tarayıcı araç çubuğunuzdaki Obsidian simgesi.
2. Klavye kısayolları, eklentiyi klavyenizden etkinleştirmek için.
3. Sağ tıklama menüsü, ziyaret ettiğiniz web sayfasına sağ tıklayarak.

Bir sayfayı Obsidian'a kaydetmek için **Obsidian'a ekle** düğmesine tıklayın.

## Bir sayfayı yakalama

Eklentiyi açtığınızda, Web Kırpıcı mevcut web sayfasından [[Obsidian Web Clipper/Şablonlar|şablonunuzdaki]] ayarlara göre veri çıkarır. Kendi şablonlarınızı oluşturabilir ve [[Değişkenler|değişkenler]] ile [[Filtreler|filtreler]] kullanarak çıktıyı özelleştirebilirsiniz.

Varsayılan olarak Web Kırpıcı, sayfadaki diğer öğeleri hariç tutarak yalnızca ana makale içeriğini akıllıca çıkarmaya çalışır. Ancak bu davranışı aşağıdaki yollarla geçersiz kılabilirsiniz:

- Özel bir şablon mevcutsa şablonunuzu kullanır.
- Bir seçim mevcutsa seçimi kullanır. Sayfanın tamamını seçmek için `Ctrl/Cmd+A` kullanabilirsiniz.
- Herhangi bir [[Web sayfalarını vurgulama|vurgulama]] mevcutsa vurgulamaları kullanır.

## Görselleri indirme

Web Kırpıcı kullandığınızda görseller otomatik olarak indirilmez. Bunun yerine görseller web tabanlı URL'lerine bağlantı verir. Bu, kasanızda yer tasarrufu sağlar ancak görsellerin çevrimdışı olarak veya URL çalışmayı durdurduğunda erişilebilir olmayacağı anlamına gelir.

Obsidian'daki herhangi bir dosya için görselleri **Geçerli dosya için ekleri indir** adlı [[Komut Paleti|komutu]] kullanarak indirebilirsiniz. Bu komut ayrıca Obsidian'da bir klavye kısayoluna atanabilir.

## Klavye kısayolları

Web Kırpıcı, iş akışınızı hızlandırmak için kullanabileceğiniz klavye kısayolları içerir. Tuş atamalarını değiştirmek için **Web Kırpıcı Ayarları** → **Genel** bölümüne gidin ve tarayıcınız için talimatları izleyin. Kısayol tuşlarını düzenlemeyi desteklemeyen Safari hariç tüm tarayıcılarda atamalar değiştirilebilir.

| Eylem                        | macOS          | Windows/Linux   |
| ---------------------------- | -------------- | --------------- |
| Kırpıcıyı aç                | `Cmd+Shift+O`  | `Ctrl+Shift+O`  |
| Hızlı kırp                   | `Opt+Shift+O`  | `Alt+Shift+O`   |
| Vurgulayıcıyı aç/kapat       | `Opt+Shift+H`  | `Alt+Shift+H`   |
| Okuyucuyu aç/kapat            | `Opt+Shift+R`  | `Alt+Shift+R`   |

## Arayüz işlevselliği

Web Kırpıcı arayüzü dört bölüme ayrılmıştır:

1. **Üst bilgi** şablonları değiştirebileceğiniz, [[Web sayfalarını vurgulama|vurgulamayı]], [[Okuyucu|okuma modunu]] açabileceğiniz ve ayarlara erişebileceğiniz bölüm.
2. **Özellikler** sayfadan çıkarılan ve Obsidian'da [[Özellikler]] olarak kaydedilecek [[Özellikler|meta verileri]] gösterir.
3. **Not içeriği** Obsidian'a kaydedilecek içerik.
4. **Alt bilgi** kasayı ve klasörü seçmenize ve Obsidian'a eklemenize olanak tanır.

Üst bilgi işlevselliği şunları içerir:

- ![[lucide-chevrons-up-down.svg#icon]] Eklenti ayarlarında eklenen kayıtlı [[Obsidian Web Clipper/Şablonlar|şablonları]] kullanmak için **Şablon** değiştirici.
- ![[lucide-more-horizontal.svg#icon]] Şablonlarda kullanabileceğiniz sayfa değişkenlerini görüntülemek için **Daha fazla** düğmesi.
- ![[lucide-highlighter.svg#icon]] [[Web sayfalarını vurgulama|Vurgulamayı]] açmak için **Vurgulayıcı** düğmesi.
- ![[lucide-book-icon.svg#icon]] [[Okuyucu|Okuma görünümünü]] açmak için **Okuyucu** düğmesi.
- ![[lucide-picture-in-picture-2.svg#icon]] Web Kırpıcı'yı açılır pencereden sayfanın içine taşımak için **Göm** düğmesi.
- ![[lucide-settings.svg#icon]] Eklenti ayarlarını açmak için **Ayarlar** düğmesi.

Alt bilgi işlevselliği şunları içerir:

- Verileri Obsidian'a kaydetmek için **Obsidian'a ekle** düğmesi.
- Web Kırpıcı ayarlarında eklenen kayıtlı kasalar arasında geçiş yapmak için **Kasa** açılır menüsü.
- Hangi klasöre kaydedileceğini tanımlamak için **Klasör** alanı.
- Sayfada [[Web sayfalarını yorumlama|doğal dil istemlerini]] çalıştırmak için **Yorumlayıcı**.

---
permalink: configuration-folder
publish: true
mobile: true
description: Masaüstü ve mobil cihazlarda yapılandırma klasörünüze nasıl erişeceğinizi ve yöneteceğinizi öğrenin.
---
Obsidian'ın yapılandırma klasörü, [[Kasaları yönet|kasanıza]] ait tüm ayar dosyalarını içerir.

Varsayılan olarak yapılandırma klasörünüz `.obsidian` olarak adlandırılır ve kasa klasörünün içine yerleştirilir. Bir senkronizasyon hizmeti kullanıyorsanız veya aynı kasada farklı profilleri test etmek istiyorsanız, yapılandırma klasörünüzü değiştirmek isteyebilirsiniz.

## Yapılandırma klasörünüze erişim

### Masaüstü

Masaüstünde `.obsidian` klasörü kasa klasörünüzün içinde bulunur. Sistem dosya yöneticiniz aracılığıyla erişebilirsiniz.

### Mobil

Yapılandırma klasörüne erişim platforma göre farklılık gösterir:

**iOS ve iPadOS**

iOS veya iPadOS'ta `.obsidian` klasörüne erişmenin varsayılan bir yolu yoktur. Gizli dosya ve klasörleri görüntülemek ve düzenlemek için aşağıdaki gibi üçüncü taraf bir uygulamaya ihtiyacınız olacaktır:

- **Taio** — Klasör ve dosya adlarını görüntüleme ve düzenleme için temel özelliklere sahip ücretsiz uygulama.
- **Textastic** — Gelişmiş dosya düzenleme özelliklerine sahip ücretli uygulama.

**Android**

Android'de `.obsidian` klasörüne erişmek için:

1. Sistem dosya yöneticinizi açın.
2. Ayarlarda "Gizli dosyaları göster" seçeneğini etkinleştirin.
3. Kasa klasörünüze gidin. `.obsidian` klasörü en üst seviyede görünecektir.

> [!tip]- Alternatif dosya yöneticileri
> Varsayılan dosya yöneticinizde "Gizli dosyaları göster" seçeneği yoksa, bu özelliği içeren bir dosya yöneticisi uygulaması yükleyin.

## Yapılandırma klasörünüzü değiştirme

Yapılandırma klasörünüzü ayarlamak için:

1. **[[Ayarlar]] → Dosyalar & Linkler** bölümünü açın.
2. **Konfigürasyon dosyasını değiştir** alanına, nokta (`.`) ile başlayan profil adınızı yazın. Örneğin, `.obsidian-awesome`.
3. Değişikliklerin geçerli olması için Obsidian'ı yeniden başlatın.

> [!info] Yapılandırma klasörünüzdeki ayarlar yeni yapılandırma klasörünüze aktarılmaz. Ancak önceki yapılandırma klasörünüz kasa klasörünüzde kalacaktır.

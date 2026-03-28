---
permalink: data-storage
publish: true
mobile: true
description: 'Bu sayfa, Obsidian''ın verilerini cihazınızda nasıl depoladığını açıklar.'
---
Obsidian notlarınızı bir _kasada_ [[Temel biçimlendirme söz dizimi|Markdown biçimli]] düz metin dosyaları olarak saklar. Kasa, alt klasörler dahil olmak üzere yerel dosya sisteminizdeki bir klasördür.

Notlar düz metin dosyaları olduğundan, notları düzenlemek ve yönetmek için diğer metin düzenleyicileri ve dosya yöneticilerini kullanabilirsiniz. Obsidian, herhangi bir harici değişikliğe ayak uydurmak için kasanızı otomatik olarak yeniler.

Bir kasayı, işletim sisteminizin izin verdiği herhangi bir yerde oluşturabilirsiniz. Obsidian; [[Obsidian Sync'e giriş|Obsidian Sync]], Dropbox, iCloud, OneDrive, Git ve diğer birçok üçüncü taraf hizmetiyle senkronize olur.

Birden fazla klasörü ayrı kasalar olarak açabilirsiniz; örneğin iş ve okul notlarını ayırmak için.

> [!warning] Kasaların içinde kasalar
> [[Dahili bağlantılar]] bir kasaya özgü olduğundan, kasaların içinde kasa oluşturmamanızı öneririz. Bağlantılar doğru şekilde güncellenmeyebilir.

## Kasa ayarları

Obsidian, kasanın kök klasöründe [[Yapılandırma klasörü|yapılandırma klasörü]] olan bir `.obsidian` klasörü oluşturur. Bu klasör, [[Kısayol tuşları|klavye kısayolları]], [[Temalar|temalar]] ve [[Topluluk Eklentileri|topluluk eklentileri]] gibi kasaya özel tercihleri içerir.

Varsayılan olarak çoğu işletim sistemi nokta (`.`) ile başlayan klasörleri gizler, bu nedenle görmek için dosya yöneticinizin ayarlarını güncellemeniz gerekebilir.

- **macOS**: Finder'da gizli dosyaları göstermek için `Cmd+Shift+.` (nokta) tuşlarına basın.
- **Windows**: [Gizli dosyaları göster](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
+ **GNU/Linux:** Çoğu Dosya Gezgini'nde gizli dosyaları göstermek için `Ctrl + h` tuşlarına basın.

> [!tip] `.obsidian` klasörünü Git'e ekleme
> `.obsidian/workspace.json` ve `.obsidian/workspaces.json` dosyaları mevcut çalışma alanı düzenini saklar ve yeni bir dosya açtığınızda güncellenir. Kasanızı yönetmek için [Git](https://git-scm.com) kullanıyorsanız, bu dosyaları `.gitignore` dosyasına eklemek isteyebilirsiniz.

## Genel ayarlar

Obsidian genel ayarları bir sistem klasöründe saklar. Sistem klasörünün konumu, kullandığınız işletim sistemine bağlıdır.

- **macOS**: `/Users/kullanıcıadınız/Library/Application Support/obsidian`
- **Windows**: `%APPDATA%\Obsidian\`
- **Linux**: `$XDG_CONFIG_HOME/obsidian/` veya `~/.config/obsidian/`

> [!warning] Sistem klasöründe kasa oluşturmayın. Bu, veri bozulmasına veya veri kaybına yol açabilir.

## IndexedDB

IndexedDB, Obsidian'ın arka uç depolama için kullandığı düşük seviyeli, istemci taraflı bir veritabanıdır. [[Obsidian Sync'e giriş|Obsidian Sync]] bağlantılarının durumunu korumaya yardımcı olur ve uygulama kapatıldığında [[#Meta veri önbelleği|Meta veri önbelleğini]] saklar.

> [!warning] Apple'ın [Kilit Modu](<https://support.apple.com/en-us/105120>) etkinleştirilmişse ve Obsidian hariç tutulmamışsa, bu veritabanı dosyaları kaydedilmez ve uygulama her başlatıldığında yeniden indeksleme gerekir.

### Meta veri önbelleği

Uygulamayı kullanırken hızlı bir deneyim sunmak için Obsidian, kasanızdaki dosyalar hakkında **meta veri önbelleği** adı verilen yerel bir meta veri kaydı tutar. Bu meta veriler, Graf görünümünden Anahat görünümüne kadar uygulama genelinde birçok özelliği besler.

Obsidian bu önbelleği kasanızdaki dosyalarla senkronize tutar, ancak verilerin alttaki dosyalarla uyumsuz hale gelmesi mümkündür. Kasanızda bu durum gerçekleşirse, uygulama ayarlarındaki *Dosyalar & Linkler* bölümünden meta veri önbelleğinizi yeniden oluşturabilirsiniz.

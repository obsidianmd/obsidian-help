---
permalink: import/onenote
cssclasses:
  - soft-embed
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisini]] kullanarak notlarınızı Microsoft OneNote'tan kolayca taşımanıza olanak tanır. Bu, OneNote verilerinizi Obsidian ve diğer birçok uygulama ile kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürür.

Obsidian, OneNote verilerinizi içe aktarmak için iki yol sunar:

1. **Microsoft hesabı** ile Microsoft hesabınıza giriş yaparak OneDrive'a senkronize edilmiş not defterlerini içe aktarır. İnternet bağlantısı gerektirir.
2. **Dosya içe aktarma** OneNote'un dışa aktarma dosyalarını (`.onepkg` ve `.one`) kullanır. Hesap veya internet bağlantısı gerektirmez ve hiç senkronize edilmemiş not defterleri için de çalışır.

## Microsoft hesabından içe aktarma

> [!Warning]
> Yalnızca hesabınıza ait not defterleri içe aktarılabilir. Başkalarının sizinle paylaştığı not defterleri desteklenmez ve iş veya okul hesabı için kuruluşunuzun erişimi onaylaması gerekebilir.

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcıyı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **Dosya biçimi** altında **Microsoft OneNote**'u seçin.
6. Web tarayıcınızda Microsoft giriş sayfasını açmak için **Giriş yap**'a tıklayın. OneNote Not Defterlerinizi içeren Microsoft hesabınızın kimlik bilgilerini girin. Microsoft giriş süreci hakkında daha fazla bilgi aşağıda mevcuttur.
7. Obsidian'a OneNote Not Defterlerinizi görüntüleme izni vermek için **Kabul Et**'e tıklayın.
8. Tarayıcınızın sizi Obsidian uygulamasına yönlendirmesine izin vermek için **Bağlantıyı Aç**'a tıklayın.
9. Obsidian uygulamasında, İçe aktarıcı iletişim kutusu artık oturum açtığınızı gösterecek ve OneNote Not Defterlerinizi ve Bölümlerinizi listeleyecektir. İçe aktarmak istediğiniz bölümleri işaretleyin.
10. Oluşturulan şablonu incelemek ve sayfalarınızdan önizleme örneklerini görmek için **İçe aktar**'ı seçin.
11. **İçe aktar**'ı tekrar seçin ve içe aktarma tamamlanana kadar bekleyin.

Not defterleriniz bir iş veya okul hesabına aitse, giriş yaptıktan sonra OneNote eklentinin bunlara erişimini reddedebilir. Bu durumda **Çıkış yap** düğmesinin yanında bir **İş veya okul erişimini kullan** düğmesi görünür. Bu hesapların ihtiyaç duyduğu daha geniş izinle tekrar giriş yapmak için bunu kullanın. Çalışması için kuruluşunuzun bu izni onaylaması gerekebilir.

### Sorun giderme

#### Bölüm veya not defteri görünmüyor

İçe aktarmaya çalıştığınız not defterlerinin OneDrive ile senkronize edildiğinden ve OneNote Web'de görünür olduğundan emin olun. Not defterleri size ait olmalıdır (başkaları tarafından yazılmış paylaşılan not defterleri desteklenmez).

Belirli bir bölüm eksikse, kilitli bir bölüm olmadığından emin olun — kilitli bölümler, kilit kaldırılmadan görünmezdir.

İş veya okul not defteriyse, yukarıdaki **İş veya okul erişimini kullan** hakkındaki nota bakın.

#### İçe aktarılan notlar boş veya eksik içerikli

Bu sorun nadiren kullandığınız not defterlerinde oluşabilir. Sorunu çözmek için şu adımları izleyin:

1. Tarayıcınızda [OneNote Web](https://onenote.com/notebooks)'i açın.
2. İçeriği eksik olan Not Defterlerine **sağ tıklayın**.
3. Menüden **Not Defterini Dışa Aktar**'ı seçin.
4. Az önce indirdiğiniz dosyayı bir klasöre **çıkarın**.
5. OneNote not defterlerinizi [buraya](https://www.onenote.com/notebooks/exportimport?toImport=true) yükleyin.
6. **Obsidian İçe aktarıcı**'yı açın ve tekrar içe aktarmayı deneyin

Bu ipuçlarını uyguladıktan sonra sorununuz çözülmediyse, Microsoft sunucularında geçici bir sorun olabilir. Bu durumda birkaç dakika bekleyip tekrar deneyin. Sorun devam ederse, lütfen [Obsidian İçe aktarıcı GitHub deposunda](https://github.com/obsidianmd/obsidian-importer/issues) bir sorun bildirin.

## OneNote dosyalarını içe aktarma (.one, .onepkg)

Dosya içe aktarma, OneNote verilerinizi içe aktarmanın alternatif bir yoludur. OneNote'un kendi yazdığı dışa aktarma dosyalarını okur, bu yüzden Microsoft hesabı veya internet bağlantısı gerektirmez. Yalnızca bilgisayarınızda depolanan not defterleri, hesabınızın erişemediği not defterleri veya giriş yapmak istemediğiniz durumlar için kullanın.

### Not defterlerinizi OneNote'tan dışa aktarma

Her not defterini **OneNote Paketi** (`.onepkg`) olarak dışa aktarmanızı öneririz. Bir paket not defterinin tüm bölümlerini içerir, böylece bir not defterini tek adımda dışa ve içe aktarabilirsiniz ve İçe aktarıcı seçmeniz için bölümlerini listeler.

Dışa aktarma yalnızca **Windows için OneNote**'ta, Microsoft 365 ile birlikte gelen masaüstü uygulamasında kullanılabilir. Mac için OneNote uygulaması ve eski Windows 10 için OneNote uygulaması bu biçimlere dışa aktarma yapamaz.

1. İçe aktarmak istediğiniz not defterini Windows için OneNote'ta açın.
2. **Dosya → Dışa Aktar**'a gidin.
3. **Geçerliyi dışa aktar** altında **Not Defteri**'ni seçin.
4. **Biçim seçin** altında **OneNote Paketi (\*.onepkg)** seçeneğini seçin.
5. **Dışa Aktar**'a tıklayın ve dosyayı kaydedeceğiniz yeri seçin.
6. İçe aktarmak istediğiniz her not defteri için tekrarlayın.

Tek bir bölümü dışa aktarmak için 3. adımda **Bölüm**'ü ve 4. adımda **OneNote 2010-2016 Bölümü (\*.one)** seçeneğini seçin.

Ayrıca hiçbir şey dışa aktarmadan, OneNote'un zaten diskte tuttuğu bölüm dosyalarını da içe aktarabilirsiniz:

- Bilgisayarınızda depolanan not defterleri `Documents\OneNote Notebooks` klasöründedir, her bölüm için bir `.one` dosyası bulunur.
- Senkronize edilmiş not defterlerinin yedekleri `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup` klasöründedir.

### OneNote dosyalarınızı içe aktarma

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız olacak, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]]**'ı açın.
2. **Topluluk Eklentileri**'ne gidin ve [İçe aktarıcıyı indirin](obsidian://show-plugin?id=obsidian-importer).
3. İçe aktarıcı eklentisini etkinleştirin.
4. Komut paleti veya araç çubuğu simgesini kullanarak **İçe aktarıcı** eklentisini açın.
5. **Dosya biçimi** altında **Microsoft OneNote (.one, .onepkg)** seçeneğini seçin.
6. İçe aktarmak istediğiniz `.onepkg` ve `.one` dosyalarını seçin. Aynı anda birden fazla dosya seçebilirsiniz, böylece tüm not defterleriniz birlikte içe aktarılabilir.
7. **İçe aktarılacak bölümler** altında bu dosyalarda bulunan bölümler, hepsi işaretli olarak listelenir. İstemediğiniz bölümlerin işaretini kaldırın.
8. İsteğe bağlı olarak, içe aktarma için bir **Çıktı klasörü**, eklerin nereye kaydedileceğini ve aynı not defterini tekrar içe aktarırsanız **Mevcut notlar** ile ne yapılacağını seçin.
9. Oluşturulan şablonu incelemek ve sayfalarınızdan önizleme örneklerini görmek için **İçe aktar**'ı seçin.
10. **İçe aktar**'ı tekrar seçin ve içe aktarma tamamlanana kadar bekleyin.

Her bölüm bir klasör olur ve içindeki her sayfa bir not olur. Bir alt sayfa, üstündeki sayfanın adını taşıyan bir klasöre kaydedilir; bu, OneNote'un gösterdiği yapıyı korur ve aynı ada sahip iki alt sayfanın çakışmasını önler. Not defterinin geri dönüşüm kutusundaki sayfalar içe aktarılmaz.

### Sınırlamalar

- Parola korumalı bölümler şifrelenmiş olarak depolanır ve sayfaları atlanır. Bunları içe aktarmak için OneNote'ta parolayı kaldırın ve tekrar dışa aktarın.
- Hak korumalı dosyalar yalnızca politikanın izin verdiği bir hesap tarafından açılabilir ve İçe aktarıcı tarafından okunamaz.

## Şablonlar

OneNote verilerinizin nasıl içe aktarılacağını tam olarak yapılandırmak için [[İçe aktarıcı şablonları|İçe aktarıcı şablonlarını]] kullanın. 

![[İçe aktarıcı şablonları#Variables]]

## Gizlilik

Microsoft Hesabınızı kullanarak içe aktarmayı seçerseniz, Obsidian İçe aktarıcı eklentisi kimlik doğrulaması yapmak ve OneNote not defterlerinizi içe aktarmak için [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) kullanır. Bu, hesabınıza yalnızca bilgisayarınızdan kullanılan ve hiçbir zaman depolanmayan kısa süreli bir erişim belirteci verir. İçe aktarma tamamlandıktan sonra isteğe bağlı olarak belirteci [Microsoft uygulamaları ve hizmetleri sayfasından](https://account.live.com/consent/Manage) iptal edebilirsiniz.

Dosya içe aktarma hiçbir zaman Microsoft'a bağlanmaz: seçtiğiniz dosyalar herhangi bir ağ bağlantısı olmadan bilgisayarınızda okunur.

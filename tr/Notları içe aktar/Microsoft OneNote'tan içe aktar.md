---
permalink: import/onenote
---
Obsidian, [[İçe aktarıcı|İçe aktarıcı eklentisini]] kullanarak notlarınızı Microsoft OneNote'tan kolayca taşımanıza olanak tanır. Bu, OneNote verilerinizi Obsidian ve diğer birçok uygulama ile kullanabileceğiniz dayanıklı Markdown dosyalarına dönüştürecektir.

> [!Warning]
> Yalnızca kişisel hesabınıza ait not defterleri içe aktarılabilir. Paylaşılan notlar veya iş ve okul hesaplarından gelen hesaplar desteklenmemektedir.

## OneNote verilerinizi Obsidian'a içe aktarma

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

![[OneNote-Importer-Select-Sections.png]]

10. **İçe aktar**'a tıklayın ve içe aktarma tamamlanana kadar bekleyin.
11. İşlem tamamlandı!

## Sorun giderme

### Bölüm veya not defteri görünmüyor

İçe aktarmaya çalıştığınız not defterlerinin OneDrive ile senkronize edildiğinden ve OneNote Web'de görünür olduğundan emin olun. Not defterleri size ait olmalıdır (başkaları tarafından yazılmış paylaşılan not defterleri desteklenmez).

Belirli bir bölüm eksikse, kilitli bir bölüm olmadığından emin olun — kilitli bölümler, kilit kaldırılmadan görünmezdir.

### İçe aktarılan notlar boş veya eksik içerikli

Bu sorun nadiren kullandığınız not defterlerinde oluşabilir. Sorunu çözmek için şu adımları izleyin:

1. Tarayıcınızda [OneNote Web](https://onenote.com/notebooks)'i açın.
2. İçeriği eksik olan Not Defterlerine **sağ tıklayın**.
3. Menüden **Not Defterini Dışa Aktar**'ı seçin.
4. Az önce indirdiğiniz dosyayı bir klasöre **çıkarın**.
5. OneNote not defterlerinizi [buraya](https://www.onenote.com/notebooks/exportimport?toImport=true) yükleyin.
6. **Obsidian İçe aktarıcı**'yı açın ve tekrar içe aktarmayı deneyin

Bu ipuçlarını uyguladıktan sonra sorununuz çözülmediyse, Microsoft sunucularında geçici bir sorun olabilir. Bu durumda birkaç dakika bekleyip tekrar deneyin. Sorun devam ederse, lütfen [Obsidian İçe aktarıcı GitHub deposunda](https://github.com/obsidianmd/obsidian-importer/issues) bir sorun bildirin.

## Gizlilik

Obsidian İçe aktarıcı eklentisi, Microsoft hesabınızla kimlik doğrulaması yapmak ve OneNote not defterlerinizi içe aktarmak için [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) kullanır. Bu, hesabınıza yalnızca bilgisayarınızdan kullanılan ve hiçbir zaman depolanmayan kısa süreli bir erişim belirteci verir. İçe aktarma tamamlandıktan sonra isteğe bağlı olarak belirteci [Microsoft uygulamaları ve hizmetleri sayfasından](https://account.live.com/consent/Manage) iptal edebilirsiniz.

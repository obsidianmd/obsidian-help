---
permalink: 2fa
---
Bir [Obsidian hesabınız](https://obsidian.md/account) varsa, hesabınızı ikinci bir doğrulama adımıyla korumak için iki faktörlü kimlik doğrulamayı (2FA) etkinleştirebilirsiniz.

## 2FA'yı Etkinleştir

- Web tarayıcınızdan [Obsidian hesabınıza](https://obsidian.md/account/profile) giriş yapın.
- **Profil** bölümünde, **2 faktörlü kimlik doğrulama** seçeneğine gidin ve **Etkinleştir**'i seçin.
- Bir **QR kodu** veya **kurulum anahtarı** ile bir kimlik doğrulama uygulaması bağlamanızı isteyen bir açılır pencere görünecektir.

> [!hint]- Popüler kimlik doğrulama uygulamaları
> - [Authy](https://authy.com)
> - [Google Authenticator](https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2)
> - [Microsoft Authenticator](https://www.microsoft.com/en-us/security/mobile-authenticator-app)
> - [iCloud Anahtarlık](https://support.apple.com/en-gb/guide/iphone/ipha6173c19f/ios)

- Bağlandıktan sonra, kimlik doğrulama uygulamanız size altı haneli bir kod verecektir. Bu kodu **QR kodu/kurulum anahtarı** bölümünün altında, 3. adımda girin.
- Son olarak, mevcut parolanızı girin.
- **Kurulumu tamamla**'yı seçin.
- Açılır pencere, bir onay penceresi ve kurtarma kodlarınız ile değiştirilecektir. Lütfen kurtarma kodlarınızı indirin, çünkü hesabınızın kilidini açmak için bunlara ihtiyacınız olacaktır.

2FA'nız artık kurulmuştur.

> [!warning]- QR kodu/kurulum anahtarı yedekleri
> Kurtarma kodlarınıza ek olarak **QR kodunuzun** veya **Kurulum anahtarınızın** bir yedeğini tutmaya karar verirseniz, bunu parola ile şifrelenmiş bir sistemde saklamanızı şiddetle tavsiye ederiz.

## Kurtarma kodları oluşturma

Kurtarma kodları kullanıma sunulmadan önce 2FA'yı etkinleştirdiyseniz veya kurtarma kodlarınızı yenilemek istiyorsanız, şu adımları izleyin:

- Web tarayıcınızdan [Obsidian hesabınıza](https://obsidian.md/account/profile) giriş yapın.
- 2 faktörlü kimlik doğrulama seçeneğinin yanında **Kurtarma kodlarını yenile**'yi seçin.
- Açılır pencerede **parolanızı** ve **6 haneli kimlik doğrulama kodunuzu** girin.
- Bir onay penceresi kurtarma kodlarınızı gösterecektir. İki seçeneğiniz vardır:
    - **Kurtarma kodlarını kopyala**: Kodları başka bir yere yapıştırmak için kopyalayın.
    - **Kurtarma kodlarını indir**: Kodlarınızı içeren bir `obsidian-recovery-codes.txt` dosyası indirin.
- Açılır pencereyi kapatmak için **Anladım**'ı seçin.

Bir kurtarma kodunu **6 haneli kimlik doğrulama kodunuz** yerine **bir kez** kullanabilirsiniz. Ayrıca kurtarma kodlarınızı istediğiniz zaman yenileyebilirsiniz.

## 2FA'yı Devre Dışı Bırakma

- Web tarayıcınızdan [Obsidian hesabınıza](https://obsidian.md/account/profile) giriş yapın.
- **Profil** bölümünde, **2 faktörlü kimlik doğrulama** seçeneğine gidin ve **Devre dışı bırak**'ı seçin.
- Obsidian parolanızı girin.
- Kimlik doğrulama uygulamanızdan mevcut altı haneli kodu girin.
- **2FA'yı devre dışı bırak**'ı seçin.
- Hesap yönetim ekranına geri döneceksiniz.

**2 faktörlü kimlik doğrulama** ayarı tekrar bir **Etkinleştir** düğmesi gösterecektir, bu da 2FA'nın devre dışı bırakıldığını gösterir.

## SSS

**2FA'yı etkinleştirdim. Mevcut Obsidian cihazlarımdan çıkış yapılacak mı?**
Hayır. 2FA'yı etkinleştirmek, kolaylığınız için sizi her yerden çıkış yapmaz. Gerekirse, bunu hesap sayfanızdan manuel olarak yapabilir ve ardından her cihazınızda tekrar giriş yapabilirsiniz.

**2FA'yı etkinleştirdim, sonra devre dışı bıraktım. Tekrar kurmak istiyorum. Orijinal QR kodunu veya kurulum anahtarını kullanabilir miyim?**
Hayır. Her yeni 2FA kurulumu başlattığınızda size yeni bir **QR kodu** ve yeni bir **Kurulum anahtarı** sağlanacaktır.

**2FA'yı etkinleştirdim. Birkaç çıkış/giriş denemesinden sonra hâlâ 2FA kodu istenmedi. Bu çalışıyor mu?**
Tarayıcı önbelleğiniz, sayfada değişiklik yapıyormuşsunuz gibi görünmenize (giriş veya çıkış yapma gibi) neden olabilir, oysa aslında depolanmış verilere erişiyorsunuzdur. 2FA'nın çalıştığını doğrulamak için özel bir tarayıcı penceresinde giriş yapmayı deneyin.

Bu davranışı yaşamaya devam ederseniz, lütfen [bir hata raporu gönderin](https://forum.obsidian.md/c/bug-reports/7).

**Kurtarma kodlarımı, kimlik doğrulayıcımı ve hesabıma giriş yapmak için gereken her şeyi kaybettim. Ne yapmalıyım?**

Kurtarma kodlarınızı ve kimlik doğrulayıcınızı kaybettiyseniz, hesabınıza yeniden erişim sağlamak için lütfen [support@obsidian.md](mailto:support@obsidian.md?subject=I%20lost%20my%202FA) adresine e-posta gönderin.

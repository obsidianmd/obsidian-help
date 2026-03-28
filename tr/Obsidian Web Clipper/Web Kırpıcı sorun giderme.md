---
permalink: web-clipper/troubleshoot
---
[[Obsidian Web Kırpıcı'ya giriş|Web Kırpıcı]] ile ilgili sorunlarla karşılaşırsanız [resmi Discord kanalı](https://discord.com/channels/686053708261228577/1285652864089198672) üzerinden yardım alabilirsiniz. Ayrıca hataları [GitHub deposunda](https://github.com/obsidianmd/obsidian-clipper) bildirebilirsiniz.

## Genel

### Bazı içerikler eksik

Varsayılan olarak, Web Kırpıcı sayfadaki içeriği akıllıca yakalamaya çalışır. Ancak tüm web sitelerinde bunu başarılı bir şekilde yapamayabilir.

Web Kırpıcı, sayfanın yalnızca ana içeriğini yakalamak için [Defuddle](https://github.com/kepano/defuddle) kullanır. Bu, üst bilgi, alt bilgi ve diğer öğeleri hariç tutar, ancak bazen aşırı muhafazakâr davranarak saklamak istediğiniz içeriği kaldırabilir. Defuddle'a [hata bildiriminde](https://github.com/kepano/defuddle) bulunabilirsiniz.

Web Kırpıcı'da Defuddle'ı atlamak için aşağıdaki yöntemleri kullanın:

- Metin seçin veya tüm metni seçmek için `Cmd/Ctrl+A` kullanın.
- Tam olarak neyi yakalamak istediğinizi seçmek için [[Web sayfalarını vurgulama|içeriği vurgulayın]].
- Site için [[Obsidian Web Clipper/Şablonlar|özel şablon]] kullanın.

### Obsidian'da içerik görünmüyor

**Obsidian'a ekle** düğmesine tıkladığınızda Obsidian'da herhangi bir içerik göremiyorsanız:

- Obsidian [[Yardım ve destek#Konsol günlüklerini yakalama|geliştirici konsolunda]] hataları kontrol edin.
- Web Kırpıcı ayarlarındaki kasa adının, Obsidian'daki *kasa adınızla* tam olarak eşleştiğinden emin olun — *kasa yolu ile değil*.
- Klasör adının doğru biçimlendirildiğini kontrol edin.

## Linux

#### Obsidian açılmıyor

- [[Obsidian URI]] protokolünün [[Obsidian URI#Obsidian URI'yi kaydetme|kayıtlı olduğundan]] emin olun.
- Firefox kullanıyorsanız [tarayıcı ayarlarından kaydetmeniz](https://kb.mozillazine.org/Register_protocol) gerekebilir.

#### Obsidian açılıyor ancak yalnızca dosya adı kaydediliyor

Muhtemelen Obsidian panonuza erişemiyor. Tarayıcınızdan Obsidian'a veri aktarmak için pano erişimi gereklidir. Yapılandırmanız, uygulamaların sandbox'lanma şeklini ve pano izinlerini etkileyebilir.

Wayland kullanıyorsanız, uygulama odaklanmamışken Obsidian'ın panoyu okuma izinlerine sahip olduğundan emin olun. Bu tercih döşeme pencere yöneticinizde (örn. Hyprland veya Sway) bulunabilir.

Hyprland kullanıyorsanız:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Sway kullanıyorsanız:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Flatpak kullanıyorsanız [resmi olarak desteklenen bir Obsidian sürümünü](https://obsidian.md/download) denemeyi düşünün.
- KDE kullanıyorsanız **Sistem Ayarları** → **Pencere Yönetimi** → **Pencere Kuralları** bölümüne gidin ve Obsidian'ın odağı almasına izin verin, [[web-clipper-kde.png|ekran görüntüsüne bakın]].
- Son çare olarak, **Web Kırpıcı Ayarları** → **Genel** bölümünde **Eski mod**'a geçmeyi deneyin. Bu, panoyu atlayarak içeriği doğrudan URI aracılığıyla kaydedecektir. Bunun, tarayıcınıza ve Linux dağıtımınıza bağlı olarak kırpılabilecek karakter sayısını sınırlayacağını unutmayın.

## iOS ve iPadOS

Safari için Web Kırpıcı uzantısını etkinleştirmek için:

1. Safari'ye gidin, tarayıcı URL çubuğundaki en soldaki düğmeye dokunun; altında çizgiler bulunan bir dikdörtgene benzer.
2. **Uzantıları Yönet**'e dokunun.
3. Uzantılar listesinde **Obsidian Web Clipper**'ı etkinleştirin.
4. Menüden çıkın.
5. Uzantıyı kullanmak için URL çubuğundaki **yapboz parçası simgesine dokunun**.

Web Kırpıcı'nın tüm web sitelerinde çalışmasına izin vermek için:

1. iOS **[[Ayarlar]]** → **Uygulamalar** → **Safari** → **Uzantılar** bölümüne gidin.
2. **İzinler** altında tüm web sitelerinde çalışmasına izin verin.

Obsidian'ın Web Kırpıcı içeriğini her zaman almasına izin vermek için:

1. iOS **[[Ayarlar]]** → **Uygulamalar** → **Obsidian** bölümüne gidin.
2. **Diğer uygulamalardan yapıştır** seçeneğini **İzin Ver** olarak ayarlayın.

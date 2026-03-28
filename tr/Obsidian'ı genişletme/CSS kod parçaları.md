---
permalink: snippets
publish: true
mobile: true
description: Tam bir tema oluşturmadan Obsidian uygulamasının görünümünün bazı kısımlarını nasıl değiştireceğinizi öğrenin.
---
Obsidian uygulamasının görünümünün çeşitli yönlerini [bir tema oluşturmaya](https://docs.obsidian.md/Themes/App+themes/Build+a+theme) gerek kalmadan nasıl değiştireceğinizi öğrenin.

> [!tip] [[Obsidian Publish'e giriş|Obsidian Publish]] için CSS ile ilgili rehberlik arıyorsanız, [[Sitenizi özelleştirin]] sayfasını incelediğinizden emin olun.

CSS, HTML'nin nasıl görüneceğini kontrol eden bir dildir. CSS kod parçaları ekleyerek, başlıkların boyutu ve rengi gibi Obsidian kullanıcı arayüzünün bazı bölümlerini değiştirebilirsiniz. Obsidian, arayüzü kolayca özelleştirmenize yardımcı olan [CSS değişkenlerine](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) sahiptir.

Obsidian, CSS kod parçalarını kasanın [[Yapılandırma klasörü|yapılandırma klasöründe]] arar.

## Kod parçası ekleme

**Masaüstü** ![[lucide-monitor-check.svg#icon]] üzerinde CSS kod parçası eklemek için şu adımları izleyin:

1. **[[Ayarlar]]** ![[lucide-settings.svg#icon]] bölümünü açın.
2. **Görünüm → CSS kod parçaları** altında, **Kod parçaları klasörünü aç** ![[lucide-folder-open.svg#icon]] seçeneğini seçin.
3. Kod parçaları klasöründe, kod parçanızı içeren bir CSS dosyası oluşturun.
4. Obsidian'da, **Görünüm → CSS kod parçaları** altında, kod parçasını listede görmek için **Kod parçalarını tekrar yükle** ![[lucide-refresh-cw.svg#icon]] seçeneğini seçin.
5. Geçiş düğmesine tıklayarak kod parçasını etkinleştirin.

**Mobil/Tablet** ![[obsidian-icon-smartphone.svg#icon]] üzerinde CSS kod parçası eklemek için şu adımları izleyebilirsiniz:

1. Bir dosya yöneticisi açın ve kasanızı bulun. Kasanızın konumunu _Kasaları yönet…_ bölümünde kasanıza dokunup yola bakarak kontrol edebilirsiniz.
2. [[Yapılandırma klasörü|Yapılandırma klasörünü]] açın ve mevcut değilse `snippets` adında bir klasör oluşturun.
3. CSS kod parçanızı bu klasöre ekleyin.
4. Obsidian'ın **[[Ayarlar]]** ![[lucide-settings.svg#icon]] bölümünü açın.
5. Sol taraftan **Görünüm** seçeneğini seçin.
6. **CSS kod parçaları** bölümüne kaydırın.
7. Listeyi yenilemek için **Kod parçalarını tekrar yükle** ![[lucide-refresh-cw.svg#icon]] düğmesine dokunun.
8. Kod parçasını etkinleştirmek için geçiş düğmesine dokunun.

Alternatif olarak şunları yapabilirsiniz:
- Senkronizasyon hizmetinizle tüm değişiklikleri [[Notlarınızı cihazlar arasında senkronize edin|senkronize edebilirsiniz]].
- Obsidian içinden bir kod parçası oluşturmak için bir topluluk eklentisi kullanabilirsiniz.

Etkinleştirildiğinde, Obsidian CSS kod parçalarındaki değişiklikleri otomatik olarak algılar ve dosyayı kaydettiğinizde uygular.

> [!tip] Değişikliklerin etkili olması için Obsidian'ı yeniden başlatmanız gerekmez. Ancak, mevcut temadaki veya nottaki değişiklikleri görmek için [[Komut Paleti]] komutunu kullanarak Obsidian'ı kaydetmeden yeniden yüklemeniz gerekebilir.

## Obsidian için CSS yazma

Obsidian, CSS yazmayı daha kolay ve daha güçlü hale getiren çeşitli yöntemler sunar.

Obsidian'ın parçalarını kolayca değiştirmek için çok sayıda [CSS değişkeni](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) ve bir veya birden fazla notun görünümünü değiştirmek için yerleşik bir [[Özellikler#Özellik tipi|özellik tipi]] bulunur.

> [!example] Değişkenler
> Altı [[Temel biçimlendirme söz dizimi#Başlıklar|başlık seviyesinin]] renklerini gökkuşağına değiştirmek için aşağıdaki içerikle `headers.css` adında bir dosya oluşturun:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS sınıfları
> Bir veya daha fazla notun diğerlerinden farklı görünmesini sağlamak için önceden tanımlanmış bir [[Özellikler|özellik]] olan `cssclasses`'a özel bir CSS sınıfının (veya CSS sınıfları listesinin) adını atayın.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Özellikler**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> `cssclasses` özelliğinde `red-border` değerini içeren her notta görseller kırmızı kenarlıkla görüntülenir.

CSS dosyasının geçerli ve doğru biçimlendirilmiş olduğundan emin olmak için, [CSS Doğrulama Servisi](https://jigsaw.w3.org/css-validator/) gibi bir araçla doğrulamanızı öneririz; geçersiz CSS çalışmayacaktır.

## Daha fazlasını öğrenin

- CSS'e yeniyseniz, Mozilla'nın [CSS kullanarak HTML'yi stillemeyi öğrenin](https://developer.mozilla.org/en-US/docs/Learn/CSS) kaynağına göz atın.
- Obsidian'ı stilleme hakkında daha fazla bilgi için:
  - [Stilleme hakkında](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Tema oluşturma](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Publish teması oluşturma](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector iş akışı](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)

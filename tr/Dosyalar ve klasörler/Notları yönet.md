---
permalink: manage-notes
publish: true
mobile: false
description: null
---
Dosya ve klasörleri [[Kısayol tuşları]], [[Komut Paleti|komutlar]] veya [[Dosya Gezgini]] kullanarak çeşitli şekillerde yönetebilirsiniz.

## Yeni bir not oluşturma

Yeni bir dosya oluşturmak için:

1. `Ctrl+N` (veya macOS'ta `Cmd+N`) tuşlarına basın.
2. Notun adını girin ve ardından notu düzenlemeye başlamak için `Enter` tuşuna basın.

Ayrıca [[Dosya Gezgini#Yeni bir not oluşturma|Dosya Gezgini]] kullanarak veya [[Komut Paleti]]'nden **Yeni not oluştur** seçeneğini belirleyerek de notlar oluşturabilirsiniz.

> [!hint] Sistem karakter sınırlaması
> Obsidian, notu oluşturduğunuz işletim sisteminin dosya adı sınırlamalarına uyar. [[Notlarınızı cihazlar arasında senkronize edin|Notlarınızı cihazlar arasında senkronize etmeyi]] planlıyorsanız, dosya adlarınızın [diğer işletim sistemleri için güvenli](https://stackoverflow.com/q/1976007) olduğundan emin olun.
^blockquote-system-limitation

## Kasanızın dışındaki dosyaları açma

Masaüstünde, kasanızın dışındaki Markdown dosyalarını tek tek açıp düzenleyebilirsiniz. Dosyalar mevcut pencerenizde açılır ve orijinal konumlarında kalır.

> [!note] Obsidian 1.14 ve en son yükleyici gerektirir
> [obsidian.md/download](https://obsidian.md/download) adresinden Obsidian'ı indirip uygulamayı yeniden yükleyerek [[Obsidian'ı Güncelle#Yükleyici güncellemeleri|yükleyicinizi güncelleyin]].

Bir Markdown dosyasını açmak için:

1. [[Komut Paleti]]'ni açın.
2. **Kasa dışından dosya aç...** seçeneğini belirleyin.
3. Bilgisayarınızda bir Markdown dosyası seçin.

Ayrıca işletim sisteminizin **Birlikte aç** menüsünü kullanarak **Obsidian**'ı seçebilirsiniz. Markdown dosyalarını varsayılan olarak Obsidian'da açmak için, `.md` dosyaları için varsayılan uygulama olarak ayarlayın.

Görsel gömmeleri ve diğer yerel dosyalara bağlantılar, Markdown dosyasının klasörüne göre çözümlenir. Başlıklar arasında gezinmek için [[Anahat|Anahat]] ve bağlantılı dosyalara göz atmak için [[Giden bağlantılar|Giden bağlantılar]] kullanın.

### Quick Look ile dosyaları önizleme

macOS'ta, Finder'da bir Markdown dosyası seçin ve **Quick Look** ile önizlemek için `Boşluk` tuşuna basın. Quick Look önizlemeleri, Obsidian kapalıyken bile çalışır.

## Bir notu yeniden adlandırma

Etkin bir notu yeniden adlandırmak için:

1. Düzenleyicinin üst kısmındaki notun adını seçin (veya `F2` tuşuna basın).
2. Yeni adı girin ve ardından `Enter` tuşuna basın.

Bir dosyayı yeniden adlandırdığınızda, Obsidian o dosyaya yönelik tüm bağlantıları otomatik olarak günceller.

[[Dosya Gezgini#Bir dosya veya klasörü yeniden adlandırma|Dosya Gezgini]] kullanarak bir notu veya klasörü açmadan da yeniden adlandırabilirsiniz.

## Bir notu silme

Bir notu silmek için, etkin bir notun sağ üst köşesindeki **Daha fazla seçenek → Dosyayı sil** seçeneğini belirleyin.

Veya [[Komut Paleti]]'nden **Dosyayı sil** seçeneğini belirleyin.

Ayrıca [[Dosya Gezgini#Bir dosya veya klasörü silme|Dosya Gezgini]] kullanarak da bir notu veya klasörü silebilirsiniz.

> [!note] Sildiğim dosyalara ne olur?
> Silinen dosyalara ne olacağını değiştirmek için **[[Ayarlar]] → Dosyalar ve Bağlantılar** altındaki aşağıdaki seçeneklerden birini belirleyin:
>
> - **Sistem Çöp Kutusu**: Varsayılan olarak, silinen dosyalar işletim sisteminizin sistem çöp kutusuna gönderilir. Bir dosyayı geri yüklemek için tercih ettiğiniz dosya yöneticisini kullanın.
> - **Obsidian Çöp Kutusu**: Silinen dosyaları kasanızdaki bir `.trash` klasörüne gönderebilirsiniz.
> - **Kalıcı olarak sil**: Dosyalar, geri yükleme imkânı olmadan hemen silinir.

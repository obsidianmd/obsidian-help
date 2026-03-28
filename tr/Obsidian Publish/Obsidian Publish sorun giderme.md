---
permalink: publish/troubleshoot
publish: true
mobile: true
description: 'Bu sayfa, Obsidian Publish kullanırken karşılaşabileceğiniz bazı yaygın sorunları detaylandırmaktadır.'
---
Bu sayfa, [[Obsidian Publish'e giriş|Obsidian Publish]] ile karşılaşabileceğiniz yaygın sorunları ve bunların nasıl çözüleceğini listeler.

Öncelikle [[Medya dosyaları]] ve [[Publish sınırlamaları|Publish sınırlamaları]] sayfalarını incelediğinizden emin olun.

## Genel

### Notları yayınlama

**Bir notu yayınlamaya çalışırken hash hatası alıyorum.**

Dosyanın değiştirilme zamanını güncelleme sırasında düzenleyen bir [[Topluluk Eklentileri|topluluk eklentisi]] mi kullanıyorsunuz? Eğer öyleyse, bu eklenti Publish ile çakışıyor olabilir. Sorunu çözmek için lütfen eklenti geliştiricisine bir hata raporu gönderin.

**Tuhaf bir ağ hatası alıyorum ve çok büyük bir Publish sitem var.**

Muhtemelen veritabanınızı incelememiz gerekiyor. Yardım için lütfen [[Yardım ve destek#Obsidian desteğiyle iletişime geçin|Obsidian desteğiyle iletişime geçin]].

## CSS ve temalar

**[[Yapılandırma klasörü|Yapılandırma klasörüm]]deki CSS, Publish'te çalışmıyor. Neden?**

Publish, yapılandırma klasöründen okuma yapmaz. Bunun yerine, yayınlama kasanızın en üst düzey dizininde bir `publish.css` dosyası oluşturmanız gerekir. Bu konuda daha fazla bilgiyi [[Sitenizi özelleştirin]] sayfasında bulabilirsiniz.

**CSS'im Publish'te uygulamadaki gibi görünmüyor. Neden?**

Obsidian Publish'in CSS'i, uygulamadakiyle tam olarak aynı değildir. Publish için [herhangi bir CSS ve temayı](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) sıfırdan özel olarak geliştirmenizi öneririz.

_Genel_ olarak, [[Görünümler ve düzenleme modu#Okuma görünümü|okuma görünümü]] için çalışan şeylerin Publish'te de çalışma olasılığı yüksektir.

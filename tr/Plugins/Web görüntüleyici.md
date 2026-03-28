---
permalink: plugins/web-viewer
---
Web görüntüleyici, Obsidian masaüstünde harici bağlantıları Obsidian içinde açmanızı sağlayan bir [[Yerleşik Eklentiler|çekirdek eklenti]]dir. Bu sayede uygulamadan ayrılmadan bağlantı içeriğini okuyabilir ve web araştırma projelerinde çoklu görev yapmanızı kolaylaştırır.

Harici bağlantılar bir [[Sekmeler|sekme]] olarak açılır ve bunları yeniden düzenleyebilir, bölebilir ve [[Açılır pencereler|açılır pencere]] olarak açabilirsiniz. [[Tuval]] dosyalarına gömülü tüm web sayfası kartları, web görüntüleyici sekmeleri olarak açılabilir.

Web görüntüleyici, birincil tarayıcınızın yerini almak için tasarlanmamıştır. Web görüntüleyici, Obsidian içinde araştırma amacıyla web sayfalarına hızlı erişim sağlar. Ancak, özel bir tarayıcının tam işlevselliğini, güvenlik kontrollerini veya genişletilebilirliğini sunmaz.

## Okuyucu görünümü

Web sayfasının düz metin sürümünü görüntülemek için gözlük simgesine tıklayın. Bu özellik, Mozilla'nın Firefox için geliştirdiği Readability kütüphanesi kullanılarak içeriği temizleyerek çalışır.

## Kasaya kaydet

Bir web sayfasını kasanıza kaydetmek için daha fazla eylemler simgesine tıklayın. **[[Ayarlar]]** → **Web görüntüleyici** bölümüne giderek kaydetme konumunu özelleştirebilirsiniz.

## Reklam engelleme

Web görüntüleyici varsayılan olarak reklamları engeller. [Easylist](https://easylist.to/) gibi listeler ekleyerek reklam engelleme kurallarını özelleştirebilirsiniz.

## Güvenlik

Üçüncü taraf Obsidian eklentileri kullanıyorsanız, hassas görevler ve parola korumalı web siteleri için Web görüntüleyici yerine birincil tarayıcınızı kullanmanızı öneririz.

Web görüntüleyici, [[Tuval]]'de web sayfalarını gömmenizi sağlayan aynı [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) özelliğine dayanmaktadır. Web görüntüleyicinin güvenli bir şekilde uygulandığını doğrulamak için [bağımsız denetimden](https://obsidian.md/blog/cure53-second-client-audit/) geçirilmiştir.

Obsidian eklentileri [[Eklenti güvenliği#Eklenti yetenekleri|korumalı alanda çalışmaz]] ve uygulama üzerinde derin kontrole sahiptir. Bu tasarım güçlü işlevsellik sağlar ancak güvenlik açısından ödünler de beraberinde getirir. Obsidian çalışırken, üçüncü taraf eklentilerin Web görüntüleyicideki çerezlere tam erişimi vardır.

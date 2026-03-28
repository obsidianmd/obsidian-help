---
permalink: install
---
Obsidian tüm büyük masaüstü ve mobil platformlarda kullanılabilir. Obsidian'ı indirip kurmanın desteklenen tüm yolları aşağıda listelenmiştir.

## Obsidian'ı Windows'a kurma

1. Tarayıcınızı açın ve [Obsidian'ı İndir](https://obsidian.md/download) sayfasına gidin.
2. **Windows** altında, kurulum dosyasını indirmek için **Universal**'a tıklayın.
3. Kurulum dosyasını açın ve talimatları izleyin.
4. Obsidian'ı diğer uygulamaları açtığınız gibi açın.

## Obsidian'ı macOS'a kurma

1. Tarayıcınızı açın ve [Obsidian'ı İndir](https://obsidian.md/download) sayfasına gidin.
2. **macOS** altında, kurulum dosyasını indirmek için **Universal**'a tıklayın.
3. Kurulum dosyasını açın.
4. Açılan pencerede Obsidian'ı Uygulamalar klasörüne sürükleyin.
5. Obsidian'ı diğer uygulamaları açtığınız gibi açın.

## Obsidian'ı Linux'a kurma

Linux kullanıyorsanız Obsidian'ı birkaç farklı yolla kurabilirsiniz. Kullandığınız paketleme sistemi için talimatları izleyin.

### Obsidian'ı Snap ile kurma

1. Tarayıcınızı açın ve [Obsidian'ı İndir](https://obsidian.md/download) sayfasına gidin.
2. **Linux** altında, kurulum dosyasını indirmek için **Snap**'e tıklayın.
3. Bir terminal açın ve kurulum dosyasını indirdiğiniz klasöre gidin.
4. Terminalde Snap paketini kurmak için aşağıdaki komutu çalıştırın: (`--dangerous` bayrağı, Snap'i oluşturan şirket olan Canonical paketimizi incelemediği için gereklidir, `--classic` bayrağı ise Obsidian'ın notlarınızın depolandığı sandbox dışına erişmesine izin verir)

   ```bash
   snap install obsidian_<version>_<arch>.snap --dangerous --classic
   ```

5. Obsidian'ı diğer uygulamaları açtığınız gibi açın.

### Obsidian'ı AppImage ile kurma

1. Tarayıcınızı açın ve [Obsidian'ı İndir](https://obsidian.md/download) sayfasına gidin.
2. **Linux** altında, kurulum dosyasını indirmek için **AppImage**'e tıklayın.
3. Bir terminal açın ve kurulum dosyasını indirdiğiniz klasöre gidin.
4. Terminalde Obsidian'ı açmak için aşağıdaki komutu çalıştırın:

   ```bash
   chmod u+x Obsidian-<version>.AppImage
   ./Obsidian-<version>.AppImage --no-sandbox
   ```
Not: Chromebook'larda `libnss3-dev` paketi kurulu olmalıdır, aksi takdirde `error while loading shared libraries: libnss3.so: cannot open shared object file: No such file or directory` hatası alabilirsiniz.

### Obsidian'ı Flatpak ile kurma

1. Terminalinizde Obsidian'ı kurmak için aşağıdaki komutu çalıştırın:

   ```bash
   flatpak install flathub md.obsidian.Obsidian
   ```

2. Aşağıdaki komutu çalıştırarak Obsidian'ı açın:

   ```bash
   flatpak run md.obsidian.Obsidian
   ```

## Obsidian'ı Android'e kurma

1. Obsidian'ı [Play Store](https://play.google.com/store/apps/details?id=md.obsidian)'da bulun.
2. Uygulamayı indirmek için **Yükle**'ye dokunun.
3. Obsidian'ı diğer uygulamaları açtığınız gibi açın.

İsteğe bağlı olarak Android için APK dosyasını [Obsidian'ı İndir](https://obsidian.md/download) sayfasından indirebilirsiniz.

## Obsidian'ı iPhone ve iPad'e kurma

1. Obsidian'ı [App Store](https://apps.apple.com/us/app/obsidian-connected-notes/id1557175442)'da bulun.
2. Uygulamayı indirmek için **Al**'a dokunun.
3. Obsidian'ı diğer uygulamaları açtığınız gibi açın.

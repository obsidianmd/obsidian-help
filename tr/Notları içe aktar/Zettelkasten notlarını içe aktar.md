---
permalink: import/zettelkasten
---
Notlarınızı adlandırmak ve bağlamak için Zettelkasten yöntemini kullandıysanız, bağlantıları `[[UID]]` biçiminden `[[UID Not başlığım]]` biçimine dönüştürmeniz gerekebilir.

Örneğin, `202301011230 Not başlığım` adında bir notunuz varsa ve başka bir nottan yalnızca UID kullanarak `[[202301011230]]` şeklinde bağlantı verdiyseniz, Obsidian dahili bağlantıları çözmek için notun tam adını kullandığından bu tür bağlantılar çalışmayacaktır.

Kasanızdaki tüm `[[UID]]` bağlantılarını notun tam adını kullanacak şekilde güncellemek için [[Markdown formatı içe aktarıcı]] eklentisini kullanın.

1. **[[Ayarlar]]**'ı açın.
2. **Yerleşik Eklentiler** altında **Markdown formatı içe aktarıcı**'yı etkinleştirin ve Ayarlar penceresini kapatın.
3. Araç çubuğunda, uygulama penceresinin sol tarafında **Biçimlendirme dönüştürücüyü aç** ![[lucide-binary.svg#icon]] seçeneğini tıklayın.
4. **Zettelkasten bağlantı düzeltici**'yi etkinleştirin.
5. **Dönüştürmeyi Başlat** seçeneğini tıklayın. Bu işlem kasanızdaki tüm notları dönüştürecektir.

> [!tip] Zettelkasten bağlantı güzelleştirici
> [[Markdown formatı içe aktarıcı]], görünen addan UID'yi kaldırarak bağlantılarınızı güzelleştirebilir. Örneğin, `[[UID]]` ifadesi `[[UID Not başlığım|Not başlığım]]` biçimine dönüştürülür.
>
> Zettelkasten bağlantılarınızı güzelleştirmek için biçimlendirme dönüştürücü penceresinde **Zettelkasten bağlantı güzelleştirici**'yi etkinleştirin.

Obsidian'da Zettelkasten notları oluşturmak için [[Benzersiz not oluşturucu]] eklentisini de kullanabilirsiniz.

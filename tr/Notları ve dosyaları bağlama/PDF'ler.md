---
permalink: pdf
publish: true
mobile: true
description: 'Obsidian''da PDF''leri görüntülemeyi, aramayı ve bağlantı oluşturmayı ve bir notu PDF olarak dışa aktarmayı öğrenin.'
---
Obsidian, PDF dosyalarını yerleşik bir görüntüleyicide açar. Ayrıca bir PDF'yi bir nota gömebilir, içindeki bir bölüme bağlantı verebilir ve herhangi bir notu PDF olarak dışa aktarabilirsiniz. Obsidian'ın desteklediği dosya türleri için [[Kabul edilen dosya biçimleri]] sayfasına bakın.

> [!info]+ Bazı özellikler yalnızca masaüstünde kullanılabilir
> Mobil Obsidian uygulaması bir PDF içinde arama yapamaz, alıntı veya seçime bağlantı kopyalayamaz ya da notu PDF'ye dışa aktaramaz.

## PDF açma

[[Dosya Gezgini|Dosya gezgininde]] bir PDF seçerek onu bir sekmede açın.

> [!info]+ Ek açıklamalar desteklenmez
> Obsidian, bir PDF'ye ek açıklama veya vurgulama eklemeyi desteklemez. Bir PDF'yi işaretlemek için başka bir uygulama kullanın ve ardından güncellenen dosyayı kasanızda açın.

Görüntüleyicide şu kontrollere sahip bir araç çubuğu bulunur. Mobil Obsidian uygulaması da aynı araç çubuğuna sahiptir.

- **Kenar çubuğunu aç/kapat**, kenar çubuğunu gösterir veya gizler; **Kenar çubuğu seçenekleri** ise kenar çubuğunun neyi gösterdiğini değiştirir.
- **Uzaklaştır** ve **Yakınlaştır**, sayfanın boyutunu değiştirir.
- **Görüntü seçenekleri**, sayfaların nasıl düzenlendiğini değiştirir.
- Sayfa kutusu geçerli sayfayı gösterir. O sayfaya gitmek için bir sayfa numarası girin.

PDF dosyasıyla ilgili yeniden adlandırma veya taşıma gibi işlemler yapmak için **Daha fazla seçenek** ![[lucide-more-horizontal.svg#icon]] öğesini seçin. Bir PDF'nin bu menüsünde bir nota göre daha az öğe bulunur. Bkz. [[Daha fazla seçenek menüsü]].

## PDF'de gezinme

**Kenar çubuğu seçenekleri**'ni seçin, ardından neyin gösterileceğini belirleyin.

- **Küçük resimler**, her sayfanın küçük bir önizlemesini gösterir.
- **İçerik tablosu**, varsa PDF'nin ana hatlarını gösterir.
- **Sayfayı içerik tablosunda göster**, içerik tablosunda geçerli sayfayı vurgular.

Bir sayfaya bağlantı vermek için küçük resmine sağ tıklayın ve **N. sayfanın bağlantısını kopyala**'yı seçin; burada N sayfa numarasıdır. Bağlantıyı bir nota yapıştırın.

Bir bölüme bağlantı vermek için içerik tablosundaki bir girişe sağ tıklayın ve **"Başlık" bağlantısını kopyala**'yı seçin; burada Başlık, girişin adıdır. Mobilde girişe basılı tutun.

## PDF'nin görünümünü değiştirme

Düzeni değiştirmek için **Görüntü seçenekleri**'ni seçin.

- **Genişiği sığdır** ve **Yüksekliği sığdır**, sayfayı görüntüleyiciye sığdırır.
- **Tek sayfa**, aynı anda bir sayfa gösterir.
- **İki sayfa (tek sayıda)**, solda tek sayfalı bir sayfa ile sayfaları yan yana gösterir. Örneğin, 1. ve 2. sayfalar birlikte, ardından 3. ve 4. sayfalar birlikte gösterilir.
- **İki sayfa (çift sayıda)**, solda çift sayfalı bir sayfa ile sayfaları yan yana gösterir. Örneğin, 1. sayfa tek başına gösterilir, ardından 2. ve 3. sayfalar birlikte gösterilir.
- **Tema uyumlu hale getir**, Obsidian temanız koyu olduğunda PDF'nin renklerini koyulaştırır.

## PDF'de arama

PDF içinde arama yalnızca masaüstünde kullanılabilir. Mobil Obsidian uygulamasının PDF görüntüleyicisinde arama bulunmaz.

1. `Ctrl+F` (Windows ve Linux) veya `Command+F` (macOS) tuşlarına basın.
2. **Aramak için yazın...** alanına bulmak istediğiniz metni girin.
3. Eşleşmeler arasında geçiş yapmak için yukarı veya aşağı oku seçin.

Aramanın nasıl çalıştığını değiştirmek için şu seçenekleri kullanın.

- **Büyük/küçük harfe duyarlı eşleşme**, büyük ve küçük harfleri tam olarak eşleştirir. Arama alanındaki **Aa** düğmesidir.
- **Hepsini vurgula**, her eşleşmeyi vurgular. Bu seçeneği bulmak için okların yanındaki ayarlar düğmesini seçin.
- **Diyakritik işaretleri eşleştir**, aksanlı harfleri farklı harfler olarak değerlendirir. Aynı ayarlar menüsündedir.
- **Kelimenin tamamı**, yalnızca tam kelimeleri bulur. Aynı ayarlar menüsündedir.

Aramadan çıkmak için kapat düğmesini seçin.

## PDF'den metin kopyalama

Masaüstünde, PDF'deki metni seçin ve ardından sağ tıklayın.

- **Kopyala**, metni kopyalar.
- **Alıntı olarak kopyala**, metni bir alıntı olarak kopyalar ve ardından ilgili bölüme bir bağlantı ekler.
- **Seçimin linkini kopyala**, o bölüme bir bağlantı kopyalar, böylece bir nota yapıştırabilirsiniz.

Bir alıntı, nota yapıştırdığınızda şu şekilde görünür.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Bir seçime bağlantı ise aynı bağlantıyı tek başına içerir.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

Mobilde, bir PDF'deki metni seçmek cihazınızın standart metin menüsünü gösterir. **Alıntı olarak kopyala** ve **Seçimin linkini kopyala** seçenekleri kullanılamaz.

## PDF gömme

Bir PDF'yi bir notun içinde göstermek için [[Dosya gömme#Bir nota PDF gömme|bir nota PDF gömme]] bölümüne bakın. Gömülü bir PDF, görüntüleyiciyle aynı araç çubuğuna sahiptir. Gömme bağlantısını değiştirmek için **Bu bloğu düzenle**'yi seçin.

## Bir notu PDF olarak dışa aktarma

Herhangi bir notu masaüstünde PDF olarak dışa aktarabilirsiniz. PDF'ye dışa aktarma, mobil Obsidian uygulamasında kullanılamaz.

1. Dışa aktarmak istediğiniz notu açın.
2. [[Komut Paleti|Komut paletini]] açın ve **PDF Olarak Dışa Aktar** seçeneğini belirleyin. Ayrıca nottaki **Daha fazla seçenek** ![[lucide-more-horizontal.svg#icon]] öğesini ve ardından **PDF'yi dışa Aktar** seçeneğini de belirleyebilirsiniz.
3. Ayarlarınızı seçin.
    - **Dosya adını başlık olarak ekleyin**, PDF'nin üst kısmına dosya adını ekler.
    - **Sayfa boyutu**, kağıt boyutunu ayarlar. A3, A4, A5, Legal, Letter veya Tabloid seçebilirsiniz.
    - **Yatay görünüm**, sayfaları yatay çevirir.
    - **Sayfa Sınırı**, sayfa kenar boşluğunu **Varsayılan**, **Minimum** veya **Yok** olarak ayarlar.
    - **Küçültme oranı**, her sayfadaki içeriği ölçeklendirir. 100'de içerik tam boyutta kalır. Daha düşük değerler metin ve görselleri küçülterek her sayfaya daha fazla içerik sığdırır.
4. **PDF Olarak Dışa Aktar**'ı seçin.
5. Dosyayı nereye kaydedeceğinizi seçin.

> [!tip]- Koyu tema ile not dışa aktarma
> Dışa aktarmalar, temanız koyu olsa bile her zaman açık stil kullanır. Dışa aktarmanın görünümünü değiştirmek için bir [[CSS kod parçaları|CSS kod parçacığı]] kullanabilirsiniz. Obsidian forumunda yazdırma ve dışa aktarma için kod parçacığı örnekleri bulunmaktadır.[^1]

[^1]: Bkz. [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) ve [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).

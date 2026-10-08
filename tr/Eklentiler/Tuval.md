---
permalink: plugins/canvas
mobile: true
---
Tuval, görsel not alma için bir [[Yerleşik Eklentiler|yerleşik eklentidir]]. Notları düzenlemek ve diğer notlara, eklere ve web sayfalarına bağlamak için size sonsuz alan sunar.

Notlarınızı 2D bir alanda düzenlemek, aralarındaki bağlantıları görmenize ve anlamanıza yardımcı olur. Notları çizgilerle bağlayın ve ilgili olanları bir arada gruplayın.

Obsidian, tuvalleri açık [JSON Canvas](https://jsoncanvas.org/) formatını kullanarak `.canvas` dosyaları olarak kaydeder.

## Yeni bir tuval oluşturma

Canvas kullanmaya başlamak için önce tuvalinizi tutacak bir dosya oluşturmanız gerekir. Aşağıdaki yöntemlerle yeni bir tuval oluşturabilirsiniz.

**Komut paleti:**

1. [[Komut Paleti]]'ni açın.
2. Etkin dosyayla aynı klasörde bir tuval oluşturmak için **Canvas: Yeni tuval oluşturun** seçeneğini seçin.

**Dosya gezgini:**

- [[Dosya Gezgini]]'nde, tuvali oluşturmak istediğiniz klasöre sağ tıklayın.
- **Yeni tuval** seçeneğini seçin.

**Araç çubuğu:**

- Dikey araç çubuğu menüsünde, etkin dosyayla aynı klasörde bir tuval oluşturmak için **Yeni tuval oluşturun** ![[lucide-layout-dashboard.svg#icon]] seçeneğini seçin.

> [!note] .canvas dosya uzantısı
> Obsidian, tuval verilerinizi [JSON Canvas](https://jsoncanvas.org/) adlı açık bir dosya formatı kullanarak `.canvas` dosyaları olarak saklar.

## Kart ekleme

Obsidian'dan veya diğer uygulamalardan dosyaları tuvalinize sürükleyebilirsiniz. Örneğin, Markdown dosyaları, görseller, ses dosyaları, PDF'ler ve hatta tanınmayan dosya türleri.

### Metin kartları ekleme

Bir dosyaya referans vermeyen, yalnızca metin içeren kartlar ekleyebilirsiniz. Bir notta olduğu gibi Markdown, bağlantılar ve kod blokları kullanabilirsiniz.

Tuvalinize yeni bir metin kartı eklemek için:

- Tuvalin alt kısmındaki boş dosya simgesini seçin veya sürükleyin.

Ayrıca tuvale çift tıklayarak da metin kartları ekleyebilirsiniz.

Bir metin kartını dosyaya dönüştürmek için:

1. Metin kartına sağ tıklayın ve ardından **Dosyaya dönüştür...** seçeneğini seçin.
2. Not adını girin ve ardından **Kaydet** seçeneğini seçin.

> [!note] Yalnızca metin kartları ve geri bağlantılar
> Yalnızca metin içeren kartlar [[Geri Bağlantılar]]'da görünmez. Görünmelerini sağlamak için bunları bir dosyaya dönüştürmeniz gerekir.

### Notlardan kart ekleme

Kasanızdaki bir notu tuvalinize eklemek için:

1. Tuvalin alt kısmındaki belge simgesini seçin veya sürükleyin.
2. Eklemek istediğiniz notu seçin.

Ayrıca tuval bağlam menüsünden de notlar ekleyebilirsiniz:

1. Tuvale sağ tıklayın ve ardından **Kasadan not ekleyin** seçeneğini seçin.
2. Eklemek istediğiniz notu seçin.

Ayrıca notları [[Dosya Gezgini]]'nden tuvale sürükleyebilirsiniz.

Bir kartta notun yalnızca bir bölümünü göstermek için karta sağ tıklayın ve **Başlığa daralt...** veya **Bloğa daralt...** seçeneğini seçin. Ardından başlığı veya bloğu seçin.

### Medyadan kart ekleme

Kasanızdaki medyayı tuvalinize eklemek için:

1. Tuvalin alt kısmındaki görsel dosya simgesini seçin veya sürükleyin.
2. Eklemek istediğiniz medya dosyasını seçin.

Ayrıca tuval bağlam menüsünden de medya ekleyebilirsiniz:

1. Tuvale sağ tıklayın ve ardından **Kasadan medya ekleme** seçeneğini seçin.
2. Eklemek istediğiniz medya dosyasını seçin.

Ayrıca medya dosyalarını [[Dosya Gezgini]]'nden tuvale sürükleyebilirsiniz.

### Web sayfalarından kart ekleme

Tuvalinize bir web sayfası gömmek için:

1. Tuvale sağ tıklayın ve ardından **Web sayfası ekle** seçeneğini seçin.
2. Web sayfasının URL'sini girin ve ardından **Kaydet** seçeneğini seçin.

Ayrıca tarayıcınızda bir URL seçip tuvale sürükleyerek bir karta gömebilirsiniz.

Web sayfasını tarayıcınızda açmak için `Ctrl` (veya macOS'ta `Cmd`) tuşuna basın ve kart etiketini seçin. Veya karta sağ tıklayın ve **Tarayıcıda aç** seçeneğini seçin.

Daha fazla seçenek için bir web sayfası kartına sağ tıklayın.

- **Linki kopyala** web sayfasının adresini kopyalar.
- **URL'yi değiştir...** kartın gösterdiği adresi değiştirir.
- **Sayfayı yeniden yükle** web sayfasını tekrar yükler.

### Tabanlardan kart ekleme

Tuvalinizde bir [[Tabanlara giriş|taban]] göstermek için taban dosyasını Dosya gezgininden tuvale sürükleyin. Kart tabanı gösterir.

Bir taban kartı, tabanın varsayılan görünümünü gösterir. Farklı bir görünüm göstermek için:

1. Karta sağ tıklayın ve ardından **Görünümü sabitle...** seçeneğini seçin.
2. İstediğiniz görünümü seçin.

Varsayılan görünüme geri dönmek için tekrar **Görünümü sabitle...** seçeneğini seçin ve ardından **Varsayılan görünümü göster** seçeneğini seçin.

### Klasörlerden kart ekleme

[[Dosya Gezgini]]'nden bir klasörü sürükleyerek o klasördeki tüm dosyaları tuvale ekleyin.

### Bir kartı düzenleme

Düzenlemeye başlamak için bir metin veya not kartına çift tıklayın. Düzenlemeyi durdurmak için kartın dışında herhangi bir yere tıklayın. Ayrıca düzenlemeyi durdurmak için `Escape` tuşuna basabilirsiniz.

Bir kartı sağ tıklayıp **Düzenle** seçeneğini seçerek de düzenleyebilirsiniz. Veya kartı seçin ve ardından seçim kontrollerinde **Düzenle** ![[lucide-square-pen.svg#icon]] seçeneğini seçin.

### Bir kartı silme

Seçili kartları, herhangi birine sağ tıklayıp **Kaldır** seçeneğini seçerek kaldırın. Veya `Backspace` (veya macOS'ta `Delete`) tuşuna basın.

Ayrıca seçiminizin üzerindeki seçim kontrollerinde **Kaldır** ![[lucide-trash-2.svg#icon]] seçeneğini de seçebilirsiniz.

### Kartları değiştirme

Bir not veya medya kartını aynı türden başka bir kartla değiştirebilirsiniz.

Bir not kartını değiştirmek için:

1. Değiştirmek istediğiniz karta sağ tıklayın.
2. **Dosya değiştir** seçeneğini seçin.
3. Yerine koymak istediğiniz notu seçin.

## Kart seçme

Tek tek kartları seçin veya birden fazla kartın etrafına bir seçim sürükleyin.

Ayrıca `Shift` tuşuna basıp seçerek mevcut bir seçime kart ekleyebilir veya çıkarabilirsiniz.

Tuvaldeki tüm kartları seçmek için `Ctrl+a` (veya macOS'ta `Cmd+a`) tuşlarına basın.

Bir kartın içeriğini kaydırmak için önce onu seçmeniz gerekir.

### Kartları düzenleme

Seçili bir kartı taşımak için sürükleyin.

Seçimi çoğaltmak için `Alt` (veya macOS'ta `Option`) tuşuna basın ve sürükleyin.

Yalnızca bir yönde hareket etmek için sürüklerken `Shift` tuşuna basabilirsiniz.

Yakalamayı devre dışı bırakmak için bir seçimi taşırken `Space` tuşuna basın.

Bir kartı seçmek onu öne taşır.

### Bir kartı yeniden boyutlandırma

Yeniden boyutlandırmak için bir kartın kenarlarından herhangi birini sürükleyin.

Yakalamayı devre dışı bırakmak için yeniden boyutlandırırken `Space` tuşuna basabilirsiniz.

Yeniden boyutlandırırken en boy oranını korumak için `Shift` tuşuna basın.

### Kartları hizalama ve düzenleme

Birkaç kartı hizalamak için iki veya daha fazla kart seçin. Seçim kontrollerinde **Hizala** seçeneğini seçin ve ardından bir seçenek belirleyin.

- **Sola hizala**, **Merkezi hizala** ve **Sağa hizala** kartları dikey bir çizgi üzerinde hizalar.
- **Üst kısmı hizala**, **Ortayı hizala** ve **Alt kısmı hizala** kartları yatay bir çizgi üzerinde hizalar.
- **Bir satır halinde düzenle**, **Bir sütun halinde düzenle** ve **Bir ızgara şeklinde düzenle** kartları o düzene taşır.
- **Yatayda boşlukları dağıtın** ve **Dikeyde aralıkları dağıtın** kartları eşit aralıklarla yerleştirir.
- **Yatayda eşit yasla** ve **Dikeyde eşit yasla** her kartı seçimin tam genişliğine veya yüksekliğine uyacak şekilde yeniden boyutlandırır.

## Kartları bağlama

İlişkileri göstermek için kartlar arasında çizgiler çizin. Nasıl ilişkili olduklarını tanımlamak için renkler ve etiketler ekleyin.

### İki kartı bağlama

İki kartı yönlü bir çizgiyle bağlamak için:

1. Dolu bir daire görünene kadar imleci bir kartın kenarlarından birinin üzerine getirin.
2. Daireyi farklı bir kartın kenarına sürükleyerek bağlayın.

> [!tip]- Yeni bir bağlantıdan kart oluşturma
> Çizgiyi başka bir karta bağlamadan sürüklerseniz, diğer ucunda yeni bir kart oluşturabilirsiniz.

### İki kartın bağlantısını kesme

İki kart arasındaki bağlantıyı kaldırmak için:

1. Çizgi üzerinde iki küçük daire görünene kadar imleci bir bağlantı çizgisinin üzerine getirin.
2. Dairelerden birini, başka bir karta bağlamadan karttan uzağa sürükleyin.

Ayrıca aralarındaki çizgiye sağ tıklayıp **Kaldır** seçeneğini seçerek de iki kartın bağlantısını kesebilirsiniz. Veya çizgiyi seçip `Backspace` (veya macOS'ta `Delete`) tuşuna basarak.

### Bir kartı farklı bir karta bağlama

Bir bağlantı çizgisinin uçlarından birini taşımak için:

1. Çizgi üzerinde iki küçük daire görünene kadar imleci bir bağlantı çizgisinin üzerine getirin.
2. Daireyi yeniden bağlamak için başka bir karta sürükleyin.

### Bir bağlantıda gezinme

Bağlı iki kart birbirinden uzaktaysa, bağlantının diğer ucundaki karta atlayabilirsiniz. Çizginin bir ucuna yakın bir yere sağ tıklayın ve ardından **Bağlantıyı takip et** seçeneğini seçin. Tuval, karşı uçtaki karta taşınır.

### Bir bağlantıya etiket ekleme

İki kart arasındaki ilişkiyi tanımlamak için bir çizgiye etiket ekleyebilirsiniz.

Bir bağlantıyı etiketlemek için:

1. Çizgiye çift tıklayın.
2. Etiketi girin ve ardından `Escape` tuşuna basın veya tuvalin herhangi bir yerine tıklayın.

Ayrıca seçim kontrollerinden **Etiketi düzenle** seçeneğini seçerek de bir bağlantıyı etiketleyebilirsiniz.

Bir bağlantı etiketini düzenlemek için çizgiye çift tıklayın veya çizgiye sağ tıklayıp **Etiketi düzenle** seçeneğini seçin.

Bir etiketi kaldırmak için bağlantıyı seçin ve ardından seçim kontrollerinde **Etiketi çıkarın** seçeneğini seçin.

### Bir bağlantının yönünü değiştirme

Varsayılan olarak, bir bağlantının ikinci karta işaret eden bir oku vardır. Bunu değiştirmek için:

1. Bağlantıyı seçin.
2. Seçim kontrollerinde **Satır yönü** seçeneğini seçin.
3. **Yönsüz**, **Tek yönlü** veya **Çift yönlü** seçeneklerinden birini seçin.

### Bir kartın veya bağlantının rengini değiştirme

1. Renklendirmek istediğiniz kartları veya bağlantıları seçin.
2. Seçim kontrollerinde **Renk ayarla** ![[lucide-palette.svg#icon]] seçeneğini seçin.
3. Bir renk seçin.

## Kartları gruplama

### Seçili kartları gruplama

Boş bir grup oluşturmak için:

- Tuvale sağ tıklayın ve ardından **Grup oluştur** seçeneğini seçin.

İlgili kartları gruplamak için:

1. Kartları seçin.
2. Seçili kartlardan herhangi birine sağ tıklayın ve ardından **Grup oluştur** seçeneğini seçin.

**Grubu yeniden adlandırma:** Düzenlemek için grubun adına çift tıklayın, ardından kaydetmek için `Enter` tuşuna basın.

### Bir gruba arka plan ekleme

Bir gruptaki kartların arkasında bir görsel gösterebilirsiniz.

1. Grubu seçin.
2. Seçim kontrollerinde **Arka planı ayarla** seçeneğini seçin.
3. Kasanızdan bir görsel seçin.

Arka planı değiştirmek için grubu seçin ve ardından **Arka planı düzenle** seçeneğini seçin.

- **Arka planı değiştir** farklı bir görsel seçer.
- **Arka planı kaldır** görseli kaldırır.
- **Kapak** görselin grubu doldurmasını sağlar.
- **En-boy oranını koru** görselin oranlarını korur.
- **Tekrar** görseli grubun genelinde döşer.

## Tuvalde gezinme

Tuval üzerinde hareket etmek için kaydırma ve yakınlaştırmayı kullanın.

### Tuvali kaydırma

Tuvali dikey ve yatay olarak hareket ettirmek (_kaydırma_ olarak da bilinir) için aşağıdaki yaklaşımlardan herhangi birini kullanabilirsiniz:

- `Space` tuşuna basın ve tuvali sürükleyin.
- Orta fare düğmesini kullanarak tuvali sürükleyin.
- Dikey kaydırmak için fareyi kaydırın ve yatay kaydırmak için kaydırırken `Shift` tuşuna basın.

### Tuvali yakınlaştırma

Tuvali yakınlaştırmak için `Space` veya `Ctrl` (veya macOS'ta `Cmd`) tuşuna basın ve fare tekerleğini kullanarak kaydırın. Veya sağ üst köşedeki yakınlaştırma kontrollerinden **Yakınlaştır** ![[lucide-plus.svg#icon]] ve **Uzaklaştır** ![[lucide-minus.svg#icon]] seçeneklerini seçin.

#### Sığdırmak için yakınlaştır

Tuvali her öğenin görünür olacağı şekilde yakınlaştırmak için **Sığdırmak için yakınlaştır** ![[lucide-maximize.svg#icon]] seçeneğini seçin. Veya `Shift+1` klavye kısayolunu kullanın.

#### Seçime yakınlaştır

Tuvali tüm seçili öğelerin görünür olacağı şekilde yakınlaştırmak için seçili bir karta sağ tıklayın ve ardından **Seçime yakınlaştır** seçeneğini seçin. Veya `Shift+2` tuşlarına basın.

#### Yakınlaştırmayı sıfırla

Yakınlaştırma seviyesini varsayılana geri döndürmek için sağ üst köşedeki yakınlaştırma kontrollerinde **Yakınlaştırmayı sıfırla** seçeneğini seçin.


### Bir gruba atla

Büyük bir tuvalde doğrudan bir gruba gitmek için komut paletini açın ve **Canvas: Gruba git** seçeneğini seçin. Tuvalinizdeki grupların bir listesi görünür. Gitmek istediğiniz grubu seçin, tuval o grubun üzerinde ortalanır.

## Tuval ayarları

Tuvalinizin nasıl davrandığını değiştirmek için tuval kontrollerinin üzerindeki **Tuval ayarları** ![[lucide-settings.svg#icon]] seçeneğini seçin.

- **Izgaraya tuttur** kartları taşırken ve yeniden boyutlandırırken arka plan ızgarasına tutturur.
- **Nesnelere tuttur** kartları taşırken ve yeniden boyutlandırırken yakındaki kartlara tutturur.
- **Salt okunur** tuvalde değişiklik yapılmasını engeller.

## Bir tuvali görsel olarak dışa aktarma

Masaüstünde bir tuvali PNG görseli olarak dışa aktarabilirsiniz. Mobil Obsidian uygulamasında görsel dışa aktarma kullanılamaz.

1. Dışa aktarmak istediğiniz tuvali açın.
2. Komut paletini açın ve **Canvas: Görüntü olarak dışa aktar** seçeneğini seçin.
3. Ayarlarınızı seçin.
    - **Görünüm alanı** neyin dışa aktarılacağını belirler. Tüm tuval için **Tam tuval** veya şu anda görebildiğiniz kısım için **Yalnızca görüntü alanı** seçeneğini seçin.
    - **Yakınlaştırma** görsel kalitesini belirler. Daha yüksek yakınlaştırma daha büyük ve daha keskin bir görsel üretir. İletişim kutusu tahmini görsel boyutunu gösterir.
    - **Logoyu göster** sol alt kısma bir Obsidian logosu ekler. Bu varsayılan olarak açıktır.
    - **Gizlilik modu** tuvalinizdeki tüm metni gizler. Bu varsayılan olarak kapalıdır.
4. **Kaydet** seçeneğini seçin.
5. Dosyayı nereye kaydedeceğinizi seçin. Dosya adı varsayılan olarak tuvalinizin adıdır ve `.png` uzantısına sahiptir.

Boş bir tuvali dışa aktaramazsınız.

## Geri alma ve yineleme

Son değişikliğinizi geri almak için tuvalin sağ tarafındaki tuval kontrollerinde **Geri al** seçeneğini seçin. Veya `Ctrl+Z` (Windows ve Linux) veya `Command+Z` (macOS) tuşlarına basın.

Bir değişikliği yinelemek için **Yinele** seçeneğini seçin. Veya `Ctrl+Y` veya `Ctrl+Shift+Z` (Windows ve Linux) ya da `Command+Y` veya `Command+Shift+Z` (macOS) tuşlarına basın.

## Tuval yardımı

Masaüstünde, kaydırma, yakınlaştırma, seçme ve kartları taşıma kısayollarının listesini görmek için tuval kontrollerinin altındaki **Tuval yardım** ![[lucide-help-circle.svg#icon]] seçeneğini seçin.

## Bir tuvali gömme

Standart gömme sözdizimini kullanarak bir nota tuval gömebilirsiniz. Daha fazla bilgi için [[Dosya gömme#Embed a canvas in a note|Bir nota tuval gömme]] bölümüne bakın.

## Canvas'ı mobilde kullanma

Bir tuvali telefonda veya tablette açtığınızda, Obsidian üç ipucu gösterir.

- **Kaydırmak için sürükleyin**
- **Yakınlaştırmak için sıkıştırın**
- **Eklemek / taşımak / seçmek için dokunun ve tutun**

### Tuval menüsünü açma

Tuvalin boş bir alanına dokunup basılı tutun. Menüde şu öğeler bulunur.

- **Kart ekle** bir metin kartı ekler.
- **Kasadan not ekleyin** kasanızdan bir not ekler.
- **Kasadan medya ekleme** kasanızdan medya ekler.
- **Web sayfası ekle** bir web sayfası gömer.
- **Grup oluştur** boş bir grup oluşturur.
- **Izgaraya tuttur**, **Nesnelere tuttur** ve **Salt okunur** seçenekleri **Tuval ayarları**'ndaki seçeneklerle aynıdır.

### Kart ekleme

Tuval menüsünden kart ekleyebilirsiniz. Ayrıca tuvalin alt kısmındaki bir simgeyi de seçebilirsiniz.

- Boş dosya simgesi bir metin kartı ekler.
- Belge simgesi kasanızdan bir not ekler.
- Görsel simgesi kasanızdan medya ekler.

### Seçili bir kartla çalışma

Bir kartı seçmek için dokunun. Kartın üzerinde bir araç çubuğu görünür.

- **Kaldır** ![[lucide-trash-2.svg#icon]] kartı siler.
- **Renk ayarla** ![[lucide-palette.svg#icon]] kartın rengini değiştirir.
- **Seçime yakınlaştır** tuvali karta yakınlaştırır.
- **Düzenle** ![[lucide-square-pen.svg#icon]] kartı düzenler.

### Bir kartı taşıma

1. Kartı seçmek için dokunun.
2. Seçili karta dokunup basılı tutun, ardından yeni bir konuma sürükleyin.

### Bir kartı yeniden boyutlandırma

1. Kartı seçmek için dokunun.
2. Kartın kenarlarını sürükleyerek büyütün veya küçültün.

### Kart menüsünü açma

Bir karta dokunup basılı tutun. Menüde şu öğeler bulunur.

- **Seçime yakınlaştır** tuvali karta yakınlaştırır.
- **Düzenle** kartı düzenler.
- **Dosyaya dönüştür...** bir metin kartını nota dönüştürür.
- **Çoğalt** kartın bir kopyasını oluşturur.
- **Kaldır** kartı siler.

### Bir kartı düzenleme

Bir metin kartını veya not kartını düzenlemek için iki yöntemden birini kullanın.

- Kartı seçmek için dokunun, ardından çift dokunun. Klavye açılır.
- Kartı seçmek için dokunun, ardından kartın üzerindeki araç çubuğunda **Düzenle** ![[lucide-square-pen.svg#icon]] seçeneğini seçin.

### Bir bağlantıyı etiketleme

1. Çizgiyi seçmek için dokunun.
2. Araç çubuğunda **Etiketi düzenle** ![[lucide-square-pen.svg#icon]] seçeneğini seçin. Klavye açılır.
3. Etiketi girin.

Bir etiketi kaldırmak için çizgiye dokunun ve ardından araç çubuğunda **Etiketi çıkarın** seçeneğini seçin.

### Bir bağlantının yönünü değiştirme

1. Çizgiyi seçmek için dokunun.
2. Araç çubuğunda **Satır yönü** seçeneğini seçin.
3. **Yönsüz**, **Tek yönlü** veya **Çift yönlü** seçeneklerinden birini seçin.

### Çizgi menüsünü açma

İki kartı birbirine bağlayan bir çizgiye dokunup basılı tutun. Menüde şu öğeler bulunur.

- **Etiketi düzenle** çizginin etiketini ekler veya değiştirir.
- **Bağlantıyı takip et** tuvali çizginin karşı ucundaki karta taşır.
- **Kaldır** bağlantıyı siler.

### Kartları bağlama

1. Bir kartı seçmek için dokunun.
2. Kenarlarındaki dairelerden birini başka bir karta sürükleyin.

Çizgiyi sürükleyip boş bir alanda bırakırsanız, **Kart ekle** ve **Kasadan not ekleyin** seçenekleriyle bir menü açılır. Çizginin ucuna bir kart eklemek için birini seçin.

### Kartların bağlantısını kesme

Bir bağlantıyı kaldırmak için iki yöntemden birini kullanın.

- Çizgiye dokunun, ardından **Kaldır** ![[lucide-trash-2.svg#icon]] seçeneğini seçin.
- Çizginin ok ucunu başladığı karta geri sürükleyin. Çizgi kaybolur.

### Kartları gruplama

Bir grup oluşturmak için:

1. Tuvalin boş bir alanına dokunup basılı tutun.
2. **Grup oluştur** seçeneğini seçin.
3. Grubun kenarlarını sürükleyerek boyutunu değiştirin.

Gruba kart eklemek için kartları grubun alanına sürükleyin. Grubu taşıdığınızda içindeki kartlar da taşınır.

Bir grubu yeniden adlandırmak için adına çift dokunun. Klavye açılır. Yeni adı girin.

### Tuval kontrolleri

Tuvalin sağ tarafındaki kontroller görünümü ve ayarlarınızı değiştirir.

- **Yakınlaştır** ve **Uzaklaştır** yakınlaştırma seviyesini değiştirir.
- **Yakınlaştırmayı sıfırla** tuvali varsayılan yakınlaştırma seviyesine döndürür.
- **Sığdırmak için yakınlaştır** tuvaldeki her kartı gösterir.
- **Geri al** ve **Yinele** son değişikliğinizi geri alır veya tekrarlar.
- **Tuval ayarları**'nda **Izgaraya tuttur**, **Nesnelere tuttur** ve **Salt okunur** seçenekleri bulunur.

## Gelişmiş ipuçları

Canvas'ın bazı gelişmiş kullanım durumlarını gösteren kısa videolar hazırladık.

[Tüm 72 ipucunu buradan görüntüleyebilirsiniz](https://obsidian.md/canvas#protips). İpucu videoları yalnızca masaüstünde görüntülenebilir.

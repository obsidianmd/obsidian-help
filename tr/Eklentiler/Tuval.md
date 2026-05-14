---
permalink: plugins/canvas
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

### Klasörlerden kart ekleme

[[Dosya Gezgini]]'nden bir klasörü sürükleyerek o klasördeki tüm dosyaları tuvale ekleyin.

### Bir kartı düzenleme

Düzenlemeye başlamak için bir metin veya not kartına çift tıklayın. Düzenlemeyi durdurmak için kartın dışında herhangi bir yere tıklayın. Ayrıca düzenlemeyi durdurmak için `Escape` tuşuna basabilirsiniz.

Bir kartı sağ tıklayıp **Düzenle** seçeneğini seçerek de düzenleyebilirsiniz.

### Bir kartı silme

Seçili kartları, herhangi birine sağ tıklayıp **Sil** seçeneğini seçerek kaldırın. Veya `Backspace` (veya macOS'ta `Delete`) tuşuna basın.

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

Bağlı iki kart birbirinden uzaktaysa, çizgiye sağ tıklayıp **Hedefe git** veya **Kaynağa git** seçeneğini seçerek bağlantının kaynağına veya hedefine gidebilirsiniz.

### Bir bağlantıya etiket ekleme

İki kart arasındaki ilişkiyi tanımlamak için bir çizgiye etiket ekleyebilirsiniz.

Bir bağlantıyı etiketlemek için:

1. Çizgiye çift tıklayın.
2. Etiketi girin ve ardından `Escape` tuşuna basın veya tuvalin herhangi bir yerine tıklayın.

Ayrıca seçim kontrollerinden **Etiketi düzenle** seçeneğini seçerek de bir bağlantıyı etiketleyebilirsiniz.

Bir bağlantı etiketini düzenlemek için çizgiye çift tıklayın veya çizgiye sağ tıklayıp **Etiketi düzenle** seçeneğini seçin.

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

## Bir tuvali gömme

Standart gömme sözdizimini kullanarak bir nota tuval gömebilirsiniz. Daha fazla bilgi için [[Dosya gömme#Embed a canvas in a note|Bir nota tuval gömme]] bölümüne bakın.

## Gelişmiş ipuçları

Canvas'ın bazı gelişmiş kullanım durumlarını gösteren kısa videolar hazırladık.

[Tüm 72 ipucunu buradan görüntüleyebilirsiniz](https://obsidian.md/canvas#protips). İpucu videoları yalnızca masaüstünde görüntülenebilir.

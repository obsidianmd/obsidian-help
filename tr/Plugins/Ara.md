---
permalink: plugins/search
publish: true
mobile: true
description: 'Arama, sonuçları daraltmak için arama terimleri ve operatörler kullanarak Obsidian kasanızdaki verileri bulmanıza yardımcı olan bir çekirdek eklentidir.'
---
Ara, arama terimleri ve operatörler kullanarak Obsidian kasanızda veri bulmanıza yardımcı olan bir [[Yerleşik Eklentiler|çekirdek eklentidir]].

Varsayılan olarak, Ara'yı sol kenar çubuğunda ![[lucide-search.svg#icon]] bulabilirsiniz. Ayrıca `Ctrl+Shift+F` (Windows/Linux) veya `Command+Shift+F` (macOS) tuşlarına basarak Ara'yı açabilirsiniz.

- **Seçili metni ara**: Düzenleyicide bir metin seçip klavye kısayoluyla Ara'yı açarsanız, Ara size seçili metin için arama sonuçlarını gösterir.
- **Son arama terimlerini ara**: Boş bir arama terimiyle Ara'yı açarak son arama terimlerini listeleyin. Arama terimini tekrar kullanmak için herhangi birine tıklayın.

> [!info] Hariç tutulan dosyalar
> [[Ayarlar#Hariç tutulan dosyalar|Hariç tutulan dosyalar]] kalıplarınızla eşleşen dosyalar Arama sonuçlarında görünmez.

## Arama terimleri

Arama terimi, arama alanına girdiğiniz kelime veya ifadedir. Arama terimlerini etkili bir şekilde yazmayı öğrenmek, büyük kasalarda bile aradığınızı hızlıca bulmanıza yardımcı olabilir. Obsidian yalnızca notların ve tuvallerin içeriğini arar.

> [!tip]- Yolları ve dosya adlarını arama
> Varsayılan olarak, yalnızca notların ve tuvallerin yollarını ve dosya adlarını arayabilirsiniz. Kasadaki herhangi bir dosyanın yolunu veya dosya adını aramak için `path` veya `file` operatörünü kullanın.

Arama terimindeki her kelime, her dosya içinde bağımsız olarak eşleştirilir. Tam bir ifade aramak için ifadeyi tırnak işaretleri ile çevreleyin, örneğin `"star wars"`. Tam bir ifade içinde tırnak işaretli metin aramak için tırnak işaretinin önüne ters eğik çizgi (`\`) ekleyerek tırnak işaretlerini _kaçırabilirsiniz_, örneğin `"they said \"hello\" to each other"`.

Arama teriminizdeki _tüm_ kelimeleri veya _herhangi bir_ kelimeyi içeren dosyaları döndürüp döndürmeyeceğini kontrol edebilirsiniz:

- `meeting work` hem `meeting` hem de `work` içeren dosyaları döndürür.
- `meeting OR work` `meeting` veya `work` içeren dosyaları döndürür.

İkisini aynı arama teriminde bile birleştirebilirsiniz.

- `meeting work OR meetup personal` iş toplantıları ve kişisel buluşmalar için dosyaları döndürür.

Her ifadenin önceliğini kontrol etmek için parantez kullanabilirsiniz.

- `meeting (work OR meetup) personal` `meeting`, `personal` ve `work` veya `meetup` kelimelerinden birini içeren dosyaları döndürür.

Bir kelimeyi arama sonuçlarından hariç tutmak veya olumsuzlamak için önüne tire (`-`) ekleyin:

- `meeting -work` `meeting` içeren ancak `work` içermeyen dosyaları döndürür.

Birden fazla ifadeyi hariç tutabilirsiniz:

- `meeting -work -meetup` `meeting` içeren ancak `work` veya `meetup` içermeyen dosyaları döndürür.

Parantez kullanarak bir ifade kombinasyonunu hariç tutabilirsiniz:

- `meeting -(work meetup)` `meeting` içeren ancak _hem_ `work` _hem de_ `meetup` içermeyen dosyaları döndürür.

Sonuçları küçüktür (`<`) ve büyüktür (`>`) operatörleri kullanarak filtrelemek için bunları köşeli parantez (`[]`) veya tırnak işaretleri (`""`) ile çevreleyin:

- `meeting [duration:<5]` meeting mevcut olan ve duration 5'ten küçük olan dosyaları döndürür.
- `meeting [duration:>5]` meeting mevcut olan ve duration 5'ten büyük olan dosyaları döndürür.

> [!tip]- Arama terimini açıkla
> Karmaşık bir arama terimi için sorun gidermeniz gerekiyorsa, arama teriminizin açıklaması için Ara'da **Arama terimini açıkla**'ya tıklayabilirsiniz.

## Arama operatörleri

Arama operatörleri, sonuçlarınızı daha da filtrelemek için daha ayrıntılı arama terimleri kullanmanıza olanak tanır.

Bazı operatörler parantez içinde iç içe arama terimi eklemenize bile izin verir, örneğin: `task:(call OR email)`.

| Arama operatörü | Açıklama                                                                                                                                                                                                                                                                                                        |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `file:`         | Dosya adında metin bul. Kasadaki herhangi bir dosyayla eşleşir.<p/>Örnek: `file:.jpg` veya `file:202209`.                                                                                                                                                                                                    |
| `path:`         | Dosya yolunda metin bul. Kasadaki herhangi bir dosyayla eşleşir.<p/>Örnek: `path:"Daily notes/2022-07"`.                                                                                                                                                                                                   |
| `content:`      | Dosya içeriğinde metin bul.<p/>Örnek: `content:"happy cat"`.                                                                                                                                                                                                                                                      |
| `match-case:`   | Büyük-küçük harfe duyarlı eşleşme.<p/>Örnek: `match-case:HappyCat`.                                                                                                                                                                                                                                           |
| `ignore-case:`  | Büyük-küçük harfe duyarsız eşleşme.<p/>Örnek: `ignore-case:ikea`.                                                                                                                                                                                                                                            |
| `tag:`          | Dosyada etiket bul.<p/>Örnek: `tag:#work`.<p/>`tag:#work` aramasının `#myjob/work` için sonuç döndürmeyeceğini unutmayın.<br /><br />**Not**: `tag:` kod bloklarındaki ve Markdown olmayan içerikteki eşleşmeleri yoksaydığından, genellikle `#work` için normal tam metin aramasından daha hızlı ve doğrudur. |
| `line:`         | `x` ile eşleşen en az bir satır içeren dosyaları bul.<p/>Örnek: `line:(mix flour)`.<p/><br>**Not:** `-line` kullanmak aramayı olumsuzlar, yani hiçbir satırın `x` ile eşleşmediği dosyaları bulur.                                                                                                   |
| `block:`        | Aynı blok içindeki eşleşmeleri bul.<p/>Örnek: `block:(dog cat)`.<p/>**Not**: `block:` Ara'nın her dosyadaki Markdown içeriğini ayrıştırmasını gerektirdiğinden, arama teriminizin tamamlanmasının daha uzun sürmesine neden olabilir.                                                                               |
| `section:`      | Aynı bölüm içindeki (iki başlık arasındaki metin) eşleşmeleri bul.<p/>Örnek: `section:(dog cat)`.                                                                                                                                                                                                                     |
| `task:`         | Bir [[Temel biçimlendirme söz dizimi#Görev Listesi\|görevde]] blok bazında eşleşmeleri bul.<p/>Örnek: `task:call`.                                                                                                                                                                                                 |
| `task-todo:`    | *Tamamlanmamış* bir [[Temel biçimlendirme söz dizimi#Görev Listesi\|görevde]] blok bazında eşleşmeleri bul.<p/>Örnek: `task-todo:call`.                                                                                                                                                                             |
| `task-done:`    | *Tamamlanmış* bir [[Temel biçimlendirme söz dizimi#Görev Listesi\|görevde]] blok bazında eşleşmeleri bul.<p/>Örnek: `task-done:call`.                                                                                                                                                                                |

## Arama özellikleri

Arama terimlerinizde [[Özellikler]] içinde saklanan verileri kullanabilirsiniz.

Bir özellik adını köşeli parantez içinde `[özellik]` kullanarak o özelliğe sahip dosyaları döndürün:

- `[aliases]` `aliases` özelliğini içeren dosyaları döndürür

Köşeli parantez ve iki nokta `[özellik:değer]` kullanarak o özellik ve değere sahip dosyaları döndürün:

- `[aliases:Name]` `aliases` özellik değerinin `Name` olduğu dosyaları döndürür

Değeri olmayan özellikleri bulmak için değer olarak `null` kullanın:

- `[aliases:null]` `aliases` özelliğinin var olduğu ancak değeri olmayan dosyaları döndürür

> [!info]+ Boş değerler
> `null` operatörü bir özellik boş olduğunda (örneğin, `aliases: `) çalışır, ancak özellik boş tırnak işaretleri (`""`) veya boş köşeli parantez (`[]`) içerdiğinde çalışmaz.

Hem özellik hem de değer, gruplama için parantez, `OR` operatörü, tam eşleşme için çift tırnak ve düzenli ifade gibi alt sorguları destekler.

- `[status:Draft OR Published]` `status` özellik değerinin `Draft` veya `Published` olduğu dosyaları döndürür

## Büyük-küçük harf duyarlılığını değiştirme

Varsayılan olarak, arama terimleri büyük-küçük harfe duyarlı değildir. Arama teriminizin tam büyük-küçük harf durumunu aramak istiyorsanız, arama çubuğu içindeki **Harf boyutunu kullan** ![[obsidian-icon-upper-lowercase.svg#icon]] seçeneğini seçin.

Bu ayar değiştirilebilir. **Harf boyutunu kullan** simgesi vurgulanmışsa, şu anda büyük-küçük harfe duyarlı bir arama yaptığınız anlamına gelir.

## Sonuç sıralama düzenini değiştirme

1. Bir [[#Arama terimleri|arama terimi]] girin.
2. Arama alanının altında, sağdaki açılır menüyü seçin.
3. İstediğiniz sıralama düzenini seçin. Varsayılan "İsme göre sırala (A'dan Z'ye)" şeklindedir.

Şu seçenekler mevcuttur:

- İsme göre sırala (A'dan Z'ye)
- İsme göre sırala (Z'den A'ya)
- Değiştirilme zamanına göre sırala (yeniden eskiye)
- Değiştirilme zamanına göre sırala (eskiden yeniye)
- Oluşturma tarihi(yeniden eskiye)
- Oluşturma tarihi (eskiden yeniye)

## Arama sonuçlarını kopyalama

1. Bir [[#Arama terimleri|arama terimi]] girin.
2. Arama alanının altında, sonuç sayısının yanındaki üç nokta simgesini seçin.
3. **Arama sonuçlarını kopyala**'yı seçin.

## Düzenli ifadeleri kullanma

Düzenli ifade, bir metin kalıbını tanımlayan bir karakter kümesidir. Arama teriminizde düzenli ifadeler kullanmak için ifadeyi eğik çizgilerle (`/`) çevreleyin.

- `/\d{4}-\d{2}-\d{2}/` 2022-01-01 gibi bir ISO 8601 tarihiyle eşleşir.

Düzenli ifadeleri arama operatörleriyle bile birleştirebilirsiniz:

- `path:/\d{4}-\d{2}-\d{2}/` dosya yolunda tarih bulunan dosyaları döndürür.

Düzenli ifade yazma hakkında daha fazla bilgi için FreeCodeCamp'ın [Pratik Regex rehberine](https://www.freecodecamp.org/news/practical-regex-guide-with-real-life-examples/) veya Mozilla'nın [Düzenli ifadeler](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) sayfasına bakın.

> [!info]+ JavaScript düzenli ifadeleri
> Düzenli ifadeler birbirinden farklı görünebilen farklı türlerde gelir. Obsidian, JavaScript türünde düzenli ifadeler kullanır.

## Arama ayarlarını yapılandırma

Ara'yı yapılandırmak için arama çubuğunun sağ tarafındaki **Arama ayarları** ![[lucide-sliders-horizontal.svg#icon]] seçeneğini seçerek geçiş düğmelerini görün.

| Ayar                        | Açıklama                                                                 |
|-------------------------|-----------------------------------------------------------------------------|
| **Arama terimini açıkla** | Arama terimlerini parçalara ayırır ve düz metin olarak açıklar.                 |
| **Sonuçları gizle**    | Arama bağlamının gösterilip gösterilmeyeceğini değiştirir.                                 |
| **Daha fazla içerik göster**   | Eşleşmenin etrafında daha fazla metin göstermek için arama sonucunu genişletir.               |

## Arama sonuçlarını bir nota gömme

Arama sonuçlarını bir nota gömmek için bir `query` kod bloğu ekleyin:

````
```query
embed OR search
```
````

[[Obsidian Publish'e giriş|Obsidian Publish]] gömülü [[Publish sınırlamaları#Arama|arama sonuçlarını]] desteklemez. Canlı işlenmiş bir örnek görmek için yukarıdaki kod bloğunu kasanızda kullanın.

![[search-query-rendered.png]]

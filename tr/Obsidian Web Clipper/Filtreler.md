---
permalink: web-clipper/filters
---
Filtreler, [[Obsidian Web Clipper/Şablonlar|Web Clipper şablonlarındaki]] [[Değişkenler|değişkenleri]] değiştirmenize olanak tanır. Filtreler, `{{değişken|filtre}}` söz dizimi kullanılarak değişkenlere uygulanır.

- Filtreler, `prompt`, `meta`, `selector` ve `schema` değişkenleri dahil her tür [[Değişkenler|değişken]] için çalışır.
- Filtreler zincirleme olarak kullanılabilir, örn. `{{değişken|filtre1|filtre2}}`, ve eklendikleri sırayla uygulanır.

## Tarihler

Tarihleri dönüştürün ve değiştirin.

### `date`

Bir tarihi belirtilen biçime dönüştürür, [referansa bakın](https://day.js.org/docs/en/display/format).

- `{{date|date:"YYYY-MM-DD"}}` geçerli tarihi "YYYY-MM-DD" biçimine dönüştürür.
- Giriş biçimini belirtmek için `date:("çıkışBiçimi", "girişBiçimi")` kullanın, örn. `"12/01/2024"|date:("YYYY-MM-DD", "MM/DD/YYYY")` ifadesi "12/01/2024" değerini ayrıştırır ve `"2024-12-01"` döndürür.

### `date_modify` 

Belirtilen bir süre ekleyerek veya çıkararak bir tarihi değiştirir, [referansa bakın](https://day.js.org/docs/en/manipulate/add).

- `"2024-12-01"|date_modify:"+1 year"` ifadesi `"2025-12-01"` döndürür
- `"2024-12-01"|date_modify:"- 2 months"` ifadesi `"2024-10-01"` döndürür

### `duration`

ISO 8601 süre dizelerini veya saniyeleri biçimlendirilmiş zaman dizelerine dönüştürür. Belirteçler: `HH` (dolgulu saatler), `H` (saatler), `mm` (dolgulu dakikalar), `m` (dakikalar), `ss` (dolgulu saniyeler), `s` (saniyeler).

- `"PT1H30M"|duration:"HH:mm:ss"` ifadesi `"01:30:00"` döndürür.
- `"3665"|duration:"H:mm:ss"` ifadesi `"1:01:05"` döndürür.
- Parametre olmadan `duration` ayarlandığında 1 saatin üzerinde `HH:mm:ss`, 1 saatin altında `mm:ss` kullanır.
- Hem ISO 8601 süre dizelerini (örn. `PT6702S`, `PT1H30M`) hem de düz saniyeleri destekler.

## Metin dönüştürme ve büyük/küçük harf

Metin dizelerini bir biçimden diğerine dönüştürün.

### `camel`

Metni `camelCase` biçimine dönüştürür.

### `capitalize`

Değerin ilk karakterini büyük harfe dönüştürür ve geri kalanını küçük harfe çevirir, örn. `"hELLO wORLD"|capitalize` ifadesi `"Hello world"` döndürür.

### `decode_uri`

URI ile kodlanmış bir dizeyi çözer, örn. `"%E4%BD%A0%E5%A5%BD"|decode_uri` ifadesi `"你好"` döndürür.

- `"hello%20world"|decode_uri` ifadesi `"hello world"` döndürür.
- Çözme başarısız olursa orijinal dizeyi döndürür (örn. hatalı biçimlendirilmiş URI dizileri).

### `kebab`

Metni `kebab-case` biçimine dönüştürür.

### `lower`

Metni `küçük harfe` dönüştürür.

### `pascal`

Metni `PascalCase` biçimine dönüştürür.

### `replace`

Belirtilen metnin geçtiği yerleri değiştirir:

- Basit değiştirme: `"hello!"|replace:",":""` tüm virgülleri kaldırır.
- Çoklu değiştirme: `"hello world"|replace:("e":"a","o":"0")` ifadesi `"hall0 w0rld"` döndürür.
- Değiştirmeler belirtildikleri sırayla uygulanır.
- Belirtilen metni kaldırmak için değiştirme değeri olarak `""` kullanın.
- `: | { } ( ) ' "` dahil özel karakterler, arama teriminde kullanıldığında ters eğik çizgi ile kaçırılmalıdır, örn. gerçek bir iki nokta üst üste aramak için `\:`.

Düzenli ifadeler JavaScript regex söz dizimi kullanılarak desteklenir:

- Tüm ünlüleri değiştir: `"hello world"|replace:"/[aeiou]/g":"*"` → `"h*ll* w*rld".`
- Büyük/küçük harf duyarsız: `"HELLO world"|replace:"/hello/i":"hi"` → `"hi world".`
- Çoklu regex: `"hello world"|replace:("/[aeiou]/g":"*","/\s+/":"-")` → `"h*ll*-w*rld"`.
- Kullanılabilir bayraklar: `g` (global), `i` (büyük/küçük harf duyarsız), `m` (çok satırlı), `s` (dotAll), `u` (unicode), `y` (yapışkan).

### `safe_name`

Metni güvenli bir dosya adına dönüştürür.

- Varsayılan olarak `safe_name` en tutucu temizleme kurallarını uygular.
- İşletim sistemine özgü kurallar `safe_name:os` ile uygulanabilir; burada `os`, yalnızca o işletim sistemi için kuralları uygulamak üzere `windows`, `mac` veya `linux` olabilir.

### `snake`

Metni `snake_case` biçimine dönüştürür.

### `title`

Metni `Başlık Biçimine` dönüştürür, örn. `"hello world"|title` ifadesi `"Hello World"` döndürür.

### `trim`

Bir dizenin her iki ucundaki boşlukları kaldırır.

- `"  hello world  "|trim` ifadesi `"hello world"` döndürür.

### `uncamel`

camelCase veya PascalCase biçimini boşlukla ayrılmış kelimelere dönüştürür; `title` veya `capitalize` gibi diğer filtrelerle daha fazla biçimlendirebilirsiniz.

- `"camelCase"|uncamel` ifadesi `"camel case"` döndürür.
- `"PascalCase"|uncamel` ifadesi `"pascal case"` döndürür.

### `upper`

Bir değeri büyük harfe dönüştürür, örn. `"hello world"|upper` ifadesi `"HELLO WORLD"` döndürür.

## Metin biçimlendirme

Metne [[Temel biçimlendirme söz dizimi]] ve [[Gelişmiş biçimlendirme söz dizimi]] uygulayın.

### `blockquote` 

Girişin her satırına Markdown alıntı öneki (`> `) ekler.

### `callout`

İsteğe bağlı parametrelerle bir [[Belirtme çizgileri|vurgulu blok]] oluşturur: `{{değişken|callout:("tür", "başlık", katlaDurumu)}}`

- `tür` vurgulu blok türüdür ve varsayılan değeri "info"dur
- `başlık` vurgulu blok başlığıdır ve varsayılan değeri boştur
- `katlaDurumu` katlama durumunu ayarlamak için bir boolean değeridir (true katlanmış, false açık, null katlanamaz)

### `footnote`

Bir diziyi veya nesneyi Markdown dipnotlar listesine dönüştürür.

- Diziler için: `["first item","second item"]|footnote` şunu döndürür: `[^1]: first item` vb.
- Nesneler için: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` şunu döndürür: `[^first-note]: Content 1` vb.

### `fragment_link`

Dizeleri ve dizileri [metin parçası](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments) bağlantılarına dönüştürür. Bağlantı metni için varsayılan değer "link"tir.

- `highlights|fragment_link` şunu döndürür: `Vurgu içeriği [link](metin-parçası-url)`
- `highlights|fragment_link:"özel başlık"` şunu döndürür: `Vurgu içeriği [özel başlık](metin-parçası-url)`

### `image` 

Dizeleri, dizileri veya nesneleri Markdown görsel söz dizimine dönüştürür.

- Dizeler için: `"image.jpg"|image:"alt metin"` ifadesi `![alt metin](image.jpg)` döndürür.
- Diziler için: `["image1.jpg","image2.jpg"]|image:"alt metin"` tüm görseller için aynı alt metinle Markdown görsel dizeleri dizisi döndürür.
- Nesneler için: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` nesne anahtarlarından alt metinle Markdown görsel dizeleri döndürür.

### `link`

Dizeleri, dizileri veya nesneleri Markdown bağlantı söz dizimine dönüştürür ([[Filtreler#`wikilink`|wikilink]] ile karıştırılmamalıdır).

- Dizeler için: `"url"|link:"yazar"` ifadesi `[yazar](url)` döndürür.
- Diziler için: `["url1","url2"]|link:"yazar"` tüm bağlantılar için aynı metinle Markdown bağlantıları dizisi döndürür.
- Nesneler için: `{"url1": "Yazar 1", "url2": "Yazar 2"}|link` nesne anahtarlarıyla eşleşen metinle Markdown bağlantıları döndürür.

### `list`

Bir diziyi Markdown listesine dönüştürür.

- `list` madde işaretli listeye dönüştürür.
- `list:task` görev listesine dönüştürür.
- `list:numbered` numaralı listeye dönüştürür.
- `list:numbered-task` numaralı görev listesine dönüştürür.

### `table`

Bir diziyi veya nesne dizisini [[Gelişmiş biçimlendirme söz dizimi#Tablolar|Markdown tablosuna]] dönüştürür:

- Nesne dizisi için nesne anahtarlarını başlık olarak kullanır.
- Dizi dizisi için her iç içe diziyi bir satır olarak tablo oluşturur.
- Basit bir dizi için başlık olarak "Value" ile tek sütunlu bir tablo oluşturur.
- Özel sütun başlıkları `table:("Sütun 1", "Sütun 2", "Sütun 3")` kullanılarak belirtilebilir. Basit bir diziyle kullanıldığında, belirtilen sütun sayısına göre verileri otomatik olarak satırlara böler.

### `wikilink`

Dizeleri, dizileri veya nesneleri Obsidian [[Notları bağla|wiki bağlantısı]] söz dizimine dönüştürür.

- Dizeler için: `"sayfa"|wikilink` ifadesi `[[sayfa]]` döndürür.
- Takma adlı dizeler için: `"sayfa"|wikilink:"takma ad"` ifadesi `[[sayfa|takma ad]]` döndürür.
- Diziler için: `["sayfa1","sayfa2"]|wikilink` takma adsız wiki bağlantıları dizisi döndürür.
- Takma adlı diziler için: `["sayfa1","sayfa2"]|wikilink:"takma ad"` tüm bağlantılar için aynı takma adla wiki bağlantıları dizisi döndürür.
- Nesneler için: `{"sayfa1": "takmaad1", "sayfa2": "takmaad2"}|wikilink` anahtarları sayfa adı, değerleri takma ad olarak wiki bağlantıları döndürür.

## Sayılar

### `calc`

Sayılar üzerinde temel aritmetik işlemler gerçekleştirir.

- Desteklenen operatörler: `+`, `-`, `*`, `/`, `**` (veya `^`) üs alma için.
- Örnek: `5|calc:"+10"` ifadesi `15` döndürür.
- Örnek: `2|calc:"**3"` ifadesi `8` döndürür (2 üzeri 3).
- Giriş bir sayı değilse orijinal dizeyi döndürür.

### `length`

Dizelerin uzunluğunu, dizilerin eleman sayısını veya nesnelerdeki anahtar sayısını döndürür.

- Dizeler için: `"hello"|length` ifadesi `5` döndürür.
- Diziler için: `["a","b","c"]|length` ifadesi `3` döndürür.
- Nesneler için: `{"a":1,"b":2}|length` ifadesi `2` döndürür.

### `round`

Bir sayıyı en yakın tam sayıya veya belirtilen ondalık basamak sayısına yuvarlar.

- Parametresiz: `3.7|round` ifadesi `4` döndürür.
- Ondalık basamak belirtilerek: `3.14159|round:2` ifadesi `3.14` döndürür.

## HTML işleme

HTML içeriğini işleyin ve HTML'yi Markdown'a dönüştürün. Giriş [[Değişkenler|değişkeninizin]] HTML içeriği barındırması gerektiğini unutmayın, örn. `{{fullHtml}}`, `{{contentHtml}}` veya bir `{{selectorHtml:}}` değişkeni kullanarak.

### `markdown` 

Bir dizeyi [[Obsidian Flavored Markdown]] biçimli dizeye dönüştürür.

- `{{contentHtml}}`, `{{fullHtml}}` ve `{{selectorHtml:cssSelector}}` gibi HTML döndüren değişkenlerle birlikte kullanıldığında faydalıdır.

### `remove_attr` 

Etiketlerden yalnızca belirtilen HTML özniteliklerini kaldırır.

- Örnek: `"<div class="test" id="example">Content</div>"|remove_attr:"class"` ifadesi `<div id="example">Content</div>` döndürür.
- Çoklu öznitelikler: `{{fullHtml|remove_attr:("class,style,id")}}`

### `remove_html`

Bir dizeden belirtilen HTML öğelerini ve içeriklerini kaldırır.

- Etiket adı, sınıf veya kimlik destekler, örn. `{{fullHtml|remove_html:("img,.class-name,#element-id")}}`
- İçeriği kaldırmadan yalnızca HTML etiketlerini veya özniteliklerini kaldırmak için `strip_tags` veya `strip_attr` filtrelerini kullanın.

### `remove_tags` 

Yalnızca belirtilen HTML etiketlerini kaldırır. Etiketlerin içeriğini korur.

- Örnek: `"<p>Hello <b>world</b>!</p>"|remove_tags:"b"` ifadesi `"<p>Hello world!</p>"` döndürür.
- Çoklu etiketler: `{{fullHtml|remove_tags:("a,em,strong")}}`

### `replace_tags`

HTML etiketlerini değiştirir, etiketin içeriğini ve özniteliklerini korur.

- `{{fullHtml|replace_tags:"strong":"h2"}}` tüm `<strong>` etiketlerini `<h2>` ile değiştirir.

### `strip_attr`

Bir dizeden **tüm** HTML özniteliklerini kaldırır.

- Belirli öznitelikleri korumak için `strip_attr:("class, id")` kullanın.
- Örnek: `"<div class="test" id="example">Content</div>"|strip_attr:("class")` ifadesi `<div id="example">Content</div>` döndürür.

### `strip_md`

**Tüm** Markdown biçimlendirmesini kaldırır ve düz metin dizesi döndürür, örn. `**metin**` ifadesini `metin` haline getirir.

- Kalın, italik, vurgulama, başlıklar, kod, blok alıntılar, tablolar ve görev listeleri dahil biçimlendirilmiş metni biçimlendirmesiz düz metne dönüştürür.
- Tabloları, dipnotları, görselleri ve HTML öğelerini tamamen kaldırır.

### `strip_tags`

Bir dizeden **tüm** HTML etiketlerini kaldırır. Etiket içindeki içerik korunur.

- Belirli etiketleri korumak için `strip_tags:("p,strong,em")` kullanın.
- Örnek: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` ifadesi `Hello <b>world</b>!` döndürür.

## Diziler ve nesneler

Dizileri ve nesneleri işleyin.

### `first` 

Bir dizinin ilk öğesini dize olarak döndürür.

- `["a","b","c"]|first` ifadesi `"a"` döndürür.
- Giriş bir dizi değilse girişi değiştirmeden döndürür.

### `join`

Bir dizinin öğelerini bir dizede birleştirir.

- `["a","b","c"]|join` ifadesi `"a,b,c"` döndürür.
- Özel bir ayırıcı belirtilebilir: `["a","b","c"]|join:" "` ifadesi `"a b c"` döndürür. Öğeleri satır sonu ile ayırmak için `join:"\n"` kullanın.
- `split` veya `slice` sonrasında faydalı olabilir: `"a,b,c,d"|split:","|slice:1,3|join:" "` ifadesi `"b c"` döndürür.

### `last`

Bir dizinin son öğesini dize olarak döndürür.

- `["a","b","c"]|last` ifadesi `"c"` döndürür.
- Giriş bir dizi değilse girişi değiştirmeden döndürür.

### `map`

`map:item => item.özellik` veya iç içe özellikler için `map:item => item.iç.özellik` söz dizimini kullanarak bir dizinin her öğesine dönüşüm uygular.

- `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => item.gem` ifadesi `["obsidian", "amethyst"]` döndürür.
- Nesne değişmezleri ve karmaşık ifadeler için parantez kullanın: `map:item => ({anahtar: değer})`, örn.: `[{gem: "obsidian", color: "black"}, {gem: "amethyst", color: "purple"}]|map:item => ({name: item.gem, color: item.color})` ifadesi `[{name: "obsidian", color: "black"}, {name: "amethyst", color: "purple"}]` döndürür.

Dize değişmezleri de desteklenir, örn. `["rock", "pop"]|map:item => "genres/${item}"` ifadesi `["genres/rock", "genres/pop"]` döndürür.

`map` ile `template` filtresini birleştirin, örn. `map:item => ({name: ${item.gem}, color: item.color})|template:"- ${name} is ${color}\n"`. Dize değişmez eşlemeleri için şablonda `${str}` kullanın, örn. `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"`.

Not: Yerleşik filtreler `map` içinde kullanılamaz. Bu, örneğin bir dizinin her değerini kırpma işleminin `map` ile yapılamayacağı anlamına gelir.

### `merge`

Bir diziye yeni değerler ekler.

- Diziler için: `["a","b"]|merge:("c","d")` ifadesi `["a","b","c","d"]` döndürür.
- Tek değer: `["a","b"]|merge:"c"` ifadesi `["a","b","c"]` döndürür.
- Giriş bir dizi değilse yeni bir dizi oluşturur: `"a"|merge:("b","c")` ifadesi `["a","b","c"]` döndürür.
- Değerler tırnak içine alınabilir: `["a"]|merge:('b,"c,d",e')` ifadesi `["a","b","c,d","e"]` döndürür.

### `nth`

CSS tarzı nth-child söz dizimi ve grup kalıpları kullanarak bir dizideki n'inci öğeleri tutar. Tüm konumlar 1 tabanlıdır (ilk öğe konum 1'dir).

- `dizi|nth:3` yalnızca 3. öğeyi tutar.
- `dizi|nth:3n` her 3. öğeyi tutar (3, 6, 9, vb.).
- `dizi|nth:n+3` 3. ve sonraki tüm öğeleri tutar.

Tekrarlayan yapılar için grup kalıp söz dizimi:

- `dizi|nth:1,2,3:5` her 5 öğelik gruptan 1, 2, 3 konumlarını tutar. Örnek: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` ifadesi `[1,2,3,6,7,8]` döndürür.

### `object`

Nesne verilerini işler:

- `object:array` bir nesneyi anahtar-değer çiftleri dizisine dönüştürür.
- `object:keys` nesnenin anahtarlarının dizisini döndürür.
- `object:values` nesnenin değerlerinin dizisini döndürür.
- Örnek: `{"a":1,"b":2}|object:array` ifadesi `[["a",1],["b",2]]` döndürür.

### `slice`

Bir dizenin veya dizinin bir bölümünü çıkarır.

- Dizeler için: `"hello"|slice:1,4` ifadesi `"ell"` döndürür.
- Diziler için: `["a","b","c","d"]|slice:1,3` ifadesi `["b","c"]` döndürür.
- Yalnızca bir parametre sağlanırsa, o indeksten sona kadar dilimler: `"hello"|slice:2` ifadesi `"llo"` döndürür.
- Negatif indeksler sondan sayar: `"hello"|slice:-3` ifadesi `"llo"` döndürür.
- İkinci parametre dışlayıcıdır: `"hello"|slice:1,4` indeks 1, 2 ve 3'teki karakterleri içerir.
- Negatif ikinci parametre sondan öğeleri hariç tutar: `"hello"|slice:0,-2` ifadesi `"hel"` döndürür.

### `split`

Bir dizeyi alt dizeler dizisine böler.

- `"a,b,c"|split:","` ifadesi `["a","b","c"]` döndürür.
- `"hello world"|split:" "` ifadesi `["hello","world"]` döndürür.
- Ayırıcı sağlanmazsa her karaktere göre böler: `"hello"|split` ifadesi `["h","e","l","l","o"]` döndürür.
- Ayırıcı olarak düzenli ifadeler kullanılabilir: `"a1b2c3"|split:[0-9]` ifadesi `["a","b","c"]` döndürür.

### `template`

`nesne|template:"${değişken} ile Şablon"` söz dizimini kullanarak bir nesneye veya nesne dizisine şablon dizesi uygular.

- İç içe özelliklere erişim: `{"gem":{"name":"Obsidian"}}|template:"${gem.name}"` ifadesi `"Obsidian"` döndürür.
- Nesneler için: `{"gem":"obsidian","hardness":5}|template:"${gem} has a hardness of ${hardness}"` ifadesi `"obsidian has a hardness of 5"` döndürür.
- Diziler için: `[{"gem":"obsidian","hardness":5},{"gem":"amethyst","hardness":7}]|template:"- ${gem} has a hardness of ${hardness}\n"` biçimlendirilmiş bir liste döndürür.

`map`'ten gelen dize değişmezleriyle `${str}` kullanılarak çalışır:

- Örnek: `["rock", "pop"]|map:item => "genres/${item}"|template:"- ${str}"` biçimlendirilmiş bir liste döndürür.

### `unique`

Dizilerden ve nesnelerden yinelenen değerleri kaldırır.

- İlkel türlü diziler için: `[1,2,2,3,3]|unique` ifadesi `[1,2,3]` döndürür.
- Nesne dizileri için: `[{"a":1},{"b":2},{"a":1}]|unique` ifadesi `[{"a":1},{"b":2}]` döndürür.
- Nesneler için yinelenen değerlere sahip özellikleri kaldırır, son geçişin anahtarını korur.
- Dizeler için girişi değiştirmeden döndürür.

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

### `encode_uri`

Metni, `/`, `?` ve `&` gibi ayrılmış karakterler dahil olmak üzere bir URL'de kullanılmak üzere kodlar.

- `"hello world/page"|encode_uri` ifadesi `hello%20world%2Fpage` döndürür.

### `indent`

Her boş olmayan satırı boşluklarla girintiler. Varsayılan olarak iki boşluk kullanır.

- `indent:4` her satırı dört boşlukla girintiler.
- `indent:0` metni değiştirmeden bırakır.

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

### `truncate`

Metni belirli bir karakter sayısına kısaltır ve sonuna `…` ekler. Sonek sınıra dahildir.

- `"A concise introduction"|truncate:10` ifadesi `A concise…` döndürür.
- `"A concise introduction"|truncate:(12, "...")` ifadesi `A concise...` döndürür.
- `"A concise introduction"|truncate:(9, "")` ifadesi `A concise` döndürür.

### `truncatewords`

Metni belirli bir kelime sayısına kısaltır ve `…` ekler.

- `"A concise introduction to Knap"|truncatewords:3` ifadesi `A concise introduction…` döndürür.
- `"A concise introduction to Knap"|truncatewords:(3, "")` ifadesi `A concise introduction` döndürür.

### `unescape`

Kaçırılmış tırnak işaretlerini ve yeni satır dizilerini gerçek karakterlere dönüştürür.

- `"Line 1\\nLine 2"|unescape` metni iki satırda döndürür.
- `'He said \\"hello\\"'|unescape` ifadesi `He said "hello"` döndürür.

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

### `bold`

Metni kalın işaretleyicilerle sarar.

- `"Important"|bold` ifadesi `**Important**` döndürür.
- `"Important"|bold:_` ifadesi `__Important__` döndürür.

### `callout`

İsteğe bağlı parametrelerle bir [[Belirtme çizgileri|vurgulu blok]] oluşturur: `{{değişken|callout:("tür", "başlık", katlaDurumu)}}`

- `tür` vurgulu blok türüdür ve varsayılan değeri "info"dur
- `başlık` vurgulu blok başlığıdır ve varsayılan değeri boştur
- `katlaDurumu` katlama durumunu ayarlamak için bir boolean değeridir (true katlanmış, false açık, null katlanamaz)

### `code`

Metni satır içi kod olarak biçimlendirir. Çok satırlı metin veya bir dil parametresi, bunun yerine çitli kod bloğu oluşturur.

- `"const answer = 42"|code` ifadesi `` `const answer = 42` `` döndürür.
- `"const answer = 42"|code:"typescript"` ifadesi `typescript` olarak işaretlenmiş bir kod bloğu döndürür.

### `code_block`

Her zaman çitli bir kod bloğu oluşturur, isteğe bağlı bir dil ile, örn. `code_block:"typescript"`.

### `comment`

Metni [[Temel biçimlendirme söz dizimi#Yorumlar|yorum]] işaretleyicileriyle sarar.

- `"Hidden note"|comment` ifadesi `%%Hidden note%%` döndürür.

### `embed`

Dizeleri, dizileri veya nesneleri [[Dosya gömme|gömmelere]] dönüştürür.

- Dizeler için: `"diagram.png"|embed` ifadesi `![[diagram.png]]` döndürür.
- Takma adlı dizeler için: `"Project Atlas"|embed:"Preview"` ifadesi `![[Project Atlas|Preview]]` döndürür.
- Nesneler için: `{"one.md": "One", "two.md": "Two"}|embed` anahtarları dosya, değerleri takma ad olarak gömmeler döndürür.

### `escape_md`

Markdown noktalama işaretlerinin önüne ters eğik çizgi ekler, böylece düz metin olarak görünür.

- `"# Draft *title*"|escape_md` ifadesi `\# Draft \*title\*` döndürür.

### `footnote`

Bir diziyi veya nesneyi Markdown dipnotlar listesine dönüştürür.

- Diziler için: `["first item","second item"]|footnote` şunu döndürür: `[^1]: first item` vb.
- Nesneler için: `{"First Note": "Content 1", "Second Note": "Content 2"}|footnote` şunu döndürür: `[^first-note]: Content 1` vb.

### `fragment_link`

Dizeleri ve dizileri [metin parçası](https://developer.mozilla.org/en-US/docs/Web/URI/Fragment/Text_fragments) bağlantılarına dönüştürür. Bağlantı metni için varsayılan değer "link"tir.

- `highlights|fragment_link` şunu döndürür: `Vurgu içeriği [link](metin-parçası-url)`
- `highlights|fragment_link:"özel başlık"` şunu döndürür: `Vurgu içeriği [özel başlık](metin-parçası-url)`

### `h1` - `h6`

Her boş olmayan satırı o düzeyde bir başlığa dönüştürür.

- `"Introduction"|h2` ifadesi `## Introduction` döndürür.

### `hard_break`

Her tek satır sonundan önce iki boşluk ekler, böylece satır sonları Okuma görünümünde görünür. Paragraflar arasındaki boş satırlar olduğu gibi kalır.

### `highlight`

Metni vurgulama işaretleyicileriyle sarar.

- `"Remember this"|highlight` ifadesi `==Remember this==` döndürür.
- `red`, `orange`, `yellow`, `green`, `blue` veya `purple` ile bir [[Temel biçimlendirme söz dizimi#Vurgulama renkleri|vurgulama rengi]] ekleyin, örn. `"Remember this"|highlight:blue` ifadesi `==🔵Remember this==` döndürür.

### `hr`

Metnin ardına boş bir satırla ayrılmış yatay çizgi (`---`) ekler.

- `"Section end"|hr` çizgiyi metnin ardına ekler.
- `hr:before` metnin önüne ekler ve `hr:both` her iki tarafa ekler.

### `image` 

Dizeleri, dizileri veya nesneleri Markdown görsel söz dizimine dönüştürür.

- Dizeler için: `"image.jpg"|image:"alt metin"` ifadesi `![alt metin](image.jpg)` döndürür.
- Diziler için: `["image1.jpg","image2.jpg"]|image:"alt metin"` tüm görseller için aynı alt metinle Markdown görsel dizeleri dizisi döndürür.
- Nesneler için: `{"image1.jpg": "Alt 1", "image2.jpg": "Alt 2"}|image` nesne anahtarlarından alt metinle Markdown görsel dizeleri döndürür.

### `italic`

Metni italik işaretleyicilerle sarar.

- `"Emphasized"|italic` ifadesi `*Emphasized*` döndürür.
- `"Emphasized"|italic:_` ifadesi `_Emphasized_` döndürür.

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

### `math`

Metni satır içi [[Gelişmiş biçimlendirme söz dizimi#Matematik|matematik]] olarak biçimlendirir. Çok satırlı metin matematik bloğu olur.

- `"x^2 + y^2"|math` ifadesi `$x^2 + y^2$` döndürür.

### `math_block`

Her zaman bir matematik bloğu oluşturur, metnin öncesinde ve sonrasında `$$` satırları ile.

### `strike`

Metni üstü çizili işaretleyicilerle sarar.

- `"Removed"|strike` ifadesi `~~Removed~~` döndürür.

### `table`

Bir diziyi veya nesne dizisini [[Gelişmiş biçimlendirme söz dizimi#Tablolar|Markdown tablosuna]] dönüştürür:

- Nesne dizisi için nesne anahtarlarını başlık olarak kullanır.
- Dizi dizisi için her iç içe diziyi bir satır olarak tablo oluşturur.
- Basit bir dizi için başlık olarak "Value" ile tek sütunlu bir tablo oluşturur.
- Özel sütun başlıkları `table:("Sütun 1", "Sütun 2", "Sütun 3")` kullanılarak belirtilebilir. Basit bir diziyle kullanıldığında, belirtilen sütun sayısına göre verileri otomatik olarak satırlara böler.

### `table_pretty`

[[Filtreler#`table`|table]] gibi çalışır ve sütunları eşit genişliklere doldurur, böylece tablo Kaynak modunda hizalanır.

### `wikilink`

Dizeleri, dizileri veya nesneleri Obsidian [[Notları bağla|wiki bağlantısı]] söz dizimine dönüştürür.

- Dizeler için: `"sayfa"|wikilink` ifadesi `[[sayfa]]` döndürür.
- Takma adlı dizeler için: `"sayfa"|wikilink:"takma ad"` ifadesi `[[sayfa|takma ad]]` döndürür.
- Diziler için: `["sayfa1","sayfa2"]|wikilink` takma adsız wiki bağlantıları dizisi döndürür.
- Takma adlı diziler için: `["sayfa1","sayfa2"]|wikilink:"takma ad"` tüm bağlantılar için aynı takma adla wiki bağlantıları dizisi döndürür.
- Nesneler için: `{"sayfa1": "takmaad1", "sayfa2": "takmaad2"}|wikilink` anahtarları sayfa adı, değerleri takma ad olarak wiki bağlantıları döndürür.

## Sayılar

`calc`, `round` ve `length` sayı döndürür, sonraki filtrelerde ve değişken atamalarında türlerini korur. `number_format` metin döndürür.

### `calc`

Sayılar üzerinde temel aritmetik işlemler gerçekleştirir.

- Desteklenen operatörler: `+`, `-`, `*`, `/`, `**` (veya `^`) üs alma için.
- Örnek: `5|calc:"+10"` ifadesi `15` döndürür.
- Örnek: `2|calc:"**3"` ifadesi `8` döndürür (2 üzeri 3).
- Giriş boşsa, bir sayı değilse veya hesaplama sonlu olmayan bir sonuç üretirse orijinal girişi döndürür.

### `length`

Dizelerin uzunluğunu, dizilerin eleman sayısını veya nesnelerdeki anahtar sayısını döndürür.

- Dizeler için: `"hello"|length` ifadesi `5` döndürür.
- Diziler için: `["a","b","c"]|length` ifadesi `3` döndürür.
- Tek öğeli bir dizi yine bir olarak sayılır: `[42]|length` ifadesi `1` döndürür.
- Nesneler için: `{"a":1,"b":2}|length` ifadesi `2` döndürür.

### `number_format`

Bir sayıyı belirtilen ondalık basamak sayısı ve isteğe bağlı ondalık ve binlik ayırıcılarla biçimlendirir.

- `1234.567|number_format:2` ifadesi `"1,234.57"` döndürür.
- `1234.567|number_format:(2,",",".")` ifadesi `"1.234,57"` döndürür.
- Diziler ve nesneler özyinelemeli olarak biçimlendirilir.

### `round`

Bir sayıyı en yakın tam sayıya veya belirtilen ondalık basamak sayısına yuvarlar.

- Parametresiz: `3.7|round` ifadesi `4` döndürür.
- Ondalık basamak belirtilerek: `3.14159|round:2` ifadesi `3.14` döndürür.
- Diziler ve nesneler yapılarını korur, sayısal değerler özyinelemeli olarak yuvarlanır. Sayısal dizeler sayılara dönüşür, örn. `["1.234","2.345"]|round:2` ifadesi `[1.23,2.35]` döndürür.
- `"42abc"` gibi geçersiz giriş bir sayıya dönüştürülmek yerine korunur.

## HTML işleme

HTML içeriğini işleyin ve HTML'yi Markdown'a dönüştürün. Giriş [[Değişkenler|değişkeninizin]] HTML içeriği barındırması gerektiğini unutmayın, örn. `{{fullHtml}}`, `{{contentHtml}}` veya bir `{{selectorHtml:}}` değişkeni kullanarak.

### `html_to_json`

HTML'yi her öğenin etiketini, özniteliklerini ve alt öğelerini içeren yapılandırılmış JSON'a dönüştürür. Metin düğümleri `{"type":"text","content":"..."}` biçimini kullanır. Bu, çıkarılan HTML'yi yeniden şekillendirmek için `map`, `object` ve `template` gibi filtrelerle birleştirilebilir.

### `markdown` 

Bir dizeyi [[Obsidian Flavored Markdown]] biçimli dizeye dönüştürür.

- `{{contentHtml}}`, `{{fullHtml}}` ve `{{selectorHtml:cssSelector}}` gibi HTML döndüren değişkenlerle birlikte kullanıldığında faydalıdır.

### `remove_attr` 

Etiketlerden yalnızca belirtilen HTML özniteliklerini kaldırır.

- Örnek: `'<div class="test" id="example">Content</div>'|remove_attr:"class"` ifadesi `<div id="example">Content</div>` döndürür.
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
- Örnek: `'<div class="test" id="example">Content</div>'|strip_attr:("class")` ifadesi `<div class="test">Content</div>` döndürür.

### `strip_md`

**Tüm** Markdown biçimlendirmesini kaldırır ve düz metin dizesi döndürür, örn. `**metin**` ifadesini `metin` haline getirir.

- Kalın, italik, vurgulama, başlıklar, kod, blok alıntılar, tablolar ve görev listeleri dahil biçimlendirilmiş metni biçimlendirmesiz düz metne dönüştürür.
- Tabloları, dipnotları, görselleri ve HTML öğelerini tamamen kaldırır.
- `stripmd` bir takma addır.

### `strip_tags`

Bir dizeden **tüm** HTML etiketlerini kaldırır. Etiket içindeki içerik korunur.

- Belirli etiketleri korumak için `strip_tags:("p,strong,em")` kullanın.
- Örnek: `"<p>Hello <b>world</b>!</p>"|strip_tags:("b")` ifadesi `Hello <b>world</b>!` döndürür.

## Diziler ve nesneler

Dizileri ve nesneleri işleyin.

### `compact`

Dizilerden ve nesnelerden `null` değerleri ve boş dizeleri kaldırır. `0` ve `false` değerlerini korur.

- `[null,"","one",0,false,"two"]|compact` ifadesi `["one",0,false,"two"]` döndürür.

### `first` 

Bir dizinin ilk öğesini türünü koruyarak döndürür. Nesneler ve iç içe diziler JSON olarak görüntülenir.

- `["a","b","c"]|first` ifadesi `"a"` döndürür.
- Boş bir dizi `null` döndürür, bu da boş metin olarak görüntülenir.
- Giriş bir dizi değilse girişi değiştirmeden döndürür.

### `join`

Bir dizinin öğelerini bir dizede birleştirir.

- `["a","b","c"]|join` ifadesi `"a,b,c"` döndürür.
- Özel bir ayırıcı belirtilebilir: `["a","b","c"]|join:" "` ifadesi `"a b c"` döndürür. Öğeleri satır sonu ile ayırmak için `join:"\n"` kullanın.
- `split` veya `slice` sonrasında faydalı olabilir: `"a,b,c,d"|split:","|slice:1,3|join:" "` ifadesi `"b c"` döndürür.

### `last`

Bir dizinin son öğesini türünü koruyarak döndürür. Nesneler ve iç içe diziler JSON olarak görüntülenir.

- `["a","b","c"]|last` ifadesi `"c"` döndürür.
- Boş bir dizi `null` döndürür, bu da boş metin olarak görüntülenir.
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

Sonuç, sonraki koleksiyon filtreleri için dizi olarak kalır. Tek bir ilkel değer içeriyorsa, bu değer dizi parantezleri olmadan görüntülenir ve doğrudan metin filtrelerine iletilir, örn. `[1,2]|nth:2` ifadesi `2` olarak görüntülenir.

Tekrarlayan yapılar için grup kalıp söz dizimi:

- `dizi|nth:1,2,3:5` her 5 öğelik gruptan 1, 2, 3 konumlarını tutar. Örnek: `[1,2,3,4,5,6,7,8,9,10]|nth:1,2,3:5` ifadesi `[1,2,3,6,7,8]` döndürür.

### `object`

Nesne verilerini işler:

- `object:array` bir nesneyi anahtar-değer çiftleri dizisine dönüştürür.
- `object:keys` nesnenin anahtarlarının dizisini döndürür.
- `object:values` nesnenin değerlerinin dizisini döndürür.
- Örnek: `{"a":1,"b":2}|object:array` ifadesi `[["a",1],["b",2]]` döndürür.

### `parse_json`

JSON metnini tipli bir değere ayrıştırır. Bir değişken JSON metni içerdiğinde koleksiyon filtrelerinden veya YAML serileştirmesinden önce bunu kullanın, örn. `'[1,2]'|parse_json|yaml:flow` ifadesi `[1,2]` döndürür.

### `reverse`

Dizeleri, dizileri ve nesnelerin giriş sırasını tersine çevirir.

- `"abc"|reverse` ifadesi `"cba"` döndürür.
- `["a","b","c"]|reverse` ifadesi `["c","b","a"]` döndürür.

### `slice`

Bir dizenin veya dizinin bir bölümünü çıkarır.

- Dizeler için: `"hello"|slice:1,4` ifadesi `"ell"` döndürür.
- Diziler için: `["a","b","c","d"]|slice:1,3` ifadesi `["b","c"]` döndürür.
- Yalnızca bir parametre sağlanırsa, o indeksten sona kadar dilimler: `"hello"|slice:2` ifadesi `"llo"` döndürür.
- Negatif indeksler sondan sayar: `"hello"|slice:-3` ifadesi `"llo"` döndürür.
- İkinci parametre dışlayıcıdır: `"hello"|slice:1,4` indeks 1, 2 ve 3'teki karakterleri içerir.
- Negatif ikinci parametre sondan öğeleri hariç tutar: `"hello"|slice:0,-2` ifadesi `"hel"` döndürür.

### `sort`

Bir diziyi artan sırada sıralar. Sayılar değere göre sıralanır.

- `[10,2,1]|sort` ifadesi `[1,2,10]` döndürür.
- `["a","c","b"]|sort:"desc"` ifadesi `["c","b","a"]` döndürür.
- Nesne dizileri için bir özellik belirtin: `[{"name":"Lin"},{"name":"Ada"}]|sort:"name"` ifadesi `[{"name":"Ada"},{"name":"Lin"}]` döndürür. Tersine çevirmek için `sort:("name", "desc")` kullanın. Özelliğe sahip olmayan öğeler en sona gider.

### `split`

Bir dizeyi alt dizeler dizisine böler.

- `"a,b,c"|split:","` ifadesi `["a","b","c"]` döndürür.
- `"hello world"|split:" "` ifadesi `["hello","world"]` döndürür.
- Ayırıcı sağlanmazsa her karaktere göre böler: `"hello"|split` ifadesi `["h","e","l","l","o"]` döndürür.
- Ayırıcı olarak düzenli ifadeler kullanılabilir: `"a1b2c3"|split:[0-9]` ifadesi `["a","b","c",""]` döndürür. Son öğe boştur çünkü dize bir ayırıcı ile biter.

### `sum`

Bir dizideki sayıları toplar. Sayı olmayan metin atlanır ve boş dizi `0` döndürür.

- `[10,"2.5","","none"]|sum` ifadesi `12.5` döndürür.
- Nesne dizileri için bir özellik belirtin: `[{"amount":10},{"amount":"2.5"}]|sum:"amount"` ifadesi `12.5` döndürür.

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

### `where`

Özelliği bir değerle eşleşen dizi öğelerini tutar. Türün de eşleşmesi gerekir, bu nedenle `1` sayısı `"1"` metniyle eşleşmez.

- `[{"title":"One","published":true},{"title":"Two","published":false}]|where:("published", true)` ifadesi `[{"title":"One","published":true}]` döndürür.
- İç içe özellikler için noktalı yol kullanın, örn. `where:("author.name", "Ada")`.

## YAML

### `yaml`

Bir değeri YAML olarak biçimlendirir. Dizeler, `"null"`, `"true"` ve `"123"` gibi dizeler dahil olmak üzere her zaman tırnak içine alınır. Gerçek null, boolean ve sayılar tırnaksız kalır.

- Diziler ve nesneler varsayılan olarak blok stili kullanır. Kompakt satır içi koleksiyonlar için `yaml:flow` kullanın.
- JSON metnini tırnaklı bir dize yerine yapılandırılmış veri olarak serileştirmek için önce `parse_json` kullanın.

### `yaml_property`

Diziler ve nesneler için girinti dahil, adlandırılmış bir YAML özelliğini biçimlendirir. Dizeler ve tipli değerler `yaml` ile aynı kuralları izler.

- `"42.567"|round:2|yaml_property:"price"` ifadesi `price: 42.57` döndürür.

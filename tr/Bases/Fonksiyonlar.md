---
permalink: bases/functions
publish: true
mobile: true
description: 'Bu sayfa, Obsidian Bases''te filtrelerde ve formüllerde özelliklerdeki verileri işlemek için kullanılan fonksiyonları ayrıntılı olarak açıklar.'
---
Fonksiyonlar, [[Tabanlara giriş|Tabanlar]]'da [[özellikler]]'den gelen verileri [[Görünümler#Filtreler|filtreler]] ve [[Formüller|formüller]] içinde işlemek için kullanılır. Fonksiyonları nasıl kullanabileceğiniz hakkında daha fazla bilgi edinmek için [[Tabanlar söz dizimi|tabanlar söz dizimi]] referansına bakın.

[[Fonksiyonlar#Global|Global]] fonksiyonlar dışında, çoğu fonksiyon değiştirmek istediğiniz değerin türüne bağlıdır:

- [[Fonksiyonlar#Any|Any]]
- [[Fonksiyonlar#Date|Date]]
- [[Fonksiyonlar#String|String]]
- [[Fonksiyonlar#Number|Number]]
- [[Fonksiyonlar#List|List]]
- [[Fonksiyonlar#Link|Link]]
- [[Fonksiyonlar#File|File]]
- [[Fonksiyonlar#Object|Object]]
- [[Fonksiyonlar#Düzenli ifade|Düzenli ifade]]

## Global

Global fonksiyonlar tür belirtmeden kullanılır.

### `escapeHTML()`

`escapeHTML(html: string): string`

- HTML'e dahil edilmek üzere güvenli hale getirmek için bir dizedeki özel karakterleri kaçış karakterleriyle işler.

### `date()`

`date(date: string): date`

- `date(string): date` sağlanan dizeyi ayrıştırır ve bir tarih nesnesi döndürür.
- `date` dizesi `YYYY-MM-DD HH:mm:ss` biçiminde olmalıdır.

### `duration()`

`duration(value: string): duration`

- Bir dizeyi süre olarak ayrıştırır. `value` dizesinin biçimi için [[Tabanlar söz dizimi#Tarih aritmetiği|tarih aritmetiği bölümüne]] bakın.
- Tarih aritmetiği yaparken sürelerin açıkça ayrıştırılması gerekmez (örneğin, `now() + '1d'`), ancak süreler üzerinde aritmetik işlem yaparken gereklidir (örneğin, `now() + (duration('1d') * 2)`).
- Sürelerle skaler değerler arasında aritmetik işlem yaparken süre solda olmalıdır. Örneğin `2 * duration('5h')` yerine `duration('5h') * 2`.

### `file()`

`file(path: string | file | url): file`

- Verilen dosya veya yol için bir dosya nesnesi döndürür.
- Örnek: `file(link("[[dosya-adı]]"))` veya `file("dosya yolu")`.

### `html()`

`html(html: string): html`

- Bir dizeyi HTML olarak işlenen bir kod parçacığına dönüştürür.

### `if()`

`if(condition: any, trueResult: any, falseResult?: any): any`

- `condition` değerlendirilecek koşuldur.
- `trueResult` koşul doğruysa çıktıdır.
- `falseResult` koşul yanlışsa isteğe bağlı çıktıdır. Verilmezse `null` olarak kabul edilir.
- `condition` doğruysa veya doğrumsu bir değerse `trueResult` döndürür, aksi halde `falseResult` döndürür.
- Örnek: `if(isModified, "Değiştirildi", "Değiştirilmedi")`

### `image()`

`image(path: string | file | url): image`

- Görünümde görseli işleyecek bir görsel nesnesi döndürür.
- Örnek: `image(gorsel-ozelligi)` veya `image("https://obsidian.md/images/obsidian-logo-gradient.svg")`

### `icon()`

`icon(name: string): icon`

- Bir görünümde simge olarak işlenecek bir değer döndürür. Simge adı desteklenen bir Lucide simgesiyle eşleşmelidir.
- Örnek: `icon("arrow-right")`.

### `link()`

`link(path: string | file, display?: value): Link`

- Bir `path` dizesini ayrıştırır ve verilen yola bağlantı olarak işlenen bir Link nesnesi döndürür.
- Bağlantının göstereceği metni değiştirmek için isteğe bağlı olarak `display` parametresini sağlayın.

### `list()`

`list(element: any): List`

- Sağlanan eleman bir listeyse, değiştirilmeden döndürür.
- Aksi halde, sağlanan `element`'i bir listeye sararak tek elemanlı bir liste oluşturur.
- Bu fonksiyon, bir özelliğin kasa genelinde dizeler veya listeler karışımı içerdiği durumlarda faydalı olabilir.
- Örnek: `list("değer")` `["değer"]` döndürür.

### `max()`

`max(value1: number, value2: number...): number`

- Sağlanan tüm sayıların en büyüğünü döndürür.

### `min()`

`min(value1: number, value2: number...): number`

- Sağlanan tüm sayıların en küçüğünü döndürür.

### `now()`

`now(): date`

- `now()` şu anı temsil eden bir tarih nesnesi döndürür.

### `number()`

`number(input: any): number`

- Sağlanan değeri bir sayı olarak döndürmeye çalışır.
- Tarih nesneleri unix epoch'undan bu yana milisaniye olarak döndürülür.
- Boolean değerler 1 veya 0 döndürür.
- Dizeler bir sayıya ayrıştırılır ve sonuç geçersizse hata döndürür.
- Örnek: `number("3.4")` `3.4` döndürür.

### `duration()`

`duration(value: string): duration`

- Bir dizeyi süre olarak ayrıştırır. `value` dizesinin biçimi için [[Tabanlar söz dizimi#Tarih aritmetiği|tarih aritmetiği bölümüne]] bakın.
- Tarih aritmetiği yaparken sürelerin açıkça ayrıştırılması gerekmez (örneğin, `now() + '1d'`), ancak süreler üzerinde aritmetik işlem yaparken gereklidir (örneğin, `now() + (duration('1d') * 2)`).
- Sürelerle skaler değerler arasında aritmetik işlem yaparken süre solda olmalıdır. Örneğin `2 * duration('5h')` yerine `duration('5h') * 2`.

### `today()`

`today(): date`

- `today()` bugünün tarihini temsil eden bir tarih nesnesi döndürür. Saat kısmı sıfıra ayarlanır.

### `random()`

`random(): number`

- `random()` 0 ile 1 arasında rastgele bir sayı döndürür.
- Sayı üretimi, bir görünüm yüklendiğinde yenilenir. Görünümler arasında gezinmek rastgele sayıyı değiştirir.

## Any

Herhangi bir değerle kullanabileceğiniz fonksiyonlar. Buna dizeler (ör. `"merhaba"`), sayılar (ör. `42`), listeler (ör. `[1,2,3]`), nesneler ve daha fazlası dahildir.

### `isTruthy()`

`any.isTruthy(): boolean`

- Değeri boolean'a zorlanmış olarak döndürür.
- Örnek: `1.isTruthy()` `true` döndürür.

### `isType()`

`any.isType(type: string): boolean`

- Değer sağlanan türdeyse true döndürür.
- Örnek: `"örnek".isType("string")` ve `true.isType("boolean")` her ikisi de true döndürür.

### `toString()`

`any.toString(): string`

- Herhangi bir değerin dize temsilini döndürür.
- Örnek: `123.toString()` `"123"` döndürür.

## Date

`date("2025-05-27")` gibi tarih ve saat ile kullanabileceğiniz fonksiyonlar. Tarih karşılaştırmaları [[Tabanlar söz dizimi#Tarih aritmetiği|tarih aritmetiği]] kullanılarak yapılabilir.

### Alanlar

Tarihler için aşağıdaki alanlar mevcuttur:

| Alan               | Tür      | Açıklama                         |
| ------------------ | -------- | -------------------------------- |
| `date.year`        | `number` | Tarihin yılı                     |
| `date.month`       | `number` | Tarihin ayı (1–12)               |
| `date.day`         | `number` | Ayın günü                        |
| `date.hour`        | `number` | Saat (0–23)                      |
| `date.minute`      | `number` | Dakika (0–59)                    |
| `date.second`      | `number` | Saniye (0–59)                    |
| `date.millisecond` | `number` | Milisaniye (0–999)               |

### `date()`

`date.date(): date`

- Saat kısmı kaldırılmış bir tarih nesnesi döndürür.
- Örnek: `now().date().format("YYYY-MM-DD HH:mm:ss")` "2025-12-31 00:00:00" gibi bir dize döndürür

### `format()`

`date.format(format: string): string`

- `format` biçim dizesidir (ör. `"YYYY-MM-DD"`).
- Tarihi bir Moment.js biçim dizesi tarafından belirtilen şekilde biçimlendirilmiş olarak döndürür.
- Örnek: `date.format("YYYY-MM-DD")` `"2025-05-27"` döndürür.

### `time()`

`date.time(): string`

- Saati döndürür.
- Örnek: `now().time()` "23:59:59" gibi bir dize döndürür

### `relative()`

`date.relative(): string`

- Tarihin mevcut tarih/saate göre okunabilir bir karşılaştırmasını döndürür.
- Örnek: `file.mtime.relative()` `3 days ago` gibi bir değer döndürür.

### `isEmpty()`

`date.isEmpty(): boolean`

- false döndürür.

## String

`"merhaba"` gibi bir karakter dizisiyle kullanabileceğiniz fonksiyonlar.

### Alanlar

| Alan            | Tür      | Açıklama                              |
| --------------- | -------- | ------------------------------------- |
| `string.length` | `number` | Dizedeki karakter sayısı              |

### `contains()`

`string.contains(value: string): boolean`

- `value` aranacak alt dizedir.
- Dize `value` içeriyorsa true döndürür.
- Örnek: `"merhaba".contains("erh")` `true` döndürür.

### `containsAll()`

`string.containsAll(...values: string): boolean`

- `values` aranacak bir veya daha fazla alt dizedir.
- Dize tüm `values` değerlerini içeriyorsa true döndürür.
- Örnek: `"merhaba".containsAll("m", "e")` `true` döndürür.

### `containsAny()`

`string.containsAny(...values: string): boolean`

- `values` aranacak bir veya daha fazla alt dizedir.
- Dize `values` değerlerinden en az birini içeriyorsa true döndürür.
- Örnek: `"merhaba".containsAny("x", "y", "e")` `true` döndürür.

### `endsWith()`

`string.endsWith(query: string): boolean`

- `query` sonda kontrol edilecek dizedir.
- Bu dize `query` ile bitiyorsa true döndürür.
- Örnek: `"merhaba".endsWith("ba")` `true` döndürür.

### `isEmpty()`

`string.isEmpty(): boolean`

- Dize karakter içermiyorsa veya mevcut değilse true döndürür.
- Örnek: `"Merhaba dünya".isEmpty()` `false` döndürür.
- Örnek: `"".isEmpty()` `true` döndürür.

### `lower()`

`string.lower(): string`

- Dizeyi küçük harfe dönüştürülmüş olarak döndürür.

### `replace()`

`string.replace(pattern: string | Regexp, replacement: string): string`

- `pattern` hedef dizede aranacak değerdir.
- `replacement` bulunan kalıpların yerine konacak değerdir.
- `pattern` bir dizeyse, kalıbın tüm oluşumları değiştirilir.
- `pattern` bir Regexp ise, `g` bayrağı yalnızca ilkinin mi yoksa tüm oluşumların mı değiştirileceğini belirler.
- Örnek: `"a:b:c:d".replace(/:/, "-")` `"a-b,c,d"` döndürürken, `"a:b:c:d".replace(/:/g, "-")` `"a-b-c-d"` döndürür.

### `repeat()`

`string.repeat(count: number): string`

- `count` dizenin tekrarlanma sayısıdır.
- Örnek: `"123".repeat(2)` `"123123"` döndürür

### `reverse()`

`string.reverse(): string`

- Dizeyi tersine çevirir.
- Örnek: `"hello".reverse()` `"olleh"` döndürür.

### `slice()`

`string.slice(start: number, end?: number): string`

- `start` dahil edilen başlangıç indeksidir.
- `end` isteğe bağlı hariç tutulan bitiş indeksidir.
- `start`'tan (dahil) `end`'e (hariç) kadar bir alt dize döndürür.
- Örnek: `"hello".slice(1, 4)` `"ell"` döndürür.
- `end` atlanırsa, dizenin sonuna kadar dilimler.

### `split()`

`string.split(separator: string | Regexp, n?: number): list`

- `separator` dizeyi bölmek için kullanılan ayırıcıdır.
- `n` isteğe bağlı bir sayıdır. Sağlanırsa, sonuç ilk `n` elemanı içerir.
- Bir alt dizeler listesi döndürür.
- Örnek: `"a,b,c,d".split(",", 3)` veya `"a,b,c,d".split(/,/, 3)` `["a", "b", "c"]` döndürür.

### `startsWith()`

`string.startsWith(query: string): boolean`

- `query` başlangıçta kontrol edilecek dizedir.
- Bu dize `query` ile başlıyorsa true döndürür.
- Örnek: `"hello".startsWith("he")` `true` döndürür.

### `title()`

`string.title(): string`

- Dizeyi başlık harflerine dönüştürür (her kelimenin ilk harfi büyük).
- Örnek: `"hello world".title()` `"Hello World"` döndürür.

### `trim()`

`string.trim(): string`

- Dizenin her iki ucundan boşlukları kaldırır.
- Örnek: `"  hi  ".trim()` `"hi"` döndürür.

## Number

`42`, `3.14` gibi sayısal değerlerle kullanabileceğiniz fonksiyonlar.

### `abs()`

`number.abs(): number`

- Sayının mutlak değerini döndürür.
- Örnek: `(-5).abs()` `5` döndürür.

### `ceil()`

`number.ceil(): number`

- Sayıyı en yakın tam sayıya yukarı yuvarlar.
- Örnek: `(2.1).ceil()` `3` döndürür.

### `floor()`

`number.floor(): number`

- Sayıyı en yakın tam sayıya aşağı yuvarlar.
- Örnek: `(2.9).floor()` `2` döndürür.

### `isEmpty()`

`number.isEmpty(): boolean`

- Sayı mevcut değilse true döndürür.
- Örnek: `5.isEmpty()` `false` döndürür.

### `round()`

`number.round(digits: number): number`

- Sayıyı en yakın tam sayıya yuvarlar.
- İsteğe bağlı olarak, belirtilen ondalık basamak sayısına yuvarlamak için `digits` parametresi sağlayın.
- Örnek: `(2.5).round()` `3` döndürür ve `(2.3333).round(2)` `2.33` döndürür.

### `toFixed()`

`number.toFixed(precision: number): string`

- `precision` ondalık basamak sayısıdır.
- Sayıyı sabit noktalı gösterimle bir dize olarak döndürür.
- Örnek: `(3.14159).toFixed(2)` `"3.14"` döndürür.

## List

`[1, 2, 3]` gibi sıralı bir eleman listesiyle kullanabileceğiniz fonksiyonlar.

### Alanlar

| Alan          | Tür      | Açıklama                         |
| ------------- | -------- | -------------------------------- |
| `list.length` | `number` | Listedeki eleman sayısı          |

### `contains()`

`list.contains(value: any): boolean`

- `value` aranacak elemandır.
- Liste `value` içeriyorsa true döndürür.
- Örnek: `[1,2,3].contains(2)` `true` döndürür.

### `containsAll()`

`list.containsAll(...values: any): boolean`

- `values` aranacak bir veya daha fazla elemandır.
- Liste tüm `values` değerlerini içeriyorsa true döndürür.
- Örnek: `[1,2,3].containsAll(2,3)` `true` döndürür.

### `containsAny()`

`list.containsAny(...values: any): boolean`

- `values` aranacak bir veya daha fazla elemandır.
- Liste `values` değerlerinden en az birini içeriyorsa true döndürür.
- Örnek: `[1,2,3].containsAny(3,4)` `true` döndürür.

### `filter()`

`list.filter(value: Boolean): list`

- `index` ve `value` değişkenlerini kullanan ve elemanın tutulup tutulmaması gerektiğini belirten bir boolean değer döndüren bir filtre fonksiyonu çağırarak bu listenin elemanlarını filtreler.
- `value` listedeki bir öğenin değeridir.
- `index` mevcut değerin indeksidir.
- Örnek: `[1,2,3,4].filter(value > 2)` `[3,4]` döndürür.

### `flat()`

`list.flat(): list`

- İç içe listeyi tek bir listeye düzleştirir.
- Örnek: `[1,[2,3]].flat()` `[1,2,3]` döndürür.

### `isEmpty()`

`list.isEmpty(): boolean`

- Liste eleman içermiyorsa true döndürür.
- Örnek: `[1,2,3].isEmpty()` `false` döndürür.

### `join()`

`list.join(separator: string): string`

- `separator` elemanlar arasına eklenecek dizedir.
- Tüm liste elemanlarını tek bir dizede birleştirir.
- Örnek: `[1,2,3].join(",")` `"1,2,3"` döndürür.

### `map()`

`list.map(value: Any): list`

- `index` ve `value` değişkenlerini kullanan ve listeye yerleştirilecek yeni değeri döndüren bir dönüştürme fonksiyonu çağırarak bu listenin her elemanını dönüştürür.
- `value` listedeki bir öğenin değeridir.
- `index` mevcut değerin indeksidir.
- Örnek: `[1,2,3,4].map(value + 1)` `[2,3,4,5]` döndürür.

### `reduce()`

`list.reduce(expression: Any, acc: Any): Any`

- Her eleman için bir ifade çalıştırarak bu listenin elemanlarını tek bir değere indirger. İfade `index`, `value` ve `acc` (biriktirici) değişkenlerini kullanabilir ve bir sonraki biriktirici değerini döndürmelidir.
- `expression` listedeki her eleman için değerlendirilir.
- `value` listedeki mevcut öğenin değeridir.
- `index` mevcut öğenin indeksidir.
- `acc` şu ana kadar biriktirilmiş değerdir.
- Örnek (toplam): `[1,2,3].reduce(acc + value, 0)` `6` döndürür.
- Örnek (maksimum): `values.filter(value.isType("number")).reduce(if(acc == null || value > acc, value, acc), null)` en büyük sayıyı döndürür, yoksa `null`.

### `reverse()`

`list.reverse(): list`

- Listeyi yerinde tersine çevirir.
- Örnek: `[1,2,3].reverse()` `[3,2,1]` döndürür.

### `slice()`

`list.slice(start: number, end?: number): list`

- `start` dahil edilen başlangıç indeksidir.
- `end` isteğe bağlı hariç tutulan bitiş indeksidir.
- Listenin `start`'tan (dahil) `end`'e (hariç) kadar olan bölümünün sığ bir kopyasını döndürür.
- Örnek: `[1,2,3,4].slice(1,3)` `[2,3]` döndürür.
- `end` atlanırsa, listenin sonuna kadar dilimler.

### `sort()`

`list.sort(): list`

- Liste elemanlarını küçükten büyüğe sıralar.
- Örnek: `[3, 1, 2].sort()` `[1, 2, 3]` döndürür.
- Örnek: `["c", "a", "b"].sort()` `["a", "b", "c"]` döndürür.

### `unique()`

`list.unique(): list`

- Yinelenen elemanları kaldırır.
- Örnek: `[1,2,2,3].unique()` `[1,2,3]` döndürür.

## Link

Bir bağlantı üzerinde kullanabileceğiniz fonksiyonlar. Bağlantılar bir dosyadan (`file.asLink()`) veya bir yoldan (`link("yol")`) oluşturulabilir.

### `asFile()`

`link.asFile(): file`

- Bağlantı geçerli bir yerel dosyaya işaret ediyorsa bir dosya nesnesi döndürür.
- Örnek: `link("[[dosya-adı]]").asFile()`

### `linksTo()`

`link.linksTo(file): boolean`

- `link` tarafından temsil edilen dosyanın `file`'a bir bağlantısı olup olmadığını döndürür.

## File

Kasadaki dosyalarla kullanabileceğiniz fonksiyonlar.

### Alanlar

Dosyalar için aşağıdaki alanlar mevcuttur:

| Alan              | Tür      | Açıklama                                                    |
| ----------------- | -------- | ----------------------------------------------------------- |
| `file.name`       | `string` | Bu dosyanın adı.                                            |
| `file.basename`   | `string` | Bu dosyanın uzantısız adı.                                  |
| `file.path`       | `string` | Bu dosyanın kasa kök dizinine göre tam yolu.                |
| `file.folder`     | `string` | Üst klasörün tam yolu.                                      |
| `file.ext`        | `string` | Bu dosyanın dosya uzantısı.                                 |
| `file.size`       | `number` | Bu dosyanın boyutu, bayt cinsinden.                         |
| `file.properties` | `object` | Bu dosyanın not özellikleri.                                |
| `file.tags`       | `list`   | Bu dosyanın etiketleri. Satır içi etiketleri içerir.       |
| `file.links`      | `list`   | Bu dosya içindeki dahili bağlantılar.                       |
| `file.ctime`      | `date`   | Bu dosyanın oluşturulduğu zaman damgası.                    |
| `file.mtime`      | `date`   | Bu dosyanın son değiştirildiği zaman damgası.               |

### `asLink()`

`file.asLink(display?: string): Link`

- `display` bağlantı için isteğe bağlı görüntüleme metni.
- İşlevsel bir bağlantı olarak işlenen bir Link nesnesi döndürür.
- Örnek: `file.asLink()`

### `hasLink()`

`file.hasLink(otherFile: file | string): boolean`

- `otherFile` kontrol edilecek başka bir dosya nesnesi veya dize yoludur.
- `file` `otherFile`'a bağlantı veriyorsa true döndürür.
- Örnek: `file.hasLink(otherFile)` `file`'dan `otherFile`'a bir bağlantı varsa `true` döndürür.

### `hasProperty()`

`file.hasProperty(name: string): boolean`

- Notun verilen dosya özelliğine sahip olup olmadığını döndürür.

### `hasTag()`

`file.hasTag(...values: string): boolean`

- `values` bir veya daha fazla etiket adıdır.
- Dosya `values` içindeki etiketlerden herhangi birine sahipse true döndürür.
- Örnek: `file.hasTag("etiket1", "etiket2")` dosyada `#etiket1` veya `#etiket2` etiketi varsa `true` döndürür. Ayrıca `#etiket1/a` veya `#etiket2/b` gibi [[Etiketler#İç içe etiketler|iç içe etiketleri]] de içerir.

### `inFolder()`

`file.inFolder(folder: string): boolean`

- `folder` kontrol edilecek klasör adıdır.
- Dosya belirtilen klasörde veya alt klasörlerinden birindeyse true döndürür.
- Örnek: `file.inFolder("notlar")` `true` döndürür.

## Object

`{"a": 1, "b": 2}` gibi anahtar-değer çiftleri koleksiyonuyla kullanabileceğiniz fonksiyonlar.

### `isEmpty()`

`object.isEmpty(): boolean`

- Nesnenin kendi özelliği yoksa true döndürür.
- Örnek: `{}.isEmpty()` `true` döndürür.

### `keys()`

`object.keys(): list`

- Nesnenin anahtarlarını içeren bir liste döndürür.

### `values()`

`object.values(): list`

- Nesnenin değerlerini içeren bir liste döndürür.

## Düzenli ifade

Düzenli ifade kalıbıyla kullanabileceğiniz fonksiyonlar. Örnek: `/abc/`.

### `matches()`

`regexp.matches(value: string): boolean`

- `value` test edilecek dizedir.
- Düzenli ifade `value` ile eşleşiyorsa true döndürür.
- Örnek: `/abc/.matches("abcde")` `true` döndürür.

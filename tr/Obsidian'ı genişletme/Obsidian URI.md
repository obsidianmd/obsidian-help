---
permalink: uri
---
Obsidian URI, Obsidian tarafından desteklenen özel bir URI protokolüdür ve bir notu açma veya oluşturma gibi çeşitli eylemleri tetiklemenize olanak tanır. Obsidian URI, otomasyon ve uygulamalar arası iş akışlarını mümkün kılar.

## URI biçimi

Obsidian URI'leri aşağıdaki biçimi kullanır:

```
obsidian://action?param1=value&param2=value
```

`action` parametresi, gerçekleştirmek istediğiniz eylemdir. Kullanılabilir eylemler şunlardır:

- `open` bir notu açmak için.
- `new` yeni bir not oluşturmak veya mevcut bir nota eklemek için.
- `daily` günlük notunuzu oluşturmak veya açmak için.
- `unique` yeni bir benzersiz not oluşturmak için.
- `search` bir arama açmak için.
- `choose-vault` kasa yöneticisini açmak için.

> [!warning] Kodlama
> Değerlerinizin doğru şekilde URI kodlanmış olduğundan emin olun. Örneğin, eğik çizgi karakterleri `/` `%2F` olarak ve boşluk karakterleri `%20` olarak kodlanmalıdır.
> 
 Bu özellikle önemlidir çünkü yanlış kodlanmış bir "ayrılmış" karakter URI'nin yorumlanmasını bozabilir. [Ayrıntılar için buraya bakın](https://en.wikipedia.org/wiki/Percent-encoding).

## Not açma

`open` eylemi bir Obsidian kasasını açar veya o kasa içindeki bir dosyayı açar.

### Örnekler

- `obsidian://open?vault=my%20vault`
  Bu, `my vault` kasasını açar. Kasa zaten açıksa, pencereye odaklanır.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Bu, `ef6ca3e3b524d22f` kimliği ile tanımlanan kasayı açar.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Bu, `my vault` kasasında `my note.md` notunu açar (dosyanın mevcut olduğu varsayılarak).
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Bu, `/home/user/my vault/path/to/my note` yolunu içeren herhangi bir kasayı arar. Ardından yolun geri kalanı `file` parametresine aktarılır. Örneğin, `/home/user/my vault` konumunda bir kasa varsa, bu `file` parametresinin `path/to/my note` olarak ayarlanmasına eşdeğer olur.


> [!tip] Bir başlık veya blok açma
> Doğru URI kodlamasıyla, bir not içindeki bir başlığa veya bloğa gidebilirsiniz. `Note%23Heading`, "Heading" adlı başlığa giderken, `Note%23%5EBlock` ise "Block" adlı bloğa gider.

### Parametreler

- `vault` kasa adı veya kasa kimliği olabilir[^1].
- `file` bir dosya adı veya kasa kökünden belirtilen dosyaya giden bir yol olabilir. Dosya uzantısı `md` ise uzantı atlanabilir.
- `path` bir dosyaya mutlak dosya sistemi yolu.
  - Bu parametreyi kullanmak hem `vault` hem de `file` parametresini geçersiz kılar.
  - Uygulamanın, belirtilen dosya yolunu içeren en spesifik kasayı aramasına neden olur.
  - Ardından yolun geri kalanı `file` parametresinin yerini alır.
- `prepend` dosyanın başına ekler ve özellikleri birleştirmeye çalışır.
- `append` dosyanın sonuna ekler ve ayrıca özellikleri birleştirmeye çalışır.
- `paneType` (isteğe bağlı) notun kullanıcı arayüzünde nerede açılacağını belirler.
  - belirtilmezse, son etkin sekme değiştirilir.
  - `paneType=tab` yeni bir sekmede açar.
  - `paneType=split` yeni bir sekme grubunda açar.
  - `paneType=window` açılır pencerede açar (yalnızca Masaüstü).

## Not oluşturma

`new` eylemi, kasada isteğe bağlı olarak bazı içeriklerle yeni bir not oluşturur.

### Örnekler

- `obsidian://new?vault=my%20vault&name=my%20note`
  Bu, `my vault` kasasını açar ve `my note` adında yeni bir not oluşturur.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Bu, `my vault` kasasını açar ve `path/to/my note` konumunda yeni bir not oluşturur.

### Parametreler

- `vault` kasa adı veya kasa kimliği olabilir[^1]. `open` eylemiyle aynıdır.
- `name` oluşturulacak dosya adı. Bu belirtilirse, dosya konumu "Yeni notlar için varsayılan yer" tercihlerinize göre seçilir.
- `file` kasa mutlak yolu, ad dahil. Belirtilirse `name` parametresini geçersiz kılar.
- `path` genel mutlak yol. `open` eylemindeki `path` seçeneğine benzer çalışır ve hem `vault` hem de `file` parametresini geçersiz kılar.
- `paneType` (isteğe bağlı) notun kullanıcı arayüzünde nerede açılacağını belirler. `open` eylemiyle aynıdır.
- `content` (isteğe bağlı) notun içeriği.
- `clipboard` (isteğe bağlı) `content` belirtmek yerine panonun içeriğini kullanır.
- `silent` (isteğe bağlı) yeni notu açmak istemiyorsanız bu parametreyi ekleyin.
- `append` (isteğe bağlı) mevcut bir dosya varsa ona ekleme yapmak için bu parametreyi ekleyin.
- `overwrite` (isteğe bağlı) mevcut bir dosya varsa üzerine yazar, ancak yalnızca `append` ayarlanmamışsa.
- `x-success` (isteğe bağlı) bkz. [[#x-callback-url parametrelerini kullanma]].

## Günlük not oluşturma veya açma

`daily` eylemi günlük notunuzu oluşturur veya açar. [[Günlük Notlar]] eklentisinin etkinleştirilmiş olması gerekir.

### Örnekler

- `obsidian://daily?vault=my%20vault`
  Bu, `my vault` kasasını açar ve günlük notu oluşturur veya açar.

### Parametreler

`daily` eylemi, `new` eylemiyle aynı parametreleri kabul eder.

## Benzersiz Not

`unique` eylemi kasada yeni bir benzersiz not oluşturur. [[Plugins/Benzersiz not oluşturucu|Benzersiz not oluşturucu]] eklentisinin etkinleştirilmiş olması gerekir.

### Örnekler

- `obsidian://unique?vault=my%20vault`
  Bu, `my vault` kasasını açar ve yeni bir benzersiz not oluşturur.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Bu, `my vault` kasasını açar ve `Hello World` içeriğiyle yeni bir benzersiz not oluşturur.

### Parametreler

- `vault` kasa adı veya kasa kimliği olabilir[^1]. `open` eylemiyle aynıdır.
- `paneType` (isteğe bağlı) notun kullanıcı arayüzünde nerede açılacağını belirler. `open` eylemiyle aynıdır.
- `content` (isteğe bağlı) notun içeriği.
- `clipboard` (isteğe bağlı) `content` belirtmek yerine panonun içeriğini kullanır.
- `x-success` (isteğe bağlı) bkz. [[#x-callback-url parametrelerini kullanma]].

## Arama açma

`search` eylemi belirtilen kasada [[Ara]] özelliğini açar ve isteğe bağlı olarak bir arama terimi uygular.

### Örnekler

- `obsidian://search?vault=my%20vault`
  Bu, `my vault` kasasını açar ve [[Ara]] özelliğini açar.
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Bu, `my vault` kasasını açar, [[Ara]] özelliğini açar ve `Obsidian` için bir arama gerçekleştirir.

### Parametreler

- `vault` kasa adı veya kasa kimliği olabilir[^1]. `open` eylemiyle aynıdır.
- `query` (isteğe bağlı) gerçekleştirilecek arama terimi.

## Kasa Yöneticisini Açma

`choose-vault` eylemi [[Kasaları yönet|kasa yöneticisini]] açar.

### Örnekler

- `obsidian://choose-vault`

## Hook ile Entegrasyon

Bu Obsidian URI eylemi [Hook](https://hookproductivity.com/) ile kullanılmak üzere tasarlanmıştır.

### Örnek

`obsidian://hook-get-address`

### Parametreler

- `vault` (isteğe bağlı) kasa adı veya kasa kimliği olabilir[^1]. Belirtilmezse, geçerli veya son odaklanılan kasa kullanılır.
- `x-success` (isteğe bağlı) bkz. [[#x-callback-url parametrelerini kullanma]].
- `x-error` (isteğe bağlı) bkz. [[#x-callback-url parametrelerini kullanma]].

`x-success` tanımlanmışsa, bu API bunu x-callback-url olarak kullanır. Aksi takdirde, geçerli odaklanılan notun Markdown bağlantısını `obsidian://open` URL'si olarak panoya kopyalar.

## x-callback-url parametrelerini kullanma

Bazı uç noktalar `x-success` ve `x-error` x-callback-url parametrelerini kabul eder. Sağlandığında, Obsidian `x-success` geri çağrısına aşağıdakileri iletir:

- `name` dosya uzantısı olmadan dosyanın adı.
- `url` bu dosya için `obsidian://` URI'si.
- `file` (yalnızca masaüstü) bu dosya için `file://` URL'si.

Örneğin, Obsidian
`obsidian://.....x-success=myapp://x-callback-url` alırsa, yanıt `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...` olur.

## Kısaltılmış biçimler

Yukarıdaki biçimlere ek olarak, kasaları ve dosyaları açmak için iki "kısaltılmış" biçim daha mevcuttur:

1. `obsidian://vault/my vault/my note`, `obsidian://open?vault=my%20vault&file=my%20note` ile eşdeğerdir.
2. `obsidian:///absolute/path/to/my note`, `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note` ile eşdeğerdir.

## Sorun giderme

### Obsidian URI'yi kaydetme

Windows ve macOS'ta, uygulamayı bir kez çalıştırmak Obsidian URI protokolünü bilgisayarınıza kaydetmek için yeterli olmalıdır.

Linux'ta bu çok daha karmaşık bir süreçtir:

1. Bir `obsidian.desktop` dosyası oluşturduğunuzdan emin olun. [Ayrıntılar için buraya bakın](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Masaüstü dosyanızın `Exec` alanını `Exec=executable %u` olarak belirttiğinden emin olun. `%u`, `obsidian://` URI'lerini uygulamaya aktarmak için kullanılır.
3. AppImage yükleyicisini kullanıyorsanız, `Obsidian-x.y.z.AppImage --appimage-extract` ile paketi açmanız gerekebilir. Ardından `Exec` yönergesinin açılmış yürütülebilir dosyayı gösterdiğinden emin olun.


[^1]: Kasa kimliği, kasaya atanan rastgele 16 karakterlik koddur, örneğin `ef6ca3e3b524d22f`. Bu kimlik bilgisayarınızdaki her klasör için benzersizdir. Kimlik, kasa değiştiricisini açıp istediğiniz kasa için bağlam menüsünde "Kasa kimliğini kopyala" seçeneğine tıklayarak bulunabilir.

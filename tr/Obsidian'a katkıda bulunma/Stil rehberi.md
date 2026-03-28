---
permalink: style-guide
publish: true
mobile: true
description: 'Bu sayfa, destek belgelerimizi yazmak için kullanılan stil kılavuzunu açıklar.'
---
Obsidian belgelendirmesi bu sayfada listelenen stil yönergelerini takip eder. Bu yönergeler, özellikle [Google geliştirici belgelendirme stil rehberi](<https://developers.google.com/style>) ve [Microsoft Stil Rehberi](https://learn.microsoft.com/en-us/style-guide/) gibi sektör en iyi uygulamalarına dayanmaktadır. Aşağıda ele alınmayan özel durumlar için ikincil referans olarak bu harici rehberlere başvurun.

> [!tip]- Katkıda bulunun
> Belgelendirmenin büyük bölümü bu stil rehberinden önce mevcuttu.
> 
> Bu stil rehberine uymayan herhangi bir şey bulursanız, lütfen [bir sorun oluşturun](https://github.com/obsidianmd/obsidian-docs/issues/new) ve [obsidianmd/obsidian-docs](https://github.com/obsidianmd/obsidian-docs) deposuna bir pull request gönderin.

## Terminoloji ve dil bilgisi

### Dil stili

İngilizce belgelendirmemiz için, dünya çapındaki kitlemize daha iyi hizmet vermek ve [[#Çeviriler]] konusunda yardımcı olmak amacıyla [Global English](https://docs.openedx.org/en/latest/documentors/references/doc_english_writing.html) kullanılması önerilir. Bu şu anlama gelir:

- Deyimlerden ve kültüre özgü ifadelerden kaçınma
- Etken çatı ve doğrudan cümle yapısı kullanma
- Karmaşık terminoloji yerine basit, yaygın kelimeleri tercih etme
- Örtük olmak yerine açık olma
- Yazım kuralları için Amerikan İngilizcesi kullanma (ör. 'organize' değil 'organise').

### Terimler

- "Hotkey" yerine "keyboard shortcut" (klavye kısayolu) tercih edin. Hotkey'i yalnızca belirli bir özelliğe atıfta bulunurken kullanın.
- Mobilde "the Obsidian app", masaüstünde "the Obsidian application" ifadesini tercih edin.
- "Synchronise" veya "synchronising" yerine "sync" veya "syncing" tercih edin.
- "Search query" yerine "search term" (arama terimi) tercih edin.
- Bir bölümü tanıtan metne atıfta bulunurken "header" yerine "heading" (başlık) tercih edin.
- "Max" yerine "maximum" (maksimum), "min" yerine "minimum" tercih edin.

### Ürün adları

Obsidian ürün adları "Obsidian" ile başlar, örneğin "Obsidian Publish" ve "Obsidian Sync".

Bir paragraf aşırı tekrarlı hale gelirse, sonraki referanslarda kısa formu kullanabilirsiniz.

Örneğin:

_Cihaza özgü yapılandırmaya izin vermek için Obsidian Sync kendi ayarlarını senkronize etmez. Sync'i her cihazınız için ayrı ayrı yapılandırmanız gerekir._

### Kullanıcı arayüzü ve etkileşimler

- Düğme metnini belirtmek için **kalın** kullanın.
- "Tap" veya "click" yerine "select" (seçin) tercih edin.
	- Mobil'e özgü talimatlar için, dokunma etkileşimlerini tanımlarken "tap" kabul edilebilir çünkü "click" mevcut değildir.
- "Side bar" yerine "sidebar" (kenar çubuğu) tercih edin.
- Komutlara veya eylemlere atıfta bulunurken "invoke" ve "execute" yerine "perform" (gerçekleştirin) tercih edin.

Bir dizi kullanıcı arayüzü etkileşimine atıfta bulunurken → (U+2192) sembolünü kullanın. Örneğin, "**[[Ayarlar]] → Topluluk Eklentileri**".

### Notlar, dosyalar ve klasörler

- Kasadaki bir Markdown dosyasına atıfta bulunurken "not" kullanın.
- Markdown dışındaki dosya uzantılarına atıfta bulunurken "dosya" kullanın.
- "Note title" yerine "note name" (not adı) tercih edin.
- "Current note" yerine "active note" (aktif not) tercih edin.
- "Directory" yerine "folder" (klasör) tercih edin.
- Özellikle dosya içeriğinin veri biçimine atıfta bulunmuyorsanız, "file format" yerine "file type" (dosya türü) tercih edin.

Notlar arasında geçiş yaparken, hedef gizliyse "aç" ifadesini, hem kaynak hem de hedef notlar ayrı bölmelerde açıksa "geçiş yap" ifadesini kullanın.

### Ayarlar için referans belgelendirmesi

Mümkün olduğunda, herhangi bir ayar açıklayıcı bir metin kullanılarak Obsidian içinde belgelenmelidir. Aşağıdaki durumlar dışında Obsidian Yardım'da belirli bir ayarı belgelemekten kaçının:

- Nasıl ve ne zaman kullanılacağı hakkında daha derinlemesine bilgi gerektiriyorsa.
- Yaygın olarak yanlış kullanılıyorsa veya sıkça soruluyorsa.
- Kullanıcı deneyimini *önemli ölçüde* değiştiriyorsa.

Belirli bir ayara dikkat çekmek istiyorsanız bir ipucu vurgulu bloğu kullanmayı düşünün.

### Yön terimleri

Yön terimlerini sıfat olarak kullanırken tire ile birleştirin. Yön isim olarak kullanıldığında tire kullanmaktan kaçının.

**Önerilen:**

- Sol alt köşede **[[Ayarlar]]** öğesini seçin.
- Sol altta **[[Ayarlar]]** öğesini seçin.

**Önerilmeyen:**

- Sol alt köşede **[[Ayarlar]]** öğesini seçin. (tiresiz sıfat)
- Sol-altta **[[Ayarlar]]** öğesini seçin. (tireli isim)

"Top-left" ve "top-right" yerine "upper-left" (sol üst) ve "upper-right" (sağ üst) tercih edin.

Ayarlara atıfta bulunurken yön belirtmeyin. Ayar kontrolünün konumu cihaza bağlıdır.

**Önerilen:**

- **Uzak kasa seç** seçeneğinin yanında **Seç** öğesini seçin.

**Önerilmeyen:**

- **Uzak kasa seç** seçeneğinin sağında **Seç** öğesini seçin.

Kullanıcı arayüzü öğelerinde dikey yönü tanımlarken, mekansal ilişkiler için "üstünde" ve "altında" kullanın. "Yukarı" ve "aşağı" ifadelerinden kaçının çünkü farklı bağlamlarda belirsiz olabilirler.

**Önerilen:**

- Arama kutusu dosya listesinin üstünde görünür.
- Ek seçenekler aşağıda mevcuttur.

**Önerilmeyen:**

- Arama kutusu dosya listesinin yukarısındadır.
- Daha fazla seçenek aşağı taraftadır.

### Talimatlar

Rehber adları, bölüm başlıkları ve adım adım talimatlar için emir kipi kullanın. Emir kipi özlü ve eylem odaklıdır, bu da talimatları takip eden kullanıcılar için daha anlaşılırdır.

- "Kurma" yerine "Kurun" tercih edin
- "Dosya taşıma" yerine "Bir dosyayı taşıyın" tercih edin
- "Notlarınızı içe aktarma" yerine "Notlarınızı içe aktarın" tercih edin

### Cümle stili büyük harf kullanımı

Başlıklar, düğmeler ve başlıklar için *başlık stili büyük harf kullanımı* yerine *cümle stili büyük harf kullanımı* tercih edin. Kullanıcı arayüzü öğelerine atıfta bulunurken her zaman arayüzdeki metinle aynı büyük/küçük harf kullanımını eşleştirin.

**Önerilen:**

- Obsidian verileri nasıl saklar

**Önerilmeyen:**

- Obsidian Verileri Nasıl Saklar

### Örnekler

Anlamsız terimler yerine gerçekçi örnekleri tercih edin.

**Önerilen:**

- `task:(ara VEYA planla)`

**Önerilmeyen:**

- `task:(foo VEYA bar)`

### Tuş adları ve klavye kısayolları

Klavye tuşlarına ve kısayollarına atıfta bulunurken tutarlı bir gösterim kullanın.

**Bireysel tuş adları:**

Klavyedeki bir karaktere adıyla atıfta bulunurken, adın hemen arkasına parantez içinde karakteri ekleyin.

**Önerilen:**

- Tire eklemek için tire (-) tuşuna basın.
- Arama yapmak için soru işareti (?) kullanın.

**Önerilmeyen:**

- Tire eklemek için tire tuşuna basın.
- Arama yapmak için ? kullanın.
- Kelimenin önüne `-` ekleyin.

**Klavye kısayolları:**

Klavye kısayollarını artı işareti etrafında boşluk bırakmadan biçimlendirin. Bir kısayol işletim sistemleri arasında farklılık gösterdiğinde her ikisini de belirtin.

**Önerilen:**

- Geri almak için `Ctrl+Z` (Windows) veya `Command+Z` (macOS) tuşlarına basın.
- Bu pencereyi kapatmak için `Escape` tuşuna basın.
- Alanlar arasında geçiş yapmak için `Tab` tuşunu kullanın.

**Önerilmeyen:**

- Geri almak için `Cmd+Z` tuşlarına basın.
- Geri almak için `Ctrl + Z` (boşluklu) tuşlarına basın.
- Geri almak için `Ctrl/Cmd+Z` tuşlarına basın.

Tüm platformlarda aynı olan kısayollar için işletim sistemini belirtmenize gerek yoktur. Bir kısayolun platforma göre farklılık gösterip göstermediğinden emin değilseniz, güvenli olmak için işletim sistemini belirtin. Windows ve Linux genellikle aynı kısayolları kullanır.

### Markdown

Markdown blokları arasında boş satır kullanın:

**Önerilen:**

```md
# Başlık 1

Bu bir bölümdür.

1. İlk madde
2. İkinci madde
3. Üçüncü madde
```

**Önerilmeyen:**

```md
# Başlık 1
Bu bir bölümdür.
1. İlk madde
2. İkinci madde
3. Üçüncü madde
```

**Listelerde uzun tire kullanımı:**

Madde işaretli listelerde kalın terimlerle açıklamalarını ayırmak için uzun tire (—) kullanın. Bağlantılı basit iç içe madde listelerinde uzun tire kullanmayın.

**Önerilen:**

- **Görünüm menüsü** — görünümler oluşturun, düzenleyin ve aralarında geçiş yapın.
- **Değerleri hesaplayın** — fiyatlar ekleyin, toplamları hesaplayın veya matematik işlemleri gerçekleştirin.

**Önerilmeyen:**

- [[Bir taban oluştur]] — Bir tabanı nasıl oluşturup gömeceğinizi öğrenin.

### Görseller

Görsel veya ekran boyutlarını tanımlarken "**genişlik** x **yükseklik** piksel" biçimini kullanın.

**Örnek:**

Önerilen görsel boyutları: 1920 x 1080 piksel.

## Bilgi yapısı

### Vurgulu blok türleri

Belirli bilgi türlerini vurgulamak için vurgulu blokları stratejik olarak kullanın:

**İpucu** (`[!tip]-`) - Kullanıcının iş akışını geliştiren pratik tavsiyeler veya en iyi uygulamalar. Kısayollar, geçici çözümler veya gerekli olmayan ama yararlı bilgiler için kullanın. Bu vurgulu bloklar başlangıçta daraltılmış olarak görünür.

**Bilgi** (`[!info]+`) - Ek bağlam, arka plan bilgisi veya açıklamalar. Bilgi anlayışı artırıyor ancak bir görevi tamamlamak için gerekli değilse kullanın. Bu vurgulu bloklar başlangıçta açık olarak görünür.

**Uyarı** (`[!warning]+`) - Veri kaybını, hataları veya istenmeyen sonuçları önleyen önemli uyarılar. Gerçekten riskli durumlar için az miktarda kullanın. Bu vurgulu bloklar asla daraltılmamalıdır.

**Örnek** (`[!example]-`) - Genel yan notlar veya ek ayrıntılar. Bazı kullanıcıların ilgili bulabileceği tali bilgiler için kullanın. Bu vurgulu bloklar başlangıçta daraltılmış olarak görünür.

**Örnekler:**
```md
> [!tip]- Klavye kısayollarını kullanın
> En çok kullanılan kısayolları ezberleyerek iş akışınızı hızlandırabilirsiniz.

> [!info]+ Bu ücretli bir eklentidir
> Bu özelliği kullanmak için ücretli bir abonelik gereklidir.

> [!warning]+ Bu işlem geri alınamaz
> Bir kasayı silmek kalıcıdır. Önce notlarınızı dışa aktarmayı düşünün.

> [!example]- Gelişmiş kullanım
> Bu ayarı Graf menüsü üzerinden de yapılandırabilirsiniz.
```

### Listeler ve düzyazı karşılaştırması

Güçlü sıralı veya nedensel ilişkileri olmayan ayrık öğeleri sunarken listeler kullanın. Öğeler birbirine dayandığında, açıklama gerektirdiğinde veya anlatı akışından faydalandığında düzyazı ve paragraflar kullanın.

**Liste kullanılacak durumlar:**
- Birbiriyle ilişkisiz özellikler kümesi
- Kurulum gereksinimleri
- Yapılandırma seçenekleri
- Sorun giderme adımları

**Düzyazı kullanılacak durumlar:**
- Bir şeyin nasıl çalıştığının açıklamaları
- Bağımlılıkları olan iş akışları
- Kavramsal genel bakışlar
- Bağlam gerektiren rehberlik

### Tablolar

Özellikleri, sürümleri veya hizalamanın anlayışı artırdığı ilgili veri noktalarını karşılaştırmak için tablolar kullanın. Basit listeler veya tek sütunlu veriler için tablolardan kaçının.

**İyi kullanım örneği:**

| Özellik | Mobil | Masaüstü |
|---------|-------|----------|
| Sync | Evet | Evet |
| Eklentiler | Hayır | Evet |
| Temalar | Sınırlı | Tam |

### Çapraz referanslar

Kullanıcıların ilgili konularda gezinmesine yardımcı olmak için dahili wiki bağlantılarını (`[[Not adı]]`) bol bol kullanın. Ancak aşırı bağlantıdan kaçının:

- Aynı terimi tek bir sayfada birden çok kez bağlantılamayın
- Yalnızca referans verilen sayfa önemli ek bağlam sağladığında bağlantılayın
- Yararlı olduğunda açıklayıcı bağlantı metni kullanın: `[[Not adı#Bölüm|açıklayıcı metin]]`

**Örnek:**

İlk bahsetme: "Kasanızı cihazlar arasında güncel tutmak için [[Obsidian Sync'e giriş|Obsidian Sync]] hakkında bilgi edinin."
Sonraki bahsetme: "Sync'i her cihaz için ayrı ayrı yapılandırabilirsiniz."

### Platforma özgü içerik

Platformlar arasında farklılık gösteren özellikleri belgelerken, içeriği düzenlemek için bölüm başlıkları kullanın.

Platforma özgü talimatları veya özellikleri ayırmak için alt bölüm başlıkları olarak `Masaüstü` ve `Mobil` kullanın.

**Önerilen:**
```md
## Araç çubuğunu özelleştirme

### Masaüstü

Masaüstü sürümünde araç çubuğunu şu şekilde özelleştirebilirsiniz:

- Simgeleri sürükleyip bırakarak araç çubuğu eylemlerinin sırasını yeniden düzenleyin.
- Belirli eylemleri gizlemek için boş bir alana sağ tıklayın ve gizlemek istediğiniz eylemlerin işaretini kaldırın.

### Mobil

Mobil sürümünde araç çubuğunu ayarlar üzerinden özelleştirebilirsiniz:

1. **[[Ayarlar]]** öğesini açın.
2. **Görünüm** bölümüne gidin.
3. **Şerit Yapılandırması** altında **Yönet** öğesine tıklayın.
```

> [!info]+ Ne zaman ayrı bölümler oluşturulmalı?
> Yalnızca içerik önemli ölçüde farklılık gösteriyorsa ayrı bölümler oluşturun. Talimatlar küçük farklılıklarla büyük ölçüde aynıysa, bunun yerine satır içi notlar kullanın.

## Simgeler ve görseller

Kelimelerle açıklaması zor olan şeyleri açıklamayı kolaylaştırdığında veya Obsidian uygulamasının önemli bölümlerini göstermeniz gerektiğinde simgeler ve görseller ekleyin. Görselleri `Attachments` klasörüne kaydedebilirsiniz.

- Görsel, eşlik ettiği metni anlamayı kolaylaştırmalıdır.

 **Örnek**: Etkinleştirildiğinde, [[Kelime sayısı]] eklentisi alt durum çubuğunuzda yeni bir giriş oluşturacaktır.
 
![[Style-guide-zoomed-example.png#interface|300]]

- Görseller `.png` veya `.svg` biçiminde olmalıdır.
- Bir görsel notta çok büyük görünüyorsa, Obsidian dışında küçültün veya [[Dosya gömme#Bir nota görsel gömme|bir nota görsel gömme]] bölümünde açıklandığı şekilde boyutlarını ayarlayın.
- Nadir durumlarda, özellikle büyük veya karmaşık görselleri bir [[Belirtme çizgileri#Katlanabilir vurgulu bloklar|katlanabilir vurgulu blok]] içine yerleştirmek isteyebilirsiniz.
- Açılır pencereler veya modaller için, görsel tüm Obsidian uygulama penceresini göstermelidir.
 ![[Style-guide-modal-example.png#interface]]

### Simgeler

[Lucide](https://lucide.dev/icons/) ve özel Obsidian simgeleri, bir özelliğin görsel temsilini sağlamak için ayrıntılı öğelerin yanında kullanılabilir.

**Örnek:** Soldaki araç çubuğunda, aktif dosyayla aynı klasörde bir tuval oluşturmak için **Yeni tuval oluşturun** ![[lucide-layout-dashboard.svg#icon]] öğesini seçin.

**Simgeler için yönergeler**

- Simgeleri `Attachments/icons` klasöründe saklayın.
- Lucide simge adından önce `lucide-` önekini ekleyin.
- Obsidian simge adından önce `obsidian-icon-` önekini ekleyin.

**Örnek:** Yeni bir tuval oluşturma simgesi `lucide-layout-dashboard` olarak adlandırılmalıdır.

- Simgelerin SVG sürümünü kullanın.
- Simgeler `18` piksel genişliğinde, `18` piksel yüksekliğinde olmalı ve `1.5` çizgi kalınlığına sahip olmalıdır. Bu ayarları SVG verilerinde düzenleyebilirsiniz.

> [!info]- SVG'de boyut ve çizgi kalınlığını ayarlama
> ```html
> <svg xmlns="http://www.w3.org/2000/svg" width="GENİŞLİK" height="YÜKSEKLİK" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="ÇİZGİ-KALINLIĞI" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
>```

- Gömülü görsellerde `icon` çapasını kullanarak simge etrafındaki boşluğu ayarlayın, böylece çevresindeki metinle düzgün bir şekilde hizalansın.
- Simgeler parantez ile çevrelenmelidir. ![[lucide-cog.svg#icon]]

**Örnek**: `![[lucide-cog.svg#icon]]`

### Görsel çapa etiketleri

Gömülü görsellere dekoratif değişiklikler eklemek için görsel çapa etiketleri mevcuttur.

> [!warning] Canlı önizleme uyarısı
> Simge çapa etiketleri **Canlı önizleme** modunda doğru şekilde görüntülenmeyecektir. Çapa etiketinin uygulandığını doğrulamak için **Okuma görünümü**'nü kullanın.

**Simge**

`![[lucide-menu.svg#icon]]`

Simge çapa etiketi, arayüz öğelerini belirtmek için kullanılan simgelerin doğru dikey hizalanmasını sağlar.

İlk menü simgesi çapa etiketini kullanır ![[lucide-menu.svg#icon]], ikinci menü simgesi ( ![[lucide-menu.svg]] ) ise kullanmaz.

**Arayüz**

`![[Vault picker.png#interface]]`

Arayüz çapa etiketi, görselin etrafına dekoratif bir kutu gölgesi ekler. İlk görselde arayüz çapa etiketi uygulanmıştır.
![[Vault picker.png#interface]]
Buna karşılık, ikinci görselde arayüz çapa etiketi uygulanmamıştır.

![[Vault picker.png]]

**Anahat**

`![[Backlinks.png#outline]]`

Anahat çapa etiketi, görselin etrafına ince bir kenarlık ekler. İlk görselde anahat çapa etiketi uygulanmıştır.

> [!tip] Farkı görmek için görselin sol alt kısmını inceleyin.

![[Backlinks.png#outline]]

İkinci görselde anahat çapa etiketi yoktur.

![[Backlinks.png]]

### Optimizasyon

Görseller sayfanın yükleme süresini yavaşlatır ve değerli [[Obsidian Publish'e giriş|Publish]] depolama alanı kaplar. Görselleri optimize etmek, görsel bütünlüğünü korurken dosya boyutunu azaltmaya olanak tanır.

Hem görseller hem de simgeler optimize edilmelidir.

> [!info] Görsel optimizasyon araçları
> Görsellerinizin boyutunu azaltmak için önerilen bazı programlar:
> - **Windows:** [FileOptimizer](https://sourceforge.net/projects/nikkhokkho/)
> - **macOS:** [ImageOptim](https://imageoptim.com/)
> - **Linux/Unix** [Trimage](https://trimage.org)
> 
> %65-75 arası bir optimizasyon oranı öneriyoruz.

## Düzen

### Bozuk bağlantılar

Pull Request'inizi göndermeden önce, lütfen üzerinde çalıştığınız çevirinin belgelendirmesindeki bozuk bağlantıları kontrol edin ve düzeltin. Bozuk bağlantılar zaman içinde doğal olarak oluşabilir, bu nedenle doğruluklarını doğrulamak belgelendirmenin kalitesini korumaya yardımcı olur.

Bozuk bağlantıları [[Topluluk Eklentileri]] veya IDE'nizde mevcut araçları kullanarak kontrol edebilirsiniz.

### Açıklamalar

Bu belgelendirme GitHub'da düzenlenir ve sosyal kartlar için [[Sosyal medya bağlantı önizlemeleri#Açıklama|açıklamaları]] ve diğer [[SEO]] öğelerini içeren [[Obsidian Publish'e giriş|Obsidian Publish]] aracılığıyla çevrimiçi barındırılır.

Üzerinde çalıştığınız sayfada bir `description` [[Özellikler|özelliği]] yoksa, lütfen bir tane ekleyin. Açıklama 150 karakter veya daha az olmalı ve sayfanın içeriğinin nesnel bir özetini sağlamalıdır.

**İyi**: Web Kırpıcı ile web sayfası meta verilerini otomatik olarak yakalayan ve düzenleyen şablonlar oluşturmayı öğrenin.
**İyileştirilebilir**: Web Kırpıcı ile web sayfalarından meta verileri otomatik olarak yakalayan ve düzenleyen şablonların nasıl oluşturulacağını öğrenin.

### Yönlendirmeler

Uygulama içinde bir eylemin nasıl gerçekleştirileceğine dair [[#Talimatlar]] yazarken veya yeniden yazarken, hem mobil hem de masaüstü sürümleri için adımlar eklediğinizden emin olun.

Bir mobil veya masaüstü cihazınıza erişiminiz yoksa, lütfen Pull Request'inizi gönderirken bunu belirtin.

## Çeviriler

Bir çeviriyi tamamlarken içeriğin tamamını çevirin. Bu aşağıdakileri içerir ancak bunlarla sınırlı değildir:

- Not adları
- Klasör adları
- Takma adlar
- Ek adları
- Alternatif bağlantı metni

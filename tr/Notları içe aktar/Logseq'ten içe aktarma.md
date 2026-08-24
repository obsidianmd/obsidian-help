---
permalink: import/logseq
cssclasses:
  - soft-embed
---
Obsidian, dosya tabanlı bir Logseq grafiğinden (artık "Logseq OG" olarak adlandırılır) notlarınızı resmi [[İçe aktarıcı|İçe aktarıcı eklentisi]] kullanarak taşımanızı sağlar. İçe aktarıcı, Logseq'in Markdown dosyalarını doğrudan okur ve Logseq'e özgü biçimlendirmeleri, Obsidian ve diğer uygulamalarla çevrimdışı kullanabileceğiniz dayanıklı dosyalara dönüştürür.

## Başlamadan önce

- Logseq grafiğinizi ve Obsidian kasanızı yedekleyin.
- Logseq grafiğinizin kök klasörünü bulun. Bu klasör normalde `pages`, `journals`, `assets` ve `logseq` adlı klasörleri içerir.
- Dosya tabanlı bir Logseq grafiği kullandığınızdan emin olun. Logseq veritabanı grafikleri henüz desteklenmemektedir.

## Logseq grafiğinizi içe aktarın

Resmi Obsidian [[İçe aktarıcı]] eklentisine ihtiyacınız vardır, [buradan indirebilirsiniz](obsidian://show-plugin?id=obsidian-importer).

1. **[[Ayarlar]] → Topluluk Eklentileri** bölümünü açın ve [İçe aktarıcıyı indirin](obsidian://show-plugin?id=obsidian-importer).
2. İçe aktarıcı eklentisini etkinleştirin.
3. [[Komut Paleti|Komut paleti]] veya şerit menü simgesini kullanarak **İçe aktarıcı**'yı açın.
4. **Dosya biçimi** altında **Logseq**'i seçin.
5. **Klasör seç** altında grafiğinizin kök klasörünü seçin. `pages` ve `journals` klasörlerini içeren klasörü seçin, bu klasörlerden birini tek başına değil.
6. Algılanan klasörleri gözden geçirin ve içe aktarmak istemediğiniz klasörleri hariç tutun.
7. Bir çıktı klasörü ve içe aktarılan eklerin nereye kaydedileceğini seçin.
8. İçe aktarma seçeneklerini gözden geçirin ve dönüştürülen notların örneklerini önizleyin.
9. **İçe aktar**'ı seçin ve içe aktarma işleminin tamamlanmasını bekleyin.

## Sınırlamalar

- Beyaz tahtalar içe aktarılmaz.
- Sorguları saklamayı tercih ederseniz, sorgular kod blokları olarak korunur.
- Dinamik Logseq şablon makroları düz metin olarak kalır.
- Logseq bilgi kartı zamanlama, PDF açıklamaları ve diğer uygulamaya özgü veriler taşınmaz.

## Ayarlar

İçe aktarıcı, aşağıdakiler de dahil olmak üzere yaygın Logseq kurallarını dönüştürür:

- Sayfa özelliklerini Obsidian [[Özellikler|Özelliklerine]].
- Sayfa takma adları, etiketler, ad alanları ve bağlantılar.
- İş akışı durumlarını onay kutusu liste işaretçilerine; öncelikler ve tarihler okunabilir metin olarak korunur.
- Blok kimlikleri, blok referansları ve blok gömme işlemlerini Obsidian bağlantıları ve gömme işlemlerine.
- Günlük dosya adları ve tarih bağlantıları.
- Vurgulamalar, numaralı listeler, Org blokları, medya gömme işlemleri ve grafiğin `assets` klasöründeki bağlantılı dosyalar.

### Günlükler

Varsayılan olarak, **Günlük notlar ayarlarını kullan** etkindir. İçe aktarılan günlükler, [[Günlük Notlar]] çekirdek eklentisi tarafından yapılandırılan klasör ve tarih biçimini kullanır. Bu, günlükleri İçe aktarıcı'da seçilen çıktı klasörünün dışına yerleştirebilir.

Bu seçeneği devre dışı bırakırsanız, günlükler seçilen çıktı klasörü içindeki bir `Journals` klasörüne yazılır ve `YYYY-MM-DD` not adı biçimini kullanır.

### Anahattları düzleştir

Logseq, bir sayfanın yapısı olarak iç içe geçmiş madde işaretlerini kullanır. Varsayılan olarak, İçe aktarıcı bu anahat yapısını korur. Anahat bloklarını paragraflar, başlıklar ve geleneksel listelerin bir bileşimine dönüştürmek için **Anahattları düzleştir** seçeneğini etkinleştirin. Görevler ve liste benzeri öğe grupları liste öğeleri olarak kalır, ancak dönüşüm sezgiseldir. Büyük bir grafiği içe aktarmadan önce önizlemede birkaç örneği gözden geçirin.

### Uyumsuz verileri koru

Logseq sorguları, bilgi kartları ve zaman takibi girişlerinin Obsidian'da doğrudan karşılıkları yoktur. İçe aktarma seçenekleri, her bir içerik türünü koruyup korumamayı seçmenize olanak tanır. Korunduğunda, düz metin olarak kalır.

- **Sorguları koru** sorguları çitli kod blokları veya satır içi kod olarak korur.
- **Bilgi kartlarını koru** `#card` işaretçilerini ve cloze sarmalayıcılarını düz metin olarak korur.
- **Zaman takibini koru** `LOGBOOK` ve `CLOCK` girişlerini düz metin olarak korur.

## Şablonlar

Logseq verilerinizin nasıl içe aktarılacağını tamamen yapılandırmak için [[İçe aktarıcı şablonları|İçe aktarıcı şablonlarını]] kullanın.

![[İçe aktarıcı şablonları#Değişkenler]]

## Sorun giderme

İçe aktarıcı hiçbir not bulamazsa, grafiğin kök klasörünü seçtiğinizden ve yapılandırılan sayfa veya günlük klasörlerinin Markdown dosyaları içerdiğinden emin olun.

Bir ek eksik olarak bildiriliyorsa, referans verilen dosyanın grafiğin `assets` klasöründe hâlâ mevcut olduğunu doğrulayın.

Diğer sorunlar için [İçe aktarıcı sorun takipçisinde](https://github.com/obsidianmd/obsidian-importer/issues) arama yapın veya küçük bir örnek grafikle bir hata raporu gönderin.

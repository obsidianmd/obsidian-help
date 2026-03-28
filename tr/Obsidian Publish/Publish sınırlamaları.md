---
permalink: publish/limitations
---
> [!tip] Harika topluluğumuzun üyeleri bu sınırlamaların bazıları için geçici çözümler geliştirmiştir. Daha fazla bilgi için lütfen Obsidian forumlarındaki [Publish Kaynakları](https://forum.obsidian.md/t/obsidian-publish-resources/74582) başlığını ziyaret edin.

## Topluluk eklentileri

Obsidian Publish, [[Topluluk Eklentileri]] için minimum düzeyde destek sunar.

Waypoint eklentisi gibi ham markdown çıktısı üreten eklentiler, verilerini işlemek için uygulamaya ihtiyaç duymadıkları için Publish ile uyumludur.

Öte yandan, Dataview veya Fantasy Statblocks gibi işlenmesi için eklenti kod bloğu gerektiren eklentiler, Publish'te varsayılan olarak çalışmaz.

## Graf

Publish, graf görünümü için CSS kullanarak temel renk özelleştirmesi sunar. `publish.css` dosyanızda [Graf Görünümü CSS değişkenlerini](https://docs.obsidian.md/Reference/CSS+variables/Plugins/Graph) kullanarak düğüm renklerini değiştirebilirsiniz.

Yayınlanan grafın, uygulamanın [[Grafik Görünümü]] bölümünde bulunan kapsamlı sıralama ve görüntüleme seçeneklerini desteklemediğini unutmayın.

## Medya dosyaları

Obsidian Publish, video akışı veya büyük ses dosyaları için optimize edilmemiştir. Bu belgelerde [[Medya dosyaları|medya dosyalarınızı]] yönetmek için bazı en iyi uygulamalar sunuyoruz.

Ziyaretçilerinizin deneyimini iyileştirmek için bunun yerine YouTube veya Vimeo gibi bir video barındırma hizmeti kullanmanızı öneririz.

Publish sitenize **50 MB'a kadar** boyutunda dosya yükleyebilirsiniz. ^publish-media-limit

## PDF'ler

Mobil cihazlarda, tabletlerde ve küçük ekranlı bilgisayarlarda, gömülü bir PDF'nin yüklenmemesi veya yalnızca ilk sayfanın görüntülenmesi gibi sorunlarla karşılaşabilirsiniz. Bu durum, mobil cihazlardaki PDF İşleyici sınırlamalarından kaynaklanmaktadır.

Mobil kullanıcılara yönelik içerikler için, harici olarak barındırılan PDF'lere bağlantılar sağlamanızı veya kullanıcıların PDF'yi doğrudan cihazlarına indirmelerine olanak tanıyan dahili bağlantılar eklemenizi öneririz.

## Arama

Publish, yayınlanan içerikte düz metin aramak için temel destek sunar. Arama sonuçlarında öncelik şu sırayla verilir:

- Dosya adları
- Takma adlar
- Başlık adları

Yukarıdakilerde eşleşme arandıktan sonra, arama yayınlanan notların düz metnini de dahil eder.

Yayınlanan sitenizin aranabilirliğini artırmak için açıklayıcı dosya adları kullanmanız, birden fazla takma ad eklemeniz ve içeriği doğru yansıtan başlık adları seçmeniz önerilir.

Ayrıca Publish, şu anda uygulamanın [[Ara#Arama sonuçlarını bir nota gömme|gömülü arama sonuçları]] özelliğini desteklememektedir.

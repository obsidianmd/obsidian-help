---
permalink: bases/views
---
Görünümler, bir [[Tabanlara giriş|Taban]]'daki bilgileri birden fazla şekilde düzenlemenize olanak tanır. Bir taban birkaç görünüm içerebilir ve her görünüm dosyaları görüntülemek, sıralamak ve filtrelemek için benzersiz bir yapılandırmaya sahip olabilir.

Örneğin, "Okuma listesi" ve "Son okunanlar" için ayrı görünümlere sahip "Kitaplar" adlı bir taban oluşturmak isteyebilirsiniz.

## Araç çubuğu

Bir tabanın üst kısmında, görünümlerle ve sonuçlarıyla etkileşim kurmanızı sağlayan bir araç çubuğu bulunur.

- ![[lucide-table.svg#icon]] **Görünüm menüsü** — görünümleri oluşturun, düzenleyin ve değiştirin.
- **Sonuçlar** — dosyaları sınırlayın, kopyalayın ve dışa aktarın.
- ![[lucide-arrow-up-down.svg#icon]] **Sırala** — dosyaları sıralayın ve gruplayın.
- ![[lucide-list-filter.svg#icon]] **Filtre** — dosyaları filtreleyin.
- ![[lucide-list.svg#icon]] **Özellikler** — görüntülenecek özellikleri seçin ve [[Formüller|formüller]] oluşturun.
- ![[lucide-search.svg#icon]] **Ara** — görüntülenen özelliklerini kullanarak öğeleri arayın.
- ![[lucide-plus.svg#icon]] **Yeni** — mevcut görünümde yeni bir dosya oluşturun.

## Görünüm ekleme ve değiştirme

Bir tabana görünüm eklemenin iki yolu vardır:

- Sol üstteki görünüm adına tıklayın ve ![[lucide-plus.svg#icon]] **Görünüm ekle**'yi seçin.
- [[Komut Paleti|Komut paletini]] kullanın ve **Bases: Add view** seçeneğini seçin.

Görünüm listenizde ilk sıradaki görünüm varsayılan olarak yüklenir. Sıralarını değiştirmek için görünümleri simgelerinden sürükleyin.

## Görünüm ayarları

Her görünümün kendine ait yapılandırma seçenekleri vardır. Görünüm ayarlarını düzenlemek için:

1. Sol üstteki görünüm adına tıklayın.
2. Yapılandırmak istediğiniz görünümün yanındaki sağ oka tıklayın.

Alternatif olarak, görünüm ayarlarına hızlıca erişmek için tabanın araç çubuğundaki görünüm adına *sağ tıklayın*.

## Düzen

Görünümler ![[lucide-table.svg#icon]] **tablo**, ![[lucide-list.svg#icon]] **liste**, ![[lucide-layout-grid.svg#icon]] **kartlar** ve ![[lucide-map.svg#icon]] **harita** dahil olmak üzere farklı düzenlerle görüntülenebilir. [[Topluluk Eklentileri]] tarafından ek düzenler eklenebilir. Bazı düzenler hâlâ geliştirilme aşamasındadır ve Obsidian'ın [[Erken erişim sürümleri|erken erişim sürümlerini]] gerektirir.

| Düzen                     | Açıklama                                                                                                                  | Uygulama&nbsp;sürümü |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [[Tablo görünümü\|Tablo]] | Dosyaları bir tabloda satır olarak görüntüler. Sütunlar notlarınızdaki [[Özellikler|özelliklerden]] doldurulur.            | 1.9                   |
| [[Kartlar görünümü\|Kartlar]] | Dosyaları bir kart ızgarası olarak görüntüler. Görsellerle galeri benzeri görünümler oluşturmanıza olanak tanır.        | 1.9                   |
| [[Liste görünümü\|Liste]] | Dosyaları madde işaretli veya numaralı işaretçilerle bir [[Temel biçimlendirme söz dizimi#Listeler\|liste]] olarak görüntüler. | 1.10                  |
| [[Harita görünümü\|Harita]] | Dosyaları etkileşimli bir harita üzerinde iğneler olarak görüntüler. Haritalar eklentisini gerektirir.                  | 1.10                  |


## Filtreler

Filtre eklemek için tabanın üst kısmındaki ![[lucide-list-filter.svg#icon]] **Filtre** menüsünü açın.

Filtresiz bir taban, kasanızdaki tüm dosyaları gösterir. Filtreler, sonuçları yalnızca belirli kriterleri karşılayan dosyaları gösterecek şekilde daraltır. Örneğin, yalnızca belirli bir [[Etiketler|etikete]] sahip veya belirli bir klasördeki dosyaları görüntülemek için filtreler kullanabilirsiniz. Birçok filtre türü mevcuttur.

Filtreler, ![[lucide-list-filter.svg#icon]] **Filtre** menüsündeki iki bölümden seçim yaparak bir tabandaki tüm görünümlere veya yalnızca tek bir görünüme uygulanabilir.

- **Tüm görünümler** filtreleri tabandaki tüm görünümlere uygular.
- **Bu görünüm** filtreleri etkin görünüme uygular.

#### Bir filtrenin bileşenleri

Filtrelerin üç bileşeni vardır:

1. **Özellik** — kasanızdaki [[Özellikler|özelliklerden]], [[Tabanlar söz dizimi#Dosya özellikleri|dosya özellikleri]] dahil, birini seçmenize olanak tanır.
2. **Operatör** — koşulları nasıl karşılaştıracağınızı seçmenize olanak tanır. Kullanılabilir operatörlerin listesi özellik tipine (metin, tarih, sayı, vb.) bağlıdır.
3. **Değer** — karşılaştırdığınız değeri seçmenize olanak tanır. Değerler matematik ve [[Fonksiyonlar|fonksiyonlar]] içerebilir.

#### Bağlaçlar

- **Aşağıdakilerin tümü doğru** bir `ve` ifadesidir — sonuçlar yalnızca filtre grubundaki *tüm* koşullar karşılanırsa gösterilir.
- **Aşağıdakilerden herhangi biri doğru** bir `veya` ifadesidir — filtre grubundaki koşullardan *herhangi biri* karşılanırsa sonuçlar gösterilir.
- **Aşağıdakilerin hiçbiri doğru değil** bir `değil` ifadesidir — filtre grubundaki koşullardan *herhangi biri* karşılanırsa sonuçlar gösterilmez.

#### Filtre grupları

Filtre grupları, bağlaç kombinasyonları oluşturarak daha karmaşık mantık kurmanıza olanak tanır.

#### Gelişmiş filtre düzenleyicisi

**Gelişmiş filtre** düzenleyicisini kullanmak için kod düğmesine ![[lucide-code-xml.svg#icon]] tıklayın. Bu, filtrenin ham [[Tabanlar söz dizimi|söz dizimini]] görüntüler ve tıkla-ve-seç arayüzüyle gösterilemeyen daha karmaşık [[Fonksiyonlar|fonksiyonlarla]] birlikte kullanılabilir.

## Sonuçları sıralama ve gruplama

Bir görünümdeki sonuçları sıralamak ve gruplamak için ![[lucide-arrow-up-down.svg#icon]] **Sırala** menüsünü açın.

Sonuçları bir veya daha fazla özelliğe göre artan veya azalan sırada düzenleyebilirsiniz. Bu, notları ada, son düzenleme zamanına veya formüller dahil herhangi bir özelliğe göre listelemeyi kolaylaştırır.

Ayrıca benzer öğeleri görsel olarak ayrı bölümler halinde düzenlemek için sonuçları bir özelliğe göre gruplayabilirsiniz. Şu anda Obsidian yalnızca bir özelliğe göre gruplamayı desteklemektedir.

### Sıralama ekleme

1. Görünümün üst kısmındaki ![[lucide-arrow-up-down.svg#icon]] **Sırala** menüsünü açın.
2. Sıralama (veya gruplama) yapmak istediğiniz özelliği seçin.
3. Birden fazla sıralamanız varsa, önceliklerini değiştirmek için ![[lucide-grip-vertical.svg#icon]] tutma kolunu kullanarak yukarı veya aşağı sürükleyin.

Sonuçları sıralama seçenekleri özellik tipine bağlıdır:

- **Metin**: *alfabetik* (A→Z) veya *ters alfabetik sıra* (Z→A) ile sıralayın.
- **Sayı**: *küçükten büyüğe* (0→1) veya *büyükten küçüğe* (1→0) sıralayın.
- **Tarih ve saat**: *eskiden yeniye* veya *yeniden eskiye* sıralayın.

### Sıralamayı kaldırma

1. Görünümün üst kısmındaki ![[lucide-arrow-up-down.svg#icon]] **Sırala** menüsünü açın.
2. Kaldırmak istediğiniz sıralama veya grubun yanındaki ![[lucide-trash-2.svg#icon]] çöp kutusu düğmesine tıklayın.

## Sonuçları sınırlama, kopyalama ve dışa aktarma

### Sonuçları sınırlama

*Sonuçlar* menüsü görünümdeki sonuç sayısını gösterir. Sonuç sayısını sınırlamak ve ek eylemlere erişmek için sonuçlar düğmesine tıklayın.

### Panoya kopyala

Bu eylem görünümü panonuza kopyalar. Panonuza kopyalandıktan sonra bir Markdown dosyasına veya Google Sheets, Excel ve Numbers gibi elektronik tablolar dahil diğer belge uygulamalarına yapıştırabilirsiniz.

### CSV olarak dışa aktar

Bu eylem mevcut görünümünüzün bir CSV dosyasını kaydeder.

## Bir görünümü gömme

Taban dosyalarını `![[Dosya.base]]` söz dizimini kullanarak [[Dosya gömme|herhangi bir dosyaya]] gömebilirsiniz. Listedeki ilk görünüm kullanılacaktır. Görünüm menüsünde görünümleri sürükleyerek sırayı değiştirebilirsiniz.

Bir gömme için varsayılan görünümü belirtmek üzere `![[Dosya.base#Görünüm]]` kullanın.

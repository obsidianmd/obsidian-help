---
permalink: plugins/graph
publish: true
mobile: true
description: 'Graf görünümü, kasanızdaki notlar arasındaki ilişkileri görselleştirmenizi sağlayan bir çekirdek eklentidir.'
---
Grafik Görünümü, kasanızdaki notlar arasındaki ilişkileri görselleştirmenizi sağlayan bir [[Yerleşik Eklentiler|çekirdek eklentidir]].

Grafik Görünümü'nü açmak için [[Araç çubuğu]]'ndaki **Grafik görünümünü aç** seçeneğine tıklayın.

- Daireler notları veya _düğümleri_ temsil eder.
- Çizgiler iki düğüm arasındaki [[Dahili bağlantılar]]ı temsil eder.

Belirli bir düğüme referans veren düğüm sayısı arttıkça, düğüm daha büyük olur.

Grafikteki notlarla etkileşim kurmak için:

- Bağlantılarını vurgulamak için her bir dairenin üzerine gelin.
- İlgili notu açmak için grafikteki bir nota tıklayın.
- Mevcut eylemleri içeren bağlam menüsünü açmak için bir nota sağ tıklayın.

Grafikte gezinmek için:

- Farenizin kaydırma tekerleğini kullanarak veya `+` ve `-` tuşlarını kullanarak yakınlaştırıp uzaklaştırın.
- Fare imlecinizle sürükleyerek veya ok tuşlarını kullanarak grafiği hareket ettirin.

Hareketleri hızlandırmak için klavyeyi kullanırken Shift tuşunu basılı tutabilirsiniz.

## Ayarlar

Grafik ayarlarını açmak için grafik görünümünün sağ üst köşesindeki dişli çark simgesine tıklayın.

Yaptığınız değişiklikleri sıfırlamak için ayarlar kutusunun sağ üst köşesindeki **Varsayılan ayarları geri yükle** seçeneğine tıklayın.

### Filtreler

Bu bölüm, grafikte hangi düğümlerin gösterileceğini kontrol eder.

- **Dosya ara**, bir arama terimi girerek notları filtrelemenizi sağlar. Daha gelişmiş arama terimleri yazma hakkında bilgi edinmek için [[Ara]] bölümüne bakın.
- **Etiketler**, etiketlerin grafikte gösterilip gösterilmeyeceğini ayarlar.
- **Ekler**, eklerin grafikte gösterilip gösterilmeyeceğini ayarlar.
- **Yalnızca mevcut dosyalar**, kasanızda var olan notların gösterilip gösterilmeyeceğini ayarlar. Bir nota bağlantı vermek için notun mevcut olması gerekmediğinden, bu seçenek grafiğinizi kasanızda gerçekten bulunan notlarla sınırlamaya yardımcı olabilir.
- **Bağlantısızlar**, herhangi bir bağlantısı olmayan notların gösterilip gösterilmeyeceğini ayarlar.

> [!info] Hariç tutulan dosyalar
> [[Ayarlar#Hariç tutulan dosyalar|Hariç tutulan dosyalar]] kalıplarınızla eşleşen dosyalar Grafik Görünümü'nde görünmez.

### Gruplar

Notları birbirinden ayırt etmek için renk kullanarak not grupları oluşturun.

Yeni bir grup oluşturmak için:

1. **Yeni yer imi grubu** seçeneğine tıklayın.
2. Arama kutusuna, gruba eklemek istediğiniz notlar için bir arama terimi yazın.
3. Gruba bir renk vermek için renkli daireye tıklayın.

Daha gelişmiş arama terimleri yazma hakkında bilgi edinmek için [[Ara]] bölümüne bakın.

### Göster

Bu bölüm, grafikteki düğümlerin ve bağlantıların nasıl görselleştirileceğini kontrol eder.

- **Oklar**, her bağlantının yönünün gösterilip gösterilmeyeceğini ayarlar.
- **Metin solma eşiği**, her notun adı için metin şeffaflığını kontrol eder.
- **Düğüm Boyutu**, her notu temsil eden dairenin boyutunu kontrol eder.
- **Bağlantı kalınlığı**, her bağlantının çizgi genişliğini kontrol eder.
- **Hareketlendirmek**, bir [[#Hızlandırılmış animasyon başlatma|hızlandırılmış animasyon]] başlatır.

### Güçler

Bu bölüm, grafikteki her düğüme etki eden kuvvetleri kontrol eder.

- **Merkez gücü**, grafiğin ne kadar kompakt olduğunu kontrol eder. Daha yüksek bir değer daha dairesel bir grafik oluşturur.
- **İtme kuvveti**, bir düğümün diğer düğümleri kendisinden ne kadar uzağa ittiğini kontrol eder.
- **Bağlantı gücü**, her bağlantı üzerindeki çekim kuvvetini kontrol eder. Bağlantı bir lastik bant olsaydı, bağlantı gücü bandın ne kadar gergin veya gevşek olduğunu kontrol ederdi.
- **Bağlantı mesafesi**, her not arasındaki çizgilerin uzunluğunu kontrol eder.

## Hızlandırılmış animasyon başlatma

Notlar ve ekler, oluşturulma zamanlarına göre kronolojik sırada görünür.

![[obsidian-graph-view.png#interface]]

## Yerel Grafik

Yerel Grafik görünümünü açmak için **Yerel grafiği aç** komutunu kullanın. Grafik Görünümü kasanızdaki tüm notları gösterirken, yerel Grafik görünümü etkin nota bağlı notları gösterir.

Yerel Grafik görünümü, genel Grafik görünümü için mevcut olan tüm [[#Ayarlar]]ı kullanabilir. Ayrıca yerel grafiğin derinliğini de değiştirebilirsiniz. Her derinlik seviyesi, önceki derinlikte ortaya çıkan notlara bağlı notları gösterir. Yerel Grafik derinliğini kontrol etmek için yerel Grafik Filtre Ayarları panelinin üstündeki kaydırıcıyı kullanın.

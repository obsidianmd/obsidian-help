---
permalink: bases/views/map
---
Harita, [[Tabanlara giriş|Tabanlar]]'da kullanabileceğiniz bir [[Görünümler|görünüm]] türüdür. [Maps eklentisinin](obsidian://show-plugin?id=maps) yüklenmesini gerektirir.

Dosyaları, her dosya için işaretçilerin bulunduğu etkileşimli bir harita ve o dosyanın özelliklerini gösteren bir önizleme olarak görüntülemek için görünüm menüsünden ![[lucide-map.svg#icon]]  **Harita**'yı seçin.

![[bases-map-places.png#interface]]

## Maps eklentisini yükleme

Harita görünümleri Obsidian 1.10 gerektirir. [Maps eklentisi](obsidian://show-plugin?id=maps), ayrı olarak indirebileceğiniz resmi bir [[Topluluk Eklentileri|topluluk eklentisidir]].

1. [[Topluluk Eklentileri#Topluluk eklentisi yükleme]] bölümündeki talimatları izleyin
2. Listeden [Maps](obsidian://show-plugin?id=maps) eklentisini indirin ve etkinleştirin

## Örnek

Başlamak için **Eyfel Kulesi** adında bir not oluşturun ve aşağıdaki özellikleri içine kopyalayın:

```yaml
---
coordinates:
  - "48.85837"
  - "2.294481"
icon: "landmark"
color: "red"
tags:
  - places
---
```

Yukarıdaki kodun anlamı şöyledir:

| Özellik       | Değer                    |                                                                                                                                                                       |
| ------------- | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `coordinates` | `48.85837`<br>`2.294481` | Koordinatlar `enlem, boylam` olarak saklanır. Haritada bir konuma sağ tıklayıp **Koordinatları kopyala**'yı seçerek koordinatları alabilirsiniz.                       |
| `icon`        | `landmark`               | [Lucide kütüphanesinden](https://lucide.dev/) bir simge adı.                                                                                                         |
| `color`       | `red`                    | Geçerli bir CSS değeri: hex, RGB, adlandırılmış renk vb.                                                                                                              |
| `tags`        | `places`                 | Tabanımızda harita işaretçilerini bulmak için kullanacağımız etiket.                                                                                                   |
Şimdi `places` etiketi için bir filtre içeren bir harita görünümü oluşturun ve yukarıda listelenen özellikleri kullanarak işaretçi koordinatlarını, simgesini ve rengini ayarlayın.

Ayrıca bu [örnek dosyaları](https://github.com/obsidianmd/obsidian-maps/tree/master/examples) Obsidian'da açarak işaretçiler, simgeler ve renkler önceden yapılandırılmış çalışan harita görünümlerini görebilirsiniz.

## Ayarlar

Harita görünümü ayarları [[Görünümler#Görünüm ayarları|Görünüm ayarları]]'nda yapılandırılabilir.

- Gömülü yükseklik
- Merkez koordinatları
- Yakınlaştırma kısıtlamaları
- İşaretçi koordinatları, rengi ve simgesi
- Arka plan

### İşaretçiler

#### Koordinatlar

Haritada iğneler görüntülemek için [[Görünümler#Görünüm ayarları|görünüm ayarları]]'na gidin ve bir **işaretçi koordinatları** özelliği seçin. Özellik enlem ve boylam koordinatlarını içermelidir. Aşağıdaki biçimler kabul edilir:

```yaml
# Metin özelliği
coordinates: "lat, lng"

# Liste özelliği
coordinates:
  - "lat"
  - "lng"
```

Koordinatları ayrı `latitude` ve `longitude` özellikleri olarak saklıyorsanız, bunları bir [[Tabanlar söz dizimi#Formüller|formül]] özelliği ile birleştirebilirsiniz. Şu formülü kullanarak bir koordinat dizisi olarak tanımlayın: `[latitude, longitude]`.

#### Simgeler

Bir **işaretçi simgeleri** özelliği tanımlayarak işaretçilere simgeler ekleyin. Örneğin notlarınıza `icon` adında bir özellik ekleyip Obsidian'ın yerleşik [Lucide kütüphanesinden](https://lucide.dev/icons/) `landmark` veya `utensils` gibi değerler verebilirsiniz.

##### Simgeleri tanımlamak için formül kullanma

Diyelim ki tüm restoranların haritada aynı simgeye sahip olmasını istiyorsunuz:

1. **Restoranlar** adında bir not oluşturun ve `utensils` değerine sahip `icon` adında bir özellik ekleyin.
2. Restoran notlarına `[[Restoranlar]]` notuna bağlanan `type` adında bir özellik verin.
3. Tabanınıza aşağıdaki kodla `Type icon` adında bir formül özelliği ekleyin:
	```js
	list(type)[0].asFile().properties.icon
	```
4. Görünüm ayarlarında işaretçi simgesi olarak `Type icon`'ı seçin.

İşte oldu! Artık haritanız, mekanın kendisinden değil mekanın *türünden* gelen simgeleri görüntüleyecek.

#### Renkler

İşaretçilerin rengini ayarlayın. RGB `rgb(0,0,0)`, HEX `#000` veya `var(--color-blue)` gibi CSS değişkenleri olarak değer kabul eder. Yukarıdaki simge örneğinde olduğu gibi, renkleri dinamik olarak tanımlamak için bir formül özelliği kullanabilirsiniz.

### Arka plan

#### Harita karoları

Harita karoları, dijital haritaları görüntülemenin standart bir yoludur. Haritaları benzersiz stiller, renkler ve yazı tipleriyle özelleştirmek için kullanabileceğiniz birçok hizmet vardır. Maps hem raster hem de vektör karoları destekler ve TileJSON URL'leri dahil çoğu karo URL'sini kabul eder.

[OpenFreeMap](https://openfreemap.org/) ücretsiz olarak kullanabileceğiniz birkaç stil sunar. **Harita karoları** ayarında aşağıdaki URL'lerden birini kullanmayı deneyin:

| Ad       | URL                                              |
| -------- | ------------------------------------------------ |
| Dark     | `https://tiles.openfreemap.org/styles/dark`      |
| Positron | `https://tiles.openfreemap.org/styles/positron`  |
| Liberty  | ``https://tiles.openfreemap.org/styles/liberty`` |
#### Faydalı bağlantılar

- Harita karolarını özelleştirmek için [Maputnik](https://maputnik.github.io/).
- Harita karolarını kendi sunucunuzda barındırmak için [Protomaps](https://protomaps.com/).
- Ücretsiz katmanları olan diğer barındırma hizmetleri arasında [MapTiler](https://www.maptiler.com/) ve [Mapbox](https://www.mapbox.com/) bulunmaktadır.


## İpuçları

[[Formüller]] kullanarak popüler haritalama hizmetlerine bağlantı verebilirsiniz. Örneğin, iğneniz aşağıdaki formülü kullanarak Google Haritalar'a bir bağlantı gösterebilir:

```js
link("https://www.google.com/maps/search/" + file.name.replace(" ","+"),"Google Maps")
```

## Sorun giderme

Maps eklentisini ilk yüklediğinizde harita boş görünüyorsa, [[Obsidian'ı Güncelle|Obsidian yükleyici sürümünü güncellemeyi]] deneyin.

[Maps eklentisi](https://github.com/obsidianmd/obsidian-maps) açık kaynaklıdır. Hata raporları, özellik istekleri ve pull request'ler ile katkıda bulunabilirsiniz.

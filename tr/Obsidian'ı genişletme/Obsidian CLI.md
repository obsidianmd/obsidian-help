---
permalink: cli
description: Obsidian'da yapabileceğiniz her şey komut satırından yapılabilir.
---
Obsidian CLI, Obsidian'ı terminalinizden betik yazma, otomasyon ve harici araçlarla entegrasyon amacıyla kontrol etmenizi sağlayan bir komut satırı arayüzüdür.

Obsidian'da yapabileceğiniz her şeyi komut satırından da yapabilirsiniz. Obsidian CLI ayrıca geliştirici araçlarına erişmek, öğeleri incelemek, ekran görüntüsü almak, eklentileri yeniden yüklemek ve daha fazlası için [[#Geliştirici komutları|geliştirici komutları]] içerir.

![[obsidian-cli.mp4#interface]]

> [!warning] Obsidian 1.12 yükleyicisi gerektirir
> CLI'ı kullanmak için Obsidian 1.12 yükleyicisi gereklidir. [[Obsidian'ı Güncelle#Yükleyici güncellemeleri|Yükleyici sürümü güncelleme rehberine]] bakın.

## Obsidian CLI'ı Kurma

En son [[Obsidian'ı Güncelle|Obsidian yükleyici sürümüne]] (1.12.7+) yükseltin.

Obsidian'da Obsidian CLI'ı etkinleştirin:

1. **Ayarlar** → **Genel** bölümüne gidin.
2. **Komut satırı arayüzü**'nü etkinleştirin.
3. Obsidian CLI'ı kaydetmek için ekrandaki talimatları izleyin.

Obsidian CLI kurulumunda sorun yaşıyorsanız [[#Sorun Giderme]] bölümüne bakın.

## Başlarken

Obsidian CLI hem tek komutları hem de etkileşimli yardım ve otomatik tamamlama içeren bir terminal kullanıcı arayüzünü (TUI) destekler.

> [!info] Obsidian uygulaması çalışıyor olmalıdır
> Obsidian CLI, Obsidian uygulamasının çalışıyor olmasını gerektirir. Obsidian çalışmıyorsa, çalıştırdığınız ilk komut Obsidian'ı başlatır.
>
> Masaüstü uygulaması olmadan senkronize mi etmek istiyorsunuz? [[Başsız Sync|Başsız Sync]]'e bakın.

### Komut çalıştırma

TUI'yi açmadan tek bir komut çalıştırın:

```shell
# Yardım komutunu çalıştır
obsidian help
```

### Terminal arayüzünü kullanma

`obsidian` yazarak TUI'yi kullanın. Sonraki komutlar `obsidian` olmadan girilebilir.

```shell
# TUI'yi aç, ardından yardımı çalıştır
obsidian
help
```

TUI; otomatik tamamlama, komut geçmişi ve ters arama destekler. Komut geçmişinizi aramak için `Ctrl+R` kullanın. Tüm kullanılabilir kısayollar için [[#Klavye kısayolları]] bölümüne bakın.

## Örnekler

Obsidian CLI ile yapabileceklerinize birkaç örnek.

### Günlük kullanım

```shell
# Bugünün günlük notunu aç
obsidian daily

# Günlük notunuza bir görev ekle
obsidian daily:append content="- [ ] Market alışverişi yap"

# Kasanızda arama yapın
obsidian search query="toplantı notları"

# Etkin dosyayı oku
obsidian read

# Günlük notunuzdaki tüm görevleri listele
obsidian tasks daily

# Şablondan yeni bir not oluştur
obsidian create name="Paris Gezisi" template=Seyahat

# Kasanızdaki tüm etiketleri sayılarıyla listele
obsidian tags counts

# Bir dosyanın iki sürümünü karşılaştır
obsidian diff file=README from=1 to=3
```

### Geliştiriciler için

Eklenti ve tema geliştirme için birçok [[#Geliştirici komutları]] mevcuttur. Bu komutlar, ajansal kodlama araçlarının otomatik olarak test etmesine ve hata ayıklamasına olanak tanır.

```shell
# Geliştirici araçlarını aç
obsidian devtools

# Geliştirdiğiniz bir topluluk eklentisini yeniden yükle
obsidian plugin:reload id=my-plugin

# Uygulamanın ekran görüntüsünü al
obsidian dev:screenshot path=screenshot.png

# Uygulama konsolunda JavaScript çalıştır
obsidian eval code="app.vault.getFiles().length"
```

## Nasıl Yapılır

### Parametreler ve bayraklar kullanma

Komutlar **parametreler** ve **bayraklar** kullanabilir. Çoğu komut herhangi bir parametre veya bayrak gerektirmez. Zorunlu parametreler `required` olarak işaretlenmiştir. Örneğin:

```shell
# Varsayılan "Başlıksız" adını kullanarak yeni bir not oluştur
obsidian create
```

Bir **parametre** bir değer alır, `parametre=değer` şeklinde yazılır. Değerde boşluk varsa tırnak içine alın:

```shell
# "Not" adında, "Merhaba dünya" içerikli yeni bir not oluştur
obsidian create name=Not content="Merhaba dünya"
```

Bir **bayrak** değer almayan bir boolean anahtarıdır. Ekleyerek etkinleştirirsiniz, örneğin `open` ve `overwrite` birer bayraktır:

```shell
# Bir not oluştur ve aç
obsidian create name=Not content="Merhaba" open overwrite
```

Çok satırlı içerik için yeni satır olarak `\n` kullanın. Sekme için `\t` kullanın.

```bash
obsidian create name=Not content="# Başlık\n\nGövde metni"
```

### Bir kasayı hedefleme

Terminalinizin mevcut çalışma dizini bir kasa klasörüyse, o kasa varsayılan olarak kullanılır. Aksi takdirde, şu anda etkin olan kasa kullanılır.

Belirli bir kasayı hedeflemek için `vault=<ad>` veya `vault=<kimlik>` kullanın. Bu, komutunuzdan önce ilk parametre olmalıdır:

```shell
obsidian vault=Notlar daily
obsidian vault="Kasam" search query="test"
```

TUI'de farklı bir kasaya geçmek için `vault:open <ad>` veya `<kimlik>` kullanın.

### Bir dosyayı hedefleme

Birçok komut, belirli bir dosyayı hedeflemek için `file` ve `path` parametrelerini kabul eder. İkisi de sağlanmazsa, komut varsayılan olarak etkin dosyayı kullanır.

- `file=<ad>`, dosyayı [[Dahili bağlantılar|wiki bağlantıları]] ile aynı bağlantı çözümlemesini kullanarak çözer, tam yol veya uzantı gerektirmeden dosya adına göre eşleşir.
- `path=<yol>`, kasa kökünden tam yolu gerektirir, örn. `klasör/not.md`.

```shell
# "Tarif.md" bu adla tek dosyaysa bunlar eşdeğerdir
obsidian read file=Tarif
obsidian read path="Şablonlar/Tarif.md"
```

### Çıktıyı kopyalama

Herhangi bir komuta `--copy` ekleyerek çıktıyı panoya kopyalayın:

```shell
read --copy
search query="TODO" --copy
```


## Genel komutlar

### `help`

Tüm kullanılabilir komutların listesini göster.

| Parametre   | Açıklama                             |
| ----------- | ------------------------------------ |
| `<komut>`   | Belirli bir komut için yardım göster. |

### `version`

Obsidian sürümünü göster.

### `reload`

Uygulama penceresini yeniden yükle.

### `restart`

Uygulamayı yeniden başlat.


## Tabanlar

[[Tabanlara giriş|Tabanlar]] için komutlar.

### `bases`

Kasadaki tüm `.base` dosyalarını listele.

### `base:views`

Mevcut taban dosyasındaki görünümleri listele.

### `base:create`

Bir tabanda yeni bir öğe oluştur. Dosya belirtilmezse etkin taban görünümünü varsayılan olarak kullanır.

```bash
file=<ad>          # taban dosya adı
path=<yol>         # taban dosya yolu
view=<ad>          # görünüm adı
name=<ad>          # yeni dosya adı
content=<metin>    # başlangıç içeriği

open               # oluşturduktan sonra dosyayı aç
newtab             # yeni sekmede aç
```

### `base:query`

Bir tabanı sorgula ve sonuçları döndür.

```bash
file=<ad>                      # taban dosya adı
path=<yol>                     # taban dosya yolu
view=<ad>                      # sorgulanacak görünüm adı
format=json|csv|tsv|md|paths   # çıktı biçimi (varsayılan: json)
```

## Yer İmleri

[[Yer İmleri]] için komutlar.

### `bookmarks`

Yer imlerini listele.

```bash
total              # yer imi sayısını döndür
verbose            # yer imi türlerini dahil et
format=json|tsv|csv  # çıktı biçimi (varsayılan: tsv)
```

### `bookmark`

Yer imi ekle.

```bash
file=<yol>         # yer imlenecek dosya
subpath=<altyol>   # dosya içindeki alt yol (başlık veya blok)
folder=<yol>       # yer imlenecek klasör
search=<sorgu>     # yer imlenecek arama sorgusu
url=<url>          # yer imlenecek URL
title=<başlık>     # yer imi başlığı
```

## Komut paleti

[[Komut Paleti]] ve [[Kısayol tuşları]] için komutlar. Bu, eklentiler tarafından kaydedilen tüm komutları içerir.

### `commands`

Kullanılabilir komut kimliklerini listele.

```bash
filter=<önek>      # kimlik önekine göre filtrele
```

### `command`

Bir Obsidian komutu çalıştır.

```bash
id=<komut-kimliği>    # (zorunlu) çalıştırılacak komut kimliği
```

### `hotkeys`

Tüm komutlar için klavye kısayollarını listele.

```bash
total              # klavye kısayolu sayısını döndür
verbose            # kısayolun özel olup olmadığını göster
format=json|tsv|csv  # çıktı biçimi (varsayılan: tsv)
```

### `hotkey`

Bir komutun klavye kısayolunu al.

```bash
id=<komut-kimliği>    # (zorunlu) komut kimliği

verbose            # özel mi yoksa varsayılan mı göster
```

## Günlük notlar

[[Günlük Notlar]] için komutlar.

### `daily`

Günlük notu aç.

```bash
paneType=tab|split|window    # açılacak panel türü
```

### `daily:path`

Günlük not yolunu al. Dosya henüz oluşturulmamış olsa bile beklenen yolu döndürür.

### `daily:read`

Günlük not içeriğini oku.

### `daily:append`

Günlük nota içerik ekle (sona).

```bash
content=<metin>    # (zorunlu) eklenecek içerik
paneType=tab|split|window    # açılacak panel türü

inline             # yeni satır olmadan ekle
open               # ekledikten sonra dosyayı aç
```

### `daily:prepend`

Günlük nota içerik ekle (başa).

```bash
content=<metin>    # (zorunlu) eklenecek içerik
paneType=tab|split|window    # açılacak panel türü

inline             # yeni satır olmadan ekle
open               # ekledikten sonra dosyayı aç
```

## Dosya geçmişi

### `diff`

Yerel [[Dosya Kurtarma]] ve [[Obsidian Sync'e giriş|Sync]]'ten sürümleri listele veya karşılaştır. Sürümler en yeniden en eskiye doğru numaralandırılır.

```bash
file=<ad>            # dosya adı
path=<yol>           # dosya yolu
from=<n>             # karşılaştırma başlangıç sürüm numarası
to=<n>               # karşılaştırma bitiş sürüm numarası
filter=local|sync    # sürüm kaynağına göre filtrele
```

**Örnekler:**

```shell
# Etkin dosyanın tüm sürümlerini listele
diff

# Belirli bir dosyanın tüm sürümlerini listele
diff file=Tarif

# En son sürümü mevcut dosyayla karşılaştır
diff file=Tarif from=1

# İki sürümü karşılaştır
diff file=Tarif from=2 to=1

# Yalnızca Sync sürümlerini göster
diff filter=sync
```

### `history`

Yalnızca [[Dosya Kurtarma]]'dan sürümleri listele. Eşdeğer Sync komutu için [[#Sync|sync:history]]'ye bakın.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
```

### `history:list`

Yerel geçmişi olan tüm dosyaları listele.

### `history:read`

Yerel bir geçmiş sürümünü oku.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
version=<n>        # sürüm numarası (varsayılan: 1)
```

### `history:restore`

Yerel bir geçmiş sürümünü geri yükle.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
version=<n>        # (zorunlu) sürüm numarası
```

### `history:open`

Dosya kurtarmayı aç.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
```

## Dosyalar ve klasörler

### `file`

Dosya bilgisini göster (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
```

Örnek:

```
path       Notlar/Tarif.md
name       Tarif
extension  md
size       1024
created    1700000000000
modified   1700001000000
```

### `files`

Kasadaki dosyaları listele.

```bash
folder=<yol>       # klasöre göre filtrele
ext=<uzantı>       # uzantıya göre filtrele

total              # dosya sayısını döndür
```

### `folder`

Klasör bilgisini göster.

```bash
path=<yol>               # (zorunlu) klasör yolu
info=files|folders|size  # yalnızca belirli bilgiyi döndür
```

### `folders`

Kasadaki klasörleri listele.

```bash
folder=<yol>       # üst klasöre göre filtrele

total              # klasör sayısını döndür
```

### `open`

Bir dosya aç.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu

newtab             # yeni sekmede aç
```

### `create`

Bir dosya oluştur veya üzerine yaz.

```bash
name=<ad>          # dosya adı
path=<yol>         # dosya yolu
content=<metin>    # başlangıç içeriği
template=<ad>      # kullanılacak şablon

overwrite          # dosya varsa üzerine yaz
open               # oluşturduktan sonra dosyayı aç
newtab             # yeni sekmede aç
```

### `read`

Dosya içeriğini oku (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
```

### `append`

Bir dosyaya içerik ekle (sona) (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
content=<metin>    # (zorunlu) eklenecek içerik

inline             # yeni satır olmadan ekle
```

### `prepend`

Başlangıç meta verilerinden sonra içerik ekle (başa) (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
content=<metin>    # (zorunlu) eklenecek içerik

inline             # yeni satır olmadan ekle
```

### `move`

Bir dosyayı taşı veya yeniden adlandır (varsayılan: etkin dosya). [[Ayarlar#Bağlantıları hep güncelle|kasa ayarlarınızda]] etkinleştirilmişse [[Dahili bağlantılar|dahili bağlantıları]] otomatik olarak günceller.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
to=<yol>           # (zorunlu) hedef klasör veya yol
```

### `rename`

Bir dosyayı yeniden adlandır (varsayılan: etkin dosya). Yeni adda atlanırsa dosya uzantısı otomatik olarak korunur. Bir dosyayı aynı anda yeniden adlandırıp taşımak için [[#`move`|move]] kullanın. [[Ayarlar#Bağlantıları hep güncelle|kasa ayarlarınızda]] etkinleştirilmişse [[Dahili bağlantılar|dahili bağlantıları]] otomatik olarak günceller.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
name=<ad>          # (zorunlu) yeni dosya adı
```

### `delete`

Bir dosyayı sil (varsayılan: etkin dosya, varsayılan olarak çöp kutusuna).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu

permanent          # çöp kutusunu atla, kalıcı olarak sil
```

## Bağlantılar

[[Geri Bağlantılar]] ve [[Giden bağlantılar]] için komutlar.

### `backlinks`

Bir dosyanın geri bağlantılarını listele (varsayılan: etkin dosya).

```bash
file=<ad>          # hedef dosya adı
path=<yol>         # hedef dosya yolu

counts             # bağlantı sayılarını dahil et
total              # geri bağlantı sayısını döndür
format=json|tsv|csv  # çıktı biçimi (varsayılan: tsv)
```

### `links`

Bir dosyadaki giden bağlantıları listele (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu

total              # bağlantı sayısını döndür
```

### `unresolved`

Kasadaki çözümlenmemiş bağlantıları listele.

```bash
total              # çözümlenmemiş bağlantı sayısını döndür
counts             # bağlantı sayılarını dahil et
verbose            # kaynak dosyaları dahil et
format=json|tsv|csv  # çıktı biçimi (varsayılan: tsv)
```

### `orphans`

Gelen bağlantısı olmayan dosyaları listele.

```bash
total              # bağlantısız dosya sayısını döndür
```

### `deadends`

Giden bağlantısı olmayan dosyaları listele.

```bash
total              # çıkışsız dosya sayısını döndür
```

## Anahat

[[Anahat]] için komutlar.

### `outline`

Mevcut dosyanın başlıklarını göster.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
format=tree|md|json  # çıktı biçimi (varsayılan: tree)

total              # başlık sayısını döndür
```

## Eklentiler

[[Yerleşik Eklentiler]] ve [[Topluluk Eklentileri]] için komutlar.

### `plugins`

Yüklü eklentileri listele.

```bash
filter=core|community  # eklenti türüne göre filtrele

versions               # sürüm numaralarını dahil et
format=json|tsv|csv    # çıktı biçimi (varsayılan: tsv)
```

### `plugins:enabled`

Etkin eklentileri listele.

```bash
filter=core|community  # eklenti türüne göre filtrele

versions               # sürüm numaralarını dahil et
format=json|tsv|csv    # çıktı biçimi (varsayılan: tsv)
```

### `plugins:restrict`

Kısıtlı modu aç/kapat veya kontrol et.

```bash
on                 # kısıtlı modu etkinleştir
off                # kısıtlı modu devre dışı bırak
```

### `plugin`

Eklenti bilgisini al.

```bash
id=<eklenti-kimliği>     # (zorunlu) eklenti kimliği
```

### `plugin:enable`

Bir eklentiyi etkinleştir.

```bash
id=<kimlik>            # (zorunlu) eklenti kimliği
filter=core|community  # eklenti türü
```

### `plugin:disable`

Bir eklentiyi devre dışı bırak.

```bash
id=<kimlik>            # (zorunlu) eklenti kimliği
filter=core|community  # eklenti türü
```

### `plugin:install`

Bir topluluk eklentisi indir.

```bash
id=<kimlik>        # (zorunlu) eklenti kimliği

enable             # indirdikten sonra etkinleştir
```

### `plugin:uninstall`

Bir topluluk eklentisini kaldır.

```bash
id=<kimlik>        # (zorunlu) eklenti kimliği
```

### `plugin:reload`

Bir eklentiyi yeniden yükle (geliştiriciler için).

```bash
id=<kimlik>        # (zorunlu) eklenti kimliği
```

## Özellikler

[[Özellikler]] ile ilgili komutlar.

### `aliases`

Kasadaki takma adları listele. Belirli bir dosya için takma adları göstermek üzere `active` veya `file`/`path` kullanın.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu

total              # takma ad sayısını döndür
verbose            # dosya yollarını dahil et
active             # etkin dosya için takma adları göster
```

### `properties`

Kasadaki özellikleri listele. Belirli bir dosya için özellikleri göstermek üzere `active` veya `file`/`path` kullanın.

```bash
file=<ad>          # dosya için özellikleri göster
path=<yol>         # yol için özellikleri göster
name=<ad>          # belirli özellik sayısını al
sort=count         # sayıya göre sırala (varsayılan: ad)
format=yaml|json|tsv  # çıktı biçimi (varsayılan: yaml)

total              # özellik sayısını döndür
counts             # tekrar sayılarını dahil et
active             # etkin dosya için özellikleri göster
```

### `property:set`

Bir dosyaya özellik ata (varsayılan: etkin dosya).

```bash
name=<ad>                                      # (zorunlu) özellik adı
value=<değer>                                  # (zorunlu) özellik değeri
type=text|list|number|checkbox|date|datetime   # özellik tipi
file=<ad>                                      # dosya adı
path=<yol>                                     # dosya yolu
```

### `property:remove`

Bir dosyadan özelliği kaldır (varsayılan: etkin dosya).

```bash
name=<ad>          # (zorunlu) özellik adı
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
```

### `property:read`

Bir dosyadan özellik değerini oku (varsayılan: etkin dosya).

```bash
name=<ad>          # (zorunlu) özellik adı
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
```

## Publish

[[Obsidian Publish'e giriş|Obsidian Publish]] için komutlar.

### `publish:site`

Yayınlama sitesi bilgisini göster (slug, URL).

### `publish:list`

Yayınlanmış dosyaları listele.

```bash
total              # yayınlanmış dosya sayısını döndür
```

### `publish:status`

Yayınlama değişikliklerini listele.

```bash
total              # değişiklik sayısını döndür
new                # yalnızca yeni dosyaları göster
changed            # yalnızca değişen dosyaları göster
deleted            # yalnızca silinen dosyaları göster
```

### `publish:add`

Bir dosyayı veya tüm değişen dosyaları yayınla (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu

changed            # tüm değişen dosyaları yayınla
```

### `publish:remove`

Bir dosyanın yayınını kaldır (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
```

### `publish:open`

Dosyayı yayınlanmış sitede aç (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
```

## Rastgele notlar

[[Rastgele Not]] için komutlar.

### `random`

Rastgele bir not aç.

```bash
folder=<yol>       # klasörle sınırla

newtab             # yeni sekmede aç
```

### `random:read`

Rastgele bir notu oku (yolu dahildir).

```bash
folder=<yol>       # klasörle sınırla
```

## Arama

[[Ara]] için komutlar.

### `search`

Kasada metin ara. Eşleşen dosya yollarını döndürür.

```bash
query=<metin>      # (zorunlu) arama sorgusu
path=<klasör>      # klasörle sınırla
limit=<n>          # maksimum dosya sayısı
format=text|json   # çıktı biçimi (varsayılan: text)

total              # eşleşme sayısını döndür
case               # büyük-küçük harfe duyarlı
```

### `search:context`

Eşleşen satır bağlamıyla ara. Grep tarzı `yol:satır: metin` çıktısı döndürür.

```bash
query=<metin>      # (zorunlu) arama sorgusu
path=<klasör>      # klasörle sınırla
limit=<n>          # maksimum dosya sayısı
format=text|json   # çıktı biçimi (varsayılan: text)

case               # büyük-küçük harfe duyarlı
```

### `search:open`

Arama görünümünü aç.

```bash
query=<metin>      # başlangıç arama sorgusu
```

## Sync

[[Obsidian Sync'e giriş|Obsidian Sync]] için komutlar.

> [!tip] Masaüstü uygulaması olmadan senkronize edin
> Bu komutlar çalışan Obsidian uygulaması içindeki Sync'i kontrol eder. Masaüstü uygulaması olmadan komut satırından kasaları senkronize etmek için [[Başsız Sync]]'e bakın.

### `sync`

Senkronizasyonu duraklat veya devam ettir.

```bash
on                 # senkronizasyonu devam ettir
off                # senkronizasyonu duraklat
```

### `sync:status`

Senkronizasyon durumunu ve kullanımı göster.

### `sync:history`

Bir dosyanın senkronizasyon sürüm geçmişini listele (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu

total              # sürüm sayısını döndür
```

### `sync:read`

Bir senkronizasyon sürümünü oku (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
version=<n>        # (zorunlu) sürüm numarası
```

### `sync:restore`

Bir senkronizasyon sürümünü geri yükle (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
version=<n>        # (zorunlu) sürüm numarası
```

### `sync:open`

Senkronizasyon geçmişini aç (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
```

### `sync:deleted`

Senkronizasyondaki silinmiş dosyaları listele.

```bash
total              # silinmiş dosya sayısını döndür
```

## Etiketler

[[Etiketler]] için komutlar.

### `tags`

Kasadaki etiketleri listele. Belirli bir dosya için etiketleri göstermek üzere `active` veya `file`/`path` kullanın.

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
sort=count         # sayıya göre sırala (varsayılan: ad)

total              # etiket sayısını döndür
counts             # etiket sayılarını dahil et
format=json|tsv|csv  # çıktı biçimi (varsayılan: tsv)
active             # etkin dosya için etiketleri göster
```

### `tag`

Etiket bilgisini al.

```bash
name=<etiket>      # (zorunlu) etiket adı

total              # tekrar sayısını döndür
verbose            # dosya listesini ve sayısını dahil et
```

## Görevler

Görev yönetimi için komutlar.

### `tasks`

Kasadaki görevleri listele. Belirli bir dosya için görevleri göstermek üzere `active` veya `file`/`path` kullanın.

```bash
file=<ad>          # dosya adına göre filtrele
path=<yol>         # dosya yoluna göre filtrele
status="<karakter>"  # durum karakterine göre filtrele

total              # görev sayısını döndür
done               # tamamlanmış görevleri göster
todo               # tamamlanmamış görevleri göster
verbose            # satır numaralarıyla dosyaya göre grupla
format=json|tsv|csv  # çıktı biçimi (varsayılan: text)
active             # etkin dosya için görevleri göster
daily              # günlük nottaki görevleri göster
```

**Örnekler:**

```bash
# Kasadaki tüm görevleri listele
tasks

# Kasadaki tamamlanmamış görevleri listele
tasks todo

# Belirli bir dosyadaki tamamlanmış görevleri listele
tasks file=Tarif done

# Bugünün günlük notundaki görevleri listele
tasks daily

# Günlük nottaki görevleri say
tasks daily total

# Dosya yolları ve satır numaralarıyla görevleri listele
tasks verbose

# Özel duruma göre filtrele (özel karakterleri tırnak içine alın)
tasks 'status=?'
```

### `task`

Bir görevi göster veya güncelle.

```bash
ref=<yol:satır>    # görev referansı (yol:satır)
file=<ad>          # dosya adı
path=<yol>         # dosya yolu
line=<n>           # satır numarası
status="<karakter>"  # durum karakterini ayarla

toggle             # görev durumunu değiştir
daily              # günlük not
done               # tamamlandı olarak işaretle
todo               # yapılacak olarak işaretle
```

**Örnekler:**

```bash
# Görev bilgisini göster
task file=Tarif line=8
task ref="Tarif.md:8"

# Görev tamamlanma durumunu değiştir
task ref="Tarif.md:8" toggle

# Günlük nottaki görevi değiştir
task daily line=3 toggle

# Görev durumunu ayarla
task file=Tarif line=8 done      # → [x]
task file=Tarif line=8 todo      # → [ ]
task file=Tarif line=8 status=-  # → [-]
task daily line=3 done            # Günlük not görevini tamamlandı olarak işaretle
```


## Şablonlar

[[Şablonlar]] için komutlar.

### `templates`

Şablonları listele.

```bash
total              # şablon sayısını döndür
```

### `template:read`

Şablon içeriğini oku.

```bash
name=<şablon>      # (zorunlu) şablon adı
title=<başlık>     # değişken çözümlemesi için başlık

resolve            # şablon değişkenlerini çözümle
```

### `template:insert`

Etkin dosyaya şablon ekle.

```bash
name=<şablon>      # (zorunlu) şablon adı
```

**Notlar:**
- `resolve` seçeneği `{{date}}`, `{{time}}`, `{{title}}` değişkenlerini işler
- Şablonla bir dosya oluşturmak için `create path=<yol> template=<ad>` kullanın

## Temalar ve parçacıklar

[[Temalar]] ve [[CSS kod parçaları]] için komutlar.

### `themes`

Yüklü temaları listele.

```bash
versions           # sürüm numaralarını dahil et
```

### `theme`

Etkin temayı göster veya bilgi al.

```bash
name=<ad>          # ayrıntılar için tema adı
```

### `theme:set`

Etkin temayı ayarla.

```bash
name=<ad>          # (zorunlu) tema adı (varsayılan için boş)
```

### `theme:install`

Bir topluluk teması indir.

```bash
name=<ad>          # (zorunlu) tema adı

enable             # indirdikten sonra etkinleştir
```

### `theme:uninstall`

Bir temayı kaldır.

```bash
name=<ad>          # (zorunlu) tema adı
```

### `snippets`

Yüklü CSS parçacıklarını listele.

### `snippets:enabled`

Etkin CSS parçacıklarını listele.

### `snippet:enable`

Bir CSS parçacığını etkinleştir.

```bash
name=<ad>          # (zorunlu) parçacık adı
```

### `snippet:disable`

Bir CSS parçacığını devre dışı bırak.

```bash
name=<ad>          # (zorunlu) parçacık adı
```

## Benzersiz notlar

[[Benzersiz not oluşturucu]] için komutlar.

### `unique`

Benzersiz not oluştur.

```bash
name=<metin>       # not adı
content=<metin>    # başlangıç içeriği
paneType=tab|split|window    # açılacak panel türü

open               # oluşturduktan sonra dosyayı aç
```

## Kasa

### `vault`

Kasa bilgisini göster.

```bash
info=name|path|files|folders|size  # yalnızca belirli bilgiyi döndür
```

### `vaults`

Bilinen kasaları listele.

```bash
total              # kasa sayısını döndür
verbose            # kasa yollarını dahil et
```

### `vault:open`

Farklı bir kasaya geç (yalnızca TUI).

```bash
name=<ad>          # (zorunlu) kasa adı
```

## Web görüntüleyici

[[Web görüntüleyici]] için komutlar.

### `web`

Web görüntüleyicide URL aç.

```bash
url=<url>          # (zorunlu) açılacak URL

newtab             # yeni sekmede aç
```

## Kelime sayısı

[[Kelime sayısı]] için komutlar.

### `wordcount`

Kelime ve karakter say (varsayılan: etkin dosya).

```bash
file=<ad>          # dosya adı
path=<yol>         # dosya yolu

words              # yalnızca kelime sayısını döndür
characters         # yalnızca karakter sayısını döndür
```

## Çalışma alanı

[[Çalışma alanı]] ve [[Çalışma Alanları]] eklentisi için komutlar.

### `workspace`

Çalışma alanı ağacını göster.

```bash
ids                # çalışma alanı öğe kimliklerini dahil et
```

### `workspaces`

Kaydedilmiş çalışma alanlarını listele.

```bash
total              # çalışma alanı sayısını döndür
```

### `workspace:save`

Mevcut düzeni çalışma alanı olarak kaydet.

```bash
name=<ad>          # çalışma alanı adı
```

### `workspace:load`

Kaydedilmiş bir çalışma alanını yükle.

```bash
name=<ad>          # (zorunlu) çalışma alanı adı
```

### `workspace:delete`

Kaydedilmiş bir çalışma alanını sil.

```bash
name=<ad>          # (zorunlu) çalışma alanı adı
```

### `tabs`

Açık sekmeleri listele.

```bash
ids                # sekme kimliklerini dahil et
```

### `tab:open`

Yeni bir sekme aç.

```bash
group=<kimlik>     # sekme grubu kimliği
file=<yol>         # açılacak dosya
view=<tür>         # açılacak görünüm türü
```

### `recents`

Son açılan dosyaları listele.

```bash
total              # son dosya sayısını döndür
```

## Geliştirici komutları

[[Topluluk Eklentileri]] ve [[Temalar]] geliştirmenize yardımcı olacak komutlar. [Obsidian Geliştirici Belgelendirmesi](https://docs.obsidian.md)'ne giderek daha fazlasını öğrenin.

### `devtools`

Electron geliştirici araçlarını aç/kapat.

### `dev:debug`

Chrome DevTools Protocol hata ayıklayıcısını bağla/ayır.

```bash
on                 # hata ayıklayıcıyı bağla
off                # hata ayıklayıcıyı ayır
```

### `dev:cdp`

Bir Chrome DevTools Protocol komutu çalıştır.

```bash
method=<CDP.metod>   # (zorunlu) çağrılacak CDP metodu
params=<json>        # JSON olarak metot parametreleri
```

### `dev:errors`

Yakalanan JavaScript hatalarını göster.

```bash
clear              # hata arabelleğini temizle
```

### `dev:screenshot`

Ekran görüntüsü al (base64 PNG döndürür).

```bash
path=<dosyaadı>    # çıktı dosya yolu
```

### `dev:console`

Yakalanan konsol mesajlarını göster.

```bash
limit=<n>                        # gösterilecek maksimum mesaj sayısı (varsayılan 50)
level=log|warn|error|info|debug  # günlük seviyesine göre filtrele

clear                            # konsol arabelleğini temizle
```

### `dev:css`

Kaynak konumlarıyla CSS'i incele.

```bash
selector=<css>     # (zorunlu) CSS seçici
prop=<ad>          # özellik adına göre filtrele
```

### `dev:dom`

DOM öğelerini sorgula.

```bash
selector=<css>     # (zorunlu) CSS seçici
attr=<ad>          # öznitelik değerini al
css=<özellik>      # CSS özellik değerini al

total              # öğe sayısını döndür
text               # metin içeriğini döndür
inner              # outerHTML yerine innerHTML döndür
all                # ilk yerine tüm eşleşmeleri döndür
```

### `dev:mobile`

Mobil emülasyonunu aç/kapat.

```bash
on                 # mobil emülasyonunu etkinleştir
off                # mobil emülasyonunu devre dışı bırak
```

### `eval`

JavaScript çalıştır ve sonucu döndür.

```bash
code=<javascript>  # (zorunlu) çalıştırılacak JavaScript kodu
```

## Klavye kısayolları

Bu kısayollar [[#Terminal arayüzünü kullanma|TUI]]'de kullanılabilir.

### Gezinme

| Eylem                                                      | Kısayol         |
| ---------------------------------------------------------- | --------------- |
| İmleci sola taşı                                           | `←` / `Ctrl+B`  |
| İmleci sağa taşı (satır sonunda öneriyi kabul eder)        | `→` / `Ctrl+F`  |
| Satır başına git                                           | `Ctrl+A`        |
| Satır sonuna git                                           | `Ctrl+E`        |
| Bir kelime geri git                                        | `Alt+B`         |
| Bir kelime ileri git                                       | `Alt+F`         |

### Düzenleme

| Eylem                         | Kısayol                     |
| ----------------------------- | --------------------------- |
| Satır başına kadar sil        | `Ctrl+U`                    |
| Satır sonuna kadar sil        | `Ctrl+K`                    |
| Önceki kelimeyi sil           | `Ctrl+W` / `Alt+Backspace`  |

### Otomatik tamamlama

| Eylem                                                | Kısayol      |
| ---------------------------------------------------- | ------------ |
| Öneri moduna gir / seçili öneriyi kabul et            | `Tab`        |
| Öneri modundan çık                                   | `Shift+Tab`  |
| Öneri moduna gir (yeni girişten)                     | `↓`          |
| İlk/seçili öneriyi kabul et (satır sonunda)          | `→`          |

### Geçmiş

| Eylem                                                            | Kısayol         |
| ---------------------------------------------------------------- | --------------- |
| Önceki geçmiş girişi / önerilerde yukarı git                    | `↑` / `Ctrl+P`  |
| Sonraki geçmiş girişi / önerilerde aşağı git                    | `↓` / `Ctrl+N`  |
| Ters geçmiş araması (filtrelemek için yazın, döngü için `Ctrl+R`) | `Ctrl+R`        |

### Diğer

| Eylem                                                    | Kısayol              |
| -------------------------------------------------------- | -------------------- |
| Komutu çalıştır veya öneriyi kabul et                    | `Enter`              |
| Otomatik tamamlamayı geri al / öneri modundan çık / girişi temizle | `Escape`             |
| Ekranı temizle                                           | `Ctrl+L`             |
| Çıkış                                                    | `Ctrl+C` / `Ctrl+D`  |

## Sorun Giderme

Obsidian CLI'ı çalıştırmakta sorun yaşıyorsanız:

- En son [[Obsidian'ı Güncelle|Obsidian yükleyici sürümünü]] (1.12.7 veya üstü) kullandığınızdan emin olun.
- Obsidian'ı eski bir sürümden güncellediyseniz, CLI ayarını kapatıp tekrar açın ve ardından Obsidian'ın otomatik PATH kaydını yapmasına izin verin.
- PATH değişikliklerinin etkili olması için CLI'ı kaydettikten sonra terminalinizi yeniden başlatın.
- Obsidian çalışıyor olmalıdır. CLI, çalışan Obsidian örneğine bağlanır.

### Windows

Windows'ta Obsidian CLI, Obsidian 1.12.7+ yükleyicisini gerektirir. [[Obsidian'ı Güncelle|Yükleyici sürümü güncellemesine]] bakın.

Windows, Obsidian'ı stdin/stdout'a düzgün şekilde bağlayan bir terminal yönlendiricisi kullanır. Bu gereklidir çünkü Obsidian normalde Windows'ta terminal çıktılarıyla uyumsuz olan bir GUI uygulaması olarak çalışır. Obsidian 1.12.7+ yüklediğinizde, `Obsidian.exe` dosyasını yüklediğiniz klasöre `Obsidian.com` terminal yönlendiricisi eklenecektir.

CLI kaydı, Obsidian'ı kullanıcınızın PATH değişkenine ekler; bu yalnızca terminali yeniden başlattıktan sonra etkili olur.

### macOS

CLI kaydı, uygulama içinde paketlenmiş CLI ikili dosyasına işaret eden `/usr/local/bin/obsidian` konumunda bir sembolik bağlantı oluşturur. Bu, yönetici ayrıcalıkları gerektirir — bir sistem iletişim kutusu aracılığıyla sizden izin istenecektir.

Sembolik bağlantının var olduğunu ve doğru ikili dosyaya işaret ettiğini kontrol edin:

```
ls -l /usr/local/bin/obsidian
```

Sembolik bağlantı eksikse elle oluşturun:

```
sudo ln -sf /Applications/Obsidian.app/Contents/MacOS/obsidian-cli /usr/local/bin/obsidian
```

> [!note] Daha önce Obsidian'ın eski bir sürümüyle CLI'ı kaydettiyseniz, `~/.zprofile` dosyanızda kalan bir PATH girişi olabilir. Yeni kayıt işlemi bunu otomatik olarak kaldırır, ancak kalırsa `~/.zprofile` dosyasından `# Added by Obsidian` ile başlayan satırları güvenle silebilirsiniz.

### Linux

CLI kaydı, CLI ikili dosyasını `~/.local/bin/obsidian` konumuna kopyalar. Bu, bazı Linux kurulum yöntemlerinin kalıcı olarak sembolik bağlantı oluşturulamayan geçici dizinlerden çalışması nedeniyle yapılır.

`~/.local/bin` dizininin PATH'inizde olduğundan emin olun. Değilse aşağıdakini `~/.bashrc` veya `~/.zshrc` dosyanıza ekleyin:

```
export PATH="$PATH:$HOME/.local/bin"
```

İkili dosyanın var olduğunu kontrol edin:

```
ls -l ~/.local/bin/obsidian
```

İkili dosya eksikse, Obsidian kurulum dizininden elle kopyalayın:

```
cp /path/to/Obsidian/obsidian-cli ~/.local/bin/obsidian
chmod 755 ~/.local/bin/obsidian
```

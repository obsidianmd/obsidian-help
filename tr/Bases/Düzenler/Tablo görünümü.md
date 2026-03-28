---
permalink: bases/views/table
---
Tablo, [[Tabanlara giriş|Tabanlar]]'da kullanabileceğiniz bir [[Görünümler|görünüm]] türüdür.

Dosyaları her satırda bir dosya ve o dosyanın [[Özellikler]]'i için sütunlar içeren bir tablo olarak görüntülemek için görünüm menüsünden ![[lucide-table.svg#icon]]  **Tablo**'yu seçin.

![Kitap listesi içeren bir tablo görünümü gösteren bir taban örneği](bases-noshadow.png#interface)

## Ayarlar

Tablo görünümü ayarları [[Görünümler#Görünüm ayarları|Görünüm ayarları]]'ndan yapılandırılabilir.

### Satır yüksekliği

Satır yüksekliği daha fazla bilgi görüntülemenizi sağlar. **Kısa**, **Orta**, **Uzun** ve **Ekstra uzun** arasından seçim yapın.

## Özetler

Görünümde mevcut görünür satırlar için toplam, ortalama veya sayım gibi değerleri hızlıca hesaplamak üzere bir tablo sütununa özetler ekleyebilirsiniz.

Özetler tabana değil, görünüme bağlıdır. Her görünüm aynı sütun için farklı özetler gösterebilir.

### Özet ekleme

1. Tablo görünümünde sütun başlığına sağ tıklayın.
2. ![[lucide-calculator.svg#icon]] **Özetle…** seçeneğini seçin.
3. Yerleşik özet fonksiyonlarından birini seçin veya kendi özetinizi tanımlamak için ![[lucide-square-function.svg#icon]] **Özet ekle**'yi seçin.

Özet, sütunun altında görünür. Sonuçlar [[Görünümler#Sonuçları sıralama ve gruplama|gruplandırıldığında]] her grubun özeti grubun üstünde gösterilir.

Özet çubuğu eklendikten sonra özet hücresine tıklayarak diğer sütunlar için daha fazla özet ekleyebilirsiniz. Tüm özetler kaldırılırsa özet çubuğu gizlenir.

### Yerleşik özetler

Aşağıdaki özetler varsayılan olarak kullanılabilir. Seçenekler özellik tipine bağlı olarak değişebilir.

#### Tüm özellik tipleri

- **Değer yok**: değeri olmayan satırların sayısı.
- **Dolu**: değeri olan satırların sayısı.
- **Benzersiz**: farklı değerlerin sayısı.

#### Sayılar

- **Ortalama**: tüm sayısal değerlerin ortalaması.
- **Maks**: en büyük değer.
- **Medyan**: ortanca değer.
- **Min**: en küçük değer.
- **Aralık**: maks ve min arasındaki fark.
- **Std sapma**: standart sapma.
- **Toplam**: tüm değerlerin toplamı.

#### Tarihler

- **En erken**: en küçük/en eski tarih.
- **En geç**: en büyük/en yeni tarih.
- **Aralık**: en erken ve en geç arasındaki fark.

#### Onay kutusu

- **İşaretli**: onay kutusunun açık olduğu satır sayısı.
- **İşaretsiz**: onay kutusunun kapalı olduğu satır sayısı.

### Özel özetler

Bir formül kullanarak kendi özetinizi tanımlayabilirsiniz:

1. ![[lucide-calculator.svg#icon]] **Özetle…** menüsünde ![[lucide-square-function.svg#icon]] **Özet ekle**'yi seçin.
2. Özete bir ad verin.
3. Bir formül girin. Formül, o sütundaki değerler listesi üzerinde çalışır (örneğin, `values.reduce(...)` gibi bir [[Fonksiyonlar|fonksiyon]] kullanarak).
4. Özeti kaydedin.

Özel özetler, yerleşik seçeneklerin kapsamadığı bir hesaplamaya ihtiyaç duyduğunuzda faydalıdır.

## Kısayollar

Aşağıdaki fare ve [[Düzenleme kısayolları|klavye kısayolları]]nı kullanarak tablo görünümünde hızlıca gezinebilirsiniz.

- Shift-tıklama ile hücre seçimi oluşturulur.
- Hücre seçimine sağ tıklayarak bu dosyalar için ek eylemlere erişebilirsiniz.

| Eylem                                                                                                           | Kısayol              | macOS               |
| --------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| Seçili hücreleri kopyala                                                                                        | `Ctrl+C`             | `Cmd+C`             |
| Seçili hücreleri yapıştır                                                                                       | `Ctrl+V`             | `Cmd+V`             |
| Özelliklerdeki değişiklikleri geri al                                                                           | `Ctrl+Z`             | `Cmd+Z`             |
| Özelliklerdeki değişiklikleri yinele                                                                            | `Ctrl+Shift+Z`       | `Cmd+Shift+Z`       |
| Mevcut gruptaki tüm hücreleri seç                                                                              | `Ctrl+A`             | `Cmd+A`             |
| Belirli bir yöndeki tüm hücreleri seç                                                                          | `Ctrl+Shift+Ok`      | `Ctrl+Shift+Ok`     |
| Sütunu seç                                                                                                      | `Ctrl+Space`         |                     |
| Satırı seç                                                                                                      | `Shift+Space`        |                     |
| Mevcut hücreye odaklan — onay kutuları için kutucuğu değiştirir, formüller için formül düzenleyicisini açar     | `Enter`              |                     |
| İlk sütuna git                                                                                                  | `Home`               |                     |
| Son sütuna git                                                                                                  | `End`                |                     |
| Sayfa yüksekliği kadar yukarı ve aşağı gezin                                                                   | `PageUp`,`PageDown`  |                     |
| Mevcut hücre seçimini temizle                                                                                   | `Esc`                |                     |
| Mevcut hücreleri temizle                                                                                        | `Backspace`          |                     |
| Sonraki hücreye git                                                                                             | `Tab`                |                     |
| Önceki hücreye git                                                                                              | `Shift-Tab`          |                     |

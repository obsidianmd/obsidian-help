---
permalink: plugins/note-composer
---
[[Not Oluşturucu]], iki notu birleştirmenize veya bir notun bir bölümünü yeni bir nota çıkarmanıza olanak tanıyan bir [[Yerleşik Eklentiler|çekirdek eklentidir]].

## Notları birleştir

Notları birleştirme, bir notu diğerine ekler ve ilkini kaldırır. Not Oluşturucu, birleştirilen nota başvuran tüm bağlantıları günceller.

Birleştirilecek notu seçtiğinizde, aşağıdaki yöntemler arasından seçim yapabilirsiniz:

- `Enter`: Kaynak notu hedef notun _sonuna_ ekler.
- `Shift+Enter`: Kaynak notu hedef notun _başına_ ekler.
- `Ctrl+Enter` (veya macOS'ta `Cmd+Enter`): Kaynak notun içeriğiyle yeni bir not oluşturur.

Etkin notu kasanızdaki başka bir notla birleştirmek için:

**Dosya gezgini**

1. Dosya gezgininde birleştirmek istediğiniz nota sağ tıklayın.
2. **Dosyanın tamamını şununla birleştir...** seçeneğine tıklayın.
3. Birleştirilecek notu seçin.
4. Onaylamak için **Birleştir**'e tıklayın.

**Komut paleti**

1. [[Komut Paleti]]'ni açın.
2. **Not Oluşturucu: Geçerli dosyayı başka bir dosyayla birleştir...** seçeneğini seçin.
3. Birleştirilecek notu seçin.
4. Onaylamak için **Birleştir**'e tıklayın.

> [!tip] İpucu
> Varsayılan olarak, Not Oluşturucu notları birleştirirken onay ister. Onayı devre dışı bırakırsanız ve bir notu yanlışlıkla birleştirirseniz, [[Dosya Kurtarma]] eklentisi ile hâlâ kurtarabilirsiniz.

## Notu çıkar

Seçimi çıkaracağınız notu seçtiğinizde, aşağıdaki yöntemler arasından seçim yapabilirsiniz:

- `Enter`: Seçili metni hedef notun _sonuna_ ekler.
- `Shift+Enter`: Seçili metni hedef notun _başına_ ekler.
- `Ctrl+Enter` (veya macOS'ta `Cmd+Enter`): Seçili metinle yeni bir not oluşturur.

Metni yeni bir nota çıkarmak için:

**Düzenleyici**

1. **Düzenleyici** görünümündeyken, çıkarmak istediğiniz metni seçin.
2. Seçili metne sağ tıklayın.
3. **Geçerli seçimi çıkar...** seçeneğine tıklayın.
4. Çıkarılacak notu seçin.

**Komut paleti**

1. **Düzenleyici** görünümündeyken, çıkarmak istediğiniz metni seçin.
2. [[Komut Paleti]]'ni açın.
3. **Not Oluşturucu: Geçerli seçimi çıkar...** seçeneğini seçin.
4. Çıkarılacak notu seçin.

> [!tip] İpucu
> Varsayılan olarak, Not Oluşturucu çıkarılan metni hedef nota bir bağlantı ile değiştirir. Ayarlar altında, bunun yerine hedef notu [[Dosya gömme|gömme]] olarak değiştirebilir veya arkasında hiçbir şey bırakmamayı seçebilirsiniz.

## Şablon dosyası

Bir şablon yapılandırarak, içeriği yeni nota eklemeden önce özelleştirebilirsiniz. Şablon kullanmak için, eklenti ayarlarında bir **Şablon dosya konumu** girin.

Şablon aşağıdaki değişkenleri içerebilir:

| Değişken           | Açıklama                                                                                                                                                   |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `{{content}}`     | Birleştirilecek içerik veya çıkarılan metin seçimi. Bu değişkeni dahil etmezseniz, Not Oluşturucu içeriği şablonun alt kısmına ekler. |
| `{{fromTitle}}`   | Kaynak notun adı.                                                                                                                                 |
| `{{newTitle}}`    | Hedef notun adı. Örneğin, dosya adını dosyanın üstüne başlık olarak eklemek için.                                                     |
| `{{date:FORMAT}}` | Yeni notun oluşturulma tarihi. Örneğin, `{{date:YYYY-MM-DD}}`.                                                                                       |

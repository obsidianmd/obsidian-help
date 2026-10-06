---
permalink: bases/views/kanban
---
Kanban, [[Tabanlara giriş|Tabanlar]]'da kullanabileceğiniz bir [[Görünümler|görünüm]] türüdür.

Dosyaları sütunlar halinde düzenlenmiş kartlar olarak görüntülemek için görünüm menüsünden ![[lucide-kanban-square.svg#icon]] **Kanban** seçeneğini seçin. Her sütun, sonuçları gruplamak için kullanılan özelliğin bir değerini temsil eder.


> [!note] Obsidian 1.14+ gerektirir
> Kanban görünümleri Obsidian 1.14 ve sonrasında kullanılabilir.


## Kartları sütunlara gruplama

Kanban görünümü, sonuçları gruplamak için bir özellik gerektirir.

1. Araç çubuğundan **Grupla** seçeneğini seçin. Telefonlarda **Görünüm → Grupla** seçeneğini seçin.
2. **Grupla** altında bir özellik seçin.

Seçilen özellik için değeri olmayan dosyalar **Yok** sütununda görünür.

> [!info] 
> `file.folder` dışında bir formül veya dosya özelliğine göre gruplarsanız kartları veya sütunları taşıyamaz ya da sütunlardan not oluşturamazsınız. Yine de **Grupla** menüsünden [[Görünümler#Grupları yeniden sıralama, gizleme ve ekleme|grup sırasını ve görünürlüğünü yönetebilirsiniz]].

## Kartlar ve sütunlarla çalışma

- Bir kartı başka bir sütuna sürükleyerek o nottaki gruplanmış özelliği güncelleyin. Yalnızca Markdown notları sütunlar arasında taşınabilir; ancak `file.folder`'a göre gruplandığınızda bir kartı taşımak dosyayı o klasöre taşır.
- O sütunun değerine sahip bir not oluşturmak için sütun başlığındaki artı simgesini veya sütunun altındaki ![[lucide-plus.svg#icon]] **Yeni** seçeneğini seçin.
- Sütun sırasını değiştirmek için bir sütun başlığını sürükleyin. Otomatik sırayı geri yüklemek için **Grupla** menüsünü açın ve **Elle** yerine otomatik bir sıralama düzeni seçin.
- Sütunları [[Görünümler#Grupları yeniden sıralama, gizleme ve ekleme|yeniden sıralamak, gizlemek veya eklemek]] için **Grupla** seçeneğini kullanın.
- Her kartta gösterilen özellikleri seçmek için ![[lucide-list.svg#icon]] **Özellikler** menüsünü kullanın. İlk özellik kart başlığı olarak görüntülenir.

## Ayarlar

Kanban görünümü ayarları [[Görünümler#Görünüm ayarları|Görünüm ayarları]]nda yapılandırılabilir.

- Boş sütunları gizle
- Sütun genişliği
- Görsel özelliği
- Görseli sığdırma
- Görsel en-boy oranı

### Boş sütunları gizle

Herhangi bir kart içermeyen sütunları gizler.

### Sütun genişliği

Her sütunun ve kartlarının genişliğini tanımlar.

### Görsel özelliği

Kanban kartları, kartın üst kısmında görüntülenen isteğe bağlı bir kapak görselini destekler. Desteklenen özellik değerleri, [[Kartlar görünümü#Görsel özelliği|Kartlar görünümündeki görsel özelliği]] ile aynıdır.

### Görseli sığdırma

Yapılandırılmış bir görsel özelliğiniz varsa bu seçenek görselin kartta nasıl görüntüleneceğini belirler.

- **Kapla:** Görsel kartın içerik kutusunu doldurur. Sığmazsa görsel kırpılır.
- **İçer:** Görsel, kartın içerik kutusuna sığana kadar ölçeklendirilir. Görsel kırpılmaz.

### Görsel en-boy oranı

Kapak görselinin yüksekliği en-boy oranına göre belirlenir. Görseli daha kısa veya daha uzun yapmak için bu seçeneği ayarlayın.

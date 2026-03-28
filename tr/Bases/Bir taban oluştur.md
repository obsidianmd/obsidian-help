---
permalink: bases/create-base
---
[[Tabanlara giriş|Tabanlar]] notlarınızın veritabanı benzeri görünümlerini oluşturmanıza olanak tanır. İşte bir taban oluşturmanın ve bir nota gömmenin yolları. Her taban, bilgileri farklı şekillerde görüntülemek için bir veya daha fazla [[Görünümler|görünüme]] sahip olabilir.

## Yeni bir taban oluşturma

**Komut paleti:**

1. **Komut paleti**'ni açın.
2. Şunlardan birini seçin:
	- **Tabanlar: Yeni taban oluştur** — etkin dosyayla aynı klasörde bir taban oluşturur.
	- **Tabanlar: Yeni taban ekle** — bir taban oluşturur ve mevcut dosyaya gömer.

**Dosya gezgini:**

1. Dosya gezgininde, tabanı oluşturmak istediğiniz klasöre sağ tıklayın.
2. **Yeni taban** seçeneğini seçin.

**Araç çubuğu:**

- Dikey araç çubuğu menüsünde, etkin dosyayla aynı klasörde bir taban oluşturmak için **Yeni taban oluştur**'u seçin.

## Bir tabanı gömme

### Bir taban dosyasını gömme

Taban dosyalarını `![[Dosya.base]]` söz dizimini kullanarak [[Dosya gömme|herhangi bir başka dosyaya]] gömebilirsiniz. Varsayılan görünümü belirtmek için `![[Dosya.base#Görünüm]]` kullanın.

### Bir tabanı kod bloğu olarak gömme

Tabanlar ayrıca bir `base` kod bloğu ve [[Tabanlar söz dizimi|tabanlar söz dizimi]] kullanılarak doğrudan bir nota gömülebilir.

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~

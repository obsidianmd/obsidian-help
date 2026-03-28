---
permalink: aliases
cssclasses:
  - soft-embed
---
Bir dosyaya farklı isimlerle başvurmak istiyorsanız, nota _takma adlar_ eklemeyi düşünün. Takma ad, bir not için alternatif bir isimdir.

Takma adları kısaltmalar, lakaplar veya bir nota farklı bir dilde atıfta bulunmak gibi durumlar için kullanın.

Yalnızca bir bağlantının tek bir yerde nasıl göründüğünü değiştirmek istiyorsanız, bunun yerine [[Dahili bağlantılar#Bağlantı görüntüleme metnini değiştirme|Bağlantı görüntüleme metnini değiştirme]] bölümüne bakın.

![[Dahili bağlantılar#^callout-internal-links-link-text]]

## Bir nota takma ad ekleme

Bir nota takma ad eklemek için, notun [[Özellikler]] bölümüne `aliases` özelliğini ekleyin. Takma adlar her zaman YAML'da liste biçiminde olmalıdır.

```md
---
aliases:
  - Doggo
  - Woofer
  - Yapper
---

# Dog
```

## Takma ad kullanarak bir nota bağlantı verme

Takma ad kullanarak bir nota bağlantı vermek için:

1. Bir [[Dahili bağlantılar|dahili bağlantı]] içinde takma adı yazmaya başlayın. Herhangi bir takma ad, yanında eğri ok simgesi ile öneri listesinde görünür.
2. Takma adı seçmek için `Enter` tuşuna basın.

Obsidian, takma adı özel görüntüleme metni olarak kullanan bağlantıyı oluşturur, örneğin `[[Yapay Zeka|YZ]]`.

> [!note] Not
> Obsidian, takma adı yalnızca bağlantı hedefi olarak kullanmak yerine (`[[YZ]]`), wiki bağlantısı biçimini kullanan diğer uygulamalarla birlikte çalışabilirliği sağlamak için `[[Yapay Zeka|YZ]]` bağlantı biçimini kullanır.

## Bir takma ad için bağlantısız bahsetmeleri bulma

[[Geri Bağlantılar]] kullanarak takma adların bağlantısız bahsetmelerini bulabilirsiniz.

Örneğin, "YZ"yi "Yapay zeka" için takma ad olarak ayarladıktan sonra, diğer notlardaki "YZ" bahsetmelerini görebilirsiniz.

Bağlantısız bir bahsetmeyi bir takma ada bağlarsanız, Obsidian bahsetmeyi takma adı görüntüleme metni olarak kullanan bir [[Dahili bağlantılar|dahili bağlantıya]] dönüştürür.

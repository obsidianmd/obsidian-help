---
permalink: publish/social-share
---
Birçok sosyal ağ, bir kullanıcı sitenize bağlantı paylaştığında web siteniz için zengin bir önizleme görüntüler. [[Özellikler]] kullanarak notlarınızın önizlemede nasıl görüneceğini özelleştirebilirsiniz.

> [!warning] Uyarı
> Bu bölümde geçersiz kılınan etiketler **yalnızca** web tarayıcıları (crawler) tarafından görülebilir. Normal web tarayıcılarına performans nedeniyle değiştirilmemiş sayfa sunulur.

## Açıklama

Obsidian, not içeriğine dayalı olarak otomatik bir açıklama oluşturur, ancak `description` kullanarak kendi açıklamanızı sağlayabilirsiniz.

```yaml
---
description: Güneş sistemimize bir giriş.
---
```

> [!note] Meta etiketleri
> `description`, `<meta name="description" content="...">` içindeki otomatik oluşturulan açıklamayı ve `og:description` ile `twitter:description` eşdeğerlerini geçersiz kılar.

## Görsel

Bağlantı önizlemesi için özel bir görsel kullanabilirsiniz; bunun için `image` veya `cover` ile görselin yolunu ekleyin. Görselin Publish'e yüklenmiş olması gerekir.

Yol, kasanızın kök dizininden itibaren mutlak bir yol olabilir:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

Görselin yolu büyük-küçük harfe duyarlıdır. Önceki örneğimizde `Cover image.png` adlı bir görsele giden bir yol bulunmaktadır. Aşağıdaki yol yanlış büyük-küçük harf kullanımı nedeniyle çalışmayacaktır.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Kasanızdaki mutlak bir yol yerine harici bir URL de kullanabilirsiniz:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` ve `cover` aynı işleve sahiptir. Yalnızca birini kullanın.

> [!note] Meta etiketleri
> `image` ve `cover`, `<meta property="og:image" content="...">` içindeki otomatik oluşturulan görseli geçersiz kılar.

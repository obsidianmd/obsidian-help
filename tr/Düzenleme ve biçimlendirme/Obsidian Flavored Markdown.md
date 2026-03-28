---
permalink: obsidian-flavored-markdown
publish: true
mobile: true
description: Desteklenen uzantılar ve Markdown'ın HTML öğeleriyle nasıl etkileşime girdiği dahil olmak üzere Obsidian Aromalı Markdown hakkında bilgi edinin.
---
Obsidian, mevcut biçimleri bozmadan maksimum yetenek sunmayı hedefler. Bu nedenle, çeşitli [[Temel biçimlendirme söz dizimi|Markdown]] türlerinin bir kombinasyonunu kullanıyoruz.

Obsidian, [CommonMark](https://commonmark.org/), [GitHub Flavored Markdown](https://github.github.com/gfm/) ve [LaTeX](https://www.latex-project.org/) desteği sunar.

> [!tip]- HTML içinde Markdown
> Obsidian, HTML öğeleri içindeki Markdown söz dizimini işlemez. Bu, performans optimizasyonu ve büyük belgeleri yönetirken ayrıştırıcı karmaşıklığını düşük tutmak için kasıtlı bir tasarım tercihidir.
>
> Örneğin, `**kalın**` veya `` `kod` `` gibi Markdown biçimlendirmeleri `<div>`, `<span>`, `<table>` veya diğer HTML etiketleri içinde işlenmez.
>
> ```md
> <div>
> Bu **kalın olmayacak**.
> </div>
> ```

### Desteklenen Markdown uzantıları

| Söz dizimi      | Açıklama                                                              |
| --------------- | --------------------------------------------------------------------- |
| `[[Bağlantı]]`  | [[Dahili bağlantılar]]                                                |
| `![[Bağlantı]]` | [[Dosya gömme]]                                                       |
| `![[Bağlantı#^id]]` | [[Dahili bağlantılar#Bir nottaki bloğa bağlantı verme\|Blok referansları]] |
| `^id`           | [[Dahili bağlantılar#Bir nottaki bloğa bağlantı verme\|Blok tanımlama]] |
| `[^id]`         | [[Temel biçimlendirme söz dizimi#Dipnotlar\|Dipnotlar]]               |
| `%%Metin%%`     | [[Temel biçimlendirme söz dizimi#Yorumlar\|Yorumlar]]                 |
| `~~Metin~~`     | [[Temel biçimlendirme söz dizimi#Kalın, italik, vurgulamalar\|Üstü çizili]] |
| `==Metin==`     | [[Temel biçimlendirme söz dizimi#Kalın, italik, vurgulamalar\|Vurgulamalar]] |
| `` ``` ``       | [[Temel biçimlendirme söz dizimi#Kod blokları\|Kod blokları]]         |
| `- [ ]`         | [[Temel biçimlendirme söz dizimi#Görev listeleri\|Tamamlanmamış görev]] |
| `- [x]`         | [[Temel biçimlendirme söz dizimi#Görev listeleri\|Tamamlanmış görev]] |
| `> [!note]`     | [[Belirtme çizgileri]]                                                |
| (bağlantıya bakın) | [[Gelişmiş biçimlendirme söz dizimi#Tablolar\|Tablolar]]           |

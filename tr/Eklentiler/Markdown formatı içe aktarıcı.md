---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'Biçim dönüştürücü, diğer uygulamalardan gelen Markdown''ı Obsidian biçimine dönüştürmenizi sağlayan bir çekirdek eklentidir.'
---
Markdown formatı içe aktarıcı, [[Özellikler#Kullanımdan kaldırılmış özellikler|kullanımdan kaldırılmış özellik biçimlerini]] Obsidian tarafından kullanılan güncel biçime taşır.

> [!warning] Kasanızı yedekleyin
> Dönüştürme tüm kasanıza uygulanır. Başlamadan önce [[Obsidian dosyalarınızı yedekleyin]].

Notlarınızdaki özellikleri dönüştürmek için:

1. [[Komut Paleti|Komut paletini]] açın.
2. **Markdown formatı içe aktarıcı: Başlangıç meta verileri geçişi** seçeneğini belirleyin.
3. **Dönüştürmeyi Başlat** seçeneğini belirleyin.

## Desteklenen özellik biçimleri

Dönüştürücü, kullanımdan kaldırılmış biçimlerdeki takma adları, etiketleri ve CSS sınıflarını günceller:

**Takma adlar**

```yaml
# Önce

alias: My Note Title

# Sonra

aliases:
  - My Note Title
```

**Etiketler**

```yaml
# Önce

tag: project, important

# Sonra

tags:
  - project
  - important
```

**CSS Sınıfları**

```yaml
# Önce

cssclass: custom-style

# Sonra

cssclasses:
  - custom-style
```

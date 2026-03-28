---
permalink: plugins/format-converter
publish: true
mobile: true
description: 'Biçim dönüştürücü, diğer uygulamalardan gelen Markdown''ı Obsidian biçimine dönüştürmenizi sağlayan bir çekirdek eklentidir.'
---
Markdown formatı içe aktarıcı, diğer uygulamalardan Markdown söz dizimini Obsidian biçimine dönüştürmenizi sağlayan bir [[Yerleşik Eklentiler|çekirdek eklentidir]]. Ayrıca belirli [[Özellikler|özellikleri]] yeni gerekli biçimlere dönüştürmenize de olanak tanır.

> [!warning] Uyarı
> Markdown formatı içe aktarıcı, ayarlarınıza göre tüm kasanızı dönüştürür. Dönüştürme işlemini gerçekleştirmeden önce [[Obsidian dosyalarınızı yedekleyin]].

Kasanızdaki tüm notları dönüştürmek için:

1. [[Komut Paleti|Komut paletinde]], **Markdown yükleyicisini aç** seçeneğini belirleyin. Bu ayrıca [[Araç çubuğu|araç çubuğunda]] **Markdown yükleyicisini aç** ![[lucide-binary.svg#icon]] simgesi ile de bulunabilir.
2. Dönüştürmek istediğiniz biçimleri etkinleştirin.
3. **Dönüştürmeyi Başlat** düğmesine tıklayın.

Daha fazla bilgi için [[Temel biçimlendirme söz dizimi]] sayfasına bakın.

## Desteklenen biçimler

### Roam Research

Markdown formatı içe aktarıcı aşağıdaki Roam Research söz dizimini dönüştürebilir:

- **Etiketler**: `#tag` ve `#[[tag]]` ifadelerini `[[tag]]` biçimine dönüştürür
- **Vurgulamalar**: `^^highlight^^` ifadesini `==highlight==` biçimine dönüştürür
- **YAPILACAK öğeleri**: `{{[[TODO]]}}` ifadesini `[ ]` biçimine dönüştürür

### Bear

Markdown formatı içe aktarıcı aşağıdaki Bear söz dizimini dönüştürebilir:

- **Vurgulamalar**: `::highlight::` ifadesini `==highlight==` biçimine dönüştürür

### Zettelkasten

Markdown formatı içe aktarıcı aşağıdaki Zettelkasten söz dizimini dönüştürebilir:

- **Tam bağlantılar**: `[[UID]]` ifadesini `[[UID File Name]]` biçimine dönüştürür
- **Güzel bağlantılar**: `[[UID]]` ifadesini `[[UID File Name|File Name]]` biçimine dönüştürür

### [[Özellikler]]

Obsidian `1.9.3` sürümünden itibaren, Markdown formatı içe aktarıcı [[Özellikler#Kullanımdan kaldırılmış özellikler|kullanımdan kaldırılmış özellik]] biçimlerini güncel biçime dönüştürebilir:

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

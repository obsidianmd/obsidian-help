---
permalink: publish/permalinks
---
Notlarınıza verilen URL'yi _kalıcı bağlantılar_ kullanarak yeniden adlandırabilirsiniz.

Örneğin, şunu:

```
https://publish.obsidian.md/username/Company/About+us
```

Şuna dönüştürebilirsiniz:

```
https://publish.obsidian.md/username/about
```

Bir not için kalıcı bağlantı oluşturmak üzere [[Özellikler]] bölümünüze `permalink` özelliğini ekleyin.

```yaml
---
permalink: about
---
```

Birisi notu orijinal URL'yi kullanarak ziyaret ederse, otomatik olarak kalıcı bağlantıya yönlendirilir.

## Eski notları yönlendirme

Notları yeniden adlandırmak ve kaldırmak, yaşayan bir kasayı sürdürmenin doğal bir parçasıdır. Obsidian, yerel kasanızda bir notu taşıdığınızda bağlantıları otomatik olarak güncellese de, diğer web siteleri yayınlanmış [[Obsidian Publish'e giriş|Obsidian Publish]] sitenizdeki eski notlarınıza hâlâ bağlantı veriyor olabilir. Okuyucuları bir nottan diğerine yönlendirebilirsiniz.

Bir notu bir klasörden diğerine taşımak istediğinizi düşünün:

- **Rehberler**
  - ~~Arkadaş edinme.md~~ (kaldırıldı)
- **Eğitimler**
  - *Nasıl arkadaş edinilir.md* (eklendi)

Notu taşıdıktan sonra Obsidian, kasa içindeki tüm bağlantıları otomatik olarak günceller. Ancak değişikliği Publish sitenize yayınlarsanız, `/Rehberler/Arkadaş+edinme` bağlantıları 404 hatasıyla sonuçlanır.

Okuyucuları `/Rehberler/Arkadaş+edinme` adresinden `/Eğitimler/Nasıl+arkadaş+edinilir` adresine yönlendirmek için, yönlendirme yapılacak not olan `Nasıl arkadaş edinilir.md` dosyasına bir [[Takma adlar|takma ad]] eklemeniz gerekir.

```md
---
alias: Rehberler/Arkadaş edinme
---

# Nasıl arkadaş edinilir
```

> [!important] Önemli
> Takma adda eski notun tam yolunu eklediğinizden emin olun. Yalnızca not adını takma ad olarak kullanmak yerel kasanızda çalışsa da, Publish'in yönlendirme yapabilmesi için notun tam yoluna ihtiyacı vardır.

Her biri için bir takma ad ekleyerek birden fazla notu yönlendirebilirsiniz.

```md
---
aliases: 
  - Rehberler/Arkadaş edinme
  - Dostluklar geliştirme
---

# Nasıl arkadaş edinilir
```

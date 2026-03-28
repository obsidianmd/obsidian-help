---
permalink: plugin-security
---
Obsidian ekibi güvenliği ciddiye alır. Bu sayfa, topluluk eklentilerini yüklerken karşılaşılabilecek riskleri ve Obsidian ekibinin bunları ele almak için neler yaptığını açıklar.

## Kısıtlı mod

Varsayılan olarak, Obsidian üçüncü taraf kod çalıştırılmasını önlemek için Kısıtlı Modda çalışır. Kısıtlı modu yalnızca yüklediğiniz eklentilerin yazarlarına güveniyorsanız devre dışı bırakın.

Kısıtlı modu kapatmak için:

1. **[[Ayarlar]]**'ı açın.
2. Yan menüde **Topluluk Eklentileri**'ni seçin.
3. **Topluluk eklentilerini açın**'ı seçin.

Kısıtlı modu açmak için:

1. **[[Ayarlar]]**'ı açın.
2. Yan menüde **Topluluk Eklentileri**'ni seçin.
3. **Kısıtlı mod** yanındaki **Aç**'ı seçin.

Kısıtlı modu açsanız bile yüklü eklentiler kasanızda kalır, ancak Obsidian tarafından yok sayılır.

## Eklenti yetenekleri

Teknik sınırlamalar nedeniyle, Obsidian eklentileri belirli izinler veya erişim seviyeleriyle güvenilir şekilde kısıtlayamaz. Bu, eklentilerin Obsidian'ın erişim seviyelerini devralacağı anlamına gelir. Sonuç olarak, topluluk eklentilerinin neler yapabileceğine dair aşağıdaki örnekleri göz önünde bulundurun:

- Topluluk eklentileri bilgisayarınızdaki dosyalara erişebilir.
- Topluluk eklentileri internete bağlanabilir.
- Topluluk eklentileri ek programlar yükleyebilir.

> [!tip] 
> Hassas verilerle çalışıyorsanız ve bir topluluk eklentisi yüklemek istiyorsanız, kullanmadan önce eklenti üzerinde bağımsız bir güvenlik denetimi yapmanızı öneririz.

## Eklenti inceleme süreci

Topluluk eklentileri, eklenti mağazasına gönderildiklerinde ilk incelemeden geçer. Tüm eklentiler [Obsidian Geliştirici Politikaları](https://docs.obsidian.md/Developer+policies)'na uygun olmalıdır.

Obsidian ekibi küçüktür ve topluluk eklentilerinin her yeni sürümünü manuel olarak inceleyemez. Bunun yerine, eklentilerle ilgili sorunları tespit etmek ve bildirmek için topluluğun yardımına güveniyoruz.

- Bir topluluk eklentisinde küçük güvenlik açıkları keşfederseniz, bunları nasıl bildireceğiniz konusunda eklenti yazarının `security.md` veya `readme.md` dosyasına başvurun. Kritik kategorideki kusurlar için lütfen sorunu [[Yardım ve destek#Obsidian desteğiyle iletişime geçin|Obsidian desteğine]] de bildirin.
- Bir topluluk eklentisinin kötü amaçlı olduğundan şüpheleniyorsanız, bunu [[Yardım ve destek#Obsidian desteğiyle iletişime geçin|Obsidian desteğine]] bildirin veya moderatörlerimize DM gönderin.

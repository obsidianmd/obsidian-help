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

Tüm topluluk eklentileri [Obsidian Geliştirici Politikaları](https://docs.obsidian.md/Developer+policies)'na uygun olmalıdır. Obsidian, her eklenti sürümünü güvenlik açıkları, kod kalitesi sorunları ve kötü amaçlı yazılımlar için otomatik olarak tarar. [Eklenti dizinindeki](https://community.obsidian.md) her eklentinin sayfası, sonuçları bir güvenlik puan kartı olarak görüntüler.

Manuel incelemeler popüler, öne çıkan ve işaretlenen eklentiler için devam etmektedir.

- Bir topluluk eklentisinde güvenlik açığı keşfederseniz, bunu nasıl bildireceğiniz konusunda eklenti yazarının `security.md` veya `readme.md` dosyasına başvurun. Kritik kusurlar için sorunu [[Yardım ve destek#Obsidian desteğiyle iletişime geçin|Obsidian desteğine]] de bildirin.
- Bir topluluk eklentisinin kötü amaçlı olduğundan şüpheleniyorsanız, eklenti dizini sayfasından doğrudan işaretleyebilir, [[Yardım ve destek#Obsidian desteğiyle iletişime geçin|Obsidian desteğine]] bildirebilir veya moderatörlerimize DM gönderebilirsiniz.

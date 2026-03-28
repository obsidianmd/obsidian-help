---
permalink: backup
---
Bilgisayarınızı henüz yedeklemediyseniz, şimdi başlayın! Obsidian'ın [[Dosya Kurtarma]] eklentisi faydalıdır ancak sınırlıdır. Yalnızca belirli bir miktar veriyi kurtarabilir ve kurtarma bilgilerini cihaz başına saklar. Daha güçlü bir koruma için düzgün bir yedekleme sistemi uygulamanızı öneririz.

**Verilerinizi neden yedeklemelisiniz?**

Varsayılan olarak Obsidian, notlarınızı bulutta değil **yerel olarak** cihazınızda saklar. Bu, [verilerin tamamen size ait olduğu](https://obsidian.md/about) anlamına gelir ve size kontrol sağlar. Ancak yerel depolama, bozulma veya veri kaybı gibi sorunlardan etkilenebilir. Bu hiçbir zaman "olur mu" değil, "ne zaman olur" meselesidir. Verilerinizi yedeklemek bu kaçınılmazlıklara karşı koruma sağlar ve notlarınız üzerindeki kontrolünüzü sürdürmenizi garanti eder.

## Senkronizasyon bir yedekleme değildir

[[Obsidian Sync'e giriş|Obsidian Sync]], iCloud, OneDrive ve Dropbox gibi hizmetler notlarınızı farklı cihazlar arasında senkronize etmenize yardımcı olur. [[Sürüm geçmişi|not geri yükleme]] gibi özellikler sunabilseler de **yedekleme için tasarlanmamışlardır**. Senkronizasyon notlarınızı güncel tutar, ancak veri kaybına karşı koruma sağlamaz.

- **Senkronizasyon:** Senkronizasyon, dosyalarınızın tüm cihazlarda aynı olmasını sağlar. Bir cihazda bir dosyayı değiştirdiğinizde, senkronize edilen tüm cihazlarda güncellenir. Senkronizasyon hizmetlerinin "birincil" bir cihazı yoktur.
- **Yedekleme:** Yedekleme, veri kaybı veya bozulma durumunda kurtarmaya yardımcı olmak için verilerinizin bir kopyasını farklı bir konuma kaydeder. Yedeklemeler gerçek zamanlı güncellemeler veya iş birliği için tasarlanmamıştır.

Kasanızı düzgün şekilde yedeklemek için verilerinizin tek yönlü bir kopyasını oluşturan özel bir yedekleme aracı kullanın. Bu araç verilerinizi güvenli bir yedekleme konumuna gönderir ve cihazınızdaki verileri değiştirmez.

Senkronizasyonla birden fazla cihaz kullanıyorsanız, yedekleme cihazınız olarak **bir cihaz** seçin. Bu genellikle ana veya "birincil" cihazınızdır, yani en çok kullandığınız cihazdır. Çoğu senkronizasyon hizmetinin herhangi bir cihazı "birincil" olarak tanımadığını unutmayın; bu yalnızca yedeklemeleri yönetmenize yardımcı olacak bir kavramdır.

> [!Example] Obsidian Sync'i dizüstü bilgisayarınızda, tabletinizde, telefonunuzda ve iş masaüstünüzde kullanıyorsunuz. Kasanızı en çok iş masaüstünüzde, bazen dizüstü bilgisayarınızda ve nadiren tabletinizde veya telefonunuzda kullanıyorsunuz. Bu durumda iş masaüstünüz yedekleme için "birincil cihazınız" olacaktır.

## Topluluk eklentilerini kullanın

Obsidian Ekibi herhangi bir eklentiyi resmi olarak onaylayamasa da, kullanıcılar arasında dosyalarını yedeklemek için popüler hale gelen iki topluluk eklentisini tanıyoruz:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Kasanızın içeriğini bir [Git Deposuna](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) göndererek yedeklemek için bu eklentiyi kullanın. Notlarınızı sürüm kontrolü altına almanın ve uzak bir sunucuda güvenliklerini sağlamanın etkili bir yoludur. Ancak bu yöntemle verilerinizin [[#Bulut tabanlı hizmetleri kullanın|harici bir barındırma platformunda]] saklanabileceğini unutmayın.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Bu eklenti, kasanızın yerel kopyalarını seçtiğiniz bir klasörde arşivleme seçenekleriyle oluşturmanıza olanak tanır. Yerel ve bulut yedeklemelerini birleştirmek için Dropbox klasörü gibi bir senkronizasyon klasörü bile kullanabilirsiniz. Bu yöntem aşağıda açıklanan yedekleme seçenekleriyle **iyi bir şekilde eşleşir**.

## Bulut tabanlı hizmetleri kullanın

> [!info] Kasa konumunuzu seçtiğiniz yedekleme hizmetinde tutmanız önerilmez.

Yedeklemenizi bulutta tutmak, harici bir sabit disk veya USB bellek yerine fiziksel veri depolamaya bir alternatif ve tamamlayıcıdır. Harici bir sabit disk veya USB bellek kaybolabilir veya hasar görebilir. Dosyaları bulutta saklamanın en büyük avantajı, her zaman ve her yerden erişilebilir olmalarıdır. Dezavantajı ise çoğu yedekleme hizmetinin özel bir şirkete ait olmasıdır.

Güvenlik açısından, bulut yedeklemelerinde erişim ve güvenliğe her zaman dikkat etmelisiniz. [Worldbackupday](https://www.worldbackupday.com/en), kullanmayı düşünebileceğiniz güncel bir çevrimiçi yedekleme hizmetleri listesi sunar.

## Harici sürücüleri kullanın

**Sabit diskler ve SSD sürücüler**
Harici sabit disk yedeklemeleri, giderek artan bulut tabanlı dünyada hâlâ değerlidir ve ağırlıklı olarak veri depolama ve bilgisayar yedeklemeleri için kullanılır. Harici bir sürücünün en büyük dezavantajı, sürücünün bozulabilmesi veya kaybolabilmesidir. En büyük avantajı ise depolama alanının yalnızca bir kez satın alınması gerektiğidir. Harici sabit disk kullanımı genellikle bir [[#Bilgisayar yedeklemelerini kullanın|bilgisayar yedeklemesi]] ile birleştirilir.

**USB flash sürücüler**
Flash sürücüler (USB bellek, hafıza çubuğu veya kalem sürücü olarak da adlandırılır), hızlı yedeklemeler için basit ve etkili bir yöntemdir.

1. Flash sürücüyü bilgisayarınıza veya dizüstü bilgisayarınıza takın.
2. Cihazın tanındığından ve dosya sisteminize bağlandığından emin olun. Gerekirse flash sürücüyü dosya sisteminizle uyumlu olacak şekilde biçimlendirin.
3. Kasa klasörünüzü mevcut konumundan flash sürücüye kopyalayın.
4. Flash sürücüyü güvenli bir şekilde çıkarın.
5. Flash sürücüyü cihazınızdan çıkarın.

**NAS yedeklemesi**
Deneyimli kullanıcılar için verileri bir NAS (Ağa Bağlı Depolama) sunucusunda yedeklemek, birden fazla sabit disk ve ek kurtarma mekanizmalarına sahip olduğu için iyi ve güvenli bir yöntemdir.

> [!tip] Harici sürücünüz hassas bilgiler içeriyorsa, harici sürücüyü güvenli bir yerde, örneğin kilitli bir odada saklamanız önerilir.

## Bilgisayar yedeklemelerini kullanın

İşletim sisteminiz, ister bulutta çevrimiçi olarak ister harici bir sürücüde yedekleme oluşturmanıza yardımcı olma olanağı sunar.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: OneDrive veya harici bir sürücü ile yedekleme yapın.
- **[Mac](https://support.apple.com/en-us/104984)**: Time Machine ile harici bir cihaza yedekleme yapın.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: Seçtiğiniz bir dizine veya sürücüye `rsync` ile yedekleme yapın.

## Sonraki adımlar

Bu yardım sayfası yedekleme seçeneklerine kısa bir genel bakış sunmaktadır, ancak kapsamlı değildir. Daha ayrıntılı bilgi için [Worldbackupday.com](https://www.worldbackupday.com/en) adresini ziyaret edin veya [topluluğumuzda](https://obsidian.md/community) diğer Obsidian kullanıcılarına yedekleme stratejilerini sorun!

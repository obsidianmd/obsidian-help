---
permalink: symlinks
---
Kasanızda [sembolik bağlantılar](https://en.wikipedia.org/wiki/Symbolic_link) (symlink'ler) ve [kavşaklar](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) kullanarak dosyaları kasanızın ve [[Obsidian verileri nasıl saklar#Genel ayarlar|sistem klasörünün]] dışında saklayabilirsiniz.

> [!danger] Riski size ait olmak üzere kullanın
> Sembolik bağlantılar kullanmanızı kesinlikle önermiyoruz. Kasanızda sembolik bağlantılar ve kavşaklar kullanarak verilerinizi kaybetme veya bozma ya da Obsidian'ın çökmesine neden olma riski taşırsınız. Kasanızın ve ayarlarınızın düzenli yedeklerini aldığınızdan emin olun.

Aşağıda, aklınızda bulundurmanız gereken, farkında olduğumuz bazı sınırlamalar veya sorunlar yer almaktadır:

- Sonsuz döngü nedeniyle Obsidian'ın çökmesini önlemek için sembolik bağlantı döngüleri engellenmiştir.
- Sembolik bağlantı hedefleri, kasa kök dizininden veya diğer herhangi bir sembolik bağlantı hedefinden tamamen ayrık olmalıdır. Ayrık, bir klasörün diğerini içermemesi veya tam tersi anlamına gelir. Obsidian, kasanın üst klasörüne yönelik sembolik bağlantıları veya kasa içindeki bir klasörden aynı kasadaki başka bir klasöre olan sembolik bağlantıları yok sayar. Bu, kasanızda yinelenen dosyalar oluşmasını önlemek için bir güvenlik önlemidir; aksi takdirde bağlantılar belirsiz hale gelebilir.
- Sembolik bağlantılar Obsidian Sync veya _herhangi bir başka senkronizasyon türü_ ile iyi çalışmayabilir. Bir sembolik bağlantının hedefi, farklı bir Obsidian kasası tarafından senkronize edilen bir klasörse, (potansiyel olarak) senkronizasyon çakışmaları veya veri kaybı yaşayabilirsiniz. Git gibi bazı senkronizasyon araçları sembolik bağlantıları takip etmez, bunun yerine sembolik bağlantının işaret ettiği _yolu_ senkronize eder; bu da kasanızı başkalarıyla bu şekilde paylaşıyorsanız istenmeyen sonuçlar doğurabilir.
- Obsidian'ın dosya yöneticisi, dosyaları cihaz sınırları arasında taşıyamaz; bu nedenle kasanızdan farklı bir sürücüdeki bir klasöre sembolik bağlantı oluşturursanız, Obsidian'ın dosya gezginini kullanarak bu klasör ile diğer klasörler arasında dosya sürükleyemezsiniz. (Bu tür taşımalar için işletim sisteminizin dosya gezginini kullanmanız gerekecektir ve Obsidian taşımayı bir silme ve yeni bir dosya oluşturma olarak algılayacaktır. Ayrıca o dosyanın yoluna bağlı olan bağlantıları _güncellemeyecektir_.)
- Dosya sembolik bağlantıları (klasör sembolik bağlantılarının aksine) çalışabilir, ancak şu anda resmi olarak desteklenmemektedir. Obsidian dışında yapılan değişiklikler izlenmez; bu nedenle dosyayı doğrudan değiştirirseniz Obsidian değişikliği algılamaz, arama dizinlerini güncellemez vb.
- Kasalar arasında paylaşmak amacıyla `.obsidian/` klasörü altındaki öğelere sembolik bağlantı oluşturmak, ne yaptığınızı _gerçekten_ bilmiyorsanız **ayarlarınızı bozma olasılığı yüksektir**. Bu yolu tercih etmeye karar verirseniz, en azından yedekleriniz olsun.

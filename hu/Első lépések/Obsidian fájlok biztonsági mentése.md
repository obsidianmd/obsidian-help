---
permalink: backup
---
Ha még nem készítettél biztonsági mentést a számítógépedről, kezdd el most! Az Obsidian [[Fájl-visszaállítás]] bővítménye hasznos, de korlátozott. Csak bizonyos mennyiségű adatot tud visszaállítani, és eszközönként tárolja a visszaállítási információkat. A robusztusabb védelem érdekében javasoljuk, hogy vezess be egy megfelelő biztonsági mentési rendszert.

**Miért érdemes biztonsági mentést készíteni?**

Alapértelmezés szerint az Obsidian **helyben**, az eszközödön tárolja a jegyzeteidet, nem a felhőben. Ez azt jelenti, hogy az [adatok teljes mértékben a tieid](https://obsidian.md/about), és te rendelkezel felettük. A helyi tárolást azonban olyan problémák érinthetik, mint a sérülés vagy az adatvesztés. Nem az a kérdés, hogy ez bekövetkezik-e, hanem hogy mikor. Az adatok biztonsági mentése védelmet nyújt ezekkel az elkerülhetetlen eseményekkel szemben, és biztosítja, hogy megőrizd az irányítást a jegyzeteid felett.

## A szinkronizálás nem biztonsági mentés

Az olyan szolgáltatások, mint az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]], az iCloud, a OneDrive és a Dropbox segítenek szinkronizálni a jegyzeteidet a különböző eszközök között. Bár kínálhatnak olyan funkciókat, mint a [[Verziótörténet|jegyzet-visszaállítás]], **nem biztonsági mentésre lettek tervezve**. A szinkronizálás naprakészen tartja a jegyzeteidet, de nem véd az adatvesztéssel szemben.

- **Szinkronizálás:** A szinkronizálás biztosítja, hogy a fájljaid minden eszközön azonosak legyenek. Amikor módosítasz egy fájlt az egyik eszközön, az frissül az összes szinkronizált eszközön. A szinkronizálási szolgáltatásoknak nincs „elsődleges" eszközük.
- **Biztonsági mentés:** A biztonsági mentés az adataid másolatát egy másik helyre menti, hogy adatvesztés vagy sérülés esetén visszaállíthatók legyenek. A biztonsági mentések nem valós idejű frissítésre vagy együttműködésre szolgálnak.

A széfed megfelelő biztonsági mentéséhez használj egy dedikált biztonsági mentési eszközt, amely egyirányú másolatot készít az adataidról. Ez az eszköz az adataidat egy biztonságos mentési helyre küldi anélkül, hogy megváltoztatná az eszközödön lévő adatokat.

Ha több eszközön használsz szinkronizálást, válassz **egy eszközt** biztonsági mentési eszköznek. Ez általában a fő vagy „elsődleges" eszközöd, amelyet a leggyakrabban használsz. Vedd figyelembe, hogy a legtöbb szinkronizálási szolgáltatás egyetlen eszközt sem ismer el „elsődlegesként"; ez csak egy koncepció, amely segít a biztonsági mentések kezelésében.

> [!Example] Az Obsidian Sync-et használod a laptopodra, tabletedre, telefonodra és munkahelyi asztali gépedre. A széfedet leginkább a munkahelyi asztali gépeden használod, néha a laptopodon, és ritkán a tableteden vagy telefonodon. Ebben az esetben a munkahelyi asztali géped lenne az „elsődleges eszköz" a biztonsági mentéshez.

## Közösségi bővítmények használata

Bár az Obsidian csapata hivatalosan nem tud egyetlen konkrét bővítményt sem ajánlani, két közösségi bővítményt ismerünk el, amelyek népszerűvé váltak a felhasználók körében a fájljaik biztonsági mentéséhez:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Ezzel a bővítménnyel a széfed tartalmát egy [Git-tárhelyre](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) commitolva készíthetsz biztonsági mentést. Ez hatékony módja a jegyzeteid verziókezelésének és biztonságuk megőrzésének egy távoli szerveren. Azonban vedd figyelembe, hogy ezzel a módszerrel az adataid egy [[#Felhőalapú szolgáltatások használata|külső hosting platformon]] tárolódhatnak.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Ez a bővítmény lehetővé teszi, hogy helyi másolatokat készíts a széfedről egy általad választott mappába, archiválási lehetőségekkel. Akár szinkronizálási mappát is használhatsz, például Dropbox-mappát, hogy kombináld a helyi és a felhőalapú biztonsági mentéseket. Ez a módszer **jól kiegészíti** az alább leírt biztonsági mentési lehetőségeket.

## Felhőalapú szolgáltatások használata

> [!info] Nem javasolt, hogy a széfed helyét a választott biztonsági mentési szolgáltatásban tartsd.

A biztonsági mentés felhőben történő tárolása alternatívája és kiegészítése a fizikai adattárolásnak, külső merevlemez vagy USB-meghajtó helyett. Egy külső merevlemez vagy USB-meghajtó elveszhet vagy megsérülhet. A felhőben történő fájltárolás legnagyobb előnye, hogy bármikor, bárhonnan elérhetők. A hátránya, hogy a legtöbb biztonsági mentési szolgáltatás egy magáncég tulajdonában van.

A biztonság szempontjából mindig fokozottan figyelj a hozzáférésre és a biztonságra a felhőalapú biztonsági mentéseknél. A [Worldbackupday](https://www.worldbackupday.com/en) naprakész listát vezet a megfontolásra érdemes online biztonsági mentési szolgáltatásokról.

## Külső meghajtók használata

**Merevlemezek és SSD-meghajtók**
A külső merevlemezre történő biztonsági mentés még mindig értékes az egyre inkább felhőalapú világban, és főként adattárolásra és számítógépes biztonsági mentésekre használják. A külső meghajtó legnagyobb hátránya, hogy elromolhat vagy elveszhet. A legnagyobb előnye, hogy a tárhelyet csak egyszer kell megvásárolni. A külső merevlemez használata gyakran párosul [[#Számítógépes biztonsági mentések használata|számítógépes biztonsági mentéssel]].

**USB flash meghajtók**
A flash meghajtók (más néven pendrive-ok, memóriastick-ek) egyszerű és hatékony módszert jelentenek a gyors biztonsági mentéshez.

1. Csatlakoztasd a flash meghajtót a számítógépedhez vagy laptopodhoz.
2. Győződj meg róla, hogy az eszközt felismerte és csatolta a fájlrendszer. Szükség esetén formázd a flash meghajtót a fájlrendszereddel kompatibilisre.
3. Másold a széf mappáját a jelenlegi helyéről a flash meghajtóra.
4. Biztonságosan válaszd le a flash meghajtót.
5. Távolítsd el a flash meghajtót az eszközödből.

**NAS biztonsági mentés**
Tapasztalt felhasználók számára a NAS (Network Attached Storage – hálózati adattároló) szerverre történő biztonsági mentés jó és biztonságos módszer, mivel több merevlemezzel és további helyreállítási mechanizmusokkal rendelkezik.

> [!tip] Ha a külső meghajtód érzékeny információkat tartalmaz, javasolt a külső meghajtót biztonságos helyen tartani, például egy zárható helyiségben.

## Számítógépes biztonsági mentések használata

Az operációs rendszered maga is kínál lehetőséget biztonsági mentések készítésére, akár online a felhőbe, akár külső meghajtóra.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Biztonsági mentés OneDrive-val vagy külső meghajtóra.
- **[Mac](https://support.apple.com/en-us/104984)**: Biztonsági mentés külső eszközre a Time Machine segítségével.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` egy tetszőleges könyvtárba vagy meghajtóra.

## Következő lépések

Ez a súgóoldal rövid áttekintést nyújt a biztonsági mentési lehetőségekről, de nem teljes körű. További részletes információkért látogass el a [Worldbackupday.com](https://www.worldbackupday.com/en) oldalra, vagy kérdezd meg más Obsidian felhasználókat a [közösségünkben](https://obsidian.md/community) a biztonsági mentési stratégiáikról!

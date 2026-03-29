---
permalink: early-access
---
Kapjon korai hozzáférést a közelgő kiadásokhoz a _korai hozzáférésű verziók_ engedélyezésével. A korai hozzáférésű verziók csak [[Catalyst licenc|Catalyst-licenccel]] rendelkező felhasználók számára érhetők el.

> [!warning] Figyelmeztetés
> A korai hozzáférésű verziók béta kiadások. Új funkciókat tartalmaznak, de kevésbé lehetnek stabilak. Ne engedélyezze a korai hozzáférésű verziókat, ha megbízhatóbb élményt részesít előnyben.
> 
> Vegye figyelembe, hogy a közösségi bővítmények és témák fejlesztői a korai hozzáférésű verziókat mindenki mással egy időben kapják meg. Legyen türelmes azokkal a fejlesztőkkel, akiknek frissíteniük kell munkájukat az új funkciók támogatásához.

## Korai hozzáférésű verziók engedélyezése asztali gépen

A korai hozzáférésű verziók elérhetővé válásukkor történő fogadásához kövesse az alábbi lépéseket:

1. Nyissa meg a **[[Beállítások]]** menüt.
2. Az oldalsávon válassza az **Általános** lehetőséget.
3. A **Fiók → Saját fiók** alatt válassza a **Bejelentkezés** lehetőséget.
4. Az **E-mail** mezőbe adja meg e-mail címét.
5. A **Jelszó** mezőbe adja meg jelszavát.
6. A bejelentkezés után térjen vissza a **[[Beállítások]]** menübe.
7. Az oldalsávon válassza az **Általános** lehetőséget.
8. Az **Alkalmazás** alatt engedélyezze a **Korai hozzáférésű verziók telepítése** opciót.
9. Kattintson a **Frissítések ellenőrzése**, majd az **Újraindítás** gombra.

## Korai hozzáférésű verziók telepítése mobileszközökön

A korai hozzáférésű verziók mobileszközre történő telepítéséhez kövesse az alábbi lépéseket:

1. Töltse le és telepítse a [Discord](https://discord.com) alkalmazást.
2. Csatlakozzon az [Obsidian Discord szerverhez](https://discord.gg/obsidianmd).
3. [[Catalyst licenc#Discord jelvény megszerzése|Szerezze meg Discord jelvényét]] az insider csatornák eléréséhez.
4. Az `#insider-welcome` csatornában megtalálja a letöltéshez szükséges utasításokat az eszköztípusának megfelelően.

## Problémák jelentése és egyéb visszajelzés

Ha problémát fedez fel egy korai hozzáférésű verzióban, fontolja meg annak jelentését az Obsidian csapatának. Mielőtt problémát jelentene, keressen a [fórumon](https://forum.obsidian.md/) vagy a Discordon, hátha valaki már jelentette.

Probléma jelentéséhez használja az alábbi csatornák egyikét:

- A Discordon jelentse a problémát a megfelelő `#insider-release` csatornában.
- A fórumon hozzon létre új témát a [Bug reports](https://forum.obsidian.md/c/bug-reports/7) alatt.

Probléma jelentésekor adja meg a build verziót és az operációs rendszert, amelyen futtatja. A build verziót a **[[Beállítások]] → Névjegy → Alkalmazás → Jelenlegi verzió** alatt találja.

## Visszaváltás nyilvános verziókra asztali gépen

Ha vissza szeretne váltani a nyilvános verziók használatára (nem korai hozzáférésű) asztali gépen:

1. Tiltsa le a korai hozzáférésű verziókat.
   1. Nyissa meg a **[[Beállítások]]** menüt.
   2. Az oldalsávon válassza az **Általános** lehetőséget.
   3. Az **Alkalmazás** alatt tiltsa le a **Korai hozzáférésű verziók telepítése** opciót.
2. Zárja be az Obsidiant.
3. Törölje az `obsidian-VERSION.asar` fájlt, ahol a `VERSION` az Obsidian verziószáma.
   - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Indítsa újra az Obsidiant.

## Visszaváltás nyilvános verziókra mobilon

Ha vissza szeretne váltani a nyilvános verziók használatára (nem korai hozzáférésű) mobilon:

1. Készítsen biztonsági mentést a széf adatairól
2. Távolítsa el az Obsidiant
3. Telepítse újra az Obsidiant a Play Áruházból vagy az Apple App Store-ból
4. Állítsa vissza a széf adatait a biztonsági mentésekből
5. Nyissa meg az Obsidiant

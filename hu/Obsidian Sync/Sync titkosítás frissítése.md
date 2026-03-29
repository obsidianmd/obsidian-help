---
permalink: sync/migrate
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Sync tárolód áthelyezése egy másik régióba, titkosítási frissítés végrehajtása.'
---
Alapértelmezés szerint az Obsidian Sync [[Obsidian Sync/Biztonság és adatvédelem#Titkosítás|végpontok közötti titkosítást]] használ minden adatodhoz. Ez garantálja, hogy senki — még az Obsidian csapata sem — férhessen hozzá a jegyzeteidhez.

Az Obsidian időnként frissíti a Sync titkosítást a legmagasabb [[Obsidian Sync/Biztonság és adatvédelem|biztonsági]] szabványok fenntartása érdekében. Ha elérhető titkosítási frissítés, egy **Széf titkosításának fejlesztése** nevű opciót fogsz látni az **Obsidian Beállítások → Sync** menüben. Ez a folyamat lehetővé teszi a [[Sync régiók|Sync régió]] módosítását is.

## Titkosítási verziók

Minden új széf automatikusan a legújabb titkosítást használja. A meglévő széfek az átállítási asszisztens segítségével frissíthetők. Vedd figyelembe, hogy minden eszközön olyan Obsidian alkalmazásverziónak kell futnia, amely támogatja azt a Sync titkosítási verziót, amelyre átállítasz.

| Kiadás dátuma                                                           | Sync verzió | Minimum alkalmazásverzió |
| ----------------------------------------------------------------------- | ----------- | ------------------------ |
| [2025-08-22](https://obsidian.md/changelog/2025-08-22-sync/)            | 3           | 1.8.3                    |
| [2020-12-07](https://obsidian.md/changelog/2020-12-07-desktop-v0.9.21/) | 0           | 0.9.21                   |

## Titkosítás frissítése az átállítási asszisztenssel

Mielőtt folytatnád, készíts egy [[Obsidian fájlok biztonsági mentése|biztonsági mentést]] a széfedről az esetleges adatvesztés elkerülése érdekében. Ez a folyamat véglegesen törli a távoli trezorban lévő összes adatot a régi titkosítással, beleértve a verziótörténetet is.

> [!danger] Az átállítások destruktívak
> 
> **Mindig készíts [[Obsidian fájlok biztonsági mentése|biztonsági mentést]] a széfedről, mielőtt folytatnád az átállítást.**
> 
> Amikor átállítasz egy távoli trezort, az adataid lecserélődnek. Ez a következőket jelenti:
> 
> 1. A távoli adatok eltávolításra kerülnek az Obsidian szerverekről, és a széf adatai újra feltöltésre kerülnek a helyükre.
> 2. A széf teljes [[Verziótörténet|verziótörténete]] elvész.

1. Nyisd meg a **[[Beállítások]]** menüt.
2. Az oldalsávban válaszd a **Sync** lehetőséget.
3. Kattints a **Széf fejlesztése** gombra. Ez az opció csak akkor látható, ha elérhető frissítés a távoli trezorodhoz.
4. Ellenőrizd a biztonsági mentéseidet, majd kattints a **Folytatás** gombra.
5. A **Tárhely neve** mezőbe írd be a távoli trezor nevét.
6. A **Régió** mezőben válaszd ki a [[Az Obsidian Sync beállítása#Regionális sync szerverek|régiót]] a távoli trezorodhoz.
7. A **Titkosítási jelszó** mezőben válassz jelszót a széfedhez. Ez egy végpontok közötti titkosítással védett széfet hoz létre. A széf jelszava különálló az Obsidian-fiókoddal szemben, és minden széfedhez eltérő lehet. További információkért lásd: [[Biztonság és adatvédelem]].
8. Miután újra feltöltötted az adataidat az új titkosítással, csatlakozz újra az új Sync széfhez a többi eszközödön.

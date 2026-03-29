---
permalink: sync/headless
cssclasses:
  - reference
description: 'Az Obsidian Sync egy fej nélküli (headless) klienst kínál a tárolók szinkronizálásához az asztali alkalmazás használata nélkül. Hasznos CI-folyamatokhoz, ügynökökhöz és automatizált munkafolyamatokhoz. Szinkronizáld a legújabb változásokat, vagy tartsd a fájlokat folyamatosan naprakészen.'
---
Az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync]] fej nélküli klienst kínál széfek szinkronizálásához az asztali alkalmazás használata nélkül. Hasznos CI pipeline-okhoz, ügynökökhöz és automatizált munkafolyamatokhoz. Szinkronizálja a legújabb változásokat, vagy tartsa a fájlokat folyamatosan naprakészen.

Telepítse az [[Fej nélküli Sync|Obsidian Headless-t]] **(nyílt béta)**, hogy parancssorból kommunikáljon az [[Bevezetés az Obsidian Sync használatába|Obsidian Sync-kel]] az Obsidian asztali alkalmazás nélkül. A Fej nélküli Sync ugyanazokat a [[Biztonság és adatvédelem|titkosítási és adatvédelmi megoldásokat]] használja, mint az asztali alkalmazás, beleértve a végpontok közötti titkosítást.

## Gyors indítás

> [!error] Készítsen biztonsági mentést az adatairól, mielőtt elkezdené
> 1. Mindig készítsen biztonsági mentést az adatairól a kezdés előtt, arra az esetre, ha valami váratlan történne.
> 2. Ne használja *egyszerre* az asztali alkalmazás Sync-jét és a Fej nélküli Sync-et ugyanazon az eszközön, mert ez adatkonfliktusokat okozhat. Eszközönként csak egy szinkronizálási módszert használjon.

Telepítse az [[Fej nélküli Sync|Obsidian Headless-t]] **(nyílt béta)**:

```shell
npm install -g obsidian-headless
```

Aktív [[Csomagok és tárhelykorlátok|Obsidian Sync előfizetéssel]] kell rendelkeznie.

```shell
# Bejelentkezés
ob login

# Távoli széfek listázása
ob sync-list-remote

# Széf beállítása szinkronizáláshoz
cd ~/vaults/my-vault
ob sync-setup --vault "My Vault"

# Egyszeri szinkronizálás futtatása
ob sync

# Folyamatos szinkronizálás futtatása (figyeli a változásokat)
ob sync --continuous
```

## Parancsok

### `ob sync-list-remote`

A fiókjához elérhető összes távoli széf listázása, beleértve a megosztott széfeket is.

### `ob sync-list-local`

Helyileg konfigurált széfek és útvonalaik listázása.

### `ob sync-create-remote`

Új távoli széf létrehozása.

```
ob sync-create-remote --name "Vault Name" [--encryption <standard|e2ee>] [--password <password>] [--region <region>]
```

| Opció | Leírás |
| --- | --- |
| `--name` | Tárhely neve (kötelező) |
| `--encryption` | `standard` felügyelt titkosításhoz, `e2ee` végpontok közötti titkosításhoz |
| `--password` | Végpontok közötti titkosítási jelszó (ha nem adja meg, a rendszer kéri) |
| `--region` | Szerver [[Sync régiók\|régió]] (ha nem adja meg, automatikus) |

### `ob sync-setup`

Szinkronizálás beállítása helyi és távoli széf között.

```
ob sync-setup --vault <id-or-name> [--path <local-path>] [--password <password>] [--device-name <name>] [--config-dir <name>]
```

| Opció | Leírás |
| --- | --- |
| `--vault` | Távoli széf azonosítója vagy neve (kötelező) |
| `--path` | Helyi könyvtár (alapértelmezett: aktuális könyvtár) |
| `--password` | Végpontok közötti titkosítási jelszó (ha nem adja meg, a rendszer kéri) |
| `--device-name` | A [[Verziótörténet\|sync verziótörténetben]] megjelenő eszköznév |
| `--config-dir` | [[Konfigurációs mappa\|Konfigurációs mappa]] neve (alapértelmezett: `.obsidian`) |

### `ob sync`

Szinkronizálás futtatása egy konfigurált széfhez.

```
ob sync [--path <local-path>] [--continuous]
```

| Opció | Leírás |
| --- | --- |
| `--path` | Helyi széf útvonala (alapértelmezett: aktuális könyvtár) |
| `--continuous` | Folyamatos futtatás, változások figyelésével |

### `ob sync-config`

[[Sync beállítások és szelektív szinkronizálás|Sync beállítások]] megtekintése vagy módosítása egy széfhez. Opciók nélkül futtatva az aktuális konfigurációt jeleníti meg.

```
ob sync-config [--path <local-path>] [options]
```

| Opció                 | Leírás                                                                                                                                                                                                         |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--path`              | Helyi széf útvonala (alapértelmezett: aktuális könyvtár)                                                                                                                                                       |
| `--mode`              | Szinkronizálási mód: `bidirectional` (alapértelmezett, kétirányú), `pull-only` (csak letöltés, helyi változások figyelmen kívül hagyása) vagy `mirror-remote` (csak letöltés, helyi változások visszaállítása)  |
| `--conflict-strategy` | `merge` (összevonás) vagy `conflict` (konfliktus)                                                                                                                                                              |
| `--file-types`        | Szinkronizálandó melléklet típusok: `image`, `audio`, `video`, `pdf`, `unsupported` (vesszővel elválasztva, üres a törléshez)                                                                                  |
| `--configs`           | Szinkronizálandó konfiguráció kategóriák: `app`, `appearance`, `appearance-data`, `hotkey`, `core-plugin`, `core-plugin-data`, `community-plugin`, `community-plugin-data` (vesszővel elválasztva, üres a konfiguráció szinkronizálás letiltásához) |
| `--excluded-folders`  | Kizárandó mappák (vesszővel elválasztva, üres a törléshez)                                                                                                                                                     |
| `--device-name`       | Eszköznév a kliens azonosításához a sync verziótörténetben                                                                                                                                                     |
| `--config-dir`        | Konfigurációs mappa neve (alapértelmezett: `.obsidian`)                                                                                                                                                        |

### `ob sync-status`

Szinkronizálási állapot és konfiguráció megjelenítése egy széfhez.

```
ob sync-status [--path <local-path>]
```

### `ob sync-unlink`

Széf leválasztása a szinkronizálásról és a tárolt hitelesítő adatok eltávolítása.

```
ob sync-unlink [--path <local-path>]
```

## Natív modulok

Az Obsidian Headless tartalmaz egy előre lefordított natív bővítményt a fájl létrehozási idő (birthtime) beállításához Windows és macOS rendszeren. Ez megőrzi az eredeti létrehozási időbélyegeket a fájlok szerverről történő letöltésekor.

A bővítmény az N-API 3-as verziót célozza, így a lefordított binárisok ABI-stabilak és újrafordítás nélkül működnek a Node.js különböző verzióival.

Linux rendszeren a birthtime nem támogatott — a bővítmény nem szerepel benne, és a szinkronizálás normálisan működik nélküle.

Előre lefordított binárisok a következő platformokhoz állnak rendelkezésre:

- `win32-x64`
- `win32-arm64`
- `win32-ia32`
- `darwin-x64`
- `darwin-arm64`

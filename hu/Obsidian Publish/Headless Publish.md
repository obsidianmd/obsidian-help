---
permalink: publish/headless
cssclasses:
  - reference
description: Az Obsidian Publish egy fej nélküli (headless) klienst kínál a tárolók közzétételéhez az asztali alkalmazás használata nélkül. Hasznos CI-folyamatokhoz és automatizált munkafolyamatokhoz.
---
Az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]] egy fej nélküli klienst kínál széfek publikálásához az asztali alkalmazás használata nélkül. Hasznos CI pipeline-okhoz és automatizált munkafolyamatokhoz. Publikálja legújabb módosításait ütemezetten vagy egy build pipeline részeként.

Telepítse az [[Obsidian Headless|Obsidian Headless]] **(nyílt béta)** verziót, hogy parancssorból kezelhesse az [[Bevezetés az Obsidian Publish-be|Obsidian Publish]]-t az Obsidian asztali alkalmazás nélkül.

## Gyors indítás

Telepítse az [[Obsidian Headless|Obsidian Headless]] **(nyílt béta)** verziót:

```shell
npm install -g obsidian-headless
```

Aktív [[Bevezetés az Obsidian Publish-be|Obsidian Publish előfizetéssel]] kell rendelkeznie.

```shell
# Bejelentkezés
ob login

# Publish webhelyek listázása
ob publish-list-sites

# Helyi széf csatlakoztatása egy Publish webhelyhez
cd ~/vaults/my-vault
ob publish-setup --site "my-site"

# Változtatások előnézete publikálás nélkül
ob publish --dry-run

# Változtatások publikálása
ob publish
```

## Parancsok

### `ob publish-list-sites`

A fiókjához elérhető összes Publish webhely listázása.

### `ob publish-create-site`

Új Publish webhely létrehozása.

```
ob publish-create-site --slug <slug>
```

| Opció | Leírás |
| --- | --- |
| `--slug` | URL-azonosító a webhelyhez (pl. `my-notes` létrehozza a `publish.obsidian.md/my-notes` címet) |

### `ob publish-setup`

Helyi széf csatlakoztatása egy Publish webhelyhez.

```
ob publish-setup [--site <id-or-slug>] [--path <local-path>]
```

| Opció | Leírás |
| --- | --- |
| `--site` | Webhely azonosítója vagy slug-ja |
| `--path` | Helyi széf útvonala (alapértelmezett: aktuális könyvtár) |

### `ob publish`

Széf változtatásainak publikálása a webhelyre. Alapértelmezés szerint csak a metaadatokban `publish: true` értékkel rendelkező fájlok kerülnek bele.

```
ob publish [--path <local-path>] [--all] [--dry-run] [--yes]
```

| Opció | Leírás |
| --- | --- |
| `--path` | Helyi széf útvonala (alapértelmezett: aktuális könyvtár) |
| `--all` | Minden fájl bevonása, nem csak a publikálási jelzéssel rendelkezők |
| `--dry-run` | Változtatások megjelenítése publikálás nélkül |
| `--yes` | Publikálás megerősítés kérése nélkül |

### `ob publish-config`

Mappa szűrési beállítások megtekintése vagy módosítása egy széfhez. Opciók nélkül futtatva megjeleníti az aktuális konfigurációt.

```
ob publish-config [--path <local-path>] [options]
```

| Opció | Leírás |
| --- | --- |
| `--path` | Helyi széf útvonala (alapértelmezett: aktuális könyvtár) |
| `--includes` | Bevonandó mappák, vesszővel elválasztva (üres szöveg a törléshez) |
| `--excludes` | Kizárandó mappák, vesszővel elválasztva (üres szöveg a törléshez) |

### `ob publish-site-options`

Webhelyszintű megjelenítési és navigációs beállítások megtekintése vagy módosítása. Opciók nélkül futtatva megjeleníti az aktuális beállításokat.

```
ob publish-site-options [--path <local-path>] [options]
```

| Opció | Leírás |
| --- | --- |
| `--path` | Helyi széf útvonala (alapértelmezett: aktuális könyvtár) |
| `--site-name` | Webhely neve |
| `--index-file` | Kezdőlap fájl útvonala |
| `--logo` | Logó fájl útvonala (üres szöveg a törléshez) |
| `--show-navigation` | Navigációs oldalsáv megjelenítése |
| `--show-graph` | Gráf nézet megjelenítése |
| `--show-outline` | Tartalomjegyzék megjelenítése |
| `--show-search` | Keresés megjelenítése |
| `--show-backlinks` | Visszahivatkozások megjelenítése |
| `--show-hover-preview` | Felugró előnézet megjelenítése |
| `--show-theme-toggle` | Témaváltó megjelenítése |
| `--default-theme` | Alapértelmezett téma: `light` vagy `dark` |
| `--readable-line-length` | Olvasható sorhossz |
| `--strict-line-breaks` | Szigorú sortörés |
| `--hide-title` | Beágyazott cím elrejtése |
| `--sliding-window` | Csúszó ablak mód |
| `--nav-order` | Navigációs sorrend, vesszővel elválasztott útvonalak (üres szöveg a törléshez) |
| `--nav-hidden` | Rejtett navigációs elemek, vesszővel elválasztott útvonalak (üres szöveg a törléshez) |

### `ob publish-unlink`

Széf leválasztása egy Publish webhelyről.

```
ob publish-unlink [--path <local-path>]
```

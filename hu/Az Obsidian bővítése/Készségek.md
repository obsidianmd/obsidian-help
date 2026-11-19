---
permalink: skills
cssclasses: null
description: 'Az Obsidian Skills megtanítja az AI-ügynököknek, hogyan dolgozzanak a tárolóddal és az Obsidian fájlformátumokkal.'
---
Az Obsidian Készségek olyan utasítások, amelyek megtanítják az AI-ügynököknek, hogyan dolgozzanak az Obsidiannel. A nyílt [Agent Skills](https://agentskills.io/specification) formátumot követik, így bármely ügynökkel működnek, amely támogatja a készségeket, beleértve a Claude Code-ot, Claude-ot, ChatGPT-t, Cursort, Gemini CLI-t, GitHub Copilotot, Grok Botot, OpenCode-ot és [sok mást](https://agentskills.io/clients).

Az Obsidian Készségekkel egy ügynök képes:

- Jegyzeteket írni [[Obsidian Flavored Markdown]] formátumban, [[Belső hivatkozások|wikihivatkozásokkal]], beágyazásokkal, felhívásokkal és [[Tulajdonságok|tulajdonságokkal]].
- [[Bevezetés a Bázisokba|Bázisokat]] és [[Canvas]] fájlokat létrehozni és szerkeszteni.
- Jegyzeteket keresni, olvasni és kezelni a futó alkalmazásban az [[Obsidian CLI]] segítségével.
- Széfeket szinkronizálni és publikálni az asztali alkalmazás nélkül az [[Obsidian Headless]] használatával.

A készségek nyílt forráskódúak az [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) címen.

## Telepítés

Az Obsidian hivatalos bővítmény a ChatGPT, Codex, Cursor és Grok Bot számára. Más ügynökök a készségeket a GitHubról telepítik.

### ChatGPT és Codex

Add hozzá az [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) bővítményt a ChatGPT bővítmény-könyvtárából. A bővítmény mind a ChatGPT-ben, mind a Codexben működik.

### Cursor

Telepítsd az [Obsidian](https://cursor.com/marketplace/obsidian) bővítményt a Cursor Marketplace-ről.

### Grok Bot

Nyisd meg az [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) oldalt, és válaszd az **Add to Grok Bot** lehetőséget.

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Az új készségek későbbi beszerzéséhez futtasd a `claude plugin update obsidian@obsidian-skills` parancsot.

### Claude

A Claude minden készséget ZIP-fájlként tölt fel, ezért csak azokat a készségeket add hozzá, amelyekre szükséged van:

1. Töltsd le az [obsidian-skills](https://github.com/obsidianmd/obsidian-skills/archive/refs/heads/main.zip) csomagot és csomagold ki.
2. A `plugins/obsidian/skills/` mappában tömörítsd az egyes kívánt készségek mappáját ZIP-fájlba, pl. `obsidian-markdown.zip`.
3. A Claude-ban menj a **Customize** → **Skills** menübe, válaszd a **+** → **Create skill** → **Upload a skill** lehetőséget, és válaszd ki a ZIP-fájlt.

Lásd a [Using skills in Claude](https://support.claude.com/en/articles/12512180-using-skills-in-claude) oldalt a készségeket támogató csomagokról.

### Gemini CLI

```shell
gemini extensions install https://github.com/obsidianmd/obsidian-skills
```

### GitHub Copilot, OpenCode és más ügynökök

Telepítsd az [npx skills](https://github.com/vercel-labs/skills) segítségével, amely megkérdezi, melyik ügynökökbe szeretnéd telepíteni:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Kézi telepítéshez másold a `plugins/obsidian/skills/` mappákat az ügynököd készségek mappájába, pl. `~/.copilot/skills/` a GitHub Copilot esetén.

## Tartalmazott készségek

| Készség             | Funkció                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | [[Obsidian Flavored Markdown]] jegyzetek létrehozása és szerkesztése.                                                         |
| `obsidian-bases`    | [[Bázisok szintaxisa|Bázisok]] létrehozása és szerkesztése nézetekkel, szűrőkkel, képletekkel és összegzésekkel.              |
| `json-canvas`       | [[Canvas]] fájlok létrehozása és szerkesztése a [JSON Canvas](https://jsoncanvas.org/) formátum használatával.                 |
| `obsidian-cli`      | Interakció a széfeddel az [[Obsidian CLI]] segítségével, beleértve a bővítmény- és témafejlesztést.                           |
| `obsidian-headless` | Széfek szinkronizálása és publikálása parancssorból az [[Obsidian Headless]] használatával.                                    |
| `defuddle`          | Tiszta Markdown kinyerése weboldalakból a [Defuddle](https://github.com/kepano/defuddle) segítségével.                        |
| `knap`              | Markdown sablonok renderelése JSON- vagy CSV-adatokból a [Knap](https://github.com/obsidianmd/knap) segítségével.             |

## Követelmények

Az `obsidian-cli` készséghez szükséges, hogy az Obsidian asztali alkalmazás fusson, az [[Obsidian CLI#Az Obsidian CLI telepítése|Obsidian CLI be legyen kapcsolva]], és egy olyan ügynök, amely parancsokat tud futtatni a számítógépeden.

A Markdown, Bázisok és Canvas készségek csak fájlformátumokat írnak le, így bármely ügynökkel működnek, amely képes fájlokat olvasni és írni a széfedben.

A Defuddle, Knap és Obsidian Headless különálló eszközök, amelyek nincsenek a készségekhez csomagolva. Ha valamelyik hiányzik, a készség engedélyt kér az npm-ről történő telepítés előtt.

## Adatvédelem

Az Obsidian Készségek önmagukban nem küldenek semmit. Amikor egy ügynök használja őket, az általa olvasott jegyzetek a beszélgetés részévé válnak, és az általad használt AI-modell dolgozza fel őket. Tekintsd át az ügynököd adatvédelmi szabályzatát, mielőtt érzékeny jegyzeteket tartalmazó széfre irányítanád.

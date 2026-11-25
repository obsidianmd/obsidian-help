---
permalink: skills
cssclasses: null
description: 'Az Obsidian Skills megtanítja az AI-ügynököknek, hogyan dolgozzanak a tárolóddal és az Obsidian fájlformátumokkal.'
---
Az Obsidian Skills olyan utasítások, amelyek megtanítják az AI-ügynököknek, hogyan dolgozzanak az Obsidiannel. A nyílt [Agent Skills](https://agentskills.io/specification) formátumot követik, így bármely ügynökkel működnek, amely támogatja a készségeket, beleértve a Claude Code-ot, Claude-ot, ChatGPT-t, Cursort, Gemini CLI-t, GitHub Copilotot, Grok Botot, Hermes Agentet, OpenCode-ot és [sok mást](https://agentskills.io/clients).

Az Obsidian Skills-szel egy ügynök képes:

- Jegyzeteket írni [[Obsidian Flavored Markdown]] formátumban, [[Belső hivatkozások|wikihivatkozásokkal]], beágyazásokkal, felhívásokkal és [[Tulajdonságok|tulajdonságokkal]].
- [[Bevezetés a Bázisokba|Bázisokat]] és [[Canvas]] fájlokat létrehozni és szerkeszteni.
- Jegyzeteket keresni, olvasni és kezelni a futó alkalmazásban az [[Obsidian CLI]] segítségével.
- Széfeket szinkronizálni és publikálni az asztali alkalmazás nélkül az [[Obsidian Headless]] használatával.

A készségek nyílt forráskódúak az [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) címen.

## Telepítés

Az Obsidian hivatalos bővítmény a Claude, ChatGPT, Codex, Cursor, Grok Bot és Hermes Agent számára. Más ügynökök a készségeket a GitHubról telepítik.

### ChatGPT és Codex

Add hozzá az [Obsidian](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) bővítményt a ChatGPT bővítmény-könyvtárából. A bővítmény mind a ChatGPT-ben, mind a Codexben működik.

### Cursor

Telepítsd az [Obsidian](https://cursor.com/marketplace/obsidian) bővítményt a Cursor Marketplace-ről.

### Grok Bot

Nyisd meg az [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) oldalt, és válaszd az **Add to Grok Bot** lehetőséget.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Claude Code

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Az új készségek későbbi beszerzéséhez futtasd a `claude plugin update obsidian@obsidian-skills` parancsot.

### Claude

Add hozzá az [Obsidian](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) bővítményt a Claude bővítmény-könyvtárából.

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

Az Obsidian Skills önmagában nem küld semmit. Amikor egy ügynök használja, az általa olvasott jegyzetek a beszélgetés részévé válnak, és az általad használt AI-modell dolgozza fel őket. Tekintsd át az ügynököd adatvédelmi szabályzatát, mielőtt érzékeny jegyzeteket tartalmazó széfre irányítanád.

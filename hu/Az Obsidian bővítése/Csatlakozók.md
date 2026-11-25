---
permalink: connectors
cssclasses: null
description: 'Az Obsidian Képességek megtanítják az AI-ügynököknek, hogyan dolgozzanak a tárolóddal és az Obsidian fájlformátumokkal.'
---
A csatlakozók lehetővé teszik, hogy az Obsidiant bármely AI ágenshez csatlakoztasd, beleértve a Claude-ot, ChatGPT-t, Antigravity-t, Cursort, GitHub Copilotot, Grok Botot, Hermest, Kirót, Muse-t, OpenCode-ot és [sok mást](https://agentskills.io/clients).

Ez azt jelenti, hogy az ágenseid megtanulhatják, hogyan:

- Írjanak jegyzeteket [[Obsidian Flavored Markdown]] formátumban, [[Belső hivatkozások|wikihivatkozásokkal]], beágyazásokkal, felhívásokkal és [[Tulajdonságok|tulajdonságokkal]].
- Hozzanak létre és szerkesszenek [[Bevezetés a Bázisokba|Bázis]] és [[Canvas]] fájlokat.
- Keressenek, olvassanak és kezeljenek jegyzeteket a futó alkalmazásban az [[Obsidian CLI]] segítségével.
- Szinkronizáljanak és publikáljanak széfeket az asztali alkalmazás nélkül az [[Obsidian Headless]] használatával.

A képességek nyílt forráskódúak az [obsidianmd/obsidian-skills](https://github.com/obsidianmd/obsidian-skills) oldalon.

## Telepítés

Az Obsidiant megtalálhatod a bővítménylistában való kereséssel a Claude-ban, ChatGPT-ben, Dots-ban, Cursorban, Grok Botban, Hermesben és Kiróban. A legtöbb más ágens telepíteni tudja a képességeket, ha elküldesz nekik egy hivatkozást erre az oldalra.

### Claude

Add hozzá az [Obsidiant](https://claude.ai/customize/plugins/id/a38fa062-ebd3-48e0-9a0a-1875a6e94ad5%40anthropic-plugin-directory) a hivatalos Claude bővítménykönyvtárból.

A Claude Code CLI-hez használd:

```shell
claude plugin marketplace add obsidianmd/obsidian-skills
claude plugin install obsidian@obsidian-skills
```

Az új képességek későbbi beszerzéséhez futtasd a `claude plugin update obsidian@obsidian-skills` parancsot.

### ChatGPT

Add hozzá az [Obsidiant](https://chatgpt.com/plugins/plugins_6aee4fde227881919d61b034b1c31096) a ChatGPT bővítménykönyvtárból. A bővítmény működik a ChatGPT-ben, Codexben és Dots-ban.

### Antigravity

Az Antigravity CLI-ben futtasd:

```shell
agy plugin install https://github.com/obsidianmd/obsidian-skills
```

### Grok Bot

Nyisd meg az [Obsidian for Grok Bot](https://x.ai/bot/plugin/88871845) oldalt, és válaszd az **Add to Grok Bot** lehetőséget.

### Muse

Kérd meg a Muse-t, hogy telepítse a képességeket a https://github.com/obsidianmd/obsidian-skills oldalról.

A Muse a Meta felhőjében fut, így az `obsidian-cli` képesség ott nem működik. Ha az Obsidian Headlesst használod a Muse-ban, a bejelentkezés és a széf szinkronizálása a Meta felhőjében történik.

### Cursor

Telepítsd az [Obsidiant](https://cursor.com/marketplace/obsidian) a Cursor Marketplace-ből.

### Hermes Agent

```shell
hermes plugins install obsidian
```

### Kiro

```shell
kiro-cli powers install obsidian
```

### GitHub Copilot, OpenCode és más ágensek

Telepítés az [npx skills](https://github.com/vercel-labs/skills) segítségével, amely megkérdezi, mely ágensekbe szeretnéd telepíteni:

```shell
npx skills add https://github.com/obsidianmd/obsidian-skills
```

Kézi telepítéshez másold a `plugins/obsidian/skills/` mappákat az ágensed képességek mappájába, pl. a `~/.copilot/skills/` mappába GitHub Copilot esetén.

## Tartalmazott képességek

| Képesség            | Funkció                                                                                                                       |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `obsidian-markdown` | [[Obsidian Flavored Markdown]] jegyzetek létrehozása és szerkesztése.                                                         |
| `obsidian-bases`    | [[Bázisok szintaxisa|Bázisok]] létrehozása és szerkesztése nézetekkel, szűrőkkel, képletekkel és összegzésekkel.              |
| `json-canvas`       | [[Canvas]] fájlok létrehozása és szerkesztése a [JSON Canvas](https://jsoncanvas.org/) formátum használatával.                 |
| `obsidian-cli`      | Interakció a széfeddel az [[Obsidian CLI]] segítségével, beleértve a bővítmény- és témafejlesztést.                           |
| `obsidian-headless` | Széfek szinkronizálása és publikálása parancssorból az [[Obsidian Headless]] segítségével.                                     |
| `defuddle`          | Tiszta Markdown kinyerése weboldalakból a [Defuddle](https://github.com/kepano/defuddle) használatával.                       |
| `knap`              | Markdown sablonok renderelése JSON vagy CSV adatokból a [Knap](https://github.com/obsidianmd/knap) használatával.             |

## Követelmények

Az `obsidian-cli` képességhez szükséges, hogy az Obsidian asztali alkalmazás fusson [[Obsidian CLI#Az Obsidian CLI telepítése|bekapcsolt Obsidian CLI-vel]], valamint egy olyan ágens, amely parancsokat tud futtatni a számítógépeden.

A Markdown, Bázisok és Canvas képességek csak fájlformátumokat írnak le, így bármely ágensben működnek, amely képes fájlokat olvasni és írni a széfedben.

A Defuddle, a Knap és az Obsidian Headless különálló eszközök, amelyek nincsenek a képességekkel együtt csomagolva. Ha valamelyik hiányzik, a képesség engedélyt kér a telepítés előtt az npm-ből.

## Adatvédelem

Az Obsidian csatlakozók önmaguktól nem küldenek semmit. Amikor egy ágens használja őket, az általa olvasott jegyzetek a beszélgetés részévé válnak, és az általad használt AI modell dolgozza fel őket. Tekintsd át az ágensed adatvédelmi szabályzatát, mielőtt érzékeny jegyzeteket tartalmazó széfre irányítanád.

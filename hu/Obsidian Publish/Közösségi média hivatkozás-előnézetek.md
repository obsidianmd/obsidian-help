---
permalink: publish/social-share
---
Sok közösségi hálózat gazdag előnézetet jelenít meg a weboldaladról, amikor egy felhasználó megosztja a hivatkozást. A [[Tulajdonságok]] használatával testreszabhatod, hogyan jelenjenek meg a jegyzeteid az előnézetben.

> [!warning] Figyelmeztetés
> Az ebben a szakaszban felülírt címkék **csak** a web-crawlerek számára láthatók. A hagyományos webböngészők a módosítatlan oldalt kapják a teljesítmény érdekében.

## Leírás

Az Obsidian automatikusan generál egy leírást a jegyzet tartalma alapján, de sajátot is megadhatsz a `description` használatával.

```yaml
---
description: Bevezetés a Naprendszerünkbe.
---
```

> [!note] Meta címkék
> A `description` felülírja az automatikusan generált leírást a `<meta name="description" content="...">` címkében, valamint az `og:description` és `twitter:description` megfelelőit.

## Kép

Egyéni képet használhatsz a hivatkozás előnézetéhez, ha hozzáadod az `image` vagy `cover` tulajdonságot a kép elérési útjával. A képet fel kell tölteni a Publish-re.

Az útvonal lehet abszolút útvonal a széfed gyökerétől:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

A kép elérési útja kis-/nagybetűre érzékeny. Az előző példánkban az útvonal egy `Cover image.png` nevű képre mutat. Az alábbi útvonal nem fog működni, mert helytelen kis-/nagybetűket használ.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

Abszolút útvonal helyett a széfedben külső URL-t is használhatsz:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

Az `image` és a `cover` azonos funkciójú. Csak az egyiket használd.

> [!note] Meta címkék
> Az `image` és `cover` felülírja az automatikusan generált képet a `<meta property="og:image" content="...">` címkében.

---
permalink: publish/security
---
Můžete si vybrat poznámky, které chcete publikovat na [[Úvod do Obsidian Publish|Obsidian Publish]]. Ostatní poznámky zůstanou bezpečně ve vašem trezoru.

Na servery Obsidian jsou odeslány pouze poznámky, které si zvolíte k publikování, a všechny poznámky, které zrušíte, budou odstraněny.

## Ochrana heslem

Pro lepší kontrolu přístupu k vaší publikované stránce nastavte heslo stránky. Návštěvníci budou při pokusu o přístup vyzváni k zadání hesla. Pokud se později rozhodnete heslo stránky odstranit, celá stránka se opět stane veřejně viditelnou.

> [!warning] Individuální ochrana heslem pro jednotlivé publikované poznámky není v současné době podporována.

### Přidání hesla stránky

1. V postranním panelu nástrojů, vlevo od okna aplikace, klikněte na **Publikovat změny** ![[lucide-send.svg#icon]].
2. V dialogovém okně **Publikovat změny** klikněte na **Změna nastavení stránky** ![[lucide-cog.svg#icon]].
3. V části **Další nastavení webu**, vedle **Hesla**, klikněte na **Spravovat**.
4. Klikněte na **Nové heslo**.
5. Do pole **Heslo** zadejte heslo pro vaši stránku.
6. (Volitelné) Do pole **Přezdívka** zadejte přezdívku pro heslo, například osobu, které chcete udělit přístup ke stránce.
7. Klikněte na **Přidat toto heslo**.

### Odstranění hesla stránky

1. V postranním panelu nástrojů, vlevo od okna aplikace, klikněte na **Publikovat změny** ![[lucide-send.svg#icon]].
2. V dialogovém okně **Publikovat změny** klikněte na **Změna nastavení stránky** ![[lucide-cog.svg#icon]].
3. V části **Další nastavení webu**, vedle **Hesla**, klikněte na **Spravovat**.
5. Klikněte na ikonu křížku vedle hesla, které chcete smazat.

## Sběr dat
### Data návštěvníků

Ve výchozím nastavení Obsidian Publish **neshromažďuje** data návštěvníků, neukládá cookies ani nezpracovává osobní údaje. Můžete však implementovat analytiku nebo zaznamenávat další uživatelská data pomocí [[Přizpůsobení stránky|přizpůsobení stránky]].

Jako vlastník stránky jste odpovědní za dodržování GDPR a předpisů o ochraně osobních údajů ve vašem regionu. To zahrnuje vytvoření vlastního oznamovacího banneru, který lze implementovat pomocí publish.js, a přidání stránky se zásadami ochrany osobních údajů na vaši stránku.

## Přístup

Obsidian má smlouvu se společností [Cloudflare](https://www.cloudflare.com) na poskytování hostingu pro naše Publish stránky. Servery jsou hostovány v San Franciscu, Kalifornie.

### Správa přístupu k Obsidian Publish ve vaší síti

Pro regulaci přístupu k Obsidian Publish ve vaší síti je třeba spravovat následující domény:

- Frontend: `publish.obsidian.md`
- Backend: `publish-main.obsidian.md`

Backendové služby navíc používají následující subdomény: `publish-xx.obsidian.md`, kde `xx` je číslo v rozsahu od `1 - 100`.

> [!tip] Pokud to váš firewallový systém podporuje, doporučujeme povolit `publish-*.obsidian.md`, aby bylo možné přizpůsobit se našemu průběžnému rozšiřování subdomén.

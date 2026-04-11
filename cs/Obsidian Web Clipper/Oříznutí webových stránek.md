---
permalink: web-clipper/capture
---
Jakmile nainstalujete rozšíření prohlížeče [[Úvod do Obsidian Web Clipper|Web Clipper]], můžete k němu přistupovat několika způsoby v závislosti na vašem prohlížeči:

1. Ikona Obsidian na panelu nástrojů vašeho prohlížeče.
2. Klávesové zkratky pro aktivaci rozšíření z klávesnice.
3. Kontextové menu, kliknutím pravým tlačítkem na navštívenou webovou stránku.

Pro uložení stránky do Obsidian klikněte na tlačítko **Přidat do Obsidianu**.

## Zachycení stránky

Když otevřete rozšíření, Web Clipper extrahuje data z aktuální webové stránky podle nastavení ve vaší [[Obsidian Web Clipper/Šablony|šabloně]]. Můžete si vytvořit vlastní šablony a přizpůsobit výstup pomocí [[Proměnné|proměnných]] a [[Filtry|filtrů]].

Ve výchozím nastavení se Web Clipper pokouší inteligentně extrahovat pouze hlavní obsah článku, s vyloučením ostatních prvků na stránce. Toto chování však můžete přepsat následujícími způsoby:

- Pokud existuje vlastní šablona, použije vaši šablonu.
- Pokud je přítomen výběr, použije výběr. Pomocí `Ctrl/Cmd+A` můžete vybrat celou stránku.
- Pokud jsou přítomna nějaká [[Zvýrazňovač|zvýraznění]], použije zvýraznění.

## Stahování obrázků

Obrázky se při použití Web Clipper automaticky nestahují. Místo toho obrázky odkazují na svou webovou URL adresu. To šetří místo ve vašem trezoru, ale znamená to, že obrázky nebudou přístupné offline nebo pokud URL přestane fungovat.

Obrázky pro jakýkoli soubor v Obsidian můžete stáhnout pomocí [[Paleta příkazů|příkazu]] s názvem **Stáhnout přílohy pro aktuální soubor**. Tento příkaz lze v Obsidian také namapovat na klávesovou zkratku.

## Klávesové zkratky

Web Clipper obsahuje klávesové zkratky, které můžete použít k urychlení pracovního postupu. Chcete-li změnit mapování kláves, přejděte do **Nastavení Web Clipper** → **Obecné** a postupujte podle pokynů pro váš prohlížeč. Mapování lze změnit ve všech prohlížečích kromě Safari, které úpravu klávesových zkratek nepodporuje.

| Akce                      | macOS          | Windows/Linux   |
| ------------------------- | -------------- | --------------- |
| Otevřít clipper            | `Cmd+Shift+O` | `Ctrl+Shift+O` |
| Rychlé zachycení           | `Opt+Shift+O` | `Alt+Shift+O`  |
| Přepnout zvýrazňovač       | `Opt+Shift+H` | `Alt+Shift+H`  |
| Přepnout čtečku            | `Opt+Shift+R` | `Alt+Shift+R`  |

## Funkce rozhraní

Rozhraní Web Clipper je rozděleno do čtyř částí:

1. **Záhlaví**, kde můžete přepínat šablony, zapnout [[Zvýrazňovač|zvýrazňování]], [[Čtečka|režim čtení]] a přistupovat k nastavení.
2. **Vlastnosti** zobrazují [[Vlastnosti|metadata]] extrahovaná ze stránky, která budou uložena jako [[Vlastnosti]] v Obsidian.
3. **Obsah poznámky**, který bude uložen do Obsidian.
4. **Zápatí** umožňuje vybrat trezor a složku a přidat do Obsidianu.

Funkce záhlaví zahrnují:

- ![[lucide-chevrons-up-down.svg#icon]] Přepínač **Šablona** pro použití uložených [[Obsidian Web Clipper/Šablony|šablon]] přidaných v nastavení rozšíření.
- ![[lucide-more-horizontal.svg#icon]] Tlačítko **Více** pro zobrazení proměnných stránky, které můžete použít v šablonách.
- ![[lucide-highlighter.svg#icon]] Tlačítko **Zvýrazňovač** pro zapnutí [[Zvýrazňovač|zvýrazňování]].
- ![[lucide-book-icon.svg#icon]] Tlačítko **Čtečka** pro zapnutí [[Čtečka|režimu čtení]].
- ![[lucide-picture-in-picture-2.svg#icon]] Tlačítko **Vložit** pro přesunutí Web Clipper z vyskakovacího okna do stránky.
- ![[lucide-settings.svg#icon]] Tlačítko **Nastavení** pro otevření nastavení rozšíření.

Funkce zápatí zahrnují:

- Tlačítko **Přidat do Obsidianu** pro uložení dat do Obsidian.
- Rozbalovací nabídku **Trezor** pro přepínání mezi uloženými trezory přidanými v nastavení Web Clipper.
- Pole **Složka** pro definování složky, do které se má uložit.
- **Překladač** pro spouštění [[Překladač|výzev v přirozeném jazyce]] na stránce.

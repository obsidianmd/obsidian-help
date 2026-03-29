---
permalink: import/zettelkasten
---
Pokud jste k pojmenovávání a propojování poznámek používali metodu Zettelkasten, možná budete potřebovat převést odkazy z `[[UID]]` na `[[UID Název mé poznámky]]`.

Například pokud máte poznámku s názvem `202301011230 Název mé poznámky` a odkazujete na ni z jiné poznámky pouze pomocí UID, `[[202301011230]]`. Protože Obsidian k rozpoznání interních odkazů používá celé jméno poznámky, odkazy tohoto typu přestanou fungovat.

K aktualizaci všech odkazů `[[UID]]` ve vašem trezoru tak, aby místo toho používaly celé jméno poznámky, použijte [[Importér Markdown formátu]].

1. Otevřete **[[Nastavení]]**.
2. V části **Základní pluginy** zapněte **Importér Markdown formátu** a zavřete okno Nastavení.
3. V postranním panelu nástrojů na levé straně okna aplikace vyberte **Open format convert** ![[lucide-binary.svg#icon]].
4. Zapněte **Opravení Zettelkasten odkazů**.
5. Vyberte **Začít převod**. Tím se převedou všechny poznámky v celém vašem trezoru.

> [!tip] Zkrášlení Zettelkasten odkazů
> [[Importér Markdown formátu]] může také zkrášlit vaše odkazy odebráním UID ze zobrazovaného názvu. Například `[[UID]]` se převede na `[[UID Název mé poznámky|Název mé poznámky]]`.
>
> Pro zkrášlení vašich Zettelkasten odkazů zapněte **Zkrášlení Zettelkasten odkazů** v okně importéru Markdown formátu.

Můžete také použít [[Tvůrce jedinečných poznámek]] k vytváření Zettelkasten poznámek v Obsidian.

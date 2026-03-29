---
permalink: publish/publish
publish: true
mobile: true
description: 'Zjistěte, jak publikovat svůj obsah pomocí Obsidian Publish.'
---
Tato stránka vysvětluje, jak spravovat váš publikovaný obsah. Informace o přizpůsobení stylu vaší stránky najdete v části [[Přizpůsobení stránky]].

## Předpoklady

- Účet Obsidian. Pokud jej nemáte, [zaregistrujte se](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Aktivní předplatné Obsidian Publish. Pokud jej nemáte, předplaťte si ho na [řídicím panelu vašeho účtu](https://obsidian.md/account/publish).
- Základní plugin **Publish** je [[Nastavení Obsidian Publish#Zapnutí Obsidian Publish|zapnutý]].
- Je vytvořena [[Správa stránek#Vytvoření nové stránky|stránka Publish]].

## Publikování poznámek

1. Na **postranním panelu nástrojů** vyberte **Publish changes** ![[lucide-send.svg#icon]].
2. V dialogovém okně **Publish changes** vyberte **NEW** pro zobrazení všech nepublikovaných poznámek.
3. Vyberte poznámky, které chcete publikovat.
4. Vyberte **Publish**.

## Zrušení publikování poznámek

Poznámky zůstanou ve vašem místním trezoru i po zrušení jejich publikování.

1. Na **postranním panelu nástrojů** vyberte **Publish changes** ![[lucide-send.svg#icon]].
2. V dialogovém okně **Publish changes** vyberte **UNCHANGED** pro zobrazení všech publikovaných poznámek.
3. Vyberte poznámky, jejichž publikování chcete zrušit.
4. Vyberte **Publish**.

## Aktualizace publikované poznámky

1. Na **postranním panelu nástrojů** vyberte **Publish changes** ![[lucide-send.svg#icon]].
2. V dialogovém okně **Publish changes** vyberte **CHANGED** pro zobrazení všech poznámek upravených od posledního publikování.
3. Vyberte poznámky, které chcete aktualizovat.
4. Vyberte **Publish**.

> [!hint] Mazání přejmenovaných nebo odstraněných poznámek a obrázků z Publish probíhá v tomto kroku. Zaškrtávací políčko pro smazání těchto dat musíte vybrat ručně, protože z bezpečnostních důvodů není automaticky zaškrtnuté.

## Publikování propojených dat

Při publikování poznámek obsahujících odkazy na jiné poznámky nebo vložené obrázky může dojít k nefunkčním odkazům, pokud nejsou propojené poznámky také publikovány. **Obsidian Publish** tomu pomáhá předcházet automatickým výběrem médií propojených z poznámek, které jste již vybrali.

Pro zahrnutí všech propojených poznámek vyberte **Add linked** v dialogovém okně **Publish changes**.

Před publikováním zkontrolujte aktualizovaný výběr, abyste se ujistili, že neobsahuje data, která ještě nechcete publikovat.

> [!tip] Funkce **Add linked** respektuje veškerá vyloučení definovaná v části [[#Ignorování dat]].

## Automatický výběr dat k publikování

Nastavte `publish: true` ve [[Vlastnosti|vlastnostech]] poznámky, aby byla automaticky zahrnuta k publikování jako nová nebo změněná poznámka.

Můžete také automaticky vybrat poznámky a propojené obrázky v konkrétních složkách jejich přidáním jako **zahrnutých** složek:

1. Na **postranním panelu nástrojů** vyberte **Publish changes** ![[lucide-send.svg#icon]] nebo otevřete [[Paleta příkazů|paletu příkazů]] a zadejte **Publish: Publish changes...**.
2. Vyberte ikonu **Manage publish filters** ![[lucide-filter.svg#icon]].
3. V sekci **Included folders** vyberte **Manage**.
4. Vyberte složky, které chcete zahrnout, z nabídky.
5. Složka bude přidána do seznamu zahrnutých.
6. Po dokončení vyberte **Done**.

### Ignorování dat

Chcete-li ignorovat poznámku v Obsidian Publish, nastavte `publish: false` ve [[Vlastnosti|vlastnostech]] poznámky. Poznámka se již nebude zobrazovat v seznamu poznámek k publikování.

Můžete také automaticky ignorovat poznámky a obrázky v konkrétních složkách jejich přidáním jako **vyloučených** složek:

1. Na **postranním panelu nástrojů** vyberte **Publish changes** ![[lucide-send.svg#icon]] nebo otevřete [[Paleta příkazů|paletu příkazů]] a zadejte **Publish: Publish changes...**.
2. Vyberte ikonu **Manage publish filters** ![[lucide-filter.svg#icon]].
3. V sekci **Excluded folders** vyberte **Manage**.
4. Vyberte složky, které chcete vyloučit, z nabídky.
5. Složka bude přidána do seznamu vyloučených.
6. Po dokončení vyberte **Done**.

> [!note] `publish: true` má přednost před vyloučenými složkami
> Pokud soubor obsahuje `publish: true`, bude stále publikován, i když se nachází ve složce nebo filtru, který je vyloučený. Je to proto, že `publish: true` poskytuje specifičtější kontrolu.

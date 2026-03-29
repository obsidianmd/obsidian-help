---
permalink: publish/collaborate
publish: true
mobile: true
description: 'Zjistěte, jak spolupracovat s ostatními uživateli Obsidianu na vašem webu Obsidian Publish.'
---
Naučte se spolupracovat na vaší stránce [[Úvod do Obsidian Publish|Obsidian Publish]] s dalšími uživateli Obsidian. Přidáním přátel a kolegů jako spolupracovníků jim umožníte publikovat změny na vašem webu.

Pouze vlastník stránky potřebuje aktivní předplatné Obsidian Publish. Spolupracovníci potřebují pouze [účet Obsidian](https://obsidian.md/account).

> [!warning] Před publikováním změn na sdíleném webu nezapomeňte [[#Synchronizace změn mezi spolupracovníky|synchronizovat změny mezi spolupracovníky]]. Jinak riskujete přepsání změn od ostatních spolupracovníků.

## Přidání spolupracovníka na web

1. V [[Postranní panel nástrojů|postranním panelu nástrojů]] vyberte **Publish changes** ![[lucide-send.svg#icon]] nebo otevřete [[Paleta příkazů|paletu příkazů]] a napište **Publish: Publish changes...**
2. V dialogu **Publish changes** klikněte na **Změna nastavení stránky** ![[lucide-cog.svg#icon]].
3. Vedle **Spolupráce na webu** vyberte **Spravovat**.
4. Do pole **Pozvat uživatele** zadejte e-mail spolupracovníka.
5. Vyberte **Přidat**.

## Odebrání spolupracovníka z webu

1. V [[Postranní panel nástrojů|postranním panelu nástrojů]] vyberte **Publish changes** ![[lucide-send.svg#icon]] nebo otevřete [[Paleta příkazů|paletu příkazů]] a napište **Publish: Publish changes...**
2. V dialogu **Publish changes** klikněte na **Změna nastavení stránky** ![[lucide-cog.svg#icon]].
3. Vedle **Spolupráce na webu** vyberte **Spravovat**.
4. Vedle spolupracovníka, kterého chcete odebrat, vyberte **Odebrat uživatele** ![[lucide-x.svg#icon]].

## Synchronizace změn mezi spolupracovníky

Obsidian Publish automaticky nesynchronizuje publikované změny mezi místními trezory. Spolupracovníci musí změny od ostatních spolupracovníků synchronizovat ručně.

Aktualizace místní poznámky změnami z živého webu:

1. V [[Postranní panel nástrojů|postranním panelu nástrojů]] vyberte **Publish changes** ![[lucide-send.svg#icon]] nebo otevřete [[Paleta příkazů|paletu příkazů]] a napište **Publish: Publish changes...**
2. Klikněte pravým tlačítkem nebo dlouze stiskněte změnu, kterou chcete synchronizovat, a poté vyberte **Použít živou verzi**. **Tím se přepíše poznámka ve vašem místním trezoru.**

> [!tip] Doporučujeme používat jiný nástroj pro synchronizaci změn mezi trezory, například [[Úvod do Obsidian Sync|Obsidian Sync]] nebo [git](https://git-scm.com/).

## Oprávnění

Následující tabulka uvádí dostupná oprávnění webu pro vlastníky a spolupracovníky:

| Akce                                         | Spolupracovník | Vlastník |
|----------------------------------------------|:--------------:|:--------:|
| Publikování nových stránek                   | ✓              | ✓        |
| Publikování změn na publikovaných stránkách  | ✓              | ✓        |
| Zrušení publikace stránek                    | ✓              | ✓        |
| Nastavit nastavení stránky                   |                | ✓        |
| Spravovat oprávnění                          |                | ✓        |

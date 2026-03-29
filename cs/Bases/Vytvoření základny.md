---
permalink: bases/create-base
---
[[Úvod do Základen|Základny]] umožňují vytvářet databázová zobrazení vašich poznámek. Zde se dozvíte, jak vytvořit základnu a vložit ji do poznámky. Každá základna může mít jedno nebo více [[Zobrazení|zobrazení]] pro zobrazení informací různými způsoby.

## Vytvoření nové základny

**Paleta příkazů:**

1. Otevřete **Paletu příkazů**.
2. Vyberte
	- **Základny: Vytvořit novou základnu** pro vytvoření základny ve stejné složce jako aktivní soubor.
	- **Základny: Vložit novou základnu** pro vytvoření základny a její vložení do aktuálního souboru.

**Průzkumník souborů:**

1. V průzkumníku souborů klikněte pravým tlačítkem na složku, ve které chcete základnu vytvořit.
2. Vyberte **Nová základna**.

**Postranní panel nástrojů:**

- Ve svislém postranním panelu nástrojů vyberte **Vytvořit novou základnu** pro vytvoření základny ve stejné složce jako aktivní soubor.

## Vložení základny

### Vložení souboru základny

Soubory základen můžete vložit do [[Vkládání souborů|jakéhokoli jiného souboru]] pomocí syntaxe `![[Soubor.base]]`. Pro určení výchozího zobrazení použijte `![[Soubor.base#Zobrazení]]`.

### Vložení základny jako bloku kódu

Základny lze také vložit přímo do poznámky pomocí bloku kódu `base` a [[Syntaxe Základen|syntaxe Základen]].

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~

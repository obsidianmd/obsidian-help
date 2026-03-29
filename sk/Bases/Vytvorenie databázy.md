---
permalink: bases/create-base
---
[[Úvod do Databáz|Databázy]] vám umožňujú vytvárať databázové zobrazenia vašich poznámok. Tu sa dozviete, ako vytvoriť databázu a vložiť ju do poznámky. Každá databáza môže mať jedno alebo viac [[Zobrazenia|zobrazení]] na zobrazenie informácií rôznymi spôsobmi.

## Vytvorenie novej databázy

**Paleta príkazov:**

1. Otvorte **Paletu príkazov**.
2. Vyberte
	- **Databázy: Vytvoriť novú databázu** na vytvorenie databázy v rovnakom priečinku ako aktívny súbor.
	- **Databázy: Vložiť novú databázu** na vytvorenie databázy a jej vloženie do aktuálneho súboru.

**Prieskumník súborov:**

1. V prieskumníku súborov kliknite pravým tlačidlom na priečinok, v ktorom chcete databázu vytvoriť.
2. Vyberte **Nová databáza**.

**Panel nástrojov:**

- Vo vertikálnom paneli nástrojov vyberte **Vytvoriť novú databázu** na vytvorenie databázy v rovnakom priečinku ako aktívny súbor.

## Vloženie databázy

### Vloženie súboru databázy

Súbory databáz môžete vložiť do [[Vkladanie súborov|akéhokoľvek iného súboru]] pomocou syntaxe `![[Súbor.base]]`. Na špecifikovanie predvoleného zobrazenia použite `![[Súbor.base#Zobrazenie]]`.

### Vloženie databázy ako bloku kódu

Databázy je možné vložiť priamo do poznámky pomocou bloku kódu `base` a [[Syntax Databáz|syntaxe databáz]].

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

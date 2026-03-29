---
permalink: plugins/daily-notes
---
Každodenné poznámky je [[Vstavané pluginy|vstavaný plugin]], ktorý otvorí poznámku na základe dnešného dátumu, alebo ju vytvorí, ak ešte neexistuje. Každodenné poznámky používajte na vytváranie denníkov, zoznamov úloh alebo denných záznamov o veciach, ktoré ste počas dňa objavili.

Na otvorenie dnešnej dennej poznámky môžete:

- Kliknúť na **Otvoriť dennú poznámku** ![[lucide-calendar.svg#icon]] na [[Panel nástrojov|paneli nástrojov]].
- Spustiť **Otvoriť dennú poznámku** z [[Paleta príkazov|palety príkazov]].
- [[Klávesové skratky#Nastavenie klávesovej skratky|Použiť klávesovú skratku]] pre príkaz **Otvoriť dennú poznámku**.

Predvolene Obsidian vytvorí novú prázdnu poznámku pomenovanú podľa dnešného dátumu vo formáte YYYY-MM-DD.

> [!tip] Ak uprednostňujete mať denné poznámky v samostatnom priečinku, môžete nastaviť <u>Umiestnenie nového súboru</u> v možnostiach pluginu a zmeniť tak miesto, kde Obsidian vytvára nové denné poznámky.

> [!example]- Automatické podpriečinky
> Svoje denné poznámky môžete automaticky organizovať do priečinkov pomocou funkcie **Formát dátumu**.
> 
> Napríklad, ak nastavíte formát dátumu ako `YYYY/MMMM/YYYY-MMM-DD`, vaše poznámky sa vytvoria ako `2023/January/2023-Jan-01`. 
> 
> Ďalšie možnosti formátovania môžete preskúmať na stránke dokumentácie [momentJS](https://momentjs.com/docs/#/displaying/format/).

## Vytvorenie dennej poznámky zo šablóny

Ak majú vaše denné poznámky rovnakú štruktúru, môžete použiť [[Šablóny|šablónu]] na pridanie preddefinovaného obsahu do denných poznámok pri ich vytvorení.

1. Vytvorte novú poznámku s názvom „Denná šablóna" s nasledujúcim textom (alebo čokoľvek, čo vám dáva zmysel!):

   ```md
   # {{date:YYYY-MM-DD}}

   ## Úlohy

   - [ ]
   ```

2. Otvorte **[[Nastavenia]]**.
3. Na bočnom paneli kliknite na **Každodenné poznámky** v časti **Možnosti pluginov**.
4. V textovom poli vedľa **Umiestnenie šablóny súboru** vyberte poznámku „Denná šablóna".

Obsidian použije šablónu pri ďalšom vytvorení novej dennej poznámky.

## Každodenné poznámky a vlastnosti

Keď je plugin Každodenné poznámky aktivovaný a v akejkoľvek poznámke je prítomná vlastnosť dátumu, Obsidian sa automaticky pokúsi vytvoriť odkaz na dennú poznámku pre daný konkrétny deň. Napríklad, ak poznámka s názvom `example.md` obsahuje vlastnosť dátumu ako `2023-01-01`, tento dátum sa premení na klikateľný odkaz v sekcii [[Zobrazenia a režim úprav#Živý náhľad|živého náhľadu]].

![[daily-notes-and-date-properties.png#interface|300]]
^daily-notes-date

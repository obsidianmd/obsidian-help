---
permalink: import/airtable
---
Obsidian umožňuje migrovat data z Airtable pomocí [[Importér|pluginu Importér]]. Ten převede vaše Airtable báze na trvalé Markdown soubory, které můžete používat offline s Obsidian a mnoha dalšími aplikacemi.

Každá tabulka se stane složkou poznámek s jednou poznámkou na záznam, plus souborem [[Úvod do Základen|Základna]], který znovu vytvoří tabulku a její zobrazení. Protože se používá Airtable API, import vyžaduje osobní přístupový token a připojení k internetu.

## Vytvoření osobního přístupového tokenu Airtable

Pro přístup k datům Airtable přes API potřebujete osobní přístupový token. Tento krok trvá přibližně dvě minuty.

Token je dlouhý řetězec čísel a písmen, obvykle začínající `pat...`, který vám umožní stáhnout data z Airtable.

1. Přihlaste se do Airtable a přejděte na stránku [Personal access tokens](https://airtable.com/create/tokens) v nastavení účtu.
2. Zvolte **Create new token**.
3. Pojmenujte svůj token, např. „Obsidian". Můžete použít jakýkoli název.
4. V části **Scopes** přidejte `data.records:read` a `schema.bases:read`.
5. V části **Access** přidejte báze, které chcete importovat, nebo zvolte všechny báze v pracovním prostoru.
6. Zvolte **Create token** a poté **Copy** pro zkopírování tokenu.
7. Uložte token na bezpečné místo, například do správce hesel.

Airtable zobrazí token pouze jednou. Pokud ho ztratíte, vytvořte nový.

## Import dat z Airtable

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V části **Formát souboru** vyberte **Airtable**.
6. V části **Airtable Personal Access Token** klikněte na **Propojit...** pro přidání nového tajného údaje. Jako **ID** zadejte název, například `airtable`, a do pole **Tajný údaj** vložte svůj osobní přístupový token.
7. Klikněte na **Načíst** pro procházení vašich bází, poté vyberte tabulky, které chcete importovat.
8. Zkontrolujte a upravte možnosti importu.
9. Vyberte **Importovat** pro nastavení způsobu, jakým budou vaše pole převedena na poznámky s [[Vlastnosti|vlastnostmi]].
10. Klikněte na **Pokračovat** a počkejte, až se import dokončí.
11. Hotovo!

### Možnosti importu

- **Převést vzorce** — zvolte, zda budou pole se vzorci, vyhledáváním (lookup), souhrny (rollup) a počty přepsána jako [[Vzorce|vzorce Základen]], s využitím hodnoty vypočítané Airtable v případech, kdy neexistuje ekvivalent, nebo importována pouze jako statické hodnoty.
- **Stáhnout přílohy** — uloží soubory příloh do vašeho trezoru podle nastavení složky příloh a formátu odkazů. Pokud je tato možnost vypnutá nebo stahování selže, poznámka místo toho odkazuje na URL souboru na Airtable.
- **Název vlastnosti zobrazení** — vlastnost, která zaznamenává, do kterých zobrazení Airtable záznam patří. Každé zobrazení ve vygenerované Základně filtruje podle této vlastnosti. Výchozí hodnota je `base`.
- **Inkrementální import** — přidá ke každé poznámce vlastnost `airtable-id`, takže pozdější import může přeskočit záznamy, které již byly importovány. Při úplném importu je tato vlastnost opět odstraněna.

## Nastavení způsobu importu polí Airtable

Ve druhém kroku importu si můžete zvolit, jak bude každé pole importováno.

Každé pole ve vašich tabulkách má přiřazenou proměnnou nazvanou `{{field_name}}`. Ve výchozím nastavení se každé pole stane vlastností a tyto proměnné můžete použít k přejmenování vlastností, změně jejich hodnot nebo zápisu obsahu do těla každé poznámky.

Primární pole každé tabulky se vždy použije jako název poznámky a záznamy jsou vždy umístěny do složky pojmenované podle jejich tabulky, takže tyto možnosti nelze konfigurovat.

## Co se importuje

Pro bázi s názvem `Projects` s tabulkou `Tasks` importér vytvoří:

```
Airtable/
	Projects/
		Tasks.base
		Tasks/
			Write the proposal.md
			Review the draft.md
```

- Jedna poznámka na záznam, s primárním polem jako názvem poznámky a ostatními poli záznamu jako [[Vlastnosti|vlastnostmi]].
- Soubor `.base` na tabulku, přičemž každé zobrazení Airtable je mapováno na [[Zobrazení|zobrazení Základny]]:
	- **Grid** se stane [[Zobrazení Tabulka|zobrazením Tabulka]].
	- **Gallery** se stane [[Zobrazení Karty|zobrazením Karty]].
	- **List** se stane [[Zobrazení Seznam|zobrazením Seznam]].
	- Všechny ostatní typy zobrazení jsou převedeny na zobrazení Tabulka.
- Typy polí Airtable jsou mapovány na typy vlastností Obsidian, bez přepisování typů, které jste již nastavili.
- Propojené záznamy se stanou odkazy na odpovídající poznámky.
- Přílohy jsou staženy do vašeho trezoru podle nastavení trezoru.

## Omezení

> [!info] Import z Airtable je nový
> Importér z Airtable je nový. Pokud narazíte na problémy s převodem, [odešlete hlášení o chybě](https://github.com/obsidianmd/obsidian-importer/issues), abychom ho mohli vylepšit.

Kvůli omezením rychlosti Airtable API může import velkých bází trvat značnou dobu. Buďte prosím trpěliví.

Kvůli omezením Airtable API nejsou některá data dostupná nebo je nelze převést:

- Hodnoty souhrnů (rollup) se neimportují. API nezveřejňuje agregaci použitou pro vypočtenou hodnotu souhrnu, takže se zapíše pouze název vlastnosti spolu se vzorcem Základen, pokud schéma pole odhaluje výraz.
- Vzorce používající funkce, pro které Obsidian nemá ekvivalent, jako `SWITCH`, `FIND`, `REGEX_EXTRACT` a `SQRT`, se nahradí statickou hodnotou z Airtable.
- Importují se pouze zobrazení grid, gallery a list. Ostatní typy zobrazení, jako kalendář, kanban, časová osa a Gantt, jsou ignorovány.
- Odkazy na záznamy v tabulkách, které jste nevybrali, se stanou prostým názvem záznamu místo odkazu.
- Návrhy rozhraní, automatizace, komentáře a historie revizí se neimportují.

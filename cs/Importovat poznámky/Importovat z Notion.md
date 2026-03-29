---
permalink: import/notion
---
Obsidian umožňuje snadno migrovat vaše poznámky z Notion pomocí [[Importér|pluginu Importér]]. Tím se vaše data z Notion převedou na trvanlivé soubory Markdown, které můžete používat offline s Obsidian a mnoha dalšími aplikacemi.

Obsidian nabízí dva způsoby importu dat z Notion:

1. **Import přes API** zachovává celý váš pracovní prostor včetně databází a vzorců, které se převedou na [[Úvod do Základen|Základny]], ale vyžaduje integrační token Notion a připojení k internetu.
2. **Import souboru** nezachovává databáze, ale nevyžaduje API token ani připojení k internetu.

## Import přes API

### Vytvoření integračního tokenu Notion API

Pro přístup k vašim datům v Notion přes API potřebujete integrační token. Tento krok zabere přibližně 2 minuty.

Token je dlouhý řetězec čísel a písmen, který obvykle začíná `ntn_...` a umožní vám stáhnout vaše data z Notion.

1. Přihlaste se do svého panelu [Notion Integrations](https://www.notion.so/profile/integrations/internal).
2. Zvolte **New integration**.

![[notion-integration.png#interface]]

2. Pojmenujte svou integraci, např. „Personal". Lze použít jakýkoli název.
3. Vyberte pracovní prostor, který chcete exportovat.
4. Klikněte na **Save** a pokračujte na **Configure integration settings**.
5. Na kartě **Configuration** je váš API token dostupný v poli **Internal Integration Secret**.
6. Vyberte **Show** a poté **Copy**.
7. Uložte token na bezpečné místo, například do správce hesel.

![[notion-token.png#interface]]

Dále udělte své integraci přístup ke stránkám a databázím Notion, které chcete importovat.

1. Přejděte na kartu **Access** integrace, kterou jste právě vytvořili.
2. Klikněte na **Edit access**.
3. Přidejte stránky a databáze, které chcete importovat.

Nyní můžete převést svá data pomocí Obsidian Importéru.

### Import dat z Notion přes API

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V části **Formát** vyberte **Notion (API)**
6. V části **API token** vložte svůj **Internal Integration Secret** z Notion.
7. Klikněte na **Načíst** a vyberte databáze a stránky, které chcete importovat.
8. Zkontrolujte a upravte možnosti importu.
9. Vyberte **Importovat** a počkejte na dokončení importu.
10. Hotovo!

### Omezení

> [!info] Import přes API je nový
> Importér Notion API je nový. Kvůli složitosti pracovních prostorů Notion nemusely být zohledněny některé okrajové případy. Pokud narazíte na problémy s převodem, [nahlaste chybu](https://github.com/obsidianmd/obsidian-importer/issues), abychom ho mohli vylepšit.

Kvůli limitům rychlosti Notion API může import velkých pracovních prostorů trvat značnou dobu. Buďte prosím trpěliví.

Kvůli omezením Notion API nejsou některá data dostupná nebo je nelze převést:

- Pro každou databázi se importuje pouze primární zobrazení.
- [Propojené zdroje dat](https://developers.notion.com/docs/working-with-databases#additional-types-of-databases) se neimportují: *„Notion API aktuálně nepodporuje propojené zdroje dat. Při sdílení databáze s vaší integrací se ujistěte, že obsahuje původní zdroj dat!"*
- Funkce `People`: `name()` a `email()`
- Funkce `Text`: `style()` a `unstyle()`

Navíc Importér provede následující změny:

- Stránky bez podřízených stránek nebo databází budou importovány jako `[název souboru].md` místo `[název souboru]/[název souboru].md`.
- Databáze jsou vždy reprezentovány jako složky pojmenované `[název databáze]` se souborem `[název databáze].base` uvnitř.

## Import souboru

Import souboru je alternativní způsob importu dat z Notion. Tato metoda nezachovává databáze, ale nevyžaduje API token ani připojení k internetu.

### Export dat z Notion

Pro přípravu dat k importu budete muset exportovat celý svůj pracovní prostor pomocí formátu HTML exportu Notion. Doporučujeme nepoužívat Markdown export Notion, protože vynechává důležitá data. Pro export veškerého obsahu pracovního prostoru musíte mít administrátorský přístup k pracovnímu prostoru Notion.

1. Přejděte do **[[Nastavení]]** v horní části postranního panelu Notion.
2. V části **Workspace** vyberte **General**.
3. Najděte a vyberte **Export all workspace content**.
4. V části **Export format** vyberte **HTML**.
5. Zvolte **Include everything**.
6. Zapněte **Create folders for subpages**.
7. Soubor `.zip` obdržíte e-mailem nebo přímo v prohlížeči.

![[notion-export.png#interface]]

![[notion-export-2.png#interface]]

### Import souboru .zip z Notion

Budete potřebovat oficiální plugin Obsidian [[Importér]], který můžete [nainstalovat zde](obsidian://show-plugin?id=obsidian-importer).

1. Otevřete **[[Nastavení]]**.
2. Přejděte na **Komunitní pluginy** a [nainstalujte Importér](obsidian://show-plugin?id=obsidian-importer).
3. Zapněte plugin Importér.
4. Otevřete plugin **Importér** pomocí palety příkazů nebo ikony na postranním panelu nástrojů.
5. V části **Formát** vyberte **Notion (.zip)**
6. Vyberte soubor `.zip` se soubory Notion, které chcete importovat. *Doporučuje se importovat celý Notion najednou, aby mohly být interní odkazy správně propojeny.*
7. _Volitelně_ vyberte složku pro import. Vaše stránky a databáze Notion budou vnořeny do této složky.
8. Zapněte **Save parent pages in subfolders** pro zachování struktury Notion. *Upozorňujeme, že v Notion můžete psát obsah do složek, což v Obsidian není možné, a tyto stránky budou přidány jako podstránky pod složkou.*
9. Vyberte **Importovat** a počkejte na dokončení importu.
10. Hotovo!

### Řešení problémů

Pokud narazíte na problémy při importu z Notion:

- Ujistěte se, že v Notion používáte jako formát exportu **HTML**, **nikoli Markdown**.
- Pokud se Obsidian během importu zdá být zamrzlý, vypněte komunitní pluginy a zkuste to znovu.

Narazili jste na něco jiného? Prohledejte [repozitář Importéru](https://github.com/obsidianmd/obsidian-importer/issues), zda to ostatní již nezaznamenali.

#### Import velkých pracovních prostorů

Pokud importujete pracovní prostor s několika gigabajty dat, export z Notion může obsahovat vnořené soubory `.zip`. V takovém případě se může zobrazit chybová zpráva importu, která vypadá přibližně takto:

```
Import failed {id}.zip/{id}-Part-1.zip undefined.
```

Pokud se zobrazí tato chyba, můžete rozbalit soubor z Notion a poté importovat vnořené soubory `Export-{id}-Part-1.zip`.

---
permalink: sync/messages
publish: true
mobile: true
description: Tato stránka vysvětluje stavové ikony Obsidian Sync a poskytuje podrobnosti o protokolu synchronizační aktivity.
---
Obsidian Sync poskytuje několik prvků pro indikaci stavu synchronizace, zejména [[#Stavová ikona Sync]] a [[#Záznam aktivity Sync]]. Podrobnosti o správě verzí v Obsidian Sync naleznete na stránce [[Historie verzí]].

## Stavová ikona Sync

Stavová ikona Sync se nachází ve [[Stavový řádek|stavovém řádku]] v desktopové verzi a v [[Postranní panel#Otevření skrytých postranních panelů|pravém postranním panelu]] na mobilních zařízeních a tabletech. Ikona odráží různé stavy synchronizace:

- ![[obsidian-icon-sync-synced.svg#icon]] **Synchronizováno**: Obsidian Sync plně synchronizoval vaše soubory. Tato ikona je typicky zelená.
- ![[obsidian-icon-sync-syncing.svg#icon]] **Synchronizace probíhá**: Obsidian aktuálně aktualizuje vzdálený trezor. Tato ikona je obvykle fialová.
- ![[obsidian-icon-sync-paused.svg#icon]] **Pozastaveno**: Synchronizace byla pozastavena, ale Obsidian je stále připojen ke vzdálenému trezoru. Ikona je typicky fialová.
- ![[obsidian-icon-sync-disconnected.svg#icon]] **Odpojeno**: Základní plugin Sync je aktivní, ale [[Místní a vzdálené trezory|místní trezor]] není připojen ke vzdálenému trezoru. Tato ikona je typicky červená.

Kliknutím nebo klepnutím na ikonu se otevře kontextové menu s následujícími možnostmi:
- ![[obsidian-icon-sync-paused.svg#icon]] Pozastavit (nebo ![[lucide-circle-play.svg#icon]] Obnovit, pokud je pozastaveno)
- ![[lucide-history.svg#icon]] [[Historie verzí]] (Zašedlé, pokud se nezobrazuje poznámka)
- ![[lucide-align-left.svg#icon]] Otevřít [[#Záznam aktivity Sync|záznam Sync]]
- ![[lucide-trash-2.svg#icon]] [[Historie verzí#Obnovení smazaného souboru|Odstraněné soubory]]
- ![[lucide-cog.svg#icon]] [[Nastavení Sync a selektivní synchronizace|Nastavení Sync]]

## Záznam aktivity Sync

Obsidian Sync obsahuje podrobný záznam synchronizace, který sleduje všechny interakce mezi vašimi místními soubory a vzdáleným trezorem. Záznam zobrazuje nahrávání, stahování, mazání a jakékoliv problémy jako konflikty při sloučení nebo problémy s připojením.

**Přístup k záznamu aktivity:**
- Klikněte na stavovou ikonu synchronizace ve stavovém řádku
- Přejděte do **[[Nastavení]] → Sync → Záznam synchronizace**
- Použijte **Paleta příkazů → Sync: Otevřít protokol aktivit**

Záznam poskytuje časová razítka a podrobnosti pro každou operaci synchronizace, což je užitečné pro řešení problémů se synchronizací.

> [!warning] Záznam Sync se neuchová po zavření Obsidian. Pokud narazíte na problém, ujistěte se, že záznam zkopírujete _před_ zavřením aplikace.

Záznam kategorizuje zprávy do následujících typů:

- [[#Obecné zprávy]]
- [[#Chybové zprávy]]
- [[#Přeskočené zprávy]]
- [[#Zprávy o účtu]]

Záznam Sync můžete filtrovat podle **Vše**, **Chyby**, **Přeskočeno** a **Sloučení konfliktů**. Navíc můžete prohledávat záznam Sync pomocí vyhledávacího pole v okně Sync.

> [!summary] Níže jsme zahrnuli některé z pravděpodobných zpráv, se kterými jste se mohli setkat. Seznam není vyčerpávající. Pokud máte problém a zprávu v záznamu synchronizace, které nerozumíte, [[Nápověda a podpora#Kontaktujte podporu Obsidian|kontaktujte podporu Obsidian]].

### Obecné zprávy

Toto jsou běžné každodenní zprávy, se kterými se můžete setkat.

**Connecting to server**
Obsidian se pokouší připojit k [[Obsidian Sync/Zabezpečení a soukromí#Kde najdu svůj aktuální server Sync a kde je hostován?|serveru Sync]] vašeho vzdáleného trezoru.

**Connected to server. Detecting changes...**
Obsidian navázal spojení a porovnává místní trezor se vzdáleným trezorem, aby zjistil, zda jsou potřeba změny.

> [!info] Tato zpráva může také indikovat další potenciální problémy se Sync. Pokud ji vidíte opakovaně a věříte, že stále zbývají položky k synchronizaci, [[Nápověda a podpora#Kontaktujte podporu Obsidian|kontaktujte podporu Obsidian]].

**Fully synced**
- Místní a vzdálený trezor jsou plně synchronizovány.

**Merging conflicted file**
Během synchronizace byl zjištěn konflikt a soubor byl sloučen namísto přepsání. Více informací naleznete v části [[Řešení problémů s Obsidian Sync#Řešení konfliktů|řešení konfliktů]]. Pokud sloučení není žádoucí, můžete obnovit předchozí verze prostřednictvím [[Historie verzí]] nebo [[Obnovení souborů]].

**Rejected server change**
Změny na vzdáleném trezoru jsou starší než verze na vašem místním zařízení, takže místní verze je zachována a vzdálená změna je ignorována.

### Chybové zprávy

Toto jsou zprávy popisující chybu při synchronizaci souboru.

**Out of memory**
Tento problém se typicky vyskytuje na mobilních zařízeních, když není k dispozici dostatek úložného prostoru nebo paměti pro stažení souboru. Nejčastější je u velkých souborů, jako jsou videa.

### Přeskočené zprávy

Toto jsou zprávy popisující, co bylo přeskočeno, a případně proč.

**Unable to download file with illegal name**

Soubor obsahuje [speciální znak nebo konvenci pojmenování](https://stackoverflow.com/questions/1976007/what-characters-are-forbidden-in-windows-and-linux-directory-names), která není povolena na přijímajícím operačním systému. Pro snadnost můžete soubor přejmenovat na zdrojovém zařízení a odstranit všechny speciální znaky kromě `-` a `_`.

Upozorňujeme, že to zahrnuje také soubory s více tečkami `.` v názvu na zařízeních Android.

### Zprávy o účtu

Toto jsou zprávy související se změnou vašeho předplatného nebo účtu.

**Vault limit exceeded**
Váš účet překročil [[Často kladené otázky#Jak velký může být každý vzdálený trezor|maximální velikost úložiště]]. Přílohy a historie verzí přispívají k této velikosti. I když se váš trezor zdá menší než limit, starší verze a soubory ho mohou překročit.

Pro zmenšení velikosti trezoru:
1. Otevřete **[[Nastavení]] → Sync**.
2. Použijte možnosti pod **Velikost trezoru je nad limitem** k odstranění velkých souborů.

**Vault not found**
`{"res":"err","msg":"Vault not found."}`

Tato chyba se může vyskytnout v těchto případech:

1. Trezor byl smazán z jiného zařízení.
2. Předplatné synchronizace bylo neaktivní déle než 30 dní, což způsobilo odstranění vzdáleného trezoru.
3. Předplatné bylo zrušeno nebo vráceno, což vedlo ke smazání vzdáleného trezoru.

V těchto případech budete muset [[Nastavení Obsidian Sync#Odpojení od vzdáleného trezoru|odpojit se od vzdáleného trezoru]] a [[Nastavení Obsidian Sync#Vytvoření nového vzdáleného trezoru|vytvořit nový vzdálený trezor]], přičemž zajistíte zachování místních dat.

**Failed to authenticate: Your subscription to Obsidian Sync has expired**
Váš účet je nyní ve stavu úplného vypršení, protože se nám nepodařilo zpracovat platbu na souboru.

Pro pokračování v používání Obsidian Sync se budete muset znovu přihlásit k odběru ve [svém účtu](https://obsidian.md/account/sync).

**Failed to authenticate: Not logged in**

Obsidian Sync zjistil, že nejste aktuálně přihlášeni. Budete se muset znovu přihlásit v aplikaci v sekci [[Nastavení#Obecné#Účet|Účet]] v **[[Nastavení]]**.

V některých případech může také komunitní plugin bránit Obsidian Sync v potvrzení stavu přihlášení vašeho účtu. Přejděte prosím do **[[Bezpečnost pluginů#Omezený režim|omezeného režimu]]** a zkuste to znovu.

### Síťové zprávy

**Disconnected from server**
`Unable to connect to server`

Obsidian Sync se odpojil od serveru Sync z neznámého důvodu. Sync se bude pravidelně pokoušet o opětovné připojení k serveru.

Na iOS se tato zpráva zobrazuje jako následující chyba:
`Null is not an object (evaluating 'this.socket.send')`

Znamená přesně totéž jako zpráva `Unable to connect to server` a v žádném případě neindikuje, že by bylo něco jiného špatně.

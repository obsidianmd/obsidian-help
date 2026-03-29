---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: 'Tato stránka uvádí méně obvyklé problémy, na které můžete narazit při používání Obsidian Sync, a způsoby jejich řešení.'
---
Tato stránka uvádí méně časté problémy, se kterými se můžete setkat při používání [[Úvod do Obsidian Sync|Obsidian Sync]], a jak je vyřešit. Než budete pokračovat, doporučujeme prostudovat stránky [[Stavová ikona a zprávy]] a [[Často kladené otázky]].

## Obecné

### Řešení konfliktů

Ke konfliktu dochází, když změníte stejný soubor na dvou nebo více zařízeních dříve, než se synchronizují. Například upravíte poznámku na počítači. Než se tato změna nahraje, upravíte stejnou poznámku i na telefonu.

Konflikty se vyskytují častěji, když pracujete offline. Změn je více a mezi synchronizacemi je delší doba, což zvyšuje pravděpodobnost konfliktů.

#### Jak Obsidian Sync řeší konflikty

Když Obsidian Sync zjistí konflikt, výsledek závisí na typu souboru:

- **Soubory Markdown**: Obsidian Sync sloučí změny pomocí algoritmu [diff-match-patch](https://github.com/google/diff-match-patch) od Google.
- **Ostatní typy souborů**: U všech ostatních souborů, včetně pláten, Obsidian používá přístup „vyhrává poslední úprava". Naposledy upravená verze nahradí předchozí verze.

U konfliktů v nastavení Obsidian, jako jsou nastavení pluginů, Obsidian Sync sloučí soubory JSON. Aplikuje klíče z lokálního JSON na vzdálený JSON.

#### Možnosti řešení konfliktů

Od verze Obsidian 1.9.7 si můžete vybrat, jak konflikty řešit. Nastavení provedete takto:

1. Otevřete **[[Nastavení]]**.
2. V postranním panelu vyberte **Sync**.
3. V části **[[Nastavení Sync a selektivní synchronizace#Řešení konfliktů|Řešení konfliktů]]** vyberte preferovanou možnost:
   - **Automaticky sloučit** (výchozí): Obsidian Sync spojí všechny změny z různých zařízení do jednoho souboru. Tím se uloží všechny úpravy, ale někdy může dojít k duplicitnímu textu nebo problémům s formátováním. Tyto problémy budete muset opravit ručně.
   - **Vytvořit konfliktní soubor**: Když Obsidian zjistí konfliktní změny, místo automatického sloučení vytvoří samostatný konfliktní soubor. Poté můžete obě verze zkontrolovat a sloučit je sami. To vám dává plnou kontrolu nad výsledkem.

> [!warning]+ Nastavte na všech zařízeních
> Nastavení řešení konfliktů je specifické pro zařízení. Preferovanou možnost musíte nastavit na každém svém zařízení. Tím zajistíte stejné chování na všech synchronizovaných zařízeních.

**Vzor pojmenování konfliktního souboru**

Když použijete možnost „Vytvořit konfliktní soubor", Obsidian vytvoří nový soubor s tímto vzorem pojmenování:

```
název-původní-poznámky (Conflicted copy název-zařízení RRRRMMDDHHSS).md
```

Například pokud ke konfliktu dojde v poznámce s názvem `Poznámky ze schůzky.md`, konfliktní soubor může být pojmenován:

```
Poznámky ze schůzky (Conflicted copy MůjMacBook2 202411281430).md
```

Konfliktní soubor obsahuje změny ze zařízení, kde byl konflikt zjištěn. Původní soubor si ponechá vzdálenou verzi. Oba soubory můžete porovnat a obsah ručně sloučit.

> [!info]+ Zkontrolujte záznam synchronizace
> Chcete-li zjistit, kdy ke konfliktům došlo, otevřete [[Stavová ikona a zprávy#Záznam synchronizace|Záznam synchronizace]]. Filtrujte podle „Merge Conflicts" nebo hledejte „Conflict".

### Sync smazal poznámku, kterou jsem právě vytvořil na dvou zařízeních

Obsidian Sync se obvykle snaží [[#Řešení konfliktů|vyřešit konflikty]] sloučením konfliktních poznámek mezi zařízeními. Problémy však mohou nastat u uživatelů, kteří automaticky vytvářejí nebo mění poznámky při spuštění. To zahrnuje [[Každodenní poznámky]] nebo použití komunitního pluginu [Templater](https://github.com/SilentVoid13/Templater).

Pokud vytvoříte poznámku lokálně na jednom zařízení a během několika minut Sync stáhne vzdálenou verzi téže poznámky, Sync ponechá vzdálenou verzi bez sloučení obou verzí. V takovém případě můžete lokální verzi obnovit pomocí [[Obnovení souborů]].

### Sync nesynchronizuje aktualizace mých pluginů a nastavení

Obsidian [[Často kladené otázky#Načítá Obsidian Sync moje nastavení živě?|nenačítá všechna nastavení živě]]. Po aktualizaci nastavení nebo pluginů musíte na ostatních zařízeních restartovat Obsidian, abyste viděli změny. Na mobilních zařízeních může být nutné aplikaci násilně ukončit.

> [!example]- Změna motivu
> - Na primárním zařízení (obvykle počítači) změníte motiv z vlastního motivu zpět na výchozí.
> - Záznam synchronizace potvrdí, že aktualizované soubory byly odeslány do vzdáleného trezoru, ale na mobilním zařízení se stále zobrazuje vlastní motiv.
> - Na mobilním zařízení zkontrolujte záznam synchronizace a ověřte přijetí aktualizovaného souboru `appearance.json`.
> - Znovu načtěte nebo restartujte Obsidian na mobilním zařízení.
> - Po opětovném načtení nebo restartu by mobilní zařízení mělo zobrazovat stejný motiv jako váš počítač.

### Moje soubory z Sync stále mizí, jakmile je obnovím

Tento problém je nejčastější ve Windows. Windows Defender může dát do karantény soubory s bloky kódu, což způsobí, že některé poznámky zmizí.

Další častou příčinou je dvojitá synchronizace. K tomu dochází, když Obsidian Sync běží společně s jinou synchronizační službou.

![[Přechod na Obsidian Sync#Přesuňte svůj trezor mimo synchronizační službu třetí strany nebo cloudové úložiště]]

---

Nakonec k tomu může dojít, když obnovíte soubor na jednom zařízení, ale poté je odstraněn ze sekundárního zařízení. K tomu dochází, když název souboru obsahuje [[Stavová ikona a zprávy#Přeskočené zprávy|nepovolené znaky]].

## Android

**Moje zařízení maže přílohy, které přijímám přes Sync**

Tento problém je pravděpodobně způsoben tím, že Google nebo Android Fotky spravují vaše přílohy. Chcete-li zabránit systému ve změně souborů přijatých přes Sync, přidejte [soubor `.nomedia`](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) do svého trezoru na zařízení s Androidem.

> [!tip]- Použijte plugin
> Komunitní plugin [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) to usnadňuje. Nainstalujte ho na svůj telefon s Androidem. Mějte na paměti, že soubory `.nomedia` se nesynchronizují mezi zařízeními prostřednictvím Obsidian Sync.

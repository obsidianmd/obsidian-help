---
permalink: publish/troubleshoot
publish: true
mobile: true
description: 'Tato stránka popisuje některé běžné problémy, na které můžete narazit při používání Obsidian Publish.'
---
Tato stránka obsahuje seznam běžných problémů, se kterými se můžete setkat při používání [[Úvod do Obsidian Publish|Obsidian Publish]], a jak je řešit.

Nejprve se ujistěte, že jste si prostudovali [[Mediální soubory]] a [[Omezení Publish|Omezení Publish]].

## Obecné

### Publikování poznámek

**Při pokusu o publikování poznámky se zobrazuje chyba hashe.**

Používáte [[Komunitní pluginy|komunitní plugin]], který při aktualizaci upravuje čas úpravy souboru? Pokud ano, tento plugin může být v konfliktu s Publish. Prosím, nahlaste chybu vývojáři pluginu, aby problém vyřešil.

**Zobrazuje se mi podivná chyba sítě a mám velmi rozsáhlou Publish stránku.**

Pravděpodobně potřebujeme prozkoumat vaši databázi. Prosím, [[Nápověda a podpora#Kontaktování podpory Obsidian|kontaktujte podporu Obsidian]] pro pomoc.

## CSS a motivy

**Mé CSS v [[Konfigurační složka|konfigurační složce]] nefunguje na Publish. Proč?**

Publish nečte z konfigurační složky. Místo toho je potřeba vytvořit soubor `publish.css` v kořenovém adresáři vašeho publikačního trezoru. Více se o tom dozvíte v [[Přizpůsobení stránky]].

**Mé CSS nevypadá na Publish stejně jako v aplikaci. Proč?**

CSS Obsidian Publish není přesně stejné jako v aplikaci. Doporučujeme [vyvíjet jakékoli CSS a motivy](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) speciálně pro Publish od základu.

_Obecně_ platí, že to, co funguje v [[Zobrazení a režim úprav#Režim čtení|režimu čtení]], má velkou pravděpodobnost, že bude fungovat i na Publish.

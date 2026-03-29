---
permalink: early-access
---
Få tidig åtkomst till kommande versioner genom att aktivera _tidig åtkomst-versioner_. Tidig åtkomst-versioner är bara tillgängliga för användare med en [[Catalyst-licens]].

> [!warning] Varning
> Tidig åtkomst-versioner är betaversioner. De innehåller nya funktioner men kan vara mindre stabila. Aktivera inte tidig åtkomst-versioner om du föredrar en mer pålitlig upplevelse.
> 
> Tänk på att utvecklare av gemenskapstillägg och teman får tidig åtkomst-versioner samtidigt som alla andra. Ha tålamod med utvecklare som behöver göra uppdateringar för att stödja nya funktioner.

## Aktivera tidig åtkomst-versioner för skrivbordet

Följ dessa steg för att ta emot tidig åtkomst-versioner så snart de blir tillgängliga:

1. Öppna **[[Inställningar]]**.
2. Välj **Allmänt** i sidofältet.
3. Under **Konto → Ditt konto**, välj **Logga in**.
4. I **E-post**, ange din e-post.
5. I **Lösenord**, ange ditt lösenord.
6. När du har loggat in, gå tillbaka till **[[Inställningar]]**.
7. Välj **Allmänt** i sidofältet.
8. Under **App**, aktivera **Få insider-byggen**.
9. Klicka på **Sök efter uppdateringar** och sedan **Starta om**.

## Installera tidig åtkomst-versioner på mobila enheter

Följ dessa steg för att hitta instruktioner om hur du installerar tidig åtkomst-versioner på din mobila enhet:

1. Ladda ner och installera [Discord](<https://discord.com>).
2. Gå med i [Obsidians Discord-server](https://discord.gg/obsidianmd).
3. [[Catalyst-licens#Hämta ditt Discord-märke|Hämta ditt Discord-märke]] för att få tillgång till insider-kanaler.
4. I kanalen `#insider-welcome` hittar du instruktioner för att komma åt din nedladdning baserat på din enhetstyp.

## Rapportera problem och annan feedback

Om du upptäcker ett problem i en tidig åtkomst-version, överväg att rapportera det till Obsidian-teamet. Innan du rapporterar ett problem, sök i [forumet](https://forum.obsidian.md/) eller Discord för att se om någon redan har rapporterat det.

Använd en av följande kanaler för att rapportera ett problem:

- På Discord, rapportera problemet i respektive `#insider-release`-kanal.
- I forumet, skapa ett nytt ämne under [Felrapporter](https://forum.obsidian.md/c/bug-reports/7).

När du rapporterar ett problem, inkludera byggversionen och operativsystemet du kör det på. Du hittar byggversionen under **[[Inställningar]] → Om → App → Aktuell version**.

## Byt tillbaka till publika versioner på skrivbordet

Så här byter du tillbaka till att använda publika versioner (inte tidig åtkomst) på skrivbordet:

1. Inaktivera tidig åtkomst-versioner.
   1. Öppna **[[Inställningar]]**.
   2. Välj **Allmänt** i sidofältet.
   3. Under **App**, inaktivera **Få insider-byggen**.
2. Stäng Obsidian.
3. Radera filen `obsidian-VERSION.asar`, där `VERSION` är Obsidian-versionen.
   - Windows: `%APPDATA%\obsidian\obsidian-VERSION.asar`
   - Mac: `~/Library/Application Support/obsidian/obsidian-VERSION.asar`
   - Linux: `~/.config/obsidian/obsidian-VERSION.asar`
4. Starta om Obsidian.

## Byt tillbaka till publika versioner på mobil

Så här byter du tillbaka till att använda publika versioner (inte tidig åtkomst) på mobil:

1. Säkerhetskopiera dina valvdata
2. Avinstallera Obsidian
3. Installera om Obsidian från antingen Play Store eller Apple App Store
4. Återställ dina valvdata från dina säkerhetskopior
5. Öppna Obsidian

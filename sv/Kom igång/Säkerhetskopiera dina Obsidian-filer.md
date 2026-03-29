---
permalink: backup
---
Om du inte har säkerhetskopierat din dator ännu, börja nu! Obsidians tillägg [[Filåterställning]] är användbart men begränsat. Det kan bara återställa en viss mängd data, och det lagrar återställningsinformation per enhet. För mer robust skydd rekommenderar vi att du implementerar ett ordentligt säkerhetskopieringssystem.

**Varför säkerhetskopiera dina data?**

Som standard lagrar Obsidian dina anteckningar **lokalt** på din enhet, inte i molnet. Det innebär att [data är helt din](https://obsidian.md/about), vilket ger dig kontroll över den. Dock kan lokal lagring påverkas av problem som korruption eller dataförlust. Det är aldrig en fråga om, utan när. Att säkerhetskopiera dina data skyddar mot dessa oundvikligheter och säkerställer att du behåller kontrollen över dina anteckningar.

## Synkronisering är inte en säkerhetskopia

Tjänster som [[Introduktion till Obsidian Sync|Obsidian Sync]], iCloud, OneDrive och Dropbox hjälper dig att synkronisera dina anteckningar mellan olika enheter. Även om de kan erbjuda funktioner som [[Versionshistorik|anteckningsåterställning]], **är de inte designade för säkerhetskopior**. Synkronisering håller dina anteckningar uppdaterade, men det skyddar inte mot dataförlust.

- **Synkronisering:** Synkronisering säkerställer att dina filer är identiska på alla enheter. När du ändrar en fil på en enhet uppdateras den på alla synkroniserade enheter. Synkroniseringstjänster har ingen "primär" enhet.
- **Säkerhetskopia:** En säkerhetskopia sparar en kopia av dina data på en annan plats för att hjälpa till att återställa dem vid dataförlust eller korruption. Säkerhetskopior är inte avsedda för realtidsuppdateringar eller samarbete.

För att korrekt säkerhetskopiera ditt valv, använd ett dedikerat säkerhetskopieringsverktyg som skapar en envägs kopia av dina data. Detta verktyg skickar dina data till en säker säkerhetskopieringsplats utan att ändra data på din enhet.

Om du använder flera enheter med synkronisering, välj **en enhet** som din säkerhetskopieringsenhet. Detta är vanligtvis din huvud- eller "primära" enhet, den du använder mest. Observera att de flesta synkroniseringstjänster inte erkänner någon enhet som "primär"; detta är bara ett koncept för att hjälpa dig hantera säkerhetskopior.

> [!Example] Du använder Obsidian Sync på din bärbara dator, surfplatta, telefon och arbetsdator. Du använder mest ditt valv på din arbetsdator, ibland på din bärbara dator, och sällan på din surfplatta eller telefon. I detta fall skulle din arbetsdator vara din "primära enhet" för säkerhetskopiering.

## Använd gemenskapstillägg

Även om Obsidian-teamet inte officiellt kan rekommendera något specifikt tillägg, erkänner vi två gemenskapstillägg som har blivit populära bland användare för att säkerhetskopiera sina filer:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Använd detta tillägg för att säkerhetskopiera ditt valv genom att commita dess innehåll till ett [Git-arkiv](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository). Det är ett effektivt sätt att versionskontrollera dina anteckningar och säkerställa deras säkerhet på en fjärrserver. Var dock medveten om att dina data kan lagras på en [[#Använd molnbaserade tjänster|extern värdplattform]] med denna metod.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Detta tillägg låter dig skapa lokala kopior av ditt valv i en mapp du väljer, med alternativ för arkivering. Du kan till och med använda en synkroniseringsmapp, som en Dropbox-mapp, för att kombinera lokala och molnbaserade säkerhetskopior. Denna metod **fungerar bra tillsammans** med säkerhetskopieringsalternativen som beskrivs nedan.

## Använd molnbaserade tjänster

> [!info] Det rekommenderas inte att du har din valvplats i din valda säkerhetskopieringstjänst.

Att ha din säkerhetskopia i molnet är ett alternativ och komplement till fysisk datalagring, istället för en extern hårddisk eller USB-minne. En extern hårddisk eller USB-minne kan tappas bort eller skadas. Den största fördelen med att lagra filer i molnet är att de är tillgängliga när som helst, var som helst. Nackdelen är att de flesta säkerhetskopieringstjänster ägs av ett privat företag.

När det gäller säkerhet bör du alltid vara uppmärksam på åtkomst och säkerhet med molnsäkerhetskopior. [Worldbackupday](https://www.worldbackupday.com/en) har en uppdaterad lista över onlinesäkerhetskopieringstjänster att överväga.

## Använd externa enheter

**Hårddiskar och SSD-diskar**
Externa hårddisksäkerhetskopior är fortfarande värdefulla i en alltmer molnbaserad värld, och används främst för datalagring och datorsäkerhetskopior. Den största nackdelen med en extern enhet är att den kan gå sönder eller tappas bort. Den största fördelen är att lagringsutrymmet bara behöver köpas en gång. Att använda en extern hårddisk kombineras ofta med en [[#Använd datorsäkerhetskopior|datorsäkerhetskopia]].

**USB-minnen**
USB-minnen (även kallade minnespinnar eller flashminnen) är en enkel och effektiv metod för snabba säkerhetskopior.

1. Sätt in USB-minnet i din dator eller bärbara dator.
2. Se till att enheten identifieras och monteras i ditt filsystem. Formatera vid behov USB-minnet för att vara kompatibelt med ditt filsystem.
3. Kopiera din valvmapp från dess nuvarande plats till USB-minnet.
4. Avmontera USB-minnet säkert.
5. Ta bort USB-minnet från din enhet.

**NAS-säkerhetskopiering**
För erfarna användare är säkerhetskopiering av data på en NAS-server (Network Attached Storage) en bra och säker metod, eftersom den har flera hårddiskar och ytterligare återställningsmekanismer.

> [!tip] Om din externa enhet innehåller känslig information rekommenderas det att förvara den externt enheten säkert, till exempel i ett låst rum.

## Använd datorsäkerhetskopior

Ditt operativsystem erbjuder själv möjligheten att skapa säkerhetskopior, oavsett om det är online i molnet eller på en extern enhet.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Säkerhetskopiera med OneDrive eller en extern enhet.
- **[Mac](https://support.apple.com/en-us/104984)**: Säkerhetskopiera till en extern enhet med Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` till en valfri katalog eller enhet.

## Nästa steg

Den här hjälpsidan ger en kort översikt över säkerhetskopieringsalternativ, men den är inte uttömmande. För mer djupgående information, besök [Worldbackupday.com](https://www.worldbackupday.com/en) eller fråga andra Obsidian-användare i [vår gemenskap](https://obsidian.md/community) om deras säkerhetskopieringsstrategier!

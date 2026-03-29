---
permalink: backup
---
Als je nog geen back-up van je computer hebt gemaakt, begin er dan nu mee! De [[Bestanden herstellen]]-plug-in van Obsidian is nuttig maar beperkt. Het kan slechts een bepaalde hoeveelheid gegevens herstellen, en het slaat herstelinformatie per apparaat op. Voor een robuustere bescherming raden we aan om een goed back-upsysteem in te richten.

**Waarom een back-up maken van je gegevens?**

Standaard slaat Obsidian je notities **lokaal** op je apparaat op, niet in de cloud. Dit betekent dat de [gegevens volledig van jou zijn](https://obsidian.md/about), waardoor je er controle over hebt. Lokale opslag kan echter getroffen worden door problemen zoals corruptie of gegevensverlies. Het is nooit een kwestie van of, maar wanneer. Een back-up maken van je gegevens beschermt tegen deze onvermijdelijkheden en zorgt ervoor dat je controle over je notities behoudt.

## Synchroniseren is geen back-up

Services zoals [[Introductie tot Obsidian Sync|Obsidian Sync]], iCloud, OneDrive en Dropbox helpen je om je notities tussen verschillende apparaten te synchroniseren. Hoewel ze functies kunnen bieden zoals [[Versiegeschiedenis|notitieherstel]], **zijn ze niet ontworpen voor back-ups**. Synchroniseren houdt je notities up-to-date, maar het beschermt niet tegen gegevensverlies.

- **Synchronisatie:** Synchronisatie zorgt ervoor dat je bestanden op alle apparaten hetzelfde zijn. Wanneer je een bestand op één apparaat wijzigt, wordt het op alle gesynchroniseerde apparaten bijgewerkt. Synchronisatieservices hebben geen "primair" apparaat.
- **Back-up:** Een back-up slaat een kopie van je gegevens op een andere locatie op om deze te kunnen herstellen in geval van gegevensverlies of corruptie. Back-ups zijn niet bedoeld voor realtime updates of samenwerking.

Om je kluis goed te back-uppen, gebruik je een speciaal back-upprogramma dat een eenrichtingskopie van je gegevens maakt. Dit programma stuurt je gegevens naar een veilige back-uplocatie zonder de gegevens op je apparaat te wijzigen.

Als je meerdere apparaten met synchronisatie gebruikt, kies dan **één apparaat** als je back-upapparaat. Dit is meestal je hoofd- of "primaire" apparaat, het apparaat dat je het meest gebruikt. Merk op dat de meeste synchronisatieservices geen enkel apparaat als "primair" beschouwen; dit is slechts een concept om je te helpen bij het beheren van back-ups.

> [!Example] Je gebruikt Obsidian Sync op je laptop, tablet, telefoon en werk-desktop. Je gebruikt je kluis voornamelijk op je werk-desktop, soms op je laptop, en zelden op je tablet of telefoon. In dit geval zou je werk-desktop je "primaire apparaat" voor back-ups zijn.

## Gebruik communityplug-ins

Hoewel het Obsidian-team geen specifieke plug-in officieel kan aanbevelen, erkennen we twee communityplug-ins die populair zijn geworden onder gebruikers voor het back-uppen van hun bestanden:

- **[Obsidian Git](https://obsidian.md/plugins?id=obsidian-git):** Gebruik deze plug-in om een back-up van je kluis te maken door de inhoud ervan naar een [Git-repository](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) te committen. Het is een effectieve manier om versiebeheer op je notities toe te passen en hun veiligheid op een externe server te waarborgen. Houd er echter rekening mee dat je gegevens met deze methode op een [[#Gebruik cloudgebaseerde services|extern hostingplatform]] kunnen worden opgeslagen.
- **[Local Backup](https://obsidian.md/plugins?id=local-backup):** Deze plug-in laat je lokale kopieën van je kluis maken in een map naar keuze, met opties voor archivering. Je kunt zelfs een synchronisatiemap gebruiken, zoals een Dropbox-map, om lokale en cloudback-ups te combineren. Deze methode **past goed** bij de back-upopties die hieronder worden beschreven.

## Gebruik cloudgebaseerde services

> [!info] Het wordt niet aanbevolen om je kluislocatie in de door jou gekozen back-upservice te bewaren.

Je back-up in de cloud bewaren is een alternatief en een aanvulling op fysieke gegevensopslag, in plaats van een externe harde schijf of USB-stick. Een externe harde schijf of USB-stick kan verloren gaan of beschadigd raken. Het grootste voordeel van bestanden opslaan in de cloud is dat ze altijd en overal beschikbaar zijn. Het nadeel is dat de meeste back-upservices eigendom zijn van een privébedrijf.

Wat betreft beveiliging moet je altijd goed letten op toegang en beveiliging bij cloudback-ups. [Worldbackupday](https://www.worldbackupday.com/en) houdt een actuele lijst bij van online back-upservices die je kunt overwegen te gebruiken.

## Gebruik externe schijven

**Harde schijven en SSD-schijven**
Externe harde schijf-back-ups zijn nog steeds waardevol in een steeds meer cloudgebaseerde wereld en worden voornamelijk gebruikt voor gegevensopslag en computerback-ups. Het grootste nadeel van een externe schijf is dat de schijf kapot kan gaan of verloren kan raken. Het grootste voordeel is dat de opslagruimte slechts één keer hoeft te worden aangeschaft. Het gebruik van een externe harde schijf wordt vaak gecombineerd met een [[#Gebruik computerback-ups|computerback-up]].

**USB-flashdrives**
Flashdrives (ook wel usb-sticks, geheugensticks of pendrives genoemd) zijn een eenvoudige en effectieve methode voor snelle back-ups.

1. Steek de flashdrive in je computer of laptop.
2. Zorg ervoor dat het apparaat herkend en gekoppeld is in je bestandssysteem. Formatteer de flashdrive indien nodig zodat deze compatibel is met je bestandssysteem.
3. Kopieer je kluismap van de huidige locatie naar de flashdrive.
4. Ontkoppel de flashdrive veilig.
5. Verwijder de flashdrive uit je apparaat.

**NAS-back-up**
Voor ervaren gebruikers is het back-uppen van gegevens op een NAS (Network Attached Storage)-server een goede en veilige methode, aangezien deze meerdere harde schijven en aanvullende herstelmechanismen heeft.

> [!tip] Als je externe schijf gevoelige informatie bevat, wordt aanbevolen om de externe schijf veilig te bewaren, zoals in een beveiligde ruimte.

## Gebruik computerback-ups

Je besturingssysteem zelf biedt de mogelijkheid om back-ups te maken, of dit nu online in de cloud is of op een externe schijf.

- **[Windows](https://www.microsoft.com/en-us/windows/learning-center/back-up-files)**: Back-up met OneDrive of een externe schijf.
- **[Mac](https://support.apple.com/en-us/104984)**: Back-up naar een extern apparaat met Time Machine.
- **[Linux](https://linuxize.com/post/how-to-use-rsync-for-local-and-remote-data-transfer-and-synchronization/)**: `rsync` naar een map of schijf naar keuze.

## Volgende stappen

Deze helppagina biedt een kort overzicht van back-upopties, maar is niet uitputtend. Bezoek voor meer uitgebreide informatie [Worldbackupday.com](https://www.worldbackupday.com/en) of vraag andere Obsidian-gebruikers in [onze community](https://obsidian.md/community) naar hun back-upstrategieën!

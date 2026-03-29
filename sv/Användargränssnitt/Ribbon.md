---
permalink: ribbon
publish: true
mobile: true
description: 'Lär dig hur du använder menyfliksområdet, ett utrymme för vanliga kommandon i Obsidian, och anpassar det på dator och mobil.'
---
Ribbon fungerar som ett utrymme för vanliga kommandon i Obsidian.

På skrivbordet finns det i [[Sidofält#Öppna dolda sidofält|vänstra sidofältet]] och förblir synligt även när det vänstra sidofältet är stängt.

På mobilen kan du komma åt [[Mobilapp#Ribbon-åtgärder|Ribbon-åtgärder]] genom att trycka på **Menyalternativet** ![[lucide-menu.svg#icon]] i appens nedre högra hörn när du inte redigerar en anteckning.

## Åtgärder

Varje åtgärd representeras av en ikon i ribbon. Hovring över dessa ikoner visar en inforuta, medan val av dem aktiverar den associerade åtgärden. På mobilen kan du trycka på dessa ikoner för att aktivera dem.

1. Öppna **[[Hantera valv|Valvväxlare]]** ![[obsidian-icon-vault-switcher.svg#icon]].
2. Få tillgång till **hjälp** ![[lucide-help-circle.svg#icon]].
3. Öppna **[[Inställningar]]** ![[lucide-settings.svg#icon]].

I mobilversionen kan du konfigurera en snabbåtkomståtgärd på ribbon. För mer information, se [[#Mobil|mobilavsnittet]] och [[Mobilapp]].

## Anpassa ribbon

Din anpassade ribbon-layout sparas mellan sessioner. Den synkroniseras med andra enheter och mobilappen när appinställningar (i filerna `workspace.json` och `workspace-mobile.json`) synkroniseras.

### Skrivbord

I skrivbordsversionen kan du anpassa ribbon på följande sätt:

- Ändra ordningen på ribbon-åtgärder genom att dra och släppa ikonerna.
- För att dölja specifika åtgärder, högerklicka på ett tomt utrymme i ribbon och avmarkera de åtgärder du vill dölja.

#### Dölj ribbon

Du kan dölja ribbon på två sätt:

- Högerklicka på ribbon och välj **Dölj ribbon**.
- Öppna **[[Inställningar]]** → **Utseende**, rulla ner till **Avancerat** och inaktivera **Visa ribbon**.

#### Visa ribbon

Om du har dolt ribbon och vill visa det igen:

1. Öppna **[[Inställningar]]** → **Utseende**.
2. Rulla ner till **Avancerat**.
3. Aktivera **Visa ribbon**.
4. Ribbon kommer att visas igen på vänstra sidan av fönstret.

> [!tip] Anpassad CSS
> Om du använder ett gemenskapstema eller anpassad CSS, se till att det inte döljer ribbon genom anpassade stilregler.

### Mobil

I mobilversionen av Obsidian kan du utföra snabbåtkomståtgärder, ordna om objekt och anpassa ribbon-menyn. Följ dessa steg för att komma åt dessa anpassningar:

1. Öppna Obsidians **[[Inställningar]]** ![[lucide-cog.svg#icon]].
2. Navigera till avsnittet **Utseende**.
3. Rulla ner till de **avancerade** alternativen.
4. Välj knappen **Hantera** under alternativet **Ribbon-konfiguration**.

#### Snabbåtkomst

Som standard är snabbåtkomstalternativet inställt på "Öppna ribbon-menyn" vid ett *kort tryck*. Om du väljer ett annat alternativ som din snabbåtkomst:

- Det valda alternativet aktiveras med ett *kort tryck*.
- Åtkomsten till ribbon-menyn ändras till ett *långt tryck*.

> [!info] Snabbåtkomstalternativ beror på Obsidian-inställningarna och kärntilläggen du har aktiverat.

#### Ordna om och synlighet

För att ändra ordningen på objekt i ribbon-menyn, tryck och håll knappen **dra och släpp** ![[lucide-menu.svg#icon]] och flytta det valda objektet uppåt eller nedåt.

Du kan visa eller dölja objekt i ribbon-menyn med den röda knappen **ta bort** ![[lucide-minus-circle.svg#icon]] eller den gröna knappen **lägg till** ![[lucide-plus-circle.svg#icon]] för att växla deras synlighet.

 ![[ribbon-rearrange-visibility.jpeg#interface]]

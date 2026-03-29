---
permalink: plugins/file-recovery
publish: true
mobile: true
description: Filåterställning hjälper till att skydda ditt arbete från oavsiktlig dataförlust genom att automatiskt spara ögonblicksbilder av dina anteckningar med jämna mellanrum.
---
Filåterställning är ett [[Kärntillägg|kärntillägg]] som skyddar ditt arbete från oavsiktliga raderingar, filkorruption eller oönskade ändringar genom att automatiskt spara kompletta ögonblicksbilder av dina anteckningar med jämna intervall. Filåterställning är inte en komplett säkerhetskopieringslösning, och vi rekommenderar att du även [[Säkerhetskopiera dina Obsidian-filer|säkerhetskopierar]] dina Obsidian-filer separat.

För att undvika att ta upp [[#Lagring och prestanda|för mycket utrymme]] behåller Obsidian ögonblicksbilder under ett visst antal dagar innan de raderas. Ögonblicksbilder fångar hela innehållet i dina filer, inte bara ändringar, vilket gör att du kan återställa vilken tidigare version som helst.

> [!info]+ Info
> Som standard sparas ögonblicksbilder med minst 5 minuters mellanrum och behålls i 7 dagar. Du kan konfigurera båda intervallen under **[[Inställningar]] → Kärntillägg → Filåterställning**.

Ögonblicksbilder sparas i de [[Hur Obsidian lagrar data#Globala inställningar|globala inställningarna]], utanför valvet, för att hantera valvrelaterad dataförlust. Det innebär att ögonblicksbilder lagras med den absoluta sökvägen till anteckningen. Om du nyligen har flyttat ditt valv kan du behöva flytta tillbaka det till den plats där det befann sig när ögonblicksbilden togs.

> [!tip] Om du använder [[Introduktion till Obsidian Sync|Obsidian Sync]] eller [[Synkronisera dina anteckningar mellan enheter|andra synkroniseringstjänster]] kommer filåterställningens ögonblicksbilder inte att synkroniseras mellan enheter. Ögonblicksbilder är enhetsspecifika och förblir lokala på varje enhet.

## Återställ en ögonblicksbild

1. Öppna **[[Inställningar]]**.
2. I sidofältet, välj **Filåterställning** under **Kärntillägg**.
3. Under **Ögonblicksbilder**, välj **Visa**.
4. I filnamnsfältet, börja skriva namnet på filen du vill återställa, och du kommer att se en förslagslista.
5. Välj filen, tryck Enter, och du kommer att se en lista över tillgängliga ögonblicksbilder.
6. Välj den ögonblicksbild du vill återställa.
    1. Om du vill kopiera och klistra in i en ny anteckning, välj knappen **Kopiera**.
    2. Om du vill återställa filen fullständigt, välj knappen **Återställ**.
7. Du kan valfritt visa skillnaderna mellan ögonblicksbilder genom att aktivera **Visa skillnad**. Detta visar vilket innehåll som lades till, togs bort eller ändrades mellan ögonblicksbildsversioner.

## Rensa ögonblicksbildshistorik

> [!danger] Att rensa ögonblicksbildshistoriken raderar oåterkalleligt alla ögonblicksbilder i ditt valv.

1. Öppna **[[Inställningar]]**.
2. I sidofältet, välj **Filåterställning** under **Kärntillägg**.
3. Under **Rensa historik**, välj **Rensa**.
4. Bekräfta att du vill radera alla ögonblicksbilder genom att klicka på **Rensa**.

## Lagring och prestanda

Filåterställningens ögonblicksbilder använder vanligtvis minimalt med diskutrymme, eftersom de bara lagrar ändrade filer. Men i valv med många stora filer eller frekventa redigeringar kan ögonblicksbilder ackumuleras över tid. Övervaka din lagringsanvändning och justera lagringsperioden vid behov.

## Begränsningar

- **Apples låsningsläge**: Denna funktion är inte tillgänglig på Apple-enheter med [låsningsläge](https://support.apple.com/en-us/105120) aktiverat om inte Obsidian är undantaget.
- **Filtyper**: Endast `.md`- och `.canvas`-filer kan återställas med filåterställning.
- **Valvplats**: Om du flyttar ditt valv till en annan plats utan att använda [[Hantera valv#Flytta valv till en annan mapp|valvväxlaren]] kan befintliga ögonblicksbilder bli otillgängliga.

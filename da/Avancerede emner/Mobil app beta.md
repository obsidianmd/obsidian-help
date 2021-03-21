## Beta status
Fra den 9. marts 2021 er Obsidian mobil apps i en lukket beta for VIPs. Efterhånden som den bliver mere stabil, vil vi udrulle den til Supporters, Insiders og derefter til alle.

## Kom godt i gang

Mobil beta programmet er kun tilgængeligt for ejere af [VIP Catalyst licensen](https://obsidian.md/pricing).

Hvis du allerede har en VIP Catalyst licens, [så find mere information på vores Discord server](https://discord.gg/veuWUTm). Hvis du ikke har fået dit Calayst badge endnu, så skriv til Silver på Discord serveren og angiv din email adresse, som du benytter til Obsidian.

Når du har fået dit badge kan du tilgå betaen og give feedback i #mobile kanalen.

## Hvordan giver jeg feedback?
Den nuværende grupper af betatestere har adgang til #mobile kanalen på Discord såvel som den nye "Mobile" kategori på vores forum.

For at holde styr på fejlrapporter og feature ønsker, så skriv dem i vores forum som sædvanligt. Tak for at deltage i vores beta!

## Hvor bliver mine bokse gemt?

### Android
På Android er alle bokse placeret i Obsidian hjemmemappen  \`Documents/Obsidian\`. \`Documents\` mappen er typisk gemt på et SD kort eller i "Emulated storage".

Enhver mappe i \`Documents/Obsidian\` vil blive betragtet som en boks. Hvis du kopierer en mappe ind i Obsidian hjemmemappen vil den blive åbnet som en boks i Obsidian.

### iOS

Grundet en iOS sikkerhed, kan du ikke tilgå en boks fra andre apps, hvis den ikke er oprette som en iCloud boks. Den vil kun være tilgængelig for den indbyggede [[Obsidian Sync]].

Et alternativ er at oprette dine bokse på dit iCloud drev. iCloud tilbyder 5 GB gratis lager og er understøttet af Apple.

## Hvordan synkroniserer jeg mine data?

Som med Obsidian PC applikationen tilbyder vi en indbygget betalt [[Obsidian Sync]] service. Du kan også benytte din egen foretrukne synkroniseringsløsning for at holde den lokale mappe på mobilen synkroniseret med andre enheder.

### Android
Der er flere apps i Play butikken, som kan synkronisere en mappe på din mobil med andre enheder, f.eks. [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync&hl=en&gl=US).

Men vi har ikke testet disse løsninger. Hvis du har succes med dem eller har erfaringer med nogle af dem, så giv os besked, så vi kan tilføje informationen på denne side.

### iOS
Vores iOS app understøtter både [[Obsidian Sync]] og iCloud.

#### iCloud
Når du opretter en boks, kan du vælge en eksisterende boks på dit iCloud drev, eller oprette et nyt på dit iCloud drev. Det gør dig i stand til, at kunne åbne boksen fra et iCloud drev på en anden enhed.

#### Teknisk note om tredjeparts synkronisering, "Working copy", og andre lagersteder på iOS

I øjeblikket understøtter Obsidian ikke "Working Copy" eller andre lignende apps, der eksponerer et virtuelt filsystem gennem "FileProvider". Det skyldes en begrænsning i iOS's sandkasse teknonlogi  og API.

iOS's fildelings model på tværs af apps er designet til, at en app kan åbne, låse og arbejde med en fil af gangen. Det ser ikke ud til at modellen er designet ttil at en app kan arbejde samtidig med en hel mappe, der recursivt overvåger alle dens undermapper. For simple markdown editorer er det ikke et problem, men Obsidian er meget mere end det. Tilbagelinks, tags, stifinder, automatisk færdiggørelse af links, live indlejrede noter, hurtigskifter osv. arbejder alle på et helt hierarki af filer, så Obsidian vil blive ekstremt ramt af fejl, når den arbejde på en sådan mappe.

Hvis du er en erfaren iOS udvikler, som ved hvordan man rekursivt overvåger en mappe fået fra `UIDocumentPickerViewController`, så hører vi gerne fra dig.

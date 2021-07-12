Android appen er offentlig tilgængelig, og et link til Obsidian i Play butikken kan findes her https://obsidian.md/mobile

## Hvordan synkroniserer jeg mine data?
Obsidian til Android gemmer alle bokse lokalt i den offentlige dokumentmappe på din enhed. Du kan vælge at benytte [[Obsidian Sync]] til at synkronisere dine filer, eller brug enhver anden tredjeparts udbyder, hvor du har mulighed for at synkronisere med den offentlige dokumentmappe.

### Obsidian Sync
Som med Obsidian applikationen tilbyder vi en indbygget betalt [[Obsidian Sync]] service.

For at opsætte en synkroniseret boks gennem Obsidian Sync skal du først oprette en nu lokal tom boks. Når den tomme boks er åbnet, åben den venstre sidebjælke, tryk på knappen til indstillinger, og opsæt Obsidian Sync på samme måde som på PC versionen:

1. Log på din Obsidian konto på Konto siden.
2. Aktiver "Synkroniser" under "Kerne plug-ins".
3. Åben indstillinger, og vælg "Synkroniser" fanen under "Plugin indstillinger".
4. Vælg den eksterne boks, som du vil synkronisere med.
5. Hold din app åben indtil alle dine filer er blevet synkroniseret.

For at se synkroniseringsstatus i Obsidian Sync, så swipe den rigtige skuffe ud, og du vil kunne se en status indikator på samme måde som på PC versionen. Tryk på indikatoren for at få mere information, f.eks. for at se synkroniseringsloggen, hvis du har brug for at fejlfinde eventuelle problemer.

Note: Hvis du benytter Obsidian Sync sammen med andre tredjeparts synkroniseringsservices, så sørg for at ekskludere `.obsidian/sync.json` i din tredjeparts synkronisering for at forhindre at ødelægge Obsidian Sync funktionaliteten. Denne fil benyttes til at holde øje med synkroniseringstilstanden for den lokale enhed, og det kan skabe problemer hvis den ved en fejl bliver synkroniseret.

### Tredjeparts synkronisering
Du kan også benytte din egen foretrukne synkroniseringsløsning for at holde den lokale mappe på din mobil synkroniseret med andre enheder.

Der er flere apps i Play butikken, som kan synkronisere en mappe på din mobil med andre enheder, f.eks. [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync&hl=en&gl=US) eller [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite).

## Adgang til lager
Når du starter Obsidian har du måske lagt mærke til, at den spørger om tilladelse til at tilgå din enheds filer og medier.

I den ideelle verden ville vi foretrække kun at bede om adgang til de boksmapper, som du vælger. Men, Andorids privat-venlige filtillladelses API (også kaldet "scoped storage") har nogle få restriktioner som gør det umuligt for Obsidian til at fungere ordentlig, hvis ikke vi har fuld adgang.
   
De to største forhindringer er:

- "Scoped storage" udfører mange ekstra sikkerhedstjek for hver tilgang til en fil hvilket skaber en signifikant nedgang i ydeevne, når Obsidian åbnes og bruges.
- "Scoped storage" tilbyder ikke en mulighed for at overvåge filændringer fra eksterne apps, hvilket er kritisk når man benytter Obsidian med et tredjeparts synkroniseringsværktøj.

Google giver specifikt instruktioner til udviklere af den slags apps at benytte en speciel tilladelse. Obsidian tilhører to af kategorierne i denne liste af undtagelser: "dokument håndterings apps", og "filsøgning på enheden". [Læs mere om det her.](https://developer.android.com/training/data-storage/manage-all-files).


Synkronisering betyder, at du holder dine noter opdateret på tværs af dine enheder på din desktop computer og din mobil.

Den nemmeste måde at synkronisere dine noter mellem enheder på er at benytte [[Introduktion til Obsidian Sync|Obsidian Sync]]. Hvis du allerede har et Obsidian Sync abonnement, så her her hvordan du kan [[Opsætning af Obsidian Sync|opsætte Obsidian Sync]].

Hvis du ikke ønsker at benytte Obsidian Sync kan du læse om alternative metoder her på siden, hvordan du kan synkronisere dine bokse mellem flere enheder.

## Synkroniser dine noter mellem flere desktop computere

Hvis du ikke anvender Obsidian på dine mobil enheder, så kan du benytte enhver tredjepartssynkronerings service, der kan synkronisere til en cloud løsning.

Du kan f.eks. anvende en af disse følgende services:
- Dropbox
- Google Drive
- iCloud Drive
- OneDrive
- Syncthing

For at synkronisere dine noter skal du følge de instruktioner for den service du anvender til at synkronisere en mappe til dit lokale filsystem. Derefter åbner du mappen som en eksisterende books på alle dine dekstop enheder.

## Synkroniser dine noter på iPhone og iPad

For at synkronisere dine noter på din iPhone eller iPad understøtter vi officielt de følgende muligheder:

- [[Introduktion til Obsidian Sync|Obsidian Sync]]
- [[#iCloud Drev]]

**Note:** De følgende services er ikke understøttet. Hvis du finder ud af en måde, du kan synkronisere dine noter på din iOS enhed ved at benytte en af disse services, så foræl os om det i en af Obsidian fællesskabs kanalerne.

- Dropbox
- Google Drive
- OneDrive
- Syncthing

### iCloud Drev

Obsidian kan bruge iCloud drevet som et lokalt filsystem.

Når iCloud drevet på macOS anvendes, så sørg for at din Obsidian desktop installerversion er v0.13.0 eller nyere.

#### Opret en ny boks på et iCloud drev

Sådan opretter du en ny boks på et iCloud drev på din iPhone eller iPad:

1. Tryk på **Opret ny boks**
2. I **Boks navn** skriver du navnet på din nye boks
3. Aktiver **Gem i iCloud**
4. Tryk **Opret**

Obsidian opretter derved en ny mappe på dit iCloud drev. For at åbne mappen på iCloud drevet som en boks på din computer skal du:

1. Åben **Obsidian** på din computer
2. I bokskifteren skal du klikke på **Åben** til højre for **Åben mappe som boks**
3. Naviger til **iCloud Drev** -> **Obsidian**
4. Vælg den mappe med navnet på den boks du vil synkronisere med

#### Synkroniser en eksisterende boks med et iCloud drev

For at synkronisere en eksisterende boks med iCloud skal du oprette en tom boks på et iCloud drev og derefter flytte dine noter fra din anden enhed til den tomme boks.

Sådan oprettes en en ny tom boks på et iCLoud drev:

1. Tryk på **Opret ny boks**
2. I **Navn på boks** skriver du det samme navn som den boks du vil synkronisere med
3. Aktiver **Gem i iCloud**
4. Tryk **Opret**

Sådan flytter du dine noter til den nye boks på dit iCloud drev:

1. Åben **iCloud drev** mappen på din computer
2. Åben **Obsidian** mappen. Det kan tage et stykke tid før den dukker op
3. Flyt filerne fra din eksisterende boks til mappen med navnet på din boks

iCloud synkroniserer filerne til din mobil enhed. Afhængig af størrelsen på din boks kan det tage nogle minutter. 

### Working copy

Hvis du gemmer dine noter i et [Git](https://git-scm.com/) repository kan du anvende [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807) - En Gitklient til iOS.

Sådan synkroniserer du ved hjælp af Working Copy:

1. Opret en tom boks på din iPhone eller iPad
2. Vælg **Setup Folder Sync** og vælg din tomme boks
3. Commit og push alle ændringer i din boks ved at anvende Working Copy appen

**Note:** Selvom vi ikke officielt understøtter denne metode har flere af vores brugere rapporteret, at de med succes benytter Working Copy til at synkronisere deres noter.

### Hvorfor kan jeg ikke synkronisere ved hjælp af X?

Vi forstår at mange brugere anvender andre services til at synkronisere filer og at du måske også foretrækker at anvende en af dem til at synkronosere dine noter.

Obsidian arbejder anderledes end andre Markdown editorer på iOS. Editorer som f.eks. **1Writer** og **iA Writer** tilgår en note af gangen, hvilket lader dem benytte den indbyggede understøttelse af dokumenter i iOS.

Til forskel fra disse kræver mange funktioner i Obsidian at der er adgang til hele boksen på en gang. F.eks. hvis du omdøber en note, så vil Obsidian opdatere alle andre noter i boksen, som linker til denne note.

Udvikling af et system som skal kunne læse, modificere og monitorere en hel mappestruktur, der måske indeholder tusinde noter, udenfor de understøttede lokationer er udfordrende. Vi håber at kunne addressere denne begræsning engang i fremtiden.

Hvis du er udvikler kan du bygge et plugin, der benytter Web API'erne for hver individuel synkroniseringsservice.

### Hvor er mine bokse gemt?

Hvis du ikke vælger at benytte iCloud drevet, når du opretter din boks, gemmer Obsidian noterne i det lokale filsystem for Obsidian appen. Andre apps, såsom [[#Working Copy]] kan tilgå din boks ved at vælge boksen i filsystemet.

**Advarsel:** Alle noter, som er gemt i det lokale filsystem vil blive slettet af iOS, hvis du afinstallerer Obsidian. Sørg for at have en backup af dine noter hvis du vælger at afinstallere Obsidian.

## Synkroniserring af noter på Android enheder

Den nemmeste måde at synkronisere dine noter på din Android enhed er ved at benytte [[Introduktion til Obsidian Sync|Obsidian Sync]].

Da Obsidian gemmer noter i det lokale filsystem på din Android enhed kan du benytte enhver app, som kan synkronisere en mappe, såsom:

- [Dropsync](https://play.google.com/store/apps/details?id=com.ttxapps.dropsync)
- [FolderSync](https://play.google.com/store/apps/details?id=dk.tacit.android.foldersync.lite)

**Note:** Obsidian opretter en Obsidian mappe i den delte dokumentmappe. Alle mapper under `Documents/Obsidian` anses som en Obsidian boks.

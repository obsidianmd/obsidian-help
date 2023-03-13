Denne artikel er forældet og er her kun for at forhindre at ødelægge links i dokumentationen. Få mere at vide om mobil versionen her: [[Synkroniser dine noter på tværs af enheder]].

## Synkronisering

Du kan finde information om synkronisering af din boks på Android her: [[Synkroniser dine noter på tværs af enheder#Synkronisering af noter på Android enheder|Synkronisering af noter på Android enheder]].

## Adgangsrettigheder
Når du starter Obsidian har du måske lagt mærke til, at den spørger om tilladelse til at tilgå din enheds filer og medier.

I den ideelle verden ville vi foretrække kun at bede om adgang til de boksmapper, som du vælger. Men, Andorids privat-venlige filtillladelses API (også kaldet "scoped storage") har nogle få restriktioner som gør det umuligt for Obsidian til at fungere ordentlig, hvis ikke vi har fuld adgang.
   
De to største forhindringer er:

- "Scoped storage" udfører mange ekstra sikkerhedstjek for hver tilgang til en fil hvilket skaber en signifikant nedgang i ydeevne, når Obsidian åbnes og bruges.
- "Scoped storage" tilbyder ikke en mulighed for at overvåge filændringer fra eksterne apps, hvilket er kritisk når man benytter Obsidian med et tredjeparts synkroniseringsværktøj.

Google giver specifikt instruktioner til udviklere af den slags apps at benytte en speciel tilladelse. Obsidian tilhører to af kategorierne i denne liste af undtagelser: "dokument håndterings apps", og "filsøgning på enheden". [Læs mere om det her.](https://developer.android.com/training/data-storage/manage-all-files).

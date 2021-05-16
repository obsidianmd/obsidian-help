Publish Plug-in'et giver dig mulighed for at publicere noter fra din boks til dit websted inde fra Obsidian applikationen.

For mere information om Obsidian Publish™ servicen og hvad der er inkluderet, hvordan den fungerer, og privatliv, så se i [[Obsidian Publish]] tilføjelsesservicen.

### Aktivering af plugin

Du aktiverer Publish plug-in'et under "Instillinger -> Kerne plug-ins". Derefter vil du kunne se et Publish ikon (som ligner et papirfly)i vendtre menubjælke.

Når det er aktiveret kan du også oprette en genvejstast eller benytte kommandopaletten for at tilgå den.

### Opsætning og konfiguration af dit websted

I plug-in'et kan du en indstilling, hvor du kan oprette et websted ved at indtaste et unik websteds ID. Når du har publiceret vil dit websted være tilgængelig her:
`https://publish.obisidian.md/{websteds-id}`.

Efter at der er oprettet et unikt websteds ID får du mulighed for at give dit websted et navn, vælge en hjemmeside, sætte et tema og slå forskellige komponenter til og fra, såsom grafvisning, indholdsfortegnelse osv. Du kan ændre disse indstillinger ved at klikke på tandhjulsikonet ved dit webstedsnavn i toppen af Publish plug-in'et.

### Vælg filer til publicering

Efter du har sat dit websted op, kan du nu publicere dine noter!

Med et nyt tomt websted vil alle dine noter optræde under "New" sektionen, hvilket betyder at de bliver nye på dit websted. På dette tidspunkt kan du vælge hvilke filer du vil publicere, og derefter kan du klikke på "Udgiv" knappen.

==Privat note: Obsidian Publish har ingen viden om (eller opbevarer) nogle noter, som du vælger ikke at publicere (eller andre noter du efterfølgende fjerner fra dit publicerede websted).==

### Udfør ændringer

Hvis du ændrer i noter, som allerede er publiceret, vil disse blive automatisk valgt, når du åbner Publish dialogen. Du kan afmarkere de noter, du ikke ønsker at publicere til dit websted.

### Ændre websted indstilinger

Du kan ændre forskellige websted indstillinger ved ta klikke på yandhjulsikonet ved dit webstedsnavn, når "Udgiv ændringer" dialogen er åben.

#### Metadata

I denne sektion kan du sætte webstedsnavnet, hjemmeside filen (Den note, som besøgende skal se, når ankommer til dit websted), og håndtere brugerdefinerede domæner (Læs [[Obsidian Publish#Brugerdefineret domæne|denne guide]] for at opsætte et brugerdefineret domæne).

#### Udseende

Her kan du ændre temaet mellem lyst og mørkt.

Hvis du ønsker mere tilpasning, kan du læse om [[Obsidian Publish#Brugerdefineret CSS|brugerdefineret CSS her]] og  om [[Obsidian Publish#Favicon|favicon her]].

#### Læse oplevelse

I denne sektion kan du:

- Aktivere en speciel tilstand kaldet "sliding vinduer" som ligner [Andy Matuschak's noter](https://notes.andymatuschak.org/);
- Aktivere noteforhåndsvisning, når musemarkøren flyttes over et link, på samme måde som [[Forhåndsvisning af note]] plug-in'et virker i Obsidian;
- Konfigurere om du vil have læsbar linjelængde og strenge linjeskift.

#### Komponenter

Dit websted kan indeholde nogle få komponenter, som du kan aktivere eller deaktivere. Disse inkluderer:

- Stifinder (Som standard sat til)
- Lokal graf (Som standard sat til)
- Indholdsfortegnelse (Som standard slået fra)
- Tilbagelinks i bunden (Som standard slået fra)
- Søgebjælke (Som standard slået fra. Kræver stifinder)

#### Sikkerhed

Her kan du angive kodeord for at beskytte dit websted. Når det er sat, skal alle besøgende på dit websted angive et af kodeordene for at få adgang til dit websted.

Flere kodeord gør dig i stand til at dele med flere grupper af besøgende. Når du ikke længere ønsker at dele med en bestemt gruppe besøgende, kan du bare slette kodeordet. Hver kodeord kan navngives som du passer dig.

Efter 20. januar 2021 er alle noter på dit websted beskyttet af det samme sæt kodeord.

### Tilføj linkede noter

"Tilføj linkede" knappen tillader dig at inkludere alle de noter i din boks, som der er refereret til i alle de nuværende valgte noter. Dette er en god måde at sikre, at der ikke er nogle døde links på dit websted.

Lad os f.eks. forestille os, at du har valgt at udgive Note A. Hvis Note A har links til Note P, Note Q og Note R, så vil disse noter også blive valgt, når du klikker på "Tilføj linkede".

Hver gang du klikker på "Tilføj linkede" knappen vil Publish plug-in'et lede efter links i alle nuværende valgte filer for at inkludere dem i udgivelsen. Tjek listen af valgte filer igennem, før du trykker på "Udgiv" knappen, for at være helt sikker på, at det er dem du vil udgive.

### Slette publicerede noter

Du har altid mulighed for at fjerne noter, som du har udgivet på dit websted. I Publish plug-in'et kan du se en liste af alle udgivne noter, og de kan alle vælges til fjernelse fra dit websted. Når du sletter en note fra dit websted, så **slettes noten ikke** fra din Obsidian boks, hvilket giver dig mulighed for at genudgive noten på et senere tidspunkt.

### Slette hele webstedet

Hvis du ønsker at slettet et helt websted, så klik på "skift websted ikonet (Pile)" i toppen af Publish plug-in'et. Klilk derefter på X knappen for at slette dit websted. Bemærk:  Det fjerner kun dit offentlige websted. Det har ingen effekt på dine filer i din Obsidian boks. Du kan altid senere genudgive dine noter, hvis du ønsker det.

Obsidian Publish™ er en betalt hosting service til dine noter.

Læs [[Publish|Publish plug-in]] siden for instruktioner i, hvordan du udgiver dine noter inde fra Obsidian applikationen.

### Privatliv

Du har fuldstændig kontrol over hvad du publicerer via [[Publish|Publish plug-in'et]] - enten hele din boks eller kun udvalgte noter i din boks. Du kan være sikker på, at alle de noter, du vælger **ikke** at udgive, forbliver private, og Obsidan Publish har ingen information om dem.

### Backup

Bemærk at Obsidian Publish ikke kan benyttes som en backup af dit indhold i en boks. Du skal sikre dig, at du altid har en personlig backup af dit websted med det backuværktøj du normalt anvender. Vores arbejde med at udvikle Obsidian Publish er mere fokuseret på funktionalitet, brugervenlighed og tilgængelighed.

### Demonstration
Der er måske en chance for, at du allerede har set denne artikel på vores officielle wbsted, hvor vi benytter Obsidian Publish.

Hvis ikke, kan du besøge den her: https://publish.obsidian.md/help.

### Hvad er inkluderet
Obsidian Publish servicen lader dig oprette et websted direkte inde fra Obsidian applikationen ved at vælge de noter, som du vil udgive.

Du kan vælge mellem lyst eller mørk tema, når du vil tilpasse dit websted, og du kan skifte mellem "læsbar linjelængde" eller "fuldside længde".

Der er flere komponneter, som kan aktiveres og deaktiveres i [[Publish|Publish plug-in'et]]. Typisk vil ændringer af disse indstillinger få effekt indenfor 5 minutter, så snart cachen er ryddet.

##### Navigation
Aktiveres denne indstilling så tilføjes en sidebjælke på dit wenbsted, der viser alle dine udgivne sider og de mapper, som indholder dem. Besøgende vil se den nuværende note fremhævet og kan klikke på enhver anden note for at læse dem.

##### Søgebjælke

Tilføjer en søgebjælke til siden. Denne bjælke kan benyttes til at søge efter sider, aliases og overskrifter på sider. Den undersøtter på nuværende tidspunkt ikke fuldtekst søgning i hele indholdet på dit websted.

##### Grafvisning

Viser en lokal graf for den nuværende side, som er åben. Den benytter samme "vsiningsmotor" som [[Grafvisning|grafvisnings plug-in'et]] i Obsidian.

##### Indholdsfortegnelse

Viser en indholdfortegnelse for den nuværende åbne side. Indholdsfortegnelsen genereres ud fra overskrifterne på siden, på samme måde som [[Disposition|Dispositions]] plug-in'et. Besøgende, der navigerer i noten vil se den korresponderende overskrift fremhævet afhængig af, hvor de er og de kan klikke på en anden overskrift for at hoppe dertil med det samme.

##### Tilbagelinks

Viser en sektion kaldet "Vis tilbagelinks" i slutningen af hver side, der indeholder tilbagelinks fra andre sider. Hvis der ikke er nogen tilbagelinks, så vil denne sektion ikke blive vist.

##### Tags

Når en besøgende klikker på et tag kan de se en liste med andre sider, som også har det samme tag.

##### Forhåndsvisning over musemarkøren

Når du fører musemarkøren over links vil indholdet blive vist i et popup vindue. Dette fungerer på samme måde som [[Forhåndsvisning af note]] plug-in'et i Obsidian.

##### Brugerdefineret CSS
For at tilpasse dit websteds udseende kan du overføre `publish.css` til dit websted. Denne fil skal ligge i rodmappen på dit websted. Du kan benytte dit eksisterende tema og tilføje nogle ekstra justeringer i `publish.css`.

##### Favicon
For at ændre dit websteds favicon kan du overføre `png` ikoner i hvilken som helst størrelse i følgende navneformat: `favicon-32.png` eller `favicon-32x32.png`. Du kan også overføre filen `favicon.ico`. Disse filer kan lægges i alle mapper. Vi anbefalder (i 2020) at anvende en af disse størrelser: `32×32`, `128x128`, `152×152`, `167x167`, `180x180`, `192x192`, og `196x196`.

##### Brugerdefineret JS
Hvis du vil køre dine egen JavaScript kode for at ændre brugerens oplevelse, eller tilføje forskellige integrationer som Discus!, Discourse, osv. kan du gøre det ved at uploade `publish.js` i roden af din boks. Bemærk at disse scripts kun bliver udført for besøgende på dit brugerdefinerede domæne.

##### Forhindre søgemaskine indeksering
Denne mulighed tilføjer et meta noindex tag til alle dine sider, så søgemaskiner som Google ikke indekserer dit websted. Bemærk at søgemaskiner ikke er i stand til at indeksere dit websted, hvis det er kodeordsbeskyttet.

##### Google Analytics
Hvis du vil integrere Google Analytics på dit websted, skal du først sikre dig at dine lokale love og regulativer tillader det. Derefter behøver du kun skrive sporingskoden, på formen `UA-XXXXX-Y` i tekstfeltet, og dit websted vil derefter automatisk spore sidevisninger. Bemærk at Google Analytics kun er tilgængeligt for besøgende, hvis du benytter dit eget domæne.

Når du tester Google Analytics skal du huske at deaktivere enhver adblokker browser udvidelse, f.eks. "uBlock Origin", som hindrer Google Analytics i at fungere.

Derudover er Obsidian Publish ikke direkte kompatibel med Google Tag Manager i øjeblikket - du kan opsætte funktionen med din egen javascript, hvis du vil anvende Google Tag Manager i stedet for Google Analytics.

### Brugerdefineret domæne
Du kan opsætte et eget domæne eller subdomæne til dit Obsidian Publish websted. På nuværende tidspunkt har vi ikke en måde vi kan udstede et SSL certifikat på dine vegne, så du skal enten ty til at lave din egen SSL aktiverede webserver, eller opsætte dit websted på CloudFlare, som tilbyder gratis SSL.

Du kan også opsætte Obsidian Publish som et underdomæne på din egen webserver. F.eks. `https://mitdomæne.com/mine-noter/`. For at gøre det skal du opsætte din egen webserver og viderestille alle anmodninger til vores server på `https://publish.obsidian.md/`.

Læs videre for en detaljeret opsætning.

#### CloudFlare opsætning

Den nemmeste måde at opsætte dit eget domæne eller underdomæne er ved at oprette en konto hos [CloudFlare](https://cloudflare.com) og lade CloudFlare håndtere dit domæne. Dette tillader dig at aktivere SSL på dit websted gratis, og sikre, at dit websted er hurtigt uanset hvor i verden det tilgås fra. Typisk vil brugere hoste deres Obsidian Publish indhold på et roddomæne (f.eks. `mitwebsted.com`) eller på et subdomæne (f.eks. `noter.mitwebsted.com`). Disse instruktioner gælder for begge tilfælde.

1. Åben Cloudflare på det domæne du ønsker at tilføje Publish til (f.eks. `mitwebsted.com`, selvom du vil benytte et subdomæne som f.eks. `noter.mitwebsted.com`).
2. Gå til DNS og klik på "Add Record" . Vælg CNAME, og i 'name' skriver du det domæne eller underdomæne, som du ønsker (f.eks. `noter.mitwebsted.com`). I 'target' skriver du værdien `publish-main.obsidian.md`. Du skal ikke inkludere din personlige under-URL her, da Obsidian Publish håndterer dette udfra din konfiguration.
3. Gå til SSL/TLS og sæt SSL/TLS krypteringstilstand til `Full`. Dette vil konfigurere SSL/TLS certifikatet automatisk.

Når du har konfigureret CloudFlare kan du fortsætte opsætningen af dine webstedindstillinger i Obsidian, og sætte URL'en til dit domæne eller underdomæne. Dette giver vores server tilladelse til at associere domænet til dit websted.

Fejlfinding: Hvis din domæne opsætning ender i en redirigeringsløkke, er det højst sandsynligvis fordi krypteringstilstanden i CloudFlare er sat til `Flexible` i stedet for `Full`.

Hvis du vil konfigurere både `mitwebsted.com` og `www.mitwebsted.com` til Obsidian Publish, skal du lave en [sideregel](https://support.cloudflare.com/hc/en-us/articles/200172336-Creating-Page-Rules) som følgende:

- URL match: `www.mitwebsted.com/*`
- Foward URL - 301 Permanent Redirect
- Redirect URL: `https://mitwebsted.com/$1`

Når du har oprettet sidereglen bør du også oprette en CNAME record for `www.mitwebsted.com` ligesom du oprettede en for `mitwebsted.com`

#### Proxy- og redirigeringsopsætning
Hvis du selv ønsker at have din egen webserver og opsætte din egen SSL kryptering kan du vælge den mulighed. Hvis du allerede har et websted på dit domæne eller underdomæne, kan du også benytte denne mulighed og opsætte dit websted til at tilgå dit Obsidian Publish websted fra en specifik URL, i stedet for at kun benytte domænenavnet.

Du skal viderestille alle anmodninger fra den URL til
`https://publish.obsidian.md/serve?url=mitwebsted.com/min-sti/...` og konfigurere webstedsindstillingerne i Obsidian til at pege på den samme sti.

F.eks. kan du sætte følgende op på NGINX:
```nginx
location /mine-noter {
	proxy_pass https://publish.obsidian.md/serve?url=mitwebsted.com/mine-noter/;
}
```

I Apache's konfiguraionsfil `.htaccess`, kan du opsætte den sådan:
(Note: "mod_rewrite" skal også været sat til, og du skal muligvis også konfigurere [SSLProxyEngine](https://stackoverflow.com/questions/40938148/reverse-proxy-for-external-url-apache))
```htaccess
RewriteEngine  on
RewriteRule    "^mine-noter/(.*)$"  "https://publish.obsidian.md/serve?url=mitwebsted.com/mine-noter/$1"  [L,P]
```

Hvis du anvender Netlify, kan du opsætte den sådan:
```
[[redirects]]
  from = "https://mitwebsted.com/mine-noter/*"
  to = "https://publish.obsidian.md/serve?url=mitwebsted.com/mine-noter/:splat"
  status = 200
  force = true
```

Alternativt kan du benytte `https://publish.obsidian.md/` med en brugerdefineret header `x-obsidian-custom-domain` sat til din webstedsurl `mitwebsted.com/min-undermappe`, hvis din proxy service ikke tillader brugerdefinerede headers.

#### Brugerdefineret domæne problemer efter opsætning
Når du har opsat dit eget domæne, og du tidligere har besøgt dit websted fra et link f.eks. `https://publish.obsidian.md/slug`, så er det muligt, at du skal slette din browsercache for bestemte ting (som fonte, grafer eller kodeordsadgang) for at det virker korrekt. Det skyldes sikkerhedsrestriktioner på tværs af domæner, som mange nyere browsere pålægger. Den gode nyhed er, at besøgende på dit websted aldrig bør løbe ind i det problem, hvis du kun lader dine besøgende benytte dit eget domæne.

#### Redirigering af gammelt websted til eget domæne
Hvis du vil redirigere dine besøgende fra den gamle `publish.obsidian.md` side til dit eget nye domæne, er der en indstilling, som gør det, som du kan aktivere på brugerdefineret domæne indstillings siden.

### Kommer snart

Obsidian Publish er stadig et ret nyt produkt. Her er nogle funktioner, som vi har planlagt:

- Fuld support for egne domæner (medfølgende SSL certifikat)
- Fuldtekstsøgning
- Flere indbyggede temaer

Hvis du har ønsker til andre Obsidian Publish funktioner, så kan du oprette en anmodning på vores [forum her](https://forum.obsidian.md/).

### Prissætning
For at finde prisen på Obsidian Publish, så besøg [vores prisside](https://obsidian.md/pricing).

### Tekniske detaljer
Obsidian Publish benytter CludFlase som CDN (content delivery network) til at distribuere dit websted med hurtig tilgang overalt på internettet. Dette involverer caching af dine filer på dit websted på mere end 200+ datacentre for at sikre kort latenstid for dine besøgende og at dit websted er responsivt og læses hurtigt selv når din besøgende bor langt væk fra vores primære servere.

Men, det betyder også, at når du ændrer webstedsindstillinger, udgiver nyt indhold, eller fjerner udgivet indhold, kan besøgende ikke altid se den seneste version i en kort periode. På nuværende tidspunkt er vores cache konfigureret til at være konstant i en time før den bliver valideret igen for ændringer.

Hvis du udgiver noget og du stadig ser en ældre version, så kan du typisk foretage en "tvunget opfriskning" ved at holde genindlæs knappen inde og vælge "Hard reload" i rullemenuen. Hvis du ikke virker kan du prøve at slette din browser cache eller deaktivere cache ved at benytte udviklerværktøjerne på netværksfanen.

#### Hosting af medie filer

Selvom Obsidian Publish tillader dig at uploade videofilm, er den ikke optimeret til videostreaming. Derfor vil dine besøgende nok opleve, at de videoer du har lagt på dit websted ikke er en fornøjelse at se.

Vi anbefaler, at du benytter en rigtig video hosting service som Youtube eller Vimeo til at hoste dine videoer for Obsidian Publish. Fordelene ved at benytte en rigtig video hosting udbyder inkluderer:

- Automatisk genkodning sikrer at dine videoer kan spilles på alle  mobilenheder uanset hvilket kodningsformat du brugte i din originale fil.
- Dynamiske kvalitetsjusteringer baseret på tilgængelig båndbredde og sikrer at videoer kan afspilles uden pauser, hvor afpilleren tvinges til at  hente data.
- Højeffekiv videokomprimering sikrer at besøgende ikke overskrider eventuelle data download begrænsninger på din enhed.
- Global CDN tillader dine videoer at blive loaded hurtigt uanset hvor dine besøgende er i verden.

---

### Relateret
Læs flere detaljer på [[Publish|Publish plug-in]] siden om at udgive dine noter.


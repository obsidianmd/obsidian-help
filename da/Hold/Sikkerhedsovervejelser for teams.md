---
permalink: teams/security
cssclasses:
  - soft-embed
---
Vores [Sikkerhed](https://obsidian.md/security)-side samler information om, hvordan Obsidian tilgår beskyttelsen af dine data. Det er også hjemsted for sikkerhedsrevisioner udført af tredjeparter.

## Overvejelser

Obsidian er designet til at fungere som en offline og selvstændig applikation. Obsidian understøtter også brugerdefinerede plugins og temaer. Derudover tilbyder vi både officiel og uofficiel understøttelse af forskellige filsynkroniseringstjenester.

Hvis du ikke har til hensigt at bruge fællesskabsplugins eller temaer, eller [[Introduktion til Obsidian Sync|Obsidian Sync]] eller [[Introduktion til Obsidian Publish|Obsidian Publish]], vil dine standardprocedurer for sikring af applikationer gælde. Men hvis du planlægger at bruge nogen af disse funktioner, anbefaler vi at evaluere deres egnethed til din arbejdsplads grundigt.

## Fællesskabsplugins og temaer

Gennemgå venligst siden [[Pluginsikkerhed]] ud over dette afsnit.

Obsidian-teamet gennemgår alle fællesskabsplugins og temaer, der indsendes til det officielle katalog, via vores [releases-repository](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Vi gennemgår ikke fællesskabselementer, som ikke er indsendt til det officielle katalog.

Vi har ikke en fællesskabsbutik for [[CSS-kodestykker]]. Disse filer hentes typisk fra vores [Obsidian-fællesskab](https://obsidian.md/community) eller fra offentlige GitHub-repositories.

Vi kræver bundling af ressourcer i CSS-kodestykker og temaer. Vi har dog gjort en undtagelse for [Google Fonts](https://fonts.google.com/) for at opretholde ydeevnen på mobile enheder, hvor påvirkningen af at bundle skrifttyper er mere mærkbar.

## Netværk og adgang

Mens vi prioriterer den lokalt-først-tilgang i vores applikation, foretager Obsidian netværkskald baseret på de tjenester og funktioner, du bruger. Disse netværksforbindelser kan deaktiveres via en domænefirewall eller applikationslåsning.

Obsidian foretager disse netværksforbindelser på HTTPS port 443.

Følgende er en liste over netværksforbindelser, som Obsidian foretager.

### Obsidian-baserede forbindelser

- **Tidlig adgang-opdateringer**: Bruger `releases.obsidian.md`.
- **Konto- og licensadministration**: Når du tilgår din Obsidian-konto i Indstillinger og anvender en kommerciel licens, kalder vi `api.obsidian.md`.
- **Obsidian Sync**: Bruges til synkronisering af dine noter på tværs af enheder.
	- `sync-xx.obsidian.md`, hvor `xx` er et tal mellem 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` og `publish-xx.obsidian.md`, hvor `xx` er et tal.
    2. Frontend: `publish.obsidian.md`.

### GitHub-baserede forbindelser

Obsidian foretager netværksforespørgsler til både `github.com` og `raw.githubusercontent.com`.

- **Offentlige udgivelser**: Hvis automatiske opdateringer er aktiveret, tjekker Obsidian GitHub for offentlige udgivelser.
- **Tredjeparts temaer og plugins**:
    - Der foretages et tjek hver 12. time fra applikationens starttidspunkt for at hente en fil hostet på GitHub, der bruges til "plugin-udfasninger". Denne fil hjælper med fjerndeaktivering af specifikke versioner af plugins, der er kendt for at fejle, forårsage datatab eller potentielt være sårbare eller ondsindede.
    - Aktiverede plugins kan generere netværkstrafik uden for Obsidians og GitHubs kontrol.

### Andre forbindelser

- **Indlejret onlineindhold**: Når du åbner noter, der indlejrer onlineindhold, som f.eks. et billede (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS-forespørgsler**: Hvis et værtsnavn skal opløses, før der etableres en forbindelse, herunder DNS over HTTPS. Se [Chromiums dokumentation](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) for mere information.

## Ofte stillede spørgsmål

### Kontosikkerhed

**Understøtter Obsidian Single Sign-On (SSO)?**
Obsidian understøtter ikke SSO. I de fleste brugsscenarier kræver Obsidian ikke en konto eller login på din arbejdsplads, medmindre du bruger [[Introduktion til Obsidian Publish|Obsidian Publish]] eller [[Introduktion til Obsidian Sync|Obsidian Sync]].

**Understøtter Obsidian Multi-Factor Authentication (MFA)?**
Obsidian understøtter [[2-faktor-godkendelse]] (2FA) for Obsidian-konti, men understøtter ikke 2FA til at åbne og bruge selve applikationen. Brugere af [[Introduktion til Obsidian Sync|Obsidian Sync]] og [[Introduktion til Obsidian Publish|Obsidian Publish]], der har 2FA aktiveret, vil blive bedt om at bekræfte deres 2FA-nøgle, når de første gang logger ind i applikationen.

### Vurderinger og certificeringer

**Vil I acceptere sikkerhedsvurderinger fra vores virksomhed?**
Vi kræver et minimum beløb på en indkøbsordre, før vi overvejer at gennemføre en sikkerhedsvurdering. Disse vurderinger er ofte tidskrævende og er muligvis ikke relevante for offline-applikationer som Obsidian, da de typisk er rettet mod cloud-baserede tjenester.

Du kan dog frafalde dette krav om indkøbsordre ved at acceptere at betale et forudbetalingsgebyr. Kontakt venligst [[Hjælp og support#Contact Obsidian support|Obsidian support]] for at forhøre dig om denne mulighed.

**Har I nogen anerkendte certificeringer relateret til informationssikkerhed eller kvalitetsstandarder, såsom ISO27001, NIST, COBIT eller andre ISO- eller CSA-certificeringer?**
Ikke på nuværende tidspunkt. Det er muligvis noget, vi udforsker i fremtiden, men for nu er vores fokus på vores [sikkerhedsrevisioner](https://obsidian.md/security).

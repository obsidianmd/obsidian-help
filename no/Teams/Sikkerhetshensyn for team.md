---
permalink: teams/security
cssclasses:
  - soft-embed
---
Vår [Sikkerhet](https://obsidian.md/security)-side samler informasjon om hvordan Obsidian tilnærmer seg beskyttelse av dataene dine. Den er også hjemmet for sikkerhetsrevisjoner utført av tredjeparter.

## Hensyn

Obsidian er designet for å fungere som en offline og frittstående applikasjon. Obsidian støtter også egendefinerte utvidelser og temaer. I tillegg tilbyr vi både offisiell og uoffisiell støtte for ulike filsynkroniseringstjenester.

Hvis du ikke har tenkt å bruke community-utvidelser eller temaer, eller [[Introduksjon til Obsidian Sync|Obsidian Sync]] eller [[Introduksjon til Obsidian Publish|Obsidian Publish]], vil dine standardprosedyrer for å sikre applikasjoner gjelde. Hvis du derimot planlegger å bruke noen av disse funksjonene, anbefaler vi at du grundig evaluerer deres egnethet for arbeidsplassen din.

## Community-utvidelser og temaer

Vennligst se gjennom siden for [[Utvidelsessikkerhet]] i tillegg til denne delen.

Obsidian-teamet gjennomgår alle community-utvidelser og temaer som sendes inn til den offisielle katalogen, via vårt [utgivelsesrepositorium](https://github.com/obsidianmd/obsidian-releases/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc). Vi gjennomgår ikke community-elementer som ikke er sendt inn til den offisielle katalogen.

Vi har ikke en community-butikk for [[CSS-utdrag]]. Disse filene hentes vanligvis fra vårt [Obsidian-fellesskap](https://obsidian.md/community) eller fra offentlige GitHub-repositorier.

Vi krever bunting av ressurser i CSS-utdrag og temaer. Vi har imidlertid gjort et unntak for [Google Fonts](https://fonts.google.com/) for å opprettholde ytelsen på mobile enheter, der effekten av å bunte skrifttyper er mer merkbar.

## Nettverk og tilgang

Selv om vi prioriterer den lokal-først-tilnærmingen i applikasjonen vår, gjør Obsidian nettverkskall basert på tjenestene og funksjonene du bruker. Disse nettverksforbindelsene kan deaktiveres via en domenebrannmur eller applikasjonslåsing.

Obsidian oppretter disse nettverksforbindelsene på HTTPS-port 443.

Følgende er en liste over nettverksforbindelser Obsidian oppretter.

### Obsidian-kildede forbindelser

- **Tidlig tilgang-oppdateringer**: Bruker `releases.obsidian.md`.
- **Konto- og lisensadministrasjon**: Når du åpner Obsidian-kontoen din i Innstillinger og aktiverer en kommersiell lisens, kaller vi `api.obsidian.md`.
- **Obsidian Sync**: Brukes for å synkronisere notatene dine på tvers av enheter.
	- `sync-xx.obsidian.md`, der `xx` er et tall mellom 01-100.
- **Obsidian Publish**:
    1. Backend: `publish-main.obsidian.md` og `publish-xx.obsidian.md`, der `xx` er et tall.
    2. Frontend: `publish.obsidian.md`.

### GitHub-kildede forbindelser

Obsidian gjør nettverksforespørsler til både `github.com` og `raw.githubusercontent.com`.

- **Offentlige utgivelser**: Hvis automatiske oppdateringer er aktivert, sjekker Obsidian GitHub for offentlige utgivelser.
- **Tredjeparts temaer og utvidelser**:
    - En sjekk utføres hver 12. time fra appens oppstartstidspunkt for å hente en fil som er vert på GitHub og brukes til «utvidelsesavskrivninger». Denne filen hjelper med å fjerndeaktivere spesifikke versjoner av utvidelser som er kjent for å fungere feil, forårsake datatap, eller potensielt være sårbare eller skadelige.
    - Aktiverte utvidelser kan generere nettverkstrafikk utenfor Obsidian og GitHubs kontroll.

### Andre forbindelser

- **Innebygd nettinnhold**: Når du åpner notater som bygger inn nettinnhold, som et bilde (`![cat](https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg)`).
- **DNS-forespørsler**: Hvis et vertsnavn må løses før en forbindelse opprettes, inkludert DNS over HTTPS. Se [Chromiums dokumentasjon](https://source.chromium.org/chromium/chromium/src/+/main:net/dns/public/doh_provider_entry.cc;l=120?q=chrome.cloudflare-dns.com&ss=chromium) for mer informasjon.

## Ofte stilte spørsmål

### Kontosikkerhet

**Støtter Obsidian Single Sign-On (SSO)?**
Obsidian støtter ikke SSO. I de fleste brukstilfeller krever Obsidian ikke en konto eller pålogging på arbeidsplassen din, med mindre du bruker [[Introduksjon til Obsidian Publish|Obsidian Publish]] eller [[Introduksjon til Obsidian Sync|Obsidian Sync]].

**Støtter Obsidian flerfaktorautentisering (MFA)?**
Obsidian støtter [[Tofaktorautentisering]] (2FA) for Obsidian-kontoer, men støtter ikke 2FA for å åpne og bruke selve applikasjonen. Brukere av [[Introduksjon til Obsidian Sync|Obsidian Sync]] og [[Introduksjon til Obsidian Publish|Obsidian Publish]] som har aktivert 2FA, vil bli bedt om å bekrefte 2FA-nøkkelen sin når de logger inn i applikasjonen for første gang.

### Vurderinger og sertifiseringer

**Vil dere godta sikkerhetsvurderinger fra selskapet vårt?**
Vi krever et minimumsnivå på en oppgitt innkjøpsordre før vi vurderer å fullføre en sikkerhetsvurdering. Disse vurderingene er ofte tidkrevende og er kanskje ikke anvendelige for offline applikasjoner som Obsidian, da de vanligvis er rettet mot skybaserte tjenester.

Du kan imidlertid frafalle dette kravet om oppgitt innkjøpsordre ved å godta å betale et forskuddshonorar. Vennligst kontakt [[Hjelp og støtte#Kontakt Obsidian-støtte|Obsidian-støtte]] for å spørre om dette alternativet.

**Har dere noen anerkjente sertifiseringer relatert til informasjonssikkerhet eller kvalitetsstandarder, som ISO27001, NIST, COBIT, eller andre ISO- eller CSA-sertifiseringer?**
Ikke for øyeblikket. Det kan være noe vi utforsker i fremtiden, men foreløpig er fokuset vårt på våre [sikkerhetsrevisjoner](https://obsidian.md/security).

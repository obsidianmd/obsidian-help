---
permalink: android
---
Obsidian-mobilappen for Android gir kraftige notatfunksjoner til Android-enheten din. Du kan laste den ned fra [Google Play](https://play.google.com/store/apps/details?id=md.obsidian) eller som en [APK-fil](https://obsidian.md/download).
Den støtter Android versjon 5.1 og nyere.

Denne siden dekker Android-spesifikke funksjoner, inkludert widgeter, hurtiginnstillinger og snarveier.

## Sync

For å synkronisere notatene dine med Obsidian på Android, se [[Synkroniser notatene dine på tvers av enheter]].

## Hvelvplassering

Når du starter Obsidian på Android, blir du bedt om å velge hvor hvelv-dataene dine skal lagres. Du kan velge **enhetslagring** (anbefalt) eller **app-lagring**.

### Enhetslagring

Med alternativet **enhetslagring** lagres dataene dine på en delt plassering på enheten din. Dette gjør at Obsidian-hvelvet ditt kan nås av andre apper og tjenester, som tredjeparts [[Synkroniser notatene dine på tvers av enheter|synkroniserings]]-verktøy.

Dette er det anbefalte alternativet fordi det gir bedre kompatibilitet med synkroniseringsverktøy og sikrer at dataene dine bevares selv om du avinstallerer appen. Dette alternativet krever imidlertid ekstra tillatelser for å få tilgang til enhetens filer.

På grunn av begrensninger i Android vil Obsidian be om tilgang til «alle filer» for å fungere pålitelig. Google anbefaler dette for apper som Obsidian, som anses som «dokumenthåndteringsapper». [Les mer](https://developer.android.com/training/data-storage/manage-all-files).

Appen bruker kun denne tillatelsen for å hjelpe deg med å få tilgang til dataene dine på enheten din. Dataene dine er aldri tilgjengelige for oss. For å lære mer om hvordan vi beskytter dataene dine og sikrer personvernet ditt, besøk vår [sikkerhetsside](https://obsidian.md/security).

### App-lagring

Med alternativet **app-lagring** lagres dataene dine i Obsidians private app-lagring. Dette holder dataene dine isolert fra andre apper for ekstra personvern.

Dette er et godt alternativ hvis du ikke bruker eksterne synkroniseringsverktøy og foretrekker strengere sandkassing på app-nivå for notatene dine.

Med dette alternativet kan du bruke [[Introduksjon til Obsidian Sync|Obsidian Sync]] og tredjeparts synkroniseringsutvidelser tilgjengelige gjennom [[Community-utvidelser]], men du kan ikke bruke verktøy som Syncthing som er avhengige av delt lagring.

> [!warning] Avinstallering av Obsidian vil slette lokale notater hvis du bruker app-lagring
> Hvis du bruker alternativet **App-lagring** vil lokale hvelvdata bli slettet hvis du avinstallerer appen. Obsidian-hvelv-dataene dine på andre enheter vil ikke bli slettet.

## Widgeter

Obsidian for Android tilbyr flere widget-alternativer for rask tilgang til hvelvene og notatene dine fra startskjermen. Tilgjengelige widgeter inkluderer:

- **Åpne notat** — Åpne et bestemt notat
- **Nytt notat** — Opprett et nytt notat
- **Søk** — Start en søkespørring
- **Daglig notat** — Åpne det daglige notatet ditt
- **Åpne Obsidian** — Start appen

> [!note] Merk
> Disse widgetene er statiske og viser ingen forhåndsvisninger av det valgte notatet eller hvelvet.

For å legge til widgeter på startskjermen:
1. Trykk og hold hvor som helst på startskjermen
2. Velg «Widgeter»
3. Finn Obsidian, og velg deretter en widget du vil bruke.

> [!note] Merk
> Obsidian-widgeter kan endres i størrelse. For å endre størrelsen på en widget, trykk og hold den, og dra deretter i håndtakene for størrelseendring.

Du kan legge til flere widgeter av samme type for å åpne forskjellige filer eller utløse forskjellige søkespørringer.

For å konfigurere en widget, trykk lenge på den på startskjermen, og finn deretter et «Rediger»- eller «Konfigurer»-alternativ. Dette lar deg spesifisere de spesifikke parameterne som kreves for at widgetens trykk-handling skal fungere, som fil eller bane, søkespørring og hvelvnavn.

Se denne [Google Support-artikkelen](https://support.google.com/android/answer/9450271?hl=en) for mer informasjon om Android-widgeter.

## Hurtiginnstillinger

Krever Android 7.0 eller nyere.

Legg til en Obsidian-hurtiginnstillingsflis for rask tilgang til appen fra varslingspanelet. Fungerer på startskjermen og låseskjermen.

> [!note] Merk
> I motsetning til app-widgeter kan du bare legge til én hurtiginnstillingsflis av samme type.

For å legge til en hurtiginnstillingsflis i varslingspanelet:

1. Åpne varslingspanelet, vanligvis ved å sveipe ned fra statuslinjen. Merk: du må kanskje sveipe en gang til for å se flere alternativer.
2. I hurtiginnstillingsflisene velger du «Rediger» – dette er vanligvis den samme seksjonen der vekslere som Wi-Fi, Bluetooth og rotasjonslås befinner seg.
3. Finn og velg en Obsidian-hurtiginnstillingsflis, og ordne den etter ønske.
4. For å konfigurere en hurtiginnstillingsflis, trykk og hold den for å åpne konfigurasjonsskjermen.

Se denne [Google Support-artikkelen](https://support.google.com/android/answer/9083864?hl=en) for mer informasjon om Android hurtiginnstillinger.

## Snarveier

Krever Android 7.1 eller nyere.

Obsidian tilbyr app-snarveier som kan nås på flere måter:

- Trykk lenge på Obsidian-app-ikonet
- Dra snarvei-ikonet til startskjermen
- Tilgang via søkefeltet i startprogrammet (tilgjengelig hos de fleste enhetsprodusenter)

Tilgjengelige snarveier:

- **Åpne notat** — Åpne et bestemt notat i hvelvet ditt
- **Daglig notat** — Gå direkte til dagens daglige notat

> [!note] Merk
> Snarveier i Obsidian 1.11 er ikke konfigurerbare og vil bli overhalt i senere versjoner for å tilby mer dynamiske alternativer tilpasset dine spesifikke notater.

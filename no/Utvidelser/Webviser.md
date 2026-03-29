---
permalink: plugins/web-viewer
---
Webviser er en [[Kjerneutvidelser|kjerneutvidelse]] som lar deg åpne eksterne lenker i Obsidian på skrivebordet. Dette lar deg lese lenkeinnhold uten å forlate appen og gjør multitasking i nettforskningsprosjekter enklere.

Eksterne lenker åpnes som en [[Faner|fane]] som du kan omorganisere, dele og åpne i et [[Løsrevne vinduer|løsrevet vindu]]. Alle nettsidekort som er innebygd i [[Canvas]]-filer kan åpnes som webviser-faner.

Webviser er ikke en erstatning for din primære nettleser. Webviser gir en rask måte å få tilgang til nettsider for forskning i Obsidian. Den tilbyr imidlertid ikke den fulle funksjonaliteten, sikkerhetskontrollene eller utvidbarheten til en dedikert nettleser.

## Lesevisning

Klikk på brille-ikonet for å se en rentekst-versjon av nettsiden. Denne funksjonen fungerer ved å rense innholdet ved hjelp av Mozillas Readability-bibliotek utviklet for Firefox.

## Lagre til hvelv

Klikk på mer-handlinger-ikonet for å lagre en nettside til hvelvet ditt. Du kan tilpasse lagringsplasseringen ved å gå til **[[Innstillinger]]** → **Webviser**.

## Annonseblokkering

Webviser blokkerer annonser som standard. Du kan tilpasse regler for annonseblokkering ved å legge til lister som [Easylist](https://easylist.to/).

## Sikkerhet

Hvis du bruker tredjeparts Obsidian-utvidelser, anbefaler vi at du bruker din primære nettleser for sensitive oppgaver og passordbeskyttede nettsteder i stedet for Webviser.

Webviser er basert på den samme [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag)-funksjonen som lar deg bygge inn nettsider i [[Canvas]]. Webviser har blitt [uavhengig revidert](https://obsidian.md/blog/cure53-second-client-audit/) for å verifisere at den er trygt implementert.

Obsidian-utvidelser [[Utvidelsessikkerhet#Utvidelsesegenskaper|er ikke sandkassebaserte]] og har dyp kontroll over appen. Denne utformingen muliggjør kraftig funksjonalitet, men kommer også med sikkerhetsmessige avveininger. Mens Obsidian kjører, har tredjepartsutvidelser full tilgang til informasjonskapsler i Webviser.

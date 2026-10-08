---
permalink: pdf
publish: true
mobile: true
description: 'Lær hvordan du kan vise, søke i og lenke til PDF-er i Obsidian, og hvordan du eksporterer et notat som PDF.'
---
Obsidian åpner PDF-filer i en innebygd visning. Du kan også bygge inn en PDF i et notat, lenke til en passage i den, og eksportere et hvilket som helst notat som PDF. For filtypene Obsidian støtter, se [[Aksepterte filformater]].

> [!info]+ Noen funksjoner er kun for skrivebord
> Obsidian-appen på mobil kan ikke søke i en PDF, kopiere et sitat eller en lenke til en markering, eller eksportere et notat til PDF.

## Åpne en PDF

I [[Filutforsker|filutforskeren]] velger du en PDF for å åpne den i en fane.

> [!info]+ Merknader støttes ikke
> Obsidian støtter ikke å legge til merknader eller uthevinger i en PDF. For å markere opp en PDF, bruk en annen app og åpne deretter den oppdaterte filen i hvelvet ditt.

Visningen har en verktøylinje med disse kontrollene. Obsidian-appen på mobil har den samme verktøylinjen.

- **Vis/skjul sidepanel** viser eller skjuler sidepanelet, og **Alternativer for sidepanelet** endrer hva sidepanelet viser.
- **Zoom ut** og **Zoom inn** endrer størrelsen på siden.
- **Visningsalternativer** endrer hvordan sider er lagt opp.
- Sideboksen viser gjeldende side. Skriv inn et sidenummer for å gå til den siden.

For å arbeide med selve PDF-filen, som å gi den nytt navn eller flytte den, velg **Flere valg** ![[lucide-more-horizontal.svg#icon]]. En PDF har færre elementer i denne menyen enn et notat. Se [[Flere valg-meny]].

## Naviger i en PDF

Velg **Alternativer for sidepanelet**, og velg deretter hva som skal vises.

- **Miniatyrbilder** viser en liten forhåndsvisning av hver side.
- **Innholdsfortegnelse** viser PDF-ens disposisjon, hvis den har en.
- **Vis siden i innholdsfortegnelsen** uthever gjeldende side i innholdsfortegnelsen.

For å lenke til en side, høyreklikk på miniatyrbildet og velg **Kopier lenke til side N**, der N er sidenummeret. Lim inn lenken i et notat.

For å lenke til en seksjon, høyreklikk på en oppføring i innholdsfortegnelsen og velg **Kopier lenke til "Tittel"**, der Tittel er navnet på oppføringen. På mobil trykker og holder du på oppføringen.

## Endre hvordan en PDF ser ut

Velg **Visningsalternativer** for å endre oppsettet.

- **Tilpass bredde** og **Tilpass høyde** tilpasser siden til visningen.
- **Enkeltside** viser én side om gangen.
- **Two page (odd)** viser sider side om side, med en odde side til venstre. For eksempel vises side 1 og 2 sammen, og deretter side 3 og 4.
- **Two page (even)** viser sider side om side, med en partall-side til venstre. For eksempel vises side 1 alene, og deretter vises side 2 og 3 sammen.
- **Tilpass til tema** gjør PDF-ens farger mørkere når Obsidian-temaet ditt er mørkt.

## Søke i en PDF

Søk inne i en PDF er kun tilgjengelig på skrivebord. Obsidian-appen på mobil har ikke søk i PDF-visningen.

1. Trykk `Ctrl+F` (Windows og Linux) eller `Command+F` (macOS).
2. I **Skriv her for å søke...** skriver du inn teksten du vil finne.
3. Velg pil opp eller ned for å flytte mellom treff.

For å endre hvordan søket fungerer, bruk disse alternativene.

- **Skill mellom store og små bokstaver** matcher store og små bokstaver nøyaktig. Det er **Aa**-knappen i søkefeltet.
- **Uthev alle** uthever hvert treff. Velg innstillingsknappen ved siden av pilene for å finne dette alternativet.
- **Skill mellom diakritiske tegn** behandler bokstaver med aksenter som forskjellige bokstaver. Det er i den samme innstillingsmenyen.
- **Hele ord** finner bare hele ord. Det er i den samme innstillingsmenyen.

Velg lukkeknappen for å forlate søket.

## Kopiere tekst fra en PDF

På skrivebord markerer du tekst i PDF-en, og deretter høyreklikker du på den.

- **Kopier** kopierer teksten.
- **Kopier som sitat** kopierer teksten som et sitat, etterfulgt av en lenke til passasjen.
- **Kopier lenke til markering** kopierer en lenke til den passasjen, slik at du kan lime den inn i et notat.

Et sitat ser slik ut når du limer det inn i et notat.

```md
> Obsidian is awesome

[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

En lenke til en markering har den samme lenken alene.

```md
[[Gemmy.pdf#page=1&selection=32,0,32,14|Gemmy, page 1]]
```

På mobil viser markering av tekst i en PDF enhetens standard tekstmeny. **Kopier som sitat** og **Kopier lenke til markering** er ikke tilgjengelig.

## Bygge inn en PDF

For å vise en PDF inne i et notat, se hvordan du [[Bygge inn filer#Bygge inn en PDF i et notat|bygger inn en PDF i et notat]]. En innebygd PDF har den samme verktøylinjen som visningen. Velg **Rediger denne blokken** for å endre innbyggingslenken.

## Eksportere et notat til PDF

Du kan eksportere ethvert notat som PDF på skrivebord. Eksport til PDF er ikke tilgjengelig i Obsidian-appen på mobil.

1. Åpne notatet du vil eksportere.
2. Åpne [[Kommandovelger|kommandopaletten]] og velg **Export PDF**. Du kan også velge **Flere valg** ![[lucide-more-horizontal.svg#icon]] i notatet, og deretter velge **Export PDF**.
3. Velg innstillingene dine.
    - **Inkluder filnavn som tittel** legger til filnavnet øverst i PDF-en.
    - **Sidestørrelse** angir papirstørrelsen. Du kan velge A3, A4, A5, Legal, Letter eller Tabloid.
    - **Liggende** snur sidene sidelengs.
    - **Marg** setter sidemarginen til **Standard**, **Minimal** eller **Ingen**.
    - **Nedskalering i prosent** skalerer innholdet på hver side. Ved 100 beholder innholdet full størrelse. Lavere verdier gjør tekst og bilder mindre, slik at mer får plass på hver side.
4. Velg **Eksporter til PDF**.
5. Velg hvor filen skal lagres.

> [!tip]- Eksportere et notat med mørkt tema
> Eksporter bruker alltid lys stil, selv om temaet ditt er mørkt. For å endre hvordan en eksport ser ut, kan du bruke et [[CSS-utdrag]]. Obsidian-forumet har eksempler på utdrag for utskrift og eksport.[^1]

[^1]: Se [How can I make export pdf look the same as my theme?](https://forum.obsidian.md/t/how-can-i-make-export-pdf-look-the-same-as-my-theme/75849) og [PDF and print style reset with code syntax highlighting](https://forum.obsidian.md/t/pdf-and-print-style-reset-with-code-syntax-highlighting/31761).

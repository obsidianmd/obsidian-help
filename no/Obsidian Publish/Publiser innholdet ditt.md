---
permalink: publish/publish
publish: true
mobile: true
description: Lær hvordan du publiserer innholdet ditt ved hjelp av Obsidian Publish.
---
Denne siden forklarer hvordan du administrerer publisert innhold. For å lære hvordan du tilpasser nettstedets stil, se [[Tilpass nettstedet ditt]].

## Forutsetninger

- En Obsidian-konto. Hvis du ikke har en, [registrer deg nå](https://obsidian.md/auth?returnto=%2Faccount%2Fpublish#signup).
- Et aktivt Obsidian Publish-abonnement. Hvis du ikke har et, abonner fra [kontooversikten din](https://obsidian.md/account/publish).
- Kjerneutvidelsen **Publish** er [[Sett opp Obsidian Publish#Aktiver Obsidian Publish|aktivert]].
- Et [[Administrer nettsteder#Opprett et nytt nettsted|Publish-nettsted]] er opprettet.

## Publiser notater

1. I **verktøylinjen**, velg **Publish changes** ![[lucide-send.svg#icon]].
2. I dialogboksen **Publish changes**, velg **NEW** for å se alle upubliserte notater.
3. Velg notatene du vil publisere.
4. Velg **Publiser**.

## Avpubliser notater

Notater forblir i det lokale hvelvet ditt selv etter at du avpubliserer dem.

1. I **verktøylinjen**, velg **Publish changes** ![[lucide-send.svg#icon]].
2. I dialogboksen **Publish changes**, velg **UNCHANGED** for å se alle publiserte notater.
3. Velg notatene du vil avpublisere.
4. Velg **Publiser**.

## Oppdater et publisert notat

1. I **verktøylinjen**, velg **Publish changes** ![[lucide-send.svg#icon]].
2. I dialogboksen **Publish changes**, velg **CHANGED** for å se alle endrede notater siden forrige publisering.
3. Velg notatene du vil oppdatere.
4. Velg **Publiser**.

> [!hint] Sletting av omdøpte eller fjernede notater og bilder fra Publish skjer i dette steget. Du må manuelt merke av i avkrysningsboksen for å slette disse dataene, da de av sikkerhetshensyn ikke velges automatisk.

## Publiser lenkede data

Når du publiserer notater som inneholder lenker til andre notater eller innebygde bilder, kan det oppstå ødelagte lenker med mindre de lenkede notatene også publiseres. **Obsidian Publish** bidrar til å forhindre dette ved automatisk å velge media som er lenket fra notatene du allerede har valgt.

For å inkludere alle lenkede notater, velg **Legg til lenkede** i dialogboksen **Publish changes**.

Gjennomgå det oppdaterte utvalget før publisering for å sikre at det ikke inkluderer data du ikke er klar til å publisere.

> [!tip] Funksjonen **Legg til lenkede** respekterer eventuelle unntak definert i [[#Ignorer data]].

## Velg data for publisering automatisk

Sett `publish: true` i [[Egenskaper|egenskapene]] til et notat for automatisk å inkludere det for publisering som enten et nytt eller endret notat.

Du kan også automatisk velge notater og lenkede bilder i bestemte mapper ved å legge dem til som **inkluderte** mapper:

1. I **verktøylinjen**, velg **Publish changes** ![[lucide-send.svg#icon]] eller åpne [[Kommandovelger|kommandopaletten]] og skriv **Publish: Publish changes...**.
2. Velg ikonet **Administrer Publish-filtre** ![[lucide-filter.svg#icon]].
3. I seksjonen **Inkluderte mapper**, velg **Administrer**.
4. Velg mappene du vil inkludere fra forslagsmenyen.
5. Mappen legges til i den inkluderte listen.
6. Velg **Ferdig** når du er ferdig.

### Ignorer data

For å ignorere et notat i Obsidian Publish, sett `publish: false` i [[Egenskaper|egenskapene]] til notatet. Notatet vises ikke lenger i listen over notater som skal publiseres.

Du kan også automatisk ignorere notater og bilder i bestemte mapper ved å legge dem til som **utelatte** mapper:

1. I **verktøylinjen**, velg **Publish changes** ![[lucide-send.svg#icon]] eller åpne [[Kommandovelger|kommandopaletten]] og skriv **Publish: Publish changes...**.
2. Velg ikonet **Administrer Publish-filtre** ![[lucide-filter.svg#icon]].
3. I seksjonen **Utelatte mapper**, velg **Administrer**.
4. Velg mappene du vil utelate fra forslagsmenyen.
5. Mappen legges til i den utelatte listen.
6. Velg **Ferdig** når du er ferdig.

> [!note] `publish: true` overstyrer utelatte mapper
> Hvis en fil har `publish: true`, vil den fortsatt bli publisert selv om den er i en mappe eller et filter som er utelatt. Dette er fordi `publish: true` gir mer spesifikk kontroll.

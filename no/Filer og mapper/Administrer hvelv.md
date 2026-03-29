---
permalink: manage-vaults
---
Et **hvelv** er en mappe i filsystemet ditt som inneholder notatene dine, [[Vedlegg|vedlegg]] og [[Konfigurasjonsmappe|konfigurasjonsmappen]] med Obsidian-spesifikke innstillinger. For mer informasjon om hvelv, se [[Hvordan Obsidian lagrer data]].

Du kan administrere hvelvene dine ved hjelp av **Hvelvbytteren**. *Hvelvprofilen* åpnes første gang du åpner Obsidian.

For å åpne hvelvbytteren fra et eksisterende hvelv, velg **Hvelvprofil** ![[lucide-chevrons-up-down.svg#icon]] nederst i [[Sidefelt|venstre sidefelt]]. Eller velg **Åpne et annet hvelv** fra [[Kommandovelger|kommandopaletten]].

## Opprett nytt hvelv

1. Åpne Obsidian på datamaskinen din.
2. Nederst til venstre, velg **Hvelvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontekstmeny vil dukke opp. Velg **Administrer hvelv...**.
3. Til høyre for **Opprett nytt hvelv**, velg **Opprett**.
4. I **Hvelvnavn**, skriv inn navnet på hvelvet ditt.
5. Klikk **Bla gjennom** for å velge hvor det nye hvelvet skal opprettes.
6. Klikk **Opprett**.

## Opprett hvelv fra en eksisterende mappe

1. Åpne Obsidian på datamaskinen din.
2. Nederst til venstre, velg **Hvelvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontekstmeny vil dukke opp. Velg **Administrer hvelv...**.
3. Til høyre for **Åpne mappe som hvelv**, klikk **Åpne**.
4. I filutforskeren, velg mappen du vil bruke som hvelv.
5. Klikk **Åpne**.

> [!tip] Åpne hvelv fra Obsidian Sync
> Hvis du vil åpne et fjernhvelv med Obsidian Sync, se [[Sett opp Obsidian Sync]].

## Gi hvelvet nytt navn

Siden navnet på hvelvet og den underliggende mappen er det samme, vil det å gi hvelvet nytt navn også gi mappen nytt navn.

1. Åpne Obsidian på datamaskinen din.
2. Nederst til venstre, velg **Hvelvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontekstmeny vil dukke opp. Velg **Administrer hvelv...**.
4. I hvelvlisten, velg **Flere valg** ![[lucide-more-horizontal.svg#icon]] ved siden av hvelvet du vil gi nytt navn.
5. Velg **Gi hvelvet nytt navn**.
6. Skriv inn det nye navnet for hvelvet, og trykk `Enter`.

## Flytt hvelvet til en annen mappe

1. Åpne Obsidian på datamaskinen din.
2. Nederst til venstre, velg **Hvelvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontekstmeny vil dukke opp. Velg **Administrer hvelv...**.
4. Lukk det gjeldende hvelvvinduet, men la **Administrer hvelv**-vinduet stå åpent.
5. I hvelvlisten, velg **Flere valg** ![[lucide-more-horizontal.svg#icon]] ved siden av hvelvet du vil flytte.
6. Velg **Flytt hvelv**, og velg deretter den nye plasseringen.

Noen operativsystemer tillater ikke at hvelvet flyttes med Hvelvbytteren. I disse tilfellene må du flytte hvelvet manuelt:

1. Lukk Obsidian.
2. Flytt hvelvmappen til en ny plassering, og unngå mapper som synkroniseres av andre tjenester.
3. Åpne Obsidian igjen.
4. Klikk på **Hvelvprofil**-ikonet nederst til venstre ![[lucide-chevrons-up-down.svg#icon]].
5. Fra menyen som dukker opp, velg **Administrer hvelv...**.
6. Ved siden av **Åpne mappe som hvelv**, klikk **Åpne**.
7. Naviger til og velg den nye hvelvmappen din.
8. Klikk **Åpne**.
9. Bekreft at hvelvinnholdet er uendret. Om nødvendig, aktiver community-utvidelser på nytt ved å navigere til **[[Innstillinger]] → Community-utvidelser → Slå av begrenset modus**.

## Fjern hvelv

Å fjerne et hvelv fjerner det bare fra hvelvlisten.

1. Åpne Obsidian på datamaskinen din.
2. Nederst til venstre, velg **Hvelvprofil** ![[lucide-chevrons-up-down.svg#icon]].
3. En kontekstmeny vil dukke opp. Velg **Administrer hvelv...**.
4. I hvelvlisten, velg **Flere valg** ![[lucide-more-horizontal.svg#icon]] ved siden av hvelvet du vil fjerne.
5. Velg **Fjern fra listen**.

## Overfør innstillinger til et annet hvelv

For å bruke de samme innstillingene for et annet hvelv, bruk din foretrukne filbehandler (eller terminal) til å kopiere `.obsidian`-mappen fra roten av kildehvelvet til roten av destinasjonshvelvet.

Du må kanskje starte Obsidian på nytt for at endringene skal tre i kraft.

> [!note] Hvor finner jeg `.obsidian`-mappen?
> Som standard skjuler de fleste operativsystemer mapper som begynner med punktum (`.`). For mer informasjon om `.obsidian`-mappen og hvordan du får tilgang til den, se [[Hvordan Obsidian lagrer data#Hvelvinnstillinger|hvelvinnstillinger]] og [[Konfigurasjonsmappe|konfigurasjonsmapper]].

---
permalink: symlinks
---
Je kunt [symbolische koppelingen](https://en.wikipedia.org/wiki/Symbolic_link) (symlinks) en [juncties](https://learn.microsoft.com/en-us/windows/win32/fileio/hard-links-and-junctions#junctions) in je kluis gebruiken om bestanden buiten de kluis en de [[Hoe Obsidian gegevens opslaat#Globale instellingen|systeemmap]] op te slaan.

> [!danger] Gebruik op eigen risico
> We raden het gebruik van symbolische koppelingen sterk af. Door symbolische koppelingen en juncties in je kluis te gebruiken, loop je het risico gegevens te verliezen of te beschadigen, of Obsidian te laten crashen. Zorg ervoor dat je regelmatig back-ups maakt van je kluis en instellingen.

Hieronder staan enkele beperkingen of problemen waarvan we op de hoogte zijn en die je in gedachten wilt houden:

- Symlink-lussen zijn niet toegestaan om te voorkomen dat Obsidian crasht door een oneindige lus.
- Symlink-doelen moeten volledig gescheiden zijn van de kluisroot of andere symlink-doelen. Gescheiden betekent dat de ene map de andere niet bevat, of andersom. Obsidian negeert elke symlink naar een bovenliggende map van de kluis, of van de ene map in de kluis naar een andere map in dezelfde kluis. Dit is een beveiliging om ervoor te zorgen dat je geen dubbele bestanden in je kluis krijgt, waardoor koppelingen dubbelzinnig zouden kunnen worden.
- Symlinks werken mogelijk niet goed samen met Obsidian Sync, of _welke andere vorm van synchronisatie dan ook_. Als het doel van een symlink zelf een map is die wordt gesynchroniseerd door een andere Obsidian-kluis, kun je (mogelijk) te maken krijgen met synchronisatieconflicten of gegevensverlies. Sommige synchronisatietools, zoals Git, volgen geen symlinks, maar synchroniseren het _pad_ waarnaar de symlink verwijst, wat ongewenste resultaten kan opleveren als je je kluis op die manier deelt met andere mensen.
- De bestandsbeheerder van Obsidian kan geen bestanden verplaatsen over apparaatgrenzen heen, dus als je een symlink maakt naar een map op een andere schijf dan je kluis, kun je geen bestanden slepen tussen die map en andere mappen met de verkenner van Obsidian. (Je moet de verkenner van je besturingssysteem gebruiken voor dergelijke verplaatsingen, en Obsidian zal de verplaatsing zien als een verwijdering en het aanmaken van een nieuw bestand. Het zal ook _geen_ koppelingen bijwerken die afhankelijk waren van het pad van dat bestand.)
- Bestandssymlinks (in tegenstelling tot mapsymlinks) _kunnen_ werken, maar worden op dit moment niet officieel ondersteund. Wijzigingen die buiten Obsidian worden uitgevoerd, worden niet bewaakt, dus als je het bestand rechtstreeks wijzigt, zal Obsidian de wijziging niet detecteren, zoekindexen niet bijwerken, enz.
- Het symlinken van items onder de `.obsidian/`-map om ze te delen tussen kluizen **heeft een grote kans je instellingen te beschadigen**, tenzij je _echt_ weet wat je doet. Als je besluit dit te doen, maak dan in ieder geval back-ups.

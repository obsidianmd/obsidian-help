---
permalink: plugins/web-visning
---
"Webvisning" er et [[Kerneplugins|kerneplugin]], der lader dig åbne eksterne links i Obsidian på destop. Det giver dig mulighed for at læse indhold af links uden at forlade Obsidian, hvilket kan gøre internet researchprojekter nemmere.

Eksterne links åbner som en [[Faner|fane]], som du kan omarrangere, splitte og åbne i et [[Pop-op vinduer|pop-op vindue]]. Enhvert web kort indlejret i et [[Lærred|lærred]] kan åbnes som webvisningsfaner.

Webviseren er ikke en erstatning for din primære browser. Webviseren giver dig en hurtig måde at tilgå websider på, når du researcher i Obsidian. Den indeholder ikke fuld funktionalitet, sikkerheds kontrol eller kan udvides, som en dedikeret browser kan.

## Læsningsvisning

Klik på brille ikonet for at se en almindelig tekstversion af websiden. Denne funktion fungerer ved at rense indholdet for UI elementer ved hjælp af _**_Mozilla's Readability library_ udviklet af FIrefox.

## Gem til boks

Klik på ikonet for flere funktioner for at gemme websiden i din boks. Du kan ændre placeringen for gamte sider under **Indstillinger** → **Webfremviser**.

## Annonce blokering

Webviseren blokerer som standard annoncer. Du kan ændre blokeringsreglerne ved at listføje lister, som fx. [Easylist](https://easylist.to/). 

## Sikkerhed

Hvis du anvender Obsidian fællesskabsplugins anbefaler vi at benytte din primære browser til sensitive opgaver og kodeordssikrede websteder i stedet for webviseren.

Webviseren er baseret på den samme [Chromium](https://developer.chrome.com/docs/apps/reference/webviewTag) funktion, som lader dig indlejre websider i et [[Lærred|lærred]]. 
Webviseren er blevet [uafhængigt sikkerhedstjekket](https://obsidian.md/blog/cure53-second-client-audit/) for at sikre at den er blvete implementeret sikkert.

Obsidian plugins [[Plugin sikkerhed#Om plugin begræsninger|kører ikke i en sandkasse]] og har stor kontrol over applikationen. Dette design muliggør kraftfuld funktionalitet, men kommer også med sikkerhedsafvejninger. Når fællesskabsplugins kører, har de fuld tilgang tiul cookies i webviseren.

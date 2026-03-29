---
permalink: snippets
publish: true
mobile: true
description: Leer hoe je onderdelen van het uiterlijk van de Obsidian-app kunt aanpassen zonder een volledig thema te maken.
---
Leer hoe je aspecten van de weergave van de Obsidian-app kunt aanpassen zonder dat je een [thema hoeft te bouwen](https://docs.obsidian.md/Themes/App+themes/Build+a+theme).

> [!tip] Als je op zoek bent naar richtlijnen voor het omgaan met CSS voor [[Inleiding tot Obsidian Publish|Obsidian Publish]], bekijk dan [[Je site aanpassen]].

CSS is een taal die bepaalt hoe HTML eruitziet. Door CSS-fragmenten toe te voegen, kun je onderdelen van de Obsidian-gebruikersinterface aanpassen, zoals de grootte en kleur van koppen. Obsidian heeft [CSS-variabelen](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) die je helpen de interface eenvoudig aan te passen.

Obsidian zoekt naar CSS-fragmenten in de [[Configuratiemap|configuratiemap]] van de kluis.

## Een fragment toevoegen

Volg deze stappen om een CSS-fragment toe te voegen op **Desktop** ![[lucide-monitor-check.svg#icon]]:

1. Open **[[Instellingen]]** ![[lucide-settings.svg#icon]].
2. Selecteer onder **Uiterlijk → CSS-fragmenten** de optie **Open de map met fragmenten** ![[lucide-folder-open.svg#icon]].
3. Maak in de map met fragmenten een CSS-bestand aan dat je fragment bevat.
4. Selecteer in Obsidian onder **Uiterlijk → CSS-fragmenten** de optie **Herlaad fragmenten** ![[lucide-refresh-cw.svg#icon]] om het fragment in de lijst te zien.
5. Schakel het fragment in door op de schakelaar te klikken.

Volg deze stappen om een CSS-fragment toe te voegen op **Mobiel/Tablet** ![[obsidian-icon-smartphone.svg#icon]]:

1. Open een bestandsbeheerder en zoek je kluis. Je kunt de locatie van de kluis controleren in _Kluizen beheren…_ door op je kluis te tikken en het pad te bekijken.
2. Open de [[Configuratiemap]] en maak een map genaamd `snippets` aan als deze nog niet bestaat.
3. Voeg je CSS-fragment toe aan deze map.
4. Open de **[[Instellingen]]** van Obsidian ![[lucide-settings.svg#icon]].
5. Selecteer **Uiterlijk** aan de linkerkant.
6. Scroll omlaag naar het gedeelte **CSS-fragmenten**.
7. Tik op **Herlaad fragmenten** ![[lucide-refresh-cw.svg#icon]] om de lijst te vernieuwen.
8. Tik op de schakelaar om het fragment in te schakelen.

Als alternatief kun je:
- Wijzigingen [[Notities synchroniseren tussen apparaten|synchroniseren]] met je synchronisatieservice.
- Een community-plugin gebruiken om een fragment vanuit Obsidian aan te maken.

Zodra een fragment is ingeschakeld, detecteert Obsidian automatisch wijzigingen in CSS-fragmenten en past deze toe wanneer je het bestand opslaat.

> [!tip] Je hoeft Obsidian niet opnieuw op te starten om wijzigingen door te voeren. Mogelijk moet je echter de opdracht in het [[Opdrachtenpaneel|opdrachtenpalet]] gebruiken om Obsidian opnieuw te laden zonder op te slaan, zodat je wijzigingen in het huidige thema of de notitie kunt zien.

## CSS schrijven voor Obsidian

Obsidian biedt verschillende methoden die het schrijven van CSS eenvoudiger en krachtiger maken.

Het heeft een groot aantal [CSS-variabelen](https://docs.obsidian.md/Reference/CSS+variables/CSS+variables) om eenvoudig onderdelen van Obsidian aan te passen, en een ingebouwd [[Eigenschappen#Eigenschapstypen|eigenschapstype]] om het uiterlijk van één of meerdere notities te veranderen.

> [!example] Variabelen
> Maak een bestand genaamd `headers.css` aan met de volgende inhoud om de kleuren van de zes [[Basis opmaaksyntaxis#Koppen|kopniveaus]] te veranderen in een regenboog:
>
> ```css
> body {
>   --h1-color: red;
>   --h2-color: orange;
>   --h3-color: yellow;
>   --h4-color: green;
>   --h5-color: blue;
>   --h6-color: pink;
> }
> ```

> [!example] CSS-klassen
> Wijs de naam van een aangepaste CSS-klasse (of een lijst van CSS-klassen) toe aan een voorgedefinieerde [[Eigenschappen|eigenschap]] `cssclasses` om één of meer notities er anders uit te laten zien dan andere.
> 
> **CSS**:
> ```css
> .red-border img {
>    border-color: #ff0000;
>    border-style: solid;
> }
> ```
> 
> **YAML/Eigenschappen**:
> ```yaml
> cssclasses:
>  - red-border
> ```
> 
> In elke notitie die de waarde `red-border` bevat in de eigenschap `cssclasses`, worden afbeeldingen weergegeven met een rode rand.

Om er zeker van te zijn dat het CSS-bestand geldig en correct opgemaakt is, raden we aan het te valideren met een tool zoals [CSS Validation Service](https://jigsaw.w3.org/css-validator/), aangezien ongeldige CSS niet werkt.

## Meer informatie

- Als je nieuw bent met CSS, bekijk dan [Learn to style HTML using CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS) van Mozilla.
- Voor meer informatie over het stylen van Obsidian, zie:
  - [About styling](https://docs.obsidian.md/Reference/CSS+variables/About+styling)
  - [Build a theme](https://docs.obsidian.md/Themes/App+themes/Build+a+theme)
  - [Build a Publish theme](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme)
  - [Obsidian CSS Inspector workflow](https://forum.obsidian.md/t/obsidian-css-inspector-workflow/58178)

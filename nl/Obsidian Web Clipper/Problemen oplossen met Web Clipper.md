---
permalink: web-clipper/troubleshoot
---
Als je problemen ondervindt met [[Introductie tot Obsidian Web Clipper|Web Clipper]] kun je hulp krijgen via het [officiële Discord-kanaal](https://discord.com/channels/686053708261228577/1285652864089198672). Je kunt ook bugs melden op de [GitHub-repo](https://github.com/obsidianmd/obsidian-clipper).

## Algemeen

### Er ontbreekt inhoud

Standaard probeert Web Clipper op intelligente wijze inhoud van de pagina vast te leggen. Dit lukt echter niet altijd op alle websites.

Web Clipper gebruikt [Defuddle](https://github.com/kepano/defuddle) om alleen de hoofdinhoud van de pagina vast te leggen. Dit sluit header, footer en andere elementen uit, maar soms kan het te conservatief zijn en inhoud verwijderen die je wilt behouden. Je kunt [bugs melden](https://github.com/kepano/defuddle) bij Defuddle.

Om Defuddle in Web Clipper te omzeilen, gebruik je de volgende methoden:

- Selecteer tekst, of gebruik `Cmd/Ctrl+A` om alle tekst te selecteren.
- [[Webpagina's arceren|Markeer inhoud]] om precies te kiezen wat je wilt vastleggen.
- Gebruik een [[Obsidian Web Clipper/Sjablonen|aangepast sjabloon]] voor de site.

### Er verschijnt geen inhoud in Obsidian

Als je geen inhoud ziet in Obsidian wanneer je op **Toevoegen aan Obsidian** klikt:

- Controleer op fouten in de Obsidian [[Hulp en ondersteuning#Capture console logs|ontwikkelaarsconsole]].
- Controleer of je kluisnaam in de Web Clipper-instellingen exact overeenkomt met je *kluisnaam* in Obsidian, *niet het kluispad*.
- Controleer of de mapnaam correct is opgemaakt.

## Linux

#### Obsidian opent niet

- Zorg ervoor dat het [[Obsidian URI]]-protocol [[Obsidian URI#Register Obsidian URI|is geregistreerd]].
- Als je Firefox gebruikt, moet je het mogelijk [registreren in de browserinstellingen](https://kb.mozillazine.org/Register_protocol).

#### Obsidian opent maar alleen de bestandsnaam wordt opgeslagen

Het is waarschijnlijk dat Obsidian geen toegang heeft tot je klembord. Klembordtoegang is noodzakelijk om gegevens van je browser naar Obsidian door te geven. Je configuratie kan invloed hebben op hoe apps worden gesandboxed, en klembordrechten.

Als je Wayland gebruikt, zorg er dan voor dat Obsidian de rechten heeft om het klembord te lezen wanneer de app niet gefocust is. Deze voorkeur kan zich bevinden in je tiling window manager, bijv. Hyprland of Sway.

Als je Hyprland gebruikt:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Als je Sway gebruikt:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Als je Flatpak gebruikt, overweeg dan een [officieel ondersteunde Obsidian-versie](https://obsidian.md/download) te proberen.
- Als je KDE gebruikt, ga naar **Systeeminstellingen** → **Vensterbeheer** → **Vensterregels** en sta Obsidian toe om focus te nemen, [[web-clipper-kde.png|zie schermafbeelding]].
- Als terugvaloptie kun je overschakelen naar **Legacy-modus** in **Web Clipper-instellingen** → **Algemeen**. Dit omzeilt het klembord en slaat inhoud rechtstreeks op via URI. Let op dat dit het aantal tekens dat kan worden geknipt beperkt, afhankelijk van je browser en Linux-distributie.

## iOS en iPadOS

Om de Web Clipper-extensie voor Safari in te schakelen:

1. Ga naar Safari, tik op de meest linkse knop in de URL-balk van de browser. Deze ziet eruit als een rechthoek met lijnen eronder.
2. Tik op **Beheer extensies**.
3. Schakel **Obsidian Web Clipper** in de extensielijst in.
4. Verlaat het menu.
5. Om de extensie te gebruiken, **tik op het puzzelstukpictogram** in de URL-balk.

Om Web Clipper op alle websites te laten werken:

1. Ga naar iOS **[[Instellingen]]** → **Apps** → **Safari** → **Extensies**.
2. Sta onder **Machtigingen** toe dat het op alle websites wordt uitgevoerd.

Om Obsidian altijd Web Clipper-inhoud te laten ontvangen:

1. Ga naar iOS **[[Instellingen]]** → **Apps** → **Obsidian**.
2. Stel **Plakken vanuit andere apps** in op **Toestaan**.

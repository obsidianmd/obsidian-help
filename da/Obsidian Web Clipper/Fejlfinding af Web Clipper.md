---
permalink: web-clipper/troubleshoot
---
Hvis du oplever problemer med [[Introduktion til Obsidian Web Clipper|Web Clipper]], kan du få hjælp via den [officielle Discord-kanal](https://discord.com/channels/686053708261228577/1285652864089198672). Du kan også rapportere fejl på [GitHub-repoen](https://github.com/obsidianmd/obsidian-clipper).

## Generelt

### Noget indhold mangler

Som standard forsøger Web Clipper intelligent at indfange indhold fra siden. Det lykkes dog ikke altid på alle hjemmesider.

Web Clipper bruger [Defuddle](https://github.com/kepano/defuddle) til kun at indfange hovedindholdet på siden. Dette udelukker header, footer og andre elementer, men nogle gange kan det være for konservativt og fjerne indhold, du ønsker at beholde. Du kan [rapportere fejl](https://github.com/kepano/defuddle) til Defuddle.

For at omgå Defuddle i Web Clipper kan du bruge følgende metoder:

- Markér tekst, eller brug `Cmd/Ctrl+A` for at vælge al tekst.
- [[Fremhæv websider|Fremhæv indhold]] for at vælge præcis, hvad du vil indfange.
- Brug en [[Obsidian Web Clipper/Skabeloner|brugerdefineret skabelon]] til siden.

### Intet indhold vises i Obsidian

Hvis du ikke ser noget indhold i Obsidian, når du klikker **Tilføj til Obsidian**:

- Kontrollér for fejl i Obsidians [[Hjælp og support#Capture console logs|udviklerkonsol]].
- Kontrollér, at dit boksnavn i Web Clipper-indstillingerne matcher dit *boksnavn* i Obsidian præcist — *ikke boksens sti*.
- Kontrollér, at mappenavnet er korrekt formateret.

## Linux

#### Obsidian åbner ikke

- Sørg for, at [[Obsidian URI]]-protokollen [[Obsidian URI#Register Obsidian URI|er registreret]].
- Hvis du bruger Firefox, skal du muligvis [registrere den i browserindstillingerne](https://kb.mozillazine.org/Register_protocol).

#### Obsidian åbner, men kun filnavnet gemmes

Det er sandsynligt, at Obsidian ikke kan få adgang til din udklipsholder. Adgang til udklipsholderen er nødvendig for at overføre data fra din browser til Obsidian. Din konfiguration kan påvirke, hvordan applikationer er sandboxede, samt tilladelser til udklipsholderen.

Hvis du bruger Wayland, skal du sørge for, at Obsidian har tilladelse til at læse udklipsholderen, når applikationen ikke er i fokus. Denne indstilling kan findes i din tiling window manager, f.eks. Hyprland eller Sway.

Hvis du bruger Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Hvis du bruger Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Hvis du bruger Flatpak, kan du prøve en [officielt understøttet Obsidian-version](https://obsidian.md/download).
- Hvis du bruger KDE, gå til **Systemindstillinger** → **Vinduesadministration** → **Vinduesregler** og tillad Obsidian at tage fokus, [[web-clipper-kde.png|se skærmbillede]].
- Som en nødløsning kan du prøve at skifte til **Legacy-tilstand** i **Web Clipper-indstillinger** → **Generelt**. Dette vil omgå udklipsholderen og gemme indhold direkte via URI. Bemærk, at dette vil begrænse antallet af tegn, der kan klippes, afhængigt af din browser og Linux-distribution.

## iOS og iPadOS

For at aktivere Web Clipper-udvidelsen til Safari:

1. Gå til Safari, tryk på den yderste venstre knap i browserens URL-linje — den ligner et rektangel med linjer under.
2. Tryk på **Administrer udvidelser**.
3. Aktiver **Obsidian Web Clipper** i udvidelseslisten.
4. Luk menuen.
5. For at bruge udvidelsen, **tryk på puslespilsikonet** i URL-linjen.

For at tillade Web Clipper at køre på alle hjemmesider:

1. Gå til iOS **[[Indstillinger]]** → **Apps** → **Safari** → **Udvidelser**.
2. Under **Tilladelser** tillad den at køre på alle hjemmesider.

For altid at tillade Obsidian at modtage Web Clipper-indhold:

1. Gå til iOS **[[Indstillinger]]** → **Apps** → **Obsidian**.
2. Sæt **Indsæt fra andre apps** til **Tillad**.

---
permalink: web-clipper/troubleshoot
---
Hvis du opplever problemer med [[Introduksjon til Obsidian Web Clipper|Web Clipper]] kan du få hjelp via den [offisielle Discord-kanalen](https://discord.com/channels/686053708261228577/1285652864089198672). Du kan også rapportere feil på [GitHub-repoet](https://github.com/obsidianmd/obsidian-clipper).

## Generelt

### Noe innhold mangler

Som standard prøver Web Clipper å intelligent fange innhold fra siden. Det kan imidlertid ikke alltid lykkes med dette på alle nettsteder.

Web Clipper bruker [Defuddle](https://github.com/kepano/defuddle) til å fange kun hovedinnholdet på siden. Dette ekskluderer topptekst, bunntekst og andre elementer, men noen ganger kan det være for konservativt og fjerne innhold du ønsker å beholde. Du kan [rapportere feil](https://github.com/kepano/defuddle) til Defuddle.

For å omgå Defuddle i Web Clipper kan du bruke følgende metoder:

- Velg tekst, eller bruk `Cmd/Ctrl+A` for å velge all tekst.
- [[Uthev nettsider|Uthev innhold]] for å velge nøyaktig hva du vil fange.
- Bruk en [[Obsidian Web Clipper/Maler|egendefinert mal]] for nettstedet.

### Ingen innhold vises i Obsidian

Hvis du ikke ser noe innhold i Obsidian når du klikker **Legg til i Obsidian**:

- Se etter feil i Obsidians [[Hjelp og støtte#Capture console logs|utviklerkonsoll]].
- Sjekk at hvelvnavnet ditt i Web Clipper-innstillingene stemmer nøyaktig med *hvelvnavnet* ditt i Obsidian, *ikke hvelvbanen*.
- Sjekk at mappenavnet er riktig formatert.

## Linux

#### Obsidian åpnes ikke

- Sørg for at [[Obsidian URI]]-protokollen [[Obsidian URI#Registrer Obsidian URI|er registrert]].
- Hvis du bruker Firefox kan det hende du må [registrere den i nettleserinnstillingene](https://kb.mozillazine.org/Register_protocol).

#### Obsidian åpnes men bare filnavnet lagres

Det er sannsynlig at Obsidian ikke har tilgang til utklippstavlen din. Tilgang til utklippstavlen er nødvendig for å overføre data fra nettleseren til Obsidian. Konfigurasjonen din kan påvirke hvordan apper er sandkasset, og utklippstavletillatelser.

Hvis du bruker Wayland, sørg for at Obsidian har tillatelse til å lese utklippstavlen når appen ikke er i fokus. Denne innstillingen kan være i vindusbehandleren din, f.eks. Hyprland eller Sway.

Hvis du bruker Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Hvis du bruker Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Hvis du bruker Flatpak, vurder å prøve en [offisielt støttet Obsidian-versjon](https://obsidian.md/download).
- Hvis du bruker KDE, gå til **Systeminnstillinger** → **Vindusbehandling** → **Vindusregler** og tillat Obsidian å ta fokus, [[web-clipper-kde.png|se skjermbilde]].
- Som en reserveløsning, prøv å bytte til **Eldre modus** i **Web Clipper-innstillinger** → **Generelt**. Dette vil omgå utklippstavlen og lagre innhold direkte via URI. Merk at dette vil begrense antall tegn som kan klippes avhengig av nettleseren og Linux-distribusjonen din.

## iOS og iPadOS

For å aktivere Web Clipper-utvidelsen for Safari:

1. Gå til Safari, trykk på knappen lengst til venstre i nettleserens URL-felt, den ser ut som et rektangel med linjer under.
2. Trykk på **Administrer utvidelser**.
3. Aktiver **Obsidian Web Clipper** i utvidelseslisten.
4. Lukk menyen.
5. For å bruke utvidelsen, **trykk på puslespillikonet** i URL-feltet.

For å tillate Web Clipper å kjøre på alle nettsteder:

1. Gå til iOS **[[Innstillinger]]** → **Apper** → **Safari** → **Utvidelser**.
2. Under **Tillatelser** tillat den å kjøre på alle nettsteder.

For å tillate Obsidian å alltid motta Web Clipper-innhold:

1. Gå til iOS **[[Innstillinger]]** → **Apper** → **Obsidian**.
2. Sett **Lim inn fra andre apper** til **Tillat**.

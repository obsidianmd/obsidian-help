---
permalink: web-clipper/troubleshoot
---
Om du stöter på problem med [[Introduktion till Obsidian Web Clipper|Web Clipper]] kan du få hjälp via den [officiella Discord-kanalen](https://discord.com/channels/686053708261228577/1285652864089198672). Du kan också rapportera buggar på [GitHub-repot](https://github.com/obsidianmd/obsidian-clipper).

## Allmänt

### Visst innehåll saknas

Som standard försöker Web Clipper intelligent fånga innehåll från sidan. Det kanske dock inte lyckas på alla webbplatser.

Web Clipper använder [Defuddle](https://github.com/kepano/defuddle) för att enbart fånga sidans huvudinnehåll. Detta exkluderar sidhuvud, sidfot och andra element, men ibland kan det vara alltför konservativt och ta bort innehåll som du vill behålla. Du kan [rapportera buggar](https://github.com/kepano/defuddle) till Defuddle.

För att kringgå Defuddle i Web Clipper, använd följande metoder:

- Markera text, eller använd `Cmd/Ctrl+A` för att markera all text.
- [[Highlighter|Markera innehåll]] för att välja exakt vad du vill fånga.
- Använd en [[Obsidian Web Clipper/Mallar|anpassad mall]] för webbplatsen.

### Inget innehåll visas i Obsidian

Om du inte ser något innehåll i Obsidian när du klickar på **Lägg till i Obsidian**:

- Kontrollera om det finns fel i Obsidians [[Hjälp och support#Fånga konsolloggar|utvecklarkonsol]].
- Kontrollera att ditt valvnamn i Web Clipper-inställningarna exakt matchar ditt *valvnamn* i Obsidian, *inte valvets sökväg*.
- Kontrollera att mappnamnet är korrekt formaterat.

## Linux

#### Obsidian öppnas inte

- Se till att [[Obsidian URI]]-protokollet [[Obsidian URI#Register Obsidian URI|är registrerat]].
- Om du använder Firefox kan du behöva [registrera det i webbläsarinställningarna](https://kb.mozillazine.org/Register_protocol).

#### Obsidian öppnas men bara filnamnet sparas

Det är troligt att Obsidian inte kan komma åt ditt urklipp. Urklippsåtkomst krävs för att skicka data från din webbläsare till Obsidian. Din konfiguration kan påverka hur appar sandlådas och urklippsbehörigheter.

Om du använder Wayland, se till att Obsidian har behörighet att läsa urklippet när appen inte är i fokus. Denna inställning kan finnas i din fönsterhanterare, t.ex. Hyprland eller Sway.

Om du använder Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Om du använder Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Om du använder Flatpak, prova en [officiellt stödd Obsidian-version](https://obsidian.md/download).
- Om du använder KDE, gå till **Systeminställningar** → **Fönsterhantering** → **Fönsterregler** och tillåt Obsidian att ta fokus, [[web-clipper-kde.png|se skärmbild]].
- Som en reservlösning, prova att byta till **Äldre läge** i **Web Clipper-inställningar** → **Allmänt**. Detta kringgår urklippet och sparar innehåll direkt via URI. Observera att detta begränsar antalet tecken som kan klippas beroende på din webbläsare och Linux-distribution.

## iOS och iPadOS

För att aktivera Web Clipper-tillägget för Safari:

1. Gå till Safari, tryck på den vänstra knappen i webbläsarens URL-fält, den ser ut som en rektangel med linjer under.
2. Tryck på **Hantera tillägg**.
3. Aktivera **Obsidian Web Clipper** i tilläggslistan.
4. Stäng menyn.
5. För att använda tillägget, **tryck på pusselbiticonen** i URL-fältet.

För att tillåta Web Clipper att köras på alla webbplatser:

1. Gå till iOS **[[Inställningar]]** → **Appar** → **Safari** → **Tillägg**.
2. Under **Behörigheter**, tillåt det att köras på alla webbplatser.

För att tillåta Obsidian att alltid ta emot Web Clipper-innehåll:

1. Gå till iOS **[[Inställningar]]** → **Appar** → **Obsidian**.
2. Ställ in **Klistra in från andra appar** till **Tillåt**.

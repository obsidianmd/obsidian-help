---
permalink: web-clipper/troubleshoot
---
Ak narazíte na problémy s [[Úvod do Obsidian Web Clipper|Web Clipper]], môžete získať pomoc cez [oficiálny Discord kanál](https://discord.com/channels/686053708261228577/1285652864089198672). Chyby môžete tiež nahlásiť na [GitHub repozitári](https://github.com/obsidianmd/obsidian-clipper).

## Všeobecné

### Niektorý obsah chýba

V predvolenom nastavení sa Web Clipper pokúša inteligentne zachytiť obsah zo stránky. Avšak nemusí byť úspešný na všetkých webových stránkach.

Web Clipper používa [Defuddle](https://github.com/kepano/defuddle) na zachytenie len hlavného obsahu stránky. To vylučuje hlavičku, pätu a ďalšie prvky, ale niekedy môže byť príliš konzervatívny a odstrániť obsah, ktorý chcete zachovať. Chyby môžete [nahlásiť](https://github.com/kepano/defuddle) priamo do Defuddle.

Na obídenie Defuddle vo Web Clipper použite nasledujúce metódy:

- Vyberte text, alebo použite `Cmd/Ctrl+A` na výber celého textu.
- [[Zvýrazňovanie webových stránok|Zvýraznite obsah]], aby ste presne vybrali, čo chcete zachytiť.
- Použite [[Obsidian Web Clipper/Šablóny|vlastnú šablónu]] pre danú stránku.

### V Obsidian sa nezobrazuje žiadny obsah

Ak nevidíte žiadny obsah v Obsidian po kliknutí na **Add to Obsidian**:

- Skontrolujte chyby v [[Nápoveda a podpora#Zachytenie konzolových záznamov|vývojárskej konzole]] Obsidian.
- Skontrolujte, či názov trezoru v nastaveniach Web Clipper presne zodpovedá *názvu trezoru* v Obsidian, *nie ceste k trezoru*.
- Skontrolujte, či je názov priečinka správne naformátovaný.

## Linux

#### Obsidian sa neotvára

- Uistite sa, že protokol [[Obsidian URI]] [[Obsidian URI#Registrácia Obsidian URI|je zaregistrovaný]].
- Ak používate Firefox, možno budete musieť [zaregistrovať ho v nastaveniach prehliadača](https://kb.mozillazine.org/Register_protocol).

#### Obsidian sa otvorí, ale uloží sa len názov súboru

Je pravdepodobné, že Obsidian nemá prístup k vašej schránke. Prístup k schránke je nevyhnutný na prenos dát z vášho prehliadača do Obsidian. Vaša konfigurácia môže ovplyvniť, ako sú aplikácie izolované v sandboxe, a oprávnenia schránky.

Ak používate Wayland, uistite sa, že Obsidian má oprávnenia na čítanie schránky, keď aplikácia nie je v popredí. Táto voľba môže byť vo vašom správcovi dlaždicových okien, napr. Hyprland alebo Sway.

Ak používate Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Ak používate Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Ak používate Flatpak, skúste [oficiálne podporovanú verziu Obsidian](https://obsidian.md/download).
- Ak používate KDE, prejdite do **Nastavenia systému** → **Správa okien** → **Pravidlá okien** a povoľte Obsidian prevziať fokus, [[web-clipper-kde.png|pozri snímku obrazovky]].
- Ako záložné riešenie skúste prepnúť na **Starší režim** v **Nastavenia Web Clipper** → **Všeobecné**. Toto obíde schránku a uloží obsah priamo cez URI. Upozorňujeme, že to obmedzí počet znakov, ktoré je možné zachytiť, v závislosti od vášho prehliadača a distribúcie Linuxu.

## iOS a iPadOS

Ak chcete povoliť rozšírenie Web Clipper pre Safari:

1. Prejdite do Safari, ťuknite na tlačidlo úplne vľavo v paneli URL prehliadača, vyzerá ako obdĺžnik s čiarami pod ním.
2. Ťuknite na **Správa rozšírení**.
3. Zapnite **Obsidian Web Clipper** v zozname rozšírení.
4. Zatvorte ponuku.
5. Na použitie rozšírenia **ťuknite na ikonu puzzle** v paneli URL.

Ak chcete povoliť Web Clipper bežať na všetkých webových stránkach:

1. Prejdite do iOS **[[Nastavenia]]** → **Aplikácie** → **Safari** → **Rozšírenia**.
2. V časti **Oprávnenia** povoľte beh na všetkých webových stránkach.

Ak chcete povoliť Obsidian vždy prijímať obsah z Web Clipper:

1. Prejdite do iOS **[[Nastavenia]]** → **Aplikácie** → **Obsidian**.
2. Nastavte **Vkladanie z iných aplikácií** na **Povoliť**.

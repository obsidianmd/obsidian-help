---
permalink: web-clipper/troubleshoot
---
Pokud narazíte na problémy s [[Úvod do Obsidian Web Clipper|Web Clipper]], můžete získat pomoc prostřednictvím [oficiálního Discord kanálu](https://discord.com/channels/686053708261228577/1285652864089198672). Chyby můžete také nahlásit na [GitHub repozitáři](https://github.com/obsidianmd/obsidian-clipper).

## Obecné

### Některý obsah chybí

Ve výchozím nastavení se Obsidian Web Clipper snaží inteligentně zachytit obsah ze stránky. Nemusí však být úspěšný na všech webových stránkách.

Obsidian Web Clipper používá [Defuddle](https://github.com/kepano/defuddle) k zachycení pouze hlavního obsahu stránky. To vylučuje záhlaví, zápatí a další prvky, ale někdy může být příliš konzervativní a odstranit obsah, který chcete zachovat. Chyby můžete [nahlásit](https://github.com/kepano/defuddle) přímo Defuddle.

Chcete-li v Obsidian Web Clipper obejít Defuddle, použijte následující metody:

- Vyberte text, nebo použijte `Cmd/Ctrl+A` pro výběr veškerého textu.
- [[Zvýraznění webových stránek|Zvýrazněte obsah]] a vyberte přesně to, co chcete zachytit.
- Použijte [[Obsidian Web Clipper/Šablony|vlastní šablonu]] pro danou stránku.

### V Obsidianu se nezobrazuje žádný obsah

Pokud po kliknutí na **Přidat do Obsidianu** nevidíte v Obsidianu žádný obsah:

- Zkontrolujte chyby v [[Nápověda a podpora#Zachycení konzolových logů|vývojářské konzoli]] Obsidianu.
- Zkontrolujte, zda název trezoru v nastavení Obsidian Web Clipper přesně odpovídá *názvu trezoru* v Obsidianu, *nikoli cestě k trezoru*.
- Zkontrolujte, zda je název složky správně naformátován.

## Linux

#### Obsidian se neotevře

- Ujistěte se, že protokol [[Obsidian URI]] je [[Obsidian URI#Registrace Obsidian URI|zaregistrován]].
- Pokud používáte Firefox, možná budete muset [zaregistrovat protokol v nastavení prohlížeče](https://kb.mozillazine.org/Register_protocol).

#### Obsidian se otevře, ale uloží se pouze název souboru

Je pravděpodobné, že Obsidian nemá přístup ke schránce. Přístup ke schránce je nezbytný pro předávání dat z prohlížeče do Obsidianu. Vaše konfigurace může ovlivnit, jak jsou aplikace sandboxovány, a oprávnění ke schránce.

Pokud používáte Wayland, ujistěte se, že Obsidian má oprávnění číst schránku, i když aplikace není v popředí. Tato preference může být ve vašem správci oken s dlaždicovým uspořádáním, např. Hyprland nebo Sway.

Pokud používáte Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Pokud používáte Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Pokud používáte Flatpak, zkuste [oficiálně podporovanou verzi Obsidianu](https://obsidian.md/download).
- Pokud používáte KDE, přejděte do **Nastavení systému** → **Správa oken** → **Pravidla oken** a povolte Obsidianu převzít zaměření, [[web-clipper-kde.png|viz snímek obrazovky]].
- Jako záložní řešení zkuste přepnout na **Starší režim** v **Nastavení Web Clipper** → **Obecné**. Tím se obejde schránka a obsah se uloží přímo přes URI. Mějte na paměti, že to omezí počet znaků, které lze zachytit, v závislosti na vašem prohlížeči a distribuci Linuxu.

## iOS a iPadOS

Povolení rozšíření Obsidian Web Clipper pro Safari:

1. Přejděte do Safari, klepněte na nejlevější tlačítko v adresním řádku prohlížeče, vypadá jako obdélník s čárami pod ním.
2. Klepněte na **Spravovat rozšíření**.
3. Zapněte **Obsidian Web Clipper** v seznamu rozšíření.
4. Zavřete nabídku.
5. Pro použití rozšíření **klepněte na ikonu dílku puzzle** v adresním řádku.

Povolení spuštění Obsidian Web Clipper na všech webových stránkách:

1. Přejděte do iOS **[[Nastavení]]** → **Aplikace** → **Safari** → **Rozšíření**.
2. V části **Oprávnění** povolte spuštění na všech webových stránkách.

Povolení Obsidianu vždy přijímat obsah z Obsidian Web Clipper:

1. Přejděte do iOS **[[Nastavení]]** → **Aplikace** → **Obsidian**.
2. Nastavte **Vložit z jiných aplikací** na **Povolit**.

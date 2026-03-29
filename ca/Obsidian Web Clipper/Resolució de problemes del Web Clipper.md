---
permalink: web-clipper/troubleshoot
---
Si trobes problemes amb el [[Introducció a Obsidian Web Clipper|Web Clipper]] pots obtenir ajuda al [canal oficial de Discord](https://discord.com/channels/686053708261228577/1285652864089198672). També pots reportar errors al [repositori de GitHub](https://github.com/obsidianmd/obsidian-clipper).

## General

### Falta contingut

Per defecte, el Web Clipper intenta capturar el contingut de la pàgina de manera intel·ligent. No obstant, pot ser que no ho aconsegueixi en tots els llocs web.

El Web Clipper utilitza [Defuddle](https://github.com/kepano/defuddle) per capturar només el contingut principal de la pàgina. Això exclou la capçalera, el peu de pàgina i altres elements, però de vegades pot ser massa conservador i eliminar contingut que vols conservar. Pots [reportar errors](https://github.com/kepano/defuddle) a Defuddle.

Per evitar Defuddle al Web Clipper utilitza els mètodes següents:

- Selecciona text, o utilitza `Cmd/Ctrl+A` per seleccionar tot el text.
- [[Ressaltar pàgines web|Ressalta contingut]] per triar exactament el que vols capturar.
- Utilitza una [[Obsidian Web Clipper/Plantilles|plantilla personalitzada]] per al lloc.

### No apareix contingut a Obsidian

Si no veus cap contingut a Obsidian quan fas clic a **Agregar a Obsidian**:

- Comprova si hi ha errors a la [[Ajuda i suport#Capturar registres de consola|consola de desenvolupadors]] d'Obsidian.
- Comprova que el nom de la cambra forta a la configuració del Web Clipper coincideix exactament amb el *nom de la cambra forta* a Obsidian, *no amb la ruta de la cambra forta*.
- Comprova que el nom de la carpeta té el format correcte.

## Linux

#### Obsidian no s'obre

- Assegura't que el protocol [[Obsidian URI]] [[Obsidian URI#Registrar l'URI d'Obsidian|estigui registrat]].
- Si utilitzes Firefox pot ser que necessitis [registrar-lo a la configuració del navegador](https://kb.mozillazine.org/Register_protocol).

#### Obsidian s'obre però només es desa el nom del fitxer

És probable que Obsidian no pugui accedir al teu porta-retalls. L'accés al porta-retalls és necessari per passar dades del navegador a Obsidian. La teva configuració pot afectar com es limiten les aplicacions (sandbox) i els permisos del porta-retalls.

Si utilitzes Wayland, assegura't que Obsidian tingui permisos per llegir el porta-retalls quan l'aplicació no està en primer pla. Aquesta preferència pot estar al teu gestor de finestres de mosaic, p. ex. Hyprland o Sway.

Si utilitzes Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Si utilitzes Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Si utilitzes Flatpak considera provar una [versió d'Obsidian oficialment suportada](https://obsidian.md/download).
- Si utilitzes KDE ves a **Configuració del sistema** → **Gestió de finestres** → **Regles de finestres** i permet que Obsidian prengui el focus, [[web-clipper-kde.png|veure captura de pantalla]].
- Com a alternativa, prova de canviar a **Mode heretat** a **Configuració del Web Clipper** → **General**. Això evitarà el porta-retalls i desarà el contingut directament via URI. Tingues en compte que això limitarà el nombre de caràcters que es poden retallar depenent del teu navegador i distribució de Linux.

## iOS i iPadOS

Per activar l'extensió del Web Clipper per a Safari:

1. Ves a Safari, toca el botó més a l'esquerra de la barra d'URL del navegador, sembla un rectangle amb línies a sota.
2. Toca **Gestionar extensions**.
3. Activa **Obsidian Web Clipper** a la llista d'extensions.
4. Surt del menú.
5. Per utilitzar l'extensió **toca la icona de peça de puzle** a la barra d'URL.

Per permetre que el Web Clipper s'executi en tots els llocs web:

1. Ves a **[[Configuració]]** d'iOS → **Apps** → **Safari** → **Extensions**.
2. A **Permisos** permet que s'executi en tots els llocs web.

Per permetre que Obsidian sempre rebi contingut del Web Clipper:

1. Ves a **[[Configuració]]** d'iOS → **Apps** → **Obsidian**.
2. Estableix **Enganxar des d'altres apps** a **Permetre**.

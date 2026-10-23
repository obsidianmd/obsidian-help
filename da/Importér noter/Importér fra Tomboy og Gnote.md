---
permalink: import/tomboy
cssclasses:
  - soft-embed
---
Obsidian lader dig migrere noter fra Tomboy og Gnote ved hjælp af det officielle [[Importér|Importér-plugin]]. Importér læser applikationernes `.note`-filer direkte og konverterer deres XML-indhold til Markdown.

## Find dine notefiler

Tomboy og Gnote gemmer normalt noter i disse mapper:

- **macOS:** `~/Library/Application Support/Tomboy`
- **Windows:** `%APPDATA%\Tomboy`
- **Linux:** `~/.local/share/tomboy` eller `~/.local/share/gnote`

Den nøjagtige placering kan variere, hvis du har flyttet datamappen eller bruger en anden version af applikationen.

## Importér dine Tomboy- eller Gnote-noter

1. Åbn **[[Indstillinger]] → Fællesskabsplugins** og [installér Importér](obsidian://show-plugin?id=obsidian-importer).
2. Aktivér Importér-pluginet.
3. Åbn **Importér** ved hjælp af [[Fastgjorte kommandoer|kommandopaletten]] eller værktøjslinjens ikon.
4. Under **Filformat**, vælg **Tomboy/Gnote (.note)**.
5. Vælg individuelle `.note`-filer eller mappen, der indeholder dem.
6. Gennemgå importindstillingerne, den genererede skabelon og forhåndsvisningseksempler.
7. Vælg **Importér** og vent på, at importen afsluttes.

## Skabeloner

Brug [[Importér skabeloner|Importér skabeloner]] til fuldt ud at konfigurere, hvordan dine data importeres.

![[Importér skabeloner#Variabler]]

---
permalink: sync/switch
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Apreneu a fer la transició de la vostra solució de sincronització actual a Obsidian Sync.
---
Aprèn com fer la transició des de la teva solució de sincronització actual a Obsidian Sync.

> [!warning] Evita utilitzar múltiples solucions per sincronitzar els mateixos fitxers
> [[Preguntes freqüents#Puc utilitzar una sincronització de tercers amb Obsidian Sync?|No recomanem]] utilitzar Obsidian Sync juntament amb serveis d'emmagatzematge al núvol (p. ex. iCloud, Dropbox, OneDrive, Google Drive), ja que això pot causar conflictes. No obstant això, els serveis d'emmagatzematge al núvol poden tenir un paper en la teva estratègia de [[Fes còpia de seguretat dels fitxers d'Obsidian|còpies de seguretat]].

## Mou la teva cambra forta fora del servei de sincronització de tercers o emmagatzematge al núvol

Si la teva cambra forta està emmagatzemada en alguna de les ubicacions següents, és probable que estigui sent sincronitzada per un servei de tercers:

- **Windows**: `C:\Users\Username\Desktop` o `C:\Users\Username\Documents`
- **macOS**: `/users/username/Desktop` o `/users/username/Documents`
- **iOS**: La carpeta **iCloud** dins de l'aplicació Fitxers
- **Altres**: Qualsevol carpeta dins d'un servei de sincronització, com ara `Drive/my-vault`, `Dropbox/my-vault`, `pSync/my-vault`, etc.

Tot i que Android i Linux tendeixen a tenir menys problemes amb això, val la pena comprovar la ubicació de la teva cambra forta en aquests dispositius.

> [!tip] Si la teva cambra forta local actual està connectada a una cambra remota, Obsidian intentarà detectar si la cambra forta es troba en un servei de sincronització. Si és així, veuràs un missatge a la part superior de la configuració d'Obsidian Sync.

Per evitar conflictes amb els serveis de sincronització, recomanem emmagatzemar les teves cambres fortes d'Obsidian en les ubicacions següents:

- **Windows**: Ubicacions recomanades per ordre:
    1. `D:\` o qualsevol altra unitat que no sigui C ni una unitat de xarxa del teu dispositiu
    2. `C:\Vaults` (si tens permisos per utilitzar la unitat C:\)
    3. `C:\Users\Username\Vaults` (si has de mantenir la cambra forta dins de C:\Users\Username, assegura't que OneDrive no estigui configurat per eliminar fitxers. OneDrive és generalment menys agressiu fora de les carpetes `Desktop` i `Documents`.)
- **macOS**: `/users/username/vaults`
- **Linux**: No hi ha una recomanació específica a causa de la varietat de sistemes de fitxers. Només assegura't que Obsidian tingui accés complet de lectura/escriptura i que cap servei de sincronització gestioni la carpeta.
- **iOS/iPadOS**: Emmagatzema la cambra forta a **Al meu iPhone** o **Al dispositiu**.
- **Android**: Utilitza la carpeta `Documents/` del teu dispositiu.

## Mou la teva cambra forta utilitzant Obsidian a l'escriptori

![[Gestiona les cambres fortes#Mou la cambra forta a una carpeta diferent]]

## Mou la teva cambra forta al mòbil

En dispositius mòbils, Obsidian funciona en un entorn aïllat, cosa que significa que no pots moure cambres fortes dins de l'aplicació com ho fas a l'escriptori.

### Android

Els sistemes de fitxers d'Android varien molt segons el dispositiu, però en general, segueix els mateixos passos que seguiries per moure la teva cambra forta manualment, assegurant-te que s'elimini de qualsevol servei de sincronització del teu dispositiu.

### iOS i iPadOS

Per moure una cambra forta existent d'iCloud al teu dispositiu, segueix aquests passos:

> [!note] Si ja tens les dades en un altre dispositiu i has configurat Obsidian Sync, es recomana [[Configurar Obsidian Sync#Sincronitzar una cambra remota en un altre dispositiu|configurar una nova cambra forta local des de Sync]].

- Fes una [[Fes còpia de seguretat dels fitxers d'Obsidian|còpia de seguretat]] de la teva cambra forta.
- Crea una nova cambra forta al teu dispositiu, assegurant-te que l'opció **Desar a iCloud Drive** estigui desactivada.
- Força el tancament de l'aplicació Obsidian a tots els dispositius per pausar Sync.
- Obre l'aplicació **Fitxers** al teu dispositiu iOS/iPadOS.
- Mantén premut la carpeta de la cambra forta a **iCloud Drive → Obsidian** i selecciona **Moure**.
- Mou la cambra forta a **Al meu iPhone/Dispositiu → Obsidian** i confirma que és visible.
- Toca **Copiar**.
- Torna a **iCloud Drive → Obsidian** i elimina l'antiga carpeta de la cambra forta.

Un cop reobris Obsidian, la cambra forta hauria de mostrar una icona de cambra forta en lloc d'una icona de núvol, confirmant que ja no es troba a iCloud Drive. Obsidian Sync tampoc mostrarà el missatge d'advertència dins de la seva configuració.

## Pròxims passos

- Vols començar amb Obsidian Sync? [[Configurar Obsidian Sync]]
- Encara necessites ajuda? Consulta [[Resolució de problemes d'Obsidian Sync]]

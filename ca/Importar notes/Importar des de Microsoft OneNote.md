---
permalink: import/onenote
---
Obsidian et permet migrar fàcilment les teves notes des de Microsoft OneNote utilitzant el [[Importador|connector Importador]]. Això convertirà les teves dades de OneNote a fitxers Markdown durables, que pots utilitzar amb Obsidian i moltes altres aplicacions.

> [!Warning]
> Només es poden importar quaderns del teu compte personal. Les notes compartides o els comptes de treball i escolars no estan suportats.

## Importa les teves dades de OneNote a Obsidian

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]]**.
2. Ves a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. Sota **Format de fitxer** tria **Microsoft OneNote**.
6. Fes clic a **Inicia la sessió** per obrir el teu navegador web a la pàgina d'inici de sessió de Microsoft. Introdueix les credencials del teu compte de Microsoft que conté els teus quaderns de OneNote. Més informació sobre el procés d'inici de sessió de Microsoft està disponible a continuació.
7. Fes clic a **Accepta** per concedir permís a Obsidian per veure els teus quaderns de OneNote.
8. Fes clic a **Obre l'enllaç** per permetre que el teu navegador et redirigeixi a l'aplicació Obsidian.
9. A l'aplicació Obsidian, el diàleg de l'Importador mostrarà ara que has iniciat sessió i llistarà els teus quaderns i seccions de OneNote. Marca les seccions que vulguis importar.

![[OneNote-Importer-Select-Sections.png]]

10. Fes clic a **Importar** i espera fins que la importació s'hagi completat.
11. Ja està!

## Resolució de problemes

### No apareixen seccions ni quaderns

Assegura't que els quaderns que intentes importar estiguin sincronitzats a OneDrive i visibles a OneNote Web. Han de ser teus (els quaderns compartits escrits per altres no estan suportats).

Si falta una secció específica, assegura't que no sigui una secció bloquejada — aquestes són invisibles sense treure primer el bloqueig.

### Les notes importades estan buides o els falta contingut

Aquest problema pot ocórrer en quaderns que rarament utilitzes. Per resoldre el problema segueix aquests passos:

1. Obre [OneNote Web](https://onenote.com/notebooks) al teu navegador.
2. Fes **clic dret** als quaderns als quals els falta contingut.
3. Selecciona **Exporta el quadern** del menú.
4. **Descomprimeix** el fitxer que acabes de baixar en una carpeta.
5. Puja els teus quaderns de OneNote [aquí](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Obre l'**Importador d'Obsidian** i prova d'importar de nou.

Si has seguit aquests consells i el teu problema continua sense resoldre's, és possible que hi hagi un problema temporal amb els servidors de Microsoft. Si és el cas, espera uns minuts i torna-ho a provar. Si el problema persisteix, si us plau obre una incidència al [repositori GitHub de l'Importador d'Obsidian](https://github.com/obsidianmd/obsidian-importer/issues).

## Privacitat

El connector Importador d'Obsidian utilitza [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) per autenticar-se amb el teu compte de Microsoft i importar els teus quaderns de OneNote. Això concedeix un token d'accés a curt termini al teu compte que s'utilitza només des del teu ordinador i mai s'emmagatzema. Després que la importació es completi, opcionalment pots revocar el token des de la [pàgina d'aplicacions i serveis de Microsoft](https://account.live.com/consent/Manage).

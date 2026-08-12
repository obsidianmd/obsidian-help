---
permalink: import/onenote
---
Obsidian et permet migrar fàcilment les teves notes des de Microsoft OneNote utilitzant el [[Importador|connector Importador]]. Això convertirà les teves dades de OneNote a fitxers Markdown durables, que pots utilitzar amb Obsidian i moltes altres aplicacions.

Obsidian ofereix dues maneres d'importar les teves dades de OneNote:

1. **Compte de Microsoft** inicia sessió al teu compte de Microsoft i importa els quaderns sincronitzats a OneDrive. Requereix connexió a internet.
2. **Importació de fitxers** utilitza els fitxers d'exportació de OneNote (`.onepkg` i `.one`). No requereix compte ni connexió a internet, i funciona per a quaderns que mai s'han sincronitzat.

## Importa des del teu compte de Microsoft

> [!Warning]
> Només es poden importar quaderns del teu compte. Els quaderns que altres persones han compartit amb tu no estan suportats, i un compte de treball o escolar pot necessitar que la teva organització aprovi l'accés.

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
10. Fes clic a **Importar** i espera fins que la importació s'hagi completat.
11. Ja està!

Si els teus quaderns pertanyen a un compte de treball o escolar, OneNote pot refusar l'accés del connector després d'iniciar sessió. Quan això passi, apareixerà un botó **Utilitza l'accés de treball o escolar** al costat de **Tanca la sessió**. Utilitza'l per iniciar sessió de nou amb el permís més ampli que necessiten aquests comptes. La teva organització pot haver d'aprovar aquest permís abans que funcioni.

### Resolució de problemes

#### No apareixen seccions ni quaderns

Assegura't que els quaderns que intentes importar estiguin sincronitzats a OneDrive i visibles a OneNote Web. Han de ser teus (els quaderns compartits escrits per altres no estan suportats).

Si falta una secció específica, assegura't que no sigui una secció bloquejada, ja que aquestes són invisibles sense treure primer el bloqueig.

Si es tracta d'un quadern de treball o escolar, consulta la nota sobre **Utilitza l'accés de treball o escolar** més amunt.

#### Les notes importades estan buides o els falta contingut

Aquest problema pot ocórrer en quaderns que rarament utilitzes. Per resoldre el problema segueix aquests passos:

1. Obre [OneNote Web](https://onenote.com/notebooks) al teu navegador.
2. Fes **clic dret** als quaderns als quals els falta contingut.
3. Selecciona **Exporta el quadern** del menú.
4. **Descomprimeix** el fitxer que acabes de baixar en una carpeta.
5. Puja els teus quaderns de OneNote [aquí](https://www.onenote.com/notebooks/exportimport?toImport=true).
6. Obre l'**Importador d'Obsidian** i prova d'importar de nou.

Si has seguit aquests consells i el teu problema continua sense resoldre's, és possible que hi hagi un problema temporal amb els servidors de Microsoft. Si és el cas, espera uns minuts i torna-ho a provar. Si el problema persisteix, si us plau obre una incidència al [repositori GitHub de l'Importador d'Obsidian](https://github.com/obsidianmd/obsidian-importer/issues).

## Importa fitxers de OneNote (.one, .onepkg)

La importació de fitxers és una manera alternativa d'importar les teves dades de OneNote. Llegeix els fitxers d'exportació que OneNote genera, de manera que no necessita cap compte de Microsoft ni connexió a internet. Utilitza-la per a quaderns emmagatzemats només al teu ordinador, quaderns als quals el teu compte no pot accedir, o quan prefereixes no iniciar sessió.

### Exporta els teus quaderns des de OneNote

Recomanem exportar cada quadern com a **Paquet de OneNote** (`.onepkg`). Un paquet conté totes les seccions del quadern, de manera que pots exportar i importar un quadern en un sol pas, i l'Importador llistarà les seves seccions perquè puguis triar.

L'exportació només està disponible a **OneNote per a Windows**, l'aplicació d'escriptori que ve amb Microsoft 365. L'aplicació OneNote per a Mac i l'antiga aplicació OneNote per a Windows 10 no poden exportar en aquests formats.

1. Obre el quadern que vols exportar a OneNote per a Windows.
2. Ves a **Fitxer → Exporta**.
3. Sota **Exporta l'actual** tria **Quadern**.
4. Sota **Selecciona el format** tria **Paquet de OneNote (\*.onepkg)**.
5. Fes clic a **Exporta** i tria on desar el fitxer.
6. Repeteix per a cada quadern que vulguis importar.

Per exportar una sola secció, tria **Secció** al pas 3 i **Secció de OneNote 2010-2016 (\*.one)** al pas 4.

També pots importar els fitxers de secció que OneNote ja manté al disc, sense exportar res:

- Els quaderns emmagatzemats al teu ordinador es troben a `Documents\OneNote Notebooks`, un fitxer `.one` per secció.
- Les còpies de seguretat dels quaderns sincronitzats es troben a `%LOCALAPPDATA%\Microsoft\OneNote\16.0\Backup`.

### Importa els teus fitxers de OneNote

Necessitaràs el connector oficial d'Obsidian [[Importador]], que pots [instal·lar aquí](obsidian://show-plugin?id=obsidian-importer).

1. Obre **[[Configuració]]**.
2. Ves a **Connectors de la comunitat** i [instal·la l'Importador](obsidian://show-plugin?id=obsidian-importer).
3. Habilita el connector Importador.
4. Obre el connector **Importador** utilitzant la paleta d'ordres o la icona de la barra d'eines.
5. Sota **Format de fitxer** tria **Microsoft OneNote (.one, .onepkg)**.
6. Tria els fitxers `.onepkg` i `.one` que vols importar. Pots seleccionar més d'un fitxer alhora, de manera que tots els teus quaderns es poden importar junts.
7. Sota **Seccions a importar** es llisten les seccions trobades en aquests fitxers, amb tot marcat. Desmarca el que no vulguis.
8. Opcionalment, tria una **Carpeta de sortida** per a la importació, on s'han de desar els adjunts, i què ha de passar amb les **Notes existents** si importes el mateix quadern de nou.
9. Fes clic a **Importar** i espera fins que la importació s'hagi completat.
10. Ja està!

Cada secció es converteix en una carpeta, i cada pàgina es converteix en una nota. Una subpàgina es desa en una carpeta amb el nom de la pàgina superior, cosa que manté l'estructura que OneNote mostrava i evita que dues subpàgines amb el mateix nom col·lisionin. Les pàgines a la paperera de reciclatge del quadern no s'importen.

### Limitacions

- Les seccions protegides amb contrasenya estan emmagatzemades xifrades i les seves pàgines s'ometen. Elimina la contrasenya a OneNote i exporta de nou per importar-les.
- Els fitxers protegits amb drets només poden ser oberts per un compte que la política permeti, i no es poden llegir per l'Importador.

## Privacitat

Si tries importar utilitzant el teu compte de Microsoft, el connector Importador d'Obsidian utilitza [OAuth](https://learn.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-auth-code-flow) per autenticar-se i importar els teus quaderns de OneNote. Això concedeix un token d'accés a curt termini al teu compte que s'utilitza només des del teu ordinador i mai s'emmagatzema. Després que la importació es completi, opcionalment pots revocar el token des de la [pàgina d'aplicacions i serveis de Microsoft](https://account.live.com/consent/Manage).

La importació de fitxers mai es connecta a Microsoft: els fitxers que tries es llegeixen al teu ordinador, sense cap connexió de xarxa.

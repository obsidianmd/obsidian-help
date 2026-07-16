---
permalink: uri
aliases:
  - Obsidian URI
---
Obsidian URI este un protocol URI personalizat acceptat de Obsidian, care vă permite să declanșați diverse acțiuni, cum ar fi deschiderea unei note sau crearea unei note. Obsidian URI permite automatizarea și fluxuri de lucru între aplicații.

## Formatul URI

URI-urile Obsidian folosesc următorul format:

```
obsidian://action?param1=value&param2=value
```

Parametrul `action` este acțiunea pe care doriți să o efectuați. Acțiunile disponibile includ:

- `open` pentru a deschide o notă.
- `new` pentru a crea sau adăuga la o notă existentă.
- `daily` pentru a crea sau deschide nota zilnică.
- `unique` pentru a crea o notă unică nouă.
- `search` pentru a deschide o căutare.
- `choose-vault` pentru a deschide administratorul de seifuri.

> [!warning] Codificare
> Asigurați-vă că valorile sunt codificate corect ca URI. De exemplu, caracterele de bară oblică `/` trebuie codificate ca `%2F`, iar caracterele spațiu trebuie codificate ca `%20`.
> 
 Acest lucru este deosebit de important deoarece un caracter „rezervat” codificat incorect poate strica interpretarea URI-ului. [Consultați aici pentru detalii](https://en.wikipedia.org/wiki/Percent-encoding).

## Deschide notă

Acțiunea `open` deschide un seif Obsidian sau un fișier din interiorul acelui seif.

### Exemple

- `obsidian://open?vault=my%20vault`
  Aceasta deschide seiful `my vault`. Dacă seiful este deja deschis, va aduce fereastra în prim-plan.
- `obsidian://open?vault=ef6ca3e3b524d22f`
  Aceasta deschide seiful identificat prin ID-ul `ef6ca3e3b524d22f`.
- `obsidian://open?vault=my%20vault&file=my%20note`
  Aceasta deschide nota `my note.md` în seiful `my vault`, presupunând că fișierul există.
- `obsidian://open?path=%2Fhome%2Fuser%2Fmy%20vault%2Fpath%2Fto%2Fmy%20note`
  Aceasta va căuta orice seif care conține calea `/home/user/my vault/path/to/my note`. Apoi, restul căii este transmis parametrului `file`. De exemplu, dacă există un seif la `/home/user/my vault`, aceasta ar fi echivalentă cu parametrul `file` setat la `path/to/my note`.


> [!tip] Deschideți un titlu sau un bloc
> Cu o codificare URI corectă, puteți naviga către un titlu sau un bloc dintr-o notă. `Note%23Heading` ar naviga către titlul numit „Heading”, în timp ce `Note%23%5EBlock` ar naviga către blocul numit „Block”.

### Parametri

- `vault` poate fi fie numele seifului, fie ID-ul seifului[^1].
- `file` poate fi fie un nume de fișier, fie o cale din rădăcina seifului către fișierul specificat. Dacă extensia fișierului este `md`, extensia poate fi omisă.
- `path` o cale absolută din sistemul de fișiere către un fișier.
  - Folosirea acestui parametru va suprascrie atât `vault`, cât și `file`.
  - Aceasta va determina aplicația să caute cel mai specific seif care conține calea fișierului specificat.
  - Apoi restul căii înlocuiește parametrul `file`.
- `prepend` va adăuga la începutul fișierului și va încerca să îmbine proprietățile.
- `append` va adăuga la sfârșitul fișierului și, de asemenea, va încerca să îmbine proprietățile.
- `paneType` (opțional) determină unde va fi deschisă nota în interfață.
  - dacă nu este prezent, ultima filă activă este înlocuită.
  - `paneType=tab` deschide într-o filă nouă.
  - `paneType=split` deschide într-un grup de file nou.
  - `paneType=window` deschide într-o fereastră separată (doar pe Desktop).

## Creează notă

Acțiunea `new` creează o notă nouă în seif, opțional cu un conținut.

### Exemple

- `obsidian://new?vault=my%20vault&name=my%20note`
  Aceasta deschide seiful `my vault` și creează o notă nouă numită `my note`.
- `obsidian://new?vault=my%20vault&file=path%2Fto%2Fmy%20note`
  Aceasta deschide seiful `my vault` și creează o notă nouă la `path/to/my note`.

### Parametri

- `vault` poate fi fie numele seifului, fie ID-ul seifului[^1]. La fel ca la acțiunea `open`.
- `name` numele fișierului care va fi creat. Dacă acesta este specificat, locația fișierului va fi aleasă în funcție de preferințele dumneavoastră „Locația implicită pentru notele noi”.
- `file` o cale absolută din seif, incluzând numele. Va suprascrie `name` dacă este specificat.
- `path` o cale absolută globală. Funcționează similar cu opțiunea `path` din acțiunea `open`, care va suprascrie atât `vault`, cât și `file`.
- `paneType` (opțional) determină unde va fi deschisă nota în interfață. La fel ca la acțiunea `open`.
- `content` (opțional) conținutul notei.
- `clipboard` (opțional) folosește conținutul clipboard-ului în locul specificării `content`.
- `silent` (opțional) includeți acest parametru dacă nu doriți să deschideți noua notă.
- `append` (opțional) includeți acest parametru pentru a adăuga la un fișier existent, dacă există unul.
- `overwrite` (opțional) suprascrie un fișier existent, dacă există unul, dar numai dacă `append` nu este setat.
- `x-success` (opțional) consultați [[#Folosirea parametrilor x-callback-url]].

## Creează sau deschide nota zilnică

Acțiunea `daily` creează sau deschide nota zilnică. Modulul [[Note zilnice]] trebuie să fie activat.

### Exemple

- `obsidian://daily?vault=my%20vault`
  Aceasta deschide seiful `my vault` și creează sau deschide nota zilnică.

### Parametri

Acțiunea `daily` acceptă aceiași parametri ca acțiunea `new`.

## Notă unică

Acțiunea `unique` creează o notă unică nouă în seif. Modulul [[Plugins/Creator de note unice|Creator de note unice]] trebuie să fie activat.

### Exemple

- `obsidian://unique?vault=my%20vault`
  Aceasta deschide seiful `my vault` și creează o notă unică nouă.
- - `obsidian://unique?vault=my%20vault&content=Hello%20World`
  Aceasta deschide seiful `my vault` și creează o notă unică nouă cu conținutul `Hello World`.

### Parametri

- `vault` poate fi fie numele seifului, fie ID-ul seifului[^1]. La fel ca la acțiunea `open`.
- `paneType` (opțional) determină unde va fi deschisă nota în interfață. La fel ca la acțiunea `open`.
- `content` (opțional) conținutul notei.
- `clipboard` (opțional) folosește conținutul clipboard-ului în locul specificării `content`.
- `x-success` (opțional) consultați [[#Folosirea parametrilor x-callback-url]].

## Deschide căutarea

Acțiunea `search` deschide [[Caută]] în seiful specificat și, opțional, efectuează o căutare.

### Exemple

- `obsidian://search?vault=my%20vault`
  Aceasta deschide seiful `my vault` și deschide [[Caută]].
- `obsidian://search?vault=my%20vault&query=Obsidian`
  Aceasta deschide seiful `my vault`, deschide [[Caută]] și efectuează o căutare pentru `Obsidian`.

### Parametri

- `vault` poate fi fie numele seifului, fie ID-ul seifului[^1]. La fel ca la acțiunea `open`.
- `query` (opțional) termenul de căutare de efectuat.

## Deschide administratorul de seifuri

Acțiunea `choose-vault` deschide [[Gestionează seifurile|administratorul de seifuri]].

### Exemple

- `obsidian://choose-vault`

## Integrare cu Hook

Această acțiune Obsidian URI este destinată utilizării cu [Hook](https://hookproductivity.com/). 

### Exemplu

`obsidian://hook-get-address`

### Parametri

- `vault` (opțional) poate fi fie numele seifului, fie ID-ul seifului[^1]. Dacă nu este furnizat, va fi folosit seiful curent sau ultimul focalizat.
- `x-success` (opțional) consultați [[#Folosirea parametrilor x-callback-url]].
- `x-error` (opțional) consultați [[#Folosirea parametrilor x-callback-url]].

Dacă `x-success` este definit, acest API îl va folosi drept x-callback-url. În caz contrar, va copia o legătură Markdown a notei curente focalizate în clipboard, sub forma unei adrese URL `obsidian://open`.

## Folosirea parametrilor x-callback-url

Unele terminale acceptă parametrii x-callback-url `x-success` și `x-error`. Când este furnizat, Obsidian va oferi următoarele către callback-ul `x-success`:

- `name` numele fișierului, fără extensia fișierului.
- `url` URI-ul `obsidian://` pentru acest fișier.
- `file` (doar pe desktop) adresa URL `file://` pentru acest fișier.

De exemplu, dacă Obsidian primește
`obsidian://.....x-success=myapp://x-callback-url`, răspunsul ar fi `myapp://x-callback-url?name=...&url=obsidian%3A%2F%2Fopen...&file=file%3A%2F%2F...`

## Formate prescurtate

Pe lângă formatele de mai sus, mai există două formate „prescurtate” disponibile pentru deschiderea seifurilor și fișierelor:

1. `obsidian://vault/my vault/my note` este echivalent cu `obsidian://open?vault=my%20vault&file=my%20note`.
2. `obsidian:///absolute/path/to/my note` este echivalent cu `obsidian://open?path=%2Fabsolute%2Fpath%2Fto%2Fmy%20note`.

## Depanare

### Înregistrarea Obsidian URI

Pe Windows și macOS, rularea aplicației o singură dată ar trebui să fie suficientă pentru a înregistra protocolul Obsidian URI pe computerul dumneavoastră.

Pe Linux, este un proces mult mai complex:

1. Asigurați-vă că creați un fișier `obsidian.desktop`. [Consultați aici pentru detalii](https://developer.gnome.org/documentation/guidelines/maintainer/integrating.html#desktop-files).
2. Asigurați-vă că fișierul desktop specifică câmpul `Exec` ca `Exec=executable %u`. `%u` este folosit pentru a transmite URI-urile `obsidian://` către aplicație.
3. Dacă folosiți programul de instalare AppImage, este posibil să fie nevoie să îl dezarhivați folosind `Obsidian-x.y.z.AppImage --appimage-extract`. Apoi asigurați-vă că directiva `Exec` indică spre executabilul dezarhivat.


[^1]: ID-ul seifului este codul aleatoriu de 16 caractere atribuit seifului, de exemplu `ef6ca3e3b524d22f`. Acest ID este unic pentru fiecare director de pe computerul dumneavoastră. ID-ul poate fi găsit deschizând comutatorul de seifuri și selectând „Copiază ID-ul seifului” din meniul contextual al seifului dorit.

---
permalink: plugins/command-palette
aliases:
  - Command palette
---
Modulul [[Module de bază|Paleta de comenzi]] îți permite să rulezi orice comandă direct de la tastatură. De asemenea, îți permite să explorezi toate comenzile disponibile și [[Combinații de taste|combinațiile de taste]] ale acestora.

Pentru a rula o comandă din Paleta de comenzi:

1. Apasă `Ctrl+P` (sau `Cmd+P` pe macOS) pentru a deschide Paleta de comenzi. O poți deschide și din [[Panglică|Panglică]] cu pictograma Paletei de comenzi ![[lucide-terminal.svg#icon]]. 
2. Scrie numele comenzii pe care vrei să o rulezi.
3. Navighează la comandă folosind săgețile de la tastatură.
4. Apasă `Enter`.

> [!tip] Sfat
> Paleta de comenzi acceptă _potrivire aproximativă_ (fuzzy matching), permițându-ți să cauți comenzi chiar dacă nu le știi numele exact. De exemplu, scriind „scf” vei găsi comanda **S**alvează fișierul **c**urrent (**S**ave **c**urrent **f**ile).

Începând cu **versiunea 1.8.3**, comenzile folosite recent apar în partea de sus a Paletei de comenzi. Totuși, aceste comenzi folosite recent sunt încă supuse algoritmului de _potrivire aproximativă_. Când începi să filtrezi, comenzile mai scurte vor fi prioritizate față de cele folosite recent.

## Comenzi fixate

Poți fixa comenzile folosite frecvent în partea de sus a Paletei de comenzi pentru a le accesa rapid fără să fie nevoie să le scrii numele.

> [!tip] Sfat
> Dacă vrei să rulezi rapid comenzi folosite frecvent, poți și [[Combinații de taste#Set a hotkey|să le setezi combinații de taste]].

### Fixează o comandă

1. Deschide **[[Setări]]**.
2. În bara laterală, dă clic pe **Command palette** sub **Opțiunile modulului**.
3. Lângă **New pinned command**, dă clic pe **Select a command**.
4. Selectează comanda pe care vrei să o fixezi din listă.
5. Apasă `Enter`.

### Anulează fixarea unei comenzi

1. Deschide **[[Setări]]**.
2. În bara laterală, dă clic pe **Command palette** sub **Opțiunile modulului**.
3. Sub **Pinned commands**, dă clic pe pictograma cruce de lângă comanda pe care vrei să o defixezi.

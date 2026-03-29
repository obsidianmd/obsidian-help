---
permalink: bases/views/table
---
Taula és un tipus de [[Vistes|vista]] que podeu utilitzar a [[Introducció a Bases|Bases]].

Seleccioneu ![[lucide-table.svg#icon]]  **Taula** des del menú de vistes per mostrar fitxers com una taula amb una fila per a cada fitxer, i columnes per a les [[Propietats]] d'aquell fitxer.

![Exemple d'una base mostrant una vista de taula amb una llista de llibres](bases-noshadow.png#interface)

## Configuració

La configuració de la vista de taula es pot configurar a [[Vistes#Configuració de la vista|Configuració de la vista]].

### Alçada de la fila

L'alçada de la fila us permet mostrar més informació. Escolliu entre **baixa**, **mitjana**, **alta** i **molt alta**.

## Resums

Podeu afegir resums a una columna de taula per calcular ràpidament valors com totals, mitjanes o recomptes per a les files visibles actualment a la vista.

Els resums estan lligats a la vista, no a la base. Cada vista pot mostrar resums diferents per a la mateixa columna.

### Afegir un resum

1. Feu clic dret a la capçalera de la columna en una vista de taula.
2. Seleccioneu ![[lucide-calculator.svg#icon]] **Resumir…**.
3. Escolliu una de les funcions de resum integrades, o seleccioneu ![[lucide-square-function.svg#icon]] **Afegeix un resum** per definir el vostre propi.

El resum apareix a la part inferior de la columna. Quan els resultats estan [[Vistes#Ordena i agrupa resultats|agrupats]], el resum de cada grup es mostra a la part superior del grup.

Un cop afegida la barra de resum, podeu afegir més resums per a altres columnes fent clic a la cel·la de resum. La barra de resum s'amaga si s'eliminen tots els resums.

### Resums integrats

Els resums següents estan disponibles per defecte. Les opcions poden variar segons el tipus de propietat.

#### Tots els tipus de propietat

- **Sense valor**: recompte de files sense valor.
- **Amb valor**: recompte de files amb un valor.
- **Única**: nombre de valors diferents.

#### Números

- **Mitjana**: mitjana de tots els valors numèrics.
- **Màxim**: valor més gran.
- **Mediana**: valor medià.
- **Mínim**: valor més petit.
- **Rang**: diferència entre el màxim i el mínim.
- **Desv. est.**: desviació estàndard.
- **Suma**: total de tots els valors.

#### Dates

- **Més antiga**: la data més petita/antiga.
- **Més recent**: la data més gran/recent.
- **Rang**: diferència entre la més antiga i la més recent.

#### Casella de selecció

- **Marcades**: nombre de files on la casella de selecció està activada.
- **No marcades**: nombre de files on la casella de selecció està desactivada.

### Resums personalitzats

Podeu definir el vostre propi resum utilitzant una fórmula:

1. Al menú ![[lucide-calculator.svg#icon]] **Resumir…**, escolliu ![[lucide-square-function.svg#icon]] **Afegeix un resum**.
2. Doneu un nom al resum.
3. Introduïu una fórmula. La fórmula s'executa sobre la llista de valors d'aquella columna (per exemple, utilitzant una [[Funcions|funció]] com `values.reduce(...)`).
4. Deseu el resum.

Els resums personalitzats són útils quan necessiteu un càlcul que no està cobert per les opcions integrades.

## Dreceres

Podeu moure-us ràpidament per una vista de taula utilitzant les dreceres de ratolí i [[Dreceres d'edició|dreceres de teclat]] següents.

- Maj-clic crea una selecció de cel·les.
- Feu clic dret a una selecció de cel·les per accedir a accions addicionals per a aquells fitxers.

| Acció                                                                                                                                        | Drecera              | macOS               |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------------- |
| Copia les cel·les seleccionades                                                                                                              | `Ctrl+C`             | `Cmd+C`             |
| Enganxa les cel·les seleccionades                                                                                                            | `Ctrl+V`             | `Cmd+V`             |
| Desfés els canvis a les propietats                                                                                                           | `Ctrl+Z`             | `Cmd+Z`             |
| Refés els canvis a les propietats                                                                                                            | `Ctrl+Shift+Z`       | `Cmd+Shift+Z`       |
| Selecciona totes les cel·les del grup actual                                                                                                 | `Ctrl+A`             | `Cmd+A`             |
| Selecciona totes les cel·les en una direcció donada                                                                                          | `Ctrl+Shift+Fletxa`  | `Ctrl+Shift+Fletxa` |
| Selecciona la columna                                                                                                                        | `Ctrl+Espai`         |                     |
| Selecciona la fila                                                                                                                           | `Shift+Espai`        |                     |
| Enfoca la cel·la actual — per a caselles de selecció, commuta la casella; per a fórmules, obre l'editor de fórmules                         | `Enter`              |                     |
| Vés a la primera columna                                                                                                                     | `Inici`              |                     |
| Vés a l'última columna                                                                                                                       | `Fi`                 |                     |
| Navega amunt i avall per l'alçada de la pàgina                                                                                               | `RePàg`,`AvPàg`      |                     |
| Esborra la selecció de cel·les actual                                                                                                        | `Esc`                |                     |
| Esborra les cel·les actuals                                                                                                                  | `Retrocés`           |                     |
| Vés a la cel·la següent                                                                                                                      | `Tab`                |                     |
| Vés a la cel·la anterior                                                                                                                     | `Shift-Tab`          |                     |

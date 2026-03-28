---
permalink: syntax
publish: true
mobile: true
description: 'Dowiedz się, jak stosować podstawowe formatowanie notatek w Obsidian za pomocą Markdown.'
---
Dowiedz się, jak stosować podstawowe formatowanie w swoich notatkach za pomocą [Markdown](https://daringfireball.net/projects/markdown/). Aby poznać bardziej zaawansowaną składnię formatowania, zobacz [[Zaawansowana składnia formatowania]].

## Akapity

Aby tworzyć akapity w Markdown, użyj **pustej linii** do oddzielenia bloków tekstu. Każdy blok tekstu oddzielony pustą linią jest traktowany jako odrębny akapit.

```md
To jest akapit.

To jest kolejny akapit.
```

To jest akapit.

To jest kolejny akapit.

Pusta linia między wierszami tekstu tworzy oddzielne akapity. Jest to domyślne zachowanie w Markdown.

> [!tip]- Wiele pustych spacji
> Wiele sąsiadujących pustych spacji wewnątrz i między akapitami jest zwijanych do pojedynczej spacji podczas wyświetlania w [[Podglądy i tryb edycji#Widok czytania|widoku czytania]] lub na stronach [[Wprowadzenie do Obsidian Publish|Obsidian Publish]].
> 
> ```md
> Wiele          sąsiadujących          spacji
> 
> 
> 
> i wiele nowych linii między akapitami.
> ```
> 
> > Wiele          sąsiadujących          spacji
> > 
> > 
> > 
> > i wiele nowych linii między akapitami.
> 
> Jeśli chcesz zapobiec zwijaniu spacji lub dodać wiele pustych spacji, możesz użyć znaczników HTML `&nbsp;` (niełamliwa spacja) lub `<br>` (łamanie wiersza).

### Łamanie wiersza

Domyślnie w Obsidian naciśnięcie `Enter` raz tworzy nową linię w notatce, ale jest ona traktowana jako *kontynuacja* tego samego akapitu w wyrenderowanym wyniku, zgodnie z typowym zachowaniem Markdown. Aby wstawić łamanie wiersza *wewnątrz* akapitu bez rozpoczynania nowego akapitu, możesz:

- Dodać **dwie spacje** na końcu linii przed naciśnięciem `Enter`, lub
- Użyć skrótu `Shift+Enter`, aby bezpośrednio wstawić łamanie wiersza.

> [!question]- Dlaczego wielokrotne naciśnięcie `Enter` nie tworzy więcej łamań wiersza w widoku czytania?
> W Markdown pojedynczy `Enter` jest ignorowany, a wielokrotne kolejne naciśnięcia `Enter` skutkują tylko jednym nowym akapitem. To zachowanie jest zgodne z regułą miękkiego zawijania w Markdown, gdzie dodatkowe puste linie nie generują dodatkowych łamań wiersza ani akapitów — są one zwijane do pojedynczego podziału akapitu. Tak Markdown domyślnie obsługuje tekst, zapewniając naturalny przepływ akapitów bez nieoczekiwanych podziałów.

Obsidian zawiera ustawienie **[[Ustawienia#Łamanie wiersza|Łamanie wiersza]]**, które sprawia, że Obsidian stosuje standardową specyfikację Markdown dla łamania wierszy.

Aby włączyć tę funkcję:

1. Otwórz **[[Ustawienia]]**.
2. Przejdź do zakładki **Edytor**.
3. Włącz **Łamanie wiersza**.

Gdy **Łamanie wiersza** jest włączone w Obsidian, łamanie wierszy ma trzy różne zachowania w zależności od tego, jak linie są oddzielone:

**Pojedynczy Enter bez spacji**: Pojedynczy `Enter` bez końcowych spacji spowoduje połączenie dwóch oddzielnych linii w jedną linię podczas renderowania.

```md
linia pierwsza
linia druga
```

Renderuje się jako:

linia pierwsza linia druga

**Pojedynczy Enter z dwoma lub więcej końcowymi spacjami**: Jeśli dodasz dwie lub więcej spacji na końcu pierwszej linii przed naciśnięciem `Enter`, dwie linie pozostają częścią tego samego akapitu, ale są rozdzielone łamaniem wiersza (element HTML `<br>`). W tym przykładzie użyjemy dwóch podkreślników zamiast spacji.

```md
linia trzecia__  
linia czwarta
```

Renderuje się jako:

linia trzecia<br>
linia czwarta

**Podwójny Enter (z końcowymi spacjami lub bez)**: Naciśnięcie `Enter` dwa razy (lub więcej) oddziela linie na dwa odrębne akapity (elementy HTML `<p>`), niezależnie od tego, czy dodasz spacje na końcu pierwszej linii.

```md
linia piąta

linia szósta
```

Renderuje się jako:

<p>linia piąta</p>
<p>linia szósta</p>

## Nagłówki

Aby stworzyć nagłówek, dodaj do sześciu symboli `#` przed tekstem nagłówka. Liczba symboli `#` określa poziom nagłówka (jak pokazano w [[Konspekt|konspekcie]]).

```md
# To jest nagłówek 1
## To jest nagłówek 2
### To jest nagłówek 3
#### To jest nagłówek 4
##### To jest nagłówek 5
###### To jest nagłówek 6
```

%% These headings use HTML to avoid cluttering the Outline/Table of contents %%
<h1>To jest nagłówek 1</h1>
<h2>To jest nagłówek 2</h2>
<h3>To jest nagłówek 3</h3>
<h4>To jest nagłówek 4</h4>
<h5>To jest nagłówek 5</h5>
<h6>To jest nagłówek 6</h6>

## Pogrubienie, kursywa, wyróżnienia

Formatowanie tekstu można również stosować za pomocą [[Skróty edycji]].

| Styl | Składnia | Przykład | Wynik |
|-|-|-|-|
| Pogrubienie | `** **` lub `__ __` | `**Pogrubiony tekst**` | **Pogrubiony tekst** |
| Kursywa | `* *` lub `_ _`  | `*Tekst kursywą*` | *Tekst kursywą* |
| Przekreślenie | `~~ ~~` |  `~~Przekreślony tekst~~` | ~~Przekreślony tekst~~ |
| Wyróżnienie | `== ==` |  `==Wyróżniony tekst==` | ==Wyróżniony tekst== |
| Pogrubienie z zagnieżdżoną kursywą | `** **` i `_ _`  | `**Pogrubiony tekst i _zagnieżdżona kursywa_**` | **Pogrubiony tekst i _zagnieżdżona kursywa_** |
| Pogrubienie i kursywa | `*** ***` lub `___ ___` |  `***Pogrubiony tekst kursywą***` | ***Pogrubiony tekst kursywą*** |

Formatowanie można wymusić jako zwykły tekst, dodając przed nim ukośnik odwrotny `\`.

\*\*Ta linia nie będzie pogrubiona\*\*

```markdown
\*\*Ta linia nie będzie pogrubiona\*\*
```

\**Ta linia będzie kursywą i pokaże gwiazdki*\*

```markdown
\**Ta linia będzie kursywą i pokaże gwiazdki*\*
```

## Łącza wewnętrzne

Obsidian obsługuje dwa formaty [[Łącza wewnętrzne|łączy wewnętrznych]] między notatkami:

- Odnośnik wiki: `[[Trzy prawa ruchu]]`
- Markdown: `[Trzy prawa ruchu](Trzy%20prawa%20ruchu.md)`

## Łącza zewnętrzne

Jeśli chcesz dodać link do zewnętrznego adresu URL, możesz utworzyć link inline, otaczając tekst linku nawiasami kwadratowymi (`[ ]`), a następnie URL w nawiasach okrągłych (`( )`).

```md
[Pomoc Obsidian](https://help.obsidian.md)
```

[Pomoc Obsidian](https://help.obsidian.md)

Możesz również tworzyć łącza zewnętrzne do plików w innych skarbcach, linkując do [[Obsidian URI|Obsidian URI]].

```md
[Notatka](obsidian://open?vault=MainVault&file=Note.md)
```

### Unikanie spacji w linkach

Jeśli Twój URL zawiera spacje, musisz je zastąpić za pomocą `%20`.

```md
[Moja notatka](obsidian://open?vault=MainVault&file=My%20Note.md)
```

Możesz również otoczyć URL nawiasami kątowymi (`< >`).

```md
[Moja notatka](<obsidian://open?vault=MainVault&file=My Note.md>)
```

## Obrazy zewnętrzne

Możesz dodawać obrazy z zewnętrznych adresów URL, dodając symbol `!` przed [[#Łącza zewnętrzne|łączem zewnętrznym]].

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

Możesz zmienić wymiary obrazu, dodając `|640x480` do adresu docelowego linku, gdzie 640 to szerokość, a 480 to wysokość.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

Jeśli podasz tylko szerokość, obraz skaluje się zgodnie z oryginalnym współczynnikiem proporcji. Na przykład:

```md
![Engelbart|100](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

> [!tip]- Wskazówka
> Jeśli chcesz dodać obraz z wnętrza swojego skarbca, możesz również [[Osadzanie plików#Osadzanie obrazu w notatce|osadzić obraz w notatce]].

## Cytaty

Możesz cytować tekst, dodając symbol `>` przed tekstem.

```md
> Ludzie stają przed coraz bardziej złożonymi i pilnymi problemami, a ich skuteczność w radzeniu sobie z tymi problemami ma kluczowe znaczenie dla stabilności i dalszego postępu społeczeństwa.

\- Doug Engelbart, 1961
```

> Ludzie stają przed coraz bardziej złożonymi i pilnymi problemami, a ich skuteczność w radzeniu sobie z tymi problemami ma kluczowe znaczenie dla stabilności i dalszego postępu społeczeństwa.

\- Doug Engelbart, 1961

> [!tip]- Wskazówka
> Możesz zamienić swój cytat w [[Objaśnienia|blok wyróżnienia]], dodając `[!info]` jako pierwszą linię w cytacie.

## Listy

Możesz utworzyć listę nieuporządkowaną, dodając `-`, `*` lub `+` przed tekstem.

```md
- Pierwszy element listy
- Drugi element listy
- Trzeci element listy
```

- Pierwszy element listy
- Drugi element listy
- Trzeci element listy

Aby utworzyć listę numerowaną, rozpocznij każdą linię od liczby, po której następuje symbol `.` lub `)`.

```md
1. Pierwszy element listy
2. Drugi element listy
3. Trzeci element listy
```

1. Pierwszy element listy
2. Drugi element listy
3. Trzeci element listy

```md
1) Pierwszy element listy
2) Drugi element listy
3) Trzeci element listy
```

1) Pierwszy element listy
2) Drugi element listy
3) Trzeci element listy

Możesz użyć `Shift+Enter`, aby wstawić [[#Łamanie wiersza|łamanie wiersza]] wewnątrz listy numerowanej bez zmiany numeracji.

```md
1. Pierwszy element listy
   
2. Drugi element listy
3. Trzeci element listy
   
4. Czwarty element listy
5. Piąty element listy
6. Szósty element listy
```

### Listy zadań

Aby utworzyć listę zadań, rozpocznij każdy element listy od myślnika i spacji, po których następuje `[ ]`.

```md
- [x] To jest ukończone zadanie.
- [ ] To jest nieukończone zadanie.
```

- [x] To jest ukończone zadanie.
- [ ] To jest nieukończone zadanie.

Możesz przełączać zadanie w widoku czytania, zaznaczając pole wyboru.

> [!tip]- Wskazówka
> Możesz użyć dowolnego znaku wewnątrz nawiasów, aby oznaczyć zadanie jako ukończone.
>
> ```md
> - [x] Mleko
> - [?] Jajka
> - [-] Jajka
> ```
>
> - [x] Mleko
> - [?] Jajka
> - [-] Jajka

### Zagnieżdżanie list

Możesz zagnieżdżać dowolny typ listy — numerowaną, nieuporządkowaną lub listę zadań — pod dowolnym innym typem listy.

Aby utworzyć zagnieżdżoną listę, dodaj wcięcie do jednego lub więcej elementów listy. Możesz mieszać typy list w zagnieżdżonej strukturze:

```md
1. Pierwszy element listy
   1. Zagnieżdżony element numerowany
2. Drugi element listy
   - Zagnieżdżony element nieuporządkowany
```

1. Pierwszy element listy
   1. Zagnieżdżony element numerowany
2. Drugi element listy
   - Zagnieżdżony element nieuporządkowany

Podobnie możesz utworzyć zagnieżdżoną listę zadań, dodając wcięcie do jednego lub więcej elementów:

```md
- [ ] Zadanie 1
	- [ ] Podzadanie 1
- [ ] Zadanie 2
	- [ ] Podzadanie 1
```

- [ ] Zadanie 1
	- [ ] Podzadanie 1
- [ ] Zadanie 2
	- [ ] Podzadanie 1

Użyj `Tab` lub `Shift+Tab`, aby zwiększyć lub zmniejszyć wcięcie wybranych elementów listy w celu łatwej organizacji.

## Linia pozioma

Możesz użyć trzech lub więcej gwiazdek `***`, myślników `---` lub podkreślników `___` w osobnej linii, aby dodać linię poziomą. Możesz również oddzielać symbole spacjami.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

***

## Kod

Możesz formatować kod zarówno inline w zdaniu, jak i w osobnym bloku.

### Kod inline

Możesz formatować kod wewnątrz zdania za pomocą pojedynczych odwrotnych apostrofów.

```md
Tekst wewnątrz `odwrotnych apostrofów` w linii zostanie sformatowany jako kod.
```

Tekst wewnątrz `odwrotnych apostrofów` w linii zostanie sformatowany jako kod.

Jeśli chcesz umieścić odwrotne apostrofy w bloku kodu inline, otocz go podwójnymi odwrotnymi apostrofami: inline ``kod z odwrotnym apostrofem ` w środku``.

### Bloki kodu

Aby sformatować kod jako blok, otocz go trzema lub więcej odwrotnymi apostrofami lub trzema lub więcej tyldami.

~~~
`````
cd ~/Desktop
`````
~~~
`````
~~~
cd ~/Desktop
~~~
`````
`````md
cd ~/Desktop
`````

Możesz również utworzyć blok kodu, dodając wcięcie do tekstu za pomocą `Tab` lub 4 spacji.
`````md
    cd ~/Desktop
`````

Możesz dodać podświetlanie składni do bloku kodu, dodając kod języka po pierwszym zestawie odwrotnych apostrofów.

~~~md
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````
~~~
`````js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
`````

Obsidian używa Prism do podświetlania składni. Więcej informacji znajdziesz w sekcji [Obsługiwane języki](https://prismjs.com/#supported-languages).

> [!info]+ PrismJS i widoki edycji
> [[Podglądy i tryb edycji#Tryb źródłowy|Tryb źródłowy]] i [[Podglądy i tryb edycji#Podgląd na żywo|Podgląd na żywo]] nie obsługują PrismJS i mogą renderować podświetlanie składni w odmienny sposób.

#### Zagnieżdżanie bloków kodu

Gdy musisz umieścić blok kodu wewnątrz innego bloku kodu (na przykład podczas dokumentowania sposobu użycia bloków kodu), możesz użyć więcej niż trzech odwrotnych apostrofów lub tyld dla zewnętrznego bloku kodu.

Aby zagnieździć bloki kodu, użyj czterech lub więcej odwrotnych apostrofów (lub tyld) dla bloku zewnętrznego, podczas gdy blok wewnętrzny używa trzech:
`````md
````md
Oto jak stworzyć blok kodu:
```js
console.log("Hello world")
```
````
`````

Możesz również mieszać odwrotne apostrofy i tyldy. Jest to szczególnie przydatne podczas pracy z kodem, który generuje inne bloki kodu:
`````md
````md
```dataviewjs
dv.paragraph(`
~~~mermaid
graph TD
    A --> B
~~~
`)
```
````
`````

Kluczowa zasada jest taka, że zewnętrzny blok kodu musi używać **więcej** znaków ogrodzenia (odwrotnych apostrofów lub tyld) niż jakikolwiek wewnętrzny blok kodu, lub używać innego typu znaku ogrodzenia.

## Przypisy

Możesz dodawać przypisy[^footnote] do swoich notatek za pomocą następującej składni:

[^footnote]: To jest przypis.

```md
To jest prosty przypis[^1].

[^1]: To jest tekst odniesienia.
[^2]: Dodaj 2 spacje na początku każdej nowej linii.
  To pozwala pisać przypisy wielowierszowe.
[^note]: Nazwane przypisy nadal wyświetlają się jako numery, ale mogą ułatwić identyfikację i linkowanie odniesień.
```

Możesz również wstawiać przypisy inline w zdaniu. Zauważ, że daszek znajduje się na zewnątrz nawiasów.

```md
Możesz również używać przypisów inline. ^[To jest przypis inline.]
```

> [!note] Uwaga
> Przypisy inline działają tylko w widoku czytania, nie w podglądzie na żywo.

## Komentarze

Możesz dodawać komentarze, otaczając tekst symbolami `%%`. Komentarze są widoczne tylko w trybie edycji.

```md
To jest %%inline%% komentarz.

%%
To jest komentarz blokowy.

Komentarze blokowe mogą obejmować wiele linii.
%%
```

## Unikanie składni Markdown

W niektórych przypadkach może być konieczne wyświetlenie znaków specjalnych w Markdown, takich jak `*`, `_` lub `#`, bez aktywowania ich formatowania. Aby wyświetlić te znaki dosłownie, umieść przed nimi ukośnik odwrotny (`\`).

> [!example] Najczęściej używane znaki do unikania
> 
> - Gwiazdka: `\*`
> - Podkreślnik: `\_`
> - Krzyżyk: `\#`
> - Odwrotny apostrof: `` \` ``
> - Kreska pionowa (używana w tabelach): `\|`
> - Tylda: `\~`

```md
\*Ten tekst nie będzie kursywą\*.
```

\*Ten tekst nie będzie kursywą\*.

Podczas pracy z listami numerowanymi może być konieczne unikanie kropki po liczbie, aby zapobiec automatycznemu formatowaniu listy. Umieść ukośnik odwrotny (`\`) przed kropką, a **nie** przed liczbą.

```md
1\. To nie będzie element listy.
```

1\. To nie będzie element listy.

## Dowiedz się więcej

Aby poznać bardziej zaawansowaną składnię formatowania, taką jak tabele, diagramy i wyrażenia matematyczne, zobacz [[Zaawansowana składnia formatowania]].

Aby dowiedzieć się więcej o tym, jak Obsidian parsuje Markdown, zobacz [[Obsidian Flavored Markdown]].

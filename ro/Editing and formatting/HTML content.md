---
permalink: html
publish: true
mobile: true
description: 'Aflați cum să folosiți HTML în Obsidian, inclusiv limitările privind afișarea Markdown și cerințele blocurilor HTML.'
---

Obsidian acceptă HTML pentru a vă permite să vă afișați notele așa cum doriți, sau chiar să [[Embed web pages|încorporați pagini web]]. Permiterea HTML în notele dvs. vine cu riscuri. Pentru a preveni ca un cod rău-intenționat să provoace daune, Obsidian _sanitizează_ orice cod HTML din notele dvs. 

> [!example] 
> Elementul `<script>` vă permite în mod normal să rulați JavaScript de fiecare dată când se încarcă. Dacă Obsidian nu ar sanitiza HTML-ul, un atacator ar putea să vă convingă să lipiți un text ce conține JavaScript care extrage informații sensibile de pe calculatorul dvs. și le trimite înapoi către el.

Cu toate acestea, deoarece sintaxa Markdown nu acceptă toate formele de stilizare, folosirea HTML sanitizat poate fi o altă modalitate de a îmbunătăți calitatea notelor dvs. Am inclus câteva dintre cele mai comune utilizări ale HTML.

## Limitări HTML

Obsidian are limitări specifice atunci când folosiți HTML în notele dvs.:

### Fără Markdown în interiorul HTML

Obsidian nu afișează sintaxa Markdown în interiorul elementelor HTML. Aceasta este o alegere de proiectare intenționată pentru optimizarea performanței și pentru a menține complexitatea analizorului de sintaxă scăzută atunci când se gestionează documente mari.

De exemplu, acest lucru nu va funcționa așa cum vă așteptați:

```md
<div>
This **will not** be bold and this `will not` be code.
</div>
```

### Blocurile HTML trebuie să fie autonome

Blocurile HTML trebuie să fie complete și nu pot conține rânduri goale în interiorul lor. Rândurile goale vor întrerupe blocul HTML.

Acest lucru va funcționa:

```md
<table>
<tr>
<td>Content here</td>
</tr>
</table>
```

Acest lucru nu va funcționa corect:

```md
<table>

<tr>

<td>Content here</td>

</tr>

</table>
```

### Când Markdown pare să funcționeze în HTML

Unele etichete HTML în text, precum `<span>` sau `<a>`, au funcționalitate limitată și pot părea să afișeze Markdown, dar nu acesta este de fapt ceea ce se întâmplă. Markdown este procesat în afara contextului HTML.

Pentru mai multe detalii despre modul în care Obsidian gestionează Markdown, consultați [[Obsidian Flavored Markdown]].

## Utilizări comune ale HTML

> [!info] Mai multe detalii despre folosirea `<iframe>` pot fi găsite în [[Embed web pages]].

### Comentarii

[[Basic formatting syntax#Comments|Comentariile Markdown]] sunt modalitatea preferată de a adăuga comentarii ascunse în notele dvs. Cu toate acestea, unele metode de conversie a notelor Markdown, precum [Pandoc](https://pandoc.org), au suport limitat pentru comentariile Markdown. În acele cazuri, puteți folosi în schimb un `<!-- HTML Comment -->`!

### Subliniere

Dacă trebuie să subliniați rapid un element în notele dvs., puteți folosi `<u>Example</u>` pentru a crea <u>text subliniat</u>.

### Span/Div

Etichetele span și div pot fi folosite pentru a aplica clase personalizate dintr-un [[CSS snippets|fragment CSS]], sau stilizare definită personalizat, pe o zonă de text selectată. De exemplu, folosind `<span style="font-family: cursive">your text</span>` puteți schimba rapid <span style="font-family: cursive">fontul textului dvs.</span>.

## Tăiat

Trebuie să tăiați <s>niște text</s>? Folosiți `<s>this</s>` pentru a-l tăia.


---
permalink: embeds
cssclasses:
  - soft-embed
---
Apreneu com podeu incrustar altres notes i fitxers multimèdia a les vostres notes. En incrustar fitxers a les vostres notes, podeu reutilitzar contingut a tota la vostra cambra forta.

Per incrustar un fitxer de la vostra cambra forta, afegiu un signe d'exclamació (`!`) davant d'un [[Enllaços interns|Enllaç intern]]. Podeu incrustar fitxers en qualsevol dels [[Formats de fitxer acceptats]].

> [!tip] Incrusta arrossegant i deixant anar
> A l'escriptori, també podeu arrossegar i deixar anar fitxers compatibles directament a la vostra nota per incrustar-los automàticament.

## Incrustar una nota dins d'una altra nota

Per incrustar una nota:

```md
![[Enllaços interns]]
```

També podeu incrustar enllaços a [[Enllaços interns#Enllaçar a un encapçalament en una nota|encapçalaments]] i [[Enllaços interns#Enllaçar a un bloc en una nota|blocs]].

```md
![[Enllaços interns#^b15695]]
```

El text a continuació és un exemple d'un bloc incrustat:

![[Enllaços interns#^b15695]]

## Incrustar una imatge en una nota

Per incrustar una imatge:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Podeu canviar les dimensions de la imatge afegint `|640x480` a la destinació de l'enllaç, on 640 és l'amplada i 480 és l'alçada.

```md
![[Engelbart.jpg|100x145]]
```

Si només especifiqueu l'amplada, la imatge s'escala segons la seva relació d'aspecte original. Per exemple, `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

També podeu incrustar una imatge allotjada externament utilitzant un enllaç de Markdown. Podeu controlar l'amplada i l'alçada de la mateixa manera que amb un enllaç wiki.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Incrustar un fitxer d'àudio en una nota

Per incrustar un fitxer d'àudio:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## Incrustar un PDF en una nota

Per incrustar un PDF:

```md
![[Document.pdf]]
```

També podeu obrir una pàgina específica del PDF afegint `#page=N` a la destinació de l'enllaç, on `N` és el número de la pàgina:

```md
![[Document.pdf#page=3]]
```

També podeu especificar l'alçada en píxels per al visor de PDF incrustat, afegint `#height=[number]` a la destinació de l'enllaç. Per exemple:

```md
![[Document.pdf#height=400]]
```

## Incrustar una llista en una nota

Per incrustar una llista d'una nota diferent, primer afegiu un [[Enllaços interns#Enllaçar a un bloc en una nota|identificador de bloc]] a la vostra llista:

```md

- element de llista 1
- element de llista 2

^my-list-id
```

Després enllaçeu a la llista utilitzant l'identificador de bloc:

```md
![[La meva nota#^my-list-id]]
```

## Incrustar resultats de cerca

![[Cerca#Incrustar resultats de cerca en una nota]]

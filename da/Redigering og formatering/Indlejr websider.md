---
permalink: indlejr-websider
---
I denne guide kan du lære at indlejre websider i dine noter ved at benytte [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) HTML elementet.

Tilføj følgende til din note, hvor du erstatter eksempelteksten med URLen til den side du vil indlejere, for at indlejere den:

```html
<iframe src="INDSÆT DIN URL HER!"></iframe>
```

> [!note]
> Nogle hjemmesider tillader ikke at du indlejrer dem. I stedet kan de tilbyde URLer til brug for indlejring. Hvis hjemmesiden ikke understøtter indlejring, kan du prøve at søge på hejjesidens navn efterfulgt af "embed iframe". Fx. "youtube embed iframe".

> [!tip]
> Hvis du anvender pluginnet [[Lærred]], kan du indlejre en webside på et kort. Få mere at vide i guiden: [[Lærred#Tilføj kort fra websider|Tilføj kort fra websider]].

## Sådan indlejrer du en YouTube video

Du skal anvende samme Markdown syntaks som [[Grundlæggende formaterings syntaks#Eksterne billeder|eksterne billeder]], hvis du vil indlejere en YouTube video i din note:

```md
![](https://www.youtube.com/watch?v=NnTvZWp5Q7o)
```

![](https://www.youtube.com/watch?v=NnTvZWp5Q7o)

## Sådan indlejrer du et "tweet"

Du skal anvende samme Markdown syntaks som [[Grundlæggende formaterings syntaks#Eksterne billeder|eksterne billeder]], hvis du vil indlejere et tweet i din note:

```md
![](https://twitter.com/obsdmd/status/1580548874246443010)
```

![](https://twitter.com/obsdmd/status/1580548874246443010)

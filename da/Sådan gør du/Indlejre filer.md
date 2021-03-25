### Indlejre filer

Du kan indlejre vedhæftede filer som f.eks. billeder eller lyd i dine noter. Benyt sytaksen  `![[filnavn.png]]` sådan her:

![[Engelbart.jpg]]

![[Excerpt from Mother of All Demos (1968).ogg]]

Du kan indlejre en PDF fil i dine noter med den samme syntaks. Du kan yderligere skrive`![[Min Fil.pdf#page=sidenummer]]` for at åbne indlejringen direkte på den specifikke side i PDF filen.

Hvis du trækker og slipper et billede ind i en note vil filen blive kopieret til standard mappen, hvor vedhæftninger gemmes. Billedet vil ligge der, som en helt normal fil og kan stadig tilgås gennem filsystemet. Du kan definere den mappe hvor vedhæftninger automatisk bliver placeret i under Indstillinger -> Filer & Links.

### Indlejre noter

Du kan også indlejre en note med samme syntaks:

![[Accepterede filformater]]

### iframe

"iframe" er en måde, hvorpå du kan indlejre en webside i en anden webside. Det er brugbart fordi Markdown kan acceptere HTML, som er et simpelt sprog, der benyttes til at konstruere de websider vi ser hver dag på internettet.

Som eksempel:

```html
<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>
```

Vil vise:

<iframe src="https://www.youtube.com/embed/NnTvZWp5Q7o"></iframe>

Den basale syntaks er:

```html
<iframe src="INDSÆT DIN URL HER"></iframe>
```

Nogle websteder tillader ikke iframe eller har nogle andre måder, hvor du kan indlejre sider på. F.eks. kan du ikke indlejre en YouTube video ved at benyttte dens normale URL, men du kan bruge dens indlejrede URL, som er `https://www.youtube.com/embed/VIDEO_ID`.

Hvis du vil indlejre et websted, så prøv at søge på "{websted} embed iframe". 

For eksempel kan du indlejre Twitter tweets på følgende måde, som et søgeresultat har vist:

```html
<iframe
	border=0
	frameborder=0
	height=250
	width=550  
	src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20">
</iframe>
```

<iframe border=0 frameborder=0 height=250 width=550  
 src="https://twitframe.com/show?url=https%3A%2F%2Ftwitter.com%2Fjack%2Fstatus%2F20"></iframe>

---

### Udvikler noter

Syntaksen er inspireret af Markdowns billede syntaks. Vi havde to observationer:

1. `[Image](link.png)` linker til billedet, men `![Image](link.png)` viser billedet.

2. Den interne link syntaks er baseret på denne antagelse: `[[Min side]]` er en genvej til `[Min side](Min side)`.

For at kombinere disse to ting kan vi benytte et tredje mønster: `![[Min side]]` 
som svarer til `![Min side](Min side)` , som med billedkonventionen: Hvis titlen er det somme som linket, så skal det vises.

Der findes andre implementationer derude, f.eks. benytter Roam Research `{{embed: ((NODE_ID))}}`. Vi har også overvejet at benytte syntaksen `((Page name))`, men vi føler at `![[Side navn]]` er mere konsistent, mere velkendt og giver mere plads til, at andre symboler kan få deres egne meninger.

#### Tilpasse størrelsen af billeder
Du kan tilpasse billedstørrelser ved at benytte følgende syntaks:

For markdown billeder, så benyt `![AltText|100x100](https://url/to/billednavn.png)`

Til indlejringer, så benyt `![[billednavn.png|100x100]]`

For at billedet beholder sit højde-bredde-forhold, så undlad højden:
 `![[billednavn.png|100]]`

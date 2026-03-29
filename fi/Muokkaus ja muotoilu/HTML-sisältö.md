---
permalink: html
publish: true
mobile: true
description: 'Opi käyttämään HTML:ää Obsidianissa, mukaan lukien Markdown-renderöinnin rajoitukset ja HTML-lohkojen vaatimukset.'
---
Obsidian tukee HTML:ää, jotta voit näyttää muistiinpanosi haluamallasi tavalla tai jopa [[Verkkosivujen upottaminen|upottaa verkkosivuja]]. HTML:n salliminen muistiinpanoissa tuo mukanaan riskejä. Estääkseen haitallisen koodin aiheuttamia vahinkoja Obsidian _sanitoi_ kaiken HTML:n muistiinpanoissasi.

> [!example] 
> `<script>`-elementti antaa normaalisti suorittaa JavaScriptiä aina kun se latautuu. Jos Obsidian ei sanitoisi HTML:ää, hyökkääjä voisi saada sinut liittämään tekstiä, joka sisältää JavaScriptiä, joka poimii arkaluonteisia tietoja tietokoneeltasi ja lähettää ne hyökkääjälle.

Koska Markdown-syntaksi ei tue kaikkia muotoilutapoja, sanitoitu HTML voi olla yksi lisäkeino muistiinpanojesi laadun parantamiseen. Olemme koonneet joitakin yleisimpiä HTML:n käyttötapoja.

## HTML:n rajoitukset

Obsidianissa on tiettyjä rajoituksia HTML:n käytössä muistiinpanoissa:

### Ei Markdownia HTML:n sisällä

Obsidian ei käsittele Markdown-syntaksia HTML-elementtien sisällä. Tämä on tarkoituksellinen suunnittelupäätös suorituskyvyn optimoimiseksi ja jäsennyksen monimutkaisuuden pitämiseksi matalana suurten asiakirjojen hallinnassa.

Esimerkiksi tämä ei toimi odotetulla tavalla:

```md
<div>
Tämä **ei ole** lihavoitua ja tämä `ei ole` koodia.
</div>
```

### HTML-lohkojen on oltava itsenäisiä

HTML-lohkojen on oltava kokonaisia, eivätkä ne voi sisältää tyhjiä rivejä. Tyhjät rivit rikkovat HTML-lohkon.

Tämä toimii:

```md
<table>
<tr>
<td>Sisältö tässä</td>
</tr>
</table>
```

Tämä ei toimi oikein:

```md
<table>

<tr>

<td>Sisältö tässä</td>

</tr>

</table>
```

### Kun Markdown näyttää toimivan HTML:n sisällä

Joillakin rivin sisäisillä HTML-tunnisteilla, kuten `<span>` tai `<a>`, on rajallinen toiminnallisuus ja ne saattavat näyttää käsittelevän Markdownia, mutta tämä ei ole todellisuudessa sitä mitä tapahtuu. Markdown käsitellään HTML-kontekstin ulkopuolella.

Lisätietoja siitä, miten Obsidian käsittelee Markdownia, löydät kohdasta [[Obsidian Flavored Markdown]].

## Yleisiä HTML:n käyttötapoja

> [!info] Lisätietoja `<iframe>`-elementin käytöstä löydät kohdasta [[Verkkosivujen upottaminen]].

### Kommentit

[[Muotoilun perussyntaksi#Kommentit|Markdown-kommentit]] ovat suositeltu tapa lisätä piilotettuja kommentteja muistiinpanoihin. Joillakin Markdown-muistiinpanojen muunnostavoilla, kuten [Pandoc](https://pandoc.org), on kuitenkin rajallinen tuki Markdown-kommenteille. Näissä tapauksissa voit käyttää sen sijaan `<!-- HTML-kommentti -->`!

### Alleviivaus

Jos haluat nopeasti alleviivata kohteen muistiinpanoissasi, voit käyttää `<u>Esimerkki</u>` luodaksesi <u>alleviivattua tekstiä</u>.

### Span/Div

Span- ja div-tunnisteita voidaan käyttää mukautettujen luokkien soveltamiseen [[CSS-pätkät|CSS-pätkästä]] tai mukautetun muotoilun soveltamiseen valittuun tekstialueeseen. Esimerkiksi `<span style="font-family: cursive">tekstisi</span>` avulla voit nopeasti <span style="font-family: cursive">vaihtaa kirjasintasi</span>.

## Yliviivaus

Pitääkö yliviivata <s>tekstiä</s>? Käytä `<s>tätä</s>` yliviivaamiseen.

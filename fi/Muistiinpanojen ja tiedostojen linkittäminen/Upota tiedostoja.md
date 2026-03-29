---
permalink: embeds
cssclasses:
  - soft-embed
---
Opi upottamaan muistiinpanoja ja mediaa muistiinpanoihisi. Upottamalla tiedostoja muistiinpanoihisi voit käyttää sisältöä uudelleen koko holvissasi.

Upottaaksesi tiedoston holviisi, lisää huutomerkki (`!`) [[Sisäiset linkit|sisäisen linkin]] eteen. Voit upottaa tiedostoja missä tahansa [[Hyväksytyt tiedostomuodot|hyväksytyistä tiedostomuodoista]].

> [!tip] Vedä ja pudota -upotus
> Työpöytäversiossa voit myös raahata ja pudottaa tuettuja tiedostoja suoraan muistiinpanoosi upottaaksesi ne automaattisesti.

## Muistiinpanon upottaminen toiseen muistiinpanoon

Muistiinpanon upottaminen:

```md
![[Sisäiset linkit]]
```

Voit myös upottaa linkkejä [[Sisäiset linkit#Linkki muistiinpanon otsikkoon|otsikoihin]] ja [[Sisäiset linkit#Linkki muistiinpanon lohkoon|lohkoihin]].

```md
![[Sisäiset linkit#^b15695]]
```

Alla oleva teksti on esimerkki upotetusta lohkosta:

![[Sisäiset linkit#^b15695]]

## Kuvan upottaminen muistiinpanoon

Kuvan upottaminen:

```md
![[Engelbart.jpg]]
```

![[Engelbart.jpg#outline]]

Voit muuttaa kuvan mittasuhteita lisäämällä `|640x480` linkin kohteeseen, jossa 640 on leveys ja 480 on korkeus.

```md
![[Engelbart.jpg|100x145]]
```

Jos määrität vain leveyden, kuva skaalautuu alkuperäisen kuvasuhteensa mukaisesti. Esimerkiksi `![[Engelbart.jpg|100]]`.

![[Engelbart.jpg#outline|100]]

Voit myös upottaa ulkoisesti isännöidyn kuvan käyttämällä Markdown-linkkiä. Voit hallita leveyttä ja korkeutta samalla tavalla kuin wikilinkeissä.

```md
![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)
```

![250](https://publish-01.obsidian.md/access/f786db9fac45774fa4f0d8112e232d67/Attachments/Engelbart.jpg)

## Äänitiedoston upottaminen muistiinpanoon

Äänitiedoston upottaminen:

```md
![[Excerpt from Mother of All Demos (1968).ogg]]
```

![[Excerpt from Mother of All Demos (1968).ogg]]

## PDF:n upottaminen muistiinpanoon

PDF:n upottaminen:

```md
![[Document.pdf]]
```

Voit myös avata tietyn sivun PDF:stä lisäämällä `#page=N` linkin kohteeseen, jossa `N` on sivunumero:

```md
![[Document.pdf#page=3]]
```

Voit myös määrittää upotetun PDF-katseluohjelman korkeuden pikseleinä lisäämällä `#height=[numero]` linkin kohteeseen. Esimerkiksi:

```md
![[Document.pdf#height=400]]
```

## Luettelon upottaminen muistiinpanoon

Upottaaksesi luettelon toisesta muistiinpanosta, lisää ensin [[Sisäiset linkit#Linkki muistiinpanon lohkoon|lohkotunniste]] luetteloosi:

```md

- luettelokohta 1
- luettelokohta 2

^my-list-id
```

Linkitä sitten luetteloon käyttämällä lohkotunnistetta:

```md
![[Oma muistiinpano#^my-list-id]]
```

## Hakutulosten upottaminen

![[Hae#Hakutulosten upottaminen muistiinpanoon]]

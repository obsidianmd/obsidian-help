---
permalink: publish/social-share
---
Moltes xarxes socials mostren una previsualització enriquida del vostre lloc web quan un usuari comparteix un enllaç cap a ell. Utilitzant les [[Propietats]], podeu personalitzar com apareixen les vostres notes a la previsualització.

> [!warning] Advertència
> Les etiquetes sobreescrites en aquesta secció són **només** visibles pels rastrejadors web. Els navegadors web normals reben la pàgina sense modificar per rendiment.

## Descripció

Obsidian genera automàticament una descripció basada en el contingut de la nota, però podeu proporcionar la vostra pròpia utilitzant `description`.

```yaml
---
description: Una introducció al nostre sistema solar.
---
```

> [!note] Etiquetes meta
> `description` sobreescriu la descripció generada automàticament a `<meta name="description" content="...">` i els equivalents per a `og:description` i `twitter:description`.

## Imatge

Podeu utilitzar una imatge personalitzada per a la previsualització de l'enllaç, afegint `image` o `cover` amb una ruta cap a la imatge. La imatge ha d'estar pujada a Publish.

La ruta pot ser una ruta absoluta des de l'arrel de la vostra cambra forta:

```yaml
---
cover: "Attachments/Cover image.png"
---
```

La ruta de la imatge distingeix entre majúscules i minúscules. En el nostre exemple anterior, tenim una ruta cap a una imatge anomenada `Cover image.png`. La ruta següent no funcionarà, perquè utilitza les majúscules incorrectament.

```yaml
---
cover: "Attachments/cover Image.png"
---
```

En lloc d'una ruta absoluta a la vostra cambra forta, també podeu utilitzar una URL externa:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```

`image` i `cover` són idèntics. Utilitzeu només un dels dos.

> [!note] Etiquetes meta
> `image` i `cover` sobreescriuen la imatge generada automàticament a `<meta property="og:image" content="...">`.

Many social networks display a rich preview for your website when a user shares a link to it.  Using [[Properties]], you can customize how your notes appear in the preview.

> [!warning]
> The tags overridden in this section are **only** visible by web crawlers. Regular web browsers are served the unmodified page for performance.

## Description

Obsidian automatically generates a description based on the note content, but you can provide your own using `description`.

```yaml
---
description: An introduction to our solar system.
---
```

> [!note] Meta tags
> `description` overrides the auto-generated description in `<meta name="description" content="...">` and the equivalents for `og:description` and `twitter:description`.

## Image

You can use a custom image for the link preview, by adding `image` or `cover` with a path to the image. The image must be uploaded to Publish. 

The path can be an absolute path from the root of your vault:

```yaml
---
cover: "Attachments/Cover image.png"
---
```


The path to the image is case sensitive. In our prior example, we have a path to an image named `Cover image.png`. The below path will not work, because it is using the wrong case.

```yaml
---
cover: "Attachments/cover Image.png"
---
```


In place of an absolute path in your vault, you may also use an external url:

```yaml
---
image: "https://example.com/cover%20image.png"
---
```


`image` and `cover` are identical. Only use one of them.

> [!note] Meta tags
> `image` and `cover` overrides the auto-generated image in `<meta property="og:image" content="...">`.

---
permalink: publish/media
cssclasses:
  - soft-embed
---
[[Introduktion till Obsidian Publish|Obsidian Publish]] låter dig vara värd för anteckningar och olika mediatyper, inklusive bilder och videoklipp, med en gräns på 4 GB per webbplats. För mer information, se våra [[Accepterade filformat|accepterade filformat]].

![[Publish-begränsningar#^publish-media-limit]]

Denna sida ger tips för att hjälpa dig optimera dina mediefiler som hostas på Publish.

## Bilder

När du laddar upp bilder direkt till Publish är det bäst att använda formaten `.svg`, `.webp` och `.png`. Vi rekommenderar också att optimera alla bilder för att minska deras filstorlek samtidigt som den visuella kvaliteten bevaras.

![[Stilguide#Optimization]]

Om du använder en extern tjänst för att vara värd för en bild rekommenderar vi fortfarande att du anpassar bildens storlek efter behov enligt våra [[Bädda in filer#Bädda in en bild i en anteckning|inbäddningsinstruktioner]].

## PDF-filer

PDF-filer finns i olika storlekar och komplexiteter. För att optimera prestandan för inbäddade PDF-filer i Publish rekommenderar vi att [komprimera filerna](https://www.adobe.com/acrobat/hub/how-to-make-pdfs-smaller.html) och ta bort onödiga bilder. De flesta PDF-redigerare erbjuder dessa funktioner.

## Videor och ljud

Publish är inte optimerat för att vara värd för stora videor, GIF-filer eller ljudfiler. Att bädda in internt hostade och länkade videor rekommenderas inte om du planerar att vara värd för ett stort antal filer av dessa typer.

För att vara värd för ett begränsat antal filer rekommenderar vi att använda följande format:

**Video**
- `.mp4`
- `.webm`
- `.hevc` eller `.av1` _(Obs: Stöds inte i stor utsträckning)_

Ljud
- `.aac`
- `.mp3`
- `.opus`

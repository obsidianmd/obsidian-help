---
permalink: bases/views/cards
---
Cards is a type of [[Views|view]] you can use in [[Introduction to Bases|Bases]].

Select ![[lucide-layout-grid.svg]]  **Cards** from the view menu to display files as a gallery-like grid layout with optional cover images.

## Settings

List view settings can be configured in [[Views#View settings|View settings]].

- Card size
- Image property
- Image fit
- Image aspect ration

### Card size

Defines the width of a card.

### Image property

Cards support an optional cover image, which is [[Properties|property]] that's displayed as an image at the top of the card. The property can be any of the following:

- A link to a local [[Attachments|attachment]] `"[[link/to/attachment.jpg]]"`
- An external link (URL)
- A hex color code (`#000000`)

### Image fit

If you have an image property configured, this option will determine how the image should be displayed in the card.

- **Cover:** The image fills the card's content box. If it does not fit, the image will be cropped.
- **Contain:** The image is scaled until it fits within the card's content box. The image will not be cropped.

### Image aspect ratio

The height of the cover image is determined by its aspect ratio. The default aspect ratio is 1:1 meaning all your images will be square. Adjust this option to make the image shorter or taller.

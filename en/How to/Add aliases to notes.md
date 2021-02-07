---
aliases: alias 1, alias 2
---
### Why use aliases?
Sometimes, you might want to refer to the same file using different names depending on its context. These *alternative* names are what we call "aliases".

For example, you might want to refer to your partner by their full name "John Doe", first name "John", or a nickname "Johnno". Or you might want to refer to "artificial intelligence" by its abbreviation "AI". If you know multiple languages, you may want to refer to the same concept using a different language than what the rest of the note is written in.

### How to set aliases

Starting from version 0.9.16 and onwards, you're able to specify the "aliases" property in a note's [[YAML front matter]] like so:

```
---
aliases: [AI, Artificial Intelligence]
---
```
 1. Go to the very top of a note
 2. Insert three dashes `---`
 3. Define aliases on a new line in the format `aliases: [alias name 1, alias name 2, ...]`
 4. Insert another set of three dashes `---` on a new line

Please note that this section **must** be placed at the very top of a note to take effect.

In the future, we'll consider more user-friendly ways to manage aliases than manually writing them in front matter.

### Link with aliases

Once you've set aliases for your notes, you can write `[[alias]]` to link to the original note from any note. A redirect icon <svg viewBox="0 0 100 100" width="13" height="13" class="forward-arrow"><path fill="currentColor" stroke="currentColor" d="m9.9,89.09226c-0.03094,0 -0.05414,0 -0.08508,0c-1.06734,-0.04641 -1.91039,-0.92812 -1.89492,-1.99547c0.00774,-0.48726 1.14469,-48.13101 47.52,-49.44586l0,-13.89094c0,-0.7657 0.44086,-1.4618 1.12922,-1.78664c0.68062,-0.33258 1.5082,-0.23203 2.09601,0.2475l31.68,25.74c0.46406,0.37899 0.73476,0.9436 0.73476,1.53914c0,0.59555 -0.2707,1.16016 -0.72703,1.53914l-31.68,25.74c-0.59555,0.47953 -1.41539,0.57234 -2.10375,0.2475c-0.68836,-0.32485 -1.12922,-1.02094 -1.12922,-1.78664l0,-13.84453c-41.26289,0.75024 -43.49039,24.81961 -43.56773,25.85601c-0.06961,1.04414 -0.93586,1.84078 -1.97226,1.84078z"></path></svg> will show up in the auto-complete list and identify aliases like so:

![[Link with aliases.png]]

In the above example, if we use our arrow keys to select the desired alias (e.g. "alias 2") and hit enter to apply the link, the link will be inserted with the alias name as *display text* automatically, like so: `[[Add aliases to note|alias 2]]`.

Note: the link to alias **CANNOT** inserted as `[[alias 1]]` or `[[alias 2]]` for interoperability, so that other software can recognize it as well. It will be inserted using the file's original name. For this note: `[[Add aliases to notes]]`.

### Find unlinked mentions

After you've set aliases for a note, you can find references to your aliases under "Unlinked mentions" in your [[Backlinks]]. See [[Working with backlinks#Unlinked mentions]] for more detail.
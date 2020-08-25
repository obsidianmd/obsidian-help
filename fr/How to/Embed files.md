You can embed attachment files like images or audio in your notes. Use the `![[filename.png]]` syntax like so:

![[Engelbart.jpg]]

![[Excerpt from Mother of All Demos (1968).ogg]]

You can embed a note also, with the same syntax:

![[Accepted file formats]]

If you drag and drop an image it will be copied to your default attachment directory. The image is there as a normal file and can still be accessed through the file system. You can define the directory that images will be saved to by right clicking on it in the File explorer, and finding that option on the context menu. 

---

### Developer notes

The syntax is inspired by Markdown's image syntax. We had two observations:

 1. `[Image](link.png)` links to the image, but `![Image](link.png)` actually displays it.

 2. The internal link syntax is based on this assumption: `[[My page]]` is a shortcut (or "syntactic sugar" if you will) for `[My page](My page)`.

To combine these two things, we can come up with a third pattern:`![[My page]]` should be equivalent to `![My page](My page)` , which by the image convention, if the title is the same as the link, should display it.

There are other implementations out there, for example Roam Research uses `{{embed: ((NODE_ID))}}`. We have also considered using the `((Page name))` syntax too, but we feel like `![[Page name]]` is more consistent, more familiar, and leaves more room so that the other symbols to have their own meanings.

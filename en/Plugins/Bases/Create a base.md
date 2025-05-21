---
permalink: bases/create-base
---
## Create a new base

**Command palette:**

1. Open the **Command palette**.
2. Select
	- **Bases: Create new base** to create a base in the same folder as the active file.
	- **Bases: Insert new base** to create a base and embed it in the current file.

**File explorer:**

1. In the File explorer, right-click the folder you want to create the canvas in.
2. Select **New base**.

## Embed a base

### Embed a base file

You can embed base files [[Embed files|any other file]] using the `![[File.base]]` syntax. To specify the default view use `![[File.base#View]]`.

### Embed a base as a code block

Bases can also embedded directly into a note using a `base` code block and the [[Bases syntax|bases syntax]]. 

~~~yaml
```base
filters:
  and:
    - contains(property.tags, "example")
views:
  - type: table
    name: Table
```
~~~


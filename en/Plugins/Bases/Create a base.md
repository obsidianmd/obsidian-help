---
permalink: bases/create-base
---
[[Introduction to Bases|Bases]] let you turn any set of notes into a powerful database. Here's how you can create a base and embed it in a note. Every base can have one or more [[Views|views]] to display information in different ways.

## Create a new base

**Command palette:**

1. Open the **Command palette**.
2. Select
	- **Bases: Create new base** to create a base in the same folder as the active file.
	- **Bases: Insert new base** to create a base and embed it in the current file.

**File explorer:**

1. In the File explorer, right-click the folder you want to create the base in.
2. Select **New base**.

## Embed a base

### Embed a base file

You can embed base files in [[Embed files|any other file]] using the `![[File.base]]` syntax. To specify the default view use `![[File.base#View]]`.

### Embed a base as a code block

Bases can also embedded directly into a note using a `base` code block and the [[Bases syntax|bases syntax]]. 

~~~yaml
```base
filters:
  and:
    - file.hasTag("example")
views:
  - type: table
    name: Table
```
~~~


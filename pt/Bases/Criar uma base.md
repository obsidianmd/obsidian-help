---
permalink: bases/create-base
---
[[Introdução ao Bases|Bases]] permite criar vistas semelhantes a bases de dados das suas notas. Veja como pode criar uma base e incorporá-la numa nota. Cada base pode ter uma ou mais [[Vistas|vistas]] para apresentar informação de diferentes formas.

## Criar uma nova base

**Paleta de comandos:**

1. Abra a **Paleta de comandos**.
2. Selecione
	- **Bases: Criar nova base** para criar uma base na mesma pasta do ficheiro ativo.
	- **Bases: Inserir nova base** para criar uma base e incorporá-la no ficheiro atual.

**Explorador de ficheiros:**

1. No Explorador de ficheiros, clique com o botão direito na pasta onde pretende criar a base.
2. Selecione **Nova base**.

**Barra de ferramentas:**

- No menu vertical da barra de ferramentas, selecione **Criar nova base** para criar uma base na mesma pasta do ficheiro ativo.

## Incorporar uma base

### Incorporar um ficheiro de base

Pode incorporar ficheiros de base em [[Incorporar ficheiros|qualquer outro ficheiro]] utilizando a sintaxe `![[Ficheiro.base]]`. Para especificar a vista predefinida utilize `![[Ficheiro.base#Vista]]`.

### Incorporar uma base como bloco de código

As bases também podem ser incorporadas diretamente numa nota utilizando um bloco de código `base` e a [[Sintaxe de Bases|sintaxe de bases]].

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

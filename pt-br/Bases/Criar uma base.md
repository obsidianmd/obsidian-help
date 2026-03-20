---
permalink: bases/create-base
---
[[Introdução ao Bases|Bases]] permite criar visualizações semelhantes a bancos de dados das suas notas. Veja como você pode criar uma base e incorporá-la em uma nota. Cada base pode ter uma ou mais [[Visualizações|visualizações]] para exibir informações de diferentes maneiras.

## Criar uma nova base

**Paleta de comandos:**

1. Abra a **Paleta de comandos**.
2. Selecione
	- **Bases: Criar nova base** para criar uma base na mesma pasta do arquivo ativo.
	- **Bases: Inserir nova base** para criar uma base e incorporá-la no arquivo atual.

**Explorador de arquivos:**

1. No Explorador de arquivos, clique com o botão direito na pasta onde deseja criar a base.
2. Selecione **Nova base**.

**Faixa de opções:**

- No menu vertical da faixa de opções, selecione **Criar nova base** para criar uma base na mesma pasta do arquivo ativo.

## Incorporar uma base

### Incorporar um arquivo de base

Você pode incorporar arquivos de base em [[Incorporar arquivos|qualquer outro arquivo]] usando a sintaxe `![[Arquivo.base]]`. Para especificar a visualização padrão, use `![[Arquivo.base#Visualização]]`.

### Incorporar uma base como bloco de código

Bases também podem ser incorporadas diretamente em uma nota usando um bloco de código `base` e a [[Sintaxe de Bases|sintaxe de Bases]].

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

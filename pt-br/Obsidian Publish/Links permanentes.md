---
permalink: publish/permalinks
aliases:
  - Permalinks
---
Você pode renomear a URL das suas notas, usando _permalinks_.

Por exemplo, você pode transformar isto:

```
https://publish.obsidian.md/username/Company/About+us
```

Nisto:

```
https://publish.obsidian.md/username/about
```

Para criar um permalink para uma nota, adicione a propriedade `permalink` às suas [[Propriedades]].

```yaml
---
permalink: about
---
```

Se alguém visitar uma nota usando a URL original, será automaticamente redirecionado para o permalink.

## Redirecionar notas antigas

Renomear e remover notas é uma parte natural de manter um cofre ativo. Embora o Obsidian atualize automaticamente os links quando você move uma nota dentro do seu cofre local, outros sites ainda podem ter links para suas notas antigas no seu site [[Introdução ao Obsidian Publish|Obsidian Publish]] publicado. Você pode redirecionar leitores de uma nota para outra.

Imagine que você quer mover uma nota de uma pasta para outra:

- **Guias**
  - ~~Fazendo amigos.md~~ (removido)
- **Tutoriais**
  - *Como fazer amigos.md* (adicionado)

Após mover a nota, o Obsidian atualiza automaticamente todos os links dentro do cofre. No entanto, se você publicar a alteração no seu site Publish, quaisquer links para `/Guias/Fazendo+amigos` resultarão em um erro 404.

Para redirecionar leitores de `/Guias/Fazendo+amigos` para `/Tutoriais/Como+fazer+amigos`, você precisa adicionar um [[Apelidos|apelido]] em `Como fazer amigos.md`, a nota para a qual deseja redirecionar.

```md
---
alias: Guias/Fazendo amigos
---

# Como fazer amigos
```

> [!important] Importante
> Certifique-se de incluir o caminho completo para a nota antiga no apelido. Embora usar apenas o nome da nota como apelido funcione no seu cofre local, o Publish precisa do caminho completo da nota para poder redirecionar para ela.

Você pode redirecionar múltiplas notas adicionando um apelido para cada uma.

```md
---
aliases: 
  - Guias/Fazendo amigos
  - Desenvolvendo amizades
---

# Como fazer amigos
```

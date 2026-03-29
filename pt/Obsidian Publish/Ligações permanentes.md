---
permalink: publish/permalinks
---
Pode renomear o URL das suas notas, usando _ligações permanentes_.

Por exemplo, pode transformar isto:

```
https://publish.obsidian.md/username/Company/About+us
```

Nisto:

```
https://publish.obsidian.md/username/about
```

Para criar uma ligação permanente para uma nota, adicione a propriedade `permalink` às suas [[Propriedades]].

```yaml
---
permalink: about
---
```

Se alguém visitar uma nota usando o URL original, será automaticamente redirecionado para a ligação permanente.

## Redirecionar notas antigas

Renomear e remover notas é uma parte natural de manter um cofre ativo. Embora o Obsidian atualize automaticamente as ligações quando move uma nota dentro do seu cofre local, outros sites podem ainda ter ligações para as suas notas antigas no seu site [[Introdução ao Obsidian Publish|Obsidian Publish]] publicado. Pode redirecionar os leitores de uma nota para outra.

Imagine que quer mover uma nota de uma pasta para outra:

- **Guias**
  - ~~Fazer amigos.md~~ (removido)
- **Tutoriais**
  - *Como fazer amigos.md* (adicionado)

Depois de mover a nota, o Obsidian atualiza automaticamente todas as ligações dentro do cofre. No entanto, se publicar a alteração no seu site Publish, quaisquer ligações para `/Guias/Fazer+amigos` resultarão num erro 404.

Para redirecionar os leitores de `/Guias/Fazer+amigos` para `/Tutoriais/Como+fazer+amigos`, precisa de adicionar uma [[Alcunhas|alcunha]] em `Como fazer amigos.md`, a nota para a qual quer redirecionar.

```md
---
alias: Guias/Fazer amigos
---

# Como fazer amigos
```

> [!important] Importante
> Certifique-se de que inclui o caminho completo para a nota antiga na alcunha. Embora usar apenas o nome da nota como alcunha funcione no seu cofre local, o Publish precisa do caminho completo para a nota para poder redirecionar.

Pode redirecionar múltiplas notas adicionando uma alcunha para cada uma.

```md
---
aliases: 
  - Guias/Fazer amigos
  - Desenvolver amizades
---

# Como fazer amigos
```

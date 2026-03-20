---
permalink: callouts
publish: true
mobile: true
description: Esta página detalha como usar frases de destaque para incluir conteúdo adicional sem interromper o fluxo das suas notas.
---
Use frases de destaque para incluir conteúdo adicional sem interromper o fluxo das suas notas.

Para criar uma frase de destaque, adicione `[!info]` à primeira linha de uma citação em bloco, onde `info` é o _identificador de tipo_. O identificador de tipo determina a aparência e o comportamento da frase de destaque. Para ver todos os tipos disponíveis, consulte [[#Tipos suportados]]. Frases de destaque também são suportadas nativamente no [[Introdução ao Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Aqui está o título de uma frase de destaque
> Aqui está um bloco de frase de destaque.
> Ele suporta **Markdown**, [[Links internos|Links wiki]] e [[Incorporar arquivos|incorporações]]!
> ![[Engelbart.jpg]]
```

> [!info] Aqui está o título de uma frase de destaque
> Aqui está um bloco de frase de destaque.
> Ele suporta **Markdown**, [[Links internos|Links wiki]] e [[Incorporar arquivos|incorporações]]!
> ![[Engelbart.jpg]]

Você pode inserir uma frase de destaque padrão `[!note]` usando o [[Paleta de comandos|comando]] `Inserir frase de destaque`. O cursor se posiciona automaticamente no campo do nome da frase de destaque, permitindo que você exclua o nome padrão e digite um novo antes de editar o conteúdo.

Para envolver conteúdo existente em uma frase de destaque, selecione o texto (incluindo listas, blocos de código, etc.) e execute o comando `Inserir frase de destaque`. O conteúdo selecionado será automaticamente incluído na frase de destaque.

Na [[Visualizações e modo de edição#Visualização ao vivo|Visualização ao vivo]], você também pode clicar com o botão direito no nome da frase de destaque para alterar o tipo da frase de destaque.


### Alterar o título

Por padrão, o título da frase de destaque é seu identificador de tipo em letras iniciais maiúsculas. Você pode alterá-lo adicionando texto após o identificador de tipo:

```markdown
> [!tip] Frases de destaque podem ter títulos personalizados
> Como esta aqui.
```

> [!tip] Frases de destaque podem ter títulos personalizados
> Como esta aqui.

Você pode até omitir o corpo para criar frases de destaque apenas com título:

```markdown
> [!tip] Frase de destaque apenas com título
```

> [!tip] Frase de destaque apenas com título

### Frases de destaque dobráveis

Você pode tornar uma frase de destaque dobrável adicionando um sinal de mais (`+`) ou um sinal de menos (`-`) diretamente após o identificador de tipo.

Um sinal de mais expande a frase de destaque por padrão, e um sinal de menos a recolhe.

```markdown
> [!faq]- As frases de destaque são dobráveis?
> Sim! Em uma frase de destaque dobrável, o conteúdo fica oculto quando a frase de destaque está recolhida.
```

> [!faq]- As frases de destaque são dobráveis?
> Sim! Em uma frase de destaque dobrável, o conteúdo fica oculto quando recolhida.

### Frases de destaque aninhadas

Você pode aninhar frases de destaque em múltiplos níveis.

```markdown
> [!question] As frases de destaque podem ser aninhadas?
> > [!todo] Sim!, elas podem.
> > > [!example] Você pode até usar múltiplas camadas de aninhamento.
```

> [!question] As frases de destaque podem ser aninhadas?
> > [!todo] Sim!, elas podem.
> > > [!example] Você pode até usar múltiplas camadas de aninhamento.

### Personalizar frases de destaque

[[Trechos CSS]] e [[Plugins da comunidade]] podem definir frases de destaque personalizadas, ou até sobrescrever a configuração padrão.

Para definir uma frase de destaque personalizada, crie o seguinte bloco CSS:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

O valor do atributo `data-callout` é o identificador de tipo que você deseja usar, por exemplo `[!custom-question-type]`.

- `--callout-color` define a cor de fundo usando números (0–255) para vermelho, verde e azul.
- `--callout-icon` pode ser um ID de ícone do [lucide.dev](https://lucide.dev), ou um elemento SVG.

> [!warning] Nota sobre versões de ícones lucide
> O Obsidian atualiza os ícones Lucide periodicamente. A versão atual incluída é mostrada abaixo; use esses ou ícones anteriores em frases de destaque personalizadas.
> ![[Créditos#^lucide]]

> [!tip] Ícones SVG
> Em vez de usar um ícone Lucide, você também pode usar um elemento SVG como ícone da frase de destaque.
>
> ```css
> --callout-icon: '<svg>...svg personalizado...</svg>';
> ```

### Tipos suportados

Você pode usar vários tipos e apelidos de frases de destaque. Cada tipo vem com uma cor de fundo e um ícone diferentes.

Para usar esses estilos padrão, substitua `info` nos exemplos por qualquer um desses tipos, como `[!tip]` ou `[!warning]`. Os tipos de frases de destaque também podem ser alterados clicando com o botão direito em uma frase de destaque no modo Visualização ao vivo.

A menos que você [[#Personalizar frases de destaque|personalize as frases de destaque]], qualquer tipo não suportado assume o padrão do tipo `note`. O identificador de tipo não diferencia maiúsculas de minúsculas.

> [!note]
> ```md
> > [!note]
> > Lorem ipsum dolor sit amet
> ```

---

> [!abstract]-
> ```md
> > [!abstract]
> > Lorem ipsum dolor sit amet
> ```

Apelidos: `summary`, `tldr`

---

> [!info]-
> ```md
> > [!info]
> > Lorem ipsum dolor sit amet
> ```

---

> [!todo]-
> ```md
> > [!todo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!tip]-
> ```md
> > [!tip]
> > Lorem ipsum dolor sit amet
> ```

Apelidos: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Apelidos: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Apelidos: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Apelidos: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Apelidos: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Apelido: `error`

---

> [!bug]-
> ```md
> > [!bug]
> > Lorem ipsum dolor sit amet
> ```

---

> [!example]-
> ```md
> > [!example]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!quote]
> > Lorem ipsum dolor sit amet
> ```

Apelido: `cite`

---
permalink: callouts
publish: true
mobile: true
description: Esta página detalha como usar callouts para incluir conteúdo adicional sem interromper o fluxo das suas notas.
---
Utilize blocos de destaque para incluir conteúdo adicional sem interromper o fluxo das suas notas.

Para criar um bloco de destaque, adicione `[!info]` à primeira linha de uma citação em bloco, onde `info` é o _identificador de tipo_. O identificador de tipo determina a aparência do bloco de destaque. Para ver todos os tipos disponíveis, consulte [[#Tipos suportados]]. Os blocos de destaque também são suportados nativamente no [[Introdução ao Obsidian Publish|Obsidian Publish]].

```markdown
> [!info] Aqui está um título de bloco de destaque
> Aqui está um bloco de destaque.
> Suporta **Markdown**, [[Ligações internas|Wikilinks]] e [[Incorporar ficheiros|incorporações]]!
> ![[Engelbart.jpg]]
```

> [!info] Aqui está um título de bloco de destaque
> Aqui está um bloco de destaque.
> Suporta **Markdown**, [[Ligações internas|Wikilinks]] e [[Incorporar ficheiros|incorporações]]!
> ![[Engelbart.jpg]]

Pode inserir um bloco de destaque `[!note]` predefinido utilizando o [[Paleta de comando|comando]] `Inserir chamamento`. O cursor posiciona-se automaticamente no campo do nome do bloco de destaque, permitindo-lhe eliminar o nome predefinido e escrever um novo antes de editar o conteúdo.

Para envolver conteúdo existente num bloco de destaque, selecione o texto (incluindo listas, blocos de código, etc.) e execute o comando `Inserir chamamento`. O conteúdo selecionado será automaticamente incluído no bloco de destaque.

Na [[Vistas e modo de edição#Pré-visualização em direto|Pré-visualização em direto]], também pode clicar com o botão direito no nome do bloco de destaque para alterar o tipo de bloco de destaque.


### Alterar o título

Por predefinição, o título do bloco de destaque é o seu identificador de tipo em formato de título. Pode alterá-lo adicionando texto após o identificador de tipo:

```markdown
> [!tip] Os blocos de destaque podem ter títulos personalizados
> Como este.
```

> [!tip] Os blocos de destaque podem ter títulos personalizados
> Como este.

Pode até omitir o corpo para criar blocos de destaque apenas com título:

```markdown
> [!tip] Bloco de destaque apenas com título
```

> [!tip] Bloco de destaque apenas com título

### Blocos de destaque recolhíveis

Pode tornar um bloco de destaque recolhível adicionando um sinal de mais (`+`) ou um sinal de menos (`-`) diretamente após o identificador de tipo.

Um sinal de mais expande o bloco de destaque por predefinição, e um sinal de menos recolhe-o.

```markdown
> [!faq]- Os blocos de destaque são recolhíveis?
> Sim! Num bloco de destaque recolhível, o conteúdo fica oculto quando o bloco de destaque está recolhido.
```

> [!faq]- Os blocos de destaque são recolhíveis?
> Sim! Num bloco de destaque recolhível, o conteúdo fica oculto quando está recolhido.

### Blocos de destaque aninhados

Pode aninhar blocos de destaque em múltiplos níveis.

```markdown
> [!question] Os blocos de destaque podem ser aninhados?
> > [!todo] Sim!, podem.
> > > [!example] Pode até usar múltiplas camadas de aninhamento.
```

> [!question] Os blocos de destaque podem ser aninhados?
> > [!todo] Sim!, podem.
> > > [!example] Pode até usar múltiplas camadas de aninhamento.

### Personalizar blocos de destaque

[[Fragmentos CSS]] e [[Plugins da comunidade]] podem definir blocos de destaque personalizados, ou até substituir a configuração predefinida.

Para definir um bloco de destaque personalizado, crie o seguinte bloco CSS:

```css
.callout[data-callout="custom-question-type"] {
    --callout-color: 0, 0, 0;
    --callout-icon: lucide-alert-circle;
}
```

O valor do atributo `data-callout` é o identificador de tipo que pretende utilizar, por exemplo `[!custom-question-type]`.

- `--callout-color` define a cor de fundo utilizando números (0–255) para vermelho, verde e azul.
- `--callout-icon` pode ser um ID de ícone de [lucide.dev](https://lucide.dev), ou um elemento SVG.

> [!warning] Nota sobre versões de ícones lucide
> O Obsidian atualiza os ícones Lucide periodicamente. A versão atual incluída é mostrada abaixo; utilize estes ou ícones anteriores em blocos de destaque personalizados.
> ![[Créditos#^lucide]]

> [!tip] Ícones SVG
> Em vez de utilizar um ícone Lucide, também pode usar um elemento SVG como ícone do bloco de destaque.
>
> ```css
> --callout-icon: '<svg>...svg personalizado...</svg>';
> ```

### Tipos suportados

Pode utilizar vários tipos e alcunhas de blocos de destaque. Cada tipo vem com uma cor de fundo e ícone diferentes.

Para utilizar estes estilos predefinidos, substitua `info` nos exemplos por qualquer um destes tipos, como `[!tip]` ou `[!warning]`. Os tipos de blocos de destaque também podem ser alterados clicando com o botão direito num bloco de destaque no modo de pré-visualização em direto.

A menos que [[#Personalizar blocos de destaque|personalize os blocos de destaque]], qualquer tipo não suportado assume o tipo `note` por predefinição. O identificador de tipo não diferencia maiúsculas de minúsculas.

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

Alcunhas: `summary`, `tldr`

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

Alcunhas: `hint`, `important`

---

> [!success]-
> ```md
> > [!success]
> > Lorem ipsum dolor sit amet
> ```

Alcunhas: `check`, `done`

---

> [!question]-
> ```md
> > [!question]
> > Lorem ipsum dolor sit amet
> ```

Alcunhas: `help`, `faq`

---

> [!warning]-
>  ```md
> > [!warning]
> > Lorem ipsum dolor sit amet
> ```

Alcunhas: `caution`, `attention`

---

> [!failure]-
> ```md
> > [!failure]
> > Lorem ipsum dolor sit amet
> ```

Alcunhas: `fail`, `missing`

---

> [!danger]-
> ```md
> > [!danger]
> > Lorem ipsum dolor sit amet
> ```

Alcunha: `error`

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

Alcunha: `cite`

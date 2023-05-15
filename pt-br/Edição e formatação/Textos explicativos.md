---
aliases:
- Como/Usar frases de destaque
---

Use chamadas para incluir conteúdo adicional sem interromper o fluxo de suas anotações.

Para criar um texto explicativo, adicione `[!info]` à primeira linha de uma citação em bloco, onde `info` é o _identificador de tipo_. O identificador de tipo determina a aparência e a aparência do texto explicativo. Para ver todos os tipos disponíveis, consulte [[#Tipos suportados]].

```remarcação
> [!info]
> Aqui está um bloco de texto explicativo.
> Suporta **Markdown**, [[Internal link|Wikilinks]], e [[Embed files|embeds]]!
> ![[og-image.png]]
```

> [!info]
> Aqui está um bloco de texto explicativo.
> Suporta **Markdown**, [[Links internos|Wikilinks]] e [[Incorporando arquivos|embeds]]!
> ![[og-image.png]]

Callouts também são suportados nativamente em [[Introdução ao Obsidian Publish|Obsidian Publish]].

> [!nota]
> Se você também estiver usando o plug-in Admonitions, atualize-o para pelo menos a versão 8.0.0 para evitar problemas com o novo recurso de chamada.

### Mude o título

Por padrão, o título da chamada é seu identificador de tipo em maiúsculas e minúsculas. Você pode alterá-lo adicionando texto após o identificador de tipo:

```remarcação
> [!dica] As frases de destaque podem ter títulos personalizados
> Como este.
```

> [!dica] As frases de destaque podem ter títulos personalizados
> Como este.

Você pode até mesmo omitir o corpo para criar chamadas somente de título:

```remarcação
> [!dica] Texto explicativo apenas do título
```

> [!dica] Texto explicativo apenas do título

### Chamadas dobráveis

Você pode tornar uma legenda dobrável adicionando um sinal de mais (+) ou menos (-) logo após o identificador de tipo.

Um sinal de mais expande o texto explicativo por padrão e um sinal de menos o reduz.

```remarcação
> [!faq]- Os textos explicativos são dobráveis?
> Sim! Em uma legenda dobrável, o conteúdo fica oculto quando a legenda é recolhida.
```

> [!faq]- Os textos explicativos são dobráveis?
> Sim! Em uma legenda dobrável, o conteúdo fica oculto quando recolhido.

### Chamadas aninhadas

Você pode aninhar chamadas em vários níveis.

```remarcação
> [!question] As frases de destaque podem ser aninhadas?
> > [!todo] Sim!, podem.
> > > [!exemplo] Você pode até usar várias camadas de aninhamento.
```

> [!question] As frases de destaque podem ser aninhadas?
> > [!todo] Sim!, podem.
> > > [!exemplo] Você pode até usar várias camadas de aninhamento.

### Personalizar frases de destaque

[[Trechos de CSS]] e [[Plugins da comunidade]] podem definir textos explicativos personalizados ou até sobrescrever a configuração padrão.

Para definir uma chamada personalizada, crie o seguinte bloco CSS:

```css
.callout[data-callout="custom-question-type"] {
     --cor da legenda: 0, 0, 0;
     --ícone de chamada: lúcido-alerta-círculo;
}
```

O valor do atributo `data-callout` é o identificador de tipo que você deseja usar, por exemplo `[!custom-question-type]`.

- `--callout-color` define a cor de fundo usando números (0–255) para vermelho, verde e azul.
- `--callout-icon` pode ser um ID de ícone de [lucide.dev](https://lucide.dev) ou um elemento SVG.

> [!dica] Ícones SVG
> Em vez de usar um ícone do Lucide, você também pode usar um elemento SVG como ícone de texto explicativo.
>
> ```css
> --callout-icon: '<svg>...svg personalizado...</svg>';
> ```

### Tipos suportados

Você pode usar vários tipos de callout e aliases. Cada tipo vem com uma cor de fundo e um ícone diferentes.

Para usar esses estilos padrão, substitua `info` nos exemplos por qualquer um desses tipos, como `[!tip]` ou `[!warning]`.

A menos que você [[#Customize callouts]], qualquer tipo não suportado assume como padrão o tipo `note`. O identificador de tipo não diferencia maiúsculas de minúsculas.

> [!nota]
> ```md
> > [!nota]
> > Lorem ipsum dolor sit amet
> ```

---

> [!resumo]
> ```md
> > [!resumo]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `summary`, `tldr`

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

> [!dica]-
> ```md
> > [!dica]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `dica`, `importante`

---

> [!sucesso]-
> ```md
> > [!sucesso]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `check`, `done`

---

> [!pergunta]-
> ```md
> > [!pergunta]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `ajuda`, `faq`

---

> [!aviso]-
> ```md
> > [!aviso]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `cuidado`, `atenção`

---

> [!falha]-
> ```md
> > [!falha]
> > Lorem ipsum dolor sit amet
> ```

Aliases: `falha`, `falta`

---

> [!perigo]-
> ```md
> > [!perigo]
> > Lorem ipsum dolor sit amet
> ```

Alias: `erro`

---

> [!bug]-
> ```md
> > [!erro]
> > Lorem ipsum dolor sit amet
> ```

---

> [!exemplo]-
> ```md
> > [!exemplo]
> > Lorem ipsum dolor sit amet
> ```

---

> [!quote]-
> ```md
> > [!citação]
> > Lorem ipsum dolor sit amet
> ```

Alias: `cite`
---
permalink: publish/customize
publish: true
description: Aprenda como personalizar a aparência e o estilo do seu site do Obsidian Publish.
---
Esta página explica como pode personalizar a aparência e o comportamento do seu site [[Introdução ao Obsidian Publish|Obsidian Publish]].

## Recursos estáticos

Pode personalizar o seu site [[Publicar o seu conteúdo#Publicar notas|publicando]] os seguintes ficheiros no seu site:

- `publish.css` para adicionar CSS personalizado
- `publish.js` para adicionar JavaScript personalizado
- `favicon-32x32.png` para definir o favicon

**Notas:**

- As [variáveis CSS para o Publish](https://docs.obsidian.md/Reference/CSS+variables/Publish/Publish) podem ser encontradas no nosso site de Documentação.
- Uma vez que o Obsidian não suporta ficheiros CSS ou JavaScript, precisa de utilizar outra aplicação para os criar e editar.
- Tanto o `publish.css` como o `publish.js` devem estar localizados no diretório raiz (`/`) do seu cofre.
- Por predefinição, `publish.css` e `publish.js` não aparecem no explorador de ficheiros, mas pode publicá-los a partir da caixa de diálogo **Publicar alterações**.
- Para utilizar JavaScript personalizado com `publish.js`, precisa de ter [[Domínios personalizados]].

Para favicons, o Obsidian Publish suporta as seguintes convenções de nomenclatura, onde `32` representa as dimensões do ícone em pixels:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Recomendamos que forneça uma ou mais das seguintes dimensões:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

Tem flexibilidade para colocar favicons em qualquer lugar dentro do cofre, desde que sejam publicados no seu site.

## Utilizar um tema da comunidade

Para utilizar um dos temas da comunidade no seu site:

1. Abra o seu cofre no explorador de ficheiros predefinido do seu SO.
2. Aceda à pasta de definições do cofre (predefinição: `.obsidian`).
3. Abra a pasta `themes`.
4. Copie o ficheiro CSS do tema que pretende utilizar no seu site.
5. Cole o ficheiro na pasta raiz do seu cofre.
6. Renomeie o ficheiro CSS para `publish.css`.
7. [[Publicar o seu conteúdo#Publicar notas|Publique]] `publish.css`.

**Notas:**

- Se o estilo não atualizar dentro de alguns minutos, tente limpar a cache do seu navegador.
- Pode alternar entre o modo claro e escuro nas [[Gerir sites#Ver opções do site|opções do site]].
- Muitos temas da comunidade utilizam **Style Settings** para estilização personalizada, mas estas definições não funcionam no Obsidian Publish.

> [!tip] Desenvolver temas
> Não encontra o tema certo para si? Aprenda como [Construir um tema para o Publish](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/Build+a+Publish+theme) por conta própria.

## Ativar funcionalidades de interface

Pode ativar ou desativar várias funcionalidades de interface no seu site, como a vista de grafo ou um índice.

Explore as funcionalidades de interface disponíveis nas secções **Experiência de leitura** e **Componentes** nas [[Gerir sites#Ver opções do site|opções do site]].

### Personalizar navegação

No Obsidian Publish, tem a possibilidade de personalizar a ordem de navegação e a apresentação de ficheiros e pastas dentro do [[Explorador de ficheiros]] do Publish. Os itens de navegação são listados por ordem de publicação por predefinição. Notas não publicadas não aparecerão neste painel.

#### Aceder às opções de personalização de navegação

1. Na [[Barra de ferramentas]], selecione **Publicar alterações** ![[lucide-send.svg#icon]] ou abra a [[Paleta de comando]] e escreva **Publish: Publicar alterações...**
2. Na caixa de diálogo **Publicar alterações**, selecione **Mudar configurações do site** ![[lucide-cog.svg#icon]].
3. Em **Definições de componentes**, junto a **Personalizar navegação**, selecione o botão **gerir**.

Aparecerá uma nova janela pop-up intitulada **Navegação** sobre a janela **Mudar configurações do site**.

#### Ajustar itens de navegação

Na secção intitulada **Pré-visualização de navegação**, pode ajustar a ordem de apresentação do seu conteúdo publicado.

1. Selecione a pasta ou nota que pretende ajustar.
2. Arraste a nota ou pasta para cima ou para baixo até ao local pretendido.
3. No canto inferior direito da janela **Navegação**, selecione **Feito**.

O Publish enviará as suas alterações de navegação para o seu site.

#### Ocultar e mostrar itens de navegação

Se existirem notas ou pastas que publicou, mas que não pretende que sejam visíveis na sua Navegação, pode optar por ocultar esses itens.

1. Selecione a pasta ou nota que pretende ajustar.
2. Clique com o botão direito e selecione **Ocultar na navegação**. O item deverá agora desaparecer da **Pré-visualização de navegação**.
3. No canto inferior direito da janela **Navegação**, selecione **Feito**.

O Publish enviará as suas alterações de navegação para o seu site.

> [!tip] Pode **Mostrar ocultos** selecionando a caixa de seleção à direita do título **Pré-visualização de navegação**

## Perguntas frequentes

**Posso mover ficheiros de uma pasta para outra dentro da Navegação?**

Não. A estrutura de navegação de ficheiros para notas dentro de pastas precisa de ser mantida. Pode ajustar a ordem das notas dentro de pastas (incluindo a raiz do cofre) e a ordem das pastas dentro de outras pastas.

**Posso editar a ordem de várias notas e pastas antes de selecionar Feito?**

Sim.

**Como reverter estas alterações?**

- **Ordem de apresentação**: Selecione o ícone **Restaurar ao padrão** (seta de rotação no sentido anti-horário) junto a **Ordem de apresentação dos itens de navegação**. Isto restaurará os seus itens de navegação para a ordem alfabética.
- **Estado oculto**: Selecione o ícone **Restaurar ao padrão** (seta de rotação no sentido anti-horário) junto a **Ocultar páginas ou pastas da navegação**. Isto restaurará os seus itens de navegação ocultos para um estado visível.

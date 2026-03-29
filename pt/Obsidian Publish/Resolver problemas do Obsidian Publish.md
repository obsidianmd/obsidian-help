---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Esta página detalha alguns problemas comuns que você pode encontrar ao usar o Obsidian Publish.
---
Esta página lista problemas comuns que pode encontrar com o [[Introdução ao Obsidian Publish|Obsidian Publish]] e como resolvê-los.

Certifique-se de que revê primeiro [[Ficheiros multimédia]] e [[Limitações do Publish|Limitações do Publish]].

## Geral

### Publicar notas

**Estou a receber um erro de hash ao tentar publicar uma nota.**

Está a utilizar um [[Plugins da comunidade|plugin da comunidade]] que altera a hora de modificação do ficheiro ao atualizar? Se sim, este plugin pode estar a entrar em conflito com o Publish. Por favor, comunique o erro ao programador do plugin para resolver o problema.

**Estou a receber um erro de rede estranho e tenho um site Publish muito grande.**

É provável que precisemos de examinar a sua base de dados. Por favor, [[Ajuda e suporte#Contactar o suporte do Obsidian|contacte o suporte do Obsidian]] para obter assistência.

## CSS e temas

**O meu CSS na minha [[Pasta de configuração]] não funciona no Publish. Porquê?**

O Publish não lê a partir da pasta de configuração. Em vez disso, terá de criar um ficheiro `publish.css` no diretório de nível superior do seu cofre de publicação. Pode saber mais sobre isto em [[Personalizar o seu site]].

**O meu CSS não tem o mesmo aspeto no Publish como tem na aplicação. Porquê?**

O CSS do Obsidian Publish não é exatamente o mesmo que na aplicação. Recomendamos [desenvolver qualquer CSS e temas](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) especificamente para o Publish desde o início.

Em _geral_, o que funciona na [[Vistas e modo de edição#Vista de leitura|vista de leitura]] tem uma forte probabilidade de funcionar no Publish.

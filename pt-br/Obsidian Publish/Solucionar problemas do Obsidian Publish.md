---
permalink: publish/troubleshoot
publish: true
mobile: true
description: Esta página detalha alguns problemas comuns que você pode encontrar ao usar o Obsidian Publish
---
Esta página lista problemas comuns que você pode encontrar com o [[Introdução ao Obsidian Publish|Obsidian Publish]] e como resolvê-los.

Certifique-se de revisar [[Arquivos de mídia]] e [[Limitações do Publish|Limitações do Publish]] primeiro.

## Geral

### Publicando notas

**Estou recebendo um erro de hash ao tentar publicar uma nota.**

Você está usando um [[Plugins da comunidade|plugin da comunidade]] que edita o horário de modificação do arquivo ao atualizar? Se sim, esse plugin pode estar entrando em conflito com o Publish. Por favor, registre um relatório de bug com o desenvolvedor do plugin para resolver o problema.

**Estou recebendo um erro de rede estranho e tenho um site Publish muito grande.**

É provável que precisemos examinar seu banco de dados. Por favor, [[Ajuda e suporte#Contatar o suporte do Obsidian|entre em contato com o suporte do Obsidian]] para obter assistência.

## CSS e temas

**Meu CSS na minha [[Pasta de configuração]] não funciona no Publish. Por quê?**

O Publish não lê da pasta de configuração. Em vez disso, você precisará criar um arquivo `publish.css` no diretório raiz do seu cofre de publicação. Você pode saber mais sobre isso em [[Personalizar seu site]].

**Meu CSS não aparece igual no Publish como aparece no aplicativo. Por quê?**

O CSS do Obsidian Publish não é exatamente o mesmo do aplicativo. Recomendamos [desenvolver qualquer CSS e temas](https://docs.obsidian.md/Themes/Obsidian+Publish+themes/About+Obsidian+Publish+themes) especificamente para o Publish do zero.

Em _geral_, o que funciona na [[Visualizações e modo de edição#Visualização de leitura|Visualização de leitura]] tem uma grande probabilidade de funcionar no Publish.

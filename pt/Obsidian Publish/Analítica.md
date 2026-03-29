---
permalink: publish/analytics
---
## Pré-requisitos

Para usar analítica no seu site [[Introdução ao Obsidian Publish|Obsidian Publish]], precisa de um [[Domínios personalizados|domínio personalizado]].

> [!important] Importante
> Antes de ativar a analítica, certifique-se de que as leis e regulamentos locais permitem rastrear os seus visitantes. Dependendo das ferramentas que utiliza, poderá precisar de adicionar um banner de consentimento ao seu site.

## Google Analytics

Para ativar o Google Analytics no seu site Obsidian Publish:

1. Na barra de ferramentas, à esquerda da janela da aplicação, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
2. Na caixa de diálogo **Publicar alterações**, clique em **Mudar configurações do site** ![[lucide-cog.svg#icon]].
3. Em **Código de recolha de dados do Google Analytics**, introduza o seu código de rastreio.

Para usar o Google Tag Manager em vez do Google Analytics, utilize JavaScript personalizado para adicionar os seus próprios scripts.

## Plausible, Fathom e outros serviços de analítica

Pode adicionar a maioria dos serviços de analítica ao seu site através do seu ficheiro [[Personalizar o seu site|publish.js]]. Certifique-se de que substitui `yourdomain.com` pelo seu domínio e o `src` do script pelo script do seu fornecedor de analítica.

Aqui está um exemplo usando o [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

A mesma abordagem pode ser usada para o [Fathom Analytics](https://usefathom.com/). Note a alteração de `data-domain` para `data-site` — diferentes fornecedores de analítica podem ter um formato diferente para a forma como o script deve ser inserido.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Resolução de problemas

Para verificar se o seu site está a usar o seu serviço de analítica, desative quaisquer extensões de browser que bloqueiem anúncios, como o uBlock Origin, que possam impedir a execução do script de rastreio.

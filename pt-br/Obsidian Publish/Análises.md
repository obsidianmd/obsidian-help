---
permalink: publish/analytics
aliases:
  - Obsidian Publish/Configure o Google Analytics
---
## Pré-requisitos

Para usar análises em seu site do [[Introdução ao Obsidian Publish|Obsidian Publish]], você precisa de um [[Domínios personalizados|domínio personalizado]].

> [!important] Importante
> Antes de ativar análises, certifique-se de que suas leis e regulamentos locais permitem que você rastreie seus visitantes. Dependendo das ferramentas que você usa, pode ser necessário adicionar um banner de consentimento ao seu site.

## Google Analytics

Para ativar o Google Analytics em seu site do Obsidian Publish:

1. No menu lateral, à esquerda da janela do aplicativo, clique em **Publicar alterações** ![[lucide-send.svg#icon]].
2. Na caixa de diálogo **Publicar alterações**, clique em **Alterar configurações do site** ![[lucide-cog.svg#icon]].
3. Em **Código de rastreamento do Google Analytics**, insira seu código de rastreamento.

Para usar o Google Tag Manager em vez do Google Analytics, use JavaScript personalizado para adicionar seus próprios scripts.

## Plausible, Fathom e outros serviços de análise

Você pode adicionar a maioria dos serviços de análise ao seu site por meio do arquivo [[Personalizar seu site|publish.js]]. Certifique-se de substituir `yourdomain.com` pelo seu domínio e o `src` do script pelo script do seu provedor de análises.

Aqui está um exemplo usando [Plausible Analytics](https://plausible.io/)

```js
var analyticsScript = document.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-domain', 'yourdomain.com');
analyticsScript.src = 'https://plausible.io/js/plausible.js';
document.head.appendChild(analyticsScript);
```

 A mesma abordagem pode ser usada para o [Fathom Analytics](https://usefathom.com/). Observe a mudança de `data-domain` para `data-site` — diferentes provedores de análises podem ter um formato diferente para como o script deve ser inserido.

```javascript
var fathom = analyticsScript.createElement('script');
analyticsScript.defer = true;
analyticsScript.setAttribute('data-site', 'yourdomain.com');
analyticsScript.src = 'https://cdn.usefathom.com/script.js';
document.head.appendChild(analyticsScript);
```

## Solução de problemas

Para verificar se seu site está usando seu serviço de análises, desative quaisquer extensões de navegador que bloqueiem anúncios, como o uBlock Origin, que podem impedir a execução do script de rastreamento.

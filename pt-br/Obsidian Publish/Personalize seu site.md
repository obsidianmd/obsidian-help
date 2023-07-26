Esta página explica como você pode personalizar a aparência do seu site [[Introdução ao Obsidian Publish|Obsidian Publish]].

## Ativos estáticos

Você pode personalizar seu site [[Publicar e cancelar a publicação de notas#Publish notes|publishing]] os seguintes arquivos em seu site:

- `publish.css` para adicionar CSS personalizado
- `publish.js` para adicionar JavaScript personalizado
- `favicon-32x32.png` para definir o favicon

**Notas:**

- Como o Obsidian não suporta arquivos CSS ou JavaScript, você precisa usar outro aplicativo para criá-los e editá-los.
- Por padrão, `publish.css` e `publish.js` não aparecem no explorador de arquivos, mas você ainda pode publicá-los na caixa de diálogo **Publicar alterações**.
- Para usar JavaScript customizado com `publish.js`, você precisa [[Configurar um domínio personalizado]].

Para favicons, o Obsidian Publish suporta as seguintes convenções de nomenclatura, onde `32` são as dimensões do ícone em pixels:

- `favicon-32.png`
- `favicon-32x32.png`
- `favicon.ico`

Recomendamos que você forneça uma ou mais das seguintes dimensões:

- `favicon-32x32.png`
- `favicon-128x128.png`
- `favicon-152x152.png`
- `favicon-167x167.png`
- `favicon-180x180.png`
- `favicon-192x192.png`
- `favicon-196x196.png`

## Use um tema da comunidade

Para usar um dos temas da comunidade em seu site:

1. Abra seu cofre no explorador de arquivos padrão para seu sistema operacional.
2. Vá para a pasta de configurações do Vault (padrão: `.obsidian`).
3. Abra a pasta `themes`.
4. Copie o arquivo CSS do tema que deseja usar em seu site.
5. Cole o arquivo na pasta raiz do seu cofre.
6. Renomeie o arquivo CSS para `publish.css`.
7. [[Publicar e cancelar a publicação de notas#Publish notes|Publish]] `publish.css`.

**Notas:**

- Se o estilo não mudar em alguns minutos, pode ser necessário atualizar o cache do navegador.
- Você pode alternar entre o modo claro e escuro nas [[Gerenciar sites#Ver opções do site|opções do site]].

## Ativar recursos da interface do usuário

Você pode alternar vários recursos de interface do usuário para seu site, como a exibição de gráfico ou um sumário.

Navegue pelos recursos de IU disponíveis nas seções **Experiência de leitura** e **Componentes** em [[Gerenciar sites#Exibir opções do site|opções do site]]
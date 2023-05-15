Saiba como você pode estender o Obsidian com mais recursos criando seus próprios plugins e compartilhando-os com a comunidade.

## Começo rápido

A maneira mais fácil de começar a desenvolver o plug-in Obsidian é usando o [Plugin de amostra Obsidian](https://github.com/obsidianmd/obsidian-sample-plugin).

> [!danger] Antes de começar
> Não desenvolva plugins em seu cofre principal. Quando você desenvolve um plug-in, um erro pode levar a modificações não intencionais em seu cofre. Você também corre o risco de excluir permanentemente seu cofre.

1. Clone o plug-in de amostra.

```bash
git clone https://github.com/obsidianmd/obsidian-sample-plugin.git
mv obsidian-sample-plugin your-plugin-id
cd seu-plugin-id
```

2. Instale dependências usando NPM ou Yarn.

```bash
# Usando NPM
npm instalar

# Usando Fios
instalação de fio
```

3. Recrie o plug-in sempre que editar o código.

```bash
# Usando NPM
npm run dev

# Usando Fios
desenvolvedor de corrida de fios
```

4. Instale o plug-in em seu cofre.

```bash
mkdir $YOUR_VAULT_PATH/.obsidian/plugins/seu-plugin-id
mv main.js styles.css manifest.json $VAULT_PATH/.obsidian/plugins/your-plugin-id
```

5. Reinicie o Obsidian.

Para obter mais ajuda na criação de plug-ins para Obsidian, confira os seguintes recursos:

- Para documentação de referência da API, consulte a [API Obsidian](https://github.com/obsidianmd/obsidian-api).
- Para obter um guia mais detalhado sobre como começar a desenvolver plugins, confira os [Documentos do Desenvolvedor de Plugins Obsidian](https://marcus.se.net/obsidian-plugin-docs) por [Marcus Olsson](https ://marcus.se.net).
- Para um passo a passo em vídeo sobre o desenvolvimento de plug-ins, confira nossa lista de reprodução do YouTube sobre como [Criar seu primeiro plug-in Obsidian](https://www.youtube.com/playlist?list=PLIDCb22ZUTBnMCbJa-st4PD5T3Olep078).

## Envie seu plug-in

Quando estiver pronto, você pode compartilhar seu plug-in com a comunidade Obsidian enviando-o.

Para obter um guia detalhado sobre como enviar seu plug-in, consulte [Como adicionar seu plug-in à lista de plug-ins da comunidade](https://publish.obsidian.md/hub/04+-+Guides%2C+Workflows% 2C+%26+Cursos/Guias/Como+adicionar+seu+plugin+à+lista+de+plugins+da+comunidade) no Obsidian Hub.

## Comunidade e suporte

Se você tiver dúvidas ou estiver procurando por feedback, [participe da comunidade](https://obsidian.md/community).

- Canal `#plugin-dev` no Discord.
- [Desenvolvedores e API](https://forum.obsidian.md/c/developers-api/14) e [Compartilhar e mostrar](https://forum.obsidian.md/c/share-showcase/9) no fórum.
---
permalink: web-clipper/troubleshoot
---
Se você encontrar problemas com o [[Introdução ao Obsidian Web Clipper|Web Clipper]], pode obter ajuda pelo [canal oficial do Discord](https://discord.com/channels/686053708261228577/1285652864089198672). Você também pode relatar bugs no [repositório do GitHub](https://github.com/obsidianmd/obsidian-clipper).

## Geral

### Algum conteúdo está faltando

Por padrão, o Web Clipper tenta capturar conteúdo da página de forma inteligente. No entanto, pode não ser bem-sucedido em fazê-lo em todos os sites.

O Web Clipper usa o [Defuddle](https://github.com/kepano/defuddle) para capturar apenas o conteúdo principal da página. Isso exclui cabeçalho, rodapé e outros elementos, mas às vezes pode ser excessivamente conservador e remover conteúdo que você deseja manter. Você pode [relatar bugs](https://github.com/kepano/defuddle) para o Defuddle.

Para contornar o Defuddle no Web Clipper, use os seguintes métodos:

- Selecione texto, ou use `Cmd/Ctrl+A` para selecionar todo o texto.
- [[Destacar páginas web|Destaque conteúdo]] para escolher exatamente o que deseja capturar.
- Use um [[Obsidian Web Clipper/Modelos|modelo personalizado]] para o site.

### Nenhum conteúdo aparece no Obsidian

Se você não vir nenhum conteúdo no Obsidian ao clicar em **Adicionar ao Obsidian**:

- Verifique se há erros no [[Ajuda e suporte#Capturar logs do console|console de desenvolvedor]] do Obsidian.
- Verifique se o nome do cofre nas configurações do Web Clipper corresponde exatamente ao *nome do cofre* no Obsidian, *não ao caminho do cofre*.
- Verifique se o nome da pasta está formatado corretamente.

## Linux

#### O Obsidian não abre

- Certifique-se de que o protocolo [[Obsidian URI]] [[Obsidian URI#Registrar URI do Obsidian|esteja registrado]].
- Se você estiver usando o Firefox, pode ser necessário [registrá-lo nas configurações do navegador](https://kb.mozillazine.org/Register_protocol).

#### O Obsidian abre, mas apenas o nome do arquivo é salvo

É provável que o Obsidian não consiga acessar sua área de transferência. O acesso à área de transferência é necessário para passar dados do seu navegador para o Obsidian. Sua configuração pode afetar como os aplicativos são isolados (sandboxed) e as permissões da área de transferência.

Se você usa Wayland, certifique-se de que o Obsidian tenha permissões para ler a área de transferência quando o aplicativo não estiver em foco. Essa preferência pode estar no seu gerenciador de janelas tiling, por exemplo, Hyprland ou Sway.

Se você usa Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Se você usa Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Se você usa Flatpak, considere experimentar uma [versão oficialmente suportada do Obsidian](https://obsidian.md/pt-BR/download).
- Se você usa KDE, vá para **Configurações do Sistema** → **Gerenciamento de Janelas** → **Regras de Janelas** e permita que o Obsidian assuma o foco, [[web-clipper-kde.png|veja captura de tela]].
- Como alternativa, tente mudar para o **Modo Legado** em **Configurações do Web Clipper** → **Geral**. Isso contornará a área de transferência e salvará o conteúdo diretamente via URI. Note que isso limitará o número de caracteres que podem ser capturados dependendo do seu navegador e distribuição Linux.

## iOS e iPadOS

Para ativar a extensão Web Clipper no Safari:

1. Vá ao Safari, toque no botão mais à esquerda na barra de URL do navegador, que se parece com um retângulo com linhas abaixo dele.
2. Toque em **Gerenciar Extensões**.
3. Ative o **Obsidian Web Clipper** na lista de Extensões.
4. Saia do menu.
5. Para usar a extensão, **toque no ícone de peça de quebra-cabeça** na barra de URL.

Para permitir que o Web Clipper seja executado em todos os sites:

1. Vá para **[[Configurações]]** do iOS → **Apps** → **Safari** → **Extensões**.
2. Em **Permissões**, permita que ele seja executado em todos os sites.

Para permitir que o Obsidian sempre receba conteúdo do Web Clipper:

1. Vá para **[[Configurações]]** do iOS → **Apps** → **Obsidian**.
2. Defina **Colar de outros apps** como **Permitir**.

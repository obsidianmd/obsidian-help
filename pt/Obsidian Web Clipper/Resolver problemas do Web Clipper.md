---
permalink: web-clipper/troubleshoot
---
Se encontrar problemas com o [[Introdução ao Obsidian Web Clipper|Web Clipper]], pode obter ajuda através do [canal oficial do Discord](https://discord.com/channels/686053708261228577/1285652864089198672). Também pode reportar erros no [repositório GitHub](https://github.com/obsidianmd/obsidian-clipper).

## Geral

### Algum conteúdo está em falta

Por predefinição, o Web Clipper tenta capturar inteligentemente o conteúdo da página. No entanto, pode não ser bem-sucedido em todos os sites.

O Web Clipper utiliza o [Defuddle](https://github.com/kepano/defuddle) para capturar apenas o conteúdo principal da página. Isto exclui cabeçalho, rodapé e outros elementos, mas por vezes pode ser demasiado conservador e remover conteúdo que pretende manter. Pode [reportar erros](https://github.com/kepano/defuddle) ao Defuddle.

Para contornar o Defuddle no Web Clipper, utilize os seguintes métodos:

- Selecione texto, ou use `Cmd/Ctrl+A` para selecionar todo o texto.
- [[Highlighter|Destaque conteúdo]] para escolher exatamente o que pretende capturar.
- Utilize um [[Obsidian Web Clipper/Modelos|modelo personalizado]] para o site.

### Nenhum conteúdo aparece no Obsidian

Se não vir qualquer conteúdo no Obsidian quando clica em **Adicionar ao Obsidian**:

- Verifique se existem erros na [[Ajuda e suporte#Capturar registos da consola|consola de programador]] do Obsidian.
- Verifique se o nome do cofre nas definições do Web Clipper corresponde exatamente ao *nome do cofre* no Obsidian e *não ao caminho do cofre*.
- Verifique se o nome da pasta está corretamente formatado.

## Linux

#### O Obsidian não abre

- Certifique-se de que o protocolo [[Obsidian URI]] está [[Obsidian URI#Registar o URI do Obsidian|registado]].
- Se estiver a utilizar o Firefox, poderá precisar de [registá-lo nas definições do navegador](https://kb.mozillazine.org/Register_protocol).

#### O Obsidian abre mas apenas o nome do ficheiro é guardado

É provável que o Obsidian não consiga aceder à sua área de transferência. O acesso à área de transferência é necessário para passar dados do navegador para o Obsidian. A sua configuração pode afetar a forma como as aplicações são isoladas e as permissões da área de transferência.

Se utilizar Wayland, certifique-se de que o Obsidian tem permissões para ler a área de transferência quando a aplicação não está em foco. Esta preferência pode estar no seu gestor de janelas, por exemplo, Hyprland ou Sway.

Se utilizar Hyprland:

```ini
# ~/.config/hypr/hyprland.conf
misc {
    focus_on_activate = true
}
```

Se utilizar Sway:

```ini
# ~/.config/sway/config
for_window [class="obsidian"] focus_on_window_activation focus
```

- Se utilizar Flatpak, considere experimentar uma [versão do Obsidian oficialmente suportada](https://obsidian.md/download).
- Se utilizar KDE, vá a **Definições do Sistema** → **Gestão de Janelas** → **Regras de Janelas** e permita que o Obsidian receba foco, [[web-clipper-kde.png|ver captura de ecrã]].
- Como alternativa, tente mudar para o **modo Legado** em **Definições do Web Clipper** → **Geral**. Isto irá contornar a área de transferência e guardar o conteúdo diretamente via URI. Note que isto irá limitar o número de caracteres que podem ser recortados, dependendo do seu navegador e distribuição Linux.

## iOS e iPadOS

Para ativar a extensão Web Clipper para o Safari:

1. Vá ao Safari, toque no botão mais à esquerda na barra de URL do navegador, que se parece com um retângulo com linhas por baixo.
2. Toque em **Gerir Extensões**.
3. Ative o **Obsidian Web Clipper** na lista de Extensões.
4. Saia do menu.
5. Para usar a extensão, **toque no ícone de peça de puzzle** na barra de URL.

Para permitir que o Web Clipper funcione em todos os sites:

1. Vá a **[[Definições]]** do iOS → **Apps** → **Safari** → **Extensões**.
2. Em **Permissões**, permita que funcione em todos os sites.

Para permitir que o Obsidian receba sempre conteúdo do Web Clipper:

1. Vá a **[[Definições]]** do iOS → **Apps** → **Obsidian**.
2. Defina **Colar de outras apps** como **Permitir**.

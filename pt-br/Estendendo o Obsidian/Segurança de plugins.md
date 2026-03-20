---
permalink: plugin-security
---
A equipe do Obsidian leva a segurança a sério. Esta página explica os riscos envolvidos ao instalar plugins da comunidade e o que a equipe do Obsidian faz para mitigá-los.

## Modo restrito

Por padrão, o Obsidian funciona no Modo restrito para impedir a execução de código de terceiros. Desative o Modo restrito apenas se você confiar nos autores dos plugins que instalar.

Para desativar o Modo restrito:

1. Abra as **[[Configurações]]**.
2. No menu lateral, selecione **Plugins da comunidade**.
3. Selecione **Ligar os plugins da comunidade**.

Para ativar o Modo restrito:

1. Abra as **[[Configurações]]**.
2. No menu lateral, selecione **Plugins da comunidade**.
3. Ao lado de **Modo restrito**, selecione **Ativar**.

Os plugins instalados permanecem no seu cofre mesmo se você ativar o Modo restrito, mas são ignorados pelo Obsidian.

## Capacidades dos plugins

Devido a limitações técnicas, o Obsidian não consegue restringir de forma confiável os plugins a permissões ou níveis de acesso específicos. Isso significa que os plugins herdarão os níveis de acesso do Obsidian. Como resultado, considere os seguintes exemplos do que os plugins da comunidade podem fazer:

- Plugins da comunidade podem acessar arquivos no seu computador.
- Plugins da comunidade podem se conectar à internet.
- Plugins da comunidade podem instalar programas adicionais.

> [!tip] 
> Se você trabalha com dados sensíveis e deseja instalar um plugin da comunidade, recomendamos que você realize uma auditoria de segurança independente no plugin antes de usá-lo.

## Processo de revisão de plugins

Os plugins da comunidade passam por uma revisão inicial quando são submetidos à loja de plugins. Todos os plugins devem aderir às [Políticas para Desenvolvedores do Obsidian](https://docs.obsidian.md/Developer+policies).

A equipe do Obsidian é pequena e não consegue revisar manualmente cada nova versão dos plugins da comunidade. Em vez disso, contamos com a ajuda da comunidade para identificar e relatar problemas com plugins.

- Se você descobrir qualquer vulnerabilidade de segurança menor em um plugin da comunidade, consulte o `security.md` ou `readme.md` do autor do plugin para saber como reportá-la. Para falhas de categoria Crítica, por favor reporte o problema também ao [[Ajuda e suporte#Contatar o suporte do Obsidian|suporte do Obsidian]].
- Se você suspeitar que um plugin da comunidade é malicioso, reporte ao [[Ajuda e suporte#Contatar o suporte do Obsidian|suporte do Obsidian]], ou enviando uma mensagem direta aos nossos moderadores.

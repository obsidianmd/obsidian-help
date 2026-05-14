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

Todos os plugins da comunidade devem aderir às [Políticas para Desenvolvedores do Obsidian](https://docs.obsidian.md/Developer+policies). O Obsidian verifica automaticamente cada versão de plugin em busca de vulnerabilidades de segurança, problemas de qualidade de código e malware. A página de cada plugin no [diretório de plugins](https://community.obsidian.md) exibe os resultados como um painel de segurança.

Revisões manuais continuam sendo realizadas para plugins populares, em destaque e sinalizados.

- Se você descobrir uma vulnerabilidade de segurança em um plugin da comunidade, consulte o `security.md` ou `readme.md` do autor do plugin para saber como reportá-la. Para falhas críticas, reporte o problema também ao [[Ajuda e suporte#Contatar o suporte do Obsidian|suporte do Obsidian]].
- Se você suspeitar que um plugin da comunidade é malicioso, você pode sinalizá-lo diretamente na página do diretório de plugins, reportar ao [[Ajuda e suporte#Contatar o suporte do Obsidian|suporte do Obsidian]], ou enviar uma mensagem direta aos nossos moderadores.

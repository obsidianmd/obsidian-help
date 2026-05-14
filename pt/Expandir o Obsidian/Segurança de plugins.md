---
permalink: plugin-security
---
A equipa do Obsidian leva a segurança a sério. Esta página explica os riscos envolvidos na instalação de plugins da comunidade e o que a equipa do Obsidian faz para os abordar.

## Modo restrito

Por predefinição, o Obsidian funciona em Modo Restrito para impedir a execução de código de terceiros. Desative o Modo Restrito apenas se confiar nos autores dos plugins que instala.

Para desligar o Modo Restrito:

1. Abra as **[[Definições]]**.
2. No menu lateral, selecione **Plugins da comunidade**.
3. Selecione **Ligar os plugins da comunidade**.

Para ligar o Modo Restrito:

1. Abra as **[[Definições]]**.
2. No menu lateral, selecione **Plugins da comunidade**.
3. Junto a **Modo restrito**, selecione **Ligar**.

Os plugins instalados permanecem no seu cofre mesmo que ative o Modo Restrito, mas são ignorados pelo Obsidian.

## Capacidades dos plugins

Devido a limitações técnicas, o Obsidian não consegue restringir de forma fiável os plugins a permissões ou níveis de acesso específicos. Isto significa que os plugins herdam os níveis de acesso do Obsidian. Como resultado, considere os seguintes exemplos do que os plugins da comunidade podem fazer:

- Os plugins da comunidade podem aceder a ficheiros no seu computador.
- Os plugins da comunidade podem conectar-se à internet.
- Os plugins da comunidade podem instalar programas adicionais.

> [!tip] 
> Se estiver a trabalhar com dados sensíveis e desejar instalar um plugin da comunidade, recomendamos que realize uma auditoria de segurança independente ao plugin antes de o utilizar.

## Processo de revisão de plugins

Todos os plugins da comunidade devem aderir às [Políticas para Programadores do Obsidian](https://docs.obsidian.md/Developer+policies). O Obsidian analisa automaticamente cada versão de plugin em busca de vulnerabilidades de segurança, problemas de qualidade de código e malware. A página de cada plugin no [diretório de plugins](https://community.obsidian.md) apresenta os resultados como um painel de segurança.

As revisões manuais continuam para plugins populares, em destaque e sinalizados.

- Se descobrir uma vulnerabilidade de segurança num plugin da comunidade, consulte o ficheiro `security.md` ou `readme.md` do autor do plugin para saber como a reportar. Para falhas críticas, reporte também o problema ao [[Ajuda e suporte#Contactar o suporte do Obsidian|suporte do Obsidian]].
- Se suspeitar que um plugin da comunidade é malicioso, pode sinalizá-lo diretamente a partir da sua página no diretório de plugins, reportá-lo ao [[Ajuda e suporte#Contactar o suporte do Obsidian|suporte do Obsidian]], ou enviar uma mensagem direta aos nossos moderadores.

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

Os plugins da comunidade passam por uma revisão inicial quando são submetidos à loja de plugins. Todos os plugins devem aderir às [Políticas para Programadores do Obsidian](https://docs.obsidian.md/Developer+policies).

A equipa do Obsidian é pequena e não consegue rever manualmente cada nova versão dos plugins da comunidade. Em vez disso, contamos com a ajuda da comunidade para identificar e reportar problemas com plugins.

- Se descobrir vulnerabilidades de segurança menores num plugin da comunidade, consulte o ficheiro `security.md` ou `readme.md` do autor do plugin para saber como as reportar. Para falhas de categoria Crítica, por favor reporte também o problema ao [[Ajuda e suporte#Contactar o suporte do Obsidian|suporte do Obsidian]].
- Se suspeitar que um plugin da comunidade é malicioso, reporte-o ao [[Ajuda e suporte#Contactar o suporte do Obsidian|suporte do Obsidian]], ou enviando uma mensagem direta aos nossos moderadores.

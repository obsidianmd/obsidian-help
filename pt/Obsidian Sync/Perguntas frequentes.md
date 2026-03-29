---
permalink: sync/faq
publish: true
mobile: true
description: Esta página lista algumas das perguntas comuns relacionadas a dúvidas e limitações do Obsidian Sync.
---
Esta página lista algumas das perguntas comuns relacionadas com questões e limitações do [[Introdução ao Obsidian Sync|Obsidian Sync]].

## Geral

### Que sistemas operativos suporta o Obsidian Sync?

O Obsidian Sync suporta todas as plataformas em que o Obsidian pode funcionar. Atualmente, isso inclui Windows, macOS, Linux, Android e iOS.

### O Obsidian funciona com o Modo de Bloqueio da Apple?

O Obsidian pode ser utilizado no [Modo de Bloqueio](https://support.apple.com/en-us/105120) desde que o Obsidian seja adicionado como uma exclusão.

### Que tipo de dados são sincronizados?

Por predefinição, as suas notas do Obsidian, imagens e a sua [[Pasta de configuração]] são sincronizadas.

Pode adicionar opções de sincronização adicionais de PDFs, ficheiros de áudio, ficheiros de vídeo e outros ficheiros quando configurar as [[Definições do Sync e sincronização seletiva]].

### Quanto armazenamento tenho disponível?

O limite de armazenamento depende do seu [[Planos e limites de armazenamento#Planos|plano Sync]] do Obsidian. A quantidade máxima de armazenamento é 100 GB. Este limite de armazenamento inclui a [[História de versionamento|história de versionamento]].

Pode consultar o **Vault size** na aplicação Obsidian acedendo a **[[Definições]] → Sync**.

### Quantos cofres remotos posso ter?

O número de cofres remotos que pode ter é determinado com base no seu [[Planos e limites de armazenamento#Planos|plano Sync]]. O plano Standard inclui 1 cofre, o plano Plus inclui 10 cofres. Os cofres partilhados consigo não contam para o seu limite de cofres.

### Qual pode ser o tamanho de cada cofre remoto?

Não existe limite por cofre. O limite de armazenamento está associado à sua conta utilizada e pode ser aplicado em todos os seus cofres.

### Com quantas pessoas posso partilhar um cofre remoto?

Pode [[Colaborar num cofre partilhado|partilhar um cofre remoto]] com até 20 pessoas.

### Qual pode ser o tamanho de cada ficheiro?

O tamanho máximo do ficheiro depende do seu [[Planos e limites de armazenamento|plano Obsidian Sync]]. Para o plano Standard, o limite é 5 MB. Para o plano Plus, o limite é 200 MB por ficheiro.

### Os meus dados estão a ser sincronizados em segundo plano?

Não, os ficheiros só são sincronizados quando o Obsidian está em execução.

### O Obsidian Sync recarrega as minhas definições em tempo real?

O Obsidian Sync pode recarregar automaticamente certas definições, mas existem algumas limitações. Para mais detalhes, consulte [[Definições do Sync e sincronização seletiva#Recarregamento de definições|Recarregamento de definições]].

### Posso usar uma sincronização de terceiros com o Obsidian Sync?

Não recomendamos a utilização de um serviço de sincronização de terceiros em conjunto com o Obsidian Sync. Utilizar um serviço de terceiros e o Obsidian Sync em múltiplos dispositivos pode levar a conflitos, resultando em ficheiros duplicados ou corrompidos.

Serviços de armazenamento na nuvem como o OneDrive e o Dropbox oferecem funcionalidades de "Ficheiros a pedido" ou "Ficheiros apenas online", que transferem ficheiros apenas quando necessário e os removem localmente para poupar espaço. No entanto, como estes ficheiros nem sempre estão disponíveis localmente, o Obsidian Sync irá interpretá-los como eliminados, levando à sua remoção do seu cofre remoto.

Para evitar estes problemas, desative as transferências a pedido ao utilizar o Obsidian Sync com serviços como o OneDrive ou o Dropbox. Terá de garantir que as definições do serviço de terceiros estão configuradas para manter sempre os ficheiros no dispositivo.

## Retenção de dados

Estas são perguntas frequentes sobre a retenção de dados do Obsidian. Para respostas mais aprofundadas, consulte [[Segurança e privacidade|Segurança e privacidade]].

### Durante quanto tempo mantêm a história de versionamento?

A [[História de versionamento]] depende do seu [[Planos e limites de armazenamento|plano Obsidian Sync]]. No plano Standard, as suas notas são retidas durante 1 mês. No plano Plus, as suas notas são retidas durante 12 meses. Após este período de tempo, as versões mais antigas são eliminadas.

As versões mais antigas dos [[Anexos|anexos]] são armazenadas durante duas semanas.

### Durante quanto tempo mantêm os meus dados após a minha subscrição expirar?

Mantemos os dados nos seus cofres remotos, incluindo a história de versionamento, durante um mês após a sua subscrição expirar. Quaisquer cofres locais nos seus dispositivos não são afetados.

Desde que renove dentro de um mês, não deverá haver impacto na sua utilização. Se renovar após um mês, quando os seus cofres remotos tiverem sido removidos, pode [[Configurar o Obsidian Sync|criar um novo cofre remoto]] e conectar o seu cofre local.

### Mantêm os meus dados se eu reembolsar o meu serviço de subscrição?

Não. Os dados são eliminados imediatamente dos servidores do Obsidian Sync. Os dados no seu [[Cofres locais e remotos|cofre local]] não são afetados.

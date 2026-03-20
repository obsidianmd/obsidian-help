---
permalink: sync/faq
publish: true
mobile: true
description: Esta página lista algumas das perguntas comuns relacionadas a dúvidas e limitações do Obsidian Sync.
---
Esta página lista algumas das perguntas comuns relacionadas a dúvidas e limitações do [[Introdução ao Obsidian Sync|Obsidian Sync]].

## Geral

### Quais sistemas operacionais o Obsidian Sync suporta?

O Obsidian Sync suporta todas as plataformas em que o Obsidian pode ser executado. Atualmente, isso inclui Windows, macOS, Linux, Android e iOS.

### O Obsidian funciona com o Modo de Bloqueio da Apple?

O Obsidian pode ser usado no [Modo de Bloqueio](https://support.apple.com/en-us/105120) desde que o Obsidian seja adicionado como uma exclusão.

### Que tipo de dados são sincronizados?

Por padrão, suas notas do Obsidian, imagens e sua [[Pasta de configuração]] são sincronizados.

Você pode adicionar opções adicionais de sincronização de PDFs, arquivos de áudio, arquivos de vídeo e outros arquivos quando você [[Configurações do Sync e sincronização seletiva|configurar a sincronização seletiva]].

### Quanto armazenamento eu tenho?

O limite de armazenamento depende do seu [[Planos e limites de armazenamento#Planos|plano do Sync]]. A quantidade máxima de armazenamento é 100 GB. Este limite de armazenamento inclui o [[Histórico de versões|histórico de versões]].

Você pode visualizar o **Tamanho do cofre:** no aplicativo Obsidian acessando **[[Configurações]] → Sync**.

### Quantos cofres remotos eu posso ter?

O número de cofres remotos que você pode ter é determinado com base no seu [[Planos e limites de armazenamento#Planos|plano do Sync]]. O plano Standard inclui 1 cofre, o plano Plus inclui 10 cofres. Cofres compartilhados com você não contam para o seu limite de cofres.

### Qual o tamanho máximo de cada cofre remoto?

Não há limite por cofre. O limite de armazenamento está vinculado à sua conta utilizada e pode ser aplicado em todos os seus cofres.

### Com quantas pessoas posso compartilhar um cofre remoto?

Você pode [[Colaborar em um cofre compartilhado|compartilhar um cofre remoto]] com até 20 pessoas.

### Qual o tamanho máximo de cada arquivo?

O tamanho máximo do arquivo depende do seu [[Planos e limites de armazenamento|plano do Obsidian Sync]]. Para o plano Standard, o limite é 5 MB. Para o plano Plus, o limite é 200 MB por arquivo.

### Meus dados são sincronizados em segundo plano?

Não, os arquivos são sincronizados apenas quando o Obsidian está em execução.

### O Obsidian Sync recarrega minhas configurações em tempo real?

O Obsidian Sync pode recarregar automaticamente certas configurações, mas há algumas limitações. Para mais detalhes, consulte [[Configurações do Sync e sincronização seletiva#Recarregamento de configurações|Recarregamento de configurações]].

### Posso usar uma sincronização de terceiros com o Obsidian Sync?

Não recomendamos usar um serviço de sincronização de terceiros junto com o Obsidian Sync. Usar um serviço de terceiros e o Obsidian Sync em múltiplos dispositivos pode levar a conflitos, resultando em arquivos duplicados ou corrompidos.

Serviços de armazenamento em nuvem como OneDrive e Dropbox oferecem recursos de "Arquivos sob demanda" ou "Arquivos somente online", que baixam arquivos apenas quando necessário e os removem localmente para economizar espaço. No entanto, como esses arquivos nem sempre estão disponíveis localmente, o Obsidian Sync os interpretará como excluídos, levando à sua remoção do seu cofre remoto.

Para evitar esses problemas, desative downloads sob demanda ao usar o Obsidian Sync com serviços como OneDrive ou Dropbox. Você precisará garantir que as configurações do serviço de terceiros estejam configuradas para sempre manter os arquivos no dispositivo.

## Retenção de dados

Estas são perguntas frequentes sobre a retenção de dados do Obsidian. Para respostas mais detalhadas, consulte [[Segurança e privacidade|Segurança e privacidade]].

### Por quanto tempo vocês mantêm o histórico de versões?

O [[Histórico de versões]] depende do seu [[Planos e limites de armazenamento|plano do Obsidian Sync]]. No plano Standard, suas notas são retidas por 1 mês. No plano Plus, suas notas são retidas por 12 meses. Após esse período, as versões mais antigas são excluídas.

Versões mais antigas de [[Anexos|anexos]] são armazenadas por duas semanas.

### Por quanto tempo vocês mantêm meus dados após minha assinatura expirar?

Mantemos os dados em seus cofres remotos, incluindo o histórico de versões, por um mês após a expiração da sua assinatura. Quaisquer cofres locais em seus dispositivos não são afetados.

Desde que você renove dentro de um mês, não deve haver impacto no seu uso. Se você renovar após um mês, quando seus cofres remotos tiverem sido removidos, você pode [[Configurar o Obsidian Sync|criar um novo cofre remoto]] e conectar seu cofre local.

### Vocês mantêm meus dados se eu solicitar reembolso do serviço de assinatura?

Não. Os dados são excluídos imediatamente dos servidores do Obsidian Sync. Os dados no seu [[Cofres locais e remotos|cofre local]] não são afetados.

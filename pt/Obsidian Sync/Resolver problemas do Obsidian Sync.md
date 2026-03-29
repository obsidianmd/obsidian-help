---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Esta página lista problemas incomuns que você pode encontrar com o Obsidian Sync e como resolvê-los.
---
Esta página lista problemas incomuns que pode encontrar com o [[Introdução ao Obsidian Sync|Obsidian Sync]] e como resolvê-los. Antes de prosseguir, recomendamos que consulte as páginas [[Ícone de estado e mensagens]] e [[Perguntas frequentes]].

## Geral

### Resolução de conflitos

Um conflito acontece quando altera o mesmo ficheiro em dois ou mais dispositivos antes de estes sincronizarem. Por exemplo, edita uma nota no seu computador. Antes que essa alteração seja enviada, também altera a mesma nota no seu telemóvel.

Os conflitos acontecem mais frequentemente quando trabalha offline. Existem mais alterações e um intervalo de tempo maior entre sincronizações, o que aumenta a probabilidade de conflitos.

#### Como o Obsidian Sync lida com conflitos

Quando o Obsidian Sync encontra um conflito, o resultado depende do tipo de ficheiro:

- **Ficheiros Markdown**: O Obsidian Sync mescla as alterações usando o algoritmo [diff-match-patch](https://github.com/google/diff-match-patch) da Google.
- **Outros tipos de ficheiro**: Para todos os outros ficheiros, incluindo Canvas, o Obsidian utiliza uma abordagem "o último modificado vence". A versão modificada mais recentemente substitui as versões anteriores.

Para conflitos nas definições do Obsidian, como definições de plugins, o Obsidian Sync mescla os ficheiros JSON. Aplica as chaves do JSON local sobre o JSON remoto.

#### Opções de resolução de conflitos

A partir do Obsidian 1.9.7, pode escolher como lidar com conflitos. Para configurar esta definição:

1. Abra as **[[Definições]]**.
2. Na barra lateral, selecione **Sync**.
3. Em **[[Definições do Sync e sincronização seletiva#Resolução de conflitos|Resolução de conflitos]]**, escolha a sua opção preferida:
   - **Mesclar automaticamente** (predefinido): O Obsidian Sync combina todas as alterações de diferentes dispositivos num único ficheiro. Isto guarda todas as edições, mas por vezes pode criar texto duplicado ou problemas de formatação. Terá de corrigir estes manualmente.
   - **Criar ficheiro de conflito**: Quando o Obsidian encontra alterações conflituantes, cria um ficheiro de conflito separado em vez de mesclar automaticamente. Pode então rever ambas as versões e mesclá-las por si próprio. Isto dá-lhe controlo total sobre o resultado final.

> [!warning]+ Configure em todos os dispositivos
> As definições de resolução de conflitos são específicas do dispositivo. Deve configurar a sua opção preferida em cada um dos seus dispositivos. Isto garante o mesmo comportamento em todos os seus dispositivos sincronizados.

**Padrão de nomenclatura de ficheiros de conflito**

Quando utiliza a opção "Criar ficheiro de conflito", o Obsidian cria um novo ficheiro com este padrão de nomenclatura:

```
nome-da-nota-original (Conflicted copy nome-do-dispositivo AAAAMMDDHHMI).md
```

Por exemplo, se um conflito acontecer numa nota chamada `Notas de reunião.md`, o ficheiro de conflito pode ser nomeado:

```
Notas de reunião (Conflicted copy MeuMacBook2 202411281430).md
```

O ficheiro de conflito contém as alterações do dispositivo onde o conflito foi detetado. O ficheiro original mantém a versão remota. Pode comparar ambos os ficheiros e mesclar o conteúdo manualmente.

> [!info]+ Consulte o registo de sincronização
> Para verificar quando ocorreram conflitos, abra o [[Ícone de estado e mensagens#Atividade do Sync|Registo de sincronização]]. Filtre por "Merge Conflicts" ou pesquise por "Conflict".

### O Sync eliminou uma nota que acabei de criar em dois dispositivos

O Obsidian Sync normalmente tenta [[#Resolução de conflitos|resolver conflitos]] mesclando notas conflituantes entre dispositivos. No entanto, podem ocorrer problemas para utilizadores que criam ou alteram notas automaticamente ao iniciar. Isto inclui [[Notas diárias]] ou quando se utiliza o plugin da comunidade [Templater](https://github.com/SilentVoid13/Templater).

Se criar uma nota localmente num dispositivo e, dentro de alguns minutos, o Sync transferir uma versão remota dessa mesma nota, o Sync manterá a versão remota sem mesclar as duas. Neste caso, pode recuperar a versão local usando a [[Recuperação de ficheiros]].

### O Sync não sincroniza as atualizações dos meus plugins e definições

O Obsidian [[Perguntas frequentes#O Obsidian Sync recarrega as minhas definições em tempo real?|não recarrega todas as definições em direto]]. Após atualizar definições ou plugins, precisa de reiniciar o Obsidian nos outros dispositivos para ver as alterações. Em dispositivos móveis, pode ser necessário forçar o encerramento da aplicação.

> [!example]- Mudar um tema
> - No seu dispositivo principal (normalmente um computador), muda o seu tema de volta para o predefinido a partir de um tema personalizado.
> - O registo de sincronização confirma que os ficheiros atualizados foram enviados para o cofre remoto, mas o seu dispositivo móvel ainda mostra o tema personalizado.
> - No dispositivo móvel, verifique o registo de sincronização para confirmar a receção do ficheiro `appearance.json` atualizado.
> - Recarregue ou reinicie o Obsidian no dispositivo móvel.
> - Após recarregar ou reiniciar, o dispositivo móvel deverá mostrar o mesmo tema que o seu computador.

### Os meus ficheiros continuam a desaparecer do Sync assim que os restauro

Este problema é mais comum no Windows. O Windows Defender pode colocar em quarentena ficheiros com blocos de código, o que faz com que certas notas desapareçam.

Outra causa comum é a sincronização dupla. Isto acontece quando o Obsidian Sync é executado em simultâneo com outro serviço de sincronização.

![[Mudar para o Obsidian Sync#Mover o seu cofre para fora do serviço de sincronização de terceiros ou armazenamento na nuvem]]

---

Por fim, isto pode acontecer quando restaura um ficheiro num dispositivo, mas depois este é removido de um dispositivo secundário. Isto acontece quando o nome do ficheiro tem [[Ícone de estado e mensagens#Mensagens de itens ignorados|caracteres ilegais]].

## Android

**O meu dispositivo está a eliminar os anexos que recebo através do Sync**

Este problema deve-se provavelmente ao Google ou ao Android Photos a gerir os seus anexos. Para impedir que o sistema altere ficheiros recebidos via Sync, adicione um [ficheiro `.nomedia` ao seu cofre](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) no seu dispositivo Android.

> [!tip]- Utilize um plugin
> O plugin da comunidade [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) facilita este processo. Instale-o no seu telemóvel Android. Note que os ficheiros `.nomedia` não são sincronizados entre dispositivos através do Obsidian Sync.

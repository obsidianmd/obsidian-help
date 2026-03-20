---
permalink: sync/troubleshoot
cssclasses:
  - soft-embed
publish: true
mobile: true
description: Esta página lista problemas incomuns que você pode encontrar com o Obsidian Sync e como resolvê-los.
---
Esta página lista problemas incomuns que você pode encontrar com o [[Introdução ao Obsidian Sync|Obsidian Sync]] e como resolvê-los. Antes de prosseguir, recomendamos revisar as páginas [[Ícone de status e mensagens]] e [[Perguntas frequentes]].

## Geral

### Resolução de conflitos

Um conflito acontece quando você altera o mesmo arquivo em dois ou mais dispositivos antes que eles sincronizem. Por exemplo, você edita uma nota no seu computador. Antes dessa alteração ser enviada, você também altera a mesma nota no seu celular.

Conflitos acontecem com mais frequência quando você trabalha offline. Há mais alterações e maior intervalo entre sincronizações, o que aumenta a chance de conflitos.

#### Como o Obsidian Sync lida com conflitos

Quando o Obsidian Sync encontra um conflito, o resultado depende do tipo de arquivo:

- **Arquivos Markdown**: O Obsidian Sync mescla as alterações usando o algoritmo [diff-match-patch](https://github.com/google/diff-match-patch) do Google.
- **Outros tipos de arquivo**: Para todos os outros arquivos, incluindo canvas, o Obsidian usa uma abordagem de "última modificação prevalece". A versão modificada mais recentemente substitui as versões anteriores.

Para conflitos nas configurações do Obsidian, como configurações de plugins, o Obsidian Sync mescla os arquivos JSON. Ele aplica as chaves do JSON local sobre o JSON remoto.

#### Opções de resolução de conflitos

A partir do Obsidian 1.9.7, você pode escolher como lidar com conflitos. Para configurar esta opção:

1. Abra as **[[Configurações]]**.
2. Na barra lateral, selecione **Sync**.
3. Em **[[Configurações do Sync e sincronização seletiva#Resolução de conflitos|Resolução de conflitos]]**, escolha sua opção preferida:
   - **Mesclar automaticamente** (padrão): O Obsidian Sync combina todas as alterações de diferentes dispositivos em um único arquivo. Isso salva todas as edições, mas às vezes pode criar texto duplicado ou problemas de formatação. Você precisará corrigir esses problemas manualmente.
   - **Criar arquivo de conflito**: Quando o Obsidian encontra alterações conflitantes, ele cria um arquivo de conflito separado em vez de mesclar automaticamente. Você pode então revisar ambas as versões e mesclá-las por conta própria. Isso lhe dá controle total sobre o resultado final.

> [!warning]+ Configure em todos os dispositivos
> As configurações de resolução de conflitos são específicas por dispositivo. Você deve configurar sua opção preferida em cada um dos seus dispositivos. Isso garante o mesmo comportamento em todos os seus dispositivos sincronizados.

**Padrão de nomenclatura do arquivo de conflito**

Quando você usa a opção "Criar arquivo de conflito", o Obsidian cria um novo arquivo com este padrão de nomenclatura:

```
nome-da-nota-original.sync-conflict-AAAAMMDD-HHMMSS.md
```

Por exemplo, se um conflito acontecer em uma nota chamada `Notas de reunião.md`, o arquivo de conflito pode ser nomeado:

```
Notas de reunião.sync-conflict-20241128-143022.md
```

O arquivo de conflito contém as alterações do dispositivo onde o conflito foi detectado. O arquivo original mantém a versão remota. Você pode comparar ambos os arquivos e mesclar o conteúdo manualmente.

> [!info]+ Verifique o log de sincronização
> Para verificar quando conflitos aconteceram, abra o [[Ícone de status e mensagens#Log de atividade do Sync|Log de sincronização]]. Filtre por "Mesclar conflitos" ou pesquise por "Conflito".

### O Sync excluiu uma nota que acabei de criar em dois dispositivos

O Obsidian Sync normalmente tenta [[#Resolução de conflitos|resolver conflitos]] mesclando notas conflitantes entre dispositivos. No entanto, problemas podem acontecer para usuários que criam ou alteram notas automaticamente na inicialização. Isso inclui [[Notas diárias]] ou ao usar o plugin da comunidade [Templater](https://github.com/SilentVoid13/Templater).

Se você criar uma nota localmente em um dispositivo e, dentro de alguns minutos, o Sync baixar uma versão remota dessa mesma nota, o Sync manterá a versão remota sem mesclar as duas. Neste caso, você pode recuperar a versão local usando a [[Recuperação de arquivos]].

### O Sync não sincroniza as atualizações dos meus plugins e configurações

O Obsidian [[Perguntas frequentes#O Obsidian Sync recarrega minhas configurações em tempo real?|não recarrega todas as configurações em tempo real]]. Depois de atualizar configurações ou plugins, você precisa reiniciar o Obsidian nos outros dispositivos para ver as alterações. Em dispositivos móveis, pode ser necessário forçar o encerramento do aplicativo.

> [!example]- Alterando um tema
> - No seu dispositivo principal (geralmente um computador), você muda seu tema de volta para o padrão a partir de um tema personalizado.
> - O log de sincronização confirma que os arquivos atualizados foram enviados para o cofre remoto, mas seu dispositivo móvel ainda mostra o tema personalizado.
> - No dispositivo móvel, verifique o log de sincronização para confirmar o recebimento do arquivo `appearance.json` atualizado.
> - Recarregue ou reinicie o Obsidian no dispositivo móvel.
> - Após recarregar ou reiniciar, o dispositivo móvel deve exibir o mesmo tema do seu computador.

### Meus arquivos continuam desaparecendo do Sync assim que os restauro

Esse problema é mais comum no Windows. O Windows Defender pode colocar em quarentena arquivos com blocos de código, o que faz com que certas notas desapareçam.

Outra causa comum é a sincronização dupla. Isso acontece quando o Obsidian Sync funciona junto com outro serviço de sincronização.

![[Migrar para o Obsidian Sync#Mova seu cofre para fora do seu serviço de sincronização de terceiros ou armazenamento em nuvem]]

---

Por fim, isso pode acontecer quando você restaura um arquivo em um dispositivo, mas depois ele é removido de um dispositivo secundário. Isso ocorre quando o nome do arquivo possui [[Ícone de status e mensagens#Mensagens de itens ignorados|caracteres ilegais]].

## Android

**Meu dispositivo está excluindo os anexos que recebo pelo Sync**

Esse problema provavelmente é causado pelo Google ou Android Photos gerenciando seus anexos. Para evitar que o sistema altere arquivos recebidos via Sync, adicione um [arquivo `.nomedia` ao seu cofre](https://support.google.com/android/thread/60342076/what-are-these-nomedia-files?hl=en) no seu dispositivo Android.

> [!tip]- Use um plugin
> O plugin da comunidade [Android Nomedia](https://obsidian.md/plugins?id=android-nomedia) facilita isso. Instale-o no seu celular Android. Note que arquivos `.nomedia` não são sincronizados entre dispositivos através do Obsidian Sync.

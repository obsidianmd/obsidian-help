A recuperação de arquivos permite que você recupere seu trabalho caso ele seja perdido acidentalmente, através de _snapshots_ salvos regularmente.

Para não ocupar muito espaço, o Obsidian mantém os snapshots por um certo número de dias antes de excluí-los.

> [!observação]
> Por padrão, os snapshots ficam salvos em um intervalo de 5 minutos entre um e outro, e ficam armazenados por 7 dias. Você pode configurar os intervalos em **Configurações → Recuperação de arquivos**.

Os snapshots são mantidos no [[How Obsidian stores data#System directory|system directory]], fora do cofre, para contabilizar perda de dados relacionadas ao cofre. Isso significa que os snapshots são armazenados com o caminho absoluto da nota. Se você moveu seu cofre recentemente, você deve mover ele de volta ao local onde ele estava quando os snapshots foram criados.

## Recuperar um snapshot

1. Abra **Configurações**.
2. Na barra lateral, clique em **Recuperação de arquivos** nas opções dos **Plugins nativos**.
3. Ao lado de **Versões** clique em **Abrir**.
4. No canto superior esquerdo, procure pelo arquivo que você deseja recuperar, e então pressione `Enter`.
5. Selecione o snapshot que você deseja recuperar.
6. Clique em **Copiar para área de transferência** para copiar o snapshot.
7. Cole o snapshot na nota original ou em uma nova nota se você quer comparar as duas.

## Limpar o histórico de snapshots

**Cuidado:** A limpeza do histórico de snapshots exclui todo o histórico de snapshots do seu cofre de forma irreversível.

1. Abra **Configurações**.
2. Na aba lateral clique em **Recuperação de arquivos** na seção de **Plugins nativos**.
3. Próximo a **Remover história**, clique em **Deletar**.
4. Confirme que você deseja excluir todos os snapshots clicando em **Deletar**.

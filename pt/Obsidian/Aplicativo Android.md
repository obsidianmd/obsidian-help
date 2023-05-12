Este artigo de ajuda é legado e serve apenas como uma ponte para evitar a quebra de links. Para informações sobre o aplicativo móvel, consulte [[Sincronize suas anotações entre dispositivos]].

## Sincronizar

Para informações sobre sincronização no aplicativo Android, consulte [[Sincronizar suas anotações entre dispositivos#Sincronizar notas no Android|Sincronizar notas no Android]].

## Permissões de armazenamento

Ao iniciar o Obsidian, você pode perceber que ele solicita permissão para acessar os documentos e mídia do seu dispositivo.

Em um mundo ideal, preferimos solicitar apenas direitos de acesso às pastas do cofre que você escolher. No entanto, a API de permissão de arquivo amigável à privacidade do Android (também conhecida como "armazenamento com escopo") tem algumas restrições que impossibilitam o funcionamento adequado do Obsidian.

Os dois maiores obstáculos são:

- O armazenamento com escopo executa muitas verificações extras de permissão para cada acesso a um único arquivo, causando degradação significativa do desempenho ao abrir e usar o Obsidian.
- O armazenamento com escopo não fornece uma maneira de observar alterações externas, o que é crítico ao usar o Obsidian com uma ferramenta de sincronização de terceiros.

O Google fornece especificamente instruções para desenvolvedores desse tipo de aplicativo uma permissão especial. Obsidian pertence a duas categorias na lista de exceções: "aplicativos de gerenciamento de documentos" e "pesquisa de arquivos no dispositivo". [Leia mais sobre isso aqui.](https://developer.android.com/training/data-storage/manage-all-files)
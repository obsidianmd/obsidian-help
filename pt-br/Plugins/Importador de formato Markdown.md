O conversor de formato permite que você converta arquivos do tipo Markdown de outros aplicativos para o formato do Obsidian.

> [!aviso]
> O conversor de formato converte o seu cofre por inteiro com base em suas configurações. Faça o *backup* das suas notas antes de realizar a conversão.

Para converter todas as notas no seu cofre:

1. In the ribbon, click **Open format converter** (ones and zeros icon).
2. Na fita, clique **Abrir importador Markdown**.
3. Habilite os formatos que você deseja converter.
4. Clique **Começar conversão**.

Para mais informações, veja [[en/How to/Format your notes]].

## Formatos aceitos

| Applicação  | De                  | Para                                                              |
|---------------|-----------------------|-----------------------------------------------------------------|
| Roam Research | `#tag` e `#[[tag]]` | `[[tag]]`                                                       |
| Roam Research | `^^highlight^^`       | `==highlight==`                                                 |
| Roam Research | `{{[[TODO]]}}`        | `[ ]`                                                           |
| Bear          | `::highlight::`       | `==highlight==`                                                 |
| Zettelkasten  | `[[UID]]`             | `[[UID File Name]]` (link completo)                                 |
| Zettelkasten  | `[[UID]]`             | <code>\[\[UID File Name&#124;File Name\]\]</code> (link formatado) |


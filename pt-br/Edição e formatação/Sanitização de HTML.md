---
aliases:
- Tópicos avançados/higienização HTML
---

O Obsidian suporta HTML para permitir que você exiba suas anotações da maneira que desejar, ou mesmo [[Incorporando páginas da web|incorpore páginas da web]]. Mas permitir HTML dentro de suas anotações traz riscos. Para evitar que códigos maliciosos causem danos, o Obsidian _limpa_ qualquer HTML em suas anotações.

A equipe da Obsidian leva a segurança muito a sério e, como resultado, alguns elementos ou recursos HTML podem não estar disponíveis.

Por exemplo, o elemento `<script>` normalmente permite executar o JavaScript sempre que ele é carregado. Se o Obsidian não limpasse o HTML, um invasor poderia convencê-lo a colar um texto contendo JavaScript que extrai informações confidenciais do seu computador e as envia de volta para eles.
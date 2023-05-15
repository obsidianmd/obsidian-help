Para sua segurança, [[Introdução ao Obsidian Sync|Obsidian Sync]] criptografa seu [[Cofres locais e remotos|remote vault]] e toda a comunicação com os servidores da Obsidian. Antes que alguém possa acessar seu cofre remoto, primeiro eles precisam descriptografá-lo com uma _senha de criptografia_.

Ao criar um novo cofre remoto, você tem duas opções:

- **Criptografia de ponta a ponta:** a Obsidian criptografa o cofre em seu dispositivo com uma chave de criptografia personalizada antes de ser enviada aos servidores da Obsidian. Isso garante que ninguém, nem mesmo a equipe da Obsidian, possa acessar suas anotações.
- **Criptografia gerenciada:** Se você não quiser se lembrar de outra senha, pode deixar a Obsidian gerenciar a senha de criptografia para você. Embora armazenemos sua senha de criptografia em nossos servidores, nós a usamos apenas para oferecer uma maneira mais conveniente de gerenciar seus cofres. A Obsidian nunca acessará seu cofre sem o seu consentimento explícito.

Se você esquecer ou perder sua senha de criptografia personalizada, seus dados permanecerão criptografados e inutilizáveis para sempre. Não podemos recuperar sua senha ou quaisquer dados criptografados para você.

Sua escolha afeta apenas seu cofre remoto. Obsidian não criptografa seu cofre local.

## O que significa criptografia de ponta a ponta?

Criptografia de ponta a ponta significa que os dados são criptografados a partir do momento em que saem do seu dispositivo e só podem ser descriptografados usando sua chave de criptografia quando estiverem de volta em um de seus dispositivos.

Não podemos ler seus dados. Nem qualquer espião em potencial, como seu provedor de serviços de Internet.

No caso raro de uma violação completa do servidor, seus dados permanecem criptografados - ninguém pode descriptografar seus arquivos sem saber sua senha.

## Qual criptografia você usa?

Usamos AES-256 padrão do setor para criptografar seus dados. AES-256 é uma especificação de criptografia de nível militar amplamente usada, por exemplo, em serviços bancários online.

Aqui estão os detalhes técnicos:

- Função de derivação de chave usada: scrypt com salt
- Algoritmo de criptografia usado: AES-256 usando GCM

## O que acontece se eu esquecer minha senha de criptografia?

Se você perder ou esquecer a senha de criptografia, não poderá conectar cofres adicionais ao seu cofre remoto. Como a senha de criptografia não é salva em nenhum lugar, ela é perdida para sempre.

Seus dados, no entanto, geralmente são armazenados com segurança localmente em cada um de seus dispositivos.

Para continuar usando o Obsidian Sync, sugerimos fazer uma reconfiguração completa para poder adicionar novos dispositivos ao seu sistema Sync:

1. Faça um backup completo do cofre em seu dispositivo principal, caso algo dê errado. Isso pode ser tão simples quanto fazer uma cópia da pasta do vault ou criar um arquivo zip a partir do vault.
2. Desconecte o cofre remoto em cada um de seus dispositivos. Isso pode ser feito em Configurações > Sincronizar > Escolher cofre remoto > (x) Desconectar.
3. Crie um novo cofre remoto em seu dispositivo principal na mesma página Configurações. Opcionalmente, você pode excluir o cofre remoto anterior, pois não possui a senha para ele. (Você pode ter que excluir o cofre remoto anterior se estiver no limite do cofre)
4. Aguarde a sincronização do seu dispositivo principal. Observe o indicador de sincronização na parte inferior direita da tela até que ele exiba uma marca de seleção verde.
5. Conecte cada um de seus dispositivos ao mesmo cofre remoto recém-criado. Ao conectar, você verá um aviso sobre a fusão do cofre, isso é esperado e você pode prosseguir. Aguarde até que cada dispositivo seja totalmente sincronizado antes de passar para o próximo. Isso reduz as chances de problemas.
6. Agora todos os seus dispositivos devem estar conectados ao novo cofre remoto.

## Onde você hospeda os servidores para o Obsidian Sync?

Usamos data centers da DigitalOcean, que estão localizados nos EUA.
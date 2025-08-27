# Teste Técnico - Recomendador de Produtos RD Station

Este projeto é uma implementação do teste técnico da RD Station para a vaga de desenvolvedor front-end. A aplicação permite que usuários selecionem preferências e funcionalidades desejadas e recebam recomendações de produtos RD Station correspondentes.

## Missão

Desenvolver a funcionalidade central de recomendação de produtos dentro de uma aplicação React.js. A lógica permite que os usuários selecionem suas preferências e funcionalidades desejadas e recebam recomendações de produtos correspondentes.

## Contexto

A aplicação já possui estrutura básica em React.js para o front-end e utiliza json-server para simular um servidor RESTful com dados de produtos. O layout é construído com Tailwind CSS. Seu foco é a lógica de recomendação e integração com a interface existente.

## Tecnologias Utilizadas

- React.js: Para o desenvolvimento do front-end
- json-server: Para simular um servidor RESTful com dados de produtos
- Tailwind CSS: Para estilização e layout responsivo

## Requisitos Técnicos

### Versão do Node.js

Este projeto requer Node.js versão 18.3 ou superior. Se você não tem essa versão instalada, siga as instruções abaixo para instalá-la usando `n` ou `nvm`.

#### Usando `n` (Node Version Manager):

1. Instale `n` globalmente (caso ainda não tenha): npm install -g n

2. Instale e use a versão 18.3 do Node.js: n 18.3

#### Usando `nvm` (Node Version Manager):

1. Instale `nvm` (caso ainda não tenha) seguindo as instruções em: https://github.com/nvm-sh/nvm

2. Instale e use a versão 18.3 do Node.js: nvm install 18.3 & nvm use 18.3

Após instalar a versão correta do Node.js, você pode prosseguir com a instalação das dependências do projeto e iniciar o desenvolvimento.


## Funcionalidades Implementadas

- Lógica de recomendação de produtos baseada nas entradas do usuário.
- Integração do formulário com a lista de recomendações.
- Serviço modular de recomendação (`recommendation.service.js`) capaz de lidar com diferentes tipos de preferências e funcionalidades.
- Testes unitários e de integração cobrindo as funcionalidades principais.
- Layout responsivo utilizando Tailwind CSS.

## Protótipo de Design

O design da aplicação foi criado no Figma e pode ser acessado aqui:  
[Protótipo RD Station](https://www.figma.com/design/YUjEFH1poWq9okt0NdeQ96/RD-Station?node-id=0-1&p=f&t=gWd1CpJH9PiLdzVi-0)


## Como Executar

1. Clone o repositório: `https://github.com/majudlorenzoni/case-RD-Station`
2. Instale as dependências: `yarn install`
3. Para instalar o projeto, execute o script `./install.sh` 
4. Inicie a aplicação: `yarn start`

## Como Executar os Testes
1. Vá até o diretório frontend: `cd frontend`
2. Inicie os testes: `yarn test`

### Scripts Disponíveis

- `start`: Inicia a aplicação React em modo de desenvolvimento.
- `start:frontend`: Inicia apenas a parte frontend da aplicação em modo de desenvolvimento.
- `start:backend`: Inicia apenas a parte backend da aplicação em modo de desenvolvimento.
- `dev`: Inicia simultaneamente a parte frontend e backend da aplicação em modo de desenvolvimento.

## Autor

Desenvolvido por Maria Júlia Lorenzoni.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

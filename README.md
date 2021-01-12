<div align="center" id="title">

  <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" height="130" img/>

  <h1>Typescript Project</h1>
</div>

<div align="center" id="short-description">

Projeto Typescript estruturado e configurado usando algumas boas práticas.

</div>

<div align="center" id="badges">

[![Travis Build](https://travis-ci.com/JorgeLNJunior/typescript-project.svg?branch=master)](https://travis-ci.com/github/JorgeLNJunior/typescript-project)
[![Coverage Status](https://coveralls.io/repos/github/JorgeLNJunior/typescript-project/badge.svg?branch=master&service=github)](https://coveralls.io/github/JorgeLNJunior/typescript-project?branch=master)
[![License](https://img.shields.io/github/license/JorgeLNJunior/typescript-project)](https://github.com/JorgeLNJunior/typescript-project/blob/master/LICENSE.md)
[![Release](https://img.shields.io/github/v/release/JorgeLNJunior/typescript-project?color=lgreen)](https://github.com/JorgeLNJunior/typescript-project/releases)

</div>

<div align="center">

[**URL para o projeto »**](https://github.com/JorgeLNJunior/typescript-project)

</div>

## Tabela de Conteúdos
* [Sobre o Projeto](https://github.com/JorgeLNJunior/typescript-project#sobre-o-projeto)
* [Rotas](https://github.com/JorgeLNJunior/typescript-project#rotas)
* [Tecnologias](https://github.com/JorgeLNJunior/typescript-project#tecnologias)
* [Instalação e configuração](https://github.com/JorgeLNJunior/typescript-project#instala%C3%A7%C3%A3o-e-configura%C3%A7%C3%A3o)
  * [Requisitos](https://github.com/JorgeLNJunior/typescript-project#requisitos)
  * [Opcional](https://github.com/JorgeLNJunior/typescript-project#requisitos)
  * [Instalação](https://github.com/JorgeLNJunior/typescript-project#instala%C3%A7%C3%A3o)
* [Licença](https://github.com/JorgeLNJunior/typescript-project#licen%C3%A7a)

## Sobre o Projeto
Projeto estruturado e configurado usando Typescript, Express, Jest, Travis CI, TypeORM, Swagger, Winston entre outros. Além de boas práticas como uso do ESLint + Prettier e CommitLint.

## Rotas

Informações básicas sobre as rotas da aplicação.
| HTTP   | Rota                        | Descrição                    | Autenticação |
|--------|-----------------------------|------------------------------|--------------|
| GET    | /users                      | retorna todos os usuários    | não          |
| GET    | /docs                       | documentação da API          | não          |

## Tecnologias
Este projeto foi construído com as seguintes tecnologias:
- [Node.js »](https://nodejs.org)
- [Express.js »](https://expressjs.com)
- [Typescript »](https://www.typescriptlang.org)
- [Jest »](https://jestjs.io)
- [Travis CI »](https://travis-ci.org)
- [Swagger »](https://swagger.io)
- [TypeORM »](https://typeorm.io)

## Instalação e configuração
### Requisitos
  - [Node.js »](https://nodejs.org/en/download) na sua versão 12.x
  - Um Banco de dados suportado pelo [TypeORM »](https://typeorm.io)

### Opcional
  - Contas nas plataformas [Travis »](https://travis-ci.com) e
  [Coveralls »](https://coveralls.io)

### Instalação
  1. Clone o projeto: `git clone https://github.com/JorgeLNJunior/typescript-project.git` ou clique no botão `Use this template` no GitHub
  2. Instale as dependências: `npm i`
  3. Renomeie os arquivos `.env.example` e `.env.test.example` para `.env` e `.env.test` respectivamente
  4. Execute as migrations com o comando `npm run typeorm migration:run`
  5. Para iniciar a aplicação execute `npm start:dev`, para os testes execute `npm test`
  6. Altere o projeto como desejar

## Licença
Projeto sob a licença [MIT »](https://github.com/JorgeLNJunior/typescript-project/blob/master/LICENSE.md)

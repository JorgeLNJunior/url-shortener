<div align="center" id="title">
  <h1>URL Shortener</h1>
</div>

<div align="center" id="short-description">

Simples API para encurtar URL's.

</div>

<div align="center" id="badges">

[![Build Status](https://travis-ci.com/JorgeLNJunior/url-shortener.svg?token=sPCsEGZzX3GY8pdsd4C8&branch=master)](https://travis-ci.com/JorgeLNJunior/url-shortener)
[![Coverage Status](https://coveralls.io/repos/github/JorgeLNJunior/url-shortener/badge.svg?branch=master&service=github)](https://coveralls.io/github/JorgeLNJunior/url-shortener?branch=master)
[![License](https://img.shields.io/github/license/JorgeLNJunior/url-shortener)](https://github.com/JorgeLNJunior/url-shortener/blob/master/LICENSE.md)
[![Release](https://img.shields.io/github/v/release/JorgeLNJunior/url-shortener?color=lgreen)](https://github.com/JorgeLNJunior/url-shortener/releases)

</div>

<div align="center">

[**API »**](https://github.com/JorgeLNJunior/url-shortener)

</div>

## Tabela de Conteúdos
* [Rotas](https://github.com/JorgeLNJunior/url-shortener#rotas)
* [Tecnologias](https://github.com/JorgeLNJunior/url-shortener#tecnologias)
* [Instalação e configuração](https://github.com/JorgeLNJunior/url-shortener#instala%C3%A7%C3%A3o-e-configura%C3%A7%C3%A3o)
  * [Requisitos](https://github.com/JorgeLNJunior/url-shortener#requisitos)
  * [Opcional](https://github.com/JorgeLNJunior/url-shortener#requisitos)
  * [Instalação](https://github.com/JorgeLNJunior/url-shortener#instala%C3%A7%C3%A3o)
* [Licença](https://github.com/JorgeLNJunior/url-shortener#licen%C3%A7a)

## Rotas

Informações básicas sobre as rotas da aplicação.
| HTTP   | Rota                        | Descrição                       | Autenticação |
|--------|-----------------------------|---------------------------------|--------------|
| GET    | /:slug                      | redireciona para a URL original | não          |
| GET    | /shorten                    | encurta uma URL                 | não          |
| GET    | /docs                       | documentação da API             | não          |

## Tecnologias
Este projeto foi construído com as seguintes tecnologias:
- [Node.js »](https://nodejs.org)
- [Express.js »](https://expressjs.com)
- [Typescript »](https://www.typescriptlang.org)
- [Jest »](https://jestjs.io)
- [Travis CI »](https://travis-ci.org)
- [Swagger »](https://swagger.io)
- [Mongoose »](https://mongoosejs.com)

## Instalação e configuração
### Requisitos
  - [Node.js »](https://nodejs.org/en/download) na sua versão 12.x
  - Um Banco de dados [Mongo »](https://www.mongodb.com)

### Instalação
  1. Clone o projeto: `git clone https://github.com/JorgeLNJunior/url-shortener.git` ou clique no botão `Use this template` no GitHub
  2. Instale as dependências: `npm i`
  3. Renomeie o arquivo `.env.example` para `.env`
  4. Para iniciar a aplicação execute `npm start:dev`, para os testes execute `npm test`

## Licença
Projeto sob a licença [MIT »](https://github.com/JorgeLNJunior/url-shortener/blob/master/LICENSE.md)

# Projeto Blog API

Projeto realizado durante módulo de Back-end do curso de desenvolvimento web da Trybe.


  <summary><strong>O que foi feito</strong></summary></br>

  Neste projeto desenvolvi uma API e um banco de dados para a produção de conteúdo para um blog! Para acessar rotas da aplicação é necessário login.

  A aplicação foi desenvolvida com:

  - `Node.js`
  - `Sequelize`
  - `JWT`
  - `Arquitetura MSC`
  - `docker`
  - `docker-compose`
  - `MySql`
  - `Express`;


  <summary><strong>Como rodar o projeto</strong></summary></br>

  **Com Docker:**

  ** :warning: Antes de começar, seu docker-compose precisa estar na versão 1.29 ou superior.

- `docker-compose up -d --build`
- `docker exec -it blogs_api bash`
- `npm install`
- `npm run prestart`
- `npm run seed`
- `npm run debug`

**Localmente:**

**Necessita ter um banco de dados(MySql) instalado localmente**

- `npm install`
- `npm run prestart`
- `npm run seed`
- `npm run debug`

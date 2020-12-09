[![Build Status](https://travis-ci.org/danielso2007/angula7-estudo-master-detail.svg?branch=development)](https://travis-ci.org/danielso2007/angula7-estudo-master-detail)
![version](https://img.shields.io/badge/version-0.1.0-blue.svg)
![GitHub package version](https://img.shields.io/github/package-json/v/danielso2007/angula7-estudo-master-detail.svg)
[![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/danielso2007/angula7-estudo-master-detail.svg)](https://github.com/danielso2007/angula7-estudo-master-detail/pulls)
[![GitHub issues](https://img.shields.io/github/issues/danielso2007/angula7-estudo-master-detail.svg)](https://github.com/danielso2007/angula7-estudo-master-detail/issues?q=is%3Aopen+is%3Aissue)
![GitHub last commit](https://img.shields.io/github/last-commit/danielso2007/angula7-estudo-master-detail.svg)
[![GitHub issue/pull request author](https://img.shields.io/github/issues/detail/u/danielso2007/angula7-estudo-master-detail/1.svg)](https://github.com/danielso2007/angula7-estudo-master-detail/pulls)
![GitHub contributors](https://img.shields.io/github/contributors/danielso2007/angula7-estudo-master-detail.svg)
![GitHub top language](https://img.shields.io/github/languages/top/danielso2007/angula7-estudo-master-detail.svg)
[![GitHub](https://img.shields.io/github/license/danielso2007/angula7-estudo-master-detail.svg)](https://github.com/danielso2007/angula7-estudo-master-detail)
[![GitHub All Releases](https://img.shields.io/github/downloads/danielso2007/angula7-estudo-master-detail/total.svg)](https://github.com/danielso2007/angula7-estudo-master-detail/archive/master.zip)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[![GitHub followers](https://img.shields.io/github/followers/danielso2007.svg?label=Follow&style=social)](https://github.com/danielso2007?tab=followers)

# Finansys

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Frameworks intalados

- `npm i bootstrap --save`
  - [Bootstrap](https://www.npmjs.com/package/bootstrap)
- `npm i angular-imask --save`
  - [Angular-imask](https://www.npmjs.com/package/angular-imask)
- `npm i chart.js --save`
  - [chart.js](https://www.npmjs.com/package/chart.js)
- `npm i currency-formatter --save`
  - [Currency-formatter](https://www.npmjs.com/package/currency-formatter)
- `npm i jquery --save`
  - [Jquery](https://www.npmjs.com/package/jquery)
- `npm i moment --save`
  - [Moment](https://www.npmjs.com/package/moment)
- `npm i primeicons --save`
  - [PrimeNg Icons](https://www.npmjs.com/package/primeicons)
- `npm i primeng --save`
  - [PrimeNg](https://www.npmjs.com/package/primeng)
- `npm i toastr --save`
  - [Toastr](https://www.npmjs.com/package/toastr)

## API REST instalado

Uma API da web em memória para demonstrações e testes angulares que emulam operações CRUD em uma API RESTy.

Ele intercepta Angular Httpe HttpClientsolicita que, de outra forma, fosse para o servidor remoto e os redirecionasse para um armazenamento de dados na memória que você controla.

`npm i --save angular-in-memory-web-api`

[Angular in-memory-web-api](https://github.com/angular/in-memory-web-api)

## Configuração do angular.json (architect)

```javascript
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/toastr/build/toastr.min.css",
  "node_modules/primeicons/primeicons.css",
  "node_modules/primeng/resources/themes/nova-light/theme.css",
  "node_modules/primeng/resources/primeng.min.css"
],
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  "node_modules/chart.js/dist/Chart.bundle.min.js"
]
```

# Padrão de mensagem de commit (CHANGELOG automatizados):

O projeto terá o controle de versão e a geração do CHANGELOG automatizados com mensagens de confirmação  convencionais seguindo o padrão estabelecido por este documento.

`Lembrando: A mensagem de commit será pré-estabelecida no issue`

Para os commites do projeto, se o mensagem do commite não for definida no issue, usar o padrão definido abaixo:

_Para bugs:_

```sh
git commit -m "fix: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para os demais:_

```sh
git commit -m "feat: texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Para escopo opcional de um commit:_

```sh
git commit -m "feat(optional_scope): texto_do_que_foi_feito_no_issue (número_do_issue_com_#)"
```

_Algumas regras:_

1. Commits deve ser prefixado com um tipo, o qual consiste de um substantivo, `feat`, `fix`, etc, seguida de dois pontos e um espaço.
2. O tipo `feat`DEVE ser usado quando um commit adiciona um novo recurso ao seu aplicativo ou biblioteca.
3. O tipo `fix` DEVE ser usado quando um commit representa uma correção de bug para seu aplicativo.
4. Um escopo opcional pode ser fornecido após um tipo. Um escopo é uma frase que descreve uma seção da base de código entre parênteses, por exemplo, `fix(parser)`:

### Gerando o CHANGELOG do projeto

```sh
npm run release -- --release-as 1.0.0
```

### Referências:
[Standard Version](https://github.com/conventional-changelog/standard-version/blob/master/README.md)

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0-beta.2/)
![header](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-fundamentos-node/master/assets/header-desafios.png)

<h3 align="center">
  Desafio 05: Primeiro projeto Node.js
</h3>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/salomaocristiano/gostack11-desafio-fundamentos-node.svg">

  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/salomaocristiano/gostack11-desafio-fundamentos-node.svg">

  <a href="https://www.codacy.com/app/salomaocristiano/gostack11-desafio-fundamentos-node?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=salomaocristiano/gostack11-desafio-fundamentos-node&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/codacy/grade/04db4b43120b4d05b9b39c9d2da97300.svg">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/salomaocristiano/gostack11-desafio-fundamentos-node.svg">
  <a href="https://github.com/salomaocristiano/gostack11-desafio-fundamentos-node/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/salomaocristiano/gostack11-desafio-fundamentos-node.svg">
  </a>

  <a href="https://github.com/salomaocristiano/gostack11-desafio-fundamentos-node/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/salomaocristiano/gostack11-desafio-fundamentos-node.svg">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/salomaocristiano/gostack11-desafio-fundamentos-node.svg">
</p>

## Screenshot

<p align="center">

![image-example](https://raw.githubusercontent.com/salomaocristiano/gostack11-desafio-fundamentos-node/master/assets/bootcamp.jpg)

</p>

## :rocket: Sobre o desafio

Aplicação serve para armazenar transações financeiras de entrada e saída, que deve permitir o cadastro e a listagem dessas transações. Utilizando Node.js junto ao TypeScript, utilizando o conceito de models, repositories e services!

### Rotas da aplicação

- **`POST /transactions`**: A rota deve receber `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saidas (retiradas). Ao cadastrar uma nova transação, ela deve ser armazenada dentro de um objeto com o formato como o seguinte:

```json
{
  "id": "uuid",
  "title": "Salário",
  "value": 3000,
  "type": "income"
}
```

- **`GET /transactions`**: Essa rota deve retornar uma listagem com todas as transações que você cadastrou até agora, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota deve retornar um objeto com o formato a seguir:

```json
{
  "transactions": [
    {
      "id": "uuid",
      "title": "Salário",
      "value": 4000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Freela",
      "value": 2000,
      "type": "income"
    },
    {
      "id": "uuid",
      "title": "Pagamento da fatura",
      "value": 4000,
      "type": "outcome"
    },
    {
      "id": "uuid",
      "title": "Cadeira Gamer",
      "value": 1200,
      "type": "outcome"
    }
  ],
  "balance": {
    "income": 6000,
    "outcome": 5200,
    "total": 800
  }
}
```

### Específicação dos testes

Para esse desafio temos os seguintes testes:

- **`should be able to create a new transaction`**: Para que esse teste passe, sua aplicação deve permitir que uma transação seja criada, e retorne um json com a transação criado.

- **`should be able to list the transactions`**: Para que esse teste passe, sua aplicação deve permitir que seja retornado um objeto contendo todas as transações junto ao balanço de income, outcome e total das transações que foram criadas até o momento.

- **`should not be able to create outcome transaction without a valid balance`**: Para que esse teste passe, sua aplicação não deve permitir que uma transação do tipo `outcome` extrapole o valor total que o usuário tem em caixa, retornando uma resposta com código HTTP 400 e uma mensagem de erro no seguinte formato: `{ error: string }`

## :memo: Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

/* FUNÇÕES */

/*
- É uma estrutura de dados
- São bastante utilizados para agrupar e reutilizar códigos

-> declaração da função - function statement/declaration

function <nomeDaFunção>() {
  bloco de código
}
*/
function umaFuncao() {
  console.log('Esta é uma função')
}

/*
-> executar / rodar / chmar / invocar a função
   execute / run   / call  / invoke

  escrever o nome da função seguido de parênteses
*/
umaFuncao()
umaFuncao()
umaFuncao()

/* 
-> podemos declarar funções dentro de variáveis
 essa é uma expressão anônima/ function expression / function anonymous
*/
const teste = function () {
  console.log('\nteste expressão anônima')
}

teste()

/* 
-> utilizando parâmetros (parameters) e argumentos (arguments)

*/
const sum = function (number1, number2) {
  //number1 e number2 são parâmetros
  console.log(number1 + number2)
}

sum(5, 8) // 5 e 8 são argumentos

let primeiroNumero = 15
let segundoNumero = 59
sum(primeiroNumero, segundoNumero)

// adicionando returno a função
const sum2 = function (number1, number2) {
  return number1 + number2
}

let resultado = sum2(5, 3)

console.log(resultado)

/*
Arrow function

substitui-se a palavra "function" por "=>" após os parenteses

*/

const sayMyName = (nome, sobrenome) => {
  console.log(`Seu nome é ${nome} ${sobrenome}`)
}

sayMyName('jean', 'moreira')

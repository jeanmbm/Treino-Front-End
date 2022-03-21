/* Expressões e Operadores (Expressions and Operators)*/

/*
EXPRESSÃO 

é qualquer unidade válida de código que é resolvida como um valor.
qualquer linha de código que resolve alguma coisa.
*/
let number // esta é uma expressão

/*expressão new
cria um novo objeto do tipo escolhido*/
let string = new String('Jean') //cria um objeto do tipo String
console.log(string)

/*
OPERADOR

operadores unários
*/

//typeof -> diz qual é o tipo de dados
const variavel = 'Jean'
console.log(typeof variavel)

//delete -> deleta uma propriedade existente dentro de um objeto
const person = {
  name: 'Jean',
  subName: 'Moreira',
  age: 19
}
console.log(person)

delete person.subName
console.log(person)

/*
operadores aritméticos
*/

// multiplicação *
const mumltiplicacao = 5 * 8
console.log(`Multiplicação: ${mumltiplicacao}`)

// divisão /
const divisao = 10 / 2
console.log(`Divisão: ${divisao}`)

// soma +
const soma = 52 + 14
console.log(`Soma: ${soma}`)

// subtração -
const subtracao = 20 - 5
console.log(`Subtração: ${subtracao}`)

// resto da divisão %
const restoDivisao = 10 % 3
console.log(`Resto da divisão: ${restoDivisao}`)

// incremento ++
var incremento = 0
console.log(incremento)
incremento++
console.log(incremento)
console.log(++incremento)

// decremento --
var decremento = 0
console.log(decremento)
decremento--
console.log(decremento)
console.log(--decremento)

// exponencial **
const exponencial = 2 ** 4
console.log(exponencial)

// grouping operator - operador agrupador ()
let value = 5 + 3 - 8 * 2
console.log(value)
value = (5 + 3) * (8 - 2)
console.log(value)
value = (5 + (3 - 8)) * 2
console.log(value)

/**
comparção 
*/
let five = 5
let eleven = 11

// igual a ==
console.log(five == eleven) // false
console.log(five == '5') // true
console.log(eleven == 11) // true

// diferente de !=
console.log(five != eleven) // true
console.log(five != 5) // false
console.log(eleven != 11) // false

//extritamente igual a === (compara vlaores e tipos)
console.log(five === eleven) // false
console.log(five === '5') // false
console.log(eleven === 11) // true

// extritamente diferente de !==
console.log(five !== eleven) // true
console.log(five !== '5') // true
console.log(eleven !== 11) // false

// maior que >
console.log(five > eleven)
console.log(eleven > five)

// maior igual a >=
console.log(five >= 5)
console.log(eleven >= 5)

// menor que <
console.log(five < eleven)
console.log(eleven < five)

// menor igual a <=
console.log(five <= 5)
console.log(eleven <= 5)

/*
operadores de atribuição (assignment)
*/
let x

// assignment (atribuição)
x = 5
console.log(x)

// additions assignment (atribuição de adição)
x += 2 // x = x + 2
console.log(x)

// subtraction assignment (atribuição de subtração)
x = 5
x -= 2 // x = x - 2
console.log(x)

// multiplication assignment (atribuição de multiplicação)
x = 5
x *= 2 // x = x * 2
console.log(x)

// division assignment (atribuição de divisão)
x = 5
x /= 2 // x = x / 2
console.log(x)

// exponention assignment (atribuição de exponenciação)
x = 5
x **= 2 // x = x^2
console.log(x)

/*
operadores lógicos
*/
let pao = true
let queijo = true

// and && (um e outro)
console.log(pao && queijo)

// or || (um ou outro)
console.log(pao || queijo)

// not ! (negação)
console.log(!pao)

/*
operador condicional (ternários)

resultado dpende da condição

condição então valor 1 senão valor 2
condition ? value1 : value2
*/
let idade = 19
const podeVotar = idade >= 16 ? 'Pode votar' : 'Não pode votar'
console.log(podeVotar)

/*
Operador de string
*/
// concatenação (concatenation)
console.log('Jean ' + 'Moreira ' + 12648) // une strings

/*
Truthy e Falsy
*/

/*  
  Falsy ->  quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops)
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log(NaN ? 'verdadeiro' : 'falso')

/* 
  Truthy -> quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops)
	Todos os valores abaixo seriam representados como true em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log(Infinity ? 'verdadeiro' : 'falso')

/*
Precedência dos operadores

// De cima para baixo, do mais importante ao menos importante.

* grouping                      ( )
* negação e incremento          ! ++ --
* multiplicação e divisão       * /
* adição e subtração            + -
* relacional                    < <= > >=
* igualdade                     == != === !==
* AND                           && 
* OR                            ||
* condicional                   ?:
* assignment (atribuição)       = += -= *= %= 
*/

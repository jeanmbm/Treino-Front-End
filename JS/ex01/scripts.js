console.log('TIPOS DE DADOS')

console.log('--> STRINGS')
/*
Cadeia de caracteres 

Para escrevermos strings no nosso código, podemos utilizar:

"" // aspas duplas
'' // aspas simples
`` // template literals ou templates strings (crase)

Exemplos:
*/

console.log(
  "Utiliza-se as aspas duplas quando se deseja utilizar 'aspas simples' dentro do texto"
)

console.log(
  'Utiliza-se as aspas simples quando se deseja utilizar "aspas duplas" dentro do texto'
)
console.log(
  `No caso da crase (template literals ou templates strings) pode-se utilizar tanto 'aspas simples' quanto "aspas duplas" dentro do mesmo.
  Pode-se utilzar também multiplas linhas (pular linhas) que o texto é reconhecido.
  Além disso, as crases permitem utilizar expressões de linguagem, como 1 + 1 = ${
    1 + 1
  }
  `
)

console.log('--> NUMBER')
/*
Tipo de dado que representa os números 

Podemos ter:

Inteiros: 1, 2, 58, 186, -56, -2, -436...
Reais: 12.5, 475.65...
NoN: Nota a number
Infinity: Infinito

Exemplos:
*/

console.log(23) // inteiro
console.log(-61) // inteiro
console.log(12.5) // real
console.log(-23.7851) // real
console.log(23 / 'adb') // NoN
console.log(23 === Infinity) // Infinity, como 23 não é igual a infinito, ele retorna false
console.log(Infinity) // Infinity

console.log('--> BOOLEAN')
/*
Tipo de dado lógico, onde só há dois valores:

true == verdadeiro
false == falso

EXEMPLOS:
*/
console.log(true)
console.log(false)
console.log(23 == 23)
console.log(23 == 148)

console.log('--> UNDEFINED vs NULL')
/*
Valor indefinido vs nulo, objeto que não há nada dentro

EXEMPLOS:
*/
console.log(undefined)
console.log(null)
console.log(undefined === null)

console.log('--> OBJECT')
/*
Dado estrutural, possui proriedades/atributos e/ou /funcionaliadades/metodos

EXEMPLOS:
*/
console.log({
  nome: 'Jean',
  idade: 19,
  andar: function () {
    console.log('andando')
  }
})

console.log('--> ARRAY')
/*
Como uma lista, é um agrupamento de dados

EXEMPLOS:
*/
console.log(['leite', 'ovos', 2, 3, 3 + 5])

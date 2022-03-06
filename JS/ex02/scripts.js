/* VARIÁVEIS */

/*
Locais/espaço que recebem algum dado/valor

JS é uma linguagem fracamente tipada e dinâmica, ou seja, não é necessário declarar o tipo da variável e ela pode mudar caso outro tipo de dado seja alocado para a mesma variavel (com excessão do const)

Temos 3 tipos de variáveis no JavaScript:
var -> variável do tipo global e local (pode ser utilizado dentro e fora do escopo de bloco)
const -> variável do tipo local (pode ser utilizado somente dentro do escopo em que foi criado)
let ->

*/

//declaração or declaration
var name

// assignment or atribuição de valores
name = 'Jean'

// vendo o tipo de dado que foi colocado na variável
console.log(typeof name)

//agrupando declarações
let age, isHuman

age = 19
isHuman = true

// multiplos argumentos na função
console.log(name, age, isHuman)

//concatenando valores
console.log('O ' + name + ' tem ' + age + ' anos')

// interpolando ($) valores com tamplate literals or template strings (`)
console.log(`o ${name} tem ${age} anos`)

/* OBJETOS */

const person = {
  name: 'Jean',
  age: 19,
  isAdmin: true
}

// mostrando somente um atributo do objeto, só utilizar o nome do bjeto seguido de '.' seguido do nome da propriedade

console.log('O ' + person.name + ' tem ' + person.age + ' anos')
//ou
console.log(`o ${person.name} tem ${person.age} anos`)

/* ARRAY */

const animals = ['Elephant', 'Dog', 'Cat', 'Bird']

// acessando valores do array
console.log(animals[0]) //Elephant
console.log(animals[3]) //Bird

// mostrando quatidade de valores no array
console.log(animals.length)

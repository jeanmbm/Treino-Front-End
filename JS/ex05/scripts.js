/* PROTOTYPE */

/*
mecanismo pelo qual objetos JavaScript herdam recursos uns dos outros
*/

/*
Type conversion (typecasting) vs Type coersion

- Alteração de um tipo de dado em outro
- type conversion é quando nós mesmo alteramos esse tipo de dado
- type coersion é quando o proprio JS faz essa mudança
*/

console.log('9' + 7) // nesse exemplo, o proprio JS transforma o 5 em uma String

console.log(Number('9') + 7) // neste exemplo, nós mesmos fazemos a converção(typecasting) do dado de String para number

/*
Manipulando Strings e Numeros
*/

//Transformando String em Numero
let string = '5674'
console.log(Number(string))

//Transformando Numero em String
let number = 614673
console.log(String(number))

// Contando caracteres
let word = 'pneumoultramicroscopicossilicovulcanoconiótico'
console.log(word.length)

let number2 = 5789614
console.log(String(number2).length) // .length só mostra a quantidade para String, por isso faz-se o cast no numero para String

// Transformar numero real grande para 2 casas
let number3 = 4195.4589419
console.log(number3)
console.log(number3.toFixed(2))

// Trocar ponto por virgula
console.log(number3.toFixed(2).replace('.', ','))

// Transformando letras minúsculas em MAIUSCULAS
let word2 = 'qualquer coisa'
console.log(word2.toUpperCase())

// Transformando letras minúsculas em MAIUSCULAS
let word3 = 'OUTRO QUALQUER COISA'
console.log(word3.toLowerCase())

// Encontrando palavra em frases
let frase =
  'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.'
console.log(frase.includes('dor'))
console.log(frase.includes('Dor')) // esse método é case sensitive

/*
Manipulando Array
*/

// Crindo array com construtor
let array = [1, 2, 3, 4, 5, 6]
let array2 = new Array('a', 'b', 'c', 'd')
let array3 = new Array(5) // cria um array com 5 posições vazios

// Contando elementos de um array
console.log(array.length)
console.log(array2.length)

// Transformando uma string em elementos de um array
let word4 = 'qualquer'
console.log(Array.from(word4))

let array4 = ['html', 'css', 'js', 'java']
// adicionando item no fim do array
array4.push('pyton')
console.log(array4)

// adicionando item no começo do array
array4.unshift('MySQL')
console.log(array4)

// removendo item no fim do array
array4.pop()
console.log(array4)

// removendo item no começo do array
array4.shift()
console.log(array4)

// pegar somente alguns elementos do array
console.log(array4.slice(1, 3))
console.log(array4.slice(0, 2))

// removendo 1 ou mais itens em qualquer posição
array4.splice(1, 2)
console.log(array4)

// encontrando a posição de um elemento
array4 = ['html', 'css', 'js', 'java']
let index = array4.indexOf('java')
console.log(index)
let index2 = array4.indexOf('html')
console.log(index2)

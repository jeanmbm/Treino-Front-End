/* EXERCITANDO */

// 1. Declare uma variável de nome weight
let weight

// 2. Que tipo de dado é a variável acima?
// R: É um undefined
console.log(typeof weight)

/*

  3. Declare uma variável e atribua valores para cada um dos dados:
    -> name: String
    -> age: Numer (integer)
    -> stars: Number (float)
    -> isSubscribed: Boolean

*/

let name = 'Fulano de tal'
let age = 56
let stars = 4.7
let isSubscribed = true

//  4. A variável student abaixo é de que tipo de dado?

let student = {}
// R:É do tipo objeto or object

//    4.1. Atribua a ela as mesma propriedades e valores do ex. 03
student = {
  name: 'Fulano de tal',
  age: 56,
  weight: 85.8,
  isSubscribed: true
}

/*
    4.2. Mostre no console a seguinte mensagem: 
      <name> de idade <age> pesa <weight> kg.
      OBS.: substitua os <> pelos valores de cada propriedade
*/
console.log(`${student.name} de idade ${student.age} pesa ${student.weight} kg`)

/*
    5. Declare uma variável do tipo array, de mote students e atribua a ela nenhum valor, ou seja, somente o Array vazio
*/
let students = []

/*
    6. Reatribua valor para a variavel acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)
*/
students = [student]

/*
    7. Coloque no console o valor da posição zero do Array acima
*/
console.log(students[0])

/*
    8. Crie um novo student e coloque na posição 1 do Array students
*/
let newStudent = {
  name: 'Ciclano',
  age: 22,
  weight: 73.6,
  isSubscribed: false
}

students[1] = [newStudent]

/*
    9. Sem rodar o codigo responda qual é a resposta do codigo abaixo e por que? Após sua resposta, rode o código e veja se você acertou

    console.log(a)
    var a = 1

    R: Será undefined, pos na hora da impressão, o a não havia recebido valor
*/
console.log(a)
var a = 1

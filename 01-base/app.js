let num = 42 
let firstName = 'Tigran'
const isProgrammer = true

/* Can do
let $ = 'test'
let $num = 42
let num$ = 42
let _ = 49
let _num = 12
let num_ = 12
let first_name = 'Elena' // bad
let myNum = 34 // good (Camel Case)
let num42 = 10
*/

/* Restricted (запрещенные названия переменных)
let 42num = '11' // переменная начинается на цифры
let my-num = 1 // переменная через дефис
let const // зарезервированные слова 
*/

// firstName = 'Nane'
// isProgrammer = false // error because of const

// вывод результатов

// alert(firstName)
// console.log('Test:', num, isProgrammer)

// console.log(num + 10)
// console.log(num - 10)
// console.log(num * 10)
// console.log(num / 10)
// console.log(num)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// num2 = num2 + 1
// console.log(num, num2)

// let num3 = (num + 10 * 2) / (5 - 1) 
// console.log(num3)

// const fullName = firstName + ' Vartanyan'
const fullName = firstName + ' ' + 'Vartanyan'
console.log(fullName)
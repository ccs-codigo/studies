"use strict" 
//"use strict" deve ser a primeira linha do meu código na frente até mesmo de comentários
// y = 10

function foo() {
    "use strict"
    let x = 20
}

foo()
// console.log(x)
// console.log(y)

// function dobrar(n1, n1){
//     "use strict"
//     return n1 * n1
// }

// console.log(dobrar(5))

// function Teste() {
//     console.log(this)
//     this.a = "a"
// }

// Teste()

let msg = "uma string"
msg.count = 0
console.log(msg)
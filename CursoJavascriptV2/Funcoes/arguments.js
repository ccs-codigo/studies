// function somar(arr) {
//     let total = 0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return total
// }

// console.log(somar([1, 2, 3]))

function somar(arr) {
    console.log(arguments)
    let total = 0
    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i]
    }
    return total
}

console.log(somar.name)//propriedade name retorna o nome da função


// console.log(somar([1, 2, 3]))
console.log(somar(1, 2, 3, 4, 5, 6, 7, 8, 9))
console.log(somar(1, 2, 3, 10, 20, 56, 80))

//arguments nao existe dentro de uma arrow function
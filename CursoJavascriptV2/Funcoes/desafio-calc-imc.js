function calcIMC(p, a) {
    if (p === undefined || a === undefined) {
        throw new Error("Need two parameters!!!");
    }
    return p / (a * a)
}

function classIMC(imcResult) {
    if (imcResult <= 16.9) {
        return `Classificação do IMC: Muito abaixo do peso`
    } else if (imcResult <= 18.4) {
        return `Classificação do IMC: Abaixo do peso`
    } else if (imcResult <= 24.9) {
        return `Classificação do IMC: Peso normal`
    } else if (imcResult <= 29.9) {
        return `Classificação do IMC: Acima do peso`
    } else {
        return `Classificação do IMC: Obesidade`
    }
}

let imc = calcIMC(92, 1.80).toFixed(2)
console.log(`IMC= ${imc}`)
console.log(classIMC(imc))
function calcIMC(p, a, cb) {
    let imc = (p / (a * a)).toFixed(2)

    if (isNaN(imc)) {
        return 0
    } else if (typeof cb !== "function") {
        return imc
    } else {
        return imc + (" - ") + cb(imc)
    }
}

const cbFn = function callBack(cbClass) {

    if (cbClass <= 16.9) {
        return `Classificação do IMC: Muito abaixo do peso`
    } else if (cbClass <= 18.4) {
        return `Classificação do IMC: Abaixo do peso`
    } else if (cbClass <= 24.9) {
        return `Classificação do IMC: Peso normal`
    } else if (cbClass <= 29.9) {
        return `Classificação do IMC: Acima do peso`
    } else {
        return `Classificação do IMC: Obesidade`
    }
}

console.log(calcIMC(80, 1.80, cbFn))
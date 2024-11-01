function calcIMC(peso, altura, callback) {
    if (typeof peso !== 'number' || typeof altura !== 'number' || peso <= 0 || altura <= 0) {
        return "Erro: peso e altura devem ser números válidos.";
    }

    const imc = (peso / (altura ** 2)).toFixed(2);

    if (typeof callback === "function") {
        return `${imc} - ${callback(imc)}`;
    }

    return imc;
}

const classificarIMC = (imc) => {
    if (imc <= 16.9) return "Classificação do IMC: Muito abaixo do peso";
    if (imc <= 18.4) return "Classificação do IMC: Abaixo do peso";
    if (imc <= 24.9) return "Classificação do IMC: Peso normal";
    if (imc <= 29.9) return "Classificação do IMC: Acima do peso";
    return "Classificação do IMC: Obesidade";
};

console.log(calcIMC(80, 1.80, classificarIMC));

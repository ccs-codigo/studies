let arr = [1, 2, 3, 4, 5];

// console.log(arr.reverse())

let j = 0;
let soma = arr.reduce(function (acumulador, valorAtual, i, _arr) {
  console.log("i: ", i);
  console.log("j: ", j++);
  console.log("acumulador: ", acumulador, " ---- atual: ", valorAtual);
  return acumulador + valorAtual;
}, " --- ");

console.log(soma);
console.log(arr);

const nomes = ["Daniel", "Maria", "Joana", "Joao"];
let nomesPorOrdem = nomes.reduce(function (nomes, nomeAtual) {
  let primeiraLetra = nomeAtual[2];
  if (nomes[primeiraLetra]) {
    nomes[primeiraLetra]++;
  } else {
    nomes[primeiraLetra] = 1;
  }
  return nomes;
}, {});

console.log(nomesPorOrdem);

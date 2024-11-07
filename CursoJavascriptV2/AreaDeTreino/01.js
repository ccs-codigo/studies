// 1-Crie um array de 5 números e imprima o primeiro e o último elemento.
const numeros = [2, 5, 10, 15, 30];
console.log(numeros[0] + " - " + numeros[numeros.length - 1]);

// 2-Adicione um número ao final de um array e, em seguida, remova o primeiro elemento. Exiba o array atualizado.
const arrNumeros = [10, 20, 30, 50, 60];
// Adiciona um número ao final do array
arrNumeros.push(75);
// Remove o primeiro elemento
arrNumeros.shift();
// Exibe o array atualizado
console.log(arrNumeros);

// 3-Dado um array de números, calcule a soma de todos os elementos.
const arrNumbers = [1, 2, 3, 4, 5, 6];
const soma = arrNumbers.reduce(function (acumulador, elemento) {
  return acumulador + elemento;
}, 0);
console.log(soma); // Saída: 21

// 5-Dado um array de strings, crie um novo array com o comprimento de cada string.
const arrString = ["Joao", "Gabriel", "Larissa", "Eliza", "Saturnino"];
const arrComprimentoString = arrString.map(function (word) {
  return word.length;
});
console.log(arrString);
console.log(arrComprimentoString);

// 6-Remova todos os números menores que 10 de um array e exiba o resultado.
let arrTeste = [1, 2, 3, 4, 10, 20, 30, 40];
arrTeste = arrTeste.filter(function (element) {
  return element >= 10;
});
console.log(arrTeste); // Saída: [10, 20, 30, 40]

// 7-Inverta os elementos de um array sem usar métodos embutidos como reverse.
let arrInverter = [1, 2, 3, 4, 5, 6];
let left = 0;
let right = arrInverter.length - 1;
while (left < right) {
  // Troca os elementos das extremidades
  let temp = arrInverter[left];
  arrInverter[left] = arrInverter[right];
  arrInverter[right] = temp;
  // Move os índices para o próximo par de elementos
  left++;
  right--;
}
console.log(arrInverter); // Saída: [6, 5, 4, 3, 2, 1]

// 8-Combine dois arrays em um só, sem usar o método concat, e exiba o resultado.
const arr1 = [15, 24, 33, 54, 85];
const arr2 = ["teste", "abc", "gg"];
const combinedArray = [...arr1, ...arr2];
console.log(combinedArray);

// 9-Dado um array de nomes, remova todos os nomes duplicados e exiba o array sem repetições.
const nomesArray = [
  "Gabriel",
  "Larissa",
  "Eliza",
  "Saturnino",
  "Gabriel",
  "Daniel",
  "Daniel",
  "Paulo",
];
const nomesUnicos = nomesArray.reduce(function (nomesSemRepeticao, nomeAtual) {
  // verificando se é menor que 0 pois nesse caso -1 é igual a false
  if (!nomesSemRepeticao.includes(nomeAtual)) {
    nomesSemRepeticao.push(nomeAtual);
  }
  return nomesSemRepeticao;
}, []);
console.log(nomesUnicos);
// resultado esperado: "Larissa Eliza Saturnino Paulo"

// 10-Crie uma função que, dado um array, retorne apenas os elementos que estão em posições pares.

(function () {
  const arrays = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const elementosPares = [];

  for (let i = 0; i < arrays.length; i++) {
    if (i % 2 === 0) {
      elementosPares.push(arrays[i]);
    }
  }

  console.log("Elementos em índices pares:", elementosPares);
})();

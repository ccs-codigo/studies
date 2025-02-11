const nums = [3, 5, 7, 9, 11, 13, 15, 17];
const resultados = new Set();

for (let i = 0; i < nums.length; i++) {
  for (let j = i + 1; j < nums.length; j++) {
    for (let k = 0; k < nums.length; k++) {
      for (let l = k + 1; l < nums.length; l++) {
        if (i !== k && i !== l && j !== k && j !== l) {
          // Garante elementos distintos
          const a = nums[i],
            b = nums[j],
            c = nums[k],
            d = nums[l];
          if (a * b === c * d) {
            // Verifica a igualdade dos produtos
            resultados.add(a + b + c + d);
          }
        }
      }
    }
  }
}
console.log(
  "Possíveis somas:",
  [...resultados].sort((a, b) => a - b)
);

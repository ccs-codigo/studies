const x = 10;
const y = "Gabriel";
const z = [1, 2];

console.log(x, y, z);

//contagem de impressoes
console.count(`O valor de x é: ${x}, contagem:`);
console.count(`O valor de x é: ${x}, contagem:`);
console.count(`O valor de x é: ${x}, contagem:`);

//variavel entre string, o %s é a próxima variável depois da vírgula
console.log("O nome dele é %s, ele é programador e gosta do número %s", y, x);

//limpar o console
setTimeout(() => {
  console.clear();
}, 3000);

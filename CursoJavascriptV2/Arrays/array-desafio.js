const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];
const numerosUnicos = numeros.reduce(function (numerosUnicos, numeroAtual) {
  console.log("numero atual: ", numeroAtual);
  if (numerosUnicos.indexOf(numeroAtual) < 0) {
    numerosUnicos.push(numeroAtual);
    console.log("numero unico encontrado", numerosUnicos);
  }
  return numerosUnicos;
}, []);

console.log(numerosUnicos);

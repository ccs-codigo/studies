// Função para calcular o lucro e a recompensa para o maior doador
function calcularRecompensa(donations, taxaDeLucro) {
  // Calcula o total recebido somando todos os valores do array donations
  const totalRecebido = donations.reduce((acc, val) => acc + val, 0);

  // Calcula o valor do lucro
  const lucro = totalRecebido * (taxaDeLucro / 100);

  // Calcula o montante restante para recompensas
  const totalParaRecompensa = totalRecebido - lucro;

  // Encontra o maior valor do array donations
  const maiorDoacao = Math.max(...donations);

  // Calcula a recompensa para o maior doador (neste exemplo, 50% sobre o valor doado)
  const recompensaMaiorDoador = maiorDoacao * 1.5;

  // Verifica se a recompensa é menor ou igual ao valor disponível para recompensas
  const recompensaFinal = Math.min(recompensaMaiorDoador, totalParaRecompensa);

  return {
    lucro: lucro.toFixed(2),
    recompensa: recompensaFinal.toFixed(2),
    totalRecebido: totalRecebido.toFixed(2),
  };
}

// Exemplo de uso
const donations = [10, 15, 15, 16, 90]; // Valores enviados pelos espectadores
const taxaDeLucro = 30; // Porcentagem de lucro que você quer manter

const resultado = calcularRecompensa(donations, taxaDeLucro);
console.log(`Total Recebido: R$ ${resultado.totalRecebido}`);
console.log(`Lucro: R$ ${resultado.lucro}`);
console.log(`Recompensa para o maior doador: R$ ${resultado.recompensa}`);

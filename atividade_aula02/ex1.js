// Exercício 1
// Verificamos em aulas anteriores que uma igualdade com dois objetos idênticos (com
// mesmos valores de atributos) resulta false, pois o JavaScript interpreta não se tratar do
// mesmo objeto. Crie uma função que compara dois vetores e, caso eles possuam
// mesmo conteúdo, retorne true.

vet1 = ["Mateus", 2, 3, 4, 5];
vet2 = ["Mateus", 2, 3, 4, 5];

function compararVetores(vetor1, vetor2) {
  let saoIguais = false;
  if (vetor1.length === vetor2.length) {
    saoIguais = true;
    let tamanhoVetores = vetor1.length;
    for (let index = 0; index < tamanhoVetores; index++) {
      if (vetor1[index] !== vetor2[index]) {
        saoIguais = false;
        break;
      }
    }
  }
  return saoIguais;
}

console.log(`Resposta exercício 1: ${compararVetores(vet1, vet2)}`);

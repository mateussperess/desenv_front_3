// 1. Crie um aplicativo que gerencia a venda de passagens de uma companhia aérea.
// Para isso, deveremos ter uma função construtora para o objeto LinhaAerea que possui um
// código identificador, uma cidade origem, uma cidade destino, uma data de partida, uma
// data de chegada e um valor de passagem. Tal objeto possui também uma lista de assentos,
// identificados por um identificador numérico único para o voo e uma variável que indica se
// o respectivo assento está ou não disponível para venda. Essa função construtora deve
// receber como parâmetros de entrada os valores necessários para os atributos definidos
// acima (código identificador, uma cidade origem, uma cidade destino, uma data de partida,
// uma data de chegada, um valor de passagem e a quantidade de assentos para esse voo).
// Para as datas de partida e chegada verifique o uso do objeto Date. 

function LinhaAerea(
  id,
  cidadeOrigem,
  cidadeDestino,
  dataPartida,
  dataChegada,
  valorPassagem,
  qtdAssentos
) {
  this.id = id;
  this.cidadeOrigem = cidadeOrigem;
  this.cidadeDestino = cidadeDestino;

  // 4. Crie uma validação na entrada do atributo valor de modo que o mesmo deva ser 
  // sempre maior que 0. Caso seja inserido um valor menor ou igual a 0 deverá ser 
  // atribuído o valor 1,00 e uma mensagem no console deverá ser gerada informando 
  // essa situação. 

  if (valorPassagem <= 0) {
    console.log("Atençao: o valor da passagem deve ser maior que 0. Definindo o valor padrao para R$ 1,00")
    this.valorPassagem = 1.00
  } else {
    this.valorPassagem = valorPassagem
  }

  // 6. Crie uma validação que garanta que a data de partida não possa ser anterior a data 
  // atual do sistema. Para isso, pesquise a chamada new Date(); 
  const agora = new Date()
  if (dataPartida < agora) {
    console.log("Atençao: a data de partida nao pode ser anterior a data atual. Ajustando para agora.")
    this.dataPartida = agora
  } else {
    this.dataPartida = dataPartida
  }

  // 5. Crie uma validação de modo a garantir que a data de chegada não possa ser anterior 
  // a data de partida. Caso isso ocorra, deverá ser gerada uma mensagem no indicando 
  // essa ocorrência, e a data de chegada deverá ser alterada para 24 horas após a data 
  // de partida. 

  if (dataChegada < this.dataPartida) {
    console.log("Atençao: a data de chegada nao pode ser anterior a data de partida. Ajustando para 24h apos a partida")
    this.dataChegada = new Date(this.dataPartida.getTime() + 24 * 60 * 60 * 1000)
  } else {
    this.dataChegada = dataChegada
  }

  this.qtdAssentos = qtdAssentos;
  this.assentos = [];
}

LinhaAerea.prototype.adicionarAssentos = function (estaDisponivel) {
  if (this.assentos.length >= this.qtdAssentos) return;

  this.assentos.push({
    id: this.assentos.length + 1,
    disponivel: estaDisponivel
  });
};

// 2. Para a função construtora acima, crie os seguintes métodos:
// a. getValor(): Retorna o valor da passagem; 
LinhaAerea.prototype.getValor = function () {
  return this.valorPassagem;
}

// b. getDestino(): Retorna o destino do vôo; 
LinhaAerea.prototype.getDestino = function () {
  return this.cidadeDestino;
}

// c. getOrigem(): Retorna a origem do vôo; 
LinhaAerea.prototype.getOrigem = function () {
  return this.cidadeOrigem;
}

// d. getPartida(): Retorna a data de partida; 
LinhaAerea.prototype.getPartida = function () {
  return this.dataPartida;
}

// e. getChegada(): Retorna a data de chegada; 
LinhaAerea.prototype.getChegada = function () {
  return this.dataChegada;
}

// f. getAssentos(): Retorna o status de todos os assentos com o uso do console.log(), na forma:
// identificador_do_assento – disponibilidade_do_assento(livre ou ocupado) 
LinhaAerea.prototype.getAssentos = function () {
  this.assentos.forEach(assento => {
    console.log(`${assento.id} - ${(assento.disponivel) ? 'livre' : 'ocupado'}`)
  });
}

// g. getAssentosLivres(): Retorna uma lista de identificadores de assentos que estão livres para compra.
LinhaAerea.prototype.getAssentosLivres = function () {
  return this.assentos.filter(assento => assento.disponivel).map(assento => assento.id);
}

// h. setValor(valor): Altera o valor da passagem aérea de acordo com o valor passado como argumento; 
LinhaAerea.prototype.setValor = function (valor) {
  return this.valorPassagem = valor;
}

// i. atrasar(minutos): altera a data de partida atrasando a mesma de acordo com o número de minutos passados como argumento desse método. Note que um
// atraso na partida deve representar um atraso na chegada de tempo igual a este atraso; 
LinhaAerea.prototype.atrasar = function (minutos) {
  let novaPartida = new Date(this.dataPartida.getTime())
  let novaChegada = new Date(this.dataChegada.getTime())

  novaPartida.setMinutes(novaPartida.getMinutes() + minutos)
  novaChegada.setMinutes(novaChegada.getMinutes() + minutos)

  this.dataPartida = novaPartida;
  this.dataChegada = novaChegada;
}

// 3. Altere o método comprar() para que, caso não seja repassado nenhum id, seja 
// comprado o primeiro assento livre disponível na lista.  

LinhaAerea.prototype.comprar = function (id) {
  if (id == undefined || id == null) {
    let assentosLivres = this.getAssentosLivres()

    if (assentosLivres.length == 0) {
      console.log("nao ha assentos disponiveis para compra")
      return false;
    }

    id = assentosLivres[0]
    console.log(`comprando automaticamente o assento ${id} (primeiro assento disponivel)`)
  }

  let assento = this.assentos.find(assento => assento.id == id)

  if (!assento) {
    console.log(`o assento ${id} nao existe`)
    return false
  }

  if (!assento.disponivel) {
    console.log(`o assento ${id} ja esta ocupado`)
    return false
  }

  assento.disponivel = false
  console.log(`assento ${id} comprado com sucesso`)
  return true
}

console.log("=== TESTE 1: CONSTRUTOR BÁSICO ===");
const teste1 = new LinhaAerea(
  1, 
  "RS", 
  "SC", 
  new Date(2025, 9, 10, 12, 0), 
  new Date(2025, 9, 10, 11, 0), 
  500, 
  4
);

// console.log(teste1)
// console.log("Criado:", teste1.id, teste1.getOrigem(), "->", teste1.getDestino());

console.log("\n=== TESTE 2: VALIDAÇÃO VALOR INVÁLIDO ===");
const teste2 = new LinhaAerea(2, "BH", "SP", new Date(2025, 9, 15, 14, 0), new Date(2025, 9, 15, 16, 0), -100, 2);
console.log("Valor definido:", teste2.getValor());

console.log("\n=== TESTE 3: DATA NO PASSADO ===");
const teste3 = new LinhaAerea(3, "RJ", "BSB", new Date(2020, 0, 1, 8, 0), new Date(2025, 9, 15, 10, 0), 300, 3);
console.log("Data ajustada:", teste3.getPartida().toLocaleString());

console.log("\n=== TESTE 4: DATA CHEGADA INVÁLIDA ===");
const teste4 = new LinhaAerea(4, "SP", "RJ", new Date(2025, 9, 15, 15, 0), new Date(2025, 9, 15, 10, 0), 400, 2);
console.log("Partida:", teste4.getPartida().toLocaleString());
console.log("Chegada:", teste4.getChegada().toLocaleString());

console.log("\n=== TESTE 5: SISTEMA DE ASSENTOS ===");
teste1.adicionarAssentos(true);
teste1.adicionarAssentos(true);
teste1.adicionarAssentos(false);
teste1.adicionarAssentos(true);
console.log("Status inicial:");
teste1.getAssentos();
console.log("Livres:", teste1.getAssentosLivres());

console.log("\n=== TESTE 6: COMPRA AUTOMÁTICA ===");
teste1.comprar();
console.log("Após compra automática:");
teste1.getAssentos();

console.log("\n=== TESTE 7: COMPRA ESPECÍFICA ===");
teste1.comprar(2);
console.log("Após comprar assento 2:");
teste1.getAssentos();

console.log("\n=== TESTE 8: TENTATIVAS INVÁLIDAS ===");
teste1.comprar(3); // Já ocupado
teste1.comprar(10); // Inexistente

console.log("\n=== TESTE 9: MUDANÇA DE VALOR ===");
console.log("Valor atual:", teste1.getValor());
teste1.setValor(750);
console.log("Novo valor:", teste1.getValor());

console.log("\n=== TESTE 10: ATRASO DE VOO ===");
console.log("Antes do atraso:");
console.log("Partida:", teste1.getPartida().toLocaleString());
console.log("Chegada:", teste1.getChegada().toLocaleString());
teste1.atrasar(45);
console.log("Após atraso de 45 min:");
console.log("Partida:", teste1.getPartida().toLocaleString());
console.log("Chegada:", teste1.getChegada().toLocaleString());

console.log("\n=== TESTE 11: STATUS FINAL ===");
console.log("Assentos disponíveis:", teste1.getAssentosLivres());
console.log("Total de assentos:", teste1.qtdAssentos);
console.log("Valor final:", teste1.getValor());
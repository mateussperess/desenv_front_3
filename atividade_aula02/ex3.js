// Exercício 3
// Crie um objeto que será nosso personagem, que possui um nome (uma string qualquer
// que representa o nome do personagem), a energia (um valor positivo numérico igual a
// 100) e um método dano, que recebe como parâmetro de entrada um valor numérico
// positivo e reduz a energia do personagem. Finalmente, temos o método status, que
// retorna 1 caso o personagem ainda possua energia e -1 caso a energia tenha chegado
// a zero.

// Baseado no item anterior, crie para esse personagem um atributo força, que possui um
// valor positivo de 10 que representa o máximo ataque que o personagem pode executar
// e o método ataque, que gera um valor aleatório entre 0 e força.

let personagem1 = {
  nome: "Zé da pinga",
  energia: 100,
  dano: function (valorSofrido) {
    if (this.energia <= 0) {
      return (this.energia = 0);
    }

    return (this.energia -= valorSofrido);
  },
  status: function () {
    if (this.energia <= 0) return -1;
    return 1;
  },
  forca: 10,
  ataque: function () {
    return Math.floor(Math.random() * this.forca) + 1
  }
};

// Crie um segundo personagem e customize seu nome, força (para 20) e energia (80).

let personagem2 = {
  nome: "Zé da manga",
  energia: 80,
  dano: function (valorSofrido) {
    if (this.energia <= 0) {
      return (this.energia = 0);
    }

    return (this.energia -= valorSofrido);
  },
  status: function () {
    if (this.energia <= 0) return -1;
    return 1;
  },
  forca: 20,
  ataque: function () {
    return Math.floor(Math.random() * this.forca)
  }
};

console.log(`Personagem 1: ${JSON.stringify(personagem1)}`)
console.log(`Personagem 2: ${JSON.stringify(personagem2)}`)

console.log(`${personagem1.nome} Ataca ${personagem2.nome}! Vida restante de ${personagem2.nome}: ${personagem2.dano(personagem1.ataque())}`)
console.log(`Status de ${personagem2.nome}: ${JSON.stringify(personagem2)}`)
console.log(`${personagem2.nome} Ataca ${personagem1.nome}! Vida restante de ${personagem1.nome}: ${personagem1.dano(personagem2.ataque())}`)
console.log(`Status de ${personagem1.nome}: ${JSON.stringify(personagem1)}`)
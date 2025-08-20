// Exercício 1 -> pronto
// Verificamos em aulas anteriores que uma igualdade com dois objetos idênticos (com 
// mesmos valores de atributos) resulta false, pois o JavaScript interpreta não se tratar do 
// mesmo objeto. Crie uma função que compara dois vetores e, caso eles possuam 
// mesmo conteúdo, retorne true. 

vetor1 = ["Teste", 22]
vetor2 = ["Teste", 22]

function comparaVetores(vetor1, vetor2) {
  let saoIguais = true;

  if (!(vetor1.length !== vetor2.length)) {
    let tamanhoVetores = vetor1.length;

    for (let index = 0; index < tamanhoVetores; index++) {
      if (vetor1[index] !== vetor2[index]) {
        saoIguais = false;
        break;
      }
    }

    return saoIguais;
  }
}

// console.log(comparaVetores(vetor1, vetor2))
// comparaVetores(vetor1, vetor2);

// Exercício 2 -> pronto
// Similarmente ao exercício anterior, crie uma função que verifica se dois objetos são
// idênticos.

let obj1 = { nome: "Mateus", idade: 21 }
let obj2 = { nome: "Mateus", idade: 21 }

function comparaObjetos(obj1, obj2) {
  let tamanhoObj1 = Object.keys(obj1).length;
  let tamanhoObj2 = Object.keys(obj2).length

  if (tamanhoObj1 === tamanhoObj2) {
    let saoIguais = true;

    let chaves1 = Object.keys(obj1)
    let chaves2 = Object.keys(obj2)

    for (let chave of chaves1) {
      if (obj1[chave] != obj2[chave]) {
        saoIguais = false;
      }
    }

    return saoIguais;
  }
}

// console.log(JSON.stringify(obj1))
// console.log(JSON.stringify(obj2))

// console.log(comparaObjetos(obj1, obj2))
// comparaObjetos(obj1, obj2)

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
// Crie um segundo personagem e customize seu nome, força (para 20) e energia (80).

// const personagem = new Object({
//   nome: "teste"
// })

let personagem1 = {
  nome: "Zé do assador",
  energia: 100,
  dano: function (valor) {
    if (valor <= 0) return false
    return this.energia -= valor
  },
  status: function () {
    if (this.energia <= 0) return -1
    return 1
  },
  forca: 10,
  ataque: function() {
    return Math.floor(Math.random() * this.forca)
  }
}

let personagem2 = {
  nome: "Jereias do grau",
  energia: 100,
  dano: function (valor) {
    if (valor <= 0) return false
    return this.energia -= valor
  },
  status: function () {
    if (this.energia <= 0) return -1
    return 1
  },
  forca: 10,
  ataque: function() {
    return Math.floor(Math.random() * this.forca)
  }
}

console.log(`Personagem 1: ${JSON.stringify(personagem1)}`)
console.log(`Personagem 2: ${JSON.stringify(personagem2)}`)

console.log(`${personagem1.nome} Ataca ${personagem2.nome}! Vida restante de ${personagem2.nome}: ${personagem2.dano(personagem1.ataque())}`)
console.log(`Status de ${personagem2.nome}: ${JSON.stringify(personagem2)}`)
console.log(`${personagem2.nome} Ataca ${personagem1.nome}! Vida restante de ${personagem1.nome}: ${personagem1.dano(personagem2.ataque())}`)
console.log(`Status de ${personagem1.nome}: ${JSON.stringify(personagem1)}`)

// Exercício 4
// Crie um formulário html que será utilizado para cadastrar empregados de uma empresa.
// Este formulário será composto por um campo input nome, um campo input salario e um
// campo select cargo, o qual possui os valores estagiário, desenvolvedor, analista,
// administrador e gerente, além de um botão cadastrar.
// Faça com que o clique no botão cadastrar verifique os campos acima citados, validando
// os mesmos de forma a garantir que o nome não seja vazio, o salário positivo e o cargo,
// um dos valores selecionados.
// A partir desses campos, caso todos tenham sido preenchidos corretamente, crie um
// objeto que armazena estes atributos do funcionário, armazenando o mesmo em um
// array de funcionários.
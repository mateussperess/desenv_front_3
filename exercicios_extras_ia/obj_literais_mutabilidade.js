// Exercício 1: Objetos Literais e Mutabilidade 
// Objetivo: Praticar criação de objetos literais e entender mutabilidade 

// Crie um objeto literal pessoa com as propriedades: 
// ● nome (string) 
// ● idade (number) 
// ● profissao (string) 
// ● endereco (objeto com rua, numero, cidade) 

let pessoa = {
  nome: "Juca",
  idade: 20,
  profissao: "Guri de Programa",
  endereco: endereco,
  hobbies: []
}

let endereco = {
  rua: "Rua dos Bobos",
  numero: 91,
  cidade: "Charqueadas"
}

console.log(pessoa)

// Depois: 
// 1. Adicione um método apresentar() que retorne uma string com a 
// apresentação da pessoa 
pessoa.apresentar = function() {
  return `Olá, me chamo ${this.nome}`
}

console.log(pessoa.apresentar())

// 2. Crie uma função que receba esse objeto e modifique a idade 
function corrigirIdade(pessoa, novaIdade) {
  pessoa.idade = novaIdade;
}

// 3. Demonstre que a alteração afeta o objeto original
console.log("Idade antes da correção: ", pessoa.idade) 
corrigirIdade(pessoa, 21);
console.log("Idade depois da correção: ", pessoa.idade);

// 4. Adicione um array hobbies ao objeto e crie um método para adicionar novos 
// hobbies 
pessoa.addHobie = function(hobby) {
  this.hobbies.push(hobby)
}

pessoa.addHobie("Jogar bola")
pessoa.addHobie("Jogar videogame")
pessoa.addHobie("Correr")

console.log(pessoa.hobbies)
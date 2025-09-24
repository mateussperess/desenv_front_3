// Exercício 2: Cadeia Prototípica 
// Objetivo: Entender como funciona a herança prototípica 

// 1. Crie um objeto veiculo com propriedades: marca, modelo, ano 

function Veiculo(marca, modelo, ano) {
  this.marca = marca;
  this.modelo = modelo;
  this.ano = ano;
  this.esta_andando = false
}

// 2. Adicione métodos acelerar() e frear() ao prototype de Object 
Veiculo.prototype.acelerar = function() {
  this.esta_andando = true;
}

Veiculo.prototype.frear = function() {
  this.esta_andando = false;
}

// 3. Crie um objeto carro que herde de veiculo 
let carro = new Veiculo("Fiat", "Argo", 2025)
console.log(carro)

// 4. Adicione um método específico abrirPorta() apenas ao carro 
carro.abrirPorta = function() {
  console.log(`Abrindo a porta de ${this.marca} ${this.modelo}`)
}

carro.abrirPorta()

// 5. Demonstre a cadeia prototípica acessando propriedades e métodos

let moto = new Veiculo("Honda", "125", 2004);

moto.abrirPorta() // forçando erro
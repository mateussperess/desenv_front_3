const personagem = {
  nome: "",
  energia: 0,
  dano: function(valorSofrido)
  {
    if(this.energia <= 0)
    {
      return (this.energia = 0)
    }

    return (this.energia -= valorSofrido)
  },
  status: function()
  {
    if(this.energia <= 0) return -1;
    return 1;
  },
  forca: 0,
  ataque: function()
  {
    return Math.floor(Math.random() * this.forca) + 1
  }
}

let personagem1 = Object.create(personagem);
personagem1.nome = "Zé da pinga"
personagem1.energia = 100
personagem1.forca = 10
// console.log(personagem1)

let personagem2 = Object.create(personagem);
personagem2.nome = "Zé da manga"
personagem2.energia = 80
personagem2.forca = 20
// console.log(personagem2)

console.log(`Personagem 1: ${JSON.stringify(personagem1)}`)
console.log(`Personagem 2: ${JSON.stringify(personagem2)}`)

console.log(`${personagem1.nome} Ataca ${personagem2.nome}! Vida restante de ${personagem2.nome}: ${personagem2.dano(personagem1.ataque())}`)
console.log(`Status de ${personagem2.nome}: ${JSON.stringify(personagem2)}`)
console.log(`${personagem2.nome} Ataca ${personagem1.nome}! Vida restante de ${personagem1.nome}: ${personagem1.dano(personagem2.ataque())}`)
console.log(`Status de ${personagem1.nome}: ${JSON.stringify(personagem1)}`)
let pessoa = {
  nome: "Mateus",
  saudacao: function(turno) {
    if(turno == 1) {
      return "bom dia!"
    } else if (turno == 2) {
      return "boa tarde!"
    } else {
      return "boa noite!"
    }
  }
}

console.log(`${pessoa.saudacao(1)}, meu nome eh ${pessoa.nome}`)
class Jogador {
  constructor(nome, simbolo, cor) {
    this.nome = nome;
    this.simbolo = simbolo;
    this.cor = cor;
    this.vitorias = 0;
  }

  addVitorias() {
    this.vitorias++;
  }
}

const gameBoard = document.getElementById("gameBoard");
const rows = 3;
const cols = 3;
let currentPlayer = 'X';

function comecar() {
  gameBoard.innerHTML = "";
}
const botaoIniciar = document.getElementById("iniciar");
const nomeJogador1 = document.getElementById("nomeJogador1");
const corJogador1 = document.getElementById("corJogador1");
const nomeJogador2 = document.getElementById("nomeJogador2");
const corJogador2 = document.getElementById("corJogador2");

const placar = document.getElementById("placar");

botaoIniciar.addEventListener("click", () => {
  if (nomeJogador1.value && nomeJogador2.value) {
    tabuleiro.configurarJogadores(
      nomeJogador1.value,
      corJogador1.value,
      nomeJogador2.value,
      corJogador2.value
    );

    document.getElementById("form").style.display = "none";
    tabuleiro.iniciar();
  }
});

function Jogador(nome, simbolo, cor) {
  this.nome = nome;
  this.simbolo = simbolo;
  this.cor = cor;
  this.vitorias = 0;
}

const tabuleiro = {
  board: document.getElementById("board"),
  linhas: 3,
  colunas: 3,
  matriz: [],
  flagJogador: false, // true = X, false = O
  flagVencedor: false,
  jogador1: null,
  jogador2: null,

  configurarJogadores: function (nome1, cor1, nome2, cor2) {
    this.jogador1 = new Jogador(nome1, "X", cor1);
    this.jogador2 = new Jogador(nome2, "O", cor2);
  },

  sortearInicio: function () {
    this.flagJogador = Math.random() < 0.5;
    const jogadorInicial = this.flagJogador
      ? this.jogador1.nome
      : this.jogador2.nome;
    window.alert(`Vamos começar o jogo! Jogador ${jogadorInicial} começa!`);
  },

  setupEstilos: function () {
    this.board.style.display = "grid";
    this.board.style.gridTemplateRows = `repeat(${this.linhas}, 1fr)`;
    this.board.style.gridTemplateColumns = `repeat(${this.colunas}, 1fr)`;
    this.board.style.gap = "5px";
    this.board.style.width = "max-content";
    this.board.style.margin = "20px auto";
  },

  renderizar: function () {
    this.board.innerHTML = "";

    for (let i = 0; i < this.linhas; i++) {
      this.matriz[i] = [];
      for (let j = 0; j < this.colunas; j++) {
        this.matriz[i][j] = null;
        const celula = this.criarCelula(i, j);
        this.board.appendChild(celula);
      }
    }
  },

  reiniciar: function () {
    let btn = document.createElement("button");
    btn.textContent = "Reiniciar Jogo";
    btn.style.display = "block";
    btn.style.margin = "20px auto";
    btn.style.padding = "10px 20px";
    btn.style.fontSize = "1rem";
    btn.style.cursor = "pointer";
    btn.addEventListener("click", () => {
      this.flagVencedor = false;
      this.flagJogador = true;
      this.renderizar();
      btn.remove();
    });

    document.body.appendChild(btn);
  },

  criarCelula: function (linha, coluna) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.id = `cell-${linha}-${coluna}`;

    cell.style.width = "100px";
    cell.style.height = "100px";
    cell.style.boxSizing = "border-box";
    cell.style.border = "1px solid black";
    cell.style.display = "flex";
    cell.style.alignItems = "center";
    cell.style.justifyContent = "center";
    cell.style.fontSize = "2rem";
    cell.style.cursor = "pointer";

    cell.addEventListener("click", () => {
      if (this.matriz[linha][coluna] === null) {
        this.flagJogador
          ? (this.matriz[linha][coluna] = "X")
          : (this.matriz[linha][coluna] = "O");
        this.flagJogador
          ? (cell.style.color = this.jogador1.cor)
          : (cell.style.color = this.jogador2.cor);
        cell.textContent = this.matriz[linha][coluna];

        this.flagJogador = !this.flagJogador;

        this.verificarVencedor();
        this.verificarEmpate();
      }
    });

    return cell;
  },

  iniciar: function () {
    this.sortearInicio();
    this.atualizarPlacar();
    this.setupEstilos();
    this.renderizar();
  },

  verificarVencedor: function () {
    // linhas
    if (
      // linha 1
      this.matriz[0][0] &&
      this.matriz[0][0] === this.matriz[0][1] &&
      this.matriz[0][1] === this.matriz[0][2]
    ) {
      this.anunciarVencedor();
    }

    if (
      // linha 2
      this.matriz[1][0] &&
      this.matriz[1][0] === this.matriz[1][1] &&
      this.matriz[1][1] === this.matriz[1][2]
    ) {
      this.anunciarVencedor();
    }

    if (
      // linha 3
      this.matriz[2][0] &&
      this.matriz[2][0] === this.matriz[2][1] &&
      this.matriz[2][1] === this.matriz[2][2]
    ) {
      this.anunciarVencedor();
    }

    // colunas
    if (
      // coluna 1
      this.matriz[0][0] &&
      this.matriz[0][0] === this.matriz[1][0] &&
      this.matriz[1][0] === this.matriz[2][0]
    ) {
      this.anunciarVencedor();
    }

    if (
      // coluna 2
      this.matriz[0][1] &&
      this.matriz[0][1] === this.matriz[1][1] &&
      this.matriz[1][1] === this.matriz[2][1]
    ) {
      this.anunciarVencedor();
    }

    if (
      // coluna 3
      this.matriz[0][2] &&
      this.matriz[0][2] === this.matriz[1][2] &&
      this.matriz[1][2] === this.matriz[2][2]
    ) {
      this.anunciarVencedor();
    }

    // diagonais
    if (
      // diagonal esquerda cima -> direita baixo
      this.matriz[0][0] &&
      this.matriz[0][0] === this.matriz[1][1] &&
      this.matriz[1][1] === this.matriz[2][2]
    ) {
      this.anunciarVencedor();
    }

    if (
      // diagonal esquerda baixo -> direita cima
      this.matriz[0][2] &&
      this.matriz[0][2] === this.matriz[1][1] &&
      this.matriz[1][1] === this.matriz[2][0]
    ) {
      this.anunciarVencedor();
    }
  },

  anunciarVencedor: function () {
    if (this.flagJogador) {
      this.jogador1.vitorias++;
      window.alert(`O jogador ${this.jogador1.nome} venceu!`);
    } else {
      this.jogador2.vitorias++;
      window.alert(`O jogador ${this.jogador2.nome} venceu!`);
    }

    const jogarNovamente = window.confirm("Deseja jogar novamente?");
    if (!jogarNovamente) {
      this.mostrarCampeao();
      return;
    }
    this.reiniciar();
    this.atualizarPlacar();
    this.flagVencedor = true;
  },

  atualizarPlacar: function () {
    placar.innerHTML = `
      <h2>Placar</h2>
      <p>${this.jogador1.nome} (X) - Vitórias: ${this.jogador1.vitorias}</p>
      <p>${this.jogador2.nome} (O) - Vitórias: ${this.jogador2.vitorias}</p>
    `;
  },

  verificarEmpate: function () {
    let celulasPreenchidas = 0;
    for (let i = 0; i < this.linhas; i++) {
      for (let j = 0; j < this.colunas; j++) {
        if (this.matriz[i][j] !== null) celulasPreenchidas++;
      }
    }
    if (celulasPreenchidas === 9 && !this.flagVencedor) {
      window.alert("Empate!");
      this.reiniciar();
    }
  },

  mostrarCampeao: function () {
    if (this.jogador1.vitorias > this.jogador2.vitorias) {
      window.alert(
        `${this.jogador1.nome} é o campeão com ${this.jogador1.vitorias} vitórias!`
      );
    } else if (this.jogador2.vitorias > this.jogador1.vitorias) {
      window.alert(
        `${this.jogador2.nome} é o campeão com ${this.jogador2.vitorias} vitórias!`
      );
    } else {
      window.alert("Empate no placar geral!");
    }
    window.location.reload();
  },
};

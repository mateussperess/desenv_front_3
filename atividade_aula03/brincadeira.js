const areaPermitida = document.getElementById("areaPermitida")

const quadrado = {
  cor: "#000",
  x: 0,
  y: 0,
  lado: 50,
  elementoDom: "",
  crescer: function (num) {
    let areaDoQuadrado = this.getArea()
    if(areaDoQuadrado.area > 348100) return;
    
    if (num > 0) {
      this.lado += num;
    }

    return { ladoAtualizado: this.lado };
  },
  diminuir: function (num) {
    let areaDoQuadrado = this.getArea()
    if(areaDoQuadrado.area <= 2500) return;

    if (this.lado - num <= 0) {
      this.lado = 1;
    } else {
      this.lado -= num;
    }

    return { ladoAtualizado: this.lado };
  },
  getPosicao: function () {
    return { x: this.x, y: this.y };
  },
  setPosicao: function (x, y) {
    if (x > 0 && y > 0) {
      this.x = x;
      this.y = y;
      return {
        novaPosicao: {
          x: this.x,
          y: this.y,
        },
      };
    }
  },
  moveDireita: function (valor) {
    let atualPosicao = this.getPosicao();
    if(atualPosicao.x > 612) return;
    return this.setPosicao(this.x + valor, this.y);
  },
  moveEsquerda: function (valor) {
    return this.setPosicao(this.x - valor, this.y);
  },
  moveCima: function (valor) {
    return this.setPosicao(this.x, this.y - valor);
  },
  moveBaixo: function (valor) {
    let atualPosicao = this.getPosicao();
    if(atualPosicao.y > 612) return;
    return this.setPosicao(this.x, this.y + valor);
  },
  getArea: function () {
    return { area: this.lado * this.lado };
  },
  getPerimetro: function () {
    return { perimetro: this.lado * 4 };
  },
  renderiza: function () {
    let div = document.createElement("div");
    div.style.backgroundColor = this.cor;
    div.style.width = this.lado + "px";
    div.style.height = this.lado + "px";
    div.style.position = "absolute";
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";
    areaPermitida.appendChild(div);
    this.elementoDom = div;
  },
  update: function () {
    this.elementoDom.style.width = this.lado + "px";
    this.elementoDom.style.height = this.lado + "px";
    this.elementoDom.style.left = this.x + "px";
    this.elementoDom.style.top = this.y + "px";
    this.elementoDom.style.backgroundColor = this.cor;
  },
};

let quadradoBacana = Object.create(quadrado);
quadradoBacana.cor = "#FF0000";
quadradoBacana.x = 12;
quadradoBacana.y = 12;
quadradoBacana.renderiza();
console.log(quadradoBacana.getArea())

const acao = document.addEventListener("keydown", (e) => {
  e.preventDefault();

  switch (e.code) {
    case "ArrowRight":
      quadradoBacana.moveDireita(120);
      quadradoBacana.update();
      break;
    case "ArrowLeft":
      quadradoBacana.moveEsquerda(120);
      quadradoBacana.update();
      break;
    case "ArrowUp":
      quadradoBacana.moveCima(120);
      quadradoBacana.update();
      break;
    case "ArrowDown":
      quadradoBacana.moveBaixo(120);
      quadradoBacana.update();
      break;
    case "Space":
        quadradoBacana.crescer(180)
        quadradoBacana.update();
      break;
    case "ShiftLeft": 
        quadradoBacana.diminuir(180)
        quadradoBacana.update();
      break;
  }
})
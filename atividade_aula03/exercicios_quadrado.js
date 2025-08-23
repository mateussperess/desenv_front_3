// * 2. Crie um protótipo para representar um quadrado. Tal objeto deve possuir os atributos
// *    cor, x e y, bem como o valor do lado. O quadrado desse protótipo possui como valores
// *    base: x=0, y=0 cor=”#000” lado=1.

// * 3. Juntamente com os atributos do exercício acima, devem ser criados os seguintes métodos:

// * a.  método crescer(num) que aumenta o lado do quadrado no valor num;

// * b.  método diminuir(num), que diminui o lado do quadrado em num, até o valor mínimo 1;

// *  c.  métodos getPosicao() e setPosicao() que, respectivamente, retorna a posição atual
// *       do elemento e define uma nova posição, baseada em um parâmetro de entrada com
// *       valores para x e y.

// * d.  métodos moveDireita(), moveEsquerda(), moveCima() e moveBaixo(). Os métodos
// *     acima alteram os parâmetros x e y da seguinte forma:
// * i. moveDireita(valor): aumenta o x em valor
// * ii. moveEsquerda(valor): diminui o x em valor
// * iii. moveCima(valor): aumenta o y em valor
// * iv. moveBaixo(valor): diminui o y em valor

// * e. método getArea() que retorna a área ocupada pelo quadrado
// * f. método getPerimetro() que retorna o perímetro do quadrado
// * g. Método renderiza(), apresenta o objeto na tela, com as dimensões conforme
// *    estão armazenadas no objeto, armazenando um atributo que aponta para o elemento DOM criado.
// * h. Método update() que atualiza o elemento DOM com os novos valores atribuídos,
// *    pelos demais métodos

const quadrado = {
  cor: "#000",
  x: 0,
  y: 0,
  lado: 50,
  elementoDom: "",
  crescer: function (num) {
    if (num > 0) {
      this.lado += num;
    }
    return { ladoAtualizado: this.lado };
  },
  diminuir: function (num) {
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
    return this.setPosicao(this.x + valor, this.y);
  },
  moveEsquerda: function (valor) {
    return this.setPosicao(this.x - valor, this.y);
  },
  moveCima: function (valor) {
    return this.setPosicao(this.x, this.y + valor);
  },
  moveBaixo: function (valor) {
    return this.setPosicao(this.x, this.y - valor);
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
    document.body.appendChild(div);
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

// === EXEMPLO DE USO NO CONSOLE ===

// Criando quadrados independentes
// let quad1 = Object.create(quadrado);
// quad1.cor = "#FF0000";
// quad1.x = 50;
// quad1.y = 50;
// quad1.renderiza();

// let quad2 = Object.create(quadrado);
// quad2.cor = "#008000";
// quad2.x = 200;
// quad2.y = 50;
// quad2.renderiza();

// quad1.crescer(50);
// quad2.diminuir(20);
// quad1.moveDireita(100);
// quad2.moveBaixo(100);

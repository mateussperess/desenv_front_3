class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  add(qtd) {
    if(qtd > 0) {
      this.quantidade += qtd;
    }

    return this.quantidade;
  }

  remove(qtd) {
    if(qtd > 0 && qtd <= this.quantidade) {
      this.quantidade -= qtd;
    }

    return this.quantidade;
  }

  total() {
    return this.preco * this.quantidade;
  }

  descricao() {
    return `Produto ${this.nome} possui ${this.quantidade} itens no estoque, com valor de R$ ${this.total()}`
  }
}

let eletronico = new Produto("Eletrônicos", 1000, 2);
console.log(eletronico.descricao()); 
eletronico.add(3);
console.log(eletronico.descricao());
eletronico.remove(2);
console.log(eletronico.descricao());
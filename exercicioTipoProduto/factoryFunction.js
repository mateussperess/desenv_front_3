function produtoFactory(nome, preco, quantidade) {
  return {
    nome: nome,
    preco: preco,
    quantidade: quantidade,
    add: function(qtd) {
      if(qtd > 0) {
        this.quantidade += qtd
      }
      return this.quantidade
    },
    remove: function(qtd) {
      if(qtd > 0 && this.quantidade > 0) {
        this.quantidade -= qtd;
      }

      return this.quantidade;
    },
    total: function() {
      return this.quantidade * this.preco;
    },
    descricao: function() {
      return `Produto ${this.nome} possui ${this.quantidade} itens no estoque, com valor de R$ ${this.total()}`
    }
  }
}

let eletronico = produtoFactory("Eletrônicos", 1000, 2)
console.log(eletronico.descricao()); 
eletronico.add(3);
console.log(eletronico.descricao());
eletronico.remove(2);
console.log(eletronico.descricao());


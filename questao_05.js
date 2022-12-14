class Venda {
    constructor(idProduto, quantidade, preco) {
        this.idProduto = idProduto
        this.quantidade = quantidade
        this.preco = preco
    }

    // getters e setters

    get idProduto() {
        return this.idProduto
    }

    set idProduto(novoIdProduto) {
        this.idProduto = novoIdProduto
    }

    get quantidade() {
        return this.quantidade
    }

    set quantidade(novaQuantidade) {
        this.quantidade = novaQuantidade
    }

    get preco() {
        return this.preco
    }

    set preco(novoPreco) {
        this.preco = novoPreco
    }

    getValorTotal(quantidade, preco) {
        return this.quantidade * this.preco
    }    
}

var venda1 = new Venda();
var venda2 = new Venda();
var precoVenda1 = venda1.getValorTotal(2, 35);
var precoVenda2 = venda2.getValorTotal(3, 10);
console.log('Venda 1: ', precoVenda1)
console.log('Venda 2: ', precoVenda2)
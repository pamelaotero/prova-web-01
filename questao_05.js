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
        return this.idProduto = novoIdProduto
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

    getValorTotal() {
        return this.quantidade * this.preco
    }
}
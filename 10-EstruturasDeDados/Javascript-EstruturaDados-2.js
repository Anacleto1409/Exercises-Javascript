class Pilha {
    capacidade
    pilha

    constructor (capacidade){
        this.pilha = []
        if(capacidade == undefined){
            this.capacidade = Infinity
        }else{
            this.capacidade = capacidade
        }
    }
    adicionar(elem){
        if(this.pilha.length == this.capacidade){
            return "Pilha cheia!"
        }else{
            this.pilha.push(elem)
        }
    }
    remover(){
        if(this.pilha.length == 0){
            return "Pilha vazia!"
        }else{
            this.pilha.pop()
        }
    }
    obterValor(){
        if(this.pilha.length == 0){
            return "Pilha vazia!"
        }else{
            return this.pilha[this.pilha.length - 1]
        }
    }

}
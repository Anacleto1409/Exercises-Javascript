class Lista {
    primeiro
    constructor (elem){
        if(!!elem){
            this.primeiro = elem
        }
    }
    insereNoInicio(elem){
        elem.proximo = this.primeiro;
        this.primeiro = elem;
    }
    get primeiro(){
        return this.primeiro
    }
    }
    class ElementoDaLista {
        dados
        proximo
        constructor(dados,proximo){
            this.dados = dados;
            this.proximo = proximo
        }
        get dados(){
            return this.dados
        }
        get proximo(){
            return this.proximo
        }
        set proximo(elem){
            this.proximo = elem;
        }
        get eUltimo(){
            return !this.proximo
        }
    }
class Fila {
    elems = []
    adicionar(elem){
        this.elems.push(elem)
    }
    remover(){
        if(this.elems.length == 0) return "Fila vazia!"
        this.elems.shift()
    }
    obterElemento(){
        if(this.elems.length == 0) return "Fila vazia!"
        return this.elems[0]
    }
    }
    
class Mapa {
    map= []
    set (chave,valor){
        this.map = this.map.filter(elemento => elemento.chave !==chave).concat(new ChaveValor(chave,valor))
    }
    has(chave){
        return this.map.some(a=> a.chave == chave)
    }
    get(chave){
        return this.map.find(elemento => elemento.chave == chave)?.valor
    }
    clear(){
       this.map = []
    }
    delete(chave){
        this.map = this.map.filter(elemento => elemento.chave !== chave)
    }
    }
    class ChaveValor {
     chave
     valor
     constructor(chave,valor){
         this.chave = chave
         this.valor = valor
     } 
     get chave(){
         return this.chave
     }  
     get valor(){
         return this.valor
     }
     set valor(valor){
         this.valor = valor
     }
    }
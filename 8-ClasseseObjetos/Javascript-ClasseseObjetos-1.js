class Inteiro {
    #valor
    constructor(n){
        if(!Number.isNaN(Number(n))){
            this.#valor = Math.floor(n)
        }else {
            this.#valor = 0
        }
    }
    get valor(){
        return this.#valor
    }
}
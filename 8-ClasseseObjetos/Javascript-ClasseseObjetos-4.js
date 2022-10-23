class GarrafaDeAgua {
    #capacidade
    #quantidade
    #aberta
    constructor(capacidade) {
        this.#capacidade = capacidade
        this.#quantidade = 0
        this.#aberta = false
    }
    beber() {
        if (this.#aberta) {
            if (this.#quantidade === 0) {
                return "A garrafa está vazia"
            }else if(this.#quantidade < 200){
                return this.#quantidade = 0 
            }else{
                return this.#quantidade -= 200
            }
        } else { return "A garrafa está fechada" }
    }
    encher(quant) {
        if (this.#aberta) {
            if(this.#quantidade + quant > this.#capacidade){
                this.#quantidade = this.#capacidade
            }else {
                this.#quantidade += quant
            }
        } else { return "A garrafa está fechada" }
    }
    abrirFechar() {
        if (!this.#aberta) {
            return this.#aberta = true
        } else {
            return this.#aberta = false
        }
    }

    get quantidade() {
        return this.#quantidade
    }
    get aberta() {
        return this.#aberta
    }
    get capacidade() {
        return this.#capacidade
    }
}
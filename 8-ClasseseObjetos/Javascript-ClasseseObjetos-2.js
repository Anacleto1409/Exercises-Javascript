class Inteiro {
    #inteiro
    constructor(inteiro) {
        if (inteiro === Number(inteiro))
            this.#inteiro = Math.floor(inteiro)
        else
            this.#inteiro = 0
    }
    get valor() {
        return this.#inteiro
    }
    set valor(nv) {
        if (nv === Number(nv))
            this.#inteiro = Math.floor(nv)
    }
}
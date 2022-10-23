class Calculadora {
    constructor() {
        this.historico = []
    }
    somar(a,b){
        this.historico.push({
            operacao: "soma",
            a: a,
            b: b,
            resultado: a + b
        })
        return a + b
    }
    subtrair(a,b){
        this.historico.push({
            operacao: "subtração",
            a: a,
            b: b,
            resultado: a - b
        })
        return a - b
    }
    multiplicar(a,b){
        this.historico.push({
            operacao: "multiplicação",
            a: a,
            b: b,
            resultado: a * b
        })
        return a * b
    }
    dividir(a,b){
        this.historico.push({
            operacao: "divisão",
            a: a,
            b: b,
            resultado: a / b
        })
        return a / b
    }

    lerHistorico(operacao){
        return this.historico.filter( n => n.operacao == operacao)
    }
}

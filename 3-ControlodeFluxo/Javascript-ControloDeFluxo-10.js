function somaQuadradosAteN(n){
    let soma = 0

    for(let i = 1; i <= n; i++){
        soma += i ** 2
    }
    return soma
}
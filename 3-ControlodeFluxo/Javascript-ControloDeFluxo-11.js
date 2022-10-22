function fatorialN(n){
    let solucao  = BigInt(1)
    for(let i = BigInt(1);i <= n ;i++){
        solucao = solucao * i
    }
    return solucao
}
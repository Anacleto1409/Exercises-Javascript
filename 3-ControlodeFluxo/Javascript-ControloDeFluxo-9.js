function contaNumeroDeDivisoesPorDois(n){
    let count = 0
    for(let i= 0; i<n;i++){
        while(n>1){
        n= Math.floor(n/2)
        count++
    }
}
return count
}
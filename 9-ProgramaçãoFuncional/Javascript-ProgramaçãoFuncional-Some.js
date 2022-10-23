function existeMaiorDoQueZero(array){
    return array.some(e=> e>0)
}

function existeMenorDoQueN(array, n){
        return array.some(e=> e<n)
}
function existePar(array){
    return array.some((n)=>n%2==0)
}

function existeMultiploDeTres(array){
    return array.some(e=> e*3)
}

function existeNegativo(array){
    return array.some((a)=>a<0)
}
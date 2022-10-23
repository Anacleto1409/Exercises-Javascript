function todosMaioresDoQueCinco(array){
    return array.every(e=> e>5)
}

function todosIguaisAN(array, n){
    return array.every(e => e == n)
}

function todasPossuemLetra(array, letra){
    return array.every(e => e.includes(letra))
}

function todosSaoNumeros(array){
    return array.every(e=> e == Number(e))
}

function todosSaoNegativos(array){
    return array.every(e=> e<0)
}
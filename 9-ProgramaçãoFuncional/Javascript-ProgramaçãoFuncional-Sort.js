function ordenaDoMaiorAoMenor(array){
    return array.sort(function(a,b){
        if(a < b) return 1
        if(b < a) return -1
        return 0
    })
}
function ordenaDoMenorAoMaior(array){
    return array.sort((a,b)=> a-b)
}


function encontraMaiorQueZero(array){
    return array.find(e => e > 0)
}

function encontraPar(array){
    return array.find(e => e % 2 == 0)
}

function encontraMenorDoQueN(array, n){
    return array.find(e=> e<n)
}
function encontraPrimo(array){
    // escreve aqui a função
    return array.find(num => ePrimo(num))
}
function ePrimo(num){
    for(let i = 2; i < num; i++){
        if(num % i ===0)return false
    }
    return num
}

function encontraImpar(array){
    return array.find((a)=>a%2!==0)
}
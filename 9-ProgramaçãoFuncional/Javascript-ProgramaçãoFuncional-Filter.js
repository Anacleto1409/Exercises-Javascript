function filtraArray(array){
    return array.filter((e) => e % 2 !== 0)
}

function filtraInteiros(array){
    return array.filter((num) => num > 0 && num % parseInt(num) === 0)
}

function filtraMaioresQueN(array, n){
    return array.filter((e)=> e > n)
}

function filtraMenoresQueN(array, n){
    return array.filter((a)=>a<n)
}

function filtraPares(array){
    return array.filter((a)=>a%2==0)
}
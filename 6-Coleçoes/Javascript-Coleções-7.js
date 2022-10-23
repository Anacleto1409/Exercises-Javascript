function arrayDeNAZero(n){
    if(n < 0)return "Por favor insira um número superior a 0."
    let arr= []
    
    for(let i = n; i >= 0; i--){
        arr.push(i)
    }
    console.log(arr)
    return arr
    }
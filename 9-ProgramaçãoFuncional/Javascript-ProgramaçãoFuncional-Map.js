function multiplicadosPorN(array, n){
    
    let conta = array.map(function(item){
        return item * n
    }); 
    return conta
}
 //return array.map(e => e * n)

 function partesInteiras(array){
    //let transf = (i) => Math.floor(i)
    //return array.map(transf)
    return array.map((i ) => i = Math.floor(i))
}

 function partesDecimais(array){
    return array.map(e=> Math.floor((e - Math.trunc(e))*100)/100)
}

function triplos(array){
    //return array.map(e => e * 3)
   let arr = []
   let conta = 0
    for(i= 0; i < array.length; i++){
        conta = array[i] * 3
        arr.push(conta)
    }
    return arr
}

function raizesCubicas(array){
    let transf = (i) => Math.cbrt(i)
    return array.map(transf)
 }
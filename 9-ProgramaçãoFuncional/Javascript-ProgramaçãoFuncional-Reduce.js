function valorMaximo(array){
    return Math.max(...array)
}

function valorMaximoImpar(array){
    return array.reduce((maior,e )=> e > maior && e % 2 != 0 || maior % 2 == 0 ? e : maior)
}

function mapaDeOcorrencias(array){
    return array.reduce((acc,curr)=>{
        if (!acc.has(curr)){
            return new Map([...acc,[curr,1]])
        }else{return new Map([...acc,[curr,acc.get(curr)+1]])
    }
},new Map())
}

function somatorio(array){
    return array.reduce((a,b)=> a+b)
}

function minimoPar(array){
    return array.reduce((menor,e) => e < menor && e % 2 == 0||menor%2 !==0 ? e : menor)
    }


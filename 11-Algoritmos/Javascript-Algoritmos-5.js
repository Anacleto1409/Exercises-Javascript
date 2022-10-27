
    function arrayInfinito(array, esq, dir){
        if(array == undefined || array.length == 0) return 0
         
        let ite  = Math.ceil(dir / array.length);
    
        let newArray = array
        for(let i = 0; i < ite; i++){
            newArray = newArray.concat(array);
            }
    
            let soma = 0
    
        for(let i = esq; i <= dir; i++){
          soma = soma + newArray[i];
        }
        return soma;
    
    }
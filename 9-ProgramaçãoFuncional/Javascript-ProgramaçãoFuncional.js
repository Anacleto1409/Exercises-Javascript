function paresDoArray(array){
    let arr = []
    let a = 0
    
    for(let i = 0; i< array.length;i++)
    if(array[i] % 2 == 0){
        a = array[i]
        arr.push(a)
    }
    return arr
    }

function contaParesDoArray(array){
        
        let count = 0
        for(let i=0; i<array.length;i++){
            if(array[i]%2 == 0){
                count++
            }
        }
        return count
        }

function contaInteirosDoArray(array){
            let cont = 0;
            for(let i=0; i < array.length; i++){
                if(Number.isInteger(array[i])){
                 cont++
            }
         }
         return cont
         }

function inverteArray(array){
            if(!array.length)return array
            return inverteArray(array.slice(1)).concat(array[0])}

function quadradosDoArray(array){
    let arr = []
    let a = 0
    for(let i= 0;i<array.length;i++){
        a= array[i]* array[i]
             arr.push(a)
                }
                return arr
                }

    function somaDoArray(array){        
     if(array.length === 0){
       return 0                                
     }else{                 
        return array[0]+ somaDoArray(array.slice(1))}
            }          
                    

    function factorial (n){
     if(n === 0){
        return 1           
                }            
      return n*factorial(n-1)          
            }        
     function fatoriaisDoArray(array){
      let newArr = []       
       for(let i = 0;i < array.length;i++){         
          newArr.push(factorial(array[i]))                    
                }
                return newArr
            }

    function cubosDoArray(array){
                // escreve aqui a função
     for(let i = 0 ; i < array.length; i++){        
         array[i] *= array[i] * array[i]            
                }           
     return array          
            }

            function somaDosQuadradosDoArray(array){
                // escreve aqui a função
                let soma =0
                for(let i =0; i < array.length;i++){
                    array[i] *= array[i]
                    soma = soma + array[i]
                }
                console.log(soma)
                return soma
            }
    
            function contaSuperioresAN(array, n){
                // escreve aqui a função
                let count =0
            
                for(let i=0;i< array.length;i++){
                    if(array[i] > n)count++
                }
                return count
            }
    
function contaParesEntreDoisValores(valor1, valor2){
    let cont = 0
    let vm = 0
    let vmr = 0

        if(valor1 == valor2){
            return "Por favor introduza dois valores diferentes."
        }
    
    if(valor1>valor2){
        vm = valor1
        vmr = valor2
    }else{
        vm = valor2
        vmr = valor1
    }

    for(i = vmr; i <= vm; i++){
        if(i%2==0)
            cont++
    }
    return cont
}
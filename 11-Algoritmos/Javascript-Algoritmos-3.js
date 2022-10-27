function binarySearch(array, num) {
    //Calcula o pivot, sendo um valor central entre 2 outros valores (máximo e mínimo)
    const findPivot = (a, b) => Math.round((a + b) / 2)

    //No início, o número está entre o primeiro elemento do array
    let min = 0
    //e o último
    let max = array.length - 1

    //Obtem-se o primeiro pivot
    let pivot = findPivot(max, min)
    let count = 0

    //Enquanto o índice mínimo possível for menor ou igual que o máximo possível
    while (min <= max) {
        count++

        //Se o elemento no pivot for o número pretendido
        if(array[pivot] === num) {
            //retorna o objeto
            return {
                foundAtIndex: pivot,
                numberOfGuesses: count
            }
        //Case o elemento no pivot seja menor, atualiza-se o máximo de modo a que não inclua o pivot e os números maiores que o pivot 
        } else if(array[pivot] > num) {
            max = pivot - 1
            pivot = findPivot(min, max)
        //Semelhante caso o pivot seja maior
        } else {
            min = pivot + 1
            pivot = findPivot(min, max)
        }
    }

    //Se não encontrou, retorna com o valor de undefined
    return {
        foundAtIndex: undefined,
        numberOfGuesses: count
    }
}
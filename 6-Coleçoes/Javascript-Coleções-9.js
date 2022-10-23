function arrayDePares(array) {
    let arr = []
    let a = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            a = array[i]
            arr.push(a)
        }
    }
    return arr
}

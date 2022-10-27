function FizzBuzz(n) {
    let xArray = []
    
    for (let i = 1; i <= n; i++) {
        if ((i % 3 && i % 5 && i % 15) !== 0 ) {
            xArray.push (" ");
        } else if (i % 15 == 0) {
            xArray.push("FizzBuzz")
        } else if (i % 5 == 0) {
            xArray.push("Buzz")
        } else if (i % 3 == 0) {
            xArray.push("Fizz")
        }
    }
    return xArray
}
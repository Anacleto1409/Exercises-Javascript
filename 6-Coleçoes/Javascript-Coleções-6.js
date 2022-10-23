function arrayDeZeroAN(n) {
       
    if (n < 1) {
    return "Por favor insira um número superior a 0."
}

let arr = [];
for (let i = 0;i <= n; i++) {
    arr.push((i))
}
return arr
}
function calculaDiaDoAno(dia, mes){
    // escreve aqui a função
    const MESES = new Map([
        [1, 31],
        [2, 28],
        [3, 31],
        [4, 30],
        [5, 31],
        [6, 30],
        [7, 31],
        [8, 31],
        [9, 30],
        [10, 31],
        [11, 30],
        [12, 31],
    ])

    let diasTotais = 0;

    for(let m = 1; m < mes; m++){
        diasTotais += MESES.get(m)
    }

    diasTotais += dia;

    return diasTotais;
}

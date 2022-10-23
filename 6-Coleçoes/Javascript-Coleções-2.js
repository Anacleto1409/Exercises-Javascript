function diaEmPalavras(dia, mes, ano){
    // escreve aqui a função
    const ERRO_DIA = "Por favor introduza um dia entre 1 e "
    const ERRO_MES = "Por favor introduza um mês entre 1 e 12."
    const ERRO_ANO = "Por favor introduza um ano entre 2000 e 2030."
    const DOT = "."
    console.log(dia + " " + mes + " " + ano)
    let diaMeses = new Map([
        [1, [31, "janeiro"]],
        [2, [28, "fevereiro"]],
        [3, [31, "março"]],
        [4, [30, "abril"]],
        [5, [31, "maio"]],
        [6, [30, "junho"]],
        [7, [31, "julho"]],
        [8, [31, "agosto"]],
        [9, [30, "setembro"]],
        [10, [31, "outubro"]],
        [11, [30, "novembro"]],
        [12, [31, "dezembro"]]
    ])
    let NUM_EXT = new Map([
        [1, "um"],
        [2, "dois"],
        [3, "três"],
        [4, "quatro"],
        [5, "cinco"],
        [6, "seis"],
        [7, "sete"],
        [8, "oito"],
        [9, "nove"],
        [10, "dez"],
        [11, "onze"],
        [12, "doze"],
        [13, "treze"],
        [14, "catorze"],
        [15, "quinze"],
        [16, "dezasseis"],
        [17, "dezassete"],
        [18, "dezoito"],
        [19, "dezanove"],
        [20, "vinte"],
        [21, "vinte e um"],
        [22, "vinte e dois"],
        [23, "vinte e três"],
        [24, "vinte e quatro"],
        [25, "vinte e cinco"],
        [26, "vinte e seis"],
        [27, "vinte e sete"],
        [28, "vinte e oito"],
        [29, "vinte e nove"],
        [30, "trinta"],
        [31, "trinta e um"]
    ])
    if ((ano % 4 === 0 && ano % 400 === 0 && ano % 100 === 0) || (ano % 4 === 0 && ano % 100 !== 0))
        diaMeses.set(2, [29, "fevereiro"])
    if(dia < 1 || dia > diaMeses.get(mes)[0])
        return ERRO_DIA + diaMeses.get(mes)[0] + DOT
    if(mes < 1 || mes > 12)
        return ERRO_MES
    if(ano < 2000 || ano > 2030)
        return ERRO_ANO

    return NUM_EXT.get(dia) + " de " + diaMeses.get(mes)[1] + " de dois mil e " + NUM_EXT.get(ano - 2000)
}
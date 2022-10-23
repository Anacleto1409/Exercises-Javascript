function tempoEmPalavras(h, m) {
    const hours = new Map([
        [0, 'meia noite'],
        [1, 'uma'],
        [2, 'duas'],
        [3, 'três'],
        [4, 'quatro'],
        [5, 'cinco'],
        [6, 'seis'],
        [7, 'sete'],
        [8, 'oito'],
        [9, 'nove'],
        [10, 'dez'],
        [11, 'onze'],
        [12, 'meio dia'],
        [13, 'uma'],
        [14, 'duas'],
        [15, 'trÃªs'],
        [16, 'quatro'],
        [17, 'cinco'],
        [18, 'seis'],
        [19, 'sete'],
        [20, 'oito'],
        [21, 'nove'],
        [22, 'dez'],
        [23, 'onze']
    ])

    const minutos = new Map([
        [0, 'em ponto'],
        [1, 'um'],
        [2, 'dois'],
        [3, 'três'],
        [4, 'quatro'],
        [5, 'cinco'],
        [6, 'seis'],
        [7, 'sete'],
        [8, 'oito'],
        [9, 'nove'],
        [10, 'dez'],
        [11, 'onze'],
        [12, 'doze'],
        [13, 'treze'],
        [14, 'catorze'],
        [15, 'um quarto'],
        [16, 'dezasseis'],
        [17, 'dezassete'],
        [18, 'dezoito'],
        [19, 'dezanove'],
        [20, 'vinte'],
        [21, 'vinte e um'],
        [22, 'vinte e dois'],
        [23, 'vinte e trÃªs'],
        [24, 'vinte e quatro'],
        [25, 'vinte e cinco'],
        [26, 'vinte e seis'],
        [27, 'vinte e sete'],
        [28, 'vinte e oito'],
        [29, 'vinte e nove'],
        [30, 'meia']
    ])

    if (m > 30) {
        const nextHour = (h + 1) % 24
        if ([12].includes(nextHour))
            return `${minutos.get(60 - m)} para o ${hours.get(nextHour)}`
        if ([0, 1, 13].includes(nextHour))
            return `${minutos.get(60 - m)} para a ${hours.get(nextHour)}`
        return `${minutos.get(60 - m)} para as ${hours.get(nextHour)}`
    }
    if (m === 0) {
        return `${hours.get(h)} ${minutos.get(m)}`
    }
    return `${hours.get(h)} e ${minutos.get(m)}`
}

function subtraiHoras(data, horas) {
    let a = horas * 3600000
    let date = new Date (data.valueOf()-a)
    return date}
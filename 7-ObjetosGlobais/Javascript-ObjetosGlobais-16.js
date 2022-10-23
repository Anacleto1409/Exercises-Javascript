function adicionaSemanas(data, semanas) {
    let a= semanas*604800000
    let date = new Date(data.valueOf()+ a)
    return date
}
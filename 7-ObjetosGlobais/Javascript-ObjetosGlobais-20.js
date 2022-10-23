function dataPorExtenso(data){

    let diaSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"]
    let meses = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"]

    let semana = diaSemana[data.getDay()]
    let dia = data.getDate()
    let mes = meses[data.getMonth()]
    let ano = data.getFullYear()

    console.log(semana)
    console.log(dia)
    console.log(mes)
    console.log(ano)

    console.log(`${semana}, ${dia} de ${mes} de ${ano}`)
    return `${semana}, ${dia} de ${mes} de ${ano}`
} 

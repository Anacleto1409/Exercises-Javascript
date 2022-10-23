function formataData(data){
    const dia = String(data.getDate()).padStart(2,"0")
    const mes = String(data.getMonth()+1).padStart(2,"0")
    let ano = data.getFullYear()
    return `${dia}-${mes}-${ano}`
}
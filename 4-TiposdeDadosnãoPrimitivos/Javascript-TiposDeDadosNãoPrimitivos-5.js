function verificaIdade(pessoa) {
    if(pessoa.idade >= 18){
        pessoa.maiorDeIdade = true

    } else{
        pessoa.maiorDeIdade = false
    }
    return pessoa
}
function mesesDoAno(m) {

    let a = ""

    switch(m){
        case 1 :
         a = "Janeiro"
        break;
        case 2 :
        a = "Fevereiro"
        break;
        case 3 :
        a = "Março"
        break;
        case 4 :
        a = "Abril"
        break;
        case 5 :
        a = "Maio"
        break;
        case 6 :
        a = "Junho"
        break;
        case 7 :
        a = "Julho"
        break;
        case 8 :
        a = "Agosto"
        break;
        case 9 :
        a = "Setembro"
        break;
        case 10 :
        a = "Outubro"
        break;
        case 11 :
        a = "Novembro"
        break;
        case 12 :
        a = "Dezembro"
        break;
        default:
        a = "Número inválido. Por favor insira um número entre 1 e 12."
    }
    return a
}

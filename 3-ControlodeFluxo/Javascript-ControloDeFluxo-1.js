function calculaFaixaEtaria(idade){
    if(idade <=11) return "Criança"
    else if(idade >=12 && idade <=17) return "Adolscente"
    else if(idade >=18 && idade <=64) return "Adulto"
    else if(idade>65) return "Sénior"
    }
function calculaEstacaoDoAno(dia, mes){
    if(dia >= 21 && mes == 3 || mes == 4 || mes == 5 || mes == 6 && dia <= 20){return "Primavera"}
        if(dia > 30 && mes == 4){return"Por favor introduza um dia entre 1 e 30."}
    if(dia >= 21 && mes == 6 || mes == 7 || mes == 8 || mes == 9 && dia <= 20){return "Verão"}
        if(dia > 30 && mes == 6){return"Por favor introduza um dia entre 1 a 30."}
    if(dia >= 21 && mes == 9 || mes == 10 || mes == 11 || mes == 12 && dia <= 20){return "Outono"}
        if(dia > 30 && mes == 9){return"Por favor introduza um dia entre 1 e 30."}
    if(dia >= 21 && mes == 12 || mes == 1 || mes == 2 || mes == 3 && dia <= 20){return "Inverno"}
        if(dia > 28 && mes == 2){return "Por favor introduza um dia entre 1 e 28."}
    if(mes > 12){return"Por favor introduza um mes entre 1 e 12."}}
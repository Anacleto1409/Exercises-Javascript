function mesPorExtensoBilingue(data, lingua){
    
    let mes = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Junlho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    let d = data.getMonth()
    
    if(lingua == "pt"){

        switch(d){
            case 0:
                return mes[d]
            case 1:
                return mes[d]
            case 2:
                return mes[d]
            case 3:
                return mes[d]
            case 4:
                return mes[d]
            case 5:
                return mes[d]
            case 6:
                return mes[d]
            case 7:
                return mes[d]
            case 8:
                return mes[d]
            case 9:
                return mes[d]
            case 10:
                return mes[d]
            case 11:
                return mes[d]
        }

    }else if(lingua == "en"){

        switch(d){
            case 0:
                return month[d]
            case 1:
                return month[d]
            case 2:
                return month[d]
            case 3:
                return month[d]
            case 4:
                return month[d]
            case 5:
                return month[d]
            case 6:
                return month[d]
            case 7:
                return month[d]
            case 8:
                return month[d]
            case 9:
                return month[d]
            case 10:
                return month[d]
            case 11:
                return month[d]
        }

    }
}

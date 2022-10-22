function perimetroDoTrapezio(comprimentoMaior, comprimentoMenor, altura){
    let cateto= (comprimentoMaior - comprimentoMenor)/2;
    let x = Math.hypot(cateto, altura)
    
    return x + comprimentoMaior+ x + comprimentoMenor;
    }
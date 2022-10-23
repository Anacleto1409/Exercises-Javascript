function diferencaAbsolutaEntreDiagonais(matrizquadrada) {
    let diag1 = matrizquadrada[0][0] + matrizquadrada[1][1] + matrizquadrada[2][2] + matrizquadrada[3][3]
    let diag2 = matrizquadrada[0][3] + matrizquadrada[1][2] + matrizquadrada[2][1] + matrizquadrada[3][0] 
     
     return Math.abs(diag1-diag2)  
    }
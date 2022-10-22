function aleatorioEntre(min, max) {
    let nrAleatorio = Math.floor((Math.random() * (max - min + 1)) + min);
    return nrAleatorio;
}
function diferencaEmDias(data1, data2) {
    return Math.abs(Math.floor(((Math.max(data1,data2)) - Math.min(data2,data1))/(24*60*60*1000)))
}
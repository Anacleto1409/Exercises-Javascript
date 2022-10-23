function dataMaisAntiga(datas) {
    let menor = datas[0]
    for(let i= 0; i<=datas.length;i++){
        if(datas[i]<menor){
            menor = datas[i]
        }
    }
    return menor
}
function dataMaisRecente(data1, data2) {
    if(data1.getTime() > data2.getTime()){
        return data1
    }else{
        return data2
    }
    }
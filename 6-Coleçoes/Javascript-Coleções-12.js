function arraySemDuplicados(array){
    let chars= []
    array.forEach((element)=>{
        if(!chars.includes(element)){
            chars.push(element);
        }
    });
    return chars
 }
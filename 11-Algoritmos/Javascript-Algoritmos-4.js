function productoExclusivo(array){
    let resultArray = [], product;
    for(let i = 0; i < array.length; i++){
      product = 1;
      for(let j = 0; j < array.length; j++){
         if(i !== j) product *= array[j];
      }
      resultArray.push(product);
    }
    return resultArray;
}
function rot13(str) {
    let string = "";
    for(let i=0; i < str.length; i++){
      let strChar = str.charCodeAt(i);
      if(strChar < 65 || strChar > 90){
        console.log(str.charCodeAt(i))
        string += str.charAt(i);
      }else{
        if(strChar < 78){
          string += String.fromCharCode(strChar + 13);
        }else{
          string += String.fromCharCode(strChar-13)
        }
      }
    }
    return string;
  }
  
  rot13("SERR PBQR PNZC");
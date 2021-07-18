function rot13(message){
  
    let doubleAlphabet = [];
    
    for (let i = 65; i <= 90; i++) {
      doubleAlphabet.push(String.fromCodePoint(i));
    }
    for (let i = 65; i <= 90; i++) {
      doubleAlphabet.push(String.fromCodePoint(i));
    }
    for (let i = 97; i <= 122; i++) {
      doubleAlphabet.push(String.fromCodePoint(i));
    }
    for (let i = 97; i <= 122; i++) {
      doubleAlphabet.push(String.fromCodePoint(i));
    }
    
    return message.split("").map(char => {
      if(doubleAlphabet.lastIndexOf(char) != -1){
        return doubleAlphabet[doubleAlphabet.lastIndexOf(char)-13]
      }
      return char;
    }).join("");
  }
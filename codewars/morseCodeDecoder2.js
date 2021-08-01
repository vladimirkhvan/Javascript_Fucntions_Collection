function trimZeroes(arr){
    
    if(arr.indexOf("1") != -1){
        arr.splice(0, arr.indexOf("1"));
    }
    if(arr.lastIndexOf("1") != -1){
        arr.splice(arr.lastIndexOf("1")+1);
    }

    return arr;

}

var decodeBits = function (bits) {
    // ToDo: Accept 0's and 1's, return dots, dashes and spaces

    console.log(bits);

    let dot = "1";
    let dash = "111";
    let pauseDot = "0";
    let pauseChar = "000";
    let pauseWord = "0000000";
    let multiplier;

    bits = bits.split("");
  
    trimZeroes(bits);
  
    let counter = 0;
    let smallest = 200;

    for (let i = 0; i < bits.length; i++) {
        if (bits[i] == "1") {
            counter++;
        } else {
            if(smallest > counter && counter != 0){
                smallest = counter;
            }
            counter = 0;
        }
    }
  
    if(smallest > counter){
        smallest = counter;
    }
  
    let countZeroes = 0;
    let smallestZero = 200;

    for(let i = 0; i < bits.length; i++){
        if(bits[i] == "0"){
            countZeroes++;
        } else {
            if(smallestZero > countZeroes && countZeroes != 0){
                smallestZero = countZeroes;
            }
        }
    }

    if(smallestZero > countZeroes){
        smallestZero = countZeroes;
    }
  
    
    if(smallestZero < smallest && smallestZero != 0){
        multiplier = smallestZero;
    } else {
        multiplier = smallest;
    }

    for (let i = 0; i < +multiplier - 1; i++) {
        dot += "1";
        dash += "111";
        pauseChar += "000";
        pauseWord += "0000000";
    }

    bits = bits.join("");

    return (bits.split(dash).join("-")
    .split(pauseWord).join("   ")
    .split(pauseChar).join(" ")
    .split(dot).join(".")
    .split(pauseDot).join(""));
    // return bits.replaceAll(dash, '-').replaceAll(pauseWord, '   ').replaceAll(pauseChar, ' ').replaceAll(dot, '.').replaceAll(pauseDot, '');
}

var decodeMorse = function(morseCode){
  
    morseCode = morseCode.split("   ");
  
    morseCode = morseCode.map(item => item.split(" "));
    morseCode = morseCode.map(item => item.map(item => MORSE_CODE[item]));
    morseCode = morseCode.map(item => item.join(""));
    morseCode = morseCode.filter(item => item != "");

    return morseCode.join(" ");
}
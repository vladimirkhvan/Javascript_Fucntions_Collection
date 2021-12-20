function printerError(s) {
    let validAlphabet = "abcdefghijklm";
    let negativeCounter = 0;

    let str = s.split("");

    for(let i = 0; i<str.length; i++){
        if(validAlphabet.indexOf(str[i]) == -1){
            negativeCounter++;
        }
    }

    return `${negativeCounter}/${str.length}`;
}
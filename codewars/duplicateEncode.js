function duplicateEncode(word){
    word = word.toLowerCase();
    let wordArray = word.split("");
    let isUnique;

    for(let i = 0; i<wordArray.length; i++){
        if(wordArray[i]==")"){
            wordArray[i] = "rep";
        }
    }

    for(let i = 0; i<wordArray.length; i++){
        isUnique = true;
        for(let j = wordArray.length-1; j>i; j--){
            if(wordArray[i]==wordArray[j]){
                wordArray[j] = ")";
                isUnique = false;
            }
        }
        if(!isUnique){
            wordArray[i] = ")";
        }

    }

    for(let i = 0; i<wordArray.length; i++){
        if(wordArray[i]!=")"){
            wordArray[i] = "(";
        }
    }

    return wordArray.join("");
}

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 
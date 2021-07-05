function isPangram(string){
    //snippet from github to get array of chars
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));

    string = string.toUpperCase();

    for(let i = 0; i<alphabet.length; i++){

        if(string.indexOf(alphabet[i]) == -1){
            return false;
        }

    }

    return true;
}
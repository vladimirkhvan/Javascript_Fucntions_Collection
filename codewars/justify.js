function justifyString(wordsArr, length, currentLineLength) {
    if (wordsArr.length < 3) {
        return;
    }

    while (true) {
        for (let j = 0; j < wordsArr.length - 2; j++) {
            if (currentLineLength == length + 1) {
                return;
            }
            wordsArr[j] += " ";
            currentLineLength += 1;
        }
    }
}

var justify = function (str, len) {

    let newStr = [];
    let currentLineLength = 0;

    str = str.split(" ");

    let wordLength = str.map(item => item.length);

    // count amount of lines
    let currentLine = [];

    for (let i = 0; i < wordLength.length; i++) {

        if (currentLineLength + wordLength[i] <= len) {

            currentLine.push(str[i]);
            currentLineLength += (wordLength[i] + 1);

            if (currentLineLength >= len) {

                currentLine.push("\n");
                newStr.push(currentLine);

                currentLine = [];
                currentLineLength = 0;

            }

        } else {

            currentLineLength = wordLength[i] + 1;

            currentLine.push("\n");
            newStr.push(currentLine);

            currentLine = [];
            currentLine.push(str[i]);

        }
    }

    for (let i = 0; i < newStr.length; i++) {
        justifyString(newStr[i], len, newStr[i].reduce((sum, current) => sum + current.length, 0));
        if(i != newStr.length -1){
            newStr[i] = newStr[i].join("");
        }
    }
    newStr[newStr.length-1].pop();
    newStr[newStr.length-1] = newStr[newStr.length-1].join("");

    return newStr.join("");

};
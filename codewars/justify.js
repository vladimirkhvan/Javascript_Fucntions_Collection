var justify = function (str, len) {

    let newStr = [];
    let currentLineLength = 0;

    console.log(str);
    console.log(len);

    str = str.split(" ");

    let wordLength = str.map(item => item.length);

    // count amount of lines
    let currentLine = [];

    for (let i = 0; i < wordLength.length; i++) {

        if (currentLineLength + wordLength[i] <= len) {

            currentLineLength += wordLength[i] + 1;
            currentLine.push(str[i]);

            if (currentLineLength >= len) {

                currentLine.push("\n");
                newStr.push(currentLine);

                currentLine = [];
                currentLineLength = 0;

            }

        } else {

            currentLineLength = wordLength[i];

            currentLine.push("\n");
            newStr.push(currentLine);

            currentLine = [];
            currentLine.push(str[i]);

        }
    }

    for (let i = 0; i < newStr.length; i++) {
        newStr[i] = newStr[i].reduce((sum, current) => sum + current.length, 0);
    }

    console.log(newStr);
    console.log(newStr.join(" "));

};
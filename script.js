window.onload = function () {

    justify("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sagittis dolor mauris, at elementum ligula tempor eget. In quis rhoncus nunc, at aliquet orci. Fusce at dolor sit amet felis suscipit tristique. Nam a imperdiet tellus. Nulla eu vestibulum urna. Vivamus tincidunt suscipit enim, nec ultrices nisi volutpat ac. Maecenas sit amet lacinia arcu, non dictum justo. Donec sed quam vel risus faucibus euismod. Suspendisse rhoncus rhoncus felis at fermentum. Donec lorem magna, ultricies a nunc sit amet, blandit fringilla nunc. In vestibulum velit ac felis rhoncus pellentesque. Mauris at tellus enim. Aliquam eleifend tempus dapibus. Pellentesque commodo, nisi sit amet hendrerit fringilla, ante odio porta lacus, ut elementum justo nulla et dolor.", 20)

}


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
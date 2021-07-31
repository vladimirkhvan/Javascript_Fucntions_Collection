decodeMorse = function (morseCode) {

    morseCode = morseCode.split("   ");
    morseCode = morseCode.map(item => item.split(" "));
    morseCode = morseCode.map(item => item.map(item => MORSE_CODE[item]));
    morseCode = morseCode.map(item => item.join(""));
    morseCode = morseCode.filter(item => item != "");

    return morseCode.join(" ");
}
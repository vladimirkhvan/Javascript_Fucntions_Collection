function battle(x, y) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase();
    let xNum, yNum;

    if ((xNum = x.split("").reduce((sum, current) => sum + alphabet.indexOf(current) + 1, 0)) ==
        (yNum = y.split("").reduce((sum, current) => sum + alphabet.indexOf(current) + 1, 0))) {
        return "Tie!";
    }
    return xNum > yNum ? x : y;
}
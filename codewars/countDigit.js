function nbDig(n, d) {
    let counter = 0;
    for (let i = 0; i <= n; i++) {
        let currentNum = (i ** 2).toString();
        for (let j = 0; j < currentNum.length; j++) {
            if (currentNum[j] == d) {
                counter++;
            }
        }
    }

    return counter;
}
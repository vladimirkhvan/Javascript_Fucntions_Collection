function howmuch(m, n) {

    if (m > n) {
        n = m + n;
        m = n - m;
        n = n - m;
    }


    let B;
    let C;
    let result = [];

    for (let i = 0; i <= n - m; i++) {
        if (Number.isInteger((m + i - 2) / 7) && Number.isInteger((m + i - 1) / 9)) {
            B = (m + i - 2) / 7;
            C = (m + i - 1) / 9;
            result.push([`M: ${m + i}`, `B: ${B}`, `C: ${C}`]);
        }
    }

    return result;

}
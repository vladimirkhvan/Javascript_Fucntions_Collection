    function comparePowers(n1, n2) {

        let firstNumber = n1[0],
            firstPower = n1[1];

        let secondNumber = n2[0],
            secondPower = n2[1];

        let equalToFirstNumber;

        //equalToFirstNumber = nthroot((Math.pow(firstNumber, firstPower)), secondPower);

        equalToFirstNumber = BigInt(Math.pow(Math.pow(firstNumber, firstPower), 1 / secondPower));

        if (secondNumber == equalToFirstNumber) return 0;


        console.log(`this is first number : ${firstNumber}`);
        console.log(`this is first power : ${firstPower}`);
        console.log(`this is second number : ${secondNumber}`);
        console.log(`this is second power : ${secondPower}`);

        console.log(`this is equal number : ${equalToFirstNumber}`);

        return equalToFirstNumber > secondNumber ? -1 : 1;
    }

    // function that can handle negative numbers
    // source https://stackoverflow.com/questions/7308627/javascript-calculate-the-nth-root-of-a-number
    // function nthroot(x, n) {
    //     try {
    //       var negate = n % 2 == 1 && x < 0;
    //       if(negate)
    //         x = -x;
    //       var possible = Math.pow(x, 1 / n);
    //       n = Math.pow(possible, n);
    //       if(Math.abs(x - n) < 1 && (x > 0 == n > 0))
    //         return negate ? -possible : possible;
    //     } catch(e){}
    //   }
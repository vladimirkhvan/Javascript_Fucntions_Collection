function digPow(n, p){
    let arrNumber =  n.toString().split("").map(item=>(+item));
    let numberLength = n.toString().length;
    let sum = 0;

    for(let i = 0; i <= numberLength - 1; i++){
        sum += Math.pow(arrNumber[i],i+p);
    }

    return Number.isInteger(sum/n)? sum/n : -1;
}

// Test.assertEquals(digPow(89, 1), 1)
// Test.assertEquals(digPow(92, 1), -1)
// Test.assertEquals(digPow(46288, 3), 51)
function prime_factors(n) {
    
    let arr = [];

    let tempNumber = n;

    let counter = 2;

    

    while(tempNumber != 1){

        if(tempNumber%counter != 0){

            counter++;

            continue;
        }

        console.log(counter);

        arr.push(counter);

        tempNumber /= counter;

    }

    return arr;

}
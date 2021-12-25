function decompose(...args){

    let divisorsLists = [];

    for(let i = 0; i < args.length; i++){
        
        let number = args[i];

        let divisors = [];

        for(let j = 2; j < Math.ceil(number/2) ; j++){

            if(number%j == 0){
                number /= j;
                divisors.push(j);
                j--;
            }

        }

        divisors.push(number);
        divisorsLists.push(divisors);

    }

    return divisorsLists;
    
}
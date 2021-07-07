function showElementaryNumbers(){ //shows all elementary numbers up to 100
    let isElementary;   //boolean value

    for(let i = 2 ; i<100; i++){   
        isElementary = true;
        for(let k = 2; k<i; k++){
            if(i%k == 0){
                isElementary = false;   //if false => number is not elementary
            }
        }
        if(isElementary){
            console.log(`number ${i} is an elementary number`);
        }
    }
}
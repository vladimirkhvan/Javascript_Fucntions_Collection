//for case with 2 inputs

function gcd(a, b){

    if(args.length == 0){
        return false;
    }

    let divisorsLists = [];

    for(let i = 0; i < args.length; i++){
        
        let number = args[i];

        let divisors = [];

        for(let j = 2; j <= Math.ceil(number/2) ; j++){

            if(number%j == 0){
                divisors.push(j);
            }

        }

        divisors.push(number);
        divisorsLists.push(divisors);

    }

    console.log(divisorsLists);

    if(divisorsLists.length == 1){
        return divisorsLists[0][divisorsLists[0].length - 1];
    }

    for(let i = divisorsLists.length - 1; i > 0; i--){
        let firstList = divisorsLists[i-1];
        let secondList = divisorsLists[i];

        let commonDivisors = [];

        for(let j = firstList.length - 1; j <= 0; j--){
            if(secondList.includes(firstList[j])){
                
            }
        }
        
    }
    
}


//for case with multiple input


function gcd(...args){

    if(args.length == 0){
        return false;
    }

    let divisorsLists = [];

    for(let i = 0; i < args.length; i++){
        
        let number = args[i];

        let divisors = [];

        for(let j = 2; j <= Math.ceil(number/2) ; j++){

            if(number%j == 0){
                divisors.push(j);
            }

        }

        divisors.push(number);
        divisorsLists.push(divisors);

    }

    console.log(divisorsLists);

    if(divisorsLists.length == 1){
        return divisorsLists[0][divisorsLists[0].length - 1];
    }

    let divisorsListsLength = divisorsLists.length;

    for(let i = divisorsListsLength - 1; i > 0; i--){
        let firstList = divisorsLists[i-1];
        let secondList = divisorsLists[i];

        let commonDivisors = [];

        for(let j = firstList.length - 1; j >= 0; j--){
            if(secondList.includes(firstList[j])){
                commonDivisors.push(firstList[j]);
            }
        }
        
        console.log(` common divisors: ${commonDivisors} \n`)

        if(commonDivisors.length == 0){
            return 1;
        }

        divisorsLists.pop();
        divisorsLists.pop();
        divisorsLists.push(commonDivisors);
        
    }
    
    return divisorsLists[0][0];
}
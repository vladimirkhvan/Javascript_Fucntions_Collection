var lcm = function (...args) {

    let gcd = gcd(args);
    let result = 1;

    for(let i = 0; i < args.length; i++){
        result *= args[i];
        if(i != args.length - 1){
            result /= gcd;
        }
    }

    return result;
    
};

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

// let smallestNumber = Math.min(...args);

//     let isDivisible;

//     let divisorsArr = [1];

//     for(let i = smallestNumber; i > 1; i--){
//         isDivisible = true;

//         for(let j = 0; j < args.length; j++){
//             if(args[j]%i != 0){
//                 isDivisible = false;
//             }
//         }

//         if(isDivisible){

//         }

//     }
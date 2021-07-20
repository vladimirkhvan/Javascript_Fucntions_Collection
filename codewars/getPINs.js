function getPINs(observed) {

    observed = observed.split("");

    for (let i = 0; i < observed.length; i++) {
        observed[i] = +observed[i];
    }

    let arrOfPossibleNumbers = [];

    for (let i = 0; i < observed.length; i++) {
        let tempArr = [];

        if (observed[i] == 0) {
            tempArr.push(0);
            tempArr.push(8);
            arrOfPossibleNumbers.push(tempArr);
            continue;
        }
        if (observed[i] == 8) {
            tempArr.push(0);
        }

        tempArr.push(observed[i]);
        if (observed[i] % 3 != 1) {
            tempArr.push(observed[i] - 1);
        }
        if (observed[i] % 3 != 0) {
            tempArr.push(observed[i] + 1);
        }
        if (observed[i] < 7) {
            tempArr.push(observed[i] + 3);
        }
        if (observed[i] > 3) {
            tempArr.push(observed[i] - 3);
        }
        arrOfPossibleNumbers.push(tempArr);
    }

    return findAllCombinations(arrOfPossibleNumbers);

}

function findAllCombinations(arr) {

    if (arr.length < 2) {
        let resultArr = arr[0];
        resultArr = resultArr.map(item => item.toString());
        return resultArr;
    }

    let resultArr = arr[arr.length - 1];

    for (let i = arr.length - 2; i >= 0; i--) {

        let resultArrLength = resultArr.length;

        for (let j = 0; j < arr[i].length; j++) {

            for (let k = 0; k < resultArrLength; k++) {

                resultArr.push(arr[i][j].toString() + resultArr[k].toString());

            }

        }

        for(let i = 0; i<resultArrLength; i++){
            resultArr.shift();
        }

        resultArrLength = resultArr.length;


    }

    return Array.from(new Set(resultArr));
    
}

// observed is an array that has unknown size

//  we can find value in array by computations 
//  worst case is when we will need 5 number
//  number itself, number-1, number+1, number+3,number-3

// make 4 arrays of possible numbers
// iterate through and find all the possible solutions
// while iterating place solutions in array
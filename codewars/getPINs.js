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
            break;
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

}

function findAllCombinations(arr){

    if(arr.length<2){
        let resultArr = arr[0];
        resultArr = resultArr.map(item => item.toString());
        return resultArr;
    }
    
    let resultArr = arr[arr.length - 1];

    for(let i = arr.length - 2; i >= 0; i--){

        for(let j = 0; j < arr[i].length; j++){

            for(let k = 0; k < resultArr.length; k++){

                resultArr.push(arr[i][j].toString() + resultArr[k].toString());

            }

        }
        
        for(let j = 0; j < resultArr.length; j++){

            resultArr.push(resultArr[i].split("").reverse().join(""));

        }

    }

    return Array.from(new Set(resultArr));;
    
}
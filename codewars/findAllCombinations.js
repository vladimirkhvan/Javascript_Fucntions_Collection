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

        
        for (let j = 0; j < resultArrLength - 1; j++) {

            resultArr.push(resultArr[j].split("").reverse().join(""));

        }

    }

    return Array.from(new Set(resultArr));
    
}
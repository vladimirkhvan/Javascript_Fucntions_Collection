window.onload = function () {

    console.log(findAllCombinations(    [   [1], [1, 2, 3]  ]   ));


}

// function findAllCombinations(arr) {

//     let resultArr = arr[arr.length - 1];

//     for (let i = arr.length - 2; i >= 0; i--) {

//         for (let j = 0; j < arr[i].length; j++) {

//             let resultArrLength = resultArr.length;

//             for (let k = 0; k < resultArrLength; k++) {

//                 resultArr.push(arr[i][j].toString() + resultArr[k].toString());

//             }

//         }

//     }

//     return resultArr;

// }

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

        for(let i = 0; i<resultArr.length; i++){
            resultArr.shift();
        }

        resultArrLength = resultArr.length;

        
        for (let j = 0; j < resultArrLength; j++) {

            resultArr.push(resultArr[j].split("").reverse().join(""));

        }

    }

    return Array.from(new Set(resultArr));;
    
}
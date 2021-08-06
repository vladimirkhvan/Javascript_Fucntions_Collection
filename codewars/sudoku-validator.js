var Sudoku = function (data) {
    //   Private methods
    // -------------------------



    //   Public methods
    // -------------------------
    return {
        isValid: function () {
            let numberArray = []; // contain numbers from 1 - N

            if (data.length <= 0) {
                return false;
            }

            if (!Number.isInteger(Math.sqrt(data.length))) {
                return false;
            }

            for (let i = 0; i < data.length; i++) {
                if (data.length != data[i].length) {
                    return false;
                }
            }

            for (let i = 1; i <= data.length; i++) {
                numberArray.push(i);
            }

            for (let i = 0; i < data.length; i++) {
                let tempArr = [].concat(data[i]);
                if (JSON.stringify(tempArr.sort((a, b) => a - b)) != JSON.stringify(numberArray)) {
                    return false;
                }
            }

            for (let i = 0; i < data[0].length; i++) {
                let tempArr = [];
                for (let j = 0; j < data.length; j++) {
                    tempArr.push(data[j][i]);
                }
                if (JSON.stringify(tempArr.sort((a, b) => a - b)) != JSON.stringify(numberArray)) {
                    return false;
                }
            }

            let tempArr = [];
            for (let i = 0; i < Math.sqrt(data.length); i++) {
                tempArr.push([]);
            }
            let counter;

            for (let i = 0; i < data.length; i++) {

                counter = -1;
                for (let j = 0; j < data[0].length; j++) {
                    if (j % Math.sqrt(data.length) == 0) {
                        counter++
                    }
                    tempArr[counter].push(data[i][j]);
                }
                if ((i + 1) % Math.sqrt(data.length) == 0) {
                    for (let j = 0; j < Math.sqrt(data.length); j++) {
                        if (JSON.stringify(tempArr[j].sort((a, b) => a - b)) != JSON.stringify(numberArray)) {
                            return false;
                        }
                    }
                    tempArr = [];
                    for (let i = 0; i < Math.sqrt(data.length); i++) {
                        tempArr.push([]);
                    }
                }
            }

            return true;
        }
    };
};

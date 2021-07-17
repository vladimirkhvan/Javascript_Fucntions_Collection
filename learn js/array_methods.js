// ARRAY METHODS

    function filterRange(arr, start, end) {
        return arr.filter(item => item >= start && item <= end);
    }

    function filterRangeInPlace(arr, start, end) {

        let arrNew = arr.filter(item => item >= start && item <= end);

        arr.length = 0;

        for (let i = 0; i < arrNew.length; i++) {
            arr.push(arrNew[i]);
        }

        return arr;
    }

    function sortFromBiggest(arr) {
        return arr.sort((a, b) => b - a);
    }

    function sortClear(arr) {
        let tempArr = [];
        for (let i = 0; i < arr.length; i++) {
            tempArr.push(arr[i]);
        }
        return tempArr.sort(function (a,b) {
            if(a>b){
                return 1;
            }
            if(a == b){
                return 0;
            }
            return -1;
        });
    }
    //snippet from learn-javascript.ru
    function Calculator(){

        this.methods = {
            "-" : (a,b) => a-b,
            "+" : (a,b) => a-b,
        }

        this.calculate = function(str){
            strAsArr = str.split(" ");

            a = +strAsArr[0];
            b = +strAsArr[2];
            operand = strAsArr[1];

            if (!this.methods[op] || isNaN(a) || isNaN(b)) {
                return NaN;
            }

            return this.methods[operand](a,b);
        }

        this.addMethod = function(funcName, func){
            this.methods[funcName] = func;
        }
    }

    function extractNames(arr){
        return arr.map(item => item.name);
    }

    function some(arr){
        arr.map(function (item) {
        } );
    }

    function sortByName(arr){
        return arr.reduce((a,b) => a.age - b.age); 
    }

    function shuffle(arr){
        return arr.sort(() => Math.random()*(-1) + 0.5);
    }

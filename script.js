window.onload = function () {

    let arr = ["HTML", "JavaScript", "CSS"];

    console.log(sortClear(arr));
    console.log(arr);

}


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

function Calculator(){
    this.calculate = function(str){
        str.split(" ");
        if(str[1] == "+"){ return str[0] + str[2]}
        return str[0] - str[2];
    }

    this.addMethod = function(funcName, func){
        
    }
}

// ARRAYS

    // function someOperation(){
    //     let styles = ["Jazz", "Blues"];
    //     styles.push("Rock-n-roll");
    //     styles[Math.round(styles.length/2)] = "Classic";
    //     console.log(styles.shift());
    //     styles.unshift("Raggie");
    //     styles.unshift("Rap");
    // }

    // function sumInput(){
    //     let sum = 0, interValue;

    //     while(true){
    //         if((interValue = prompt("Input value:", 3)) == null){ 
    //             return sum;
    //         }
    //         sum += +interValue;
    //     }


    // }

// STRING

    // function toFirstUpperCase(str){
    //     if(str == null){ return null }
    //     return str[0].toUpperCase() + str.slice(1);
    // }

    // function checkSpam(str){
    //     if(str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")){
    //         return false;
    //     }
    //     return true;
    // }

    // function truncate(str, maxlength){
    //     if(str.length == maxlength){
    //         return str.slice(0, maxlength - 1) + "..."
    //     }
    //     return str;
    // }

    // function extractCurrencyValue(str){
    //     return +str.slice(1);
    // }

// NUMBERS WITH PRECISION ISSUES

    // function sumFloat(){
    //     let number1 = +prompt("Input 1st number", 3);
    //     let number2 = +prompt("Input 2st number", 3);

    //     return number1.toFixed(10) + number2.toFixed (10);
    // }

    // function readCertainNumber(n){
    //     let a = prompt("Input value");
    //     while( a != null && +a != n ){  }
    //     return a;
    // }

    // function readNumber(){
    //     let a;
    //     while( !isFinite(a = prompt("Input value")) ){  };
    //     if(a == null){
    //         return null;
    //     }
    //     return a;
    // }

    // function random(min, max){
    //     return (Math.random() * (max - min) + min);
    // }

    // function randomInt(min, max){
    //     return Math.floor(Math.random() * (max + 1 - min) + min);
    // }


// constuctor for accumulating some values
// function Accumulator(startingValue){

//     this.value = startingValue;

//     this.read = function(){
//         this.value += +prompt("Enter the value:", "3");
//     }

// }

// calculator construction function
// ex: let calcultor = new Calculator; 

// function Calculator(){

//     this.read = function(){
//         this.a = +prompt("Insert a:", "3");
//         this.b = +prompt("Insert b:", "3");
//     }

//     this.sum = function(){
//         return this.a + this.b;
//     }

//     this.mul = function(){
//         return this.a * this.b;
//     }

// }


// not woking :)
// function findOdd(A) {
//     let counter;
//     for(let i = 0; i<A.length; i++){
//       counter = 0;
//       for(let j = A.length-1; j==i-1; j--){
//         if(A[i] == A[j]){
//           counter++;
//         }
//       }
//       if(counter%2 == 1){
//         return A[i];
//       }
//     }
//     return 0;
//   }

// function pow(number, n){
//     if (n < 0) return NaN;
//     if (Math.round(n) != n) return NaN;

//     let result = 1;
//     for(let i = 0; i<n; i++){
//         result *=number;
//     }

//     return result;
// }    

// function pow(number, n){
//     let result = 1;
//     for(let i = 0; i<n; i++){
//         result *=number;
//     }
//     return result;
// }

// function showMin(a,b){
//     if(a>b){
//         return b;
//     }
//     return a;
// }
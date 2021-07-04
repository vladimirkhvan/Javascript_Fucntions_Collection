window.onload = function(){
    



}

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

// function duplicateEncode(word){
//     word = word.toLowerCase();
//     let wordArray = word.split("");
//     let isUnique;

//     for(let i = 0; i<wordArray.length; i++){
//         if(wordArray[i]==")"){
//             wordArray[i] = "rep";
//         }
//     }

//     for(let i = 0; i<wordArray.length; i++){
//         isUnique = true;
//         for(let j = wordArray.length-1; j>i; j--){
//             if(wordArray[i]==wordArray[j]){
//                 wordArray[j] = ")";
//                 isUnique = false;
//             }
//         }
//         if(!isUnique){
//             wordArray[i] = ")";
//         }

//     }

//     for(let i = 0; i<wordArray.length; i++){
//         if(wordArray[i]!=")"){
//             wordArray[i] = "(";
//         }
//     }

//     return wordArray.join("");
// }

// function pow(number, n){
//     if (n < 0) return NaN;
//     if (Math.round(n) != n) return NaN;

//     let result = 1;
//     for(let i = 0; i<n; i++){
//         result *=number;
//     }
    
//     return result;
// }

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// function highAndLow(numbers) {
//     let array = numbers.split(" ");
//     let max = min = array[0];
    
//     for(let i = 0; i<array.length - 1; i++){
//       if(max<+array[i+1]){
//         max=array[i+1];
//       }
//       if(min>+array[i+1]){
//         min=array[i+1];
//       }
//     }
    
//     return `${max} ${min}`;
//   }

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

// function showElementaryNumbers(){ //shows all elementary numbers up to 100
//     let isElementary;   //boolean value

//     for(let i = 2 ; i<100; i++){   
//         isElementary = true;
//         for(let k = 2; k<i; k++){
//             if(i%k == 0){
//                 isElementary = false;   //if false => number is not elementary
//             }
//         }
//         if(isElementary){
//             console.log(`number ${i} is an elementary number`);
//         }
//     }
// }

function sumToForLoop(number){
    let sum = 0;
    for(let i = 1; i <= number; i++){
        sum += i;
    }
    return sum;
}

function sumToRecursion(number){
    if(number == 1){
        return number;
    }
    return number + sumToRecursion(number - 1);
}

function sumToArithmeticSequence(number){
    return (number/2)*(1+number);
}

function factorial(number){
    if(number == 1){
        return 1;
    }
    return number*factorial(number-1);
}

function fib(number){

    if(number < 3){
        return 1;
    }
    return fib(number - 1) + fib(number - 2); 
}

function fibForLoop(number){

    if(number<3){
        return 1;
    }

    let first = 1, second = 1, result;

    for(let i = 3; i <= number; i++){
        result = first + second;
        first = second;
        second = result;
    }
    return result;
}

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };
  
function printList(list){
    if(list != null){
        console.log(list.value);
        printList(list.next);
    }
}

function printListForLoop(list){
    let temp = list;
    while(temp){
        console.log(temp.value);
        temp = temp.next;
    }
}

function printReverseList(list) {

    if (list.next) {
      printReverseList(list.next);
    }
  
    console.log(list.value);
  }

  function printReverseList(list) {
    let arr = [];
    let temp = list;
  
    while (tmp) {
      arr.push(tmp.value);
      temp = tmp.next;
    }
  
    for (let i = arr.length - 1; i >= 0; i--) {
      console.log( arr[i] );
    }
  }
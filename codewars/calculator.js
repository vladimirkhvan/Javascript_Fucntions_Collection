const Calculator = function () {
    this.evaluate = string => {

        let array = string.split(" ");

        let postfix = infixToPostfix(array);

        return evaluatePostfix(postfix);
    }
};

function evalMinus(arr) {

    let index;
    let from = 0;

    while ((index = arr.indexOf("-", from)) != -1) {
        if (arr[index] == "(") {
            
        }
        arr[index + 1] *= -1;
    }

}


function infixToPostfix(array) {

    let precedence = new Map([
        ["+", 5],
        ["-", 5],
        ["*", 4],
        ["/", 4],
    ])

    let stack = [];
    let postfix = [];

    stack.push("(");

    array.push(")");

    for (let i = 0; i < array.length; i++) {

        if (array[i] == "(") {
            stack.push(array[i]);
            continue;
        }

        if (array[i] == ")") {

            let popingElement;

            while ((popingElement = stack.pop()) != "(") {
                postfix.push(popingElement);
            }
            continue;
        }

        if (precedence.has(array[i])) {

            for (let j = stack.length - 1; j >= 0; j--) {
                if (stack[j] == "(" || precedence.get(array[i]) <= precedence.get(stack[j])) {
                    stack.push(array[i]);
                    break;
                }
                postfix.push(stack.pop());
            }
            continue
        }

        postfix.push(array[i]);

    }

    return postfix;
}

function evaluatePostfix(postfixArr) {

    console.log(postfixArr);

    let stack = [];
    let a, b;

    for (let i = 0; i < postfixArr.length; i++) {
        console.log(stack);

        let operation = {
            ["+"](a, b) { return b + a; },
            ["-"](a, b) { return b - a; },
            ["*"](a, b) { return b * a; },
            ["/"](a, b) { return b / a; },
        }

        if (postfixArr[i] in operation) {
            a = +stack.pop();
            b = +stack.pop();
            stack.push(operation[postfixArr[i]](a, b));
            continue;
        }

        stack.push(postfixArr[i]);
    }

    return stack[0];
}


//


function evalMinus(arr) {
    
    for(let i = 0; i < arr.length; i++){

    }

}

let calculate = new Calculator;

arr = ("1-2-(5-3*(33-3*4)))").split("");

let from = 0;

console.log(evalMinus(arr, from));

{

    let index;

    if((index = arr.indexOf("-", from)) == -1){
        return arr;
    }

    if(typeof(+arr[index + 1]) == "number"){
        arr[index+1] *= -1;
    }

    if(arr[index+1] == "("){
        
    }

    let index;
    let from = 0;

    while ((index = arr.indexOf("-", from)) != -1) {
        if (arr[index] == "(") {

        }
        arr[index + 1] *= -1;
    }

}
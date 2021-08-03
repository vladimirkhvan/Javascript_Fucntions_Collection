function expand(expr) {
    let expression = expr.split("^")[0];
    let degree = expr.split("^")[1];
    console.log(expression);
    console.log(degree);

    expression = expression.split("");
    expression.pop();
    expression.shift();
    console.log(expression);

    let a, x, b, sign;



}

function multiply(a, b){
    
}

function sum(a, b){

}

function hash(coefficient, power, x){
    return coefficient.toString() + x + "^" + power;
}

function dehash(string, coefficient, power){

    power = +string.split("^")[1];

    coefficient = string.split("^")[0].match(/(\d+)/)[0];

    if(coefficient[0] == "-"){
        coefficient *= -1;
    }

    return [coefficient, power];
}


// 12a^2
// a^4

// element should have power and coeff behind it


//          x + 1
//          1 + 0
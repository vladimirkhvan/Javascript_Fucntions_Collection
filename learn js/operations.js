// constuctor for accumulating some values
function Accumulator(startingValue){

    this.value = startingValue;

    this.read = function(){
        this.value += +prompt("Enter the value:", "3");
    }

}

// calculator construction function
// ex: let calcultor = new Calculator; 

function Calculator(){

    this.read = function(){
        this.a = +prompt("Insert a:", "3");
        this.b = +prompt("Insert b:", "3");
    }

    this.sum = function(){
        return this.a + this.b;
    }

    this.mul = function(){
        return this.a * this.b;
    }

}

function pow(number, n){
    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    let result = 1;
    for(let i = 0; i<n; i++){
        result *=number;
    }

    return result;
}    

function pow(number, n){
    let result = 1;
    for(let i = 0; i<n; i++){
        result *=number;
    }
    return result;
}

function showMin(a,b){
    if(a>b){
        return b;
    }
    return a;
}
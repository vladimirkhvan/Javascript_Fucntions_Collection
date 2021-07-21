// FUNCTIONS NFE

function makeCounter() {
    let count = 0; // counter.count = 0;

    function counter() {
        return count++
    }

    counter.set = function (number) {
        count = number;
    }

    counter.decrease = function () {
        count--;
    }

    return counter;
}

//

function sum(number) {
    let sum = number;
    function func(number2) {
        sum += number2;
        return func;
    }

    func[Symbol.toPrimitive] = function (hint) {
        return hint == "string" ? `{name: "${this.name}"}` : sum;
    }

    return func;
}
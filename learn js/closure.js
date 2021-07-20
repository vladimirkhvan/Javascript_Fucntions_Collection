// CLOSURE

function sum(a) {
    return function (b) {
        return a + b;
    }
}

//

/* .. ваш код для inBetween и inArray */

function inBetween(a, b) {
    return function (item) {  // faster way return x >= a && x <= b;
        if (item >= a && item <= b) {
            return true;
        }

        return false;
    }
}

function inArray(arr) {
    return function (item) {
        if (arr.includes(item)) {
            return true;
        }

        return false;
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

alert(arr.filter(inBetween(3, 6))); // 3,4,5,6

alert(arr.filter(inArray([1, 2, 10]))); // 1,2


//

function byField(fieldNameString) {
    return function (current, next) {
        return current[fieldNameString] - next[fieldNameString];
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
users.sort(byField('age'));
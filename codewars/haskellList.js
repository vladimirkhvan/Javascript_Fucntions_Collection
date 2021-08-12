function ArrayComprehension(options) {

    let assert = require('assert');
    let emptyObj = {generator: ""};

    console.log(options);

    if (assert.deepEqual(options, emptyObj)) { return []; }

    let arr = options.generator.split(",");

    if (!options.generator.includes("..")) {
        return arr.map(item => +item);
    }

    if (arr.length == 3 && arr[1] == "..") {
        if (arr[2] >= arr[0]) {

            let step = arr[2] - arr[0];
            let current = arr[0];
            let end = arr.pop();

            while (current != end) {
                arr.push(current);
                current++;
            }
            arr.push(end);
            return arr;

        }
        return [];
    }



    console.log(options);
}
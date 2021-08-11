function ArrayComprehension(options) {

    console.log(options);

    if (options.generator == '') { return []; }

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
// decorators and call forwarding

function cachingDecorator(func) {
    let cache = new Map();

    return function (x) {
        if (cache.has(x)) {    // если кеш содержит такой x,
            return cache.get(x); // читаем из него результат
        }

        let result = func(x); // иначе, вызываем функцию , let result = func.call(this, x); for methods of obj

        cache.set(x, result); // и кешируем (запоминаем) результат
        return result;
    };
}

//

function cachingDecorator(func, hash) {
    let cache = new Map();
    return function () {
        let key = hash(arguments); // (*)
        if (cache.has(key)) {
            return cache.get(key);
        }

        let result = func.call(this, ...arguments); // (**)

        cache.set(key, result);
        return result;
    };
}

function hash(args) {
    return args[0] + ',' + args[1]; // [].join.call(arguments) to undefined number of args
}

//

function spy(func) {

    function wrapper() {
        wrapper.calls.push(hash(arguments));
        return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}

function hash(args) {
    return "call: " + [].join.call(...args);
}

//

function delay(func, delayTime) {
    return function () {
        setTimeout.call(() => func.apply(this, arguments), delayTime)
    }
}

//

function debounce(func, minTimeBreak) {
    let currentTime, lastCallTime = Date.now();
    function wrapper() {
        currentTime = Date.now();
        if (currentTime.getTime() - lastCallTime.getTime() > minTimeBreak) {
            lastCallTime = Date.now();
            func.apply(this, arguments);
        }
    }

    return wrapper;
}

function debounce(f, ms) {

    let isCooldown = false;

    return function () {
        if (isCooldown) return;

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => isCooldown = false, ms);
    };

}

//

function throttle(f, ms) {

    let isCooldown = false;
    let lastArguments;

    return function () {

        if (isCooldown) {
            lastArguments = arguments;
            lastThis = this;
            return;
        };

        f.apply(this, arguments);

        isCooldown = true;

        setTimeout(() => {
            if (lastArguments) {
                f.apply(lastThis, lastArguments);
                lastArguments = lastThis = null;
            }
            isCooldown = false
        }, ms);
    };

}
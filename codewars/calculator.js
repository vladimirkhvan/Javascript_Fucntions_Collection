const Calculator = function () {
    this.evaluate = string => {

        let precedence = new Map([
            ["+", 5],
            ["-", 5],
            ["*", 4],
            ["/", 4],
        ])

        let array = string.split(" ");
        array.push(")");

        let stack = [];
        let postfix = [];

        stack.push("(");

        for (let i = 0; i < array.length; i++) {

            let popingElement;

            if (array[i] == "(") {
                stack.push(array[i]);
                continue;
            }

            if (typeOf(+array[i]) == "number") {
                postfix.push(+array[i]);
                continue;
            }

            if (array[i] == ")") {
                while ((popingElement = stack.pop()) != "(") {
                    postfix.push(popingElement);
                }
                continue;
            }

            while (array[i] != "(") {
                for (let j = stack[stack.length - 1]; j >= 0; j--) {
                    
                }
                postfix.push(popingElement);
            }

        }

    }
};
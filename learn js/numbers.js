// NUMBERS WITH PRECISION ISSUES

    function sumFloat(){
        let number1 = +prompt("Input 1st number", 3);
        let number2 = +prompt("Input 2st number", 3);

        return number1.toFixed(10) + number2.toFixed (10);
    }

    function readCertainNumber(n){
        let a = prompt("Input value");
        while( a != null && +a != n ){  }
        return a;
    }

    function readNumber(){
        let a;
        while( !isFinite(a = prompt("Input value")) ){  };
        if(a == null){
            return null;
        }
        return a;
    }

    function random(min, max){
        return (Math.random() * (max - min) + min);
    }

    function randomInt(min, max){
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
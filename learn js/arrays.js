// ARRAYS

    function someOperation(){
        let styles = ["Jazz", "Blues"];
        styles.push("Rock-n-roll");
        styles[Math.round(styles.length/2)] = "Classic";
        console.log(styles.shift());
        styles.unshift("Raggie");
        styles.unshift("Rap");
    }

    function sumInput(){
        let sum = 0, interValue;

        while(true){
            if((interValue = prompt("Input value:", 3)) == null){ 
                return sum;
            }
            sum += +interValue;
        }


    }
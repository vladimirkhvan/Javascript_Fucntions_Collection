// SET TIMEOUT SET INTERVAL

function printNumbers(from, to) {
    let current = from;

    let interval = setInterval(() => {
            console.log(current);
            if (current == to) { clearInterval(interval) }
            current++;
        }, 1000);
}

function printNumbersTimeout(from, to) {
    let current = from;

    setTimeout(function time(){
            console.log(current);
            if(current < to){
                current++;
                setTimeout(time, 1000);
            }
        }, 1000);

}
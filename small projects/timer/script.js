let start = document.getElementById("startBtn");
let stop = document.getElementById("stopBtn");
let reset = document.getElementById("resetBtn");

let timer = document.getElementById("timer");

let time = 0;
let interval = null;

start.onclick = function(){
    if(interval == null){
        interval = setInterval(setTime, 10);
    }
}

stop.onclick = function(){
    clearInterval(interval);
    interval = null;
}

reset.onclick = function(){
    time = 0;   
    setTime();
}

function setTime(){

    let centisecond = 0, seconds = 0, minutes = 0;

    let tempTime = time;

    if(tempTime > 6000){
        minutes = Math.floor(tempTime/6000);
        tempTime %= 6000;
    }

    if(tempTime > 100){
        seconds = Math.floor(tempTime/100);
        tempTime %= 100;
    }

    centisecond = tempTime;
    centisecond = centisecond > 9 ? centisecond : `0${centisecond}`;
    seconds = seconds > 9 ? seconds : `0${seconds}`;
    minutes = minutes > 9 ? minutes : `0${minutes}`;

    time++;

    timer.innerHTML = `${minutes}:${seconds}:${centisecond}`;
}
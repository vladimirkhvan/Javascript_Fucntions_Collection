let clock = document.getElementById("clock");

let timerId = setInterval(setClockTime, 100);

function setClockTime(){

    let date = new Date();

    let hours = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
    let minutes = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
    let seconds = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;

    clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;

}


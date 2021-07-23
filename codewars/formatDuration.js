function formatDuration(seconds) {

    if(seconds == 0){
        return "now";
    }

    let yearDayHourMinSec = [3600*24*365, 3600*24, 3600, 60, 1];

    let arr = [];

    for(let i = 0; i < 5; i++){
        arr.push(Math.floor(seconds/yearDayHourMinSec[i]));
        seconds -= yearDayHourMinSec[i]*arr[i];
    }

    arr = formater(arr);
    
    if(arr.length < 3){
        if(arr.length == 1){
            return arr[0];
        }
        return `${arr[0]} and ${arr[1]}`
    }

    for(let i = 0; i < arr.length - 2; i++){
        arr[i] += ", ";
    }
    arr[arr.length - 2] += " and ";

    return arr.join("");
}

function formater(arr){
    let durationNames = ["year", "day", "hour", "minute", "second"];
    let result = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i] != 0){
            result.push(sAdder(arr[i], `${arr[i]} ${durationNames[i]}`));
        }
    }

    return result;

}

function sAdder(number, string){
    if(number>1){
        return string + "s";
    }
    return string;
}
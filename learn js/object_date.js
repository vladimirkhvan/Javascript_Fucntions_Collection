// object DATE

// new date

let date = new Date( 2012, 1, 20, 3, 12);

alert (date);

//

function getWeekDay(date){
    let day = date.getDay();
    switch(day){
        case 0:
            return "Sunday";
            break;
        case 1:
            return "Monday";
            break;
        case 2:
            return "Tuesday";
            break;
        case 3:
            return "Wednesday";
            break;
        case 4:
            return "Thursday";
            break;
        case 5:
            return "Friday";
            break;
        case 6:
            return "Saturday";
            break;
        default:
            return "not a day";
    }
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log( getWeekDay(date) );        // нужно вывести "ВТ"

//

function getLocalDay(date){
    return date.getDay() != 0 ?date.getDay(): 7;
}

let date = new Date(2012, 0, 3);  // 3 января 2012 года
alert( getLocalDay(date) );       // вторник, нужно показать 2

//

function getDateAgo(date, days){
    return (new Date(date.getTime() - days*24*60*60*1000));
}

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

//

function getLastDayOfMonth(year, month){
    let date = new Date(year,month+1, 0);
    return date;
}

console.log(getLastDayOfMonth(2012, 1));

//

function getSecondsToday() {
    let date = new Date();
    return date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
}

console.log(getSecondsToday());

//

function getSecondsToTomorrow() {
    let now = new Date();

    let tommorow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tommorow - now;
    return Math.round(diff / 1000);
}

alert(getSecondsToday());

//

function formatDate(date){

    let differenceDate = Math.round((Date.now() - date.getTime())/1000);

    if(differenceDate > 60*60){
        return `${date.getDate()}.0${date.getMonth()+1}.${date.getFullYear().toString().substr(2, 4)} ${date.getHours()}:${date.getMinutes()}`
    }

    if(differenceDate > 60){
        return `${(new Date).getMinutes() - date.getMinutes()} min. ago`
    }
    
    if(differenceDate > 1){
        return `${(new Date).getSeconds() - date.getSeconds()} sec. ago`
    }

    return "right now";
}

alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

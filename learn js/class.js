
function Clock({ template }) {

    let timer;

    function render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    this.stop = function () {
        clearInterval(timer);
    };

    this.start = function () {
        render();
        timer = setInterval(render, 1000);
    };

}

// into class construction

let clock = new Clock({ template: 'h:m:s' });
clock.start();

class Clock{

    constructor({template}){
        this.template = template;
    }

    timer;
    date = new Date();
    hours = date.getHours();
    mins = date.getMinutes();
    secs = date.getSeconds();

    render(){

        if (hours < 10) hours = '0' + hours;

        if (mins < 10) mins = '0' + mins;

        if (secs < 10) secs = '0' + secs;

        let output = template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop(){
        clearInterval(timer);
    }

    start(){
        render();
        timer = setInterval(render, 1000);
    }
}

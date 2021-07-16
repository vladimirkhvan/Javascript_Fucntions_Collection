

function solutionOld(input, markers) {


    console.log(input);
    console.log(markers);

    let markersIndex = [], newLineIndex = [];

    for (let i = 0; i < input.length; i++) {
        if (markers.includes(input[i])) {
            markersIndex.push(i);
        } else if (input[i] == "\n") {
            newLineIndex.push(i);
        }
    }

    for (let i = 0; i < markersIndex.length; i++) {
        if (markersIndex[i]);
  }

    console.log(markersIndex);
    console.log(newLineIndex);
    input = input.split('');
    console.log(input);

};


function solution(input, markers) {


    console.log(input);

    input = input.split("");

    let go = false;

    for (let i = 0; i < input.length; i++) {
        if (input[i] == "\n") {
            go = false;
            continue;
        }

        if (go) {
            input.splice(i, 1);
            continue;
        }

        if (markers.includes(input[i])) {
            input.splice(i, 1);
            go = true;
        }
    }

    input = input.join("");

    console.log(input);

};


// find indexes of all markes 
// find indexes of all new lines
// take marker index and find nearest bigger new line
// then delete everything in this interval

// if we encounter any marker then delete everything until you find \n
// find all markers indexes and then find \n s 
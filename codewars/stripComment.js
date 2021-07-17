function solution(input, markers) {

    input = input.split("");

    let go = false;
    let inputLength = input.length;

    for (let i = 0; i < inputLength; i++) {
        if (input[i] == "\n") {
            go = false;
            continue;
        }
      
        if (markers.includes(input[i])) {
            go = true;
        }

        if (go) {
            input.splice(i, 1);
            i--;
            inputLength--;
        }

    }
  
    go = true;
    inputLength = input.length;
  
    for (let i = inputLength-1; i >= 0; i--) {
      
      if(input[i] == "\n"){
        go = true;
        continue;
      }
      
      if(input[i] == " " && go){
          input.splice(i, 1);
      } else {
        go = false;
      }

    }
  
    return input.join("");
};  


// find indexes of all markes 
// find indexes of all new lines
// take marker index and find nearest bigger new line
// then delete everything in this interval

// if we encounter any marker then delete everything until you find \n
// find all markers indexes and then find \n s 
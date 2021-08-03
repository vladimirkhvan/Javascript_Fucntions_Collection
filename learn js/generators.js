function* pseudoRandom(previous){
    while(true){
        previous = calculateSeed(previous)
        yield previous;
    }
}

function calculateSeed(previous){
    return previous * 16807 % 2147483647;
}


let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073

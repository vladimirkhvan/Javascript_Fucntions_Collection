function bowlingScore(frames) {
    // Figure out the score!

    let result = 0;
    let lastElemLength = frames.split(" ")[frames.split(" ").length - 1].length;

    frames = frames.replace(/\s/g, '').split("");
    frames = frames.map(item => item == "X" ? 10 : item);

    console.log(frames);

    for (let i = 0; i < frames.length - lastElemLength; i++) {

        if (frames[i] == 10) {
            
            result += +frames[i] + +frames[i + 1];

            if (frames[i + 2] == "/") {
                result += 10 - +frames[i + 1];
            } else {
                result += +frames[i + 2];
            }

            continue;
        }

        if (frames[i] == "/") {
            result += 10 - +frames[i - 1];
            result += +frames[i + 1];
            continue;
        }

        result += +frames[i];
    }

    for (let i = frames.length - lastElemLength; i < frames.length; i++) {

        if (frames[i] == "/") {
            result += 10 - +frames[i - 1];
            continue;
        }

        result += +frames[i];
        
    }

    return result;
}
function sumIntervals(intervals) {  //without considering overlapping
    console.log({ intervals });
    intervals = intervals.map(interval => interval[1] - interval[0]);
    return intervals.reduce((sum, current) => sum + current, 0)
}


function sumIntervals(intervals) {  // considering overlapping
    let arr = [];

    intervals.map(interval => {
        for (let i = interval[0]; i < interval[1]; i++) {
            arr.push(i);
        }
    })

    let set = Array.from(new Set(arr));
    return set.length;
}


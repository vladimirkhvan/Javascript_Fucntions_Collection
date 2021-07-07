var maxSequence = function (arr) {

    let maxSum = 0;
    let sum;

    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }

    if (maxSum <= 0 || arr == null) {
        return 0;
    } else {
        return maxSum;
    }
}

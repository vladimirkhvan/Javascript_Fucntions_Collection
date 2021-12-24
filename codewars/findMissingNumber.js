function missingNo(nums) {
    nums = nums.sort((a, b) => a - b);
    console.log(`nums: ${nums}`);

    return findMissing(0, nums.length, nums);
}

function findMissing(start, end, nums) {

    console.log(`start: ${start}`);
    console.log(`end: ${end} \n`);

    if (start > end) {
        return false;
    }

    let middle = Math.floor((start + end) / 2);

    if (middle != nums[middle] && middle - 1 == nums[middle - 1]) {
        console.log(`result: ${middle} \n`);
        return middle;
    }

    if (nums[middle] == middle) {
        return findMissing(middle + 1, end, nums);
    }

    return findMissing(start, middle - 1, nums);
}
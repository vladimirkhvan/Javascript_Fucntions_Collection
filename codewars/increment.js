function incrementer(nums) {
    return nums.map((item, index) => (String(item + index + 1).split(""))).map( item => Number(item[item.length-1]));
}
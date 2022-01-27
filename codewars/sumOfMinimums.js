function sumOfMinimums(arr) {
    let tempArr = arr;
    tempArr = tempArr.map(item => Math.min(...item));
    
    return tempArr.reduce((sum, current) => sum + current, 0)
  }
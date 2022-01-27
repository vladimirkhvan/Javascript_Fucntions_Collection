function largestPairSum (numbers) {
    let tempArr = numbers;
    let a = Math.max(...tempArr)
    
    tempArr.splice(tempArr.indexOf(Math.max(...tempArr)), 1);

    return a + Math.max(...tempArr);
  }
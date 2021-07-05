function sumTwoSmallestNumbers(numbers) {  
    let smallestNumber = numbers[0], preSmallestNumber = numbers[1];
    
    for(let i = 2; i<numbers.length; i++){
      if(smallestNumber> numbers[i]){
        
        if(smallestNumber<preSmallestNumber){
          preSmallestNumber = smallestNumber;
        }
        
        smallestNumber = numbers[i];
        
      } else if(preSmallestNumber> numbers[i]){
        preSmallestNumber = numbers[i];
      }
    }
    return smallestNumber + preSmallestNumber;
  }
  
  
function solve(stones) {
  
    return stones.split("").reduce((sum, stone, index, array) => {
      if(stone == array[index + 1] && index != array.length){
        return sum+1;
      }
      return sum;
    }, 0);
    
  }
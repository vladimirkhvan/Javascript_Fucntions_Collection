function prime(num) {
    let result = [];
    
    for(let i = 2; i <= num; i++){
      if(isPrime(i)){
        result.push(i);
      }
    }
    
    return result;
  }
  
  function isPrime(num) {
      for(let i = 2; i <= Math.sqrt(num); i++)
          if(num % i === 0) return false; 
      return num > 1;
  }
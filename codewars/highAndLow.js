function highAndLow(numbers) {  //basic func without .min() && .max() 
    let array = numbers.split(" ");
    let max = min = array[0];
    
    for(let i = 0; i<array.length - 1; i++){
      if(max<+array[i+1]){
        max=array[i+1];
      }
      if(min>+array[i+1]){
        min=array[i+1];
      }
    }
    
    return `${max} ${min}`;
  }
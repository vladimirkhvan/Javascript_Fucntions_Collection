function removeZeros(array) {
    // Sort "array" so that all elements with the value of zero are moved to the
    // end of the array, while the other elements maintain order.
    // [0, 1, 2, 0, 3] --> [1, 2, 3, 0, 0]
    // Zero elements also maintain order in which they occurred.
    // [0, "0", 1, 2, 3] --> [1, 2, 3, 0, "0"]
    
    // Do not use any temporary arrays or objects. Additionally, you're not able
    // to use any Array or Object prototype methods such as .shift(), .push(), etc
    
    // the correctly sorted array should be returned.
    
    console.log(array);
    
    let counter = 0;
    
    for(let i = 0; i < array.length; i++){
      if(+array[i] == 0 && array[i] !== false && array[i] !== null){
        counter++;
      }
    }
    
    console.log(counter);
    
     for(let i = 0; i < array.length - counter; i++){
      if(+array[i] == 0 && array[i] !== false && array[i] !== null){
        for(let j = i; j < array.length - 1; j++){
          let temp = array[j];
          array[j] = array[j + 1];
          array[j + 1] = temp;
        }
        i--;
      }
    }
    
    
    
    
    
    return array;
  }
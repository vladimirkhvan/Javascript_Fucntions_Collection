var moveZeros = function (arr) {
  
    let counter = 0;
    
    for(let i = 0; i<arr.length; i++){
      if(arr[i] === 0){
        counter++;
      }
    }
    
    arr = arr.filter(element => element !== 0);
    
    for(let i = 0; i<counter; i++){
      arr.push(0);
    }

    return arr;
  }
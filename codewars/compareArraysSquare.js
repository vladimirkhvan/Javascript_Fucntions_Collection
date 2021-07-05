// check if 2nd array has squared element of 1st
function comp(array1, array2){
  
    if(array1 == null || array2 == null){
          return false;
      }
    
    if(array1.length !=array2.length){
      return false;
    }
    
    array1 = array1.filter(function(item, pos) {
      return array1.indexOf(item) == pos;
    });
    
    array2 = array2.filter(function(item, pos) {
      return array2.indexOf(item) == pos;
    });
    
      for(let i = 0; i<array1.length; i++){
    
         array1[i] = array1[i]**2;
        
      }
    
    console.log(array1.sort().join());
    console.log(array2.sort().join());
    
    
    if(array1.sort().join() == array2.sort().join()){
      return true;
    }
    
    return false;
    
  }
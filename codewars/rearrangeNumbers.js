var maxRedigit = function(num) {
    if(typeof(num)!="number" || num<=0 || String(num).length != 3){
      return null;
    }
    
    return +(String(num)).split("").sort((a,b)=> b-a).join("");
  };
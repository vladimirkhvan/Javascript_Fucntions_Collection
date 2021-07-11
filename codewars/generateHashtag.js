console.log(str);
  
  if(str === "" || str === " "){
      return false
  }

  str = str.split(" ");
  
  console.log(str);
  
  
  for(let i = 0; i<str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  
   console.log("#" + str.join(""));
  
  if( str.length > 140 ){
    return false;
  }
  
  if( str.length > 140 ){
    return false;
  }
  
  return "#" + str.join("");
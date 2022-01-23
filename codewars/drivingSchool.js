function cost (mins) { 
    return mins <= 60 ? 30 : 30 + (mins/30 - Math.floor(mins/30) <= 5/30 ? Math.floor((mins-60)/30) : Math.ceil((mins-60)/30))*10;
  } 
    
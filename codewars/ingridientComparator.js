function cakes(recipe, available) {
    let recipeValues = Object.values(recipe);
    let availableValues = Object.values(available);
    let recipeKeys = Object.keys(recipe);
    let availableKeys = Object.keys(available);
    let ratio = [];
    
    let a = Object.entries(recipe);
     let b = Object.entries(available);
    
    console.log(recipeKeys.join(", "));
    console.log(availableKeys.join(", "));
    
    for(let i = 0; i<recipeKeys.length; i++){
      if(!(availableKeys.includes(recipeKeys[i]))){
        return 0;
      }
    }
    
    for(let i = 0; i<recipeValues.length; i++){
      ratio[i] = Math.floor(availableValues[availableKeys.indexOf(recipeKeys[i])]/recipeValues[i]);
    }
    
    console.log(ratio.join(", "));
    
    let availableUnits = ratio[0];
    
    for(let i = 1; i<ratio.length; i++){
      if(availableUnits > ratio[i]){
        availableUnits = ratio[i];
      }
    }
    
    return availableUnits;
  }
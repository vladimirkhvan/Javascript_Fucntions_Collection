function getSum( a,b )
{
  let sum = 0;
  
  if(a>b){
    a += b;
    b = a - b;
    a = a - b; 
  }
  
   for(let i = a; i<=b; i++){
     sum +=i;
   }
  return sum;
}
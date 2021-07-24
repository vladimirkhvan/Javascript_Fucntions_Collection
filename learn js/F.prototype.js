function Rabbit() {}

Rabbit.prototype = {
  eats: true,
  // delete constructor or moderate it someway to get broken case
  constructor: Rabbit, // working case
};

let obj = new Rabbit(); // working case

let obj2 = new obj.constructor();
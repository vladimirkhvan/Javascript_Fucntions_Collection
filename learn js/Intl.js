let animals = ["тигр", "ёж", "енот", "ехидна", "АИСТ", "ЯК"];

let collator = Intl.Collator("ru");
animals.sort((a, b) => collator.compare(a,b));

alert( animals ); // АИСТ,ёж,енот,ехидна,тигр,ЯК
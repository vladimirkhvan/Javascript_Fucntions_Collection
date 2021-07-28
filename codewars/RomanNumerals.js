class RomanNumerals {

    static toRoman(number) {
        if (number == 0) {
            return 0;
        }
      
      let romanNumerals = new Map([
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"],
    ]);

        let one = 1, five = 5, ten = 10;

        let result = [];

        for (let i = number.toString().length - 1; i >= 0; i--) {

            console.log(i);

            if(i > number.toString().length - 4){

                result.push(completeRoman(+number.toString()[i], romanNumerals.get(one), romanNumerals.get(five), romanNumerals.get(ten)));

            } else {

                for(let j = 0; j < Math.floor(number/1000); j++){
                    result.push("M");
                }

            }
            one *= 10;
            five *= 10;
            ten *= 10;
        }

        return result.reverse().join("");
    }

    static fromRoman(romanNumString) {

        let result = 0;

        let romanNumerals = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        }
        for(let i = 0; i< romanNumString.length; i++){
            if(i == romanNumString.length - 1){
                result += romanNumerals[romanNumString[i]];
                break;
            }
            if(romanNumerals[romanNumString[i]] >= romanNumerals[romanNumString[i + 1]]){
                result += romanNumerals[romanNumString[i]];
            } else {
                result += (romanNumerals[romanNumString[i + 1]] - romanNumerals[romanNumString[i]]);
                i++;
            }
        }

        return result;
    }
}

function completeRoman(number, one, five, ten) {
    switch (number) {
        case 1:
            return one;
        case 2:
            return one + one;
        case 3:
            return one + one + one;
        case 4:
            return one + five;
        case 5:
            return five;
        case 6:
            return five + one;
        case 7:
            return five + one + one;
        case 8:
            return five + one + one + one;
        case 9:
            return one + ten;
        default:
            return "";
    }
}

// more logical solution (not mine)

// TODO: create a RomanNumerals helper object
var numerals = [
    ['M', 1000],
    ['CM', 900],
    ['D', 500],
    ['CD', 400],
    ['C', 100],
    ['XC', 90],
    ['L', 50],
    ['XL', 40],
    ['X', 10],
    ['IX', 9],
    ['V', 5],
    ['IV', 4],
    ['I', 1]
  ];
  
  RomanNumerals = {
    toRoman: function(v) {
      var s = '';
      numerals.forEach(function(n) {
        while (v >= n[1]) {
          s += n[0];
          v -= n[1]; 
        }
      });
      return s;
    },
    fromRoman: function(s) {
      var v = 0;
      numerals.forEach(function(n) {
        while (s.substr(0, n[0].length) == n[0]) {
          s = s.substr(n[0].length);
          v += n[1];
        }
      });
      return v;
    }
  };
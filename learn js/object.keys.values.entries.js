
// object .keys .values .entries

    function sumSalaries(salaries){

        let sumSalaries = 0;

        for(let salary of Object.values(salaries)){
            sumSalaries += salary;
        }

        return sumSalaries;
    }

    function count(user){
        return Object.values(user).length;
    }
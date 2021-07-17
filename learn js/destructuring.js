//destructuring

    let user = { name: "John", years: 30 };

    let { name, age: years, isAdmin = false } = user;

    alert(name); // John
    alert(age); // 30
    alert(isAdmin); // false

    //

    let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
    };

    function topSalaries(salaries) {

        let salariesArr = Object.entries(salaries);
        let { topSalaryName = null, topSalary = 0 } = salariesArr[0];

        for (let i = 1; i < salariesArr.length; i++) {
            if (topSalary < salariesArr[i][1]) {
                topSalaryName = salariesArr[i][0];
            }
        }

        return topSalaryName;
    }


    // not mine implementation
    function topSalary(salaries) {

        let max = 0;
        let maxName = null;

        for (const [name, salary] of Object.entries(salaries)) {
            if (max < salary) {
                max = salary;
                maxName = name;
            }
        }

        return maxName;
    }
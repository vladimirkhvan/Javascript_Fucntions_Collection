// MAP SET

    function unique(arr) {
        return Array.from(new Set(arr));
    }

    function aclean(arr){
        arr = arr.map(word => 
            {
                return word.toLowerCase().split("").sort().join("");
            }
        );

        return Array.from(new Set(arr)); 
    }

// map all words
// sort every word with alph
// make set
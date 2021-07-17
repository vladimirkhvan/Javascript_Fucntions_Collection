// STRING

    function toFirstUpperCase(str){
        if(str == null){ return null }
        return str[0].toUpperCase() + str.slice(1);
    }

    function checkSpam(str){
        if(str.toLowerCase().includes("viagra") || str.toLowerCase().includes("xxx")){
            return false;
        }
        return true;
    }

    function truncate(str, maxlength){
        if(str.length == maxlength){
            return str.slice(0, maxlength - 1) + "..."
        }
        return str;
    }

    function extractCurrencyValue(str){
        return +str.slice(1);
    }
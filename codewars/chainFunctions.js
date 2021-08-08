function chain(obj){
    let result;

    let tempObj = {};

    for(let i = 0; i < Object.entries(obj).length; i++){
        tempObj[Object.entries(obj)[i][0]] = wrapper(Object.entries(obj)[i][1]);
    }

    tempObj.execute = function () {
        return this.result;
    }

    return tempObj;

}
 
function wrapper(func) {

    return function () {
        let obj = Object.assign({}, this);

        if(obj.result == null){

            obj.result = func.call(obj, ...arguments);

        } else {
            let arr = Array.from(arguments);
            arr.unshift(obj.result);
            obj.result = func.call(obj, ...arr);
        }


        return obj;

    };
}
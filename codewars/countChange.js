countChange(4, [1,2]) // => 3
countChange(10, [5,2,3]) // => 4
countChange(11, [5,7]) //  => 0

function countChange(money, coins){
    let arr = [];
    for(let i = 0; i<coins.length; i++){
        for( let j = i + 1; j < coins.length + 1; j++){
            arr.push(counter(money, coins.slice(i, j)));
        }
    }
    arr = arr.filter(item => item);

    return Array.from(new Set(arr)).length; 
}

function counter(money, coins){ // do not work in case when money can be combined from 1 coin
    let combination = [];
    let moneyCopy = money;
    
    for(let i = 0; i < coins.length; i++){
        //should push object with keys as nominator of coin and value as amount of key
        combination.push(`${coins[i]} ${Math.floor(moneyCopy/coins[i])}`);
        moneyCopy = moneyCopy%coins[i];
    }
    if(moneyCopy == 0){
        return combination;
    }
    return false;
}
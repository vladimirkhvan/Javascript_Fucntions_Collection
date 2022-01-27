const removeConsecutiveDuplicates = s => ( s.split(" ").filter((word, index, arr) => {
    if(index == 0){return true;}
    if(arr[index] == arr[index-1]){return false;}
    return true;
} ).join(" ") )
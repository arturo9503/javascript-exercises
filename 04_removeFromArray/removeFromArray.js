const removeFromArray = function() {
    arr = arguments[0];
    args = Array.from(arguments);
    for (let i = 1  ; i < args.length ; i++){
        val = args[i];
        for (let j = 0 ; j < arr.length ; j++){
            val2 = arr[j];
            if (val === val2){
                arr.splice(j,1);
            }
        }
    }
    return arr;

};

// Do not edit below this line
module.exports = removeFromArray;

const sumAll = function(a,b) {
    if (a < 0 || b < 0){
        return 'ERROR';
    }
    if (typeof(a) != 'number' || typeof(b) != 'number'){
        return 'ERROR';
    }
    let min = Math.min(a,b);
    let sum = 0;
    for (let i = 0 ; i <= Math.abs(a - b) ; i++){
        sum += min + i;
    }
    return sum;

};

// Do not edit below this line
module.exports = sumAll;

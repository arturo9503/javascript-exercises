const fibonacci = function(a) {
    if (a < 0){
        return 'OOPS';
    }
    let n1 = 1;
    let n2 = 1;
    if (a == 1){
        return n1;
    }
    if (a == 2){
        return n2;
    }
    let n3;

    for (let i = 3 ; i <= a ; i++){
        n3 = n1 + n2;
        n1 = n2;
        n2 = n3;
    }
    return n3;

};

// Do not edit below this line
module.exports = fibonacci;

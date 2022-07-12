const palindromes = function (str) {
    let str2 = "";
    for (let i = 0 ; i < str.length ; i++){
        if (str[i].toUpperCase() != str[i].toLowerCase()){
            str2 += str[i];
        }
    }
    str = str2;
    len = str.length;
    let mid = (str.length - 1)/2;
    let isPalindrome = true;
    for (let i = 0 ; i <= mid ; i++){
        let ch1 = str[i].toLowerCase();
        let ch2 = str[len - i -1].toLowerCase();
        if (ch1 != ch2){
            isPalindrome = false;
        }
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;

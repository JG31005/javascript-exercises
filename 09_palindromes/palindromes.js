const palindromes = function (mystring) {
    let stringnew ='';
    
    for(let i =mystring.length ; i>0; i--){

        stringnew = stringnew + mystring.substr( (-i), 1);
    }
    if(stringnew == mystring){
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;

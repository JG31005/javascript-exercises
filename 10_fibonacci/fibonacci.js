const fibonacci = function(num) {
    if(num<0){
        return "OOPS";
    }
    let fibonacci = [1,1];
    fibonacci.length = num;
    //console.log(fibonacci.length);
    for(let i =2; i<fibonacci.length; i++){
        thenum =fibonacci[i-1] + fibonacci[i-2];
        fibonacci[i]= thenum;
        console.log(fibonacci[i]);
    }
    console.log(fibonacci);
    return fibonacci[num -1];
};

// Do not edit below this line
module.exports = fibonacci;

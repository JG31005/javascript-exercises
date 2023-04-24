const fibonacci = function(num) {
    let fibonacci = [1,1];
    fibonacci.length = num;
    for(let i =3; i<fibonacci.length; i++){
        fibonacci[i]= fibonacci[i-1]+ fibonacci[i-2];
    }
    return fibonacci[num];

};

// Do not edit below this line
module.exports = fibonacci;

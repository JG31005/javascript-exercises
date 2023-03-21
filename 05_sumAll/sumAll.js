const sumAll = function(num1,num2) {
if(num1 < 0 || num2 < 0 || typeof num1 != 'number' || typeof num2 != 'number'){
    return 'ERROR';
}
let totalsum=0;
if(num1 < num2){
    for(let i = num1 ; i <= num2 ; i++){
        totalsum += i ;
    }
}else if(num1 > num2){
    for(let j = num2 ; j <=num1 ; j++){
        totalsum += j ;
    }
}
return totalsum;
};

// Do not edit below this line
module.exports = sumAll;

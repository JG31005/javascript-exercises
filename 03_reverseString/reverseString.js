const reverseString = function(String) {
let stringHold = [] ;
let reversedString = '';
for(let i = 0; i < String.length; i++){
    stringHold[i]= String.charAt(String.length -1 - i);
}
reversedString = stringHold.join('');
return reversedString;
};

// Do not edit below this line
module.exports = reverseString;

const repeatString = function(string,num) {
if(num < 0){
    return 'ERROR'
}else {
   let fullString = '';
   for(let i = 0; i < num; i++){
      fullString = fullString + string ; 
    }
    return fullString;
};
};
// Do not edit below this line
module.exports = repeatString;

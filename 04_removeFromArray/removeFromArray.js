const removeFromArray = function(array, ...manyargs) {
const filtered = array.filter(checkfilter);
function checkfilter(arg){
    let eqlstatus = '';
    function checkeql(thearg){
        if(arg == thearg && arg === thearg){
            eqlstatus = 'eql';
        }
    }
    manyargs.forEach(checkeql);
    if(eqlstatus != 'eql'){
        return arg;
    }
}
return filtered;
};

// Do not edit below this line
module.exports = removeFromArray;

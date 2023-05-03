const getTheTitles = function(array) {
let titlearr= [];
for(const obj of array){
    titlearr.push(obj.title);
}
return titlearr;
};

// Do not edit below this line
module.exports = getTheTitles;

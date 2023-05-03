const findTheOldest = function(pplarr) {
    const dte = new Date();
const oldest = pplarr.reduce((accumulator,currrentvalue) =>{
    if(accumulator.yearOfDeath == undefined){
        accumulator.yearOfDeath = dte.getfullyear();
    }
    if(currrentvalue.yearOfDeath == undefined){
        currrentvalue.yearOfDeath =dte.getfullyear();
    }
    age1= accumulator.yearOfDeath - accumulator.yearOfBirth;
    age2 = currrentvalue.yearOfDeath - currrentvalue.yearOfBirth;
    return age2 > age1 ? currrentvalue : accumulator;
})
return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

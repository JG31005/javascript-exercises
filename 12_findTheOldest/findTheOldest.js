const findTheOldest = function(pplarr) {
    
const oldest = pplarr.reduce((accumulator,currrentvalue) =>{

    age1= accumulator.yearOfDeath - accumulator.yearOfBirth;
    age2 = currrentvalue.yearOfDeath - currrentvalue.yearOfBirth;
    return age2 > age1 ? currrentvalue : accumulator;
})
return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

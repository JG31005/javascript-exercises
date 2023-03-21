const convertToCelsius = function(Fdegree) {
  let Cdegree = (Fdegree -32) * (5/9);

  if( Cdegree % 1 == 0){
    return Cdegree;
  }else return +(Cdegree.toFixed(1));
};

const convertToFahrenheit = function(Cdegree) {
  let Fdegree = (Cdegree * (9/5)) +32;

  if(Fdegree % 1 ==0){
    return Fdegree;
  }else return +(Fdegree.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
